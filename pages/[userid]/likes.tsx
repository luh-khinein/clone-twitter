import type { NextPage } from 'next'
import React, { useContext } from 'react'
import ProfileLayout from '../../components/layouts/profile-layout'
import Layout from '../../components/layouts/layout'
import { darkTheme, lightTheme } from '../../libs/colors'
import { ThemeContext } from '../../utils/theme'
import { FontSizeContext } from '../../utils/font-size'

const Likes: NextPage = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { baseSize } = useContext(FontSizeContext)
  return (
    <Layout searchBar={true} hCard={true} fCard={true} stickyPosition={450}>
      <ProfileLayout value='Likes' quantity={3}>
        <div className='flex flex-col w-full items-center mt-10' style={{
          color: backgroundTheme === 'light'
            ? lightTheme.text
            : darkTheme.text
        }}>
          <div className='items-start flex flex-col'>
            <span className='text-3xl font-bold w-[300px]'>
              You don&apos;t have any
              likes yet
            </span>
            <span className='w-[360px]' style={{
              fontSize: `${baseSize}px`
            }}>
              Tap the heart on any Tweet to show it some love.
              When you do, it&apos;ll show up here.
            </span>
          </div>
        </div>
      </ProfileLayout>
    </Layout>
  )
}

export default Likes
