// This is a Modal page
import React, { Dispatch, SetStateAction, useCallback, useContext, useEffect, useState } from 'react'
import { IoClose } from 'react-icons/io5'
import { RiSearch2Line } from 'react-icons/ri'
import Modal from 'react-modal'
import { darkTheme, lightTheme } from '../../libs/colors'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'
import s from '../../styles/connect-focus.module.css'
import { FiSend } from 'react-icons/fi'

Modal.setAppElement('#__next')

interface Props {
  isActive: boolean
  setIsActive: Dispatch<SetStateAction<boolean>>
  message?: string
}

const ComposeDirectMessage: React.FC<Props> = ({ isActive, setIsActive, message }) => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const { smSize, xlSize } = useContext(FontSizeContext)
  const [messageValue, setMessageValue] = useState(message ? message : '')
  const handleMessageValue = useCallback((e: any) => {
    e.persist()
    setMessageValue(e.target.value)
  }, [setMessageValue])

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--color-theme', colorTheme
    )
  }, [colorTheme])

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
      <div className='w-timeline h-[650px] flex flex-col items-start justify-start pt-2'>
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
            Send via Direct Message
          </h1>
        </div>
        <div className={`flex items-center px-6 py-5 w-full border-b ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
          <input
            type='text'
            placeholder='Search people'
            className={`${s.container} outline-none w-full ml-6 px-1 placeholder:${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`}
            style={{ fontSize: `${smSize}px` }}
          />
          <label className={s.form_icon}>
            <RiSearch2Line />
          </label>
        </div>
        <div className='flex w-full h-full'>
          O_o
        </div>
        <div className={`w-full flex items-center py-1 px-2 border-t ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
          <input
            disabled={true}
            type='text'
            className={`w-full disabled:bg-transparent px-3 py-2 flex items-center justify-center rounded-full outline-none border ${backgroundTheme === 'black' ? 'disabled:text-zinc-400' : 'disabled:text-slate-400'} ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}
            onChange={handleMessageValue}
            value={messageValue}
          />
          <FiSend className='w-5 h-5 opacity-50 mx-3' style={{
            color: colorTheme,
            transform: 'rotate(45deg)'
          }} />
        </div>
      </div>
    </Modal>
  )
}

export default ComposeDirectMessage 
