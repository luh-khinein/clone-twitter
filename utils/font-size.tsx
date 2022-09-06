import React, { useCallback, useState } from 'react'
import { fontSizes } from '../libs/font-size'

interface FontValue {
  exSmSize: number
  smSize: number
  baseSize: number
  lgSize: number
  xlSize: number
  exXlSize: number
  handleSize: (newSize: number) => void
}

export const FontSizeContext = React.createContext<FontValue>({
  exSmSize: 0,
  smSize: 0,
  baseSize: fontSizes.default,
  lgSize: 0,
  xlSize: 0,
  exXlSize: 0,
  handleSize: () => null
})

interface Props {
  children: any
}

const FontSizeProvider: React.FC<Props> = ({ children }) => {
  const [baseSize, setBaseSize] = useState(fontSizes.default)
  const exSmSize = baseSize - 4
  const smSize = baseSize - 2
  const lgSize = baseSize + 2
  const xlSize = baseSize + 4
  const exXlSize = baseSize + 6
  const handleSize = useCallback((newSize: number) => {
    setBaseSize(newSize)
  }, [setBaseSize])
  return (
    <FontSizeContext.Provider value={{ exSmSize, smSize, baseSize, lgSize, xlSize, exXlSize, handleSize }}>
      {children}
    </FontSizeContext.Provider>
  )
}

export default FontSizeProvider
