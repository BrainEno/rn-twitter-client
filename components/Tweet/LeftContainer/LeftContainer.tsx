import React from 'react'
import { View } from 'react-native'
import { UserType } from '../../../types'
import { ProfilePicture } from '../../ProfilePicture/ProfilePicture'

interface LeftContainerProps {
  user: UserType
}

export const LeftContainer: React.FC<LeftContainerProps> = ({ user }) => {
  return (
    <View>
      <ProfilePicture image={user.image} size={55} />
    </View>
  )
}
