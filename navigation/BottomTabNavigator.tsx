import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'

import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'
import HomeScreen from '../screens/HomeScreen'
import TabTwoScreen from '../screens/TabTwoScreen'
import {
  BottomTabParamList,
  NotificationsParamList,
  HomeParamList,
  MessagesParamList,
  SearchParamList,
} from '../types'
import { ProfilePicture } from '../components/ProfilePicture/ProfilePicture'
import { Icon } from '../components/Icon'

const BottomTab = createBottomTabNavigator<BottomTabParamList>()

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme()

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].tint,
        showLabel: false,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="md-home" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-search" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Notifications"
        component={NotificationsNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-notifications-outline" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Messages"
        component={MessagesNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-mail" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  )
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<HomeParamList>()

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerRightContainerStyle: {
            marginRight: 15,
          },
          headerLeftContainerStyle: {
            marginLeft: 15,
          },
          headerTitleAlign: 'center',
          headerRight: () => <Icon />,
          headerTitle: '',
          headerLeft: () => (
            <ProfilePicture
              size={40}
              image={
                'https://raw.githubusercontent.com/yakai911/blogsite/master/src/assets/images/avatar.png'
              }
            />
          ),
        }}
      />
    </HomeStack.Navigator>
  )
}

const SearchStack = createStackNavigator<SearchParamList>()

function SearchNavigator() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="SearchScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </SearchStack.Navigator>
  )
}
const NotificationsStack = createStackNavigator<NotificationsParamList>()

function NotificationsNavigator() {
  return (
    <NotificationsStack.Navigator>
      <NotificationsStack.Screen
        name="NotificationsScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </NotificationsStack.Navigator>
  )
}
const MessagesStack = createStackNavigator<MessagesParamList>()

function MessagesNavigator() {
  return (
    <MessagesStack.Navigator>
      <MessagesStack.Screen
        name="MessagesScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </MessagesStack.Navigator>
  )
}
