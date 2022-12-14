import { useRouter } from 'next/router'
import React, { MouseEventHandler, useContext } from 'react'
import { ImEmbed2 } from 'react-icons/im'
import { MdOutlineBlock } from 'react-icons/md'
import { TbFlag } from 'react-icons/tb'
import { darkTheme, lightTheme } from '../../libs/colors'
import { ThemeContext } from '../../utils/theme'
import { AddListIcon, HiddenListIcon } from '../icons/list-icon'
import { MuteIcon } from '../icons/mute-icon'
import { AddUserIcon } from '../icons/user-icon'
import PopupMenuButton from '../popup-menu-button'

interface Props {
  id: number
  username: string
  moreButton: React.RefObject<HTMLButtonElement>
  handleBlockModal: MouseEventHandler
  handleReportModal: MouseEventHandler
}

const AnotherMorePopup: React.FC<Props> = ({ id, username, moreButton, handleBlockModal, handleReportModal }) => {
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
          link={`${router.asPath}`}
          icon={<AddUserIcon />}
          name={`Follow @${username}`}
        />
        <PopupMenuButton
          link={`${router.asPath}`}
          icon={<AddListIcon />}
          name={`Add/remove @${username} from Lists`}
        />
        <PopupMenuButton
          link={`${router.asPath}`}
          icon={<MuteIcon />}
          name={`Mute @${username}`}
        />
        <PopupMenuButton
          link={`${router.asPath}`}
          icon={<MuteIcon />}
          name={`Mute this conversation`}
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
        <PopupMenuButton
          link={`/${username}/status/${id}/hidden`}
          icon={<HiddenListIcon />}
          name='View hidden replies'
        />
      </nav>
    </div>
  )
}

export default AnotherMorePopup
