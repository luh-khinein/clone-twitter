import React, { useContext } from 'react'
import { BsPatchCheckFill, BsTwitter } from 'react-icons/bs'
import { colors, darkTheme, lightTheme } from '../../libs/colors'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'

const TweetBox: React.FC = () => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const { baseSize } = useContext(FontSizeContext)
  return (
    <div className={`w-[465px] border p-2 rounded-2xl mb-3 flex items-start justify-center ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`} style={{
      color: backgroundTheme === 'light'
        ? lightTheme.text
        : darkTheme.text,
      background: backgroundTheme === 'light'
        ? lightTheme.background
        : backgroundTheme === 'dark'
          ? darkTheme.background
          : '#000'
    }}>
      <div className='p-3 rounded-full m-2' style={{ background: colorTheme }}>
        <BsTwitter className='w-6 h-6 text-white' />
      </div>
      <div className='flex flex-col justify-start leading-5 my-2 mr-2' style={{ fontSize: `${baseSize}px` }}>
        <div className='flex items-center'>
          <span className='font-bold flex items-center w-max'>
            Twitter
            <BsPatchCheckFill className='mx-1' style={{
              color: colors.default
            }} />
          </span>
          <span className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`}>
            @Twitter · 0m
          </span>
        </div>
        <span>
          At the heart of Twitter are short messages called Tweets
          — just like this one — which can include photos, videos,
          links, text, hashtags, and mentions like
          <span style={{ color: colorTheme }}>
            &nbsp;@Twitter
          </span>.
        </span>
      </div>
    </div>
  )
}

export default TweetBox
