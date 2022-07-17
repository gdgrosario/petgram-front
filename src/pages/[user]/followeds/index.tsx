import { useRouter } from 'next/router';
import { Loading } from '@components/Loading';
import { useSearchUser } from '@hooks/useSearchUserName';
import { RenderFollowData } from '@components/followers/RenderFollowData';
import { NotFoundUser } from '@components/NotFoundUser';
import { FollowLayout } from '../../../layout/FollowLayout';

export default function followeds() {
  const router = useRouter();
  const nickName = router.query.user?.toString();
  const { user, loading, error } = useSearchUser(nickName);

  if (loading) return <Loading />;
  if (error) return <div>Se produjo un error 🤖 , intentelo más tarde</div>;
  return (
    <FollowLayout
      nameRoute="Seguidos"
      titleHeaderPage={user ? `Personas que sige ${nickName}` : ''}
    >
      {user ? (
        <RenderFollowData
          numberFollowers={user.numberOfFollowers}
          numberFolloweds={user.numberOfFollowed}
          nickName={user.nickname}
          friends={user.followeds}
        />
      ) : (
        <NotFoundUser userName={nickName} />
      )}
    </FollowLayout>
  );
}
