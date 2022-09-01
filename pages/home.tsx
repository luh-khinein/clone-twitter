import React, { useContext } from 'react'
import type { NextPage } from 'next'
import { HiOutlineSparkles } from 'react-icons/hi'
import PostBox from '../components/post-box'
import { ThemeContext } from '../utils/theme'
import { darkTheme, lightTheme } from '../libs/colors'
import SidebarLayout from '../components/layouts/sidebar-layout'

const Home: NextPage = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  return (
    <SidebarLayout searchBar={true} hCard={true} fCard={true} stickyPosition={450}>
      <div id='home' className={`w-timeline min-h-full border-l border-r ${backgroundTheme === 'light' ? 'border-gray-100' : 'border-gray-700'} items-center pt-8`} style={{
        color: backgroundTheme === 'light' ? lightTheme.text : darkTheme.text
      }}>
        <div className='w-[598px] z-10 backdrop-blur-sm min-w-min flex justify-between items-center py-2 px-5 fixed top-0' style={{
          background: backgroundTheme === 'light'
            ? 'rgba(255, 255, 255, 0.85)'
            : backgroundTheme === 'dark'
              ? 'rgba(21, 32, 43, 0.85)'
              : 'rgba(0, 0, 0, 0.85)'
        }}>
          <div className='flex justify-center'>
            <h1 className='text-xl font-bold'>
              Home
            </h1>
          </div>
          <button className={`p-2 flex justify-center items-center rounded-full ${backgroundTheme === 'light' ? 'hover:brightness-95 active:brightness-90' : 'hover:brightness-110 active:brightness-125'} duration-200`} style={{
            backgroundColor: backgroundTheme === 'light'
              ? lightTheme.background
              : backgroundTheme === 'dark'
                ? darkTheme.background
                : '#000'
          }}>
            <HiOutlineSparkles className='w-5 h-5' />
          </button>
        </div>
        <PostBox autoTextAreaRows={true} rows={1} />
        <div className={`min-w-full border-b ${backgroundTheme === 'light' ? 'border-gray-100' : 'border-gray-700'}`} />
      </div>
    </SidebarLayout>
  )
}

export default Home
