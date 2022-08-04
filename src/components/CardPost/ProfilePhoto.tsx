import avatar from "@public/assets/user/simona.jpg";
import Image from "next/image";

interface IProfilePhoto {
  profileAvatar?: string;
  className?: string;
  size: "small" | "medium" | "large" | "extraSmall";
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
        src={profileAvatar || avatar}
        alt="avatar"
        width={getSize()}
        height={getSize()}
      />
    </div>
  );
};
