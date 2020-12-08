import React from 'react'
import { Image, View } from 'react-native'

export const Icon: React.FC = () => {
  return (
    <View>
      <Image
        source={require('../assets/images/moshIcon.png')}
        style={{ width: 50, height: 50 }}
      />
    </View>
  )
}
