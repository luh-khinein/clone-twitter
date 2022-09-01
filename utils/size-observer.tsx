import React, { useCallback, useEffect, useState } from 'react'

interface SizeValue {
  innerWidth: number
  innerHeight: number
}

export const SizeContext = React.createContext<SizeValue>({
  innerWidth: 0,
  innerHeight: 0
})

interface Props {
  children: any
}

const SizeObserver: React.FC<Props> = ({ children }) => {
  const [innerWidth, setInnerWidth] = useState(0)
  const [innerHeight, setInnerHeight] = useState(0)
  const handleResize = useCallback(() => {
    setInnerWidth(window.innerWidth)
    setInnerHeight(window.innerHeight)
  }, [])

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize, { passive: true })
    return () => window.removeEventListener('resize', handleResize)
  }, [handleResize])

  return (
    <SizeContext.Provider value={{ innerWidth, innerHeight }}>
      {children}
    </SizeContext.Provider>
  )
}

export default SizeObserver
