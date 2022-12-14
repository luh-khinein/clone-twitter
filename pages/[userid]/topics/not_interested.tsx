import type { NextPage } from 'next'
import React, { useContext } from 'react'
import Image from 'next/image'
import Layout from '../../../components/layouts/layout'
import TopicsLayout from '../../../components/layouts/topics-layout'
import { FontSizeContext } from '../../../utils/font-size'

const NotInterested: NextPage = () => {
  const { baseSize } = useContext(FontSizeContext)
  return (
    <Layout searchBar={true} hCard={true} fCard={true} stickyPosition={450}>
      <TopicsLayout>
        <div className='w-full flex flex-col items-center px-32 mt-32'>
          <div className='flex w-max h-max py-4 items-center justify-center'>
            <Image
              src='/assets/not-interested-empty.png'
              width={336}
              height={168}
              alt="Not interested"
            />
          </div>
          <h2 className='font-bold text-3xl mb-5'>
            Not interest? No
            problem.
          </h2>
          <span style={{ fontSize: `${baseSize}px` }}>
            When you tell us you&apos;re not interested in a Topic,
            it will show up here. We won&apos;t recommend
            Tweets, events, or ads related to Topics you aren&apos;t
            into.
          </span>
        </div>
      </TopicsLayout>
    </Layout>
  )
}

export default NotInterested
