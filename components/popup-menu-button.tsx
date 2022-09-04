import React, { useContext } from 'react'
import Link from 'next/link'
import { ThemeContext } from '../utils/theme'
import { darkTheme, lightTheme } from '../libs/colors'

interface PopupButtonValue {
  link: string
  alternativeLink?: string
  name: string
  icon: any

}

const PopupMenuButton: React.FC<PopupButtonValue> = ({ link, alternativeLink, name, icon }) => {
  const { backgroundTheme } = useContext(ThemeContext)
  return (
    <Link href={link} as={alternativeLink ? alternativeLink : link}>
      <a className={`flex items-center py-4 px-5 w-full ${backgroundTheme === 'light' ? 'hover:brightness-95' : 'hover:brightness-110'} duration-200`} style={{
        background: backgroundTheme === 'light'
          ? lightTheme.background
          : backgroundTheme === 'dark'
            ? darkTheme.background
            : '#000'
      }}>
        <div className='mr-4'>
          {icon}
        </div>
        {name}
      </a>
    </Link>
  )
}

export default PopupMenuButton
