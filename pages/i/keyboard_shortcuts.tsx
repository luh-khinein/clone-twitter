// This is a Modal page
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import { IoClose } from 'react-icons/io5'
import Modal from 'react-modal'
import Actions from '../../components/shortcuts/actions'
import Media from '../../components/shortcuts/media'
import Navigation from '../../components/shortcuts/navigation'
import { darkTheme, lightTheme } from '../../libs/colors'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'

Modal.setAppElement("#__next")

const KeyboardShortcuts: React.FC = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { xlSize } = useContext(FontSizeContext)
  const router = useRouter()
  return (
    <Modal
      isOpen={router.asPath === '/i/keyboard_shortcuts'}
      onRequestClose={() => router.back()}
      className='border-none rounded-xl w-min max-h-max'
      overlayElement={(props, contentElement) => (
        <div {...props} className='flex flex-col items-center pt-20'>
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
      <div className='p-1 flex flex-col w-[730px]'>
        <div className='flex items-center mb-5'>
          <button
            onClick={() => router.back()}
            className={`rounded-full p-2 flex items-center justify-center mr-5 ${backgroundTheme === 'light' ? 'hover:brightness-95' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:brightness-110'}`} style={{
              background: backgroundTheme === 'light'
                ? lightTheme.background
                : backgroundTheme === 'dark'
                  ? darkTheme.background
                  : ''
            }}>
            <IoClose className='w-6 h-6' />
          </button>
          <h1 className='font-bold' style={{
            fontSize: `${xlSize}px`
          }}>
            Keyboard shortcuts
          </h1>
        </div>
        <div className='flex items-start justify-between'>
          <Navigation />
          <Actions />
          <Media />
        </div>
      </div>
    </Modal>
  )
}

export default KeyboardShortcuts
