import React, { useCallback, useContext, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { HiOutlinePencil } from 'react-icons/hi'
import { RiErrorWarningLine, RiMoreLine, RiUser3Fill } from 'react-icons/ri'
import { darkTheme } from '../../libs/colors'
import { ThemeContext } from '../../utils/theme'
import MomentMorePopup from './moment-more-popup'
import DeleteModal from '../modal/moment-delete-confirmation'
import { FontSizeContext } from '../../utils/font-size'

const PreviewMoment: React.FC = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { smSize, baseSize, xlSize } = useContext(FontSizeContext)
  const [morePopup, setMorePopup] = useState(false)
  const handleMorePopup = useCallback(() => {
    setMorePopup(!morePopup)
  }, [morePopup])
  const [deleteModal, setDeleteModal] = useState(false)
  const handleDeleteModal = useCallback(() => {
    setDeleteModal(true)
  }, [])
  // Get this later
  const moment_state = {
    id: 1,
    title: 'O_o',
    description: 'Some',
    cover_image: '',
    date: '4 month',
    isPublic: false,
    hasContent: true,
    username: 'username',
    nickname: 'nickname',
    user_icon: '',
  }
  return (
    <section className='flex flex-col w-timeline overflow-y-scroll'>
      <div className='w-full flex items-center py-2 px-3' style={{
        justifyContent: moment_state.hasContent && !moment_state.isPublic ? 'space-between' : 'end'
      }}>
        {moment_state.hasContent && !moment_state.isPublic ? (
          <div className='items-center flex'>
            <RiErrorWarningLine className='w-4 h-4 mr-2' style={{ color: '#ffd500' }} />
            <span className='font-bold' style={{ fontSize: `${smSize}px` }}>
              Publish Moment to see added Tweets
            </span>
          </div>
        ) : undefined}
        <div className='flex items-center'>
          <Link href={`/i/moment_maker/edit/${moment_state.id}`}>
            <a
              className={`p-2 mr-5 flex items-center justify-center rounded-full duration-200 ${backgroundTheme === 'light' ? 'hover:bg-gray-50' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:brightness-110'}`}
              style={{
                background: backgroundTheme === 'dark'
                  ? darkTheme.background
                  : ''
              }}
            >
              <HiOutlinePencil className='w-5 h-5' />
            </a>
          </Link>
          <button
            onClick={handleMorePopup}
            className={`p-2 flex items-center justify-center rounded-full duration-200 ${backgroundTheme === 'light' ? 'hover:bg-gray-50' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:brightness-110'}`}
            style={{
              background: backgroundTheme === 'dark'
                ? darkTheme.background
                : ''
            }}
          >
            <RiMoreLine className='w-5 h-5' />
          </button>
        </div>
      </div>
      {moment_state.cover_image === '' ? (
        <Image
          src='/assets/moments-cover-empty.png'
          width={582}
          height={327}
          alt={moment_state.title}
        />
      ) : (
        <Image
          src={moment_state.cover_image}
          width={582}
          height={327}
          alt={moment_state.title}
        />
      )}
      <div className={`w-full flex flex-col py-3 px-3 border-b ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
        {moment_state.title !== '' && (
          <>
            <div className='flex items-center mb-1'>
              {moment_state.user_icon !== '' ? (
                <Image
                  src={moment_state.user_icon}
                  alt={moment_state.username}
                  width={10}
                  height={10}
                  className='rounded-full'
                />
              ) : (
                <div className={`w-[20px] h-[20px] rounded-full flex items-center justify-center text-slate-500 bg-slate-300`}>
                  <RiUser3Fill className='w-3 h-3' />
                </div>
              )}
              <span className='font-semibold mx-2' style={{ fontSize: `${baseSize}px` }}>
                {moment_state.nickname}
              </span>
              <span className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${baseSize}px` }}>
                @{moment_state.username}
              </span>
            </div>
            <span className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${baseSize}px` }}>
              {moment_state.date}
            </span>
            <h1 className='font-bold mb-2' style={{ fontSize: `${xlSize}px` }}>
              {moment_state.title}
            </h1>
            <p style={{ fontSize: `${baseSize}px` }}>
              {moment_state.description}
            </p>
          </>
        )}
      </div>
      <div className='w-full py-5 px-5 font-bold text-3xl'>
        End of Moment
      </div>
      {morePopup && (
        <div className='fixed top-0 left-0 w-full h-full z-20' onClick={handleMorePopup}>
          <MomentMorePopup
            handleDeleteModal={handleDeleteModal}
            id={moment_state.id}
          />
        </div>
      )}
      <DeleteModal
        isActive={deleteModal}
        setIsActive={setDeleteModal}
        id={moment_state.id}
      />
    </section>
  )
}

export default PreviewMoment
