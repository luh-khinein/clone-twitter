import React from 'react'
import Link from 'next/link'
import { RiMoreLine } from 'react-icons/ri'

const SidebarFooter: React.FC = () => (
  <div className='min-w-full grid grid-cols-2 xl:grid-cols-3 text-slate-400 text-xs leading-5'>
    <Link href=''>
      <a className='hover:underline'>Terms of Service</a>
    </Link>
    <Link href=''>
      <a className='hover:underline'>Privacy Policy</a>
    </Link>
    <Link href=''>
      <a className='hover:underline'>Cookie Policy</a>
    </Link>
    <Link href=''>
      <a className='hover:underline'>Accessibility</a>
    </Link>
    <Link href=''>
      <a className='hover:underline'>Ads info</a>
    </Link>
    <Link href=''>
      <a className='hover:underline flex items-center'>
        More&nbsp;
        <RiMoreLine />
      </a>
    </Link>
    <span>&#169; 2022 Twitter, Inc.</span>
  </div>
)

export default SidebarFooter
