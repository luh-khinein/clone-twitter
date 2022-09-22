import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useCallback, useContext, useState } from 'react'
import Link from 'next/link'
import { BsArrowLeft } from 'react-icons/bs'
import SettingsLayout from '../../components/layouts/settings-layout'
import InputSettings from '../../components/settings/input-settings'
import NavBar from '../../components/settings/nav-bar'
import { darkTheme, lightTheme } from '../../libs/colors'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'
import Checkbox from '../../components/settings/checkbox'
import s from '../../styles/toggle-switch.module.css'
import MuteFromSettings from '../../components/settings/mute-from-settings'
import MuteDurationSettings from '../../components/settings/mute-duration-settings'

const AddMutedKeyword: NextPage = () => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const { exSmSize, baseSize, xlSize } = useContext(FontSizeContext)
  const [mutedWord, setMutedWord] = useState({ home: true })
  const handleMutedWord = useCallback((e: any) => {
    e.persist()
    setMutedWord(prev => ({
      ...prev,
      [e.target.id]: [!e.target.checked]
    }))
  }, [])
  const [inputState, setInputState] = useState('')
  const handleInputState = useCallback((e: any) => {
    setInputState(e.target.value)
  }, [])
  const router = useRouter()
  return (
    <SettingsLayout>
      <NavBar />
      <section className={`w-timeline h-screen flex flex-col items-start justify-start py-2 border-x ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
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
            Add muted word
          </h1>
        </div>
        <div className='w-full flex flex-col px-3'>
          <InputSettings
            id=''
            type='text'
            placeholder='Enter word or phrase'
            handleOnChange={handleInputState}
            value={inputState}
            hasConditions={false}
          />
          <span className={`px-4 mb-3 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${exSmSize}px` }}>
            You can mute one word, phrase, @username, or hashtag at a time.
            <Link href='/en/demo-page'>
              <a target='_blank' style={{ color: colorTheme }}>
                &nbsp;Learn more
              </a>
            </Link>
          </span>
        </div>
        <div className={`py-2 w-full flex flex-col border-y ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
          <h2 className='font-bold px-3' style={{ fontSize: `${xlSize}px` }}>
            Mute from
          </h2>
          <Checkbox
            id='home'
            name='Home timeline'
            description=''
            hasMoreLink={false}
            isChecked={mutedWord.home}
            handleChecked={handleMutedWord}
          />
          <div className={`py-2 px-3 flex flex-col w-full border-b ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-zinc-800'}`}>
            <div className='w-full mb-1 flex justify-between items-center'>
              <span className='font-bold' style={{ fontSize: `${baseSize}px` }}>
                Notifications
              </span>
              <input
                type='checkbox'
                className={s.toggle}
              />
            </div>
          </div>
          <MuteFromSettings />
        </div>
        <div className={`w-full flex flex-col px-3 py-3 border-b ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
          <h2 className='font-bold' style={{ fontSize: `${xlSize}px` }}>
            Durations
          </h2>
          <MuteDurationSettings />
        </div>
        <div className='flex w-full justify-end py-3 px-3'>
          <button className='px-5 py-1.5 flex items-center justify-center rounded-full text-white duration-200 hover:brightness-95' style={{ fontSize: `${baseSize}px`, background: colorTheme }}>
            Save
          </button>
        </div>
      </section>
    </SettingsLayout>
  )
}

export default AddMutedKeyword
