import React, { useCallback, useContext, useRef, useState } from 'react'
import type { NextPage } from 'next'
import { HiOutlineSparkles } from 'react-icons/hi'
import PostBox from '../components/post-box'
import { ThemeContext } from '../utils/theme'
import { darkTheme, lightTheme } from '../libs/colors'
import Layout from '../components/layouts/layout'
import { FontSizeContext } from '../utils/font-size'
import HomeMenu from '../components/home-menu'
import TweetPost from '../components/tweet-post'

const Home: NextPage = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { xlSize } = useContext(FontSizeContext)
  const refMenuButton = useRef<HTMLButtonElement>(null)
  const [menuState, setMenuState] = useState(false)
  const handleMenuState = useCallback(() => {
    setMenuState(!menuState)
  }, [menuState])

  return (
    <Layout searchBar={true} hCard={true} fCard={true} stickyPosition={450}>
      <section id='home' className={`w-timeline min-h-full border-x ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'} items-center pt-8`} style={{
        color: backgroundTheme === 'light' ? lightTheme.text : darkTheme.text
      }}>
        <div className='w-[598px] z-20 backdrop-blur-sm min-w-min flex justify-between items-center py-2 px-5 fixed top-0' style={{
          background: backgroundTheme === 'light'
            ? 'rgba(255, 255, 255, 0.85)'
            : backgroundTheme === 'dark'
              ? 'rgba(21, 32, 43, 0.85)'
              : 'rgba(0, 0, 0, 0.85)'
        }}>
          <h1 className='font-bold' style={{
            fontSize: `${xlSize}px`
          }}>
            Home
          </h1>
          <button
            onClick={handleMenuState}
            ref={refMenuButton}
            className={`p-2 flex justify-center items-center rounded-full ${backgroundTheme === 'light' ? 'hover:brightness-95 active:brightness-90' : backgroundTheme === 'black' ? 'bg-zinc-900 hover:bg-zinc-800 active:bg-zinc-700' : 'hover:brightness-110 active:brightness-125'} duration-200`}
            style={{
              backgroundColor: backgroundTheme === 'light'
                ? lightTheme.background
                : backgroundTheme === 'dark'
                  ? darkTheme.background
                  : ''
            }}>
            <HiOutlineSparkles className='w-5 h-5' />
          </button>
        </div>
        <div className={`min-w-full border-b ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
          <PostBox autoTextAreaRows={true} rows={1} />
        </div>
        <TweetPost
          image='/icons/woodpecker-icon.jpg'
          username='something'
          nickname='test'
          post_date='3h'
          tweet='Hi! O_o'
          tweet_link='/test/status/2'
          comments='2'
          retweets='3'
          likes='5'
        />
      </section>
      {menuState && (
        <div className='fixed top-0 left-0 w-full h-full z-20' onClick={handleMenuState}>
          <HomeMenu
            menuButton={refMenuButton}
          />
        </div>
      )}
    </Layout>
  )
}

export default Home
