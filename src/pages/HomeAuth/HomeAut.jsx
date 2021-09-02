import React from 'react'
import { useParams } from 'react-router-dom'
export const HomeAut = () => {
  const {userName} = useParams()
    return (
        <div>
            <h1>
                Hello User {userName}
            </h1>
        </div>
    )
}