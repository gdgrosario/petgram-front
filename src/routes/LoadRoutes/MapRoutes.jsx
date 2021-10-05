import { routes } from 'routes/routes.config'
import { RouteWithSubRoutes } from './Components/RouteWithSubRoutes'

export const MapRoutes = () => routes.map((route, index) => (
        <RouteWithSubRoutes 
            key={index} 
            {...route} 
        />
))   