import React, { useContext } from 'react'
import Link from 'next/link'
import { ThemeContext } from '../utils/theme'
import { FontSizeContext } from '../utils/font-size'

interface Props {
  link: string
  linkName: string
  extraLinkName?: string
  name: string
  currentPage: string
}

const TabListButton: React.FC<Props> = ({ link, name, linkName, extraLinkName, currentPage }) => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const { baseSize } = useContext(FontSizeContext)
  return (
    <div className='w-full'>
      <Link href={link}>
        <a className={`w-full pt-3 flex items-center justify-center ${backgroundTheme === 'light' ? 'hover:bg-gray-100' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:bg-slate-800'} duration-200`} style={{
          fontSize: `${baseSize}px`,
          fontWeight: currentPage === linkName || currentPage === extraLinkName
            ? 'bold'
            : 'normal',
        }}>
          <div style={{
            borderBottom: currentPage === linkName || currentPage === extraLinkName
              ? `5px solid ${colorTheme}`
              : '',
            paddingBottom: currentPage === linkName || currentPage === extraLinkName
              ? '8px'
              : '12px'
          }}>
            <span className={`
              ${backgroundTheme === 'dark' && currentPage !== linkName
                ? 'text-slate-400'
                : backgroundTheme === 'black' && currentPage !== linkName
                  ? 'text-zinc-400'
                  : ''}
            `}>
              {name}
            </span>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default TabListButton
