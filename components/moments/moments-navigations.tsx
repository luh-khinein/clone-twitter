import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import Link from 'next/link'
import { BsArrowLeft } from 'react-icons/bs'
import { darkTheme, lightTheme } from '../../libs/colors'
import { ThemeContext } from '../../utils/theme'
import { FontSizeContext } from '../../utils/font-size'
import { AddMomentIcon } from '../icons/moment-icon'
import MomentsEmpty from './moments-empty'
import MomentComponent from './moment-component'

const MomentsNavigations: React.FC = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { xlSize } = useContext(FontSizeContext)
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
      <div className='flex w-full justify-between px-3 py-2'>
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
        <Link href='/i/moment_maker/edit/1'>
          <a className={`p-2 rounded-full duration-200 ${backgroundTheme === 'light' ? 'hover:brightness-95' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:brightness-110'}`} style={{
            background: backgroundTheme === 'light'
              ? lightTheme.background
              : backgroundTheme === 'dark'
                ? darkTheme.background
                : ''
          }}>
            <AddMomentIcon color={currentColor} />
          </a>
        </Link>
      </div>
      <MomentComponent />
    </section>
  )
}

export default MomentsNavigations
