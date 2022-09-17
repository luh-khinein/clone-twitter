import React, { useContext } from 'react'
import Link from 'next/link'
import { ThemeContext } from '../../utils/theme'
import { darkTheme } from '../../libs/colors'
import { FontSizeContext } from '../../utils/font-size'
import { MdArrowForwardIos } from 'react-icons/md'

interface SessionButtonValue {
  link: string
  device: any
  system: string
  local: string
  date: string
}

const SessionButton: React.FC<SessionButtonValue> = ({ link, device, system, local, date }) => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const { smSize, baseSize } = useContext(FontSizeContext)
  return (
    <Link href={link}>
      <a className={`flex px-3 py-3 w-full items-center justify-between duration-200 ${backgroundTheme === 'light' ? 'hover:bg-gray-50' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:brightness-110'}`} style={{
        background: backgroundTheme === 'dark'
          ? darkTheme.background
          : ''
      }}>
        <div className='flex items-center'>
          <div className={`p-2 mr-3 flex items-center justify-center border rounded-full ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
            {device}
          </div>
          <div className='flex flex-col'>
            <span className='font-bold' style={{ fontSize: `${baseSize}px` }}>
              {system}
            </span>
            <span className={`flex items-center`} style={{ fontSize: `${smSize}px` }}>
              {local} ·&nbsp;{date !== 'Active now' ? (
                <span>
                  {date}
                </span>
              ) : (
                <span className='flex items-center justify-center text-white px-1 py-0.5 rounded-md' style={{ background: colorTheme }}>
                  {date}
                </span>
              )}
            </span>
          </div>
        </div>
        <MdArrowForwardIos className={`w-4 h-4 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} />
      </a>
    </Link>
  )
}

export default SessionButton
