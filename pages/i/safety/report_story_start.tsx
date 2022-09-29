// This is a modal page
import React, { Dispatch, SetStateAction, useContext } from 'react'
import { IoClose } from 'react-icons/io5'
import Modal from 'react-modal'
import { ThemeContext } from '../../../utils/theme'
import { FontSizeContext } from '../../../utils/font-size'
import { darkTheme, lightTheme } from '../../../libs/colors'
import { BsTwitter } from 'react-icons/bs'

Modal.setAppElement('#__next')

interface Props {
  isActive: boolean
  setIsActive: Dispatch<SetStateAction<boolean>>
}

const Report: React.FC<Props> = ({ isActive, setIsActive }) => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { smSize, baseSize, xlSize } = useContext(FontSizeContext)
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
      <div className='pb-16 w-timeline h-max flex flex-col items-start justify-start'>
        <div className='px-3 flex items-center mb-3 py-2'>
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
        </div>
        <div className='flex w-full items-center justify-center my-5'>
          <BsTwitter className='w-12 h-12' />
        </div>
        <div className='w-full flex flex-col px-28'>
          <h1 className='font-bold mb-1' style={{ fontSize: `${xlSize}px` }}>
            Hello
          </h1>
          <p className={`mb-4 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${smSize}px` }}>
            We need you to answer a few questions so we can better understand
            what&apos;s going on in this List. You&apos;ll also have the
            option to add more info in your own words and add Tweets
            to this report.
          </p>
          <p className={`mb-4 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${smSize}px` }}>
            We take reports seriously. If we find a rule violation, we&apos;ll either ask them to remove the content or lock or suspend the account
          </p>
          <p className={`mb-1 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${smSize}px` }}>
            If there&apos immediate danger, call your local emergency
            services in addtion to reporting.
          </p>
          <button
            className={`my-5 w-full flex items-center justify-center py-3 rounded-full duration-200 ${backgroundTheme === 'light' ? 'hover:brightness-110' : 'hover:brightness-95'}`}
            style={{
              fontSize: `${baseSize}px`,
              background: backgroundTheme === 'light'
                ? '#000'
                : '#fff',
              color: backgroundTheme === 'light'
                ? '#fff'
                : '#000'
            }}
          >
            Start report
          </button>
        </div>
      </div>
    </Modal>
  )
}

export default Report 
