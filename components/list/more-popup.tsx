import React, { MouseEventHandler, useContext } from 'react'
import Link from 'next/link'
import { darkTheme, lightTheme } from '../../libs/colors'
import { ThemeContext } from '../../utils/theme'
import { TbFlag } from 'react-icons/tb'
import { FontSizeContext } from '../../utils/font-size'
import { BiBlock } from 'react-icons/bi'
import { HiOutlineSwitchHorizontal } from 'react-icons/hi'

interface Props {
  username: string
  id: number
  moreButton: React.RefObject<HTMLButtonElement>
  handleBlockModal: MouseEventHandler
  handleReportModal: MouseEventHandler
}

const ListMorePopup: React.FC<Props> = ({ username, id, moreButton, handleBlockModal, handleReportModal }) => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { exSmSize, baseSize } = useContext(FontSizeContext)
  return (
    <div className={`fixed z-30 min-w-[380px] max-w-[380px] h-max ${backgroundTheme === 'light' ? 'drop-shadow-xl' : 'drop-shadow-[0_20px_13px_rgba(255,255,255,.05)]'}`} style={{
      background: backgroundTheme === 'light'
        ? lightTheme.background
        : backgroundTheme === 'dark'
          ? darkTheme.background
          : '#000',
      color: backgroundTheme === 'light'
        ? lightTheme.text
        : darkTheme.text,
      left: `${moreButton.current!.getBoundingClientRect().x - 350}px`,
      top: `${moreButton.current!.getBoundingClientRect().y - 5}px`
    }}>
      <button onClick={handleReportModal} className={`w-full flex items-center px-5 py-3 duration-200 ${backgroundTheme === 'light' ? 'hover:bg-gray-50' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:bg-slate-800'}`}>
        <TbFlag
          className={`w-5 h-5 mr-3 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`}
        />
        <span style={{ fontSize: `${baseSize}px` }}>
          Report List
        </span>
      </button>
      <button onClick={handleBlockModal} className={`w-full flex items-center px-5 py-3 duration-200 ${backgroundTheme === 'light' ? 'hover:bg-gray-50' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:bg-slate-800'}`}>
        <BiBlock
          className={`w-6 h-6 mr-2 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`}
        />
        <div className='w-full flex flex-col items-start text-start'>
          <span style={{ fontSize: `${baseSize}px` }}>
            Block @{username}
          </span>
          <span className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${exSmSize}px` }}>
            This prevents @{username} from including you in any
            of their Lists, including this one.
          </span>
        </div>
      </button>
      <Link href={`/i/lists/${id}`}>
        <a className={`w-full flex items-center px-5 py-3 duration-200 ${backgroundTheme === 'light' ? 'hover:bg-gray-50' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:bg-slate-800'}`}>
          <HiOutlineSwitchHorizontal
            className={`w-5 h-5 mr-3 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`}
          />
          <div className='flex flex-col items-start'>
            <span style={{ fontSize: `${baseSize}px` }}>
              See top Tweets
            </span>
            <span className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${exSmSize}px` }}>
              You&apos;re seeing latest Tweets first. Top Tweets show you
              the best Tweets.
            </span>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default ListMorePopup
