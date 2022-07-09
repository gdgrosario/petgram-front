import { HeadInfo } from '@components/HeadInfo';
import { UploadContext } from '@context/ContextUpload';
import Close from '@public/assets/svgs/icons/close.svg';
import { Upload } from '@services/Upload';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';

export default function edit() {
  const router = useRouter();
  const {
    image,
    imageBlob,
    description,
    setDescription,
    setUpload,
    setimageBlob,
  } = useContext(UploadContext);

  useEffect(() => {
    if (!image) {
      router.push('/');
    }
  }, [image]);

  const handleChange = (event) => {
    setDescription(event.target.value);
  };

  const handleHome = () => {
    setUpload(null);
    setDescription('');
    setimageBlob(null);
    router.push('/');
  };

  const handleSubmit = async () => {
    await Upload({ image: imageBlob, description });
  };

  return (
    <>
      <HeadInfo title="Subir foto" />

      <header className="header">
        <Close onClick={handleHome} />

        <h2>Nuevo post</h2>

        <button onClick={handleSubmit}>siguiente</button>
      </header>

      <section className="container__upload">
        <img src={image} alt="" width={70} height={70} />
        <textarea
          defaultValue={description}
          onChange={(event) => handleChange(event)}
        ></textarea>
      </section>
    </>
  );
}
