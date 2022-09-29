import React, { MouseEventHandler, useContext } from 'react'
import Link from 'next/link'
import { MdArrowForwardIos } from 'react-icons/md'
import { darkTheme, lightTheme } from '../../libs/colors'
import { ThemeContext } from '../../utils/theme'
import { FontSizeContext } from '../../utils/font-size'

interface Props {
  name: string
  definition: string
  link: string
  alternativeLink?: string
  hasIcon: boolean
  icon?: any
  onClick?: MouseEventHandler
}

const SettingsButton: React.FC<Props> = ({ name, definition, link, alternativeLink, hasIcon, icon, onClick }) => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { exSmSize, baseSize } = useContext(FontSizeContext)
  return (
    <Link href={link} as={alternativeLink ? alternativeLink : link}>
      <a onClick={onClick} className={`flex items-center justify-between w-full py-3 ${hasIcon ? 'px-5' : 'px-3'} ${backgroundTheme === 'light' ? 'hover:brightness-95' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:brightness-110'} duration-200`} style={{
        background: backgroundTheme === 'light'
          ? lightTheme.background
          : backgroundTheme === 'dark'
            ? darkTheme.background
            : ''
      }}>
        <div className='flex items-center'>
          {hasIcon && (
            <div className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`}>
              {icon}
            </div>
          )}
          <div className={`flex flex-col justify-start ${hasIcon ? 'ml-5' : ''}`}>
            <span style={{ fontSize: `${baseSize}px` }}>
              {name}
            </span>
            <span className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${exSmSize}px` }}>
              {definition}
            </span>
          </div>
        </div>
        <MdArrowForwardIos className={`w-4 h-4 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} />
      </a>
    </Link>
  )
}

export default SettingsButton
