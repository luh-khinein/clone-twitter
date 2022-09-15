import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useCallback, useContext, useState } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import SettingsLayout from '../../components/layouts/settings-layout'
import NavBar from '../../components/settings/nav-bar'
import { darkTheme, lightTheme } from '../../libs/colors'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'

const Email: NextPage = () => {
  const { backgroundTheme, colorTheme, hoverColorTheme } = useContext(ThemeContext)
  const { exSmSize, baseSize, xlSize } = useContext(FontSizeContext)
  const [hoverUpdateEmail, setHoverUpdateEmail] = useState(false)
  const handleHoverUpdateEmail = useCallback(() => {
    setHoverUpdateEmail(!hoverUpdateEmail)
  }, [hoverUpdateEmail])
  const router = useRouter()
  // get this later
  const email = 'someemail@email.com'

  return (
    <SettingsLayout>
      <NavBar />
      <section className={`w-timeline h-screen flex flex-col items-start jusitfy-start py-2 border-r border-l ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
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
            <BsArrowLeft className='h-5 w-5' />
          </button>
          <h1 className='font-bold' style={{ fontSize: `${xlSize}px` }}>
            Change email
          </h1>
        </div>
        <div className={`w-full py-2 px-3 flex flex-col mb-2 border-b ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
          <div className={`w-full flex flex-col px-2 py-2 ${backgroundTheme === 'light' ? 'bg-slate-50' : backgroundTheme === 'black' ? 'bg-zinc-900' : 'brightness-110'}`} style={{
            background: backgroundTheme === 'dark'
              ? darkTheme.background
              : ''
          }}>
            <span className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${exSmSize}px` }}>
              Current
            </span>
            <span className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${baseSize}px` }}>
              {email}
            </span>
          </div>
        </div>
        <button
          onMouseEnter={handleHoverUpdateEmail}
          onMouseLeave={handleHoverUpdateEmail}
          className='w-full py-3 flex items-center justify-center transition-colors'
          style={{
            fontSize: `${baseSize}px`,
            color: colorTheme,
            background: hoverUpdateEmail ? hoverColorTheme : ''
          }}
        >
          Update email address
        </button>
      </section>
    </SettingsLayout>
  )
}

export default Email
