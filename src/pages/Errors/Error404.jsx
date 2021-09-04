import React from 'react'
import './Error404.scss'
import { ReactComponent as ErrorSvg404 } from "assets/svgs/404_two.svg";
import { NavPages } from 'components/NavPages/NavPages';
export const Error404 = (props) => {

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
    )
}

