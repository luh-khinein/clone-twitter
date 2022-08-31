import React, { useCallback, useState } from 'react'
import { colors } from '../libs/colors'

interface ThemeValue {
  backgroundTheme: string
  colorTheme: string
  hoverColorTheme: string
  handleBackground: () => any
  handleColors: () => any
}

export const ThemeContext = React.createContext<ThemeValue>({
  backgroundTheme: 'light',
  colorTheme: colors.default,
  hoverColorTheme: colors.defaultHover,
  handleBackground: () => null,
  handleColors: () => null
})

interface Props {
  children: any
}

const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [backgroundTheme, setBackgroundTheme] = useState('light')
  const [colorTheme, setColorTheme] = useState(colors.default)
  const [hoverColorTheme, setHoverColorTheme] = useState(colors.defaultHover)
  const handleBackground = useCallback(() => {
    if (backgroundTheme === 'light') {
      setBackgroundTheme('dark')
    } else {
      setBackgroundTheme('light')
    }
  }, [backgroundTheme, setBackgroundTheme])
  const handleColors = useCallback(() => {
  }, [setColorTheme, setHoverColorTheme])

  return (
    <ThemeContext.Provider value={{
      backgroundTheme, handleBackground,
      colorTheme, hoverColorTheme, handleColors
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
