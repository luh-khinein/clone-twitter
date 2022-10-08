import { useRouter } from 'next/router'
import React, { MouseEventHandler, useContext } from 'react'
import { ImEmbed2 } from 'react-icons/im'
import { MdOutlineBlock } from 'react-icons/md'
import { TbFlag, TbMoodSad } from 'react-icons/tb'
import { darkTheme, lightTheme } from '../../libs/colors'
import { ThemeContext } from '../../utils/theme'
import { AddListIcon } from '../icons/list-icon'
import { MuteIcon } from '../icons/mute-icon'
import { AddUserIcon } from '../icons/user-icon'
import PopupMenuButton from '../popup-menu-button'

interface Props {
  username: string
  handleBlockModal: MouseEventHandler
  handleReportModal: MouseEventHandler
  moreButton: React.RefObject<HTMLButtonElement>
}

const MorePopup: React.FC<Props> = ({ username, handleBlockModal, handleReportModal, moreButton }) => {
  const { backgroundTheme } = useContext(ThemeContext)
  const router = useRouter()
  return (
    <div className={`absolute z-30 min-w-[225px] ml-5 ${backgroundTheme === 'light' ? 'drop-shadow-xl' : 'drop-shadow-[0_20px_13px_rgba(255,255,255,.05)]'} rounded-xl`} style={{
      color: backgroundTheme === 'light'
        ? lightTheme.text
        : darkTheme.text,
      left: `${moreButton.current!.getBoundingClientRect().x - 290}px`,
      top: `${moreButton.current!.getBoundingClientRect().y}px`
    }}>
      <nav className='w-full flex flex-col overflow-auto z-20'>
        <PopupMenuButton
          link='/home'
          icon={<TbMoodSad className='w-5 h-5' />}
          name={`Not interested in this Tweet`}
        />
        <PopupMenuButton
          link='/home'
          icon={<AddUserIcon />}
          name={`Follow @${username}`}
        />
        <PopupMenuButton
          link='/home'
          icon={<AddListIcon />}
          name={`Add/remove @${username} from Lists`}
        />
        <PopupMenuButton
          link='/home'
          icon={<MuteIcon />}
          name={`Mute @${username}`}
        />
        <PopupMenuButton
          link={`${router.asPath}`}
          onClick={handleBlockModal}
          icon={<MdOutlineBlock className='w-5 h-5' />}
          name={`Block @${username}`}
        />
        <PopupMenuButton
          link='/en/demo-page'
          target='_blank'
          icon={<ImEmbed2 className='w-5 h-5' />}
          name='Embed Tweet'
        />
        <PopupMenuButton
          link={`${router.asPath}`}
          onClick={handleReportModal}
          icon={<TbFlag className='w-5 h-5' />}
          name='Report Tweet'
        />
      </nav>
    </div>
  )
}

export default MorePopup
