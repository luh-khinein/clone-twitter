import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { BsArrowLeft } from 'react-icons/bs'
import SettingsLayout from '../../components/layouts/settings-layout'
import InputSettings from '../../components/settings/input-settings'
import NavBar from '../../components/settings/nav-bar'
import { darkTheme, lightTheme } from '../../libs/colors'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'

const ChangePassword: NextPage = () => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const { exSmSize, baseSize, xlSize } = useContext(FontSizeContext)
  const refSaveButton = useRef<HTMLButtonElement>(null)
  const [buttonState, setButtonState] = useState(true)
  const [inputs, setInputs] = useState({
    current_password: '',
    new_password: '',
    confirm_password: '',
  })
  const handleOnChange = useCallback((e: any) => {
    e.persist()
    setInputs(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
  }, [])
  const router = useRouter()

  useEffect(() => {
    if (inputs.current_password !== '' &&
      inputs.new_password !== '' &&
      inputs.confirm_password !== ''
    ) {
      setButtonState(false)
    } else {
      setButtonState(true)
    }
  }, [inputs])

  return (
    <SettingsLayout>
      <NavBar />
      <section className={`w-timeline h-screen flex flex-col items-start justify-start py-2 pb-10 border-l border-r ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
        <div className='flex items-center w-max px-3 mb-5'>
          <button
            onClick={() => router.back()}
            className={`rounded-full p-2 flex items-center justify-center mr-5 ${backgroundTheme === 'light' ? 'hover:brightness-95' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:bg-slate-800'}`}
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
            Change your password
          </h1>
        </div>
        <div className={`flex flex-col w-full px-3 py-2 border-b ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
          <InputSettings
            id='current_password'
            type='password'
            placeholder='Current password'
            handleOnChange={handleOnChange}
            value={inputs.current_password}
            hasConditions={false}
          />
          <Link href='/home' target='_black'>
            <a className='ml-2 font-bold hover:underline' style={{ color: colorTheme, fontSize: `${exSmSize}px` }}>
              Forgot password?
            </a>
          </Link>
        </div>
        <div className={`flex flex-col w-full px-3 py-4 mb-5 border-b ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
          <InputSettings
            id='new_password'
            type='password'
            placeholder='New password'
            handleOnChange={handleOnChange}
            value={inputs.new_password}
            hasConditions={false}
          />
          <div className='m-2'></div>
          <InputSettings
            id='confirm_password'
            type='password'
            placeholder='Confirm password'
            handleOnChange={handleOnChange}
            value={inputs.confirm_password}
            hasConditions={false}
          />
        </div>
        <div className='flex w-full px-3 justify-end'>
          <button
            ref={refSaveButton}
            disabled={buttonState}
            className='rounded-full px-5 py-1.5 text-white font-bold flex items-center justify-center active:hover:brightness-95'
            style={{
              fontSize: `${baseSize}px`,
              background: colorTheme,
              opacity: buttonState ? '.5' : '1'
            }}>
            Save
          </button>
        </div>
      </section>
    </SettingsLayout>
  )
}

export default ChangePassword
