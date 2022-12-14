import type { NextPage } from 'next'
import React, { useContext } from 'react'
import Layout from '../../components/layouts/layout'
import FollowingHeader from '../../components/profile/follower-header'
import FollowingEmpty from '../../components/profile/following-empty'
import { ThemeContext } from '../../utils/theme'

const Following: NextPage = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  const nickname = 'nickname'
  const username = 'username'
  return (
    <Layout searchBar={true} hCard={true} fCard={true} stickyPosition={450}>
      <section className={`w-timeline flex flex-col items-start justify-start py-2 h-full border-x ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
        <FollowingHeader
          nickname={nickname}
          username={username}
        />
        <FollowingEmpty />
      </section>
    </Layout>
  )
}

export default Following
