import type { NextPage } from 'next'
import Link from 'next/link'

const Index: NextPage = () => {
  return (
    <div className='min-h-screen min-w-full flex flex-1 items-center justify-center'>
      <Link href='/home'>
        <a className='underline text-xl'>Start</a>
      </Link>
    </div>
  )
}

export default Index 
