import { HeadInfo } from '@components/HeadInfo';
import { UploadContext } from '@context/ContextUpload';
import Close from '@public/assets/svgs/icons/close.svg';
import { Upload } from '@services/Upload';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';

export default function edit() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    const response = await Upload({ image: imageBlob, description });
    setLoading(false);
    if (response === 201) {
      router.push('/');

      setUpload(null);
      setDescription('');
      setimageBlob(null);
    }
  };

  return (
    <>
      <HeadInfo title="Subir foto" />

      <header className="header">
        <Close onClick={handleHome} />

        <h2>Nuevo post</h2>

        <button onClick={handleSubmit}>
          {loading ? 'Subiendo...' : 'Subir'}
        </button>
      </header>

      <section className="container__upload">
        <img src={image} alt="" width={120} height={120} />
        <textarea
          defaultValue={description}
          onChange={(event) => handleChange(event)}
        ></textarea>
      </section>
    </>
  );
}
