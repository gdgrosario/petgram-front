import ErrorSvg404 from "@public/assets/svgs/error.svg";
import { NavPages } from "@components/NavPages";

const Error404 = (props) => {
  return (
    <>
      <NavPages titleHeaderPage="Volver" history={props.history} />

      <div className="container-404">
        <div className="container-404__content">
          <ErrorSvg404 />
          <p className="container-404__text">No se encontro la página</p>
        </div>

        <p className="container-404__error-code">
          Código 404 página no encontrada
        </p>
      </div>
    </>
  );
};

export default Error404;
