import React, { Dispatch, SetStateAction, useCallback, useContext, useState } from 'react'
import { IoClose } from 'react-icons/io5'
import Modal from 'react-modal'
import { darkTheme, lightTheme } from '../../libs/colors'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'
import { FromMoment, FromTweetURL } from '../moments/select-moment-cover'

Modal.setAppElement('#__next')

interface Props {
  isActive: boolean
  setIsActive: Dispatch<SetStateAction<boolean>>
}

const CoverChoiceModal: React.FC<Props> = ({ isActive, setIsActive }) => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { smSize, xlSize } = useContext(FontSizeContext)
  const [selectState, setSelectState] = useState(false)
  const handleSelectState = useCallback(() => {
    setSelectState(!selectState)
  }, [selectState])
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
      <div className='w-timeline pb-5 flex flex-col items-start justify-start pt-2 px-1'>
        <div className='px-2 flex items-center mb-5 w-full justify-between'>
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
              Choose a cover
            </h1>
          </div>
          <div className='flex items-center'>
            <button
              onClick={handleSelectState}
              className={`px-3 py-1.5 flex items-center justify-center rounded-full duration-200 border ${backgroundTheme === 'light' ? 'border-gray-100 hover:bg-gray-50' : backgroundTheme === 'black' ? 'border-zinc-800 hover:bg-zinc-800' : 'border-slate-800 hover:brightness-110'}`}
              style={{
                fontSize: `${smSize}px`,
                background: backgroundTheme === 'dark'
                  ? darkTheme.background
                  : ''
              }}
            >
              {!selectState ? (<>Add from Tweet URL</>) : (<>Add Tweet from Moment</>)}
            </button>
            <button
              disabled={true}
              className={`disabled:opacity-70 ml-2 px-5 py-2 font-bold tracking-wider flex items-center justify-center rounded-full duration-200 ${backgroundTheme === 'light' ? 'hover:brightness-125' : 'hover:brightness-95'}`}
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
              Next
            </button>
          </div>
        </div>
        {!selectState ? (
          <FromMoment />
        ) : (
          <FromTweetURL />
        )}
      </div>
    </Modal>
  )
}

export default CoverChoiceModal 
