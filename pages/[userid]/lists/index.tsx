import type { NextPage } from 'next'
import React, { useContext, useState, useCallback } from 'react'
import Link from 'next/link'
import { BsArrowLeft } from 'react-icons/bs'
import { IoIosMore } from 'react-icons/io'
import Layout from '../../../components/layouts/layout'
import { darkTheme, lightTheme } from '../../../libs/colors'
import { ThemeContext } from '../../../utils/theme'
import PinnedLists from '../../../components/list/pinned-lists'
import DiscoverLists from '../../../components/list/discover-lists'
import YourList from '../../../components/list/your-list'
import { useRouter } from 'next/router'
import { FontSizeContext } from '../../../utils/font-size'
import CreateList from '../../i/lists/create'
import { AddListIcon, ListIconDisabled } from '../../../components/icons/list-icon'

const Lists: NextPage = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { smSize, baseSize, xlSize } = useContext(FontSizeContext)
  const currentColor = backgroundTheme === 'light'
    ? lightTheme.text
    : darkTheme.text
  const [morePopup, setMorePopup] = useState(false)
  const handleMorePopup = useCallback(() => {
    setMorePopup(!morePopup)
  }, [morePopup])
  const [createModal, setCreateModal] = useState(false)
  const handleCreateModal = useCallback(() => {
    setCreateModal(true)
  }, [])
  const router = useRouter()
  const username = 'username' // fix it later

  return (
    <Layout searchBar={true} hCard={true} fCard={true} stickyPosition={450}>
      <section className={`w-timeline min-h-full flex flex-col pt-8 border-l border-r ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`} style={{
        color: backgroundTheme === 'light'
          ? lightTheme.text
          : darkTheme.text
      }}>
        <div className='fixed z-10 top-0 w-[598px] flex py-3 px-3 backdrop-blur-sm' style={{
          background: backgroundTheme === 'light'
            ? 'rgba(255, 255, 255, 0.85)'
            : backgroundTheme === 'dark'
              ? 'rgba(21, 32, 43, 0.85)'
              : 'rgba(0, 0, 0, 0.85)'
        }}>
          <div className='flex justify-between w-full items-center'>
            <div className='flex items-center flex-1'>
              <button onClick={() => router.back()} className={`rounded-full p-2 mr-5 items-center justify-center ${backgroundTheme === 'light' ? 'hover:brightness-75' : 'hover:brightness-125'} duration-200`} style={{
                background: backgroundTheme === 'light'
                  ? 'rgba(255, 255, 255, 0.3)'
                  : backgroundTheme === 'dark'
                    ? 'rgba(21, 32, 43, 0.3)'
                    : 'rgba(0, 0, 0, 0.3)'
              }}>
                <BsArrowLeft className='w-5 h-5' />
              </button>
              <div className='flex flex-col ml-2 leading-5'>
                <h1 className='font-bold' style={{
                  fontSize: `${xlSize}px`
                }}>
                  Lists
                </h1>
                <span className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{
                  fontSize: `${smSize}px`
                }}>
                  @{username}
                </span>
              </div>
            </div>
            <div className='flex items-center'>
              <button
                onClick={handleCreateModal}
                className={`rounded-full p-2 items-center justify-center ${backgroundTheme === 'light' ? 'hover:brightness-75' : 'hover:brightness-125'} duration-200`} style={{
                  background: backgroundTheme === 'light'
                    ? 'rgba(255, 255, 255, 0.3)'
                    : backgroundTheme === 'dark'
                      ? 'rgba(21, 32, 43, 0.3)'
                      : 'rgba(0, 0, 0, 0.3)'
                }}>
                <AddListIcon color={currentColor} />
              </button>
              <button
                onClick={handleMorePopup}
                className={`rounded-full p-2 items-center justify-center ${backgroundTheme === 'light' ? 'hover:brightness-75' : 'hover:brightness-125'} duration-200`}
                style={{
                  background: backgroundTheme === 'light'
                    ? 'rgba(255, 255, 255, 0.3)'
                    : backgroundTheme === 'dark'
                      ? 'rgba(21, 32, 43, 0.3)'
                      : 'rgba(0, 0, 0, 0.3)'
                }}>
                <IoIosMore className='w-5 h-5' />
              </button>
            </div>
          </div>
        </div>
        <PinnedLists />
        <DiscoverLists />
        <YourList />
      </section>
      {morePopup && (
        <div className='fixed top-0 left-0 w-full h-full z-20' onClick={handleMorePopup}>
          <Link href='/username/lists/memberships'>
            <a className={`fixed z-10 left-[45%] top-3 flex items-center justify-between w-max py-3 px-5 ${backgroundTheme === 'light' ? 'drop-shadow-xl hover:brightness-95' : backgroundTheme === 'black' ? 'drop-shadow-[0_20px_13px_rgba(255,255,255,.05)] hover:bg-zinc-800' : 'drop-shadow-[0_20px_13px_rgba(255,255,255,.05)] hover:brightness-110'} duration-200`} style={{
              background: backgroundTheme === 'light'
                ? lightTheme.background
                : backgroundTheme === 'dark'
                  ? darkTheme.background
                  : '#000'
            }}>
              <div className='flex items-center'>
                <div className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`}>
                  <ListIconDisabled color={backgroundTheme === 'black' ? '#a1a1aa' : '#94a3b8'} />
                </div>
                <div className={`flex flex-col justify-start ml-5`}>
                  <span style={{ fontSize: `${baseSize}px` }}>
                    Lists you&apos;re on
                  </span>
                </div>
              </div>
            </a>
          </Link>
        </div>
      )}
      <CreateList
        isActive={createModal}
        setIsActive={setCreateModal}
      />
    </Layout >
  )
}

export default Lists
