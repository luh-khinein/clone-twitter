// This is a Modal page
import React, { Dispatch, SetStateAction, useCallback, useContext, useState } from 'react'
import { IoClose } from 'react-icons/io5'
import Modal from 'react-modal'
import Checkbox from '../../components/settings/checkbox'
import { darkTheme, lightTheme } from '../../libs/colors'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'

Modal.setAppElement('#__next')

interface Props {
  isActive: boolean
  setIsActive: Dispatch<SetStateAction<boolean>>
}

const Explore: React.FC<Props> = ({ isActive, setIsActive }) => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { xlSize } = useContext(FontSizeContext)
  const [showContent, setShowContent] = useState(true)
  const handleShowContent = useCallback(() => {
    setShowContent(!showContent)
  }, [showContent])
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
      <div className='w-timeline h-[650px] flex flex-col items-start justify-start py-2'>
        <div className='px-3 flex items-center mb-5'>
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
            Explore settings
          </h1>
        </div>
        <h2 className='px-3 mb-3 font-bold' style={{ fontSize: `${xlSize}px` }}>
          Locations
        </h2>
        <Checkbox
          id='show_content'
          name='Show content in this location'
          description="When this is on, you'll see what's happening around you right now."
          hasMoreLink={false}
          isChecked={showContent}
          handleChecked={handleShowContent}
        />
      </div>
    </Modal>
  )
}

export default Explore 
