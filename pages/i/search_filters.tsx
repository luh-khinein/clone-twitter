// This is a modal page
import React, { Dispatch, SetStateAction, useCallback, useContext, useState } from 'react'
import Link from 'next/link'
import { IoClose } from 'react-icons/io5'
import Modal from 'react-modal'
import { SearchFilterLocation, SearchFilterPeople } from '../../components/sidebar/search-filters'
import { darkTheme, lightTheme } from '../../libs/colors'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'
import SearchAdvanced from '../search_advanced'
import { useRouter } from 'next/router'

Modal.setAppElement('#__next')

interface Props {
  isActive: boolean
  setIsActive: Dispatch<SetStateAction<boolean>>
}

const SearchFiltersPopup: React.FC<Props> = ({ isActive, setIsActive }) => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const { xlSize } = useContext(FontSizeContext)
  const router = useRouter()
  const [advancedState, setAdvancedState] = useState(false)
  const handleAdvancedState = useCallback(() => {
    setAdvancedState(true)
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
      <div className='w-timeline h-max flex flex-col items-start justify-start'>
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
          <h1 className='font-bold' style={{ fontSize: `${xlSize}px` }}>
            Search filters
          </h1>
        </div>
        <div className='w-full mb-3'>
          <SearchFilterPeople />
        </div>
        <div className='w-full mb-5'>
          <SearchFilterLocation />
        </div>
        <Link href={`${router.asPath}`} as='/search_advanced'>
          <a onClick={handleAdvancedState} className={`w-full rounded-b-xl px-3 py-5 flex duration-200 ${backgroundTheme === 'light' ? 'hover:bg-gray-50' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:brightness-110'}`} style={{
            color: colorTheme,
            background: backgroundTheme === 'dark'
              ? darkTheme.background
              : ''
          }}>
            Advanced search
          </a>
        </Link>
      </div>
      <SearchAdvanced isActive={advancedState} setIsActive={setAdvancedState} />
    </Modal>
  )
}

export default SearchFiltersPopup
