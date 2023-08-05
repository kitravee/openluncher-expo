import { View, Text } from 'react-native'

import tw from '@/libs/tailwind'

export default function Feed() {
  return (
    <View style={tw`flex-1 p-4`}>
      <View style={tw`flex-1 justify-center`}>
        <Text style={tw`font-NotoSansThai_600 text-4xl pb-2`}>Home</Text>
        <Text style={tw`font-NotoSerifThai_400 text-xl`}>
          This is the first page of openluncher application
        </Text>
      </View>
    </View>
  )
}
