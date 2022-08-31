import React, { useContext } from 'react'
import Link from 'next/link'
import { ThemeContext } from '../utils/theme'

interface Props {
  link: string
  linkName: string
  extraLinkName?: string
  name: string
  currentPage: string
}

const TabListButton: React.FC<Props> = ({ link, name, linkName, extraLinkName, currentPage }) => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  return (
    <div className='w-full'>
      <Link href={link}>
        <a className={`w-full pt-3 flex items-center justify-center ${backgroundTheme === 'light' ? 'hover:bg-neutral-100' : 'hover:bg-gray-800'} duration-200`} style={{
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
            {name}
          </div>
        </a>
      </Link>
    </div>
  )
}

export default TabListButton
