import React, { Dispatch, SetStateAction, useContext } from 'react'
import Link from 'next/link'
import { darkTheme, lightTheme } from '../../libs/colors'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'
import { useRouter } from 'next/router'

const DialogBox: React.FC = () => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const { smSize, baseSize } = useContext(FontSizeContext)
  const router = useRouter()
  return (
    <section className={`hidden lg:flex lg:w-timeline h-full flex-1 items-center border-r ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`} style={{
      color: backgroundTheme === 'light'
        ? lightTheme.text
        : darkTheme.text
    }}>
      <div className='w-full h-full justify-center items-center flex'>
        <div className='flex flex-col items-start'>
          <h2 className='font-bold text-3xl'>
            Select a message
          </h2>
          <span className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'} w-[300px] text-start py-2 mb-5`} style={{
            fontSize: `${smSize}px`
          }}>
            Choose from your existing conversations, start a
            new one, or just keep swimming
          </span>
          <Link href={`${router.asPath}`} as='/messages/compose'>
            <a className='rounded-full px-8 py-4 flex items-center justify-center font-bold w-max text-white hover:brightness-95 duration-200' style={{
              fontSize: `${baseSize}px`,
              background: colorTheme
            }}>
              New message
            </a>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default DialogBox
