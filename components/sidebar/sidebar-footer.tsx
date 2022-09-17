import React, { useContext } from 'react'
import Link from 'next/link'
import { RiMoreLine } from 'react-icons/ri'
import { ThemeContext } from '../../utils/theme'
import { FontSizeContext } from '../../utils/font-size'

const SidebarFooter: React.FC = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { exSmSize } = useContext(FontSizeContext)
  return (
    <div className={`min-w-full relative grid grid-cols-2 xl:grid-cols-3 leading-5 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{
      fontSize: `${exSmSize}px`
    }}>
      <Link href='/en/demo-page'>
        <a target='_blank' className='hover:underline'>Terms of Service</a>
      </Link>
      <Link href='/en/demo-page'>
        <a target='_blank' className='hover:underline'>Privacy Policy</a>
      </Link>
      <Link href='/en/demo-page'>
        <a target='_blank' className='hover:underline'>Cookie Policy</a>
      </Link>
      <Link href='/en/demo-page'>
        <a target='_blank' className='hover:underline'>Accessibility</a>
      </Link>
      <Link href='/en/demo-page'>
        <a target='_blank' className='hover:underline'>Ads info</a>
      </Link>
      <button className='hover:underline flex items-center'>
        More&nbsp;
        <RiMoreLine />
      </button>
      <span>&#169; 2022 Twitter, Inc.</span>
    </div>
  )
}

export default SidebarFooter
