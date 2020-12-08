import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { Feed } from '../components/Feed/Feed'
import { NewTweetButton } from '../components/NewTweetButton/NewTweetButton'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Feed />
      <NewTweetButton />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: '100%',
  },
})
