import React, { HTMLAttributeAnchorTarget, MouseEventHandler, useContext } from 'react'
import Link from 'next/link'
import { ThemeContext } from '../utils/theme'
import { darkTheme, lightTheme } from '../libs/colors'
import { FontSizeContext } from '../utils/font-size'

interface PopupButtonValue {
  id?: string
  link: string
  alternativeLink?: string
  target?: HTMLAttributeAnchorTarget
  name: string
  icon: any
  onClick?: MouseEventHandler
}

const PopupMenuButton: React.FC<PopupButtonValue> = ({ id, link, alternativeLink, target, name, icon, onClick }) => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { baseSize } = useContext(FontSizeContext)
  return (
    <Link href={link} as={alternativeLink ? alternativeLink : link}>
      <a id={id} onClick={onClick} target={target} className={`flex items-center py-4 px-5 w-full ${backgroundTheme === 'light' ? 'hover:brightness-95' : 'hover:brightness-110'} duration-200`} style={{
        background: backgroundTheme === 'light'
          ? lightTheme.background
          : backgroundTheme === 'dark'
            ? darkTheme.background
            : '#000',
        fontSize: `${baseSize}px`
      }}>
        <div className={`mr-4 ${backgroundTheme === 'black' ? 'text-zinc-400 fill-zinc-400' : 'text-slate-400 fill-slate-400'}`}>
          {icon}
        </div>
        {name}
      </a>
    </Link>
  )
}

export default PopupMenuButton
