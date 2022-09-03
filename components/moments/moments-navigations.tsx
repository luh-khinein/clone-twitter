import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import Image from 'next/image'
import { AiOutlineThunderbolt } from 'react-icons/ai'
import { BsArrowLeft } from 'react-icons/bs'
import { darkTheme, lightTheme } from '../../libs/colors'
import { ThemeContext } from '../../utils/theme'

const MomentsNavigations: React.FC = () => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const router = useRouter()
  return (
    <section className={`w-timeline lg:flex lg:flex-col lg:min-w-[318px] lg:max-w-[318px] xl:min-w-[388px] xl:max-w-[388px] min-h-screen border-l border-r ${backgroundTheme === 'light' ? 'border-gray-100' : 'border-gray-700'}`} style={{
      color: backgroundTheme === 'light'
        ? lightTheme.text
        : darkTheme.text
    }}>
      <div className='flex w-full justify-between px-5 py-2'>
        <div className='w-max flex items-center'>
          <button
            onClick={() => router.back()}
            className={`mr-5 p-2 rounded-full duration-200 ${backgroundTheme === 'light' ? 'hover:brightness-95' : 'hover:brightness-100'}`}
            style={{
              background: backgroundTheme === 'light'
                ? lightTheme.background
                : backgroundTheme === 'dark'
                  ? darkTheme.background
                  : '#000'
            }}>
            <BsArrowLeft className='w-5 h-5' />
          </button>
          <h1 className='text-xl font-bold tracking-wider'>
            Moments
          </h1>
        </div>
        <button className={`p-2 rounded-full duration-200 ${backgroundTheme === 'light' ? 'hover:brightness-95' : 'hover:brightness-110'}`} style={{
          background: backgroundTheme === 'light'
            ? lightTheme.background
            : backgroundTheme === 'dark'
              ? darkTheme.background
              : '#000'
        }}>
          <AiOutlineThunderbolt className='w-5 h-5' />
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
        <span className='text-sm py-2'>
          Moments are curated stories about what's
          happening—powered by Tweets.
        </span>
      </div>
      <div className='px-9 flex w-full justify-start mt-4'>
        <button className='font-bold w-max rounded-full flex items-center justify-center py-4 px-9 text-white duration-200 hover:brightness-95' style={{ background: colorTheme }}>
          Learn more
        </button>
      </div>
    </section>
  )
}

export default MomentsNavigations
