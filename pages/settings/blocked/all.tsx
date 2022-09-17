import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BsArrowLeft } from 'react-icons/bs'
import SettingsLayout from '../../../components/layouts/settings-layout'
import NavBar from '../../../components/settings/nav-bar'
import TabListButton from '../../../components/tab-list-button'
import { darkTheme, lightTheme } from '../../../libs/colors'
import { FontSizeContext } from '../../../utils/font-size'
import { ThemeContext } from '../../../utils/theme'

const BlockedAll: NextPage = () => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const { exSmSize, baseSize, xlSize } = useContext(FontSizeContext)
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState('')
  const handlePage = useCallback(() => {
    const path = window.location.pathname.split('/')
    setCurrentPage(path[path.length - 1])
  }, [])

  useEffect(() => {
    if (currentPage !== router.asPath) {
      handlePage()
    }
  }, [router])

  return (
    <SettingsLayout>
      <NavBar />
      <section className={`w-timeline h-screen flex flex-col items-start justify-start py-2 border-x ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
        <div className='flex items-center px-3 mb-3'>
          <button
            onClick={() => router.back()}
            className={`p-2 mr-5 flex items-center justify-center rounded-full duration-200 ${backgroundTheme === 'light' ? 'hover:brightness-95' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:brightness-110'}`}
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
          <h1 className='font-bold' style={{ fontSize: `${xlSize}px` }}>
            Blocked accounts
          </h1>
        </div>
        <nav className='flex w-full justify-between items-center'>
          <TabListButton
            link='/settings/blocked/all'
            linkName='all'
            name='All'
            currentPage={currentPage}
          />
          <TabListButton
            link='/settings/blocked/imported'
            linkName='imported'
            name='Imported'
            currentPage={currentPage}
          />
        </nav>
        <span className={`w-full px-3 py-2 border-y ${backgroundTheme === 'light' ? 'border-gray-100 text-slate-400' : backgroundTheme === 'black' ? 'border-zinc-800 text-zinc-400' : 'border-slate-800 text-slate-400'}`} style={{ fontSize: `${exSmSize}px` }}>
          When you block someone, taht person won't be able to follow or message you, and you won't see notifications from them.
          <Link href='/en/demo-page'>
            <a target='_blank' style={{ color: colorTheme }}>
              &nbsp;Learn more
            </a>
          </Link>
        </span>
        <div className='w-full flex flex-col mt-16 items-center justify-center'>
          <Image
            src='/assets/blocked-accounts-empty.png'
            width={336}
            height={168}
            alt='Blocked'
          />
          <span className='font-bold text-3xl px-32 mt-6'>
            Blocked unwanted accounts
          </span>
          <span className={`px-32 mt-1 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-40'}`} style={{ fontSize: `${baseSize}px` }}>
            When you block someone, they won't be able to follow or message you, and you won't see notifications from them.
            <Link href='/en/demo-page'>
              <a target='_blank' style={{ color: colorTheme }}>
                &nbsp;Learn more
              </a>
            </Link>
          </span>
        </div>
      </section>
    </SettingsLayout>
  )
}

export default BlockedAll
