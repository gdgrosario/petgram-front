import avatar from '@public/assets/user/simona.jpg'
import Image from 'next/image'

interface IProfilePhoto{
  profileAvatar?: string
  size: "small" | "medium" | "large"
}
export const ProfilePhoto = ({ profileAvatar, size }:IProfilePhoto) => {
  const getSize = () => {
    const sizes = {
      small: 32,
      medium: 45,
      large: 64
    }

    return sizes[size] || sizes.medium
  }
  return (
    <div
    >
      <Image
        className="circle-stories__avatar"
        src={profileAvatar || avatar}
        alt="avatar"
        width={getSize()}
        height={getSize()}
      />
    </div>
  )
}
