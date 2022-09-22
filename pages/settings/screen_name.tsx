import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import SettingsLayout from '../../components/layouts/settings-layout'
import InputSettings from '../../components/settings/input-settings'
import NavBar from '../../components/settings/nav-bar'
import { darkTheme, lightTheme } from '../../libs/colors'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'

const ScreenName: NextPage = () => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const { exSmSize, baseSize, xlSize } = useContext(FontSizeContext)
  const router = useRouter()
  // Get this later
  const username = 'username'
  const refInput = useRef<HTMLInputElement>(null)
  const [nameInput, setNameInput] = useState(username)
  const handleChangeName = useCallback((e: any) => {
    e.persist()
    setNameInput(e.target.value)
  }, [])

  const [buttonState, setButtonState] = useState(true)

  useEffect(() => {
    if (refInput.current) {
      refInput.current.value = nameInput
    }
  }, [])

  return (
    <SettingsLayout>
      <NavBar />
      <section className={`w-timeline h-screen flex flex-col items-start justify-start py-2 border-r border-l ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
        <div className='px-3 mb-5 flex items-center'>
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
            Change username
          </h1>
        </div>
        <div className={`w-full py-2 px-3 flex flex-col border-b ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
          <InputSettings
            id='username'
            refInput={refInput}
            type='text'
            placeholder='Username'
            handleOnChange={handleChangeName}
            value={nameInput}
            hasConditions={true}
            conditions={nameInput.length > 4}
          />
          {nameInput.length < 4 && (
            <span className='text-red-600 ml-3' style={{ fontSize: `${exSmSize}px` }}>
              Your username must be longer than 4 characters.
            </span>
          )}
        </div>
        <div className={`w-full px-3 py-3 flex flex-col items-start border-b ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
          <h2 className='font-bold mb-5' style={{ fontSize: `${xlSize}px` }}>
            Suggestions
          </h2>
          <button className='hover:underline' style={{ fontSize: `${baseSize}px`, color: colorTheme }}>
            suggestionO_o
          </button>
        </div>
        <div className='w-full mt-3 flex justify-end px-3'>
          <button
            disabled={buttonState}
            className='rounded-full px-3 py-1.5 flex items-center justify-center duration-200 hover:brightness-95 text-white'
            style={{
              background: colorTheme,
              fontSize: `${baseSize}px`,
              opacity: buttonState ? .5 : 1
            }}>
            Save
          </button>
        </div>
      </section>
    </SettingsLayout>
  )
}

export default ScreenName
