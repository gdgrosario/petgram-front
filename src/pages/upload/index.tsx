import { HeadInfo } from '@components/HeadInfo';
import Close from '@public/assets/svgs/icons/close.svg';

export default function upload() {
  return (
    <>
      <HeadInfo title="Subir foto" />

      <header className="header">
        <Close />

        <h2>Nuevo photo post</h2>

        <button>siguiente</button>
      </header>

      <img className="image" src="https://via.placeholder.com/300x" alt="" />
    </>
  );
}
