
import Image from "next/image";

interface IProfilePhoto {
  profileAvatar?: string;
  className?: string;
  size: 'small' | 'medium' | 'large' | 'extraSmall';
}
export const ProfilePhoto = ({
  profileAvatar,
  size,
  className,
}: IProfilePhoto) => {
  const getSize = () => {
    const sizes = {
      small: 32,
      extraSmall: 24,
      medium: 45,
      large: 64,
    };

    return sizes[size] || sizes.medium;
  };
  return (
    <div className={`${className}`}>
      <Image
        className={`circle-stories__avatar`}
        src={
          profileAvatar
            ? profileAvatar
            : "https://res.cloudinary.com/dlgvxohur/image/upload/v1658799916/proyectos/dhiyydnlicxpfnlabicl.webp"
        }
        alt="avatar"
        width={getSize()}
        height={getSize()}
      />
    </div>
  );
};
