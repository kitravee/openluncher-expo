import { View, Text } from 'react-native'

import tw from '@/libs/tailwind'

export default function Setting() {
  return (
    <View style={tw`flex-1 p-4`}>
      <View style={tw`flex-1 justify-center`}>
        <Text style={tw`font-NotoSansThai_400 text-4xl pb-2`}>
          Setting Page
        </Text>
        <Text style={tw`font-NotoSerifThai_400 text-xl`}>
          This is the first page of openluncher application
        </Text>
      </View>
    </View>
  )
}
