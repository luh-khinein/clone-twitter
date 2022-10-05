import { useRouter } from 'next/router'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../../utils/theme'
import TabListButton from '../tab-list-button'
import Carousel from '../topics/carousel'

interface Props {
  id: string
}

const MomentsNavBar: React.FC<Props> = ({ id }) => {
  const { backgroundTheme } = useContext(ThemeContext)
  const [currentPage, setCurrentPage] = useState('')
  const router = useRouter()
  const handlePage = useCallback(() => {
    const path = window.location.pathname.split('/')
    setCurrentPage(path[path.length - 1])
  }, [])

  useEffect(() => {
    const path = router.asPath.split('/')
    if (currentPage !== path[path.length - 1]) {
      handlePage()
    }
  }, [currentPage, router, handlePage])

  return (
    <nav className={`w-full flex items-center border-b ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
      <Carousel>
        <div className='flex items-center'>
          <TabListButton
            link={`/i/moment_maker/edit/${id}/liked`}
            linkName='liked'
            extraLinkName={`${id}`}
            name="Tweets I've liked"
            currentPage=''
          />
          <TabListButton
            link={`/i/moment_maker/edit/${id}/user`}
            linkName='user'
            name='Tweets by account'
            currentPage=''
          />
        </div>
        <div className='flex items-center'>
          <TabListButton
            link={`/i/moment_maker/edit/${id}/search`}
            linkName='search'
            name='Tweet search'
            currentPage=''
          />
          <TabListButton
            link={`/i/moment_maker/edit/${id}/collection`}
            linkName='collection'
            name='Collection'
            currentPage=''
          />
        </div>
      </Carousel>
    </nav>
  )
}

export default MomentsNavBar
