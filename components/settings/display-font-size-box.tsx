import React, { useContext } from 'react'
import { darkTheme } from '../../libs/colors'
import { fontSizes } from '../../libs/font-size'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'
import ButtonTrail from '../display/button-trail'

const DisplayFontSizeBox: React.FC = () => {
  const { backgroundTheme, colorTheme, lightColorTheme } = useContext(ThemeContext)
  const { baseSize, xlSize } = useContext(FontSizeContext)
  return (
    <div className='flex flex-col justify-start w-full mb-1'>
      <h2 className='text-slate-500 font-bold mb-1' style={{
        fontSize: `${xlSize}px`
      }}>
        Font size
      </h2>
      <div className='flex items-center justify-center rounded-2xl px-4 py-3'>
        <span style={{
          fontSize: `${fontSizes.extraSmall}px`
        }}>
          Aa
        </span>
        <div className='flex justify-between w-full px-4'>
          <ButtonTrail
            name='Extra small'
            fontSizeValue={fontSizes.extraSmall}
            currentFontSize={baseSize}
          />
          <div
            className='absolute w-[120px] h-1 mt-[14px] ml-2 rounded-full'
            style={{
              background: baseSize > fontSizes.extraSmall
                ? colorTheme
                : lightColorTheme
            }}
          />
          <ButtonTrail
            name='Small'
            fontSizeValue={fontSizes.small}
            currentFontSize={baseSize}
          />
          <div
            className='absolute w-[115px] h-1 mt-[14px] ml-[122px]'
            style={{
              background: baseSize > fontSizes.small
                ? colorTheme
                : lightColorTheme
            }}
          />
          <ButtonTrail
            name='Default'
            fontSizeValue={fontSizes.default}
            currentFontSize={baseSize}
          />
          <div
            className='absolute w-[115px] h-1 mt-[14px] ml-[230px]'
            style={{
              background: baseSize > fontSizes.default
                ? colorTheme
                : lightColorTheme
            }}
          />
          <ButtonTrail
            name='Large'
            fontSizeValue={fontSizes.large}
            currentFontSize={baseSize}
          />
          <div
            className='absolute w-[118px] h-1 mt-[14px] ml-[350px] rounded-full'
            style={{
              background: baseSize > fontSizes.large
                ? colorTheme
                : lightColorTheme
            }}
          />
          <ButtonTrail
            name='Extra large'
            fontSizeValue={fontSizes.extraLarge}
            currentFontSize={baseSize}
          />
        </div>
        <span style={{
          fontSize: `${fontSizes.extraLarge}px`
        }}>
          Aa
        </span>
      </div>
    </div >
  )
}

export default DisplayFontSizeBox
