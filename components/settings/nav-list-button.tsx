import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import Link from 'next/link'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'
import { MdArrowForwardIos } from 'react-icons/md'
import { darkTheme } from '../../libs/colors'

interface ButtonValue {
  link: string
  name: string
}

const NavListButton: React.FC<ButtonValue> = ({ link, name }) => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const { baseSize } = useContext(FontSizeContext)
  const router = useRouter()

  return (
    <Link href={link}>
      <a className={`px-4 w-full py-3 flex items-center justify-between
          ${router.asPath === link ? 'border-r-2' : ''} duration-200
          ${backgroundTheme === 'light' ? 'hover:bg-gray-100' : backgroundTheme === 'black' ? 'hover:bg-zinc-900' : 'hover:brightness-110'}
          ${backgroundTheme === 'light' && router.asPath === link
          ? 'bg-gray-100'
          : backgroundTheme === 'dark' && router.asPath === link
            ? 'brightness-110'
            : backgroundTheme === 'black' && router.asPath === link
              ? 'bg-zinc-900'
              : ''}
        `} style={{
          fontSize: `${baseSize}px`,
          background: backgroundTheme === 'dark'
            ? darkTheme.background
            : '',
          borderRightColor: colorTheme
        }}>
        <span>
          {name}
        </span>
        <MdArrowForwardIos className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} />
      </a>
    </Link>
  )
}

export default NavListButton
