import React, { useCallback, useEffect, useState } from 'react'

interface SizeValue {
  innerWidth: number
}

export const SizeContext = React.createContext<SizeValue>({
  innerWidth: 0
})

interface Props {
  children: any
}

const SizeObserver: React.FC<Props> = ({ children }) => {
  const [innerWidth, setInnerWidth] = useState(0)
  const handleResize = useCallback(() => {
    setInnerWidth(window.innerWidth)
  }, [])

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize, { passive: true })
    return () => window.removeEventListener('resize', handleResize)
  }, [handleResize])

  return (
    <SizeContext.Provider value={{ innerWidth }}>
      {children}
    </SizeContext.Provider>
  )
}

export default SizeObserver
