import React, { MouseEventHandler, useContext } from 'react'
import { ThemeContext } from '../../utils/theme'
import { darkTheme, lightTheme } from '../../libs/colors'
import { FontSizeContext } from '../../utils/font-size'
import { IoSettingsOutline } from 'react-icons/io5'
import { BsSliders } from 'react-icons/bs'
import { RiSearch2Line } from 'react-icons/ri'
import { AiOutlinePlusCircle } from 'react-icons/ai'

interface Props {
  moreButton: React.RefObject<HTMLButtonElement>
  handleSearchModal: MouseEventHandler
  handleFilterModal: MouseEventHandler
  handleAdvancedModal: MouseEventHandler
}

const SearchMorePopup: React.FC<Props> = ({ moreButton, handleSearchModal, handleFilterModal, handleAdvancedModal }) => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { baseSize } = useContext(FontSizeContext)
  return (
    <div className={`fixed z-30 w-max h-max ${backgroundTheme === 'light' ? 'drop-shadow-xl' : 'drop-shadow-[0_20px_13px_rgba(255,255,255,.05)]'} rounded-xl`} style={{
      background: backgroundTheme === 'light'
        ? lightTheme.background
        : backgroundTheme === 'dark'
          ? darkTheme.background
          : '#000',
      color: backgroundTheme === 'light'
        ? lightTheme.text
        : darkTheme.text,
      left: `${moreButton.current!.getBoundingClientRect().x - 150}px`,
      top: `${moreButton.current!.getBoundingClientRect().y - 5}px`
    }}>
      <button
        onClick={handleSearchModal}
        className={`flex items-center justify-between w-full py-3 px-5 ${backgroundTheme === 'light' ? 'hover:brightness-95' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:brightness-110'} duration-200`}
        style={{
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
      </button>
      <button
        onClick={handleFilterModal}
        className={`flex lg:hidden items-center justify-between w-full py-3 px-5 ${backgroundTheme === 'light' ? 'hover:brightness-95' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:brightness-110'} duration-200`}
        style={{
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
      </button>
      <button
        onClick={handleAdvancedModal}
        className={`flex items-center justify-between w-full py-3 px-5 ${backgroundTheme === 'light' ? 'hover:brightness-95' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:brightness-110'} duration-200`} style={{
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
      </button>
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
