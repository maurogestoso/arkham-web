import React from 'react'
import ThemeProvider, { useTheme } from '../Theme'

const Landing = () => (
  <div>
    <h1>Landing</h1>
    <ThemeProvider>
      <Header />
    </ThemeProvider>
  </div>
)

const Header = () => {
  const {theme, setTheme} = useTheme()!
  return (
    <div style={{backgroundColor: theme}}>
      <p>Hello!</p>
      <select value={theme} onChange={(e) => setTheme(e.currentTarget.value)}>
        <option value="white">White</option>
        <option value="lightblue">Lightblue</option>
        <option value="lightgreen">Lightgreen</option>
      </select>
    </div>
  )
}

export default Landing