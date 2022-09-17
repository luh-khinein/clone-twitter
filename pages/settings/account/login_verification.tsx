import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useCallback, useContext, useState } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import SettingsLayout from '../../../components/layouts/settings-layout'
import Checkbox from '../../../components/settings/checkbox'
import NavBar from '../../../components/settings/nav-bar'
import { darkTheme, lightTheme } from '../../../libs/colors'
import { FontSizeContext } from '../../../utils/font-size'
import { ThemeContext } from '../../../utils/theme'

const LoginVerification: NextPage = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { xlSize } = useContext(FontSizeContext)
  const [checkboxState, setCheckboxState] = useState({
    text_message: false,
    authentication_app: false,
    security_key: false
  })
  const handleCheckboxState = useCallback((e: any) => {
    e.persist()
    setCheckboxState(prev => ({
      ...prev,
      [e.target.id]: [!e.target.checked]
    }))
  }, [])
  const router = useRouter()
  return (
    <SettingsLayout>
      <NavBar />
      <section className={`w-timeline h-screen flex flex-col items-start jusitify-start py-2 border-x ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
        <div className='flex items-center px-3 mb-5'>
          <button
            onClick={() => router.back()}
            className={`p-2 mr-5 flex items-center justify-center rounded-full duration-200 ${backgroundTheme === 'light' ? 'hover:brightness-95' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:brightness-110'}`}
            style={{
              background: backgroundTheme === 'light'
                ? lightTheme.background
                : backgroundTheme === 'dark'
                  ? darkTheme.background
                  : ''
            }}
          >
            <BsArrowLeft className='w-5 h-5' />
          </button>
          <h1 className='font-bold' style={{ fontSize: `${xlSize}px` }}>
            Two-factor authentication
          </h1>
        </div>
        <h2 className='font-bold px-3 mb-5' style={{ fontSize: `${xlSize}px` }}>
          Two-factor authentication
        </h2>
        <Checkbox
          id='text_message'
          name='Text message'
          description='Use your mobile phone to receive a text message with an authentication code to entern when you log in to Twitter.'
          hasMoreLink={false}
          isChecked={checkboxState.text_message}
          handleChecked={handleCheckboxState}
        />
        <Checkbox
          id='authentication_app'
          name='Authentication app'
          description='Use a mobile authentication app to get a verification code to enter every time you log in to Twitter.'
          hasMoreLink={false}
          isChecked={checkboxState.authentication_app}
          handleChecked={handleCheckboxState}
        />
        <Checkbox
          id='security_key'
          name='Security key'
          description="
            Use a security key that inserts into your computer or syncs to your mobile device when you log in 
          to Twitter. You'll need to use a supported mobile device or web browser.
          "
          hasMoreLink={true}
          moreLink='/en/demo-page'
          isChecked={checkboxState.security_key}
          handleChecked={handleCheckboxState}
        />
      </section>
    </SettingsLayout>
  )
}

export default LoginVerification
