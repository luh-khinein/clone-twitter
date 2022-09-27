import React, { Dispatch, SetStateAction, useContext } from 'react'
import Modal from 'react-modal'
import { darkTheme, lightTheme } from '../../libs/colors'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'

Modal.setAppElement('#__next')

interface Props {
  username: string
  isActive: boolean
  setIsActive: Dispatch<SetStateAction<boolean>>
}

const BlockModal: React.FC<Props> = ({ username, isActive, setIsActive }) => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { baseSize, xlSize } = useContext(FontSizeContext)
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
      <div className='w-max max-w-[300px] h-max flex flex-col items-start justify-start p-6'>
        <h1 className='font-bold' style={{ fontSize: `${xlSize}px` }}>
          Block @{username}?
        </h1>
        <p className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${baseSize}px` }}>
          They will not be able to follow you or
          view your Tweets, and you will not see
          Tweets or notifications from @{username}.
        </p>
        <button className='my-2 w-full py-2 flex items-center justify-center rounded-full bg-red-600 text-white duration-200 hover:brightness-95'>
          Block
        </button>
        <button
          onClick={() => setIsActive(false)}
          className={`w-full py-2 flex items-center justify-center rounded-full border duration-200 ${backgroundTheme === 'light' ? 'border-gray-100 hover:bg-gray-50' : backgroundTheme === 'black' ? 'border-zinc-800 hover:bg-zinc-800' : 'border-slate-800 hover:brightness-110'}`}
          style={{
            background: backgroundTheme === 'dark'
              ? darkTheme.background
              : ''
          }}
        >
          Cancel
        </button>
      </div>
    </Modal>
  )
}

export default BlockModal 
