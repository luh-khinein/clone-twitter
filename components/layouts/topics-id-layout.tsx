import React, { useContext } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { darkTheme, lightTheme } from '../../libs/colors'
import { ThemeContext } from '../../utils/theme'

interface TopicValue {
  name: string
  isFollowed: boolean
  children: any
}

const TopicsIdLayout: React.FC<TopicValue> = ({ name, isFollowed, children }) => {
  const { backgroundTheme } = useContext(ThemeContext)
  return (
    <div className={`w-timeline h-full border-l border-r items-center pt-8 ${backgroundTheme === 'light' ? 'border-gray-100' : 'border-gray-700'}`} style={{
      background: backgroundTheme === 'light'
        ? lightTheme.background
        : backgroundTheme === 'dark'
          ? darkTheme.background
          : '#000',
      color: backgroundTheme === 'light'
        ? lightTheme.text
        : darkTheme.text
    }}>
      <div className='w-[598px] fixed top-0 z-10 flex justify-between px-3 py-3 backdrop-blur-sm' style={{
        background: backgroundTheme === 'light'
          ? 'rgba(255, 255, 255, 0.85)'
          : backgroundTheme === 'dark'
            ? 'rgba(21, 32, 43, 0.85)'
            : 'rgba(0, 0, 0, 0.85)'
      }}>
        <div className='flex items-center'>
          <button className={`rounded-full p-2 ${backgroundTheme === 'light' ? 'hover:brightness-95' : 'hover:brightness-110'}`}>
            <BsArrowLeft className='w-5 h-5' />
          </button>
          <h1 className='text-xl font-bold'>
            Topic
          </h1>
        </div>
        <button className={`rounded-full p-2 ${backgroundTheme === 'light' ? 'hover:brightness-95' : 'hover:brightness-110'}`}>
          O_o
        </button>
      </div>
      <div className='w-full mt-20'>
        {children}
      </div>
    </div>
  )
}

export default TopicsIdLayout
