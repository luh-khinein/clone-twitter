import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import Layout from '../../../../../components/layouts/layout'
import { ThemeContext } from '../../../../../utils/theme'
import { darkTheme, lightTheme } from '../../../../../libs/colors'
import { FontSizeContext } from '../../../../../utils/font-size'

const QuoteTweets: NextPage = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { xlSize } = useContext(FontSizeContext)
  const router = useRouter()
  return (
    <Layout searchBar={true} hCard={true} fCard={false} stickyPosition={0}>
      <section id='home' className={`w-timeline min-h-full border-l border-r ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'} items-center pt-14`} style={{
        color: backgroundTheme === 'light' ? lightTheme.text : darkTheme.text
      }}>
        <div className='w-[598px] z-10 backdrop-blur-sm min-w-min flex justify-between items-center py-2 px-5 fixed top-0' style={{
          background: backgroundTheme === 'light'
            ? 'rgba(255, 255, 255, 0.85)'
            : backgroundTheme === 'dark'
              ? 'rgba(21, 32, 43, 0.85)'
              : 'rgba(0, 0, 0, 0.85)'
        }}>
          <div className='flex items-center'>
            <button
              onClick={() => router.back()}
              className={`rounded-full p-2 mr-5 flex items-center justify-center duration-200 ${backgroundTheme === 'light' ? 'hover:brightness-75' : 'hover:brightness-125'}`}
              style={{
                background: backgroundTheme === 'light'
                  ? 'rgba(255, 255, 255, 0.85)'
                  : backgroundTheme === 'dark'
                    ? 'rgba(21, 32, 43, 0.85)'
                    : 'rgba(0, 0, 0, 0.85)'
              }}
            >
              <BsArrowLeft className='w-5 h-5' />
            </button>
            <h1 className='font-bold' style={{ fontSize: `${xlSize}px` }}>
              Quote Tweets
            </h1>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default QuoteTweets
