import React, { MouseEventHandler, useContext } from 'react'
import Link from 'next/link'
import { darkTheme, lightTheme } from '../../libs/colors'
import { ThemeContext } from '../../utils/theme'
import { TbFlag } from 'react-icons/tb'
import { FontSizeContext } from '../../utils/font-size'
import { BiBlock } from 'react-icons/bi'
import { HiOutlineSwitchHorizontal } from 'react-icons/hi'
import { useRouter } from 'next/router'

interface Props {
  username: string
  id: number
  handleReportModal: MouseEventHandler
  handleBlockModal: MouseEventHandler
}

const ListMorePopup: React.FC<Props> = ({ username, id, handleReportModal, handleBlockModal }) => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { exSmSize, baseSize } = useContext(FontSizeContext)
  const router = useRouter()
  return (
    <div className={`fixed z-30 top-5 left-[30%] min-w-[380px] max-w-[380px] h-max ${backgroundTheme === 'light' ? 'drop-shadow-xl' : 'drop-shadow-[0_20px_13px_rgba(255,255,255,.05)]'}`} style={{
      background: backgroundTheme === 'light'
        ? lightTheme.background
        : backgroundTheme === 'dark'
          ? darkTheme.background
          : '#000',
      color: backgroundTheme === 'light'
        ? lightTheme.text
        : darkTheme.text,
    }}>
      <Link href={`/i/lists/${id}`}>
        <a onClick={handleReportModal} className={`w-full flex items-center px-5 py-3 duration-200 ${backgroundTheme === 'light' ? 'hover:bg-gray-50' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:bg-slate-800'}`}>
          <TbFlag
            className={`w-5 h-5 mr-3 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`}
          />
          <span style={{ fontSize: `${baseSize}px` }}>
            Report List
          </span>
        </a>
      </Link>
      <button onClick={handleBlockModal} className={`w-full flex items-center px-5 py-3 duration-200 ${backgroundTheme === 'light' ? 'hover:bg-gray-50' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:bg-slate-800'}`}>
        <BiBlock
          className={`w-6 h-6 mr-2 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`}
        />
        <div className='w-full flex flex-col items-start'>
          <span style={{ fontSize: `${baseSize}px` }}>
            Block @{username}
          </span>
          <span className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${exSmSize}px` }}>
            This prevents @{username} from including you in any
            of their Lists, including this one.
          </span>
        </div>
      </button>
      <Link href={`${router.asPath}`}>
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
