import React, { useContext } from 'react'
import Link from 'next/link'
import { ThemeContext } from '../../utils/theme'
import { BsChatRightTextFill } from 'react-icons/bs'
import { FontSizeContext } from '../../utils/font-size'

interface TopicsFollowedValue {
  link: string
  topic: string
  description: string
}

const TopicsFollowedButton: React.FC<TopicsFollowedValue> = ({ link, topic, description }) => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const { smSize, baseSize } = useContext(FontSizeContext)
  return (
    <Link href={link}>
      <a className={`w-full py-3 px-4 flex items-center justify-between ${backgroundTheme === 'light' ? 'hover:bg-gray-50' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:bg-slate-800'} duration-200`}>
        <div className='flex items-start'>
          <div className='rounded-full p-2 mr-4' style={{ background: colorTheme }}>
            <BsChatRightTextFill className='w-3 h-3 text-white' />
          </div>
          <div className='flex flex-col items-start' style={{
            fontSize: `${baseSize}px`
          }}>
            <span className='font-bold hover:underline'>
              {topic}
            </span>
            <span>
              {description}
            </span>
          </div>
        </div>
        <button
          className={`rounded-full py-2 w-24 font-bold border ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'} before:content-['Following'] hover:before:content-['Unfollow'] hover:border-red-300 hover:text-red-500 hover:bg-red-100 duration-200`}
          style={{ fontSize: `${smSize}px` }}
        />
      </a>
    </Link>
  )
}

export default TopicsFollowedButton
