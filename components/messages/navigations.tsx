// make api later
import React, { useContext } from 'react'
import Link from 'next/link'
import { IoSettingsOutline } from 'react-icons/io5'
import { RiMailAddLine } from 'react-icons/ri'
import { darkTheme, lightTheme } from '../../libs/colors'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'
import { useRouter } from 'next/router'
import ComposeNewMessage from '../../pages/messages/compose-new-message'

const Navigations: React.FC = () => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const { smSize, baseSize, xlSize } = useContext(FontSizeContext)
  const router = useRouter()
  return (
    <section className={`w-timeline lg:flex lg:flex-col lg:min-w-[318px] lg:max-w-[318px] xl:min-w-[388px] xl:max-w-[388px] min-h-full border-l border-r ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`} style={{
      color: backgroundTheme === 'light'
        ? lightTheme.text
        : darkTheme.text
    }}>
      <div className='flex w-full justify-between px-5 py-3'>
        <h1 className='font-bold tracking-wider' style={{
          fontSize: `${xlSize}px`
        }}>
          Messages
        </h1>
        <div className='flex'>
          <Link href='/messages/settings'>
            <a className={`flex items-center justify-center p-2 rounded-full ${backgroundTheme === 'light' ? 'hover:brightness-95 active:brightness-90' : backgroundTheme === 'black' ? 'hover:bg-zinc-800 active:bg-zinc-700' : 'hover:brightness-110 actvie:brightness-125'} duration-200`} style={{
              background: backgroundTheme === 'light'
                ? lightTheme.background
                : backgroundTheme === 'dark'
                  ? darkTheme.background
                  : ''
            }}>
              <IoSettingsOutline className='w-5 h-5' />
            </a>
          </Link>
          <Link href={`${router.asPath}?new_message=true`} as='/messages/compose'>
            <a className={`flex items-center justify-center p-2 rounded-full ${backgroundTheme === 'light' ? 'hover:brightness-95 active:brightness-90' : backgroundTheme === 'black' ? 'hover:bg-zinc-800 active:bg-zinc-700' : 'hover:brightness-110 active-brightness-125'} duration-200`} style={{
              background: backgroundTheme === 'light'
                ? lightTheme.background
                : backgroundTheme === 'dark'
                  ? darkTheme.background
                  : ''
            }}>
              <RiMailAddLine className='w-5 h-5' />
            </a>
          </Link>
        </div>
      </div>
      <div className='my-6 px-5 flex flex-col items-start justify-start w-full'>
        <h2 className='font-bold text-3xl px-1 w-[300px] lg:w-fit'>
          Welcome to your
          inbox!
        </h2>
        <span className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'} w-[360px] lg:w-fit`} style={{
          fontSize: `${smSize}px`
        }}>
          Drop a line, share Tweets and more with private
          conversations between you and others on
          Twitter.
        </span>
      </div>
      <div className='px-5 flex w-full justify-start mt-2'>
        <Link href={`${router.asPath}?new_message=true`} as='/messages/compose'>
          <a className='font-bold w-max rounded-full flex items-center justify-center py-4 px-8 text-white hover:brightness-95 duration-200' style={{
            fontSize: `${baseSize}px`,
            background: colorTheme
          }}>
            Write a message
          </a>
        </Link>
      </div>
      <ComposeNewMessage />
    </section>
  )
}

export default Navigations
