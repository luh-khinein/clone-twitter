import type { NextPage } from 'next'
import React, { useContext } from 'react'
import Link from 'next/link'
import Layout from '../../../components/layouts/layout'
import TopicsLayout from '../../../components/layouts/topics-layout'
import FollowedTopics from '../../../components/topics/followed-topics'
import SuggestedTopics from '../../../components/topics/suggested-topics'
import { FontSizeContext } from '../../../utils/font-size'
import { ThemeContext } from '../../../utils/theme'

const Topics: NextPage = () => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const { smSize } = useContext(FontSizeContext)
  return (
    <Layout searchBar={true} hCard={true} fCard={true} stickyPosition={450}>
      <TopicsLayout>
        <div className='w-full px-5 py-5' style={{ fontSize: `${smSize}px` }}>
          The Topics you follow are used to personalize the Tweets, events, and ads that you
          see, and show up publicly on your profile
        </div>
        <FollowedTopics />
        <SuggestedTopics />
        <div className={`inline-block items-center w-full px-5 py-4 border-t ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`} style={{
          fontSize: `${smSize}px`
        }}>
          Topics that you follow are shown here. To see all the things that Twitter thinks you&apos;re
          interested in, check out&nbsp;
          <Link href=''>
            <a style={{ color: colorTheme }}>
              Your Twitter data.&nbsp;
            </a>
          </Link>
          You can also
          <Link href=''>
            <a style={{ color: colorTheme }}>
              &nbsp;learn more
            </a>
          </Link>
          &nbsp;about following Topics.
        </div>
      </TopicsLayout>
    </Layout>
  )
}

export default Topics
