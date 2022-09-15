import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useCallback, useContext, useState } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import SettingsLayout from '../../components/layouts/settings-layout'
import NavBar from '../../components/settings/nav-bar'
import { darkTheme, lightTheme } from '../../libs/colors'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'

const Phone: NextPage = () => {
  const { backgroundTheme, colorTheme, hoverColorTheme } = useContext(ThemeContext)
  const { baseSize, xlSize } = useContext(FontSizeContext)
  const [hoverAddButton, setHoverAddButton] = useState(false)
  const handleHoverAddButton = useCallback(() => {
    setHoverAddButton(!hoverAddButton)
  }, [hoverAddButton])
  const router = useRouter()
  return (
    <SettingsLayout>
      <NavBar />
      <section className={`w-timeline h-screen flex flex-col items-start justify-start py-2 border-r border-l ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
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
            Change phone
          </h1>
        </div>
        <button
          onMouseEnter={handleHoverAddButton}
          onMouseLeave={handleHoverAddButton}
          className='w-full py-3 flex items-center justify-center transition-colors'
          style={{
            color: colorTheme,
            background: hoverAddButton ? hoverColorTheme : '',
            fontSize: `${baseSize}px`
          }}
        >
          Add phone number
        </button>
      </section>
    </SettingsLayout>
  )
}

export default Phone
