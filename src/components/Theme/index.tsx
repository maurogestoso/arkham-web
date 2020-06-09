import React, { useState, useEffect, useContext } from 'react'

type ThemeContextType = {
  theme:string;
  setTheme:(value:string) => void
}

const defaultTheme = "white"
const ThemeContext = React.createContext<ThemeContextType|null>(null)

type Props = {
  children: React.ReactNode
}
const ThemeProvider = ({children}:Props) => {
  const [theme, setTheme] = useState(defaultTheme)
  useEffect(() => {
    const currentTheme = "lightblue"
    setTheme(currentTheme)
  }, [])
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)

export default ThemeProvider