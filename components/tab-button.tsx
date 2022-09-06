import React, { useCallback, useContext, useState } from 'react'
import Link from 'next/link'
import { ThemeContext } from '../utils/theme'
import { lightTheme } from '../libs/colors'
import { FontSizeContext } from '../utils/font-size'

interface TabButtonValue {
  link: string
  linkName: string
  name: string
  currentPage: string
  condition: boolean
  activedIcon: React.ReactElement
  desativedIcon: React.ReactElement
}

const TabButton: React.FC<TabButtonValue> = ({ link, name, linkName, currentPage, condition, activedIcon, desativedIcon }) => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { exSmSize, xlSize } = useContext(FontSizeContext)
  const [showName, setShowName] = useState(false)
  const handleShowName = useCallback(() => {
    setShowName(true)
  }, [])
  const handleHiddeName = useCallback(() => {
    setShowName(false)
  }, [])

  return (
    <div className='flex flex-col items-center'>
      <Link href={link}>
        <a
          onMouseEnter={handleShowName}
          onMouseLeave={handleHiddeName}
          className={`tall:mb-2 w-outsideIcon h-outsideIcon 2xl:w-max 2xl:h-max 2xl:p-3 flex items-center justify-center rounded-full ${backgroundTheme === 'light' ? 'hover:brightness-95' : backgroundTheme === 'black' ? 'hover:bg-zinc-900' : 'hover:brightness-110'} duration-200`} style={{
            backgroundColor: backgroundTheme === 'light'
              ? lightTheme.background
              : ''
          }}>
          {currentPage === linkName && condition
            ? (
              <div className='flex'>
                {activedIcon}
                <span className='hidden 2xl:inline-block font-bold mx-4' style={{
                  fontSize: `${xlSize}px`
                }}>
                  {name}
                </span>
              </div>
            )
            : (
              <div className='flex'>
                {desativedIcon}
                <span className='hidden 2xl:inline-block mx-4' style={{
                  fontSize: `${xlSize}px`
                }}>
                  {name}
                </span>
              </div>
            )
          }
        </a>
      </Link>
      <div className={`absolute inline-block 2xl:hidden pointer-events-none z-20 bg-black text-white p-1 mt-14 rounded-md ${showName ? 'opacity-70' : 'opacity-0'} transition-opacity`} style={{
        fontSize: `${exSmSize}px`
      }}>
        {name}
      </div>
    </div>
  )
}

export default TabButton
