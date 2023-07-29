import { View, Text } from 'react-native'

export default function Home() {
  return (
    <View className="flex-1 p-4">
      <View className="flex-1 justify-center">
        <Text
          className="font-IBMPlexSansThai_100Thin text-2xl"
          // style={{ fontSize: '70px' }}
        >
          สวัสดี
        </Text>
        <Text className="font-IBMPlexSansThaiLooped_600SemiBold text-6xl">
          This is the first page of openluncher application
        </Text>
      </View>
    </View>
  )
}
