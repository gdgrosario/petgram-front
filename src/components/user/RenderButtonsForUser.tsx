import { Button } from '@components/user/Button'

export const RenderButtonsForUser = ({ user, isLoading }) => (
    <div className="info-user-box__box-buttons">
      {user && !isLoading && <Button textButtonn="Editar perfil" />}
      {!user && !isLoading && (
        <>
          <Button textButtonn="Seguir" />
          <Button textButtonn="Enviar mensaje" />
        </>
      )}
    </div>
)
