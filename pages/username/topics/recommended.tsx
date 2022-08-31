import type { NextPage } from 'next'
import React from 'react'
import SidebarLayout from '../../../components/layouts/sidebar-layout'
import TopicsLayout from '../../../components/layouts/topics-layout'
import CategoryButtons from '../../../components/topics/category-buttons'
import TopicsCard from '../../../components/topics/topics-card'

const Recommended: NextPage = () => {
  const names = []
  for (let i = 0; i <= 20; ++i) {
    names.push('something')
  }
  return (
    <SidebarLayout searchBar={true} hCard={true} fCard={true}>
      <TopicsLayout>
        <CategoryButtons />
        <TopicsCard
          name='For you'
          topics={names}
          hasMore={false}
        />
      </TopicsLayout>
    </SidebarLayout>
  )
}

export default Recommended
