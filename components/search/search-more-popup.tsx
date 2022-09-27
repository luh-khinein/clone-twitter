import React, { MouseEventHandler, useContext } from 'react'
import Link from 'next/link'
import { ThemeContext } from '../../utils/theme'
import { darkTheme, lightTheme } from '../../libs/colors'
import { FontSizeContext } from '../../utils/font-size'
import { IoSettingsOutline } from 'react-icons/io5'
import { BsSliders } from 'react-icons/bs'
import { RiSearch2Line } from 'react-icons/ri'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { useRouter } from 'next/router'

interface Props {
  handleSearch: MouseEventHandler
  handleSearchFilter: MouseEventHandler
  handleSearchAdvanced: MouseEventHandler
}

const SearchMorePopup: React.FC<Props> = ({ handleSearch, handleSearchFilter, handleSearchAdvanced }) => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { baseSize } = useContext(FontSizeContext)
  const router = useRouter()
  return (
    <div className={`fixed z-30 top-5 left-[50%] w-max h-max ${backgroundTheme === 'light' ? 'drop-shadow-xl' : 'drop-shadow-[0_20px_13px_rgba(255,255,255,.05)]'} rounded-xl`} style={{
      background: backgroundTheme === 'light'
        ? lightTheme.background
        : backgroundTheme === 'dark'
          ? darkTheme.background
          : '#000',
      color: backgroundTheme === 'light'
        ? lightTheme.text
        : darkTheme.text,
    }}>
      <Link href={`${router.asPath}`} as='/settings/search'>
        <a onClick={handleSearch} className={`flex items-center justify-between w-full py-3 px-5 ${backgroundTheme === 'light' ? 'hover:brightness-95' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:brightness-110'} duration-200`} style={{
          background: backgroundTheme === 'light'
            ? lightTheme.background
            : backgroundTheme === 'dark'
              ? darkTheme.background
              : ''
        }}>
          <div className='flex items-center'>
            <div className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`}>
              <IoSettingsOutline className='w-5 h-5' />
            </div>
            <div className={`flex flex-col justify-start ml-5`}>
              <span style={{ fontSize: `${baseSize}px` }}>
                Search settings
              </span>
            </div>
          </div>
        </a>
      </Link>
      <Link href={`${router.asPath}`} as={`/i/search_filters?${router.query.q?.toString}`}>
        <a onClick={handleSearchFilter} className={`flex lg:hidden items-center justify-between w-full py-3 px-5 ${backgroundTheme === 'light' ? 'hover:brightness-95' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:brightness-110'} duration-200`} style={{
          background: backgroundTheme === 'light'
            ? lightTheme.background
            : backgroundTheme === 'dark'
              ? darkTheme.background
              : ''
        }}>
          <div className='flex items-center'>
            <div className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`}>
              <BsSliders className='w-5 h-5' />
            </div>
            <div className={`flex flex-col justify-start ml-5`}>
              <span style={{ fontSize: `${baseSize}px` }}>
                Search filters
              </span>
            </div>
          </div>
        </a>
      </Link>
      <Link href={`${router.asPath}`} as='/search_advanced'>
        <a onClick={handleSearchAdvanced} className={`flex items-center justify-between w-full py-3 px-5 ${backgroundTheme === 'light' ? 'hover:brightness-95' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:brightness-110'} duration-200`} style={{
          background: backgroundTheme === 'light'
            ? lightTheme.background
            : backgroundTheme === 'dark'
              ? darkTheme.background
              : ''
        }}>
          <div className='flex items-center'>
            <div className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`}>
              <RiSearch2Line className='w-5 h-5' />
            </div>
            <div className={`flex flex-col justify-start ml-5`}>
              <span style={{ fontSize: `${baseSize}px` }}>
                Advanced search
              </span>
            </div>
          </div>
        </a>
      </Link>
      <button className={`flex items-center justify-between w-full py-3 px-5 ${backgroundTheme === 'light' ? 'hover:brightness-95' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:brightness-110'} duration-200`} style={{
        background: backgroundTheme === 'light'
          ? lightTheme.background
          : backgroundTheme === 'dark'
            ? darkTheme.background
            : ''
      }}>
        <div className='flex items-center'>
          <div className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`}>
            <AiOutlinePlusCircle className='w-5 h-5' />
          </div>
          <div className={`flex flex-col justify-start ml-5`}>
            <span style={{ fontSize: `${baseSize}px` }}>
              Save search
            </span>
          </div>
        </div>
      </button>
    </div>
  )
}

export default SearchMorePopup
