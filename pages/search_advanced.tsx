import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import { IoClose } from 'react-icons/io5'
import Modal from 'react-modal'
import AccountsSettings from '../components/search/accounts-settings'
import DatesSettings from '../components/search/date-settings'
import EngagementSettings from '../components/search/engagement-settings'
import FiltersSettings from '../components/search/filters-settings'
import WordsSettings from '../components/search/words-settings'
import { darkTheme, lightTheme } from '../libs/colors'
import { FontSizeContext } from '../utils/font-size'
import { ThemeContext } from '../utils/theme'

Modal.setAppElement('#__next')

const SearchAdvanced: React.FC = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { xlSize } = useContext(FontSizeContext)
  const router = useRouter()
  return (
    <Modal
      isOpen={!!router.query.search_advanced}
      onRequestClose={() => router.back()}
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
      <div className='w-timeline max-h-[650px] flex flex-col items-start justify-start overflow-scroll'>
        <div className='w-full max-w-[600px] px-3 py-2 flex items-center mb-3 z-10 backdrop-blur-sm fixed rounded-t-xl' style={{
          background: backgroundTheme === 'light'
            ? 'rgba(255, 255, 255, 0.85)'
            : backgroundTheme === 'dark'
              ? 'rgba(21, 32, 43, 0.85)'
              : 'rgba(0, 0, 0, 0.85)'
        }}>
          <button
            onClick={() => router.back()}
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
          <h1 className='font-semibold' style={{ fontSize: `${xlSize}px` }}>
            Advanced search
          </h1>
        </div>
        <div className='flex flex-col w-full pt-14'>
          <WordsSettings />
          <AccountsSettings />
          <FiltersSettings />
          <EngagementSettings />
          <DatesSettings />
        </div>
      </div>
    </Modal>
  )
}

export default SearchAdvanced
