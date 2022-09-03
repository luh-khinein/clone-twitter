import type { NextPage } from 'next'
import React from 'react'
import PeoplesToFollowCard from '../../components/explorer/peoples-to-follow-card'
import ProfileLayout from '../../components/layouts/profile-layout'
import Layout from '../../components/layouts/layout'

const Profile: NextPage = () => {
  return (
    <Layout searchBar={true} hCard={true} fCard={true} stickyPosition={450}>
      <ProfileLayout value='Tweets' quantity={0}>
        {/* make tweets later */}
        <PeoplesToFollowCard />
        <div>
          {/* make this later */}
          Topics to follow
        </div>
      </ProfileLayout>
    </Layout>
  )
}

export default Profile
