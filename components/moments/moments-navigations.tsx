import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BsArrowLeft } from 'react-icons/bs'
import { darkTheme, lightTheme } from '../../libs/colors'
import { ThemeContext } from '../../utils/theme'
import { FontSizeContext } from '../../utils/font-size'
import { AddMomentIcon } from '../icons/moment-icon'

const MomentsNavigations: React.FC = () => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const { smSize, baseSize, xlSize } = useContext(FontSizeContext)
  const currentColor = backgroundTheme === 'light'
    ? lightTheme.icon
    : darkTheme.icon
  const router = useRouter()
  return (
    <section className={`lg:flex lg:flex-col lg:min-w-[318px] lg:max-w-[318px] xl:min-w-[388px] xl:max-w-[388px] min-h-screen border-l border-r ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`} style={{
      color: backgroundTheme === 'light'
        ? lightTheme.text
        : darkTheme.text
    }}>
      <div className='flex w-full justify-between px-5 py-2'>
        <div className='w-max flex items-center'>
          <button
            onClick={() => router.back()}
            className={`mr-5 p-2 rounded-full duration-200 ${backgroundTheme === 'light' ? 'hover:brightness-95' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:brightness-100'}`}
            style={{
              background: backgroundTheme === 'light'
                ? lightTheme.background
                : backgroundTheme === 'dark'
                  ? darkTheme.background
                  : ''
            }}>
            <BsArrowLeft className='w-5 h-5' />
          </button>
          <h1 className='font-bold tracking-wider' style={{
            fontSize: `${xlSize}px`
          }}>
            Moments
          </h1>
        </div>
        <button className={`p-2 rounded-full duration-200 ${backgroundTheme === 'light' ? 'hover:brightness-95' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:brightness-110'}`} style={{
          background: backgroundTheme === 'light'
            ? lightTheme.background
            : backgroundTheme === 'dark'
              ? darkTheme.background
              : ''
        }}>
          <AddMomentIcon color={currentColor} />
        </button>
      </div>
      <div className='w-full flex items-center justify-center mt-10'>
        <Image
          src='/assets/moments-empty.png'
          width={324}
          height={162}
          alt='cracked-egg-microphones'
        />
      </div>
      <div className='w-full px-9 flex flex-col items-center mt-10'>
        <span className='text-3xl font-bold'>
          Waiting on a Moment
        </span>
        <span className='py-2' style={{ fontSize: `${smSize}px` }}>
          Moments are curated stories about what&apos;s
          happening—powered by Tweets.
        </span>
      </div>
      <Link href='/en/demo-page'>
        <a target='_blank' className='px-9 flex w-full justify-start mt-4'>
          <button className='font-bold w-max rounded-full flex items-center justify-center py-4 px-9 text-white duration-200 hover:brightness-95' style={{
            background: colorTheme,
            fontSize: `${baseSize}px`
          }}>
            Learn more
          </button>
        </a>
      </Link>
    </section>
  )
}

export default MomentsNavigations
