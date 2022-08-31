import type { NextPage } from 'next'
import React from 'react'
import ProfileLayout from '../../components/layouts/profile-layout'
import SidebarLayout from '../../components/layouts/sidebar-layout'

const Likes: NextPage = () => {
  return (
    <SidebarLayout searchBar={true} hCard={true} fCard={true}>
      <ProfileLayout value='Likes' quantity={3}>
        <div className='flex flex-col w-full items-center mt-10'>
          <div className='items-start flex flex-col'>
            <span className='text-3xl font-bold w-[300px]'>
              You don't have any
              likes yet
            </span>
            <span className='text-base w-[360px]'>
              Tap the heart on any Tweet to show it some love.
              When you do, it'll show up here.
            </span>
          </div>
        </div>
      </ProfileLayout>
    </SidebarLayout>
  )
}

export default Likes
