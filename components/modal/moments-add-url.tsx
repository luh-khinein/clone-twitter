import React, { Dispatch, SetStateAction, useCallback, useContext, useState } from 'react'
import { IoClose } from 'react-icons/io5'
import Modal from 'react-modal'
import { darkTheme, lightTheme } from '../../libs/colors'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'
import InputSettings from '../settings/input-settings'

Modal.setAppElement('#__next')

interface Props {
  isActive: boolean
  setIsActive: Dispatch<SetStateAction<boolean>>
}

const AddURLModal: React.FC<Props> = ({ isActive, setIsActive }) => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { smSize, xlSize } = useContext(FontSizeContext)
  const [input, setInput] = useState('')
  const handleInput = useCallback((e: any) => {
    e.persist()
    setInput(e.target.value)
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
              Add Tweet URL
            </h1>
          </div>
          <button
            disabled={true}
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
            Add
          </button>
        </div>
        <InputSettings
          id=''
          type='text'
          placeholder='Paste Tweet URL'
          hasConditions={false}
          handleOnChange={handleInput}
          value={input}
        />
      </div>
    </Modal>
  )
}

export default AddURLModal 
