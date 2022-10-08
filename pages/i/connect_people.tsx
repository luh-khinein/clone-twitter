import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import WhoToFollowCard from '../../components/explorer/who-to-follow-card'
import Layout from '../../components/layouts/layout'
import { darkTheme, lightTheme } from '../../libs/colors'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'

const ConnectPeople: NextPage = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { xlSize } = useContext(FontSizeContext)
  const router = useRouter()
  return (
    <Layout searchBar={true} hCard={true} fCard={false} stickyPosition={450}>
      <section className={`w-timeline min-h-full flex flex-col border-l border-r ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'} items-start pt-16`} style={{
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
            <button
              onClick={() => router.back()}
              className={`p-2 mr-5 flex justify-center items-center rounded-full duration-200 ${backgroundTheme === 'light' ? 'hover:brightness-95 active:brightness-90' : backgroundTheme === 'black' ? 'bg-zinc-900 hover:bg-zinc-800 active:bg-zinc-700' : 'hover:brightness-110 active:brightness-125'}`}
              style={{
                backgroundColor: backgroundTheme === 'light'
                  ? lightTheme.background
                  : backgroundTheme === 'dark'
                    ? darkTheme.background
                    : ''
              }}>
              <BsArrowLeft className='w-5 h-5' />
            </button>
            <h1 className='font-bold' style={{
              fontSize: `${xlSize}px`
            }}>
              Connect
            </h1>
          </div>
        </div>
        <h2 className='font-bold px-3 mb-3' style={{ fontSize: `${xlSize}px` }}>
          Suggested for you
        </h2>
        <WhoToFollowCard
          image='/icons/woodpecker-icon.jpg'
          nickname='Woodpecker'
          username='TheIncredibleWoodpecker'
          description='????'
        />
        <WhoToFollowCard
          image='/icons/duck-icon.jpg'
          nickname='Tonny Delb'
          username='Delb'
          description=''
        />
        <WhoToFollowCard
          image='/icons/monkey-icon.jpg'
          nickname='President'
          username='TheMonkey'
          description=''
        />
      </section>
    </Layout>
  )
}

export default ConnectPeople
