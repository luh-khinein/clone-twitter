import React, { useContext } from 'react'
import { darkTheme, lightTheme } from '../../libs/colors'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'
import BackgroundButton from './background-button'

const BackgroundBox: React.FC = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { smSize } = useContext(FontSizeContext)
  return (
    <div className='w-full flex flex-col justify-start mb-1'>
      <h2 className='text-slate-500 font-bold mb-1' style={{
        fontSize: `${smSize}px`
      }}>
        Background
      </h2>
      <div className={`flex items-center justify-between rounded-2xl py-2 px-4 ${backgroundTheme === 'light' ? 'bg-slate-50' : backgroundTheme === 'black' ? 'bg-zinc-900' : 'brightness-110'}`} style={{
        background: backgroundTheme === 'dark'
          ? darkTheme.background
          : ''
      }}>
        <BackgroundButton
          name='Default'
          backgroundColor='light'
          currentBackgroundColor={backgroundTheme}
        />
        <div className='flex mx-2 w-full'>
          <BackgroundButton
            name='Dim'
            backgroundColor='dark'
            currentBackgroundColor={backgroundTheme}
          />
        </div>
        <BackgroundButton
          name='Lights out'
          backgroundColor='black'
          currentBackgroundColor={backgroundTheme}
        />
      </div>
    </div>
  )
}

export default BackgroundBox
