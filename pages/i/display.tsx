// This is a Modal page
import React, { Dispatch, SetStateAction, useContext } from 'react'
import Modal from 'react-modal'
import BackgroundBox from '../../components/display/background-box'
import ColorBox from '../../components/display/color-box'
import FontSizeBox from '../../components/display/font-size-box'
import TweetBox from '../../components/display/tweet-box'
import { darkTheme, lightTheme } from '../../libs/colors'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'

Modal.setAppElement('#__next')

interface Props {
  isActive: boolean
  setIsActive: Dispatch<SetStateAction<{
    news: boolean
    professional: boolean
    display: boolean
    keyboard: boolean
  }>>
}

const Display: React.FC<Props> = ({ isActive, setIsActive }) => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const { baseSize } = useContext(FontSizeContext)
  return (
    <Modal
      isOpen={isActive}
      onRequestClose={() => setIsActive(prev => ({ ...prev, display: false }))}
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
      <div className='px-10 py-7 flex flex-col items-center justify-center w-timeline'>
        <div className='flex flex-col justify-center items-center mb-3'>
          <span className='font-bold text-2xl tracking-tight mb-3'>
            Customize your view
          </span>
          <span className='text-center leading-5'>
            Manage your font size, color, and background. These settings affect all the
            Twitter accounts on this browser.
          </span>
        </div>
        <TweetBox />
        <FontSizeBox />
        <ColorBox />
        <BackgroundBox />
        <button
          onClick={() => setIsActive(prev => ({ ...prev, display: false }))}
          className='flex items-center justify-center py-2 px-4 rounded-full font-bold text-white hover:brightness-95 transition-colors mt-5'
          style={{
            fontSize: `${baseSize}px`,
            background: colorTheme
          }}
        >
          Done
        </button>
      </div>
    </Modal>
  )
}

export default Display
