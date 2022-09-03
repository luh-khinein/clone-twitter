import type { NextPage } from 'next'
import React from 'react'
import TopTrendingNews from '../../../components/explorer/top-trending-news'
import TrendingsCard from '../../../components/explorer/trendings-card'
import ExplorerLayout from '../../../components/layouts/explorer-layout'
import Layout from '../../../components/layouts/layout'

const Sports: NextPage = () => {
  return (
    <Layout searchBar={false} hCard={false} fCard={true} stickyPosition={0}>
      <ExplorerLayout>
        {/* Put notice about basket here */}
        <TopTrendingNews
          topic='Politics'
          time='LIVE'
          context='Our beloved new president made his address at a party'
          image='/trending/monkey-trending.jpg'
        />
        {/* News about something about sports, and results of some match O_o */}
        <TrendingsCard />
      </ExplorerLayout>
    </Layout>
  )
}

export default Sports
