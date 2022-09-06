import React, { useContext } from 'react'
import { colors, darkTheme } from '../../libs/colors'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'
import ColorButton from './color-button'

const ColorBox: React.FC = () => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const { smSize } = useContext(FontSizeContext)
  return (
    <div className='w-full flex flex-col justify-start mb-1'>
      <h2 className='text-slate-500 font-bold mb-1' style={{
        fontSize: `${smSize}px`
      }}>
        Color
      </h2>
      <div className={`flex items-center justify-between rounded-2xl px-5 py-2 ${backgroundTheme === 'light' ? 'bg-slate-50' : backgroundTheme === 'black' ? 'bg-zinc-900' : 'brightness-110'}`} style={{
        background: backgroundTheme === 'dark'
          ? darkTheme.background
          : ''
      }}>
        <ColorButton
          colorValue={colors.default}
          lightColorValue={colors.defaultLight}
          hoverColorValue={colors.defaultHover}
          currentColor={colorTheme}
        />
        <ColorButton
          colorValue={colors.yellow}
          lightColorValue={colors.yellowLight}
          hoverColorValue={colors.yellowHover}
          currentColor={colorTheme}
        />
        <ColorButton
          colorValue={colors.pink}
          lightColorValue={colors.pinkLight}
          hoverColorValue={colors.pinkHover}
          currentColor={colorTheme}
        />
        <ColorButton
          colorValue={colors.purple}
          lightColorValue={colors.purpleLight}
          hoverColorValue={colors.purpleHover}
          currentColor={colorTheme}
        />
        <ColorButton
          colorValue={colors.orange}
          lightColorValue={colors.orangeLight}
          hoverColorValue={colors.orangeHover}
          currentColor={colorTheme}
        />
        <ColorButton
          colorValue={colors.green}
          lightColorValue={colors.greenLight}
          hoverColorValue={colors.greenHover}
          currentColor={colorTheme}
        />
      </div>
    </div>
  )
}

export default ColorBox
