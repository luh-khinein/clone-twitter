import React, { MouseEventHandler, useContext } from 'react'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'
import { CommentIcon, LikeIconLine, RetweetIcon, ShareIcon } from '../icons/post-icon'

interface Props {
  comments: string
  retweets: string
  likes: string
  handleSharePopup: MouseEventHandler
  shareButton: React.RefObject<HTMLButtonElement>
}

const TweetFooter: React.FC<Props> = ({ comments, retweets, likes, handleSharePopup, shareButton }) => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { smSize } = useContext(FontSizeContext)
  return (
    <div className={`z-20 absolute translate-y-[85px] translate-x-[70px] flex items-center w-full ${backgroundTheme === 'black' ? 'fill-[#a1a1aa] text-zinc-400' : 'fill-[#94a3b8] text-slate-400'}`} style={{ fontSize: `${smSize}px` }}>
      <div className='z-10 mr-20 flex items-center duration-200 hover:fill-[#1d9cf0]'>
        <button
          className='flex items-center jusitfy-center p-2 mr-2 rounded-full duration-200 hover:bg-[rgba(29,156,240,0.1)]'
        >
          <CommentIcon />
        </button>
        {comments}
      </div>
      <div className='mr-20 flex items-center duration-200 hover:fill-[#00ba7c]'>
        <button
          className='flex items-center jusitfy-center p-2 mr-2 rounded-full duration-200 hover:bg-[rgba(0,186,124,0.1)]'
        >
          <RetweetIcon />
        </button>
        {retweets}
      </div>
      <div className='mr-20 flex items-center duration-200 hover:fill-[#f91880]'>
        <button
          className='flex items-center jusitfy-center p-2 mr-2 rounded-full duration-200 hover:bg-[rgba(249,24,128,0.1)]'
        >
          <LikeIconLine />
        </button>
        {likes}
      </div>
      <div className='flex items-center duration-200 hover:fill-[#1d9cf0]'>
        <button
          ref={shareButton}
          onClick={handleSharePopup}
          className='flex items-center jusitfy-center p-2 rounded-full duration-200 hover:bg-[rgba(29,156,240,0.1)]'
        >
          <ShareIcon />
        </button>
      </div>
    </div>
  )
}

export default TweetFooter
