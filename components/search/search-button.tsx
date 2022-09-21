import React, { useContext } from 'react'
import Link from 'next/link'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'

interface Props {
  link: string
  name: string
  condition: boolean
}

const SearchButton: React.FC<Props> = ({ link, name, condition }) => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const { baseSize } = useContext(FontSizeContext)

  return (
    <div className='w-full'>
      <Link href={link}>
        <a className={`w-full pt-3 flex items-center justify-center ${backgroundTheme === 'light' ? 'hover:bg-gray-100' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:bg-slate-800'} duration-200`} style={{
          fontSize: `${baseSize}px`,
          fontWeight: condition
            ? 'bold'
            : 'normal',
        }}>
          <div style={{
            borderBottom: condition
              ? `5px solid ${colorTheme}`
              : '',
            paddingBottom: condition
              ? '8px'
              : '12px'
          }}>
            <span className={`
              ${backgroundTheme === 'dark' && !condition
                ? 'text-slate-400'
                : backgroundTheme === 'black' && !condition
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

export default SearchButton
