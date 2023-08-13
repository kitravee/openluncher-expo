import {
  useFonts as useNotoSans,
  NotoSansThai_100Thin,
  NotoSansThai_200ExtraLight,
  NotoSansThai_300Light,
  NotoSansThai_400Regular,
  NotoSansThai_500Medium,
  NotoSansThai_600SemiBold,
  NotoSansThai_700Bold,
  NotoSansThai_800ExtraBold,
  NotoSansThai_900Black,
} from '@expo-google-fonts/noto-sans-thai'
import {
  useFonts as useNotoSerif,
  NotoSerifThai_100Thin,
  NotoSerifThai_200ExtraLight,
  NotoSerifThai_300Light,
  NotoSerifThai_400Regular,
  NotoSerifThai_500Medium,
  NotoSerifThai_600SemiBold,
  NotoSerifThai_700Bold,
  NotoSerifThai_800ExtraBold,
  NotoSerifThai_900Black,
} from '@expo-google-fonts/noto-serif-thai'
import { Stack, useRouter } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect, useState } from 'react'
import { Button, Text, View } from 'react-native'
import { useDeviceContext } from 'twrnc'

import tw from '@/libs/tailwind'

// Keep the splash screen visible while we fetch resources
// SplashScreen.preventAutoHideAsync()
SplashScreen.preventAutoHideAsync().catch(() => {
  /* reloading the app might trigger some race conditions, ignore them */
})
export default function Layout() {
  useDeviceContext(tw)
  const router = useRouter()

  const [isAppReady, setAppReady] = useState(false)

  const [fontsNotoSansLoaded] = useNotoSans({
    NotoSansThai_100Thin,
    NotoSansThai_200ExtraLight,
    NotoSansThai_300Light,
    NotoSansThai_400Regular,
    NotoSansThai_500Medium,
    NotoSansThai_600SemiBold,
    NotoSansThai_700Bold,
    NotoSansThai_800ExtraBold,
    NotoSansThai_900Black,
  })

  const [fontsNotoSerifLoaded] = useNotoSerif({
    NotoSerifThai_100Thin,
    NotoSerifThai_200ExtraLight,
    NotoSerifThai_300Light,
    NotoSerifThai_400Regular,
    NotoSerifThai_500Medium,
    NotoSerifThai_600SemiBold,
    NotoSerifThai_700Bold,
    NotoSerifThai_800ExtraBold,
    NotoSerifThai_900Black,
  })

  const fontsLoaded = fontsNotoSansLoaded && fontsNotoSerifLoaded

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.hideAsync()
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise((resolve) => setTimeout(resolve, 2000))
      } catch (e) {
        console.warn(e)
      } finally {
        // Tell the application to render
        setAppReady(true)
      }
    }
    if (fontsLoaded) {
      prepare()
    }
  }, [fontsLoaded])

  if (!isAppReady) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>SplashScreen Demo! 👋</Text>
      </View>
    )
  }

  // Render the children routes now that all the assets are loaded.
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: 'Welcome',
          headerRight: () => (
            <Button
              title="Open"
              onPress={() => {
                router.push('modal')
              }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="modal"
        options={{
          presentation: 'modal',
          headerRight: () => (
            <Button
              title="Close"
              onPress={() => {
                router.push('/')
              }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  )
}
