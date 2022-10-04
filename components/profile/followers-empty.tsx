import React, { useContext } from 'react'
import Image from 'next/image'
import { ThemeContext } from '../../utils/theme'
import { FontSizeContext } from '../../utils/font-size'

const FollowersEmpty: React.FC = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { baseSize } = useContext(FontSizeContext)
  return (
    <div className='w-full flex flex-col items-center justify-center mt-36'>
      <Image
        src='/assets/followers-empty.png'
        width={336}
        height={168}
        alt='empty'
      />
      <div className='flex flex-col px-32 mt-10'>
        <span className='font-bold text-3xl mb-2'>
          Looking for followers?
        </span>
        <span className={`leading-5 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${baseSize}px` }}>
          When someone follows this account, they&apos;ll show up here. Tweeting and interacting with others helps boost followers.
        </span>
      </div>
    </div>
  )
}

export default FollowersEmpty
