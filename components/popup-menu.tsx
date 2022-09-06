import React, { useContext } from 'react'
import Link from 'next/link'
import { AiOutlineThunderbolt } from 'react-icons/ai'
import { BiHelpCircle } from 'react-icons/bi'
import { BsChatRightText, BsPencilSquare } from 'react-icons/bs'
import { FiBarChart2 } from 'react-icons/fi'
import { ImNewspaper } from 'react-icons/im'
import {
  IoRocketOutline,
  IoOpenOutline,
  IoSettingsOutline,
  IoAccessibility
} from 'react-icons/io5'
import { ThemeContext } from '../utils/theme'
import { darkTheme, lightTheme } from '../libs/colors'
import { RiBookmarkLine, RiFile2Line } from 'react-icons/ri'
import PopupMenuButton from './popup-menu-button'
import { useRouter } from 'next/router'

const PopupMenu: React.FC = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  const router = useRouter()
  return (
    <>
      <div className={`fixed z-30 top-0 min-w-[225px] ml-5 ${backgroundTheme === 'light' ? 'drop-shadow-xl' : 'drop-shadow-[0_20px_13px_rgba(255,255,255,.05)]'} rounded-xl`} style={{
        color: backgroundTheme === 'light'
          ? lightTheme.text
          : darkTheme.text,
      }}>
        <nav className='w-full flex flex-col overflow-auto z-20'>
          <div className='flex flex-col short:hidden'>
            <PopupMenuButton
              link='/i/bookmarks'
              icon={<RiBookmarkLine className='w-5 h-5' />}
              name='Bookmarks'
            />
            <PopupMenuButton
              link='/username/lists'
              icon={<RiFile2Line className='w-5 h-5' />}
              name='Lists'
            />
          </div>
          <PopupMenuButton
            link='/username/topics'
            icon={<BsChatRightText className='w-5 h-5' />}
            name='Topics'
          />
          <PopupMenuButton
            link='/i/moment_maker'
            icon={<AiOutlineThunderbolt className='w-5 h-5' />}
            name='Moments'
          />
          <PopupMenuButton
            link={`${router.asPath}/?newsletters=${true}`}
            alternativeLink='/i/newsletters'
            icon={<ImNewspaper className='w-5 h-5' />}
            name='Newsletters'
          />
          <PopupMenuButton
            link={`${router.asPath}/?professional=${true}`}
            alternativeLink='/i/flow/convert_to_professional'
            icon={<IoRocketOutline className='w-5 h-5' />}
            name='Twitter for Professionals'
          />
          <PopupMenuButton
            link='/home'
            icon={<IoOpenOutline className='w-5 h-5' />}
            name='Twitter Ads'
          />
          <PopupMenuButton
            link='/home'
            icon={<FiBarChart2 className='w-5 h-5' />}
            name='Analytics'
          />
          <div className={`flex w-full border-t ${backgroundTheme === 'light' ? 'border-gray-100' : 'border-gray-800'}`}>
            <PopupMenuButton
              link='/home'
              icon={<IoSettingsOutline className='w-5 h-5' />}
              name='Settings and privacy'
            />
          </div>
          <PopupMenuButton
            link='/home'
            icon={<BiHelpCircle className='w-5 h-5' />}
            name='Help Center'
          />
          <PopupMenuButton
            link={`${router.asPath}/?display=${true}`}
            alternativeLink='/i/display'
            icon={<BsPencilSquare className='w-5 h-5' />}
            name='Display'
          />
          <PopupMenuButton
            link='/home'
            icon={<IoAccessibility className='w-5 h-5' />}
            name='Keyboard shortcuts'
          />
        </nav>
      </div>
    </>
  )
}

export default PopupMenu
