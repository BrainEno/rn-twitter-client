import React from 'react'
import { Image } from 'react-native'

interface ProfilePictureProps {
  image?: string
  size?: number
}

export const ProfilePicture: React.FC<ProfilePictureProps> = ({
  image,
  size = 50,
}) => {
  return (
    <Image
      source={{ uri: image }}
      style={{
        width: size,
        height: size,
        borderRadius: size,
      }}
    />
  )
}
