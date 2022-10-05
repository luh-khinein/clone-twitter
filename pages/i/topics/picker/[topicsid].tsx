import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import Layout from '../../../../components/layouts/layout'
import TopicsCard from '../../../../components/topics/topics-card'
import { FontSizeContext } from '../../../../utils/font-size'
import { ThemeContext } from '../../../../utils/theme'

const Topics: NextPage = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { xlSize } = useContext(FontSizeContext)
  const router = useRouter()
  const topic = 'Some'
  const items: Array<string> = []
  for (let i = 1; i <= 30; ++i) {
    items.push(`${i}º item`)
  }
  return (
    <Layout searchBar={true} hCard={true} fCard={true} stickyPosition={450}>
      <section className={`pt-10 w-timeline h-full flex flex-col items-start justify-start border-x ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
        <div className='w-[598px] z-10 backdrop-blur-sm min-w-min flex items-center py-2 px-3 fixed top-0' style={{
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
            {topic}
          </h1>
        </div>
        <TopicsCard
          name='Something'
          items={items}
          maxRows={3}
          hasMore={false}
        />
        <TopicsCard
          name='Something'
          items={items}
          maxRows={3}
          hasMore={false}
        />
        <TopicsCard
          name='Something'
          items={items}
          maxRows={2}
          hasMore={false}
        />
        <TopicsCard
          name='Something'
          items={items}
          maxRows={2}
          hasMore={false}
        />
        <TopicsCard
          name='Something'
          items={items}
          maxRows={3}
          hasMore={false}
        />
        <TopicsCard
          name='Something'
          items={items}
          maxRows={3}
          hasMore={false}
        />
        <TopicsCard
          name='Something'
          items={items}
          maxRows={2}
          hasMore={false}
        />
        <TopicsCard
          name='Something'
          items={items}
          maxRows={3}
          hasMore={false}
        />
        <TopicsCard
          name='Something'
          items={items}
          maxRows={2}
          hasMore={false}
        />
        <TopicsCard
          name='Something'
          items={items}
          maxRows={3}
          hasMore={false}
        />
        <TopicsCard
          name='Something'
          items={items}
          maxRows={2}
          hasMore={false}
        />
      </section>
    </Layout>
  )
}

export default Topics
