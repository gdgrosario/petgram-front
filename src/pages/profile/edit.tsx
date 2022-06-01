import { FooterActionButtons } from '@components/FooterActionButtons'
import { HeadInfo } from '@components/HeadInfo'
import { NavPages } from '@components/NavPages'
import { getUserProfile } from '@services/User'
import router from 'next/router'
import { useEffect, useState } from 'react';
import { getAccessToken } from '@helpers/auth';
import { User } from '../../models/User';

export default function edit () {
  const [profile, setProfile] = useState<User>()
  const [error, setError] = useState()
  const [loading, setLoading] = useState(true)
  const textValue =
    'Donec rutrum congue leo eget malesuada. Cras ultricies ligula sed magna dictum porta. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus'

  const fetchUser = async () => {
    const response = await getUserProfile(getAccessToken())
    setLoading(false)
    if (response.error || response.message) {
      setError(error)
    } else setProfile(response)
  }

  useEffect(() => {
    fetchUser()
  }, [])

  if (loading) return <p>Loading...</p>
  if (error) return <div>Se produjo un error 🤖 , intentelo más tarde</div>
  if (!profile) return <p>No se cargo el perfil correctamente,intentelo más tarde</p>

  return (
    <>
      <HeadInfo title="Editar Perfil" />
      <NavPages titleHeaderPage="Edit Profile" history={router.back} />
      <main className="container-global">
        <form className="user-edit__form">
          {/* parte 1 */}
          <section className="user-edit__img">
            <img
              width="60"
              height="60"
              src="https://assets.teenvogue.com/photos/5776b76d924ce46478f244de/master/w_1080,h_1236,c_limit/01.png"
              alt="user"
            />
            <div>
              <h2>{profile.nickname}</h2>
              <span>Change Profile Photo</span>
            </div>
          </section>
          {/* parte 2 */}
          <section className="user-edit__input">
            <label>
              <span>First Name</span>
            </label>
            <input value={profile.name} type="text" defaultValue="Hello" />
          </section>
          {/* parte 3 */}
          <section className="user-edit__input">
            <label>
              <span>Username</span>
            </label>
            <input value={profile.nickname} type="text" defaultValue="g1hello" />
          </section>
          {/* parte 4 */}
          <section className="user-edit__input">
            <label>
              <span>Email</span>
            </label>
            <input value={profile.email} type="email" defaultValue="hola@hola.com" />
          </section>
          {/* parte 5 */}
          <section className="user-edit__input">
            <label>
              <span>Race</span>
            </label>
            <input value={profile.raza} type="text" defaultValue="Macho" />
          </section>
          {/* parte 6 */}
          <section className="user-edit__input">
            <label>
              <span>Bio</span>
            </label>
            <textarea rows={3} defaultValue={textValue} />
          </section>
          {/* parte 6 */}
          <section className="user-edit__input">
            <label>
              <span>Date of birth</span>
            </label>
            <input
                    className="content-form-auth__input"
                    name= "birthday"
                    placeholder="Fecha de nacimiento (dd/mm/yyyy)"
                    type="text"
                    value= {profile.birthday as Date}
                    /* onChange={e => changeInputValues(e)} */
                    onFocus={
                        (e) => {
                          e.currentTarget.type = 'date'
                          e.currentTarget.focus()
                        }
                    }
                />
          </section>
          {/* parte 7 */}
          <section className="user-edit__input">
            <label>
              <span>Phone Number</span>
            </label>
            <input value={profile.phoneNumber} type="text" defaultValue="+57 3223341221" />
          </section>
        </form>
      </main>
      <FooterActionButtons />
    </>
  )
}
