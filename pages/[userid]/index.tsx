import type { NextPage } from 'next'
import React, { useContext } from 'react'
import PeoplesToFollowCard from '../../components/explorer/peoples-to-follow-card'
import ProfileLayout from '../../components/layouts/profile-layout'
import Layout from '../../components/layouts/layout'
import { darkTheme, lightTheme } from '../../libs/colors'
import { ThemeContext } from '../../utils/theme'

const Profile: NextPage = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  return (
    <Layout searchBar={true} hCard={true} fCard={true} stickyPosition={450}>
      <ProfileLayout value='Tweets' quantity={0} path=''>
        <div className='w-full flex flex-col' style={{
          color: backgroundTheme === 'light'
            ? lightTheme.text
            : darkTheme.text
        }}>
          {/* make tweets later */}
          <PeoplesToFollowCard />
          <div>
            {/* make this later */}
            Topics to follow
          </div>
        </div>
      </ProfileLayout>
    </Layout>
  )
}

export default Profile
