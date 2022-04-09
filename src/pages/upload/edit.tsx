import { HeadInfo } from '@components/HeadInfo';
import Close from '@public/assets/svgs/icons/close.svg';

export default function edit() {
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
        <img
          src="https://via.placeholder.com/300x"
          alt=""
          width={50}
          height={50}
        />
      </form>
    </>
  );
}
