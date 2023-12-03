import { createContext, useContext, useState } from 'react'

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
  if (lStorageThemeType === ThemeTypes.DARK) document.querySelector('body')?.classList.add('dark-theme')
  const [theme, setTheme] = useState<ThemeTypes>(lStorageThemeType)

  function toggleTheme() {
    const newTheme = theme === ThemeTypes.LIGTH ? ThemeTypes.DARK : ThemeTypes.LIGTH
    localStorage.setItem('theme', newTheme.toString())
    if (newTheme === ThemeTypes.DARK) document.querySelector('body')?.classList.add('dark-theme')
    else document.querySelector('body')?.classList.remove('dark-theme')
    setTheme(newTheme)
  }

  function isDark() {
    return theme === ThemeTypes.DARK;
  }

  const value: Props = { theme, toggleTheme, isDark }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider >
}