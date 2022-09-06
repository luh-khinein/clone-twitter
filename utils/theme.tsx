import React, { useCallback, useState } from 'react'
import { colors } from '../libs/colors'

interface ThemeValue {
  backgroundTheme: string
  colorTheme: string
  lightColorTheme: string
  hoverColorTheme: string
  handleBackground: (background: string) => void
  handleColors: (color: string, lightColor: string, hoverColor: string) => void
}

export const ThemeContext = React.createContext<ThemeValue>({
  backgroundTheme: 'light',
  colorTheme: colors.default,
  lightColorTheme: colors.defaultLight,
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
  const [lightColorTheme, setLightColorTheme] = useState(colors.defaultLight)
  const [hoverColorTheme, setHoverColorTheme] = useState(colors.defaultHover)
  const handleBackground = useCallback((background: string) => {
    setBackgroundTheme(background)
  }, [setBackgroundTheme])
  const handleColors = useCallback((color: string, lightColor: string, hoverColor: string) => {
    setColorTheme(color)
    setLightColorTheme(lightColor)
    setHoverColorTheme(hoverColor)
  }, [setColorTheme, setHoverColorTheme])

  return (
    <ThemeContext.Provider value={{
      backgroundTheme, handleBackground,
      colorTheme, lightColorTheme, hoverColorTheme, handleColors
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
