// This page is a demo because it needs some values that
// are in the database
import React, { useContext } from 'react'
import Layout from '../../../components/layouts/layout'
import TopicsIdLayout from '../../../components/layouts/topics-id-layout'
import { darkTheme, lightTheme } from '../../../libs/colors'
import { ThemeContext } from '../../../utils/theme'

const TopicsId: React.FC = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  // ** Items to get in database ** //
  const topicName = 'Topic'
  const description = 'topic description'
  const isFollowed = false
  // ***************************** //
  return (
    <Layout searchBar={true} hCard={true} fCard={false} stickyPosition={400}>
      <TopicsIdLayout name={topicName} isFollowed={isFollowed}>
        <div className='flex flex-col w-full px-3 py-2'>
          <div className='flex flex-col w-full items-start text-start mb-7'>
            <h1 className='text-3xl font-bold'>
              {topicName}
            </h1>
            <span className='text-sm tracking-wide'>
              {description}
            </span>
          </div>
          <span className='text-sm py-3'>
            Tweets about the Topics you follow show up in your Home Timeline
          </span>
          <div className='flex w-full items-center justify-between'>
            <button className={`w-full flex py-2 mr-2 items-center justify-center font-bold text-base border rounded-full duration-200 ${backgroundTheme === 'light' ? 'border-gray-100 hover:brightness-95' : 'border-gray-800 hover:brightness-110'}`} style={{
              background: backgroundTheme === 'light'
                ? lightTheme.background
                : backgroundTheme === 'dark'
                  ? darkTheme.background
                  : '#000'
            }}>
              Not interested
            </button>
            <button className={`w-full flex py-2 items-center justify-center font-bold text-base rounded-full duration-200 ${backgroundTheme === 'light' ? 'hover:brightness-110' : 'hover:brightness-95'}`} style={{
              background: backgroundTheme === 'light'
                ? '#000'
                : '#fff',
              color: backgroundTheme === 'light'
                ? '#fff'
                : '#000'
            }}>
              Follow
            </button>
          </div>
        </div>
        <div className={`w-full py-5 flex items-center justify-center border-t ${backgroundTheme === 'light' ? 'border-gray-100' : 'border-gray-800'}`}>
          Related tweets
        </div>
      </TopicsIdLayout>
    </Layout>
  )
}

export default TopicsId
