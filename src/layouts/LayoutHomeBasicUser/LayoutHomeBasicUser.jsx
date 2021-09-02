import { LoadSubRoutes } from 'components/LoadRoutes/Components/LoadSubRroutes'
import React from 'react'

export const LayoutHomeBasicUser = ({routes}) => {
    return (
        <div>
            <h1>
                Layout Basic User
            </h1>
            <LoadSubRoutes routes={routes} />
        </div>
    )
}
