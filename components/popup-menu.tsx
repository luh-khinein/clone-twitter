import React, { MouseEventHandler, useContext } from 'react'
import { BiHelpCircle } from 'react-icons/bi'
import {
  IoRocketOutline,
  IoOpenOutline,
  IoSettingsOutline
} from 'react-icons/io5'
import { ThemeContext } from '../utils/theme'
import { darkTheme, lightTheme } from '../libs/colors'
import PopupMenuButton from './popup-menu-button'
import { useRouter } from 'next/router'
import { BookmarkIconDisabled } from './icons/bookmark-icon'
import { ListIconDisabled } from './icons/list-icon'
import { MomentIconDisabled } from './icons/moment-icon'
import { TopicIconLine } from './icons/topic-icon'
import { NewsIconLine } from './icons/newsletter-icon'
import { ChartIcon } from './icons/chart-icon'
import { DisplayIcon } from './icons/display-icon'
import { ShortcutIcon } from './icons/shortcut-icon'

interface Props {
  handleModals: MouseEventHandler
}

const PopupMenu: React.FC<Props> = ({ handleModals }) => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const currentColor = backgroundTheme === 'black'
    ? '#a1a1aa'
    : '#94a3b8'
  const router = useRouter()
  return (
    <div className={`fixed z-30 top-0 min-w-[225px] ml-5 ${backgroundTheme === 'light' ? 'drop-shadow-xl' : 'drop-shadow-[0_20px_13px_rgba(255,255,255,.05)]'} rounded-xl`} style={{
      color: backgroundTheme === 'light'
        ? lightTheme.text
        : darkTheme.text
    }}>
      <nav className='w-full flex flex-col overflow-auto z-20'>
        <div className='flex flex-col short:hidden'>
          <PopupMenuButton
            link='/i/bookmarks'
            icon={<BookmarkIconDisabled color={currentColor} />}
            name='Bookmarks'
          />
          <PopupMenuButton
            link='/username/lists'
            icon={<ListIconDisabled color={currentColor} />}
            name='Lists'
          />
        </div>
        <PopupMenuButton
          link='/username/topics'
          icon={<TopicIconLine color={currentColor} />}
          name='Topics'
        />
        <PopupMenuButton
          link='/i/moment_maker'
          icon={<MomentIconDisabled color={currentColor} />}
          name='Moments'
        />
        <PopupMenuButton
          id='news'
          link={`${router.asPath}`}
          onClick={handleModals}
          icon={<NewsIconLine color={currentColor} />}
          name='Newsletters'
        />
        <PopupMenuButton
          id='professional'
          onClick={handleModals}
          link={`${router.asPath}`}
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
          icon={<ChartIcon color={currentColor} />}
          name='Analytics'
        />
        <div className={`flex w-full border-t ${backgroundTheme === 'light' ? 'border-gray-100' : 'border-gray-800'}`}>
          <PopupMenuButton
            link='/settings/account'
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
          id='display'
          onClick={handleModals}
          link={`${router.asPath}`}
          icon={<DisplayIcon color={currentColor} coloredColor={colorTheme} />}
          name='Display'
        />
        <PopupMenuButton
          id='keyboard'
          link={`${router.asPath}`}
          onClick={handleModals}
          icon={<ShortcutIcon color={currentColor} />}
          name='Keyboard shortcuts'
        />
      </nav>
    </div>
  )
}

export default PopupMenu
