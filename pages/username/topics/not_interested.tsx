import type { NextPage } from 'next'
import React from 'react'
import Image from 'next/image'
import SidebarLayout from '../../../components/layouts/sidebar-layout'
import TopicsLayout from '../../../components/layouts/topics-layout'

const NotInterested: NextPage = () => {
  return (
    <SidebarLayout searchBar={true} hCard={true} fCard={true}>
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
          <h2 className='font-bold text-3xl'>
            Not interest? No
            problem.
          </h2>
          <span>
            When you tell us you're not interested in a Topic,
            it will show up here. We won't recommend
            Tweets, events, or ads related to Topics you aren't
            into.
          </span>
        </div>
      </TopicsLayout>
    </SidebarLayout>
  )
}

export default NotInterested
