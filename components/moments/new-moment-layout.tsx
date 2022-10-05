import React, { useContext, useEffect, useState } from 'react'
import { darkTheme, lightTheme } from '../../libs/colors'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'
import s from '../../styles/toggle-switch.module.css'
import MomentsWallpaper from './moments-wallpaper'
import MomentsDescription from './moments-descriptions'
import NewMomentsEmpty from './new-moments-empty'

const NewMomentLayout: React.FC = () => {
  const { backgroundTheme, colorTheme, lightColorTheme } = useContext(ThemeContext)
  const { baseSize } = useContext(FontSizeContext)
  const [wallpaper, setWallpaper] = useState('')

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--color-theme', colorTheme
    )
    document.documentElement.style.setProperty(
      '--light-color-theme', lightColorTheme
    )
  }, [colorTheme, lightColorTheme])

  return (
    <section className={`overflow-y-scroll w-timeline h-screen flex flex-col pt-[60px] items-start justify-start border-x ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
      <div className='w-[598px] z-10 flex justify-between items-center py-2 px-3 fixed top-0' style={{
        background: backgroundTheme === 'light'
          ? lightTheme.background
          : backgroundTheme === 'dark'
            ? darkTheme.background
            : '#000'
      }}>
        <div className='flex items-center'>
          <input
            type='checkbox'
            className={s.toggle}
          />
          <span className='ml-3' style={{ fontSize: `${baseSize}px` }}>
            Condensed view
          </span>
        </div>
        <button
          className={`px-5 py-2 flex items-center justify-center font-bold rounded-full duration-200 ${backgroundTheme === 'light' ? 'hover:brightness-125' : 'hover:brightness-95'}`}
          style={{
            background: backgroundTheme === 'light'
              ? '#000'
              : '#fff',
            color: backgroundTheme === 'light'
              ? '#fff'
              : '#000'
          }}
        >
          Publish
        </button>
      </div>
      <MomentsWallpaper
        wallpaper={wallpaper}
      />
      <MomentsDescription
        title=''
        description=''
      />
      <NewMomentsEmpty />
    </section>
  )
}

export default NewMomentLayout
