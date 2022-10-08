import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useCallback, useContext, useRef, useState } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { RiMoreLine } from 'react-icons/ri'
import Layout from '../components/layouts/layout'
import SearchBar from '../components/search-bar'
import SearchButton from '../components/search/search-button'
import SearchMorePopup from '../components/search/search-more-popup'
import { darkTheme, lightTheme } from '../libs/colors'
import { ThemeContext } from '../utils/theme'
import SearchFiltersPopup from './i/search_filters'
import SearchAdvanced from './search_advanced'
import Search from './settings/search'

const SearchPage: NextPage = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  const router = useRouter()
  const refMoreButton = useRef<HTMLButtonElement>(null)
  const [morePopup, setMorePopup] = useState(false)
  const handleMorePopup = useCallback(() => {
    setMorePopup(!morePopup)
  }, [morePopup])
  const [searchModal, setSearchModal] = useState(false)
  const handleSearchModal = useCallback(() => {
    setSearchModal(true)
  }, [])
  const [filterModal, setFilterModal] = useState(false)
  const handleFilterModal = useCallback(() => {
    setFilterModal(true)
  }, [])
  const [advancedModal, setAdvancedModal] = useState(false)
  const handleAdvancedModal = useCallback(() => {
    setAdvancedModal(true)
  }, [])

  return (
    <Layout searchBar={false} searchSetting={true} hCard={true} fCard={true} stickyPosition={450}>
      <section className={`w-timeline h-full border-l border-r ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'} items-center pt-8`} style={{
        color: backgroundTheme === 'light' ? lightTheme.text : darkTheme.text
      }}>
        <div className={`w-[598px] z-10 backdrop-blur-sm min-w-min flex flex-col items-center py-2 fixed top-0 border-b ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`} style={{
          background: backgroundTheme === 'light'
            ? 'rgba(255, 255, 255, 0.85)'
            : backgroundTheme === 'dark'
              ? 'rgba(21, 32, 43, 0.85)'
              : 'rgba(0, 0, 0, 0.85)'
        }}>
          <div className='w-full flex items-center px-3'>
            <button
              onClick={() => router.back()}
              className={`p-2 mr-8 flex justify-center items-center rounded-full ${backgroundTheme === 'light' ? 'hover:brightness-95 active:brightness-90' : backgroundTheme === 'black' ? 'bg-zinc-900 hover:bg-zinc-800 active:bg-zinc-700' : 'hover:brightness-110 active:brightness-125'} duration-200`}
              style={{
                backgroundColor: backgroundTheme === 'light'
                  ? lightTheme.background
                  : backgroundTheme === 'dark'
                    ? darkTheme.background
                    : ''
              }}>
              <BsArrowLeft className='w-5 h-5' />
            </button>
            <SearchBar inputValue={`${router.query.q}`} />
            <button
              ref={refMoreButton}
              onClick={handleMorePopup}
              className={`p-2 flex justify-center items-center rounded-full ${backgroundTheme === 'light' ? 'hover:brightness-95 active:brightness-90' : backgroundTheme === 'black' ? 'bg-zinc-900 hover:bg-zinc-800 active:bg-zinc-700' : 'hover:brightness-110 active:brightness-125'} duration-200`}
              style={{
                backgroundColor: backgroundTheme === 'light'
                  ? lightTheme.background
                  : backgroundTheme === 'dark'
                    ? darkTheme.background
                    : ''
              }}>
              <RiMoreLine className='w-5 h-5' />
            </button>
          </div>
          <nav className='flex w-full items-center mt-1'>
            <SearchButton
              link={`/search?q=${encodeURIComponent(`${router.query.q}`)}`}
              name='Top'
              condition={!router.query.f}
            />
            <SearchButton
              link={`/search?q=${encodeURIComponent(`${router.query.q}`)}&f=live`}
              name='Latest'
              condition={router.query.f === 'live'}
            />
            <SearchButton
              link={`/search?q=${encodeURIComponent(`${router.query.q}`)}&f=user`}
              name='People'
              condition={router.query.f === 'user'}
            />
            <SearchButton
              link={`/search?q=${encodeURIComponent(`${router.query.q}`)}&f=image`}
              name='Photos'
              condition={router.query.f === 'image'}
            />
            <SearchButton
              link={`/search?q=${encodeURIComponent(`${router.query.q}`)}&f=video`}
              name='Videos'
              condition={router.query.f === 'video'}
            />
          </nav>
        </div>
      </section>
      {morePopup && (
        <div className='fixed top-0 left-0 w-full h-full z-20' onClick={handleMorePopup}>
          <SearchMorePopup
            moreButton={refMoreButton}
            handleSearchModal={handleSearchModal}
            handleFilterModal={handleFilterModal}
            handleAdvancedModal={handleAdvancedModal}
          />
        </div>
      )}
      <Search
        isActive={searchModal}
        setIsActive={setSearchModal}
      />
      <SearchFiltersPopup
        isActive={filterModal}
        setIsActive={setFilterModal}
      />
      <SearchAdvanced
        isActive={advancedModal}
        setIsActive={setAdvancedModal}
      />
    </Layout>
  )
}

export default SearchPage
