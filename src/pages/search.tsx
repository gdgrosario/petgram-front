import { getUsersByNickName } from '@services/User';
import { useState, ChangeEvent } from 'react';
import { User } from '../models/User'
import Link from 'next/link';

const search = () => {
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [usersSearch, setUsersSearch] = useState<User[]>()

  const searchUsers = async (sch:string) => {
    setLoading(true)
    try {
      if (sch.length > 0) {
        const response = await getUsersByNickName(sch)
        setLoading(false)
        setUsersSearch(response)
      }
    } catch (errorRes) {
      setError(errorRes)
      setLoading(false)
    }
  }

  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    searchUsers(e.target.value)
  }

  return (
        <>
            <main className='container-global'>
                <h1>Search</h1>
                <input
                    value={search}
                    onChange={handleChange}
                    type="text" />
                {loading && search.length > 0 && !error && <p>loading...</p>}
                {usersSearch && usersSearch.length > 0 && !loading ? usersSearch.map(usr => (
                    <div key={usr.nickname}>
                        <Link href={`/${usr.nickname}`} >
                            <a>{usr.nickname}</a>
                        </Link>
                    </div>
                )) : search.length > 3 && <p>Not Found</p> }
            </main>

            <style jsx>{`
                main{
                    display: grid;
                    place-content: center;
                    justify-items: center;

                }
            `}</style>
        </>
  )
}

export default search
