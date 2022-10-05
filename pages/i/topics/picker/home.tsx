import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import Layout from '../../../../components/layouts/layout'
import CategoryButtons from '../../../../components/topics/category-buttons'
import TopicsCard from '../../../../components/topics/topics-card'
import { FontSizeContext } from '../../../../utils/font-size'
import { ThemeContext } from '../../../../utils/theme'

const AllTopics: NextPage = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { xlSize } = useContext(FontSizeContext)
  const router = useRouter()
  const items: Array<string> = []
  for (let i = 1; i <= 30; ++i) {
    items.push(`${i}º item`)
  }
  return (
    <Layout searchBar={true} hCard={true} fCard={true} stickyPosition={450}>
      <section className={`w-timeline h-full flex flex-col items-start justify-start py-2 pb-10 border-x ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
        <div className='w-[598px] z-10 backdrop-blur-sm flex items-center py-2 px-3 fixed top-0' style={{
          background: backgroundTheme === 'light'
            ? 'rgba(255, 255, 255, 0.85)'
            : backgroundTheme === 'dark'
              ? 'rgba(21, 32, 43, 0.85)'
              : 'rgba(0, 0, 0, 0.85)'
        }}>
          <button
            onClick={() => router.back()}
            className={`p-2 mr-5 flex items-center justify-center rounded-full duration-200 ${backgroundTheme === 'light' ? 'hover:bg-gray-50' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:bg-slate-800'}`}
          >
            <BsArrowLeft className='w-5 h-5' />
          </button>
          <h1 className='font-bold' style={{
            fontSize: `${xlSize}px`
          }}>
            All Topics
          </h1>
        </div>
        <div className='w-full flex flex-col mt-10'>
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
        </div>
      </section>
    </Layout>
  )
}

export default AllTopics
