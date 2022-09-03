import type { NextPage } from 'next'
import React from 'react'
import DialogBox from '../components/messages/dialog-box'
import Navigations from '../components/messages/navigations'

const Messages: NextPage = () => {
  return (
    <section className='flex min-w-min min-h-screen'>
      <Navigations />
      <DialogBox />
    </section>
  )
}

export default Messages
