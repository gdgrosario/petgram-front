import { FooterActionButtons } from '@components/FooterActionButtons';
import { HeadInfo } from '@components/HeadInfo';
import { NavPages } from '@components/NavPages';
import { updateProfile, uploadAvatar } from '@services/User';
import {
  ChangeEvent,
  useEffect,
  useState,
  FormEvent,
  useContext,
  useRef,
} from 'react';
import { User } from '../../models/User';
import { AuthContext } from '../../context/ContextProvider';
import { validateFieldsProfile } from '@helpers/validateForm';
import { Loading } from '../../components/Loading';
import { ProfilePhoto } from '../../components/ProfilePhoto';
import { getCompressor } from '@helpers/getCompressor';

export default function edit() {
  const { user, setUser, loading: loadingFetchUsser } = useContext(AuthContext);
  const [profile, setProfile] = useState<User>();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [invalidFieldsProfile, setinvalidFieldsProfile] = useState(false);

  const [image, setImage] = useState('');

  const [upload, setUpload] = useState<Blob>();

  const imageSelector = useRef(null);

  const onSelectImage = () => {
    imageSelector.current.click();
  };

  const onSelectedImage = async (event) => {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    if (!file) return;
    const fr = new FileReader();
    fr.onload = () => setImage(fr.result as string);
    fr.readAsDataURL(file);

    const result = await getCompressor(file);

    setUpload(result);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setProfile({ ...profile, [name]: value });

    setinvalidFieldsProfile(
      validateFieldsProfile({ ...profile, [name]: value })
    );
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const { data, error } = await updateProfile({
      name: profile.name,
      nickname: profile.nickname,
      email: profile.email,
      biography: profile.biography,
      raza: profile.raza,
      birthday: profile.birthday,
      phoneNumber: profile.phoneNumber,
    });

    let response;

    if (upload) {
      response = await uploadAvatar(user.id, upload);
    }
    setLoading(false);

    if (error) {
      setError(error.message);
    } else {
      setUser({
        ...user,
        name: data.name,
        nickname: data.nickname,
        email: data.email,
        biography: data.biography,
        raza: data.raza,
        birthday: data.birthday,
        phoneNumber: data.phoneNumber,
        avatar: upload && response.data === 200 ? image : user.avatar,
      });
    }
  };

  useEffect(() => {
    setProfile(user);
  }, [user]);

  if (loadingFetchUsser) return <Loading />;
  if (error) return <div>Se produjo un error 🤖 , intentelo más tarde</div>;
  if (!profile)
    return <p>No se cargo el perfil correctamente,intentelo más tarde</p>;
  return (
    <>
      <HeadInfo title="Editar Perfil" />
      <NavPages titleHeaderPage="Edit Profile" />
      <main className="container-global">
        <form onSubmit={handleSubmit} className="user-edit__form">
          {/* parte 1 */}
          <section className="user-edit__img">
            {/* <img
              width="60"
              height="60"
              src="https://assets.teenvogue.com/photos/5776b76d924ce46478f244de/master/w_1080,h_1236,c_limit/01.png"
              alt="user"
            /> */}
            <ProfilePhoto
              size="large"
              profileAvatar={image ? image : user.avatar}
            />

            <input
              type="file"
              capture="user"
              accept="image/*"
              onChange={(event) => onSelectedImage(event)}
              ref={imageSelector}
              hidden={true}
            />
            <div>
              <h2>{user.nickname}</h2>
              <span onClick={onSelectImage}>Change Profile Photo</span>
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
              name="birthday"
              placeholder="Fecha de nacimiento (dd/mm/yyyy)"
              type="text"
              onChange={handleChange}
              value={profile.birthday}
              onFocus={(e) => {
                e.currentTarget.type = 'date';
                e.currentTarget.focus();
              }}
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

          <button disabled={invalidFieldsProfile || loading}>Submit</button>
        </form>
      </main>
      <FooterActionButtons />
    </>
  );
}
