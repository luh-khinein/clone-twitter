import React, { useCallback, useContext, useState } from 'react'
import Link from 'next/link'
import { ThemeContext } from '../../utils/theme'
import { AiOutlineThunderbolt } from 'react-icons/ai'

const MomentsCreateButton: React.FC = () => {
  const { colorTheme } = useContext(ThemeContext)
  const [showName, setShowName] = useState(false)
  const handleShowName = useCallback(() => {
    setShowName(true)
  }, [])
  const handleHiddeName = useCallback(() => {
    setShowName(false)
  }, [])
  return (
    <div className='flex flex-col items-center'>
      <Link href='/home'>
        <a
          onMouseEnter={handleShowName}
          onMouseLeave={handleHiddeName}
          className='w-outsideIcon h-outsideIcon 2xl:w-min 2xl:h-min flex items-center justify-center rounded-full hover:brightness-90 active:brightness-75 duration-200'
          style={{ background: colorTheme }}
        >
          <AiOutlineThunderbolt className='w-icon h-icon text-white 2xl:hidden' />
          <span className='hidden text-xl font-bold 2xl:inline-block text-white py-3 px-10'>
            Moments
          </span>
        </a>
      </Link>
      <div className={`absolute inline-block 2xl:hidden pointer-events-none z-20 bg-black text-white text-xs p-1 mt-14 rounded-md ${showName ? 'opacity-70' : 'opacity-0'} transition-opacity`}>
        Moments
      </div>
    </div>
  )
}

export default MomentsCreateButton