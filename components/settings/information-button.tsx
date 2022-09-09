import React, { useContext } from 'react'
import Link from 'next/link'
import { darkTheme, lightTheme } from '../../libs/colors'
import { ThemeContext } from '../../utils/theme'
import { FontSizeContext } from '../../utils/font-size'
import { FiArrowUpRight } from 'react-icons/fi'

interface Props {
  link: string
  name: string
}

const InformationButton: React.FC<Props> = ({ name, link }) => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { baseSize } = useContext(FontSizeContext)
  return (
    <Link href={link} target='_blank'>
      <a className={`flex items-center justify-between w-full px-5 py-3 ${backgroundTheme === 'light' ? 'hover:brightness-95' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:brightness-110'} duration-200`} style={{
        background: backgroundTheme === 'light'
          ? lightTheme.background
          : backgroundTheme === 'dark'
            ? darkTheme.background
            : ''
      }}>
        <span style={{ fontSize: `${baseSize}px` }}>
          {name}
        </span>
        <FiArrowUpRight />
      </a>
    </Link>
  )
}

export default InformationButton
