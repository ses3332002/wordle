export const themes = {
  light: `${process.env.PUBLIC_URL}/styles/styles.min.css`,
  dark: `${process.env.PUBLIC_URL}/styles/styles.dark.min.css`,
}

export function getCurrentColorScheme(): 'dark' | 'light' {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark'
  } else {
    return 'light'
  }
}

export const colorSchemeQuery = window.matchMedia(
  '(prefers-color-scheme: dark)'
)
