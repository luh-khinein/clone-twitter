import React, { MouseEventHandler, useCallback, useContext, useRef, useState } from 'react'
import PopupMenu from './popup-menu'
import { darkTheme, lightTheme } from '../libs/colors'
import { ThemeContext } from '../utils/theme'
import { FontSizeContext } from '../utils/font-size'
import { MoreIcon } from './icons/more-icon'

interface Props {
  handleModals: MouseEventHandler
}

const MoreButton: React.FC<Props> = ({ handleModals }) => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { exSmSize, xlSize } = useContext(FontSizeContext)
  const currentColor = backgroundTheme === 'light' ? lightTheme.icon : darkTheme.icon
  const refMoreButton = useRef<HTMLButtonElement>(null)
  const [moreActived, setMoreActived] = useState(false)
  const handleMorePopup = useCallback(() => {
    setMoreActived(!moreActived)
  }, [moreActived])
  const [showName, setShowName] = useState(false)
  const handleShowName = useCallback(() => {
    setShowName(true)
  }, [])
  const handleHiddeName = useCallback(() => {
    setShowName(false)
  }, [])

  return (
    <div className='flex flex-col items-center'>
      <button
        ref={refMoreButton}
        className={`tall:mb-2 cursor-pointer w-outsideIcon h-outsideIcon 2xl:w-max 2xl:h-max 2xl:p-3 flex items-center justify-center rounded-full ${backgroundTheme === 'light' ? 'hover:brightness-95 active:brightness-90' : backgroundTheme === 'black' ? 'hover:bg-zinc-900 active:bg-zinc-800' : 'hover:brightness-110 active:brightness-125'} duration-200`}
        style={{
          backgroundColor: backgroundTheme === 'light'
            ? lightTheme.background
            : backgroundTheme === 'dark'
              ? darkTheme.background
              : ''
        }}
        onClick={handleMorePopup}
        onMouseEnter={handleShowName}
        onMouseLeave={handleHiddeName}
      >
        <div className='flex items-center'>
          <MoreIcon color={currentColor} />
          <span className='hidden 2xl:inline-block mx-4' style={{
            fontSize: `${xlSize}px`
          }}>
            More
          </span>
        </div>
      </button>
      <div className={`absolute inline-block 2xl:hidden pointer-events-none z-20 bg-black text-white p-1 mt-14 rounded-md ${showName ? 'opacity-70' : 'opacity-0'} transition-opacity`} style={{
        fontSize: `${exSmSize}px`
      }}>
        More
      </div>
      {moreActived && (
        <div className='fixed left-0 top-0 w-full h-full z-20' onClick={handleMorePopup}>
          <PopupMenu
            handleModals={handleModals}
            moreButton={refMoreButton}
          />
        </div>
      )}
    </div>
  )
}

export default MoreButton
