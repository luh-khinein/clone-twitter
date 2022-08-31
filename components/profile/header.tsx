import React, { useContext } from 'react'
import Image from 'next/image'
import { ThemeContext } from '../../utils/theme'
import { darkTheme, lightTheme } from '../../libs/colors'
import { RiUser3Fill } from 'react-icons/ri'

const ProfileHeader: React.FC = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  // ******** fix it later ******** //
  const wallpaper = ''
  const user_image = ''
  const nickname = 'NickName'
  const username = 'Username'
  const bio = 'I will destroy ever'
  const following = '123'
  const follower = '456'
  // ******** fix it later ******** //

  return (
    <div className='w-full flex flex-col mt-16'>
      <div className='w-full flex flex-col'>
        <div className='flex max-w-[598px] max-h-[200px] absolute'>
          {wallpaper !== ''
            ? (
              <Image
                src={wallpaper}
                alt='wallpaper'
                width={600}
                height={200}
              />
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
                <Image
                  src={user_image}
                  alt='user image'
                  width={133}
                  height={133}
                />
              )
              : (
                <div className={`w-[133px] h-[133px] rounded-full flex items-center justify-center text-slate-500 bg-slate-300`}>
                  <RiUser3Fill className='w-24 h-24' />
                </div>
              )}
          </div>
          <div className='mt-20'>
            <button className={`py-2 px-4 rounded-full flex items-center justify-center border ${backgroundTheme === 'light' ? 'border-gray-100 hover:brightness-95' : 'border-gray-700 hover:brightness-110'} duration-200`} style={{
              background: backgroundTheme === 'light'
                ? lightTheme.background
                : backgroundTheme === 'dark'
                  ? darkTheme.background
                  : '#000'
            }}>
              Edit profile
            </button>
          </div>
        </div>
      </div>
      <div className='flex flex-col px-3 py-2'>
        <h2 className='text-xl font-bold'>
          {nickname}
        </h2>
        <span className='text-sm text-slate-400 mb-4'>
          @ {username}
        </span>
        <span className='text-sm'>
          {bio}
        </span>
      </div>
      <div className='flex items-center px-3 py-2'>
        <span className='text-sm mr-4'>
          <strong>{following}</strong> Following
        </span>
        <span className='text-sm'>
          <strong>{follower}</strong> Follower
        </span>
      </div>
    </div >
  )
}

export default ProfileHeader
