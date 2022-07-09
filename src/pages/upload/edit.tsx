import { HeadInfo } from '@components/HeadInfo';
import { UploadContext } from '@context/ContextUpload';
import Close from '@public/assets/svgs/icons/close.svg';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';

export default function edit() {
  const router = useRouter();
  const { image } = useContext(UploadContext);

  useEffect(() => {
    if (!image) {
      router.push('/');
    }
  }, [image]);

  return (
    <>
      <HeadInfo title="Subir foto" />

      <header className="header">
        <Close />

        <h2>Nuevo post</h2>

        <button>siguiente</button>
      </header>

      <form>
        <textarea>holakskaiksj</textarea>
        <img src={image} alt="" width={50} height={50} />
      </form>
    </>
  );
}
