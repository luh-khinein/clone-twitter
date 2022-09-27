// This is a Modal page
import { useRouter } from 'next/router'
import React, { Dispatch, SetStateAction, useCallback, useContext, useEffect, useState } from 'react'
import { FiCamera } from 'react-icons/fi'
import { IoClose } from 'react-icons/io5'
import Modal from 'react-modal'
import Checkbox from '../../../components/settings/checkbox'
import InputSettings from '../../../components/settings/input-settings'
import { darkTheme, lightTheme } from '../../../libs/colors'
import { FontSizeContext } from '../../../utils/font-size'
import { ThemeContext } from '../../../utils/theme'
import t from '../../../styles/textarea.module.css'

Modal.setAppElement('#__next')

interface Props {
  isActive: boolean
  setIsActive: Dispatch<SetStateAction<boolean>>
}

const CreateList: React.FC<Props> = ({ isActive, setIsActive }) => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const { smSize, xlSize } = useContext(FontSizeContext)
  const [input, setInput] = useState({
    name: '',
    description: ''
  })
  const handleInput = useCallback((e: any) => {
    e.persist()
    setInput(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
  }, [])
  const [checkbox, setCheckbox] = useState(false)
  const handleCheckbox = useCallback(() => {
    setCheckbox(!checkbox)
  }, [checkbox])
  const router = useRouter()

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--color-theme', colorTheme
    )
  }, [colorTheme])

  return (
    <Modal
      isOpen={isActive}
      onRequestClose={() => {
        setIsActive(false)
        router.back()
      }}
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
      <div className='w-timeline h-[650px] flex flex-col items-start justify-start pt-2 px-1'>
        <div className='px-2 flex items-center mb-5 w-full justify-between'>
          <div className='flex items-center'>
            <button
              onClick={() => {
                setIsActive(false)
                router.back()
              }}
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
              Create a new list
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
            Next
          </button>
        </div>
        <div className='mb-5 flex w-full h-44 items-center justify-center bg-[rgba(0,0,0,.3)]'>
          <button
            className='bg-[rgba(15,20,25,.75)] rounded-full p-2 duration-200 hover:bg-[rgba(39,44,48,.75)]'
          >
            <FiCamera className='w-5 h-5 text-white' />
          </button>
        </div>
        <form className='px-3 w-full relative'>
          <InputSettings
            id='name'
            type='text'
            placeholder='Name'
            hasConditions={false}
            handleOnChange={handleInput}
            value={input.name}
          />
          <div className='relative w-full mb-20'>
            <textarea
              id='description'
              className={t.form_area}
              onChange={handleInput}
              value={input.description}
              placeholder=' '
            ></textarea>
            <label className={`${t.form_label}`}>
              Description
            </label>
          </div>
        </form>
        <Checkbox
          id=''
          name='Make private'
          description='When you make a list private, only you can see it.'
          hasMoreLink={false}
          isChecked={checkbox}
          handleChecked={handleCheckbox}
        />
      </div>
    </Modal>
  )
}

export default CreateList 
