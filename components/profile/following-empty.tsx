import React, { useContext } from 'react'
import Link from 'next/link'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'

const FollowingEmpty: React.FC = () => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const { baseSize } = useContext(FontSizeContext)
  return (
    <div className='mt-32 flex w-full flex-col items-center justify-center'>
      <div className='flex flex-col px-32'>
        <span className='font-bold text-3xl'>
          Be in the know
        </span>
        <span className={`my-2 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${baseSize}px` }}>
          Following accounts is an easy way to curate your timeline and know what&apos;s happening with the topics and people you&apos;re interested in.
        </span>
      </div>
      <Link href='/i/connect_people'>
        <a className='mt-4 tracking-tight px-10 py-3 rounded-full flex items-center justify-center font-bold text-white text-lg duration-200 hover:brightness-95' style={{ background: colorTheme }}>
          Find people to follow
        </a>
      </Link>
    </div>
  )
}

export default FollowingEmpty
