import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useContext, useEffect } from 'react'
import Image from 'next/image'
import { BsArrowLeft } from 'react-icons/bs'
import Layout from '../../../components/layouts/layout'
import { darkTheme, lightTheme } from '../../../libs/colors'
import { FontSizeContext } from '../../../utils/font-size'
import { ThemeContext } from '../../../utils/theme'

const Memberships: NextPage = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { exSmSize, baseSize, xlSize } = useContext(FontSizeContext)
  const router = useRouter()
  const username = 'username'
  useEffect(() => {
    if (router.asPath !== `/${username}/lists/membership` &&
      router.asPath !== '/compose/tweet' &&
      router.asPath !== '/i/newsletters' &&
      router.asPath !== '/i/flow/convert_to_professional' &&
      router.asPath !== '/i/display' &&
      router.asPath !== '/i/keyboard_shortcuts'
    ) {
      router.push(`/${username}/lists/membership`)
    }
  }, [router, username])

  return (
    <Layout searchBar={true} hCard={true} fCard={true} stickyPosition={450}>
      <section className={`w-timeline h-full flex flex-col items-start justify-start py-2 border-x ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`} style={{
        color: backgroundTheme === 'light'
          ? lightTheme.text
          : darkTheme.text
      }}>
        <div className='items-center flex mb-5 px-3'>
          <button
            onClick={() => router.back()}
            className={`p-2 mr-3 flex items-center justify-center rounded-full duration-200 ${backgroundTheme === 'light' ? 'hover:brightness-95' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:brightness-110'}`}
            style={{
              background: backgroundTheme === 'light'
                ? lightTheme.background
                : backgroundTheme === 'dark'
                  ? darkTheme.background
                  : ''
            }}
          >
            <BsArrowLeft className='w-5 h-5' />
          </button>
          <div className='flex flex-col'>
            <h1 className='font-bold' style={{ fontSize: `${xlSize}px` }}>
              Lists you&apos;re on
            </h1>
            <span className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${exSmSize}px` }}>
              @{username}
            </span>
          </div>
        </div>
        <div className='w-full flex flex-col items-start justify-start mt-10 px-32'>
          <Image
            src='/assets/membership-empty.png'
            width={336}
            height={168}
            alt=''
          />
          <span className='font-bold text-3xl px-3'>
            You haven&apos;t been added to any Lists yet
          </span>
          <span className={`px-3 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${baseSize}px` }}>
            When someone adds you to a list, it&apos;ll show up here.
          </span>
        </div>
      </section>
    </Layout>
  )
}

export default Memberships
