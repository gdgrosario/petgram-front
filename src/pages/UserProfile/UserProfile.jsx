import { useContext } from 'react'
/* Context */
import { AuthContext } from 'context/ContextProvider';

/* Components */

//globals
import { NavPages } from "components/NavPages/NavPages"
import { FooterActionButtons } from 'components/FooterActionButtons/FooterActionButtons'
import { GridCards } from 'components/GridCards/GridCards';
import { CardInfoProfile } from "components/CardInfoProfile/CardInfoProfile"

//internal
import { ReactComponent as Wave } from "assets/svgs/wave.svg";
import { Button } from './components/Button/Button'

/* Internal Images */
import catBanner from './img/catBanner.jpg'
import catPerfil from './img/catPerfil.jpg'
import { CardPhoto } from './components/CardPhoto/CardPhoto';


export const UserProfile = (props) => {
    const { user: UserState } = useContext(AuthContext)

    return (
        <>
            <NavPages titleHeaderPage="Perfil" history={props.history} />

            <section className="box-profile">
                <div style={{ backgroundImage: `url(${catBanner})`, backgroundPosition: 'center', backgroundSize: 'cover' }} className="box-profile__content-profile">
                    <Wave className="box-profile__wave" />
                </div>

                <div className="info-user-box">
                    <div className="info-user-box__box-perfil-photo">
                        <img className="info-user-box__perfil-photo" src={catPerfil} alt="perfil" />
                    </div>

                    <div className="info-user-box__box-user-names">
                        <h1 className="info-user-box__name">Quimera</h1>
                        <p className="info-user-box__user-name">Gata Siamesa</p>

                        <RenderButtonsForUser {...UserState} />
                    </div>
                </div>
            </section>


            <div className="container-global">
                <p className="box-profile__description-profile">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non sunt dicta provident.
                </p>
                <section className="section-friends">
                    <GridCards>
                        <CardInfoProfile number={200} textCard='Seguidos' />
                        <CardInfoProfile number={100} textCard='Seguidores' />
                        <CardInfoProfile number={10} textCard='Publicaciones' />
                    </GridCards>

                    <RenderFollowers {...UserState} />
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


            <FooterActionButtons />
        </>
    )
}

const RenderFollowers = ({ user, isLoading }) => (
    <>
        {
            !user && !isLoading && <p className="section-friends__followers">
                <span className="section-friends__user-friend">carlitos.perro</span> y 19 mascotas más siguen esta cuenta
            </p>
        }
    </>
)

const RenderButtonsForUser = ({ user, isLoading }) => (
    <div className="info-user-box__box-buttons">
        {user && !isLoading && <Button textButtonn="Editar perfil" />}
        {
            !user && !isLoading && <>
                <Button textButtonn="Dejar de seguir" />
                <Button textButtonn="Enviar mensaje" />
            </>
        }

    </div>
)