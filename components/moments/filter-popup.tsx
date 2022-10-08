import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { BiBlock } from 'react-icons/bi'
import { darkTheme, lightTheme } from '../../libs/colors'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'
import { CommentIcon, LikeIconLine, RetweetIcon } from '../icons/post-icon'
import PopupMenuButton from '../popup-menu-button'

interface Props {
  filterButton: React.RefObject<HTMLButtonElement>
}

const FilterPopup: React.FC<Props> = ({ filterButton }) => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { baseSize } = useContext(FontSizeContext)
  const currentColor = backgroundTheme === 'black'
    ? '#a1a1aa'
    : '#94a3b8'
  const router = useRouter()
  return (
    <div className={`fixed z-30 ml-5 ${backgroundTheme === 'light' ? 'drop-shadow-xl' : 'drop-shadow-[0_20px_13px_rgba(255,255,255,.05)]'} rounded-xl`} style={{
      color: backgroundTheme === 'light'
        ? lightTheme.text
        : darkTheme.text,
      left: `${filterButton.current!.getBoundingClientRect().x - 110}px`,
      top: `${filterButton.current!.getBoundingClientRect().y + 30}px`
    }}>
      <nav className='w-full flex flex-col overflow-auto z-20'>
        <div className={`w-full px-3 py-3 border-b ${backgroundTheme === 'light' ? 'border-gray-100 text-slate-400' : backgroundTheme === 'black' ? 'border-zinc-800 text-zinc-400' : 'border-slate-800 text-slate-400'}`} style={{
          fontSize: `${baseSize}px`,
          background: backgroundTheme === 'light'
            ? lightTheme.background
            : backgroundTheme === 'dark'
              ? darkTheme.background
              : '#000'
        }}>
          Sort by
        </div>
        <PopupMenuButton
          link={`${router.asPath}`}
          icon={<CommentIcon color={currentColor} />}
          name='Replies'
        />
        <PopupMenuButton
          link={`${router.asPath}`}
          icon={<RetweetIcon color={currentColor} />}
          name='Retweets'
        />
        <PopupMenuButton
          link={`${router.asPath}`}
          icon={<LikeIconLine color={currentColor} />}
          name='Likes'
        />
        <PopupMenuButton
          link={`${router.asPath}`}
          icon={<AiOutlineClockCircle className='w-5 h-5' />}
          name='Date'
        />
        <PopupMenuButton
          link={`${router.asPath}`}
          icon={<BiBlock className='w-5 h-5' />}
          name='Original'
        />
      </nav>
    </div>
  )
}

export default FilterPopup
