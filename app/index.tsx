import { Link, useRouter } from 'expo-router'
import { View, Text, Pressable } from 'react-native'

import tw from '@/libs/tailwind'

export default function Home() {
  const router = useRouter()
  return (
    <View style={tw`flex-1 p-4`}>
      <View style={tw`flex-1 justify-center`}>
        <Text style={tw`font-NotoSansThai_400 text-4xl pb-2`}>Index Pager</Text>
        <Text style={tw`font-NotoSerifThai_400 text-xl`}>
          This is the first page of openluncher application
        </Text>
        <Pressable
          onPress={() => {
            router.push('/home')
          }}
        >
          <Text style={tw`font-NotoSansThai_400 text-blue-600 underline`}>
            Go To Home
          </Text>
        </Pressable>
        <Link href="/modal" asChild>
          <Pressable>
            <Text style={tw`font-NotoSansThai_400 text-blue-600 underline`}>
              Open Model
            </Text>
          </Pressable>
        </Link>
      </View>
    </View>
  )
}
