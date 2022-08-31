import type { NextPage } from 'next'
import React from 'react'
import SidebarLayout from '../../../components/layouts/sidebar-layout'
import TopicsLayout from '../../../components/layouts/topics-layout'

const NotInterested: NextPage = () => {
  return (
    <SidebarLayout searchBar={true} hCard={true} fCard={true}>
      <TopicsLayout>
        <div>
          Not Interested
        </div>
      </TopicsLayout>
    </SidebarLayout>
  )
}

export default NotInterested
