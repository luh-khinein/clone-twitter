import React, { useCallback, useContext, useState } from 'react'
import Link from 'next/link'
import { ThemeContext } from '../../utils/theme'
import { FontSizeContext } from '../../utils/font-size'
import { AddMomentIcon } from '../icons/moment-icon'

interface Props {
  isActive: boolean
}

const MomentsCreateButton: React.FC<Props> = ({ isActive }) => {
  const { colorTheme } = useContext(ThemeContext)
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
      <Link href='/i/moment_maker/edit/1'>
        <a
          onMouseEnter={handleShowName}
          onMouseLeave={handleHiddeName}
          className={`w-outsideIcon h-outsideIcon 2xl:w-min 2xl:h-min flex items-center justify-center rounded-full hover:brightness-90 active:brightness-75 duration-200 ${isActive ? '' : 'pointer-events-none brightness-90'}`}
          style={{ background: colorTheme }}
        >
          <div className='2xl:hidden'>
            <AddMomentIcon color='#fff' width={26.25} height={26.25} />
          </div>
          <span className='hidden font-bold 2xl:inline-block text-white py-3 px-10' style={{
            fontSize: `${xlSize}px`
          }}>
            Moments
          </span>
        </a>
      </Link>
      <div className={`absolute inline-block 2xl:hidden pointer-events-none z-20 bg-black text-white p-1 mt-14 rounded-md ${showName ? 'opacity-70' : 'opacity-0'} transition-opacity`} style={{
        fontSize: `${exSmSize}px`
      }}>
        Moments
      </div>
    </div>
  )
}

export default MomentsCreateButton
