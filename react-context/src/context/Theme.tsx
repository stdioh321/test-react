import { createContext, useContext, useEffect, useState } from 'react'

export enum ThemeTypes {
  DARK = 'dark',
  LIGTH = 'light',
}

export type Props = {
  theme: string,
  toggleTheme: () => void,
  isDark: () => boolean
}
export const ThemeContext = createContext<Props | undefined>()
export const getContext = (): Props => useContext(ThemeContext)
export const ThemeProvider = ({ children }) => {
  const lStorageThemeType: ThemeTypes = (localStorage.getItem('theme') || ThemeTypes.LIGTH) as ThemeTypes
  const [theme, setTheme] = useState<ThemeTypes>(lStorageThemeType)

  function toggleTheme() {
    const newTheme = theme === ThemeTypes.LIGTH ? ThemeTypes.DARK : ThemeTypes.LIGTH
    setTheme(newTheme)
  }

  function isDark() {
    return theme === ThemeTypes.DARK;
  }

  const value: Props = { theme, toggleTheme, isDark }

  useEffect(() => {
    localStorage.setItem('theme', theme.toString())

    const elBody = document.querySelector('body')
    if (theme === ThemeTypes.DARK) elBody?.classList.add('dark-theme')
    else elBody?.classList.remove('dark-theme')
  }, [theme])
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider >
}