import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { TweetType } from '../../../types'
import { Ionicons } from '@expo/vector-icons'
import { Footer } from './Footer'
import moment from 'moment'

interface MainContainerProps {
  tweet: TweetType
}

export const MainContainer: React.FC<MainContainerProps> = ({ tweet }) => {
  return (
    <View style={styles.container}>
      <View style={styles.tweetHeaderContainer}>
        <View style={styles.tweetHeaderNames}>
          <Text style={styles.name}>{tweet.user.name}</Text>
          <Text style={styles.username} numberOfLines={1} ellipsizeMode="head">
            @{tweet.user.username}
          </Text>
          <Text style={styles.createdAt}>
            {moment(tweet.createdAt).toNow()}
          </Text>
        </View>
        <Ionicons name={'md-more'} size={20} color={'grey'} />
      </View>
      <View>
        <Text style={styles.content}>{tweet.content}</Text>
        {!!tweet.image && (
          <Image style={styles.image} source={{ uri: tweet.image }} />
        )}
      </View>
      <Footer tweet={tweet} />
    </View>
  )
}

//style sheets-----------------------------------------------------------------------//
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 8,
  },
  tweetHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tweetHeaderNames: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    marginRight: 5,
    fontWeight: 'bold',
  },
  username: {
    marginHorizontal: 5,
    color: 'grey',
  },
  createdAt: {
    marginHorizontal: 5,
    color: 'grey',
  },
  content: {
    marginVertical: 5,
    lineHeight: 18,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 15,
    borderColor: 'lightgrey',
    borderWidth: 1,
    marginVertical: 10,
    overflow: 'hidden',
  },
})
