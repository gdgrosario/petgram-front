import { routes } from 'routes/routes.config'
import React from 'react'
import { RouteWithSubRoutes } from './Components/RouteWithSubRoutes'

export const MapRoutes = () => routes.map((route, index) => (
        <RouteWithSubRoutes 
            key={index} 
            {...route} 
        />
))   