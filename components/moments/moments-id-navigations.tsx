import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { darkTheme, lightTheme } from '../../libs/colors'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'

const MomentsIdNavigations: React.FC = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { smSize, baseSize, xlSize } = useContext(FontSizeContext)
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
            Add Tweets
          </h1>
        </div>
      </div>
    </section>
  )
}

export default MomentsIdNavigations
