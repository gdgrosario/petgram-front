import Link from 'next/link';
const avatar =
  'https://assets.teenvogue.com/photos/5776b76d924ce46478f244de/master/w_1080,h_1236,c_limit/01.png'

export function CardFriend ({ userName = 'No user', name = 'No Name' }) {
  return (
    <div className="content-listFriends">
      <Link href={`/${userName}`}><img className="content-listFriends__avatar" src={avatar} alt="user" /></Link>

      <div className="content-listFriends__user-info content-listFriends__user-info--left">
        <Link href={`/${userName}`}>
          <a className='content-listFriends__userName'>
            {userName}
          </a>
        </Link>
        <p className="content-listFriends__name">{name}</p>
      </div>

    </div>
  )
}
