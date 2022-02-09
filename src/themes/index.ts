export const themes = {
  light: `${process.env.PUBLIC_URL}/styles/antd.min.css`,
  dark: `${process.env.PUBLIC_URL}/styles/antd.dark.min.css`,
}

export function getCurrentColorScheme(): 'dark' | 'light' {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark'
  } else {
    return 'light'
  }
}

// const [currentColorScheme, setCurrentColorScheme] = useState(
//   getCurrentColorScheme
// )

// function colorSchemeChangeHandler() {
//     setCurrentColorScheme(getCurrentColorScheme())
// }

export let colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)')
// colorSchemeQuery.addEventListener('change', colorSchemeChangeHandler)
