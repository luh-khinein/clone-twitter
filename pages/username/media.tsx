import type { NextPage } from 'next'
import React, { useContext } from 'react'
import Image from 'next/image'
import ProfileLayout from '../../components/layouts/profile-layout'
import Layout from '../../components/layouts/layout'
import { ThemeContext } from '../../utils/theme'
import { FontSizeContext } from '../../utils/font-size'
import { darkTheme, lightTheme } from '../../libs/colors'

const Media: NextPage = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { smSize, exXlSize } = useContext(FontSizeContext)
  return (
    <Layout searchBar={true} hCard={true} fCard={true} stickyPosition={450}>
      <ProfileLayout value='Photos & videos' quantity={0}>
        <div className='w-full flex flex-col items-center justify-center'>
          <div className='mt-10'>
            <Image
              src='/assets/media-empty.png'
              alt='empty-media'
              width={336}
              height={168}
            />
          </div>
          <div className='flex flex-col flex-1'>
            <span className='font-bold text-2xl w-[300px]' style={{
              fontSize: `${exXlSize}px`,
              color: backgroundTheme === 'light'
                ? lightTheme.text
                : darkTheme.text
            }}>
              Lights, camera ...
              attachments!
            </span>
            <span className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'} w-[360px]`} style={{
              fontSize: `${smSize}px`
            }}>
              When you send Tweets with photos or videos in
              them, it will show up here.
            </span>
          </div>
        </div>
      </ProfileLayout>
    </Layout>
  )
}

export default Media
