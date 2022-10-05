import React, { Dispatch, SetStateAction, useCallback, useContext, useEffect, useState } from 'react'
import { IoClose } from 'react-icons/io5'
import Modal from 'react-modal'
import { darkTheme, lightTheme } from '../../libs/colors'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'
import t from '../../styles/textarea.module.css'

Modal.setAppElement('#__next')

interface Props {
  isActive: boolean
  setIsActive: Dispatch<SetStateAction<boolean>>
  title: string
  description: string
}

const EditDescriptionModal: React.FC<Props> = ({ isActive, setIsActive, title, description }) => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const { smSize, xlSize } = useContext(FontSizeContext)
  const [input, setInput] = useState({
    title: title,
    description: description
  })
  const handleInput = useCallback((e: any) => {
    e.persist()
    setInput(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
  }, [])
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
      <div className='w-timeline h-[330px] pb-5 flex flex-col items-start justify-start pt-2 px-1'>
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
              Edit title and description
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
            Save
          </button>
        </div>
        <div className='relative w-full h-24'>
          <textarea
            id='title'
            className={`${t.form_area}`}
            onChange={handleInput}
            value={input.description}
            placeholder=' '
          ></textarea>
          <label className={`${t.form_label}`}>
            Title
          </label>
        </div>
        <div className='relative w-full'>
          <textarea
            id='description'
            className={t.form_area}
            style={{ height: '150px' }}
            onChange={handleInput}
            value={input.description}
            placeholder=' '
          ></textarea>
          <label className={`${t.form_label}`}>
            Description
          </label>
        </div>
      </div>
    </Modal>
  )
}

export default EditDescriptionModal 
