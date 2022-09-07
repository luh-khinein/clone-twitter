import React, { useContext } from 'react'
import Image from 'next/image'
import { ThemeContext } from '../../utils/theme'
import { darkTheme, lightTheme } from '../../libs/colors'
import { RiUser3Fill } from 'react-icons/ri'
import { FontSizeContext } from '../../utils/font-size'

const ProfileHeader: React.FC = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { smSize, baseSize, xlSize } = useContext(FontSizeContext)
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
    <div className='w-full flex flex-col mt-16' style={{
      color: backgroundTheme === 'light'
        ? lightTheme.text
        : darkTheme.text
    }}>
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
            <button className={`py-2 px-4 rounded-full flex items-center justify-center border ${backgroundTheme === 'light' ? 'border-gray-100 hover:brightness-95' : backgroundTheme === 'black' ? 'border-zinc-800 hover:bg-zinc-800' : 'border-stale-800 hover:brightness-110'} duration-200`} style={{
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
      <div className='flex flex-col px-3 py-2'>
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
      <div className='flex items-center px-3 py-2' style={{
        fontSize: `${smSize}px`
      }}>
        <span className='mr-4'>
          <strong>{following}</strong> Following
        </span>
        <span>
          <strong>{follower}</strong> Follower
        </span>
      </div>
    </div>
  )
}

export default ProfileHeader
