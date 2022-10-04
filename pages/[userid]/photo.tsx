// This is a modal page 
import React, { Dispatch, SetStateAction, useContext } from 'react'
import Image from 'next/image'
import Modal from 'react-modal'
import { IoClose } from 'react-icons/io5'
import { darkTheme, lightTheme } from '../../libs/colors'
import { ThemeContext } from '../../utils/theme'

Modal.setAppElement("#__next")

interface Props {
  image: string
  isActive: boolean
  setIsActive: Dispatch<SetStateAction<boolean>>
}

const Photo: React.FC<Props> = ({ image, isActive, setIsActive }) => {
  const { backgroundTheme } = useContext(ThemeContext)
  return (
    <Modal
      isOpen={isActive}
      onRequestClose={() => setIsActive(false)}
      className='border-none rounded-full max-w-max max-h-max'
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
        }
      }}
    >
      <div className='w-max h-max flex flex-col'>
        <button
          onClick={() => setIsActive(false)}
          className={`p-2 rounded-full absolute top-2 left-2 ${backgroundTheme === 'light' ? 'hover:bg-[rgba(0,0,0,0.3)]' : 'hover:bg-[rgba(255,255,255,0.2)]'} duration-200`}
          style={{
            color: backgroundTheme === 'light'
              ? lightTheme.icon
              : darkTheme.icon
          }}
        >
          <IoClose className='w-6 h-6' />
        </button>
        <Image
          src={image}
          alt='user'
          className='rounded-full'
          width={368}
          height={368}
        />
      </div>
    </Modal>
  )
}

export default Photo 
