import ErrorSvg404 from '@public/assets/svgs/error.svg'
import { NavPages } from '@components/NavPages'
import { HeadInfo } from '@components/HeadInfo'

const Error404 = (props) => {
  return (
    <>
      <NavPages titleHeaderPage="Volver"  />
      <HeadInfo title="404 | Página no encontrada" />
      <main className="container-404">
        <div className="container-404__content">
          <ErrorSvg404 />
          <p className="container-404__text">No se encontro la página</p>
        </div>

        <p className="container-404__error-code">
          Código 404 página no encontrada
        </p>
      </main>
    </>
  )
}

export default Error404
