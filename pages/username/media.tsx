import type { NextPage } from 'next'
import React from 'react'
import Image from 'next/image'
import ProfileLayout from '../../components/layouts/profile-layout'
import Layout from '../../components/layouts/layout'

const Media: NextPage = () => {
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
            <span className='font-bold text-2xl w-[300px]'>
              Lights, camera ...
              attachments!
            </span>
            <span className='font-sm text-slate-400 w-[360px]'>
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
