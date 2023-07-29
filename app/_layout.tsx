import {
  useFonts as useFontsIBMPlexSansThai,
  IBMPlexSansThai_100Thin,
  IBMPlexSansThai_200ExtraLight,
  IBMPlexSansThai_300Light,
  IBMPlexSansThai_400Regular,
  IBMPlexSansThai_500Medium,
  IBMPlexSansThai_600SemiBold,
  IBMPlexSansThai_700Bold,
} from '@expo-google-fonts/ibm-plex-sans-thai'
import {
  useFonts as useFontsIBMPlexSansThaiLooped,
  IBMPlexSansThaiLooped_100Thin,
  IBMPlexSansThaiLooped_200ExtraLight,
  IBMPlexSansThaiLooped_300Light,
  IBMPlexSansThaiLooped_400Regular,
  IBMPlexSansThaiLooped_500Medium,
  IBMPlexSansThaiLooped_600SemiBold,
  IBMPlexSansThaiLooped_700Bold,
} from '@expo-google-fonts/ibm-plex-sans-thai-looped'
import { SplashScreen, Stack } from 'expo-router'
import { NativeWindStyleSheet } from 'nativewind'

// For Web platform
NativeWindStyleSheet.setOutput({
  default: 'native',
})
export default function Layout() {
  const [fontsIBMPlexSansThaiLoaded] = useFontsIBMPlexSansThai({
    IBMPlexSansThai_100Thin,
    IBMPlexSansThai_200ExtraLight,
    IBMPlexSansThai_300Light,
    IBMPlexSansThai_400Regular,
    IBMPlexSansThai_500Medium,
    IBMPlexSansThai_600SemiBold,
    IBMPlexSansThai_700Bold,
  })

  const [fontsIBMPlexSansThaiLooped] = useFontsIBMPlexSansThaiLooped({
    IBMPlexSansThaiLooped_100Thin,
    IBMPlexSansThaiLooped_200ExtraLight,
    IBMPlexSansThaiLooped_300Light,
    IBMPlexSansThaiLooped_400Regular,
    IBMPlexSansThaiLooped_500Medium,
    IBMPlexSansThaiLooped_600SemiBold,
    IBMPlexSansThaiLooped_700Bold,
  })

  if (!fontsIBMPlexSansThaiLoaded && !fontsIBMPlexSansThaiLooped) {
    return <SplashScreen />
  }

  // Render the children routes now that all the assets are loaded.
  return <Stack />
}
