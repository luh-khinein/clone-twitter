import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useCallback, useContext, useState } from 'react'
import Image from 'next/image'
import { BsArrowLeft } from 'react-icons/bs'
import Layout from '../../../components/layouts/layout'
import { FontSizeContext } from '../../../utils/font-size'
import { ThemeContext } from '../../../utils/theme'
import { IoIosMore } from 'react-icons/io'
import { TbUpload } from 'react-icons/tb'
import { RiUser3Fill } from 'react-icons/ri'
import ListMorePopup from '../../../components/list/more-popup'
import ListUpPopup from '../../../components/list/up-popup'
import ComposeDirectMessage from '../../messages/compose-direct-message'
import Report from '../safety/report_story_start'

const List: NextPage = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { smSize, baseSize, xlSize } = useContext(FontSizeContext)
  const [morePopup, setMorePopup] = useState(false)
  const handleMorePopup = useCallback(() => {
    setMorePopup(!morePopup)
  }, [morePopup])
  const [upPopup, setUpPopup] = useState(false)
  const handleUpPopup = useCallback(() => {
    setUpPopup(!upPopup)
  }, [upPopup])
  const router = useRouter()
  // Get this late
  const list_id = {
    id: 1,
    listName: 'listName',
    members: 0,
    followers: 0,
    creator_user: 'username',
    creator_nick: 'nickname'
  }
  return (
    <Layout searchBar={true} hCard={true} fCard={true} stickyPosition={450}>
      <section className={`w-timeline h-full flex flex-col items-start justify-start border-x ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
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
                  {list_id.listName}
                </h1>
                <span className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{
                  fontSize: `${smSize}px`
                }}>
                  @{list_id.creator_user}
                </span>
              </div>
            </div>
            <div className='flex items-center'>
              <button
                onClick={handleUpPopup}
                className={`rounded-full p-2 items-center justify-center ${backgroundTheme === 'light' ? 'hover:brightness-75' : 'hover:brightness-125'} duration-200`}
                style={{
                  background: backgroundTheme === 'light'
                    ? 'rgba(255, 255, 255, 0.3)'
                    : backgroundTheme === 'dark'
                      ? 'rgba(21, 32, 43, 0.3)'
                      : 'rgba(0, 0, 0, 0.3)'
                }}>
                <TbUpload className='w-5 h-5' />
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
        <div className={`w-full flex flex-col py-2 mt-14 border-b ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
          <Image
            src='/assets/list-wallpaper-empty-1.png'
            width={598}
            height={199}
            alt={list_id.listName}
          />
          <div className='flex w-full flex-col items-center justify-center'>
            <h1 className='font-bold my-1' style={{ fontSize: `${xlSize}px` }}>
              {list_id.listName}
            </h1>
            <div className='flex items-center my-1 cursor-pointer' style={{ fontSize: `${baseSize}px` }}>
              <div className='mr-2 rounded-full flex items-center justify-center text-slate-500 bg-slate-300'>
                <RiUser3Fill className='w-3 h-3 m-1.5' />
              </div>
              <span className='font-semibold hover:underline mr-2'>
                {list_id.creator_nick}
              </span>
              <span className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`}>
                {list_id.creator_user}
              </span>
            </div>
            <div className='flex items-center my-1' style={{ fontSize: `${baseSize}px` }}>
              <div className='flex items-center mr-3 cursor-pointer hover:underline'>
                <span className='font-semibold mr-1'>
                  {list_id.members}
                </span>
                <span className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`}>
                  Members
                </span>
              </div>
              <div className='flex items-center cursor-pointer hover:underline'>
                <span className='font-semibold mr-1'>
                  {list_id.followers}
                </span>
                <span className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`}>
                  Followers
                </span>
              </div>
            </div>
            <button
              className={`my-2 px-5 py-1.5 rounded-full font-semibold flex items-center justify-center duration-200 ${backgroundTheme === 'light' ? 'hover:brightness-95' : 'hover:brightness-110'}`}
              style={{
                background: backgroundTheme === 'light'
                  ? '#000'
                  : '#fff',
                color: backgroundTheme === 'light'
                  ? '#fff'
                  : '#000'
              }}
            >
              Follow
            </button>
          </div>
        </div>
        <div className='w-full flex items-center justify-center mt-10 font-bold'>
          O_o
        </div>
      </section>
      {morePopup && (
        <div className='fixed top-0 left-0 w-full h-full z-20' onClick={handleMorePopup}>
          <ListMorePopup username={list_id.creator_user} id={list_id.id} />
        </div>
      )}
      {upPopup && (
        <div className='fixed top-0 left-0 w-full h-full z-20' onClick={handleUpPopup}>
          <ListUpPopup />
        </div>
      )}
      <ComposeDirectMessage message={`http://localhost:3000/i/events/${list_id.id}`} />
      <Report />
    </Layout>
  )
}

export default List
