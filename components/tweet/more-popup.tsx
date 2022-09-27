import React, { useContext } from 'react'
import { BiVolumeMute } from 'react-icons/bi'
import { FiUserPlus } from 'react-icons/fi'
import { ImEmbed2 } from 'react-icons/im'
import { MdOutlineBlock, MdPostAdd } from 'react-icons/md'
import { TbFlag, TbMoodSad } from 'react-icons/tb'
import { darkTheme, lightTheme } from '../../libs/colors'
import { ThemeContext } from '../../utils/theme'
import PopupMenuButton from '../popup-menu-button'

interface Props {
  username: string
}

const MorePopup: React.FC<Props> = ({ username }) => {
  const { backgroundTheme } = useContext(ThemeContext)
  return (
    <div className={`left-[32%] top-[20%] absolute z-30 min-w-[225px] ml-5 ${backgroundTheme === 'light' ? 'drop-shadow-xl' : 'drop-shadow-[0_20px_13px_rgba(255,255,255,.05)]'} rounded-xl`} style={{
      color: backgroundTheme === 'light'
        ? lightTheme.text
        : darkTheme.text,

    }}>
      <nav className='w-full flex flex-col overflow-auto z-20'>
        <button
          className={`w-full flex items-center py-5 px-5 ${backgroundTheme === 'light' ? 'bg-white hover:bg-gray-50' : backgroundTheme === 'black' ? 'bg-black hover:bg-zinc-800' : 'hover:brightness-110'}`}
          style={{
            background: backgroundTheme === 'dark'
              ? darkTheme.background
              : ''
          }}
        >
          <div className={`mr-4 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`}>
            <TbMoodSad className='w-5 h-5' />
          </div>
          Not interested in this Tweet
        </button>
        <button
          className={`w-full flex items-center py-5 px-5 ${backgroundTheme === 'light' ? 'bg-white hover:bg-gray-50' : backgroundTheme === 'black' ? 'bg-black hover:bg-zinc-800' : 'hover:brightness-110'}`}
          style={{
            background: backgroundTheme === 'dark'
              ? darkTheme.background
              : ''
          }}
        >
          <div className={`mr-4 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`}>
            <FiUserPlus className='w-5 h-5' />
          </div>
          Follow @{username}
        </button>
        <PopupMenuButton
          onClick={undefined}
          link='/home'
          icon={<MdPostAdd className='w-5 h-5' />}
          name={`Add/remove @${username} from Lists`}
        />
        <button
          className={`w-full flex items-center py-5 px-5 ${backgroundTheme === 'light' ? 'bg-white hover:bg-gray-50' : backgroundTheme === 'black' ? 'bg-black hover:bg-zinc-800' : 'hover:brightness-110'}`}
          style={{
            background: backgroundTheme === 'dark'
              ? darkTheme.background
              : ''
          }}
        >
          <div className={`mr-4 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`}>
            <BiVolumeMute className='w-5 h-5' />
          </div>
          mute @{username}
        </button>
        <PopupMenuButton
          onClick={undefined}
          link='/'
          icon={<MdOutlineBlock className='w-5 h-5' />}
          name={`Block @${username}`}
        />
        <PopupMenuButton
          onClick={undefined}
          link='/en/demo-page'
          target='_blank'
          icon={<ImEmbed2 className='w-5 h-5' />}
          name='Embed Tweet'
        />
        <PopupMenuButton
          onClick={undefined}
          link='/home'
          icon={<TbFlag className='w-5 h-5' />}
          name='Report Tweet'
        />
      </nav>
    </div>
  )
}

export default MorePopup
