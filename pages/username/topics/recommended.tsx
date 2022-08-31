import type { NextPage } from 'next'
import React from 'react'
import SidebarLayout from '../../../components/layouts/sidebar-layout'
import TopicsLayout from '../../../components/layouts/topics-layout'
import CategoryButtons from '../../../components/topics/category-buttons'
import TopicsCard from '../../../components/topics/topics-card'

const Recommended: NextPage = () => {
  const items: Array<string> = []
  for (let i = 1; i <= 30; ++i) {
    items.push(`${i}º item`)
  }
  return (
    <SidebarLayout searchBar={true} hCard={true} fCard={true}>
      <TopicsLayout>
        <CategoryButtons />
        <TopicsCard
          name='For you'
          topics={items}
          maxRows={3}
          hasMore={false}
        />
        <TopicsCard
          name='Gaming'
          topics={items}
          maxRows={3}
          hasMore={true}
        />
        <TopicsCard
          name='Entertainment'
          topics={items}
          maxRows={3}
          hasMore={true}
        />
        <TopicsCard
          name='Animation & comics'
          topics={items}
          maxRows={3}
          hasMore={true}
        />
        <TopicsCard
          name='Music'
          topics={items}
          maxRows={3}
          hasMore={true}
        />
        <TopicsCard
          name='Arts & culture'
          topics={items}
          maxRows={3}
          hasMore={true}
        />
        <TopicsCard
          name='Only on Twitter'
          topics={items}
          maxRows={1}
          hasMore={false}
        />
        <TopicsCard
          name='Family & relationships'
          topics={items}
          maxRows={3}
          hasMore={true}
        />
        <TopicsCard
          name='Fashion & beauty'
          topics={items}
          maxRows={3}
          hasMore={true}
        />
        <TopicsCard
          name='Outdoors'
          topics={items}
          maxRows={3}
          hasMore={true}
        />
        <TopicsCard
          name='Food'
          topics={items}
          maxRows={3}
          hasMore={true}
        />
        <TopicsCard
          name='News'
          topics={items}
          maxRows={3}
          hasMore={true}
        />
        <TopicsCard
          name='Business & finance'
          topics={items}
          maxRows={3}
          hasMore={true}
        />
        <TopicsCard
          name='Technology'
          topics={items}
          maxRows={3}
          hasMore={true}
        />
        <TopicsCard
          name='Sports'
          topics={items}
          maxRows={3}
          hasMore={true}
        />
        <TopicsCard
          name='Science'
          topics={items}
          maxRows={3}
          hasMore={true}
        />
        <TopicsCard
          name='Careers'
          topics={items}
          maxRows={3}
          hasMore={true}
        />
        <TopicsCard
          name='Fitness'
          topics={items}
          maxRows={3}
          hasMore={true}
        />
        <TopicsCard
          name='Travel'
          topics={items}
          maxRows={3}
          hasMore={true}
        />
      </TopicsLayout>
    </SidebarLayout>
  )
}

export default Recommended
