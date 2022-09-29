// This is a Modal page
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import Modal from 'react-modal'
import { darkTheme, lightTheme } from '../../../libs/colors'
import { ThemeContext } from '../../../utils/theme'
import { BsTwitter } from 'react-icons/bs'
import { FontSizeContext } from '../../../utils/font-size'
import LanguageSelectorList from '../../../components/settings/language-selector-list'

Modal.setAppElement('#__next')

const LanguageSelector: React.FC = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { baseSize } = useContext(FontSizeContext)
  const router = useRouter()
  return (
    <Modal
      isOpen={router.asPath === '/i/flow/language_selector'}
      className='border-none rounded-xl w-min max-h-max'
      overlayElement={(props, contentElement) => (
        <div {...props} className='flex flex-col items-center pt-16'>
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
      <div className='w-timeline h-[600px] flex flex-col items-center justify-between'>
        <div className='flex w-full items-center p-2'>
          <div className='w-full justify-center flex' style={{
            color: backgroundTheme === 'light'
              ? lightTheme.text
              : darkTheme.text
          }}>
            <BsTwitter className='w-9 h-9' />
          </div>
        </div>
        <div className='flex flex-col items-start py-2 px-24 h-full'>
          <span className='font-bold text-3xl tracking-tight'>
            Which languages do you speak?
          </span>
          <span className={`tracking-tight py-1 leading-5 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{
            fontSize: `${baseSize}px`
          }}>
            You&apos;ll be able to see Tweets, people, and trends in any languages you choose.
          </span>
          <LanguageSelectorList />
        </div>
        <div className='w-full flex px-28 py-3'>
          <button
            onClick={() => router.back()}
            className={`w-full py-5 rounded-full mt-10 mb-1 ${backgroundTheme === 'light' ? 'hover:brightness-110' : 'hover:brightness-95'}`}
            style={{
              color: backgroundTheme === 'light'
                ? '#fff'
                : '#000',
              background: backgroundTheme === 'light'
                ? '#000'
                : '#fff',
              fontSize: `${baseSize}px`
            }}>
            Done
          </button>
        </div>
      </div>
    </Modal >
  )
}

export default LanguageSelector
