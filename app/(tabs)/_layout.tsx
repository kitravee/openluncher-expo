import { Feather } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import React from 'react'
import { Text } from 'react-native'

import tw from '@/libs/tailwind'

const TabLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="home"
              style={tw.style(
                focused
                  ? ['text-2xl', 'text-black']
                  : ['text-2xl', 'text-gray-400']
              )}
            />
          ),
          tabBarLabel: ({ focused, children }) => {
            return (
              <Text
                style={tw.style(
                  focused
                    ? ['text-sm', 'text-black']
                    : ['text-sm', 'text-gray-400']
                )}
              >
                {children}
              </Text>
            )
          },
        }}
      />

      <Tabs.Screen
        name="list"
        options={{
          title: 'List',
          tabBarIcon: ({ focused }) => (
            <Feather
              name="activity"
              style={tw.style(
                focused
                  ? ['text-2xl', 'text-black']
                  : ['text-2xl', 'text-gray-400']
              )}
            />
          ),
          tabBarLabel: ({ focused, children }) => {
            return (
              <Text
                style={tw.style(
                  focused
                    ? ['text-sm', 'text-black']
                    : ['text-sm', 'text-gray-400']
                )}
              >
                {children}
              </Text>
            )
          },
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ focused }) => (
            <Feather
              name="settings"
              style={tw.style(
                focused
                  ? ['text-2xl', 'text-black']
                  : ['text-2xl', 'text-gray-400']
              )}
            />
          ),
          tabBarLabel: ({ focused, children }) => {
            return (
              <Text
                style={tw.style(
                  focused
                    ? ['text-xs', 'text-black']
                    : ['text-xs', 'text-gray-400']
                )}
              >
                {children}
              </Text>
            )
          },
        }}
      />
    </Tabs>
  )
}

export default TabLayout
