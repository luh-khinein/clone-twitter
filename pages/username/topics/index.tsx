import type { NextPage } from 'next'
import React from 'react'
import Layout from '../../../components/layouts/layout'
import TopicsLayout from '../../../components/layouts/topics-layout'
import FollowedTopics from '../../../components/topics/followed-topics'
import SuggestedTopics from '../../../components/topics/suggested-topics'

const Topics: NextPage = () => {
  return (
    <Layout searchBar={true} hCard={true} fCard={true} stickyPosition={450}>
      <TopicsLayout>
        <div className='w-full px-5 py-5 text-sm'>
          The Topics you follow are used to personalize the Tweets, events, and ads that you
          see, and show up publicly on your profile
        </div>
        <FollowedTopics />
        <SuggestedTopics />
      </TopicsLayout>
    </Layout>
  )
}

export default Topics
