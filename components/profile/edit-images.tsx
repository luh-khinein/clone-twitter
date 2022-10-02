import React, { useContext } from 'react'
import Image from 'next/image'
import { RiUser3Fill } from 'react-icons/ri'
import { ThemeContext } from '../../utils/theme'
import { darkTheme, lightTheme } from '../../libs/colors'
import { FiCamera } from 'react-icons/fi'

interface Props {
  wallpaper: string
  user_image: string
  username: string
}

const EditImages: React.FC<Props> = ({ wallpaper, user_image, username }) => {
  const { backgroundTheme } = useContext(ThemeContext)
  return (
    <div className='w-full flex flex-col'>
      <div className='relative w-full max-w-[600px] max-h-[200px]'>
        {wallpaper !== ''
          ? (
            <div className={`absolute w-[110px] h-[110px] rounded-full flex items-center justify-center text-slate-500 bg-slate-300`}>
              <Image
                src={wallpaper}
                alt='wallpaper'
                width={600}
                height={200}
              />
              <button
                className='bg-[rgba(15,20,25,.5)] rounded-full p-2 duration-200 hover:bg-[rgba(39,44,48,.75)]'
              >
                <FiCamera className='w-5 h-5 text-white' />
              </button>
            </div>
          )
          : (
            <div className='absolute mb-5 flex w-full h-44 items-center justify-center bg-[rgba(0,0,0,.3)]'>
              <button
                className='bg-[rgba(15,20,25,.5)] rounded-full p-2 duration-200 hover:bg-[rgba(39,44,48,.75)]'
              >
                <FiCamera className='w-5 h-5 text-white' />
              </button>
            </div>
          )}
      </div>
      <div className='flex justify-between mt-32 px-3'>
        <div className={`p-1 flex rounded-full hover:brigthness-95 duration-200 z-10`} style={{
          background: backgroundTheme === 'light'
            ? lightTheme.background
            : backgroundTheme === 'dark'
              ? darkTheme.background
              : '#000'
        }}>
          {user_image !== ''
            ? (
              <div className={`w-[80px] h-[80px] rounded-full flex items-center justify-center text-slate-500 bg-slate-300`}>
                <Image
                  src={user_image}
                  alt={username}
                  width={80}
                  height={80}
                  className='rounded-full'
                />
                <button
                  className='absolute bg-[rgba(15,20,25,.5)] rounded-full p-2 duration-200 hover:bg-[rgba(39,44,48,.75)]'
                >
                  <FiCamera className='w-5 h-5 text-white' />
                </button>
              </div>
            )
            : (
              <div className={`relative p-4 rounded-full flex items-center justify-center text-slate-500 bg-slate-300`}>
                <RiUser3Fill className='w-20 h-20' />
                <button
                  className='absolute bg-[rgba(15,20,25,.5)] rounded-full p-2 duration-200 hover:bg-[rgba(39,44,48,.75)]'
                >
                  <FiCamera className='w-5 h-5 text-white' />
                </button>
              </div>
            )}
        </div>
      </div>
    </div>
  )
}

export default EditImages
