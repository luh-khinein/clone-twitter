import React from 'react'
import SideBarColumn from '../sidebar-column'

interface Props {
  children: any
  searchBar: boolean
  hCard: boolean
  fCard: boolean
  stickyPosition: number
}

const SidebarLayout: React.FC<Props> = ({ children, searchBar, hCard, fCard, stickyPosition }) => (
  <main id='main' className='flex min-w-max justify-between items-start'>
    {children}
    <SideBarColumn searchBar={searchBar} hCard={hCard} fCard={fCard} stickyPosition={stickyPosition} />
  </main>
)

export default SidebarLayout
