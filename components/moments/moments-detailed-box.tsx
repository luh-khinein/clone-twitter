import React, { useContext } from 'react'
import Image from 'next/image'
import { darkTheme, lightTheme } from '../../libs/colors'
import { ThemeContext } from '../../utils/theme'

const MomentsDetailedBox: React.FC = () => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  return (
    <section className={`hidden lg:flex lg:w-timeline h-screen flex-1 items-center border-r ${backgroundTheme === 'light' ? 'border-gray-100' : 'border-gray-700'}`} style={{
      color: backgroundTheme === 'light'
        ? lightTheme.text
        : darkTheme.text
    }}>
      <div className='w-full h-full justify-center items-center flex'>
        <div className='flex flex-col items-start'>
          <Image
            src='/assets/moments-empty.png'
            width={330}
            height={162}
            alt='cracked-egg-microphones'
          />
          <h2 className='font-bold text-3xl pt-9'>
            Seize the Moment
          </h2>
          <span className='text-sm text-slate-400 w-max text-start mb-5'>
            Choose an existing Moment or create a new one.
          </span>
          <button className='rounded-full px-8 py-4 flex items-center justify-center font-bold w-max text-white hover:brightness-95 duration-200' style={{
            background: colorTheme
          }}>
            Create new
          </button>
        </div>
      </div>
    </section>
  )
}

export default MomentsDetailedBox
