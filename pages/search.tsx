import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useCallback, useContext, useEffect, useState } from 'react'
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
  const [currentPage, setCurrentPage] = useState('')
  const router = useRouter()
  const qValue = router.query.q?.toString
  const handlePage = useCallback(() => {
    const path = window.location.pathname.split('/')
    setCurrentPage(path[path.length - 1])
  }, [])
  const [morePopup, setMorePopup] = useState(false)
  const handleMorePopup = useCallback(() => {
    setMorePopup(!morePopup)
  }, [morePopup])
  const [search, setSearch] = useState(false)
  const [searchFilter, setSearchFilter] = useState(false)
  const [searchAdvanced, setSearchAdvanced] = useState(false)
  const handleSearch = useCallback(() => {
    setSearch(true)
  }, [])
  const handleSearchFilter = useCallback(() => {
    setSearchFilter(true)
  }, [])
  const handleSearchAdvanced = useCallback(() => {
    setSearchAdvanced(true)
  }, [])

  useEffect(() => {
    if (currentPage !== router.asPath) {
      handlePage()
    }
  }, [currentPage, router.asPath, handlePage])

  console.log(router.asPath)

  useEffect(() => {
    if (router.asPath !== `/search?${router.query.q?.toString}&${router.query.f?.toString}` &&
      router.asPath !== '/settings/search' &&
      router.asPath !== `/i/search_filters?${router.query.q?.toString}` &&
      router.asPath !== '/search_advanced' &&
      router.asPath !== '/messages/compose' &&
      router.asPath !== '/compose/tweet' &&
      router.asPath !== '/i/newsletters' &&
      router.asPath !== '/i/flow/convert_to_professional' &&
      router.asPath !== '/i/display' &&
      router.asPath !== '/i/keyboard_shortcuts'
    ) {
      router.push(`/search?${router.query.q?.toString}&${router.query.f?.toString}`)
    }
  }, [router])

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
              link={`/search?q=${qValue}`}
              name='Top'
              condition={!router.query.f}
            />
            <SearchButton
              link={`/search?q=${qValue}&f=live`}
              name='Latest'
              condition={router.query.f === 'live'}
            />
            <SearchButton
              link={`/search?q=${qValue}&f=user`}
              name='People'
              condition={router.query.f === 'user'}
            />
            <SearchButton
              link={`/search?q=${qValue}&f=image`}
              name='Photos'
              condition={router.query.f === 'image'}
            />
            <SearchButton
              link={`/search?q=${qValue}&f=video`}
              name='Videos'
              condition={router.query.f === 'video'}
            />
          </nav>
        </div>
      </section>
      {morePopup && (
        <div className='fixed top-0 left-0 w-full h-full z-20' onClick={handleMorePopup}>
          <SearchMorePopup
            handleSearch={handleSearch}
            handleSearchFilter={handleSearchFilter}
            handleSearchAdvanced={handleSearchAdvanced}
          />
        </div>
      )}
      <Search isActive={search} setIsActive={setSearch} />
      <SearchFiltersPopup isActive={searchFilter} setIsActive={setSearchFilter} />
      <SearchAdvanced isActive={searchAdvanced} setIsActive={setSearchAdvanced} />
    </Layout>
  )
}

export default SearchPage
