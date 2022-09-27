import type { NextPage } from 'next'
import React from 'react'
import PeoplesToFollowCard from '../../../components/explorer/peoples-to-follow-card'
import TopTrendingNews from '../../../components/explorer/top-trending-news'
import TrendingsCard from '../../../components/explorer/trendings-card'
import ExplorerLayout from '../../../components/layouts/explorer-layout'
import Layout from '../../../components/layouts/layout'

const ForYou: NextPage = () => {
  return (
    <Layout searchBar={false} hCard={false} fCard={true} stickyPosition={0}>
      <ExplorerLayout path='/explorer/tabs/for-you'>
        <TopTrendingNews
          link='/i/events/1'
          topic={'Politics'}
          time='Live'
          context='Our beloved new president made his address at a party'
          image='/trending/monkey-trending.jpg'
        />
        <TrendingsCard />
        <PeoplesToFollowCard />
      </ExplorerLayout>
    </Layout>
  )
}

export default ForYou
