import { LoadSubRoutes } from 'components/LoadRoutes/Components/LoadSubRroutes';
import React from 'react'

export const LayoutHome = ({routes}) => {
    return (
        <div>
            <h1>
                Layout Home User Auth
            </h1>
            <LoadSubRoutes routes={routes}/>
        </div>
    )
}