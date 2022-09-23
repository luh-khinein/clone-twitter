import React, { useContext } from 'react'
import Link from 'next/link'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'
import { darkTheme, lightTheme } from '../../libs/colors'
import { SearchFilterLocation, SearchFilterPeople } from './search-filters'
import { useRouter } from 'next/router'

const SearchFilter: React.FC = () => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const { baseSize, xlSize } = useContext(FontSizeContext)
  const router = useRouter()
  return (
    <div className={`w-full flex flex-col items-start justify-start border rounded-xl ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
      <h1 className='font-bold px-3 py-2 mb-3' style={{ fontSize: `${xlSize}px` }}>
        Search filters
      </h1>
      <div className='mb-1 flex w-full'>
        <SearchFilterPeople />
      </div>
      <div className='mb-5 flex w-full'>
        <SearchFilterLocation />
      </div>
      <Link href={`${router.asPath}&search_advanced=true`} as='/search_advanced'>
        <a className={`w-full px-3 py-5 flex rounded-b-xl duration-200 ${backgroundTheme === 'light' ? 'hover:brightness-95' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:brightness-110'}`} style={{
          background: backgroundTheme === 'light'
            ? lightTheme.background
            : backgroundTheme === 'dark'
              ? darkTheme.background
              : '',
          color: colorTheme
        }}>
          Advanced search
        </a>
      </Link>
    </div>
  )
}

export default SearchFilter
