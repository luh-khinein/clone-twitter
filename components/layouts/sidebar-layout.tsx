import React from 'react'
import SideBarColumn from '../sidebar-column'

interface Props {
  children: any
  searchBar: boolean
  hCard: boolean
  fCard: boolean
}

const SidebarLayout: React.FC<Props> = ({ children, searchBar, hCard, fCard }) => (
  <div className='flex min-w-min justify-between items-start'>
    {children}
    <SideBarColumn searchBar={searchBar} hCard={hCard} fCard={fCard} />
  </div>
)

export default SidebarLayout
