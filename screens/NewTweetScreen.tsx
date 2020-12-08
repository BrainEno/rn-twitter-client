import React, { useState } from 'react'
import { SafeAreaView, View, Text, StyleSheet, TextInput } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import Colors from '../constants/Colors'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ProfilePicture } from '../components/ProfilePicture/ProfilePicture'

interface NewTweetScreenProps {}

export const NewTweetScreen: React.FC<NewTweetScreenProps> = ({}) => {
  const [tweet, setTweet] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  const onPress = () => {
    console.log('submitted')
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <AntDesign name={'close'} size={30} color={Colors.light.tint} />
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.btnText}>发送</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.newTweetContainer}>
        <ProfilePicture
          image={
            'https://raw.githubusercontent.com/yakai911/blogsite/master/src/assets/images/avatar.png'
          }
          size={35}
        />
        <View style={styles.inputContainer}>
          <TextInput
            value={tweet}
            onChangeText={(value) => setTweet(value)}
            placeholder={'Say someting... '}
            style={styles.tweetInput}
            multiline={true}
            maxLength={180}
          />
          <TextInput
            style={styles.imageInput}
            value={imageUrl}
            onChangeText={(value) => setImageUrl(value)}
            placeholder={'Image url (optional) '}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

//--------------------------------StyleSheet----------------------------------------//
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: 'white',
    paddingTop: 15,
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 25,
  },
  button: {
    backgroundColor: Colors.light.tint,
    borderRadius: 30,
  },
  btnText: {
    paddingHorizontal: 20,
    paddingVertical: 6,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  newTweetContainer: {
    flexDirection: 'row',
    padding: 15,
    width: '100%',
  },
  inputContainer: {
    marginLeft: 10,
    display: 'flex',
    justifyContent: 'center',
    flex: 1,
  },
  tweetInput: {
    height: 200,
    maxHeight: 400,
    fontSize: 20,
    width: '100%',
    borderColor: 'none',
  },
  imageInput: {
    marginTop: 10,
  },
})
