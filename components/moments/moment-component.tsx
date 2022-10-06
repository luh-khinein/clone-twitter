import React, { useCallback, useContext, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'
import { colors, darkTheme } from '../../libs/colors'
import { MomentIconDisabled } from '../icons/moment-icon'
import { HiOutlinePencil } from 'react-icons/hi'
import { RiMoreLine } from 'react-icons/ri'
import MomentMorePopup from './moment-more-popup'
import DeleteModal from '../modal/moment-delete-confirmation'

const MomentComponent: React.FC = () => {
  const { backgroundTheme, colorTheme, hoverColorTheme } = useContext(ThemeContext)
  const { smSize, baseSize, xlSize } = useContext(FontSizeContext)
  const [morePopup, setMorePopup] = useState(false)
  const handleMorePopup = useCallback(() => {
    setMorePopup(!morePopup)
  }, [morePopup])
  const [deleteModal, setDeleteModal] = useState(false)
  const handleDeleteModal = useCallback(() => {
    setDeleteModal(true)
  }, [])
  const [hover, setHover] = useState({
    edit: false,
    more: false
  })
  const handleHover = useCallback((e: any) => {
    e.persist()
    if (e.target.id === 'edit') {
      setHover(prev => ({
        ...prev,
        edit: !hover.edit
      }))
    } else {
      setHover(prev => ({
        ...prev,
        more: !hover.more
      }))
    }
  }, [hover])
  // get this later
  const moment_state = {
    id: 1,
    title: '',
    description: '',
    image: '',
    date: '',
    isPublic: false
  }
  return (
    <div className='flex w-full items-end justify-end'>
      <Link href={`/i/moment_maker/preview/${moment_state.id}`}>
        <a className={`flex w-full justify-between px-3 py-2 pb-12 duration-200 ${backgroundTheme === 'light' ? 'hover:bg-gray-50' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:brightness-110'}`} style={{
          background: backgroundTheme === 'dark'
            ? darkTheme.background
            : ''
        }}>
          <div className='flex flex-col'>
            <div className='flex flex-col leading-7'>
              <h1 className='font-bold' style={{ fontSize: `${xlSize}px` }}>
                {moment_state.title !== '' ? (<>{moment_state.title}</>) : (<>Untitled</>)}
              </h1>
              <span className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${smSize}px` }}>
                {moment_state.description}
              </span>
            </div>
            <div className='flex flex-col leading-6'>
              {moment_state.isPublic ? (
                <span style={{ fontSize: `${baseSize}px`, color: colorTheme }}>
                  Public
                </span>
              ) : (
                <span style={{ fontSize: `${baseSize}px`, color: colors.pink }}>
                  Private
                </span>
              )}
              <span className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${smSize}px` }}>
                {moment_state.date}
              </span>
            </div>
          </div>
          {moment_state.image === '' ? (
            <div className={`p-5 flex items-center justify-center border rounded-xl ${backgroundTheme === 'light' ? 'border-gray-100 fill-slate-400' : backgroundTheme === 'black' ? 'border-zinc-800 fill-zinc-400 bg-zinc-800' : 'border-slate-800 fill-slate-400 brightness-110'}`} style={{
              background: backgroundTheme === 'dark'
                ? darkTheme.background
                : ''
            }}>
              <MomentIconDisabled width={27} height={27} />
            </div>
          ) : (
            <Image
              src={moment_state.image}
              alt={moment_state.title}
            />
          )}
        </a>
      </Link>
      <Link href={`/i/moment_maker/edit/${moment_state.id}`}>
        <a
          id='edit'
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
          className={`p-2 -translate-x-12 absolute rounded-full flex items-center justify-center transition-all ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`}
          style={{
            background: hover.edit ? hoverColorTheme : '',
          }}
        >
          <HiOutlinePencil className='w-4 h-4' />
        </a>
      </Link>
      <button
        id='more'
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        onClick={handleMorePopup}
        className={`p-2 -translate-x-4 absolute rounded-full flex items-center justify-center transition-all ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`}
        style={{
          background: hover.more ? hoverColorTheme : '',
        }}
      >
        <RiMoreLine className='w-4 h-4' />
      </button>
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
    </div>
  )
}

export default MomentComponent
