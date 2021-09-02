import { routes } from 'config/routes.config'
import React from 'react'
import { RouteWithSubRoutes } from './Components/RouteWithSubRoutes'

export const MapRoutes = () => routes.map((route, index) => (
        <RouteWithSubRoutes 
            kek={index} 
            {...route} 
        />
))   
    

