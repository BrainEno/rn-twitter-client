import React from 'react'
import { TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

interface NewTweetButtonProps {}

export const NewTweetButton: React.FC<NewTweetButtonProps> = ({}) => {
  const navigation = useNavigation()
  const onPress = () => {
    navigation.navigate('NewTweet')
  }

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.button}
      onPress={onPress}
    >
      <MaterialIcons name="create" size={38} color="white" />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 50,
    left: Dimensions.get('window').width * 0.8,
    backgroundColor: 'black',
    width: 55,
    height: 55,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  },
})
