import type { NextPage } from 'next'
import React from 'react'
import Layout from '../../../components/layouts/layout'
import TopicsLayout from '../../../components/layouts/topics-layout'
import CategoryButtons from '../../../components/topics/category-buttons'
import TopicsCard from '../../../components/topics/topics-card'

const Recommended: NextPage = () => {
  const items: Array<string> = []
  for (let i = 1; i <= 30; ++i) {
    items.push(`${i}º item`)
  }
  return (
    <Layout searchBar={true} hCard={true} fCard={true} stickyPosition={450}>
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
          link='/i/topics/picker/14'
        />
        <TopicsCard
          name='Entertainment'
          items={items}
          maxRows={3}
          hasMore={true}
          link='/i/topics/picker/15'
        />
        <TopicsCard
          name='Animation & comics'
          items={items}
          maxRows={3}
          hasMore={true}
          link='/i/topics/picker/16'
        />
        <TopicsCard
          name='Music'
          items={items}
          maxRows={3}
          hasMore={true}
          link='/i/topics/picker/17'
        />
        <TopicsCard
          name='Arts & culture'
          items={items}
          maxRows={3}
          hasMore={true}
          link='/i/topics/picker/18'
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
          link='/i/topics/picker/19'
        />
        <TopicsCard
          name='Fashion & beauty'
          items={items}
          maxRows={3}
          hasMore={true}
          link='/i/topics/picker/20'
        />
        <TopicsCard
          name='Outdoors'
          items={items}
          maxRows={3}
          hasMore={true}
          link='/i/topics/picker/21'
        />
        <TopicsCard
          name='Food'
          items={items}
          maxRows={3}
          hasMore={true}
          link='/i/topics/picker/22'
        />
        <TopicsCard
          name='News'
          items={items}
          maxRows={3}
          hasMore={true}
          link='/i/topics/picker/23'
        />
        <TopicsCard
          name='Business & finance'
          items={items}
          maxRows={3}
          hasMore={true}
          link='/i/topics/picker/24'
        />
        <TopicsCard
          name='Technology'
          items={items}
          maxRows={3}
          hasMore={true}
          link='/i/topics/picker/25'
        />
        <TopicsCard
          name='Sports'
          items={items}
          maxRows={3}
          hasMore={true}
          link='/i/topics/picker/26'
        />
        <TopicsCard
          name='Science'
          items={items}
          maxRows={3}
          hasMore={true}
          link='/i/topics/picker/27'
        />
        <TopicsCard
          name='Careers'
          items={items}
          maxRows={3}
          hasMore={true}
          link='/i/topics/picker/13'
        />
        <TopicsCard
          name='Fitness'
          items={items}
          maxRows={3}
          hasMore={true}
          link='/i/topics/picker/12'
        />
        <TopicsCard
          name='Travel'
          items={items}
          maxRows={3}
          hasMore={true}
          link='/i/topics/picker/11'
        />
      </TopicsLayout>
    </Layout>
  )
}

export default Recommended
