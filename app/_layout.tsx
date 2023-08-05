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
import { SplashScreen, Stack } from 'expo-router'
import { useDeviceContext } from 'twrnc'

import tw from '@/libs/tailwind'

export default function Layout() {
  useDeviceContext(tw)

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

  if (!fontsNotoSansLoaded || !fontsNotoSerifLoaded) {
    return <SplashScreen />
  }

  // Render the children routes now that all the assets are loaded.
  return <Stack />
}
