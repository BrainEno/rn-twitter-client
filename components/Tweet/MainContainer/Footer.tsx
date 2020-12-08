import { Feather, EvilIcons, AntDesign } from '@expo/vector-icons'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TweetType } from '../../../types'

interface FooterProps {
  tweet: TweetType
}

export const Footer: React.FC<FooterProps> = ({ tweet }) => {
  return (
    <View style={styles.container}>
      <View style={styles.IconContainer}>
        <Feather name={'message-circle'} size={20} />
        <Text style={styles.number}>{tweet.numberOfComments}</Text>
      </View>
      <View style={styles.IconContainer}>
        <EvilIcons name={'retweet'} size={30} />
        <Text style={styles.number}>{tweet.numberOfRetweets}</Text>
      </View>
      <View style={styles.IconContainer}>
        <AntDesign name={'hearto'} size={20} />
        <Text style={styles.number}>{tweet.numberOfLikes}</Text>
      </View>
      <View style={styles.IconContainer}>
        <EvilIcons name={'share-google'} size={28} />
      </View>
    </View>
  )
}

//Style Sheet---------------------------------------------------------------//

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    marginTop: 5,
  },
  IconContainer: {
    flexDirection: 'row',
    marginLeft: 5,
    textAlign: 'center',
    alignItems: 'center',
  },
  number: {
    color: 'grey',
    marginLeft: 5,
  },
})
