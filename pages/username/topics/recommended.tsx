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
    <SidebarLayout searchBar={true} hCard={true} fCard={true} stickyPosition={450}>
      <TopicsLayout>
        <CategoryButtons />
        <TopicsCard
          name='For you'
          items={items}
          maxRows={3}
          hasMore={false}
        />
        <TopicsCard
          name='Gaming'
          items={items}
          maxRows={3}
          hasMore={true}
        />
        <TopicsCard
          name='Entertainment'
          items={items}
          maxRows={3}
          hasMore={true}
        />
        <TopicsCard
          name='Animation & comics'
          items={items}
          maxRows={3}
          hasMore={true}
        />
        <TopicsCard
          name='Music'
          items={items}
          maxRows={3}
          hasMore={true}
        />
        <TopicsCard
          name='Arts & culture'
          items={items}
          maxRows={3}
          hasMore={true}
        />
        <TopicsCard
          name='Only on Twitter'
          items={items}
          maxRows={1}
          hasMore={false}
        />
        <TopicsCard
          name='Family & relationships'
          items={items}
          maxRows={3}
          hasMore={true}
        />
        <TopicsCard
          name='Fashion & beauty'
          items={items}
          maxRows={3}
          hasMore={true}
        />
        <TopicsCard
          name='Outdoors'
          items={items}
          maxRows={3}
          hasMore={true}
        />
        <TopicsCard
          name='Food'
          items={items}
          maxRows={3}
          hasMore={true}
        />
        <TopicsCard
          name='News'
          items={items}
          maxRows={3}
          hasMore={true}
        />
        <TopicsCard
          name='Business & finance'
          items={items}
          maxRows={3}
          hasMore={true}
        />
        <TopicsCard
          name='Technology'
          items={items}
          maxRows={3}
          hasMore={true}
        />
        <TopicsCard
          name='Sports'
          items={items}
          maxRows={3}
          hasMore={true}
        />
        <TopicsCard
          name='Science'
          items={items}
          maxRows={3}
          hasMore={true}
        />
        <TopicsCard
          name='Careers'
          items={items}
          maxRows={3}
          hasMore={true}
        />
        <TopicsCard
          name='Fitness'
          items={items}
          maxRows={3}
          hasMore={true}
        />
        <TopicsCard
          name='Travel'
          items={items}
          maxRows={3}
          hasMore={true}
        />
      </TopicsLayout>
    </SidebarLayout>
  )
}

export default Recommended
