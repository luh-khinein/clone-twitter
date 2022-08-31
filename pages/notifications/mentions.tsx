import type { NextPage } from 'next'
import React from 'react'
import NotificationsLayout from '../../components/layouts/notifications-layout'
import SidebarLayout from '../../components/layouts/sidebar-layout'

const Mentions: NextPage = () => {
  return (
    <SidebarLayout searchBar={true} hCard={true} fCard={true}>
      <NotificationsLayout>
        <div className='mt-28 px-32 py-1 flex flex-col items-center'>
          <span className='font-bold text-3xl'>
            Nothing to see here —
            yet
          </span>
          <span className='text-slate-400 text-sm'>
            When someone mentions you, you'll find it here.
          </span>
        </div>
      </NotificationsLayout>
    </SidebarLayout>
  )
}

export default Mentions
