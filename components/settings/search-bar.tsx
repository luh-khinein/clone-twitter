import React, { Dispatch, SetStateAction, useContext, useEffect, useRef, useState } from 'react'
import { RiSearch2Line } from 'react-icons/ri'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'

interface SearchBarValue {
  focus: Dispatch<SetStateAction<boolean>>
}

const SearchBar: React.FC<SearchBarValue> = ({ focus }) => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const { baseSize } = useContext(FontSizeContext)
  const [focusState, setFocusState] = useState(false)
  const refInput = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (document.activeElement === refInput.current) {
      setFocusState(true)
    } else {
      setFocusState(false)
    }
  }, [refInput.current])

  return (
    <label className={`items-center flex w-full ${focusState ? 'justify-start' : 'justify-center'}`}>
      <RiSearch2Line
        className={`absolute ${focusState ? 'ml-2' : 'mr-[120px]'} ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`}
      />
      <input
        ref={refInput}
        onFocus={() => focus(true)}
        placeholder='Search Settings'
        className={`placeholder:text-sm ${focusState ? 'placeholder:text-start text-start' : 'placeholder:text-center text-center'} outline-none w-full py-2 px-6 flex items-center border-2 rounded-full ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'} ${backgroundTheme === 'black' ? 'placeholder:text-zinc-400' : 'placeholder:text-slate-400'}`}
        style={{
          fontSize: `${baseSize}px`,
          borderColor: focusState
            ? colorTheme
            : '',
          caretColor: colorTheme,
        }}
      />
    </label>
  )
}

export default SearchBar
