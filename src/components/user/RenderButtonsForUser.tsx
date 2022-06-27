import { Button } from '@components/user/Button';
import { AuthContext } from '@context/ContextProvider';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { User } from '../../models/User';
import { setCookie } from '../../helpers/getCookies';
import { Follow, UnFollow } from '@services/Followers';

interface IProfileUser {
  userData: User;
}
export const RenderButtonsForUser = ({ userData }: IProfileUser) => {
  const { user } = useContext(AuthContext);

  const router = useRouter();

  const followeds: string[] = user.followeds || [];

  const [isFollowed, setIsFollowed] = useState(followeds.includes(userData.id));

  const handleAction = async (action: string) => {
    if (!user) {
      router.push('/Auth/SignIn');
      return;
    }

    if (action === 'follower') {
      const status = await Follow(userData.id);

      status === 200 && setIsFollowed(true);

      return;
    }

    if (action === 'unfollower') {
      const status = await UnFollow(userData.id);

      status === 200 && setIsFollowed(false);

      return;
    }
  };

  const handleCloseSession = () => {
    setCookie('user_token', '', -1);
    router.push('/');
  };

  return (
    <div className="info-user-box__box-buttons">
      {user.email === userData.email && (
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
      {(!user || user.email !== userData.email) && (
        <>
          {!isFollowed && (
            <Button
              textButtonn="Seguir"
              onClick={() => handleAction('follower')}
            />
          )}

          {user.email !== userData.email && isFollowed && (
            <Button
              textButtonn="Dejar de seguir"
              onClick={() => handleAction('unfollower')}
            />
          )}
        </>
      )}
    </div>
  );
};
