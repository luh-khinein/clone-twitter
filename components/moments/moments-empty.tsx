import React, { useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ThemeContext } from '../../utils/theme'
import { FontSizeContext } from '../../utils/font-size'

const MomentsEmpty: React.FC = () => {
  const { colorTheme } = useContext(ThemeContext)
  const { smSize, baseSize } = useContext(FontSizeContext)
  return (
    <div className='w-full flex'>
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
        <span className='py-2' style={{ fontSize: `${smSize}px` }}>
          Moments are curated stories about what&apos;s
          happening—powered by Tweets.
        </span>
      </div>
      <Link href='/en/demo-page'>
        <a target='_blank' className='px-9 flex w-full justify-start mt-4'>
          <button className='font-bold w-max rounded-full flex items-center justify-center py-4 px-9 text-white duration-200 hover:brightness-95' style={{
            background: colorTheme,
            fontSize: `${baseSize}px`
          }}>
            Learn more
          </button>
        </a>
      </Link>
    </div>
  )
}

export default MomentsEmpty
