import type { NextPage } from 'next'
import React, { useContext } from 'react'
import Image from 'next/image'
import Layout from '../../components/layouts/layout'
import { ThemeContext } from '../../utils/theme'
import { darkTheme, lightTheme } from '../../libs/colors'
import { FontSizeContext } from '../../utils/font-size'

const Bookmarks: NextPage = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { smSize, baseSize, xlSize } = useContext(FontSizeContext)
  const username = 'username' // fix it later
  return (
    <Layout searchBar={true} hCard={true} fCard={true} stickyPosition={450}>
      <section className={`w-timeline flex flex-col min-h-full border-l border-r ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`} style={{
        color: backgroundTheme === 'light'
          ? lightTheme.text
          : darkTheme.text
      }}>
        <div className='flex flex-col py-2 px-5'>
          <h1 className='font-bold' style={{
            fontSize: `${xlSize}px`
          }}>
            Bookmarks
          </h1>
          <span className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{
            fontSize: `${smSize}px`
          }}>
            @{username}
          </span>
        </div>
        <div className='w-full flex flex-col items-center justify-center mt-10'>
          <div className='max-w-[330px] max-h-[160px] mb-8'>
            <Image
              src='/assets/bookmark-empty.png'
              alt='bookmark'
              width={400}
              height={200}
            />
          </div>
          <h2 className='text-3xl font-bold my-1'>
            Save Tweets for late
          </h2>
          <span className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'} w-[360px]`} style={{
            fontSize: `${baseSize}px`
          }}>
            Don't let the good ones fly away! Bookmark
            Tweets to easily find them again in the future.
          </span>
        </div>
      </section>
    </Layout>
  )
}

export default Bookmarks
