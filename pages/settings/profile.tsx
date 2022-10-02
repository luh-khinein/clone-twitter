// This is a Modal page
import { useRouter } from 'next/router'
import React, { Dispatch, SetStateAction, useContext } from 'react'
import { IoClose } from 'react-icons/io5'
import Modal from 'react-modal'
import EditImages from '../../components/profile/edit-images'
import EditInputs from '../../components/profile/edit-inputs'
import SettingsButton from '../../components/settings/settings-button'
import { darkTheme, lightTheme } from '../../libs/colors'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'

Modal.setAppElement('#__next')

interface Props {
  isActive: boolean
  setIsActive: Dispatch<SetStateAction<boolean>>
  wallpaper: string
  user_image: string
  username: string
  nickname: string
  birthdate: string
}

const EditProfile: React.FC<Props> = ({
  isActive,
  setIsActive,
  wallpaper,
  user_image,
  username,
  nickname,
  birthdate
}) => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const { smSize, baseSize, xlSize } = useContext(FontSizeContext)
  const router = useRouter()
  return (
    <Modal
      isOpen={isActive}
      onRequestClose={() => setIsActive(false)}
      className='border-none rounded-xl w-min max-h-max'
      overlayElement={(props, contentElement) => (
        <div {...props} className='flex flex-col items-center justify-center'>
          {contentElement}
        </div>
      )}
      style={{
        overlay: {
          zIndex: 30,
          background: backgroundTheme === 'light'
            ? 'rgba(0,0,0,0.5)'
            : 'rgba(255,255,255,0.2)'
        },
        content: {
          background: backgroundTheme === 'light'
            ? lightTheme.background
            : backgroundTheme === 'dark'
              ? darkTheme.background
              : '#000',
          color: backgroundTheme === 'light'
            ? lightTheme.text
            : darkTheme.text
        }
      }}
    >
      <div className='w-timeline h-[650px] flex flex-col items-start justify-start pt-2 pb-10 overflow-y-scroll'>
        <div className='px-3 flex items-center mb-5 w-full justify-between'>
          <div className='flex items-center'>
            <button
              onClick={() => setIsActive(false)}
              className={`p-2 mr-5 flex items-center justify-center rounded-full ${backgroundTheme === 'light' ? 'hover:brightness-95' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:brighteness-110'} duration-200`}
              style={{
                background: backgroundTheme === 'light'
                  ? lightTheme.background
                  : backgroundTheme === 'dark'
                    ? darkTheme.background
                    : ''
              }}>
              <IoClose className='w-6 h-6' />
            </button>
            <h1 className='font-bold' style={{ fontSize: `${xlSize}px` }}>
              Create a new list
            </h1>
          </div>
          <button
            className={`disabled:opacity-70 px-5 py-2 font-bold tracking-wider flex items-center justify-center rounded-full duration-200 ${backgroundTheme === 'light' ? 'hover:brightness-125' : 'hover:brightness-95'}`}
            style={{
              fontSize: `${smSize}px`,
              background: backgroundTheme === 'light'
                ? '#000'
                : '#fff',
              color: backgroundTheme === 'light'
                ? '#fff'
                : '#000'
            }}
          >
            Save
          </button>
        </div>
        <EditImages
          wallpaper={wallpaper}
          user_image={user_image}
          username={username}
        />
        <EditInputs
          nickname={nickname}
          bio=''
          location=''
          website=''
        />
        <div className='flex flex-col px-3 my-4'>
          <span className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${baseSize}px` }}>
            Birth date ·
            <button style={{ color: colorTheme }}>
              Edit
            </button>
          </span>
          <span style={{ fontSize: `${xlSize}px` }}>
            {birthdate}
          </span>
        </div>
        <SettingsButton
          name='Switch to professional'
          definition=''
          link={`${router.asPath}`}
          hasIcon={false}
        />
      </div>
    </Modal>
  )
}

export default EditProfile 
