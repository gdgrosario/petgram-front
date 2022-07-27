import { createContext, Dispatch, SetStateAction, useState } from "react";

interface IUploadContext {
  image: string | null;
  imageBlob: File | null;
  description: string;
  setDescription: Dispatch<SetStateAction<string | null>>;
  setUpload: Dispatch<SetStateAction<string | null>>;
  setimageBlob: Dispatch<SetStateAction<File | null>>;

  viewImage: boolean;
  setViewImage: Dispatch<SetStateAction<boolean>>;
}

export const UploadContext = createContext<IUploadContext>({
  image: null,
  imageBlob: null,
  description: "",
  setDescription: () => {},
  setUpload: () => {},
  setimageBlob: () => {},

  viewImage: false,
  setViewImage: () => {},
});

export const UploadProvider = ({ children }) => {
  const [image, setUpload] = useState(null);

  const [imageBlob, setimageBlob] = useState(null);

  const [description, setDescription] = useState("");

  const [viewImage, setViewImage] = useState(false);

  return (
    <UploadContext.Provider
      value={{
        image,
        imageBlob,
        description,
        setDescription,
        setUpload,
        setimageBlob,

        viewImage,
        setViewImage,
      }}
    >
      {children}
    </UploadContext.Provider>
  );
};
