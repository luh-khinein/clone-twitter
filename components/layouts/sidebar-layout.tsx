import React from 'react'
import SideBarColumn from '../sidebar-column'

interface Props {
  children: any
  searchBar: boolean
  hCard: boolean
  fCard: boolean
}

const SidebarLayout: React.FC<Props> = ({ children, searchBar, hCard, fCard }) => (
  <main className='flex min-w-min justify-between items-start'>
    <div className='pb-56'>
      {children}
    </div>
    <SideBarColumn searchBar={searchBar} hCard={hCard} fCard={fCard} />
  </main>
)

export default SidebarLayout
