import { FooterActionButtons } from '@components/FooterActionButtons'
import { HeadInfo } from '@components/HeadInfo'
import { NavPages } from '@components/NavPages'
import { getUserProfile, updateProfile } from '@services/User'
import router from 'next/router'
import { ChangeEvent, useEffect, useState, FormEvent, useContext } from 'react';
import { getAccessToken } from '@helpers/auth';
import { User } from '../../models/User';
import { AuthContext } from '../../context/ContextProvider';
import { validateFieldsProfile } from '@helpers/validateForm'
import { Loading } from '../../components/Loading';

/**
 * TODO: Mandar solo los datos necessarios para poder actualizar el perfil,
 * ya que dentro de Profile incluye todos los datos del usuario, como lo son
 * sus seguidores, seguidos, en un formato de array de strings, y esto ocaciona
 * que el servidor los reciba y trate de actualizarlos tambien. 
 */
export default function edit () {
  const [profile, setProfile] = useState<User>()
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const [nickName, setNickName] = useState('')
  const { setUser } = useContext(AuthContext)
  const [invalidFieldsProfile, setinvalidFieldsProfile] = useState(false)

  const fetchUser = async () => {
    const response = await getUserProfile(getAccessToken())
    setLoading(false)

    if (response.error || response.message) {
      setError(error)
    } else {
      setProfile(response)
      setNickName(response.nickname)
    }
  }

  useEffect(() => {
    fetchUser()
  }, [])

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target

    setProfile({ ...profile, [name]: value })

    setinvalidFieldsProfile(validateFieldsProfile(
      { ...profile, [name]: value }
    ))

  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const response = await updateProfile(profile)

    if (response.error || response.message) {
      setError(response.error)
      console.log(response.error)
    } else {
      setNickName(response.nickname)
      setUser(response)
    }
  }

  if (loading) return <Loading/>
  if (error) return <div>Se produjo un error 🤖 , intentelo más tarde</div>
  if (!profile) return <p>No se cargo el perfil correctamente,intentelo más tarde</p>

  return (
    <>
      <HeadInfo title="Editar Perfil" />
      <NavPages titleHeaderPage="Edit Profile" history={router.back} />
      <main className="container-global">
        <form onSubmit={handleSubmit} className="user-edit__form">
          {/* parte 1 */}
          <section className="user-edit__img">
            <img
              width="60"
              height="60"
              src="https://assets.teenvogue.com/photos/5776b76d924ce46478f244de/master/w_1080,h_1236,c_limit/01.png"
              alt="user"
            />
            <div>
              <h2>{nickName}</h2>
              <span>Change Profile Photo</span>
            </div>
          </section>
          {/* parte 2 */}
          <section className="user-edit__input">
            <label>
              <span>First Name</span>
            </label>
            <input
              value={profile.name}
              onChange={handleChange}
              name="name"
              type="text"
               />
          </section>
          {/* parte 3 */}
          <section className="user-edit__input">
            <label>
              <span>Username</span>
            </label>
            <input
              value={profile.nickname}
              onChange={handleChange}
              name="nickname"
              type="text"
               />
          </section>
          {/* parte 4 */}
          <section className="user-edit__input">
            <label>
              <span>Email</span>
            </label>
            <input
              value={profile.email}
              onChange={handleChange}
              name="email"
              type="email"
            />
          </section>
          {/* parte 5 */}
          <section className="user-edit__input">
            <label>
              <span>Race</span>
            </label>
            <input
              value={profile.raza}
              onChange={handleChange}
              name="raza"
              type="text"
               />
          </section>
          {/* parte 6 */}
          <section className="user-edit__input">
            <label>
              <span>Bio</span>
            </label>
            <textarea
              rows={3}
              name="biography"
              onChange={handleChange}
              value={profile.biography}
               />
          </section>
          {/* parte 6 */}
          <section className="user-edit__input">
            <label>
              <span>Date of birth</span>
            </label>
            <input
                  name= "birthday"
                  placeholder="Fecha de nacimiento (dd/mm/yyyy)"
                  type="text"
                  onChange={handleChange}
                  value= {profile.birthday}
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
            <input
              value={profile.phoneNumber}
              onChange={handleChange}
              name="phoneNumber"
              type="text"
            />
          </section>

          <button disabled={invalidFieldsProfile}>Submit</button>
        </form>
      </main>
      <FooterActionButtons />
    </>
  )
}
