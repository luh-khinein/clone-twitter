// This is a Modal page
import React, { Dispatch, SetStateAction, useCallback, useContext, useState } from 'react'
import { IoClose } from 'react-icons/io5'
import Modal from 'react-modal'
import ConvertToProfessionalModal from '../../components/modal/contert-to-professional'
import EditBirthModal from '../../components/modal/edit-birth-confirmation'
import EditBirth from '../../components/profile/edit-birth'
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
  day: number
  month: string
  year: number
}

const EditProfile: React.FC<Props> = ({
  isActive,
  setIsActive,
  wallpaper,
  user_image,
  username,
  nickname,
  day,
  month,
  year,
}) => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const { smSize, baseSize, xlSize } = useContext(FontSizeContext)
  const [editBirth, setEditBirth] = useState(false)
  const [professionalModal, setProfessionalModal] = useState(false)
  const handleProfessionalModal = useCallback(() => {
    setProfessionalModal(true)
  }, [])
  const [editBirthModal, setEditBirthModal] = useState(false)
  const handleEditBirthModal = useCallback(() => {
    setEditBirthModal(true)
  }, [])
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
      <div className='w-timeline h-[650px] flex flex-col items-start justify-start pb-10 overflow-y-scroll'>
        <div className='w-[598px] z-30 backdrop-blur-sm rounded-t-xl min-w-min flex items-center justify-between py-2 px-5 fixed' style={{
          background: backgroundTheme === 'light'
            ? 'rgba(255, 255, 255, 0.85)'
            : backgroundTheme === 'dark'
              ? 'rgba(21, 32, 43, 0.85)'
              : 'rgba(0, 0, 0, 0.85)'
        }}>
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
              Edit profile
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
        <div className='flex flex-col w-full pt-14'>
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
          {editBirth ? (
            <EditBirth
              day={day}
              month={month}
              year={year}
              handlePermition={() => setEditBirth(false)}
            />
          ) : (
            <div className='flex flex-col px-3 my-4'>
              <span className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${baseSize}px` }}>
                Birth date ·
                <button
                  onClick={handleEditBirthModal}
                  style={{ color: colorTheme }}
                >
                  &nbsp;Edit
                </button>
              </span>
              <span style={{ fontSize: `${xlSize}px` }}>
                {month} {day}, {year}
              </span>
            </div>
          )}
          <SettingsButton
            name='Switch to professional'
            definition=''
            onClick={handleProfessionalModal}
            link={`/${username}`}
            hasIcon={false}
          />
        </div>
      </div>
      <EditBirthModal
        isActive={editBirthModal}
        setIsActive={setEditBirthModal}
        handlePermition={() => setEditBirth(true)}
      />
      <ConvertToProfessionalModal
        isActive={professionalModal}
        setIsActive={setProfessionalModal}
      />
    </Modal>
  )
}

export default EditProfile 
