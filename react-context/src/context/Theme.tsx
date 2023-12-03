import { createContext, useContext, useState } from 'react'

export enum ThemeTypes {
  DARK = 'dark',
  LIGTH = 'light',
}

export type Props = {
  theme: string,
  toggleTheme: () => void
}
export const ThemeContext = createContext<Props | undefined>()
export const getContext = (): Props => useContext(ThemeContext)
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState<ThemeTypes>(ThemeTypes.LIGTH)

  function toggleTheme() {
    console.log(`Theme ${theme} selected`);

    setTheme(theme === ThemeTypes.LIGTH ? ThemeTypes.DARK : ThemeTypes.LIGTH)
  }

  const value: Props = { theme, toggleTheme }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider >
}