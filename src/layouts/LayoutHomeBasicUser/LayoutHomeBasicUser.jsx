import { LoadSubRoutes } from 'components/LoadRoutes/Components/LoadSubRroutes'

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
