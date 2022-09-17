import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import { BsArrowLeft } from 'react-icons/bs'
import { HiCheck } from 'react-icons/hi'
import SettingsLayout from '../../components/layouts/settings-layout'
import NavBar from '../../components/settings/nav-bar'
import { darkTheme, lightTheme } from '../../libs/colors'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'
import s from '../../styles/radio.module.css'

const Autoplay: NextPage = () => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const { exSmSize, baseSize, xlSize } = useContext(FontSizeContext)
  const [autoplaySettings, setAutoplaySettings] = useState({
    cell_or_wifi: true,
    never: false,
  })
  const handleSetAutoplayFalse = useCallback(() => {
    setAutoplaySettings({
      cell_or_wifi: false,
      never: false
    })
  }, [])
  const handleAutoplaySettings = useCallback((e: any) => {
    e.persist()
    handleSetAutoplayFalse()
    setAutoplaySettings(prev => ({
      ...prev,
      [e.target.id]: true
    }))
  }, [])
  const router = useRouter()

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--color-theme', colorTheme
    )
  }, [colorTheme])

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
            Autoplay
          </h1>
        </div>
        <div className='flex flex-col px-3 w-full'>
          <h2 className='font-bold' style={{ fontSize: `${baseSize}px` }}>
            Autoplay
          </h2>
          <span className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${exSmSize}px` }}>
            Select whether videos and GIFs should play automatically on this device.
            <Link href='/en/demo-page'>
              <a target='_blank' style={{ color: colorTheme }}>
                &nbsp;Learn more
              </a>
            </Link>
          </span>
          <div className='w-full flex items-center justify-between py-2'>
            <span style={{ fontSize: `${baseSize}px` }}>
              On cellular or Wi-Fi
            </span>
            <div className='flex items-center justify-center'>
              <input
                id='cell_or_wifi'
                checked={autoplaySettings.cell_or_wifi}
                onClick={handleAutoplaySettings}
                type='radio'
                className={`${s.radio} ${backgroundTheme === 'black' ? 'border-zinc-400' : 'border-slate-400'}`}
              />
              {autoplaySettings.cell_or_wifi && (
                <label className='text-white absolute'>
                  <HiCheck className='w-4 h-4' />
                </label>
              )}
            </div>
          </div>
          <div className='w-full flex items-center justify-between py-2'>
            <span style={{ fontSize: `${baseSize}px` }}>
              Never
            </span>
            <div className='flex items-center justify-center bg-none'>
              <input
                id='never'
                checked={autoplaySettings.never}
                onClick={handleAutoplaySettings}
                type='radio'
                className={`${s.radio} ${backgroundTheme === 'black' ? 'border-zinc-400' : 'border-slate-400'}`}
              />
              {autoplaySettings.never && (
                <label className='text-white absolute'>
                  <HiCheck className='w-4 h-4' />
                </label>
              )}
            </div>
          </div>
        </div>
      </section>
    </SettingsLayout>
  )
}

export default Autoplay
