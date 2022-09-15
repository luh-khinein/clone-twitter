import type { NextPage } from 'next'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const DemoPage: NextPage = () => {
  return (
    <main className='flex flex-col w-screen h-screen items-center justify-start py-10'>
      <div className='px-20 py-10 bg-black rounded-2xl z-10 h-max flex flex-col items-center'>
        <span className='text-white font-bold max-w-20 mb-10 text-center'>
          Hello, as it is a demonstration project, <br />
          then external pages, such as privacy policies, do not exist. <br />
          Thank your for your understanding. <br />
          O_o
        </span>
        <Link href='/home'>
          <a className='px-5 py-1.5 w-max bg-white text-black font-bold flex items-center justify-center rounded-full duration-200 hover:bg-gray-200'>
            Return to home clone twitter
          </a>
        </Link>
      </div>
      <Image
        src='/assets/demo-page-masthead.jpg'
        className='absolute'
        layout='fill'
        alt='Masthead'
      />
    </main>
  )
}

export default DemoPage 
