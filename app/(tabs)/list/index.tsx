import { Link, useRouter } from 'expo-router'
import { View, Text, Pressable } from 'react-native'

import tw from '@/libs/tailwind'

export default function List() {
  const router = useRouter()
  return (
    <View style={tw`flex-1 p-4`}>
      <View style={tw`flex-1 justify-center`}>
        <Text style={tw`font-NotoSansThai_400 text-4xl pb-2`}>Index Page</Text>
        <Text style={tw`font-NotoSerifThai_400 text-xl`}>
          This is the first page of openluncher application
        </Text>
        <Pressable
          onPress={() => {
            router.push('/list/1')
          }}
        >
          <Text style={tw`font-NotoSansThai_400 text-blue-600 underline`}>
            List1
          </Text>
        </Pressable>
        <Link href="/list/1" asChild>
          <Pressable>
            <Text style={tw`font-NotoSansThai_400 text-blue-600 underline`}>
              List2
            </Text>
          </Pressable>
        </Link>
      </View>
    </View>
  )
}
