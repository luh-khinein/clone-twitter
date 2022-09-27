import type { NextPage } from 'next'
import React, { useContext } from 'react'
import NotificationsLayout from '../../components/layouts/notifications-layout'
import Layout from '../../components/layouts/layout'
import { ThemeContext } from '../../utils/theme'
import { FontSizeContext } from '../../utils/font-size'

const Mentions: NextPage = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { baseSize } = useContext(FontSizeContext)
  return (
    <Layout searchBar={true} hCard={true} fCard={true} stickyPosition={450}>
      <NotificationsLayout path='/notifications/mentions'>
        <div className='mt-28 px-32 py-1 flex flex-col items-center'>
          <span className='font-bold text-3xl mb-1'>
            Nothing to see here —
            yet
          </span>
          <span className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{
            fontSize: `${baseSize}px`
          }}>
            When someone mentions you, you&apos;ll find it here.
          </span>
        </div>
      </NotificationsLayout>
    </Layout>
  )
}

export default Mentions
