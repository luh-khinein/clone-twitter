import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { lightTheme, darkTheme } from '../../libs/colors'
import { ThemeContext } from '../../utils/theme'
import ProfileHeader from '../profile/header'
import TabBar from '../profile/tab'

interface Props {
  children: any
  quantity: number
  value: string
}

const ProfileLayout: React.FC<Props> = ({ children, quantity, value }) => {
  const { backgroundTheme } = useContext(ThemeContext)
  const router = useRouter()
  const username = 'username' // fix it later

  return (
    <div className={`w-timeline min-h-full flex flex-col border-r border-l ${backgroundTheme === 'light' ? 'border-gray-100' : 'border-gray-700'}`}>
      <div className='fixed top-0 z-20 w-[598px] flex items-center py-2 px-3 backdrop-blur-sm' style={{
        background: backgroundTheme === 'light'
          ? 'rgba(255, 255, 255, 0.85)'
          : backgroundTheme === 'dark'
            ? 'rgba(21, 32, 43, 0.85)'
            : 'rgba(0, 0, 0, 0.85)'
      }}>
        <button onClick={() => router.back()} className={`rounded-full p-2 mr-5 flex items-center justify-center ${backgroundTheme === 'light' ? 'hover:brightness-75' : 'hover:brightness-125'}`} style={{
          background: backgroundTheme === 'light'
            ? 'rgba(255, 255, 255, 0.3)'
            : backgroundTheme === 'dark'
              ? 'rgba(21, 32, 43, 0.3)'
              : 'rgba(0, 0, 0, 0.3)'
        }}>
          <BsArrowLeft className='w-5 h-5' />
        </button>
        <div className='flex flex-col'>
          <h1 className='text-xl font-bold'>
            {username}
          </h1>
          <span className='text-sm text-slate-400'>
            {quantity} {value}
          </span>
        </div>
      </div>
      <ProfileHeader />
      <TabBar />
      {children}
    </div>
  )
}

export default ProfileLayout
