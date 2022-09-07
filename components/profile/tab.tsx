import { useRouter } from 'next/router'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { darkTheme, lightTheme } from '../../libs/colors'
import { ThemeContext } from '../../utils/theme'
import TabListButton from '../tab-list-button'

const TabBar: React.FC = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  const [currentPage, setCurrentPage] = useState('')
  const router = useRouter()
  const handlePage = useCallback(() => {
    const path = window.location.pathname.split('/')
    setCurrentPage(path[path.length - 1])
  }, [])

  useEffect(() => {
    if (currentPage !== router.asPath) {
      handlePage()
    }
  }, [router])

  return (
    <nav className={`flex w-full justify-between items-center border-b ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`} style={{
      color: backgroundTheme === 'light'
        ? lightTheme.text
        : darkTheme.text
    }}>
      <TabListButton
        link='/username'
        linkName='username'
        name='Tweets'
        currentPage={currentPage}
      />
      <TabListButton
        link='/username/with_replies'
        linkName='with_replies'
        name='Tweets & replies'
        currentPage={currentPage}
      />
      <TabListButton
        link='/username/media'
        linkName='media'
        name='Media'
        currentPage={currentPage}
      />
      <TabListButton
        link='/username/likes'
        linkName='likes'
        name='Likes'
        currentPage={currentPage}
      />
    </nav>
  )
}

export default TabBar
