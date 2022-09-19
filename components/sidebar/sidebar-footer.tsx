import React, { useCallback, useContext, useState } from 'react'
import Link from 'next/link'
import { RiMoreLine } from 'react-icons/ri'
import { ThemeContext } from '../../utils/theme'
import { FontSizeContext } from '../../utils/font-size'
import FooterPopupMenu from '../footer-popup-menu'

const SidebarFooter: React.FC = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { exSmSize } = useContext(FontSizeContext)
  const [menuState, setMenuState] = useState(false)
  const handleMenuState = useCallback(() => {
    setMenuState(!menuState)
  }, [menuState])
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
      <button onClick={handleMenuState} className='hover:underline flex items-center'>
        More&nbsp;
        <RiMoreLine />
      </button>
      <span>&#169; 2022 Twitter, Inc.</span>
      {menuState && (
        <div className='fixed top-0 w-full h-full z-20' onClick={handleMenuState}>
          <FooterPopupMenu />
        </div>
      )}
    </div>
  )
}

export default SidebarFooter
