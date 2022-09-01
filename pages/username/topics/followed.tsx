import type { NextPage } from 'next'
import React from 'react'
import SidebarLayout from '../../../components/layouts/sidebar-layout'
import TopicsLayout from '../../../components/layouts/topics-layout'
import FollowedTopics from '../../../components/topics/followed-topics'
import SuggestedTopics from '../../../components/topics/suggested-topics'

const Followed: NextPage = () => {
  return (
    <SidebarLayout searchBar={true} hCard={true} fCard={true} stickyPosition={450}>
      <TopicsLayout>
        <div className='w-full px-3 py-4 text-sm'>
          The Topics you follow are used to personalize the Tweets, events, and ads that you
          see, and show up publicly on your profile
        </div>
        <FollowedTopics />
        <SuggestedTopics />
      </TopicsLayout>
    </SidebarLayout>
  )
}

export default Followed
