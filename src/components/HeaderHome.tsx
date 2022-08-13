import Link from "next/link";

import Logo from "@public/assets/svgs/Logo.svg";
import AddHistory from "@public/assets/svgs/icons/add_history.svg";
import Message from "@public/assets/svgs/icons/message.svg";
import Favorite from "@public/assets/svgs/icons/favorite.svg";
import { useContext, useRef } from "react";
import { UploadContext } from "../context/ContextUpload";
import { useRouter } from "next/router";
import { getCompressor } from "@helpers/getCompressor";
import { AuthContext } from "@context/ContextProvider";

export const HeaderHome = () => {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  const imageSelector = useRef(null);
  const { setUpload, setimageBlob } = useContext(UploadContext);

  const onSelectImage = () => {
    imageSelector.current.click();
  };

  const onSelectedImage = async (event) => {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    if (!file) return;
    const fr = new FileReader();
    fr.onload = () => setUpload(fr.result as string);
    fr.readAsDataURL(file);

    const result = await getCompressor(file);

    setimageBlob(result as File);

    router.push("/upload");
  };

  return (
    <header className="header-home container-global">
      <Logo className="header-logo" />
      <nav className="header-home__nav">
        <ul className="header-home__list">
          {user && (
            <li className="header-home__item header-home__item--box">
              <button
                onClick={() => onSelectImage()}
                className="header-home__link"
              >
                <AddHistory className="header-home__icon" />
              </button>

              <input
                type="file"
                capture="user"
                accept="image/*"
                onChange={(event) => onSelectedImage(event)}
                ref={imageSelector}
              />
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};
