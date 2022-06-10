/* Hooks */
import { useSearchUser } from '@hooks/useSearchUserName'

// globals
import { NavPages } from '@components/NavPages'
import { FooterActionButtons } from '@components/FooterActionButtons'
import { GridCards } from '@components/GridCards'
import { CardInfoProfile } from '@components/CardInfoProfile'

// internal
import Wave from '@public/assets/svgs/wave.svg'

/* Internal Images */
import catPerfil from '@public/assets/user/catPerfil.jpg'
import { CardPhoto } from '@components/user/CardPhoto'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { RenderButtonsForUser } from '@components/user/RenderButtonsForUser'
import { HeadInfo } from '@components/HeadInfo'
import { User } from '../models/User';
import { Loading } from '@components/Loading'

export default function UserProfile (props) {
  const { query } = useRouter()
  const userName = query.user?.toString()

  const [user, loading, error] = useSearchUser(userName)

  if (loading) return <Loading/>

  if (error) return <div>Se produjo un error 🤖 , intentelo más tarde</div>

  return (
    <>
      <HeadInfo title={userName} />

      <NavPages titleHeaderPage="Perfil" history={props.history} />

      <main>
        {
          user
            ? <ProfileUser
                userData={user as User}
              />
            : <NotFoundUser userName={userName} />
        }
      </main>

      <FooterActionButtons />
    </>
  )
}

const NotFoundUser = ({ userName }) => (
  <div className="not-found-user">
    <h1>{userName} no fue encontrado</h1>
  </div>
)

interface IProfileUser {
  userData: User
}
const ProfileUser = ({ userData }: IProfileUser) => (
  <>
    <div className="spacing-for-pages">
      <section className="box-profile">
        <div
          style={{
            backgroundImage: 'url(/assets/user/catBanner.jpg)',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
          className="box-profile__content-profile"
        >
          <Wave className="box-profile__wave" />
        </div>

        <div className="info-user-box">
          <div className="info-user-box__box-perfil-photo">
            <Image
              className="info-user-box__perfil-photo"
              src={catPerfil}
              alt="perfil"
            />
          </div>

          <div className="info-user-box__box-user-names">
            <h1 className="info-user-box__name"> {userData.nickname || 'Anonimo'} </h1>
            <p className="info-user-box__user-name">{userData.name}</p>

            {/* <RenderButtonsForUser {...userData} /> */}
          </div>
        </div>
      </section>

      <div className="container-global">
        <p className="box-profile__description-profile">
          {userData.biography}
        </p>
        <section className="section-friends">
          <GridCards>
            <CardInfoProfile number={200} textCard="Seguidos" />
            <CardInfoProfile number={100} textCard="Seguidores" />
            <CardInfoProfile number={10} textCard="Publicaciones" />
          </GridCards>

          {/* <RenderButtonsForUser {...UserState} /> */}
        </section>

        <GridCards>
          <CardPhoto />
          <CardPhoto />
          <CardPhoto />
          <CardPhoto />
          <CardPhoto />
          <CardPhoto />
          <CardPhoto />
          <CardPhoto />
          <CardPhoto />
          <CardPhoto />
          <CardPhoto />
        </GridCards>
      </div>
  </div>
  </>
)
