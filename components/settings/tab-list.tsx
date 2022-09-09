import React from 'react'
import NavListButton from './nav-list-button'

const TabList: React.FC = () => {
  return (
    <div className='flex flex-col w-full'>
      <NavListButton
        link='/settings/account'
        name='Your account'
      />
      <NavListButton
        link='/settings/security_and_account_access'
        name='Security and account access'
      />
      <NavListButton
        link='/settings/privacy_and_safety'
        name='Privacy and safety'
      />
      <NavListButton
        link='/settings/notifications'
        name='Notifications'
      />
      <NavListButton
        link='/settings/accessibility_display_and_languages'
        name='Accessibility, display, and languages'
      />
      <NavListButton
        link='/settings/about'
        name='Additional resources'
      />
    </div>
  )
}

export default TabList
