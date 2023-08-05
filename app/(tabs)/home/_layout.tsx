import { Stack, useRouter } from 'expo-router'
import { Button } from 'react-native'

export default function AppLayout() {
  const router = useRouter()
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: 'Home',
          headerLeft: () => (
            <Button
              title="Close"
              onPress={() => {
                router.push('../')
              }}
            />
          ),
        }}
      />
    </Stack>
  )
}
