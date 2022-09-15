import React, { useContext } from 'react'
import { colors, darkTheme } from '../../libs/colors'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'
import ColorButton from '../display/color-button'

const DisplayColorBox: React.FC = () => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const { xlSize } = useContext(FontSizeContext)
  return (
    <div className='w-full flex flex-col justify-start mb-1'>
      <h2 className='font-bold mb-1' style={{
        fontSize: `${xlSize}px`
      }}>
        Color
      </h2>
      <div className='flex items-center justify-between rounded-2xl px-5 py-2'>
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

export default DisplayColorBox
