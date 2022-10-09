import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useCallback, useContext, useRef, useState } from 'react'
import { BsArrowLeft, BsSliders } from 'react-icons/bs'
import MomentsLayout from '../../../../../components/layouts/moments-layout'
import MomentsNavBar from '../../../../../components/moments/moments-id-navbar'
import Selector from '../../../../../components/moments/selector'
import { darkTheme, lightTheme } from '../../../../../libs/colors'
import { FontSizeContext } from '../../../../../utils/font-size'
import { ThemeContext } from '../../../../../utils/theme'
import FilterPopup from '../../../../../components/moments/filter-popup'
import SearchBar from '../../../../../components/settings/search-bar'
import NewMomentLayout from '../../../../../components/moments/new-moment-layout'
import MomentsTweetPost from '../../../../../components/moments/moments-tweet-liked'
import QuitConfirmation from '../../../../../components/modal/moments-quit-without-save'

const UserMomentId: NextPage = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { xlSize } = useContext(FontSizeContext)
  const router = useRouter()
  const refFilterButton = useRef<HTMLButtonElement>(null)
  const [isSaved, setIsSaved] = useState(false)
  const [quitModal, setQuitModal] = useState(false)
  const handleQuitModal = useCallback(() => {
    setQuitModal(true)
  }, [])
  const [search, setSearch] = useState(false)
  const [selectedTweets, setSelectedTweets] = useState(0)
  const [filterPopup, setFilterPopup] = useState(false)
  const handleFilterPopup = useCallback(() => {
    setFilterPopup(!filterPopup)
  }, [filterPopup])
  // Get this later
  const id = 1
  return (
    <MomentsLayout buttonIsActive={false}>
      <section className={`w-full h-screen pt-12 lg:max-w-[318px] xl:max-w-[388px] flex flex-col border-x ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
        <div className='w-full lg:max-w-[316px] xl:max-w-[386px] z-10 flex items-center py-2 px-3 fixed top-0' style={{
          background: backgroundTheme === 'light'
            ? lightTheme.background
            : backgroundTheme === 'dark'
              ? darkTheme.background
              : '#000'
        }}>
          <button
            onClick={() => isSaved ? router.back() : handleQuitModal()}
            className={`p-2 mr-5 flex items-center justify-center rounded-full duration-200 ${backgroundTheme === 'light' ? 'hover:bg-gray-50' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:brightnes-110'}`}
            style={{
              background: backgroundTheme === 'dark'
                ? darkTheme.background
                : ''
            }}
          >
            <BsArrowLeft className='w-5 h-5' />
          </button>
          <h1 className='font-bold' style={{
            fontSize: `${xlSize}px`
          }}>
            Add Tweets
          </h1>
        </div>
        <MomentsNavBar
          id={id}
        />
        <Selector
          selectedTweets={selectedTweets}
        />
        <div className={`w-full flex items-center justify-between px-3 py-2 border-b ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
          <SearchBar
            placeholder='Search for Twitter account'
            focus={setSearch}
          />
          <button
            ref={refFilterButton}
            onClick={handleFilterPopup}
            className={`p-2 flex items-center justify-center rounded-full duration-200 ${backgroundTheme === 'light' ? 'hover:bg-gray-50' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:brightness-110'}`}
            style={{
              background: backgroundTheme === 'dark'
                ? darkTheme.background
                : ''
            }}
          >
            <BsSliders className='w-5 h-5' />
          </button>
        </div>
        <MomentsTweetPost
          image=''
          username='username'
          nickname='nickname'
          post_date='Oct 10'
          tweet='Teste'
          comments={0}
          retweets={0}
          likes={0}
        />
      </section>
      <NewMomentLayout />
      {filterPopup && (
        <div className='fixed top-0 left-0 w-full h-full z-20' onClick={handleFilterPopup}>
          <FilterPopup
            filterButton={refFilterButton}
          />
        </div>
      )}
      <QuitConfirmation
        isActive={quitModal}
        setIsActive={setQuitModal}
      />
    </MomentsLayout>
  )
}

export default UserMomentId
