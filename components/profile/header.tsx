import React, { useCallback, useContext, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ThemeContext } from '../../utils/theme'
import { darkTheme, lightTheme } from '../../libs/colors'
import { RiUser3Fill } from 'react-icons/ri'
import { FontSizeContext } from '../../utils/font-size'
import EditProfile from '../../pages/settings/profile'
import { BsCalendar3 } from 'react-icons/bs'
import Photo from '../../pages/[userid]/photo'
import HeaderPhoto from '../../pages/[userid]/header_photo'

const ProfileHeader: React.FC = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { smSize, baseSize, xlSize } = useContext(FontSizeContext)
  const [editModal, setEditModal] = useState(false)
  const handleEditModal = useCallback(() => {
    setEditModal(true)
  }, [])
  const [photoModal, setPhotoModal] = useState(false)
  const handlePhotoModal = useCallback(() => {
    setPhotoModal(true)
  }, [])
  const [headerPhotoModal, setHeaderPhotoModal] = useState(false)
  const handleHeaderPhotoModal = useCallback(() => {
    setHeaderPhotoModal(true)
  }, [])
  // ******** fix it later ******** //
  const wallpaper = ''
  const user_image = ""
  const nickname = 'NickName'
  const username = 'Username'
  const dayBirth = 1
  const monthBirth = 'Month'
  const yearBirth = 2010
  const monthJoined = 'Month'
  const yearJoined = 2022
  const bio = 'I will destroy ever'
  const following = 0
  const follower = 0
  // ******** fix it later ******** //

  return (
    <div className='w-full flex flex-col mt-16' style={{
      color: backgroundTheme === 'light'
        ? lightTheme.text
        : darkTheme.text
    }}>
      <div className='w-full flex flex-col'>
        <div className='flex max-w-[598px] max-h-[200px] absolute'>
          {wallpaper !== ''
            ? (
              <button onClick={handleHeaderPhotoModal}>
                <Image
                  src={wallpaper}
                  alt='wallpaper'
                  width={600}
                  height={200}
                />
              </button>
            )
            : (
              <div className={'w-[600px] h-[200px] bg-slate-300'} />
            )}
        </div>
        <div className='flex w-full justify-between mt-32 px-3'>
          <div className={`p-1 flex rounded-full hover:brigthness-95 duration-200 z-10`} style={{
            background: backgroundTheme === 'light'
              ? lightTheme.background
              : backgroundTheme === 'dark'
                ? darkTheme.background
                : '#000'
          }}>
            {user_image !== ''
              ? (
                <button onClick={handlePhotoModal}>
                  <Image
                    src={user_image}
                    alt={username}
                    width={133}
                    height={133}
                    className='rounded-full'
                  />
                </button>
              )
              : (
                <div className={`w-[133px] h-[133px] rounded-full flex items-center justify-center text-slate-500 bg-slate-300`}>
                  <RiUser3Fill className='w-24 h-24' />
                </div>
              )}
          </div>
          <div className='mt-20'>
            <button
              onClick={handleEditModal}
              className={`py-2 px-4 rounded-full flex items-center justify-center border ${backgroundTheme === 'light' ? 'border-gray-100 hover:brightness-95' : backgroundTheme === 'black' ? 'border-zinc-800 hover:bg-zinc-800' : 'border-stale-800 hover:brightness-110'} duration-200`}
              style={{
                fontSize: `${baseSize}px`,
                background: backgroundTheme === 'light'
                  ? lightTheme.background
                  : backgroundTheme === 'dark'
                    ? darkTheme.background
                    : '',
              }}>
              Edit profile
            </button>
          </div>
        </div>
      </div>
      <div className='flex flex-col px-3 py-2 leading-5'>
        <h2 className='font-bold' style={{
          fontSize: `${xlSize}px`
        }}>
          {nickname}
        </h2>
        <span className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'} mb-4`} style={{
          fontSize: `${smSize}px`
        }}>
          @ {username}
        </span>
        <span style={{ fontSize: `${smSize}px` }}>
          {bio}
        </span>
      </div>
      <div className={`flex items-center px-3 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${smSize}px` }}>
        <BsCalendar3 className='w-4 h-4' />
        <span className='ml-2'>
          Joined {monthJoined} {yearJoined}
        </span>
      </div>
      <div className='flex items-center px-3 py-2' style={{
        fontSize: `${smSize}px`
      }}>
        <Link href={`/${username}/following`}>
          <a className='mr-4 hover:underline'>
            <strong>{following}</strong> Following
          </a>
        </Link>
        <Link href={`/${username}/followers`}>
          <a className='hover:underline'>
            <strong>{follower}</strong> Followers
          </a>
        </Link>
      </div>
      <EditProfile
        isActive={editModal}
        setIsActive={setEditModal}
        wallpaper={wallpaper}
        user_image={user_image}
        username={username}
        nickname={nickname}
        day={dayBirth}
        month={monthBirth}
        year={yearBirth}
      />
      <Photo
        image={user_image}
        isActive={photoModal}
        setIsActive={setPhotoModal}
      />
      <HeaderPhoto
        image={wallpaper}
        isActive={headerPhotoModal}
        setIsActive={setHeaderPhotoModal}
      />
    </div>
  )
}

export default ProfileHeader
