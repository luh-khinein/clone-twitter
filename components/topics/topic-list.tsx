import React, { useCallback, useContext, useState } from 'react'
import { HiOutlinePlus, HiX } from 'react-icons/hi'
import { darkTheme, lightTheme } from '../../libs/colors'
import { ThemeContext } from '../../utils/theme'

interface ButtonValue {
  name: string
}

const TopicButton: React.FC<ButtonValue> = ({ name }) => {
  const { backgroundTheme, colorTheme, hoverColorTheme } = useContext(ThemeContext)
  const [hoverActived, setHoverActived] = useState(false)
  const handleHover = useCallback(() => {
    setHoverActived(!hoverActived)
  }, [hoverActived])

  return (
    <div className={`flex items-center w-full m-2 border rounded-full ${backgroundTheme === 'light' ? 'border-gray-100' : 'border-gray-800'}`} style={{
      color: backgroundTheme === 'light'
        ? lightTheme.text
        : darkTheme.text
    }}>
      <button
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        className='flex items-center justify-between w-full rounded-full py-2 px-3 transition-colors'
        style={{
          background: hoverActived
            ? hoverColorTheme
            : ''
        }}>
        <span className='font-bold w-max'>
          {name}
        </span>
        <HiOutlinePlus
          className='w-5 h-5'
          style={{ color: colorTheme }}
        />
      </button>
    </div>
  )
}

const TopicButtonWithX: React.FC<ButtonValue> = ({ name }) => {
  const { backgroundTheme, hoverColorTheme, colorTheme } = useContext(ThemeContext)
  const [hoverActived, setHoverActived] = useState(false)
  const [hoverXActived, setHoverXActived] = useState(false)
  const handleHover = useCallback(() => {
    setHoverActived(!hoverActived)
  }, [hoverActived])
  const handleXHover = useCallback(() => {
    setHoverXActived(!hoverXActived)
  }, [hoverXActived])

  return (
    <div className={`flex m-2 items-center w-full border rounded-full ${backgroundTheme === 'light' ? 'border-gray-100' : 'border-gray-800'}`} style={{
      color: backgroundTheme === 'light'
        ? lightTheme.text
        : darkTheme.text
    }}>
      <button
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        className='flex items-center justify-center py-2 w-full rounded-tl-full rounded-bl-full transition-colors'
        style={{
          backgroundColor: hoverActived
            ? hoverColorTheme
            : '',
        }}>
        <div className={`flex items-center justify-between w-full px-3 border-r ${backgroundTheme === 'light' ? 'border-gray-100' : 'border-gray-800'}`}>
          <span className='font-bold w-max text-base tracking-wide mr-2'>
            {name}
          </span>
          <HiOutlinePlus className='w-5 h-5' style={{ color: colorTheme }} />
        </div>
      </button>
      <button
        onMouseEnter={handleXHover}
        onMouseLeave={handleXHover}
        className='flex items-center justify-center px-3 h-10 rounded-tr-full rounded-br-full transition-colors'
        style={{
          background: hoverXActived
            ? hoverColorTheme
            : ''
        }}>
        <HiX className='w-5 h-5 text-slate-400' />
      </button>
    </div>
  )
}


interface Props {
  names: Array<string>
  hasX: boolean
}

const TopicListColumn: React.FC<Props> = ({ names, hasX }) => {
  return hasX ? (
    <div className='w-min px-1'>
      {names.map((name) => (
        <TopicButtonWithX
          name={name}
        />
      ))}
    </div>
  ) : (
    <div className='w-min px-1'>
      {names.map((name) => (
        <TopicButton
          name={name}
        />
      ))}
    </div>
  )
}

export default TopicListColumn
