import { Button } from '@components/user/Button';
import { AuthContext } from '@context/ContextProvider';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { User } from '../../models/User';
import { setCookie } from '../../helpers/getCookies';
interface IProfileUser {
  userData: User;
}
export const RenderButtonsForUser = ({ userData }: IProfileUser) => {
  const { user } = useContext(AuthContext);

  const router = useRouter();

  const handleAction = (action: string) => {
    if (!user) {
      router.push('/Auth/SignIn');
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
          <Button
            textButtonn="Seguir"
            onClick={() => handleAction('follower')}
          />

          {user.email !== userData.email && (
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
