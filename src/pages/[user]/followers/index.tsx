/* Components */
import { useRouter } from 'next/router';
import { FollowLayout } from '../../../layout/FollowLayout';
import { useSearchUser } from '@hooks/useSearchUserName';
import { Loading } from '@components/Loading';
import { NotFoundUser } from '@components/NotFoundUser';
import { RenderFollowData } from '@components/followers/RenderFollowData';
import { useEffect } from 'react';

export default function followers () {
  const router =  useRouter()
  const nickName = router.query.user?.toString()
  const {user, loading, error} = useSearchUser(nickName)

  if(loading) return <Loading />
  if (error) return <div>Se produjo un error 🤖 , intentelo más tarde</div>;
  
  return (
      <FollowLayout 
        nameRoute="Seguidores" 
        titleHeaderPage={user ? `Seguidores de ${nickName}` : ""}>
       {
        user 
          ? <RenderFollowData
              numberFollowers={user.numberOfFollowers}
              numberFolloweds={user.numberOfFollowed}
              friends={user.followers}
              nickName={user.nickname}
            /> 
          : <NotFoundUser userName={nickName} />
       } 
      </FollowLayout>
  )
}

