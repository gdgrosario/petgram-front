import { Button } from "@components/user/Button";
import { AuthContext } from "@context/ContextProvider";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useState, useEffect } from "react";
import { Friend, User } from "../../models/User";
import { setCookie } from "../../helpers/getCookies";
import { Follow, UnFollow } from "@services/Followers";
import { useOwner } from "../../hooks/useOwner";

interface IProfileUser {
  userData: User;
}
export const RenderButtonsForUser = ({ userData }: IProfileUser) => {
  const { user, setUser } = useContext(AuthContext);

  const isOwner = useOwner(userData.id);
  const router = useRouter();

  const followeds: Friend[] = (user && user.followeds) || [];

  const [isFollowed, setIsFollowed] = useState(
    followeds.some((friend) => friend.id === userData.id)
  );

  /**
   * SetUser es llamado para actualizar el estado global del usuario,
   * ya que no se esta actualizando en tiempo real en el contexto,
   * hay que actualizar sus datos cada que se cambie algo.
   *
   * Esto para que propiedades que dependen de la actualizacion de
   * los datos del usuario, se actualicen a pesar de que no se
   * realice un full refresh de la pagina.
   */
  const handleAction = async (action: "unFollowed" | "follower") => {
    if (!user) {
      router.push("/Auth/SignIn");
    }

    if (user && action === "follower") {
      const status = await Follow(userData.id);

      if (status === 200) {
        setIsFollowed(true);
        if (user.followeds) {
          setUser({
            ...user,
            followeds: [
              ...user.followeds,
              {
                id: userData.id,
                name: userData.name,
                nickname: userData.nickname,
                avatar: userData.avatar || "",
              },
            ],
            numberOfFollowed: user.numberOfFollowed + 1,
          });
        } else {
          setUser({
            ...user,
            followeds: [
              {
                id: userData.id,
                name: userData.name,
                nickname: userData.nickname,
                avatar: userData.avatar || "",
              },
            ],
            numberOfFollowed: user.numberOfFollowed + 1,
          });
        }
      }
    }

    if (action === "unFollowed") {
      const status = await UnFollow(userData.id);

      if (status === 200) {
        setUser({
          ...user,
          followeds: user.followeds.filter(
            (friend) => friend.id !== userData.id
          ),
          numberOfFollowed: user.numberOfFollowed - 1,
        });
        setIsFollowed(false);
      }
    }
  };

  const handleCloseSession = () => {
    setCookie("user_token", "", -1);
    router.push("/");
    setUser(null);
  };

  return (
    <div className="info-user-box__box-buttons">
      {isOwner && (
        <>
          <Link href={`/profile/edit`}>
            <a>
              <Button textButtonn="Editar perfil" />
            </a>
          </Link>

          <Button
            textButtonn="Cerrar Sesión"
            onClick={() => handleCloseSession()}
          />
        </>
      )}
      {!isOwner && (
        <>
          {!isFollowed && (
            <Button
              textButtonn="Seguir"
              onClick={() => handleAction("follower")}
            />
          )}

          {!isOwner && isFollowed && (
            <Button
              textButtonn="Dejar de seguir"
              onClick={() => handleAction("unFollowed")}
            />
          )}
        </>
      )}
    </div>
  );
};
