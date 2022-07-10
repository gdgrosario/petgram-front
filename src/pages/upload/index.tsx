import { HeadInfo } from '@components/HeadInfo';
import { UploadContext } from '@context/ContextUpload';
import Close from '@public/assets/svgs/icons/close.svg';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';

export default function upload() {
  const router = useRouter();

  const { image, setUpload, imageBlob } = useContext(UploadContext);

  useEffect(() => {
    if (!image) {
      router.push('/');
    }
  }, [image]);

  const handleHome = () => {
    setUpload(null);
    router.push('/');
  };

  const handleEdit = () => router.push('/upload/edit');
  return (
    <>
      <HeadInfo title="Subir foto" />

      <header className="header">
        <Close onClick={() => handleHome()} />

        <h2>Nuevo photo post</h2>

        <button onClick={() => handleEdit()}>siguiente</button>
      </header>

      <img className="image" src={image} alt="upload-history" />
    </>
  );
}
