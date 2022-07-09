import { createContext, Dispatch, SetStateAction, useState } from 'react';

interface IUploadContext {
  image: string | null;
  imageBlob: Blob | null;
  setUpload: Dispatch<SetStateAction<string | null>>;
  setimageBlob: Dispatch<SetStateAction<Blob | null>>;
}

export const UploadContext = createContext<IUploadContext>({
  image: null,
  imageBlob: null,
  setUpload: () => {},
  setimageBlob: () => {},
});

export const UploadProvider = ({ children }) => {
  const [image, setUpload] = useState(null);

  const [imageBlob, setimageBlob] = useState(null);

  return (
    <UploadContext.Provider
      value={{
        image,
        imageBlob,
        setUpload,
        setimageBlob,
      }}
    >
      {children}
    </UploadContext.Provider>
  );
};
