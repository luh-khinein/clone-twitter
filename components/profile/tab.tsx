import { useRouter } from 'next/router'
import React, { useCallback, useContext, useEffect, useState } from 'react'
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
    <nav className={`flex w-full justify-between items-center border-b ${backgroundTheme === 'light' ? 'border-gray-100' : 'border-gray-700'}`}>
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
