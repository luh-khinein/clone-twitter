// This is a Modal page
import { useRouter } from 'next/router'
import React, { useCallback, useContext, useState } from 'react'
import { IoClose } from 'react-icons/io5'
import Modal from 'react-modal'
import Checkbox from '../../components/settings/checkbox'
import { darkTheme, lightTheme } from '../../libs/colors'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'

Modal.setAppElement('#__next')

const Search: React.FC = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { xlSize } = useContext(FontSizeContext)
  const [checkboxState, setCheckboxState] = useState({
    hide_sensitive_content: true,
    remove_blocked_accounts: true,
  })
  const handleCheckboxState = useCallback((e: any) => {
    e.persist()
    setCheckboxState(prev => ({
      ...prev,
      [e.target.id]: [!e.target.checked]
    }))
  }, [])
  const router = useRouter()
  return (
    <Modal
      isOpen={!!router.query.search}
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
      <div className='w-timeline h-[650px] flex flex-col items-start justify-start py-2'>
        <div className='px-3 flex items-center mb-3'>
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
          <h1 className='font-bold' style={{ fontSize: `${xlSize}px` }}>
            Search settings
          </h1>
        </div>
        <Checkbox
          id='hide_sensitive_content'
          name='Hide sensitive content'
          description="This prevents Tweets with potentially sensitive content from displaying in your search results."
          hasMoreLink={true}
          moreLink='/en/demo-page'
          isChecked={checkboxState.hide_sensitive_content}
          handleChecked={handleCheckboxState}
        />
        <Checkbox
          id='remove_blocked_accounts'
          name='Remove blocked and muted accounts'
          description="Use this to eliminate search results from accounts you've blocked or muter."
          hasMoreLink={true}
          moreLink='/en/demo-page'
          isChecked={checkboxState.remove_blocked_accounts}
          handleChecked={handleCheckboxState}
        />
      </div>
    </Modal>
  )
}

export default Search 
