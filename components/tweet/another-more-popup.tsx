import { useRouter } from 'next/router'
import React, { MouseEventHandler, useContext } from 'react'
import { BiVolumeMute } from 'react-icons/bi'
import { FiUserPlus } from 'react-icons/fi'
import { ImEmbed2 } from 'react-icons/im'
import { MdOutlineBlock, MdPostAdd } from 'react-icons/md'
import { TbFlag } from 'react-icons/tb'
import { darkTheme, lightTheme } from '../../libs/colors'
import { ThemeContext } from '../../utils/theme'
import PopupMenuButton from '../popup-menu-button'

interface Props {
  username: string
  handleBlockModal: MouseEventHandler
  handleReportModal: MouseEventHandler
}

const AnotherMorePopup: React.FC<Props> = ({ username, handleBlockModal, handleReportModal }) => {
  const { backgroundTheme } = useContext(ThemeContext)
  const router = useRouter()
  return (
    <div className={`left-[32%] top-[20%] absolute z-30 min-w-[225px] ml-5 ${backgroundTheme === 'light' ? 'drop-shadow-xl' : 'drop-shadow-[0_20px_13px_rgba(255,255,255,.05)]'} rounded-xl`} style={{
      color: backgroundTheme === 'light'
        ? lightTheme.text
        : darkTheme.text,

    }}>
      <nav className='w-full flex flex-col overflow-auto z-20'>
        <PopupMenuButton
          link={`${router.asPath}`}
          icon={<FiUserPlus className='w-5 h-5' />}
          name={`Follow @${username}`}
        />
        <PopupMenuButton
          link={`${router.asPath}`}
          icon={<MdPostAdd className='w-5 h-5' />}
          name={`Add/remove @${username} from Lists`}
        />
        <PopupMenuButton
          link={`${router.asPath}`}
          icon={<BiVolumeMute className='w-5 h-5' />}
          name={`Mute @${username}`}
        />
        <PopupMenuButton
          link={`${router.asPath}`}
          icon={<BiVolumeMute className='w-5 h-5' />}
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
          link={`${router.asPath}`}
          icon={<TbFlag className='w-5 h-5' />}
          name='View hidden replies'
        />
      </nav>
    </div>
  )
}

export default AnotherMorePopup
