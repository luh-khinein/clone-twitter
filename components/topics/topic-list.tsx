import React, { useCallback, useContext, useState } from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import { HiOutlinePlus, HiX } from 'react-icons/hi'
import { darkTheme, lightTheme } from '../../libs/colors'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'
import UndoButtonPopup from './undo-button-popup'

interface ButtonValue {
  topic: string
  name: string
}

const TopicButton: React.FC<ButtonValue> = ({ topic, name }) => {
  const { backgroundTheme, colorTheme, hoverColorTheme } = useContext(ThemeContext)
  const { baseSize } = useContext(FontSizeContext)
  const [hoverActived, setHoverActived] = useState(false)
  const [isActived, setIsActived] = useState(false)
  const handleHover = useCallback(() => {
    setHoverActived(!hoverActived)
  }, [hoverActived])
  const handleActived = useCallback(() => {
    setIsActived(!isActived)
  }, [isActived])
  console.log(isActived)

  return (
    <div key={`${topic} - ${name}`} className={`flex items-center w-full m-2 border rounded-full ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`} style={{
      color: backgroundTheme === 'light'
        ? lightTheme.text
        : darkTheme.text
    }}>
      <button
        onClick={handleActived}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        className={`flex items-center justify-between w-full rounded-full py-2 px-3 transition-colors ${isActived ? 'hover:brightness-95' : ''}`}
        style={{
          background: hoverActived && !isActived
            ? hoverColorTheme
            : isActived
              ? colorTheme
              : ''
        }}>
        <span className='font-bold w-max' style={{
          color: isActived ? '#fff' : '',
          fontSize: `${baseSize}px`
        }}>
          {name}
        </span>
        {isActived ? (
          <AiOutlineCheck
            className='w-5 h-5'
            style={{ color: '#fff' }}
          />
        ) : (
          <HiOutlinePlus
            className='w-5 h-5'
            style={{ color: colorTheme }}
          />
        )}
      </button>
    </div>
  )
}

const TopicButtonWithX: React.FC<ButtonValue> = ({ topic, name }) => {
  const { backgroundTheme, hoverColorTheme, colorTheme } = useContext(ThemeContext)
  const { baseSize } = useContext(FontSizeContext)
  const [hoverActived, setHoverActived] = useState(false)
  const [hoverXActived, setHoverXActived] = useState(false)
  const [isActived, setIsActived] = useState(false)
  const [isInactivated, setIsInactivated] = useState(false)
  const handleHover = useCallback(() => {
    setHoverActived(!hoverActived)
  }, [hoverActived])
  const handleXHover = useCallback(() => {
    setHoverXActived(!hoverXActived)
  }, [hoverXActived])
  const handleActived = useCallback(() => {
    setIsActived(!isActived)
  }, [isActived])
  const handleInactivated = useCallback(() => {
    setIsInactivated(true)
  }, [])

  return (
    <>
      <div key={`${topic} - ${name}`} className={`flex m-2 items-center w-full rounded-full ${isActived ? 'border-none' : 'border'} ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'} ${isInactivated ? 'border-opacity-50' : ''}`} style={{
        color: backgroundTheme === 'light'
          ? lightTheme.text
          : darkTheme.text,
      }}>
        <button
          onClick={handleActived}
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
          disabled={isInactivated}
          className={`flex items-center justify-center py-2 w-full ${isActived || isInactivated ? 'rounded-full' : 'rounded-tl-full rounded-bl-full'} transition-colors ${isActived ? 'hover:brightness-95' : ''}`}
          style={{
            backgroundColor: hoverActived && !isActived
              ? hoverColorTheme
              : isActived
                ? colorTheme
                : ''
          }}>
          <div className={`flex items-center justify-between w-full px-3 ${!isActived && !isInactivated ? 'border-r' : 'rounded-full'} ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
            <span className={`${isInactivated ? '' : 'font-bold'} w-max tracking-wide mr-2`} style={{
              color: isActived ? '#fff' : '',
              fontSize: `${baseSize}px`
            }}>
              {name}
            </span>
            {isActived ? (
              <AiOutlineCheck className='w-5 h-5' style={{ color: '#fff' }} />
            ) : !isInactivated && (
              <HiOutlinePlus className='w-5 h-5' style={{ color: colorTheme }} />
            )}
          </div>
        </button>
        {!isActived && !isInactivated && (
          <button
            onClick={handleInactivated}
            onMouseEnter={handleXHover}
            onMouseLeave={handleXHover}
            className='flex items-center justify-center px-3 h-10 rounded-tr-full rounded-br-full transition-colors'
            style={{
              background: hoverXActived
                ? hoverColorTheme
                : ''
            }}>
            <HiX className={`w-5 h-5 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} />
          </button>
        )}
      </div>
      {isInactivated && (
        <UndoButtonPopup
          topic={topic}
          name={name}
          handleInactivated={setIsInactivated}
          selector={"#__next"}
        />
      )}
    </>
  )
}


interface Props {
  topic: string
  names: Array<string>
  hasX: boolean
  keyValue: React.Key | null | undefined
}

const TopicListColumn: React.FC<Props> = ({ topic, names, hasX, keyValue }) => {
  return hasX ? (
    <div key={keyValue} className='w-min px-1'>
      {names.map((name) => (
        <TopicButtonWithX
          topic={topic}
          name={name}
        />
      ))}
    </div>
  ) : (
    <div key={keyValue} className='w-min px-1'>
      {names.map((name) => (
        <TopicButton
          topic={topic}
          name={name}
        />
      ))}
    </div>
  )
}

export default TopicListColumn
