import { Stack, useSearchParams } from 'expo-router'
import { Text, View } from 'react-native'

const Setting = () => {
  const { id } = useSearchParams()

  return (
    <View>
      <Stack.Screen options={{ headerTitle: `Test${id}` }} />
      <Text>{id}</Text>
    </View>
  )
}

export default Setting
