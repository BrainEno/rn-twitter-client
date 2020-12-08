import React from 'react'
import { View, StyleSheet } from 'react-native'
import { TweetType } from '../../types'
import { LeftContainer } from './LeftContainer/LeftContainer'
import { MainContainer } from './MainContainer/MainContainer'

interface TweetProps {
  tweet: TweetType
}

export const Tweet: React.FC<TweetProps> = ({ tweet }) => {
  return (
    <View style={styles.container}>
      <LeftContainer user={tweet.user} />
      <MainContainer tweet={tweet} />
    </View>
  )
}

//style sheets-----------------------------------------------------------------------//
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    borderBottomWidth: 0.5,
    borderColor: 'lightgrey',
  },
})
