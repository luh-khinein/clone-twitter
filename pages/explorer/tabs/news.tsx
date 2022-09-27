import type { NextPage } from 'next'
import React from 'react'
import TopTrendingNews from '../../../components/explorer/top-trending-news'
import TrendingsCard from '../../../components/explorer/trendings-card'
import ExplorerLayout from '../../../components/layouts/explorer-layout'
import Layout from '../../../components/layouts/layout'

const News: NextPage = () => {
  return (
    <Layout searchBar={false} hCard={false} fCard={true} stickyPosition={0}>
      <ExplorerLayout path='/explorer/tabs/news'>
        {/* Put notice about Tonny Delb here */}
        <TopTrendingNews
          link='/i/events/1'
          topic='Politics'
          time='LIVE'
          context='Our beloved new president made his address at a party'
          image='/trending/monkey-trending.jpg'
        />
        {/* News about the fight between the duck and the president */}
        <TrendingsCard />
      </ExplorerLayout>
    </Layout>
  )
}

export default News
