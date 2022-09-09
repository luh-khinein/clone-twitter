import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { darkTheme, lightTheme } from '../../libs/colors'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'
import SearchBar from './search-bar'
import TabList from './tab-list'

const NavBar: React.FC = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { smSize, xlSize } = useContext(FontSizeContext)
  const [searchFocus, setSearchFocus] = useState(false)

  return (
    <section className={`hidden lg:flex lg:w-[320px] xl:w-[390px] flex-col h-screen relative py-2 border-r border-l ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`} style={{
      background: backgroundTheme === 'light'
        ? lightTheme.background
        : backgroundTheme === 'dark'
          ? darkTheme.background
          : '#000',
      color: backgroundTheme === 'light'
        ? lightTheme.text
        : darkTheme.text
    }}>
      <h1 className='font-bold mb-6 px-3' style={{
        fontSize: `${xlSize}px`
      }}>
        Settings
      </h1>
      <div className='flex w-full flex-col'>
        <div className='flex items-center w-full px-3'>
          {searchFocus && (
            <button
              onClick={() => setSearchFocus(false)}
              className={`p-2 rounded-full flex items-center justify-center mr-1 ${backgroundTheme === 'light' ? 'hover:brightness-95' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:brightness-110'}`}
              style={{
                background: backgroundTheme === 'light'
                  ? lightTheme.background
                  : backgroundTheme === 'dark'
                    ? darkTheme.background
                    : ''
              }}
            >
              <BsArrowLeft />
            </button>
          )}
          <SearchBar
            focus={setSearchFocus}
          />
        </div>
        {searchFocus ? (
          <span className='mt-6 w-full flex items-center justify-center' style={{
            fontSize: `${smSize}px`
          }}>
            Try searching for notifications, privacy, etc.
          </span>
        ) : (
          <div className='flex w-full mt-1'>
            <TabList />
          </div>
        )}
      </div>
    </section>
  )
}

export default NavBar
