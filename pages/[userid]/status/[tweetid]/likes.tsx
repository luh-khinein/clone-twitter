// This is a Modal page
import React, { Dispatch, SetStateAction, useContext } from 'react'
import { IoClose } from 'react-icons/io5'
import Modal from 'react-modal'
import WhoToFollowCard from '../../../../components/explorer/who-to-follow-card'
import { darkTheme, lightTheme } from '../../../../libs/colors'
import { FontSizeContext } from '../../../../utils/font-size'
import { ThemeContext } from '../../../../utils/theme'

Modal.setAppElement('#__next')

interface Props {
  isActive: boolean
  setIsActive: Dispatch<SetStateAction<boolean>>
}

const Likes: React.FC<Props> = ({ isActive, setIsActive }) => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { xlSize } = useContext(FontSizeContext)
  return (
    <Modal
      isOpen={isActive}
      onRequestClose={() => setIsActive(false)}
      className='border-none rounded-xl w-min max-h-max'
      overlayElement={(props, contentElement) => (
        <div {...props} className='flex flex-col items-center pt-12'>
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
      <div className='w-timeline h-[650px] flex flex-col items-start justify-start py-2 overflow-y-scroll'>
        <div className='px-3 flex items-center mb-3'>
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
            Liked by
          </h1>
        </div>
        <WhoToFollowCard
          image='/icons/woodpecker-icon.jpg'
          nickname='Woodpecker'
          username='TheIncredibleWoodpecker'
          description='????'
        />
      </div>
    </Modal>
  )
}

export default Likes 
