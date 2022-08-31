// make api later
import React, { useContext } from 'react'
import { IoSettingsOutline } from 'react-icons/io5'
import { RiMailAddLine } from 'react-icons/ri'
import { darkTheme, lightTheme } from '../../libs/colors'
import { ThemeContext } from '../../utils/theme'

const Navigations: React.FC = () => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  return (
    <div className={`w-timeline lg:flex lg:flex-col lg:min-w-[318px] lg:max-w-[318px] xl:min-w-[388px] xl:max-w-[388px] min-h-full border-l border-r ${backgroundTheme === 'light' ? 'border-gray-100' : 'border-gray-700'}`} style={{
      color: backgroundTheme === 'light'
        ? lightTheme.text
        : darkTheme.text
    }}>
      <div className='flex w-full justify-between px-5 py-3'>
        <h1 className='text-xl font-bold tracking-wider'>
          Messages
        </h1>
        <div className='flex'>
          <button className={`flex items-center justify-center p-2 rounded-full ${backgroundTheme === 'light' ? 'hover:brightness-95 active:brightness-90' : 'hover:brightness-110 actvie:brightness-125'} duration-200`} style={{
            background: backgroundTheme === 'light'
              ? lightTheme.background
              : backgroundTheme === 'dark'
                ? darkTheme.background
                : '#000'
          }}>
            <IoSettingsOutline className='w-5 h-5' />
          </button>
          <button className={`flex items-center justify-center p-2 rounded-full ${backgroundTheme === 'light' ? 'hover:brightness-95 active:brightness-90' : 'hover:brightness-110 active-brightness-125'} duration-200`} style={{
            background: backgroundTheme === 'light'
              ? lightTheme.background
              : backgroundTheme === 'dark'
                ? darkTheme.background
                : '#000'
          }}>
            <RiMailAddLine className='w-5 h-5' />
          </button>
        </div>
      </div>
      <div className='my-6 px-5 flex flex-col items-center justify-center w-full'>
        <h2 className='font-bold text-3xl px-1 w-[300px] lg:w-fit'>
          Welcome to your
          inbox!
        </h2>
        <span className='text-sm text-slate-400 w-[360px] lg:w-fit'>
          Drop a line, share Tweets and more with private
          conversations between you and others on
          Twitter.
        </span>
      </div>
      <div className='px-5 flex w-full justify-center mt-2'>
        <button className='font-bold w-max rounded-full flex items-center justify-center py-4 px-8 text-white hover:brightness-95 duration-200' style={{ background: colorTheme }}>
          Write a message
        </button>
      </div>
    </div>
  )
}

export default Navigations
