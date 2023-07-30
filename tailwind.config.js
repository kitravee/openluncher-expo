const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        NotoSansThai_100: ['NotoSansThai_100Thin,'],
        NotoSansThai_200: ['NotoSansThai_200ExtraLight,'],
        NotoSansThai_300: ['NotoSansThai_300Light,'],
        NotoSansThai_400: ['NotoSansThai_400Regular,'],
        NotoSansThai_500: ['NotoSansThai_500Medium,'],
        NotoSansThai_600: ['NotoSansThai_600SemiBold,'],
        NotoSansThai_700: ['NotoSansThai_700Bold,'],
        NotoSansThai_800: ['NotoSansThai_800ExtraBold,'],
        NotoSansThai_900: ['NotoSansThai_900Black,'],
        NotoSerifThai_100: ['NotoSerifThai_100Thin'],
        NotoSerifThai_200: ['NotoSerifThai_200ExtraLight'],
        NotoSerifThai_300: ['NotoSerifThai_300Light'],
        NotoSerifThai_400: ['NotoSerifThai_400Regular'],
        NotoSerifThai_500: ['NotoSerifThai_500Medium'],
        NotoSerifThai_600: ['NotoSerifThai_600SemiBold'],
        NotoSerifThai_700: ['NotoSerifThai_700Bold'],
        NotoSerifThai_800: ['NotoSerifThai_800ExtraBold'],
        NotoSerifThai_900: ['NotoSerifThai_900Black'],
      },
      fontSize: {
        '2xl': ['1.25rem', { lineHeight: 'auto' }],
        '3xl': ['1.5rem', { lineHeight: 'auto' }],
        '4xl': ['1.875rem', { lineHeight: 'auto' }],
        '5xl': ['2.25rem', { lineHeight: 'auto' }],
        '6xl': ['3rem', { lineHeight: 'auto' }],
        '7xl': ['3.75rem', { lineHeight: 'auto' }],
        '8xl': ['4.5rem', { lineHeight: 'auto' }],
        '9xl': ['6rem', { lineHeight: 'auto' }],
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        // 😎 similar to `@apply`
        '.btn': `px-4 py-1 rounded-full bg-red-800 text-white`,
        '.body-text': `font-serif leading-relaxed tracking-wide text-gray-800`,
      })
    }),
  ],
}
