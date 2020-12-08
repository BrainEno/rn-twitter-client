import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import tweetsData from '../../data/tweetsData'
import { Tweet } from '../Tweet/Tweet'

interface FeedProps {}

export const Feed: React.FC<FeedProps> = ({}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tweetsData}
        renderItem={({ item }) => <Tweet tweet={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    marginVertical: 20,
  },
})
