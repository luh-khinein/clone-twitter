import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsArrowLeft } from 'react-icons/bs'
import Layout from '../../../../components/layouts/layout'
import { darkTheme, lightTheme } from '../../../../libs/colors'
import { FontSizeContext } from '../../../../utils/font-size'
import { ThemeContext } from '../../../../utils/theme'

const HiddenReplies: NextPage = () => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const { smSize, baseSize, xlSize } = useContext(FontSizeContext)
  const router = useRouter()
  // get this later
  const username = 'username'
  return (
    <Layout searchBar={true} hCard={true} fCard={true} stickyPosition={450}>
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
            <div className='flex flex-col items-start leading-5'>
              <h1 className='font-bold' style={{ fontSize: `${xlSize}px` }}>
                Hidden replies
              </h1>
              <span className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${smSize}px` }}>
                Replies hidden by @{username}
              </span>
            </div>
          </div>
        </div>
        <div className='w-full flex flex-col items-center justify-center mt-20'>
          <Image
            src='/assets/hidden-empty.png'
            width={336}
            height={168}
            alt='turtle'
          />
          <div className='flex flex-col px-32'>
            <span className='font-bold text-3xl'>
              Nothing to see here
            </span>
            <span className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${baseSize}px` }}>
              This Tweet doesn&apos;t have any hidden replies, but Protected Tweets might be filtered out.
              <Link href='/en/demo-page'>
                <a target='_blank' style={{ color: colorTheme }}>
                  &nbsp;Learn more
                </a>
              </Link>
            </span>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default HiddenReplies 
