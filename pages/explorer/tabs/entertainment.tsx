import type { NextPage } from 'next'
import React from 'react'
import TopTrendingNews from '../../../components/explorer/top-trending-news'
import TrendingsCard from '../../../components/explorer/trendings-card'
import ExplorerLayout from '../../../components/layouts/explorer-layout'
import Layout from '../../../components/layouts/layout'

const Entertainment: NextPage = () => {
  return (
    <Layout searchBar={false} hCard={false} fCard={true} stickyPosition={0}>
      <ExplorerLayout path='/explorer/tabs/entertainment'>
        {/* Put notice about Woodpecker here */}
        <TopTrendingNews
          link='/i/events/1'
          topic='Politics'
          time='LIVE'
          context='Our beloved new president made his address at a party'
          image='/trending/monkey-trending.jpg'
        />
        {/* News about something O_o */}
        <TrendingsCard />
      </ExplorerLayout>
    </Layout>
  )
}

export default Entertainment
