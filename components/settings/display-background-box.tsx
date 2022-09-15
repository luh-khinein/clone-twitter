import React, { useContext } from 'react'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'
import BackgroundButton from '../display/background-button'

const DisplayBackgroundBox: React.FC = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { xlSize } = useContext(FontSizeContext)
  return (
    <div className='w-full flex flex-col justify-start mb-1'>
      <h2 className='font-bold mb-1' style={{
        fontSize: `${xlSize}px`
      }}>
        Background
      </h2>
      <div className='flex items-center justify-between rounded-2xl py-2'>
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

export default DisplayBackgroundBox
