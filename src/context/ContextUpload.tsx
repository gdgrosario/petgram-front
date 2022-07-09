import { createContext, Dispatch, SetStateAction, useState } from 'react';

interface IUploadContext {
  image: string | null;
  imageBlob: File | null;
  description: string;
  setDescription: Dispatch<SetStateAction<string | null>>;
  setUpload: Dispatch<SetStateAction<string | null>>;
  setimageBlob: Dispatch<SetStateAction<File | null>>;
}

export const UploadContext = createContext<IUploadContext>({
  image: null,
  imageBlob: null,
  description: '',
  setDescription: () => {},
  setUpload: () => {},
  setimageBlob: () => {},
});

export const UploadProvider = ({ children }) => {
  const [image, setUpload] = useState(null);

  const [imageBlob, setimageBlob] = useState(null);

  const [description, setDescription] = useState('');

  return (
    <UploadContext.Provider
      value={{
        image,
        imageBlob,
        description,
        setDescription,
        setUpload,
        setimageBlob,
      }}
    >
      {children}
    </UploadContext.Provider>
  );
};
