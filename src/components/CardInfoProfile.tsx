import Link from 'next/link'
import { FC } from 'react'

interface ICardInfoProfile {
  amount:number, 
  textCard:string
  navPage?: string
}

export const CardInfoProfile = ({ amount = 0, textCard = 'Info Card', navPage="/" }:ICardInfoProfile) => {
  return amount > 0 ? (
    <div>
      <Link href={navPage}>
        <a className="cardProfile">
          <span className="cardProfile__number">{amount}</span>
          <p className="cardProfile__textCard">{textCard}</p>
        </a>
      </Link>
    </div>
  ) : (
    <div className="cardProfile">
      <span className="cardProfile__number">{amount}</span>
          <p className="cardProfile__textCard">{textCard}</p>
    </div>
  )
}
