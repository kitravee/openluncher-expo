import { Link } from 'expo-router'
import { View } from 'react-native'

export default function Messages() {
  return (
    <View>
      <Link href="/home/details">Go to detail page</Link>
    </View>
  )
}
