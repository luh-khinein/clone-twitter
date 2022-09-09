import React, { useContext } from 'react'
import Link from 'next/link'
import { MdArrowForwardIos } from 'react-icons/md'
import { darkTheme, lightTheme } from '../../libs/colors'
import { ThemeContext } from '../../utils/theme'
import { FontSizeContext } from '../../utils/font-size'

interface Props {
  name: string
  definition: string
  link: string
  icon: any
}

const SettingsButton: React.FC<Props> = ({ name, definition, link, icon }) => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { exSmSize, baseSize } = useContext(FontSizeContext)
  return (
    <Link href={link}>
      <a className={`flex items-center justify-between w-full px-5 py-3 ${backgroundTheme === 'light' ? 'hover:brightness-95' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:brightness-110'} duration-200`} style={{
        background: backgroundTheme === 'light'
          ? lightTheme.background
          : backgroundTheme === 'dark'
            ? darkTheme.background
            : ''
      }}>
        <div className='flex items-center'>
          {icon}
          <div className='flex flex-col justify-start ml-5'>
            <span style={{ fontSize: `${baseSize}px` }}>
              {name}
            </span>
            <span style={{ fontSize: `${exSmSize}px` }}>
              {definition}
            </span>
          </div>
        </div>
        <MdArrowForwardIos />
      </a>
    </Link>
  )
}

export default SettingsButton
