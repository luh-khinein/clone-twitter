import React, { useContext } from 'react'
import { RiSearch2Line } from 'react-icons/ri'
import { darkTheme, lightTheme } from '../libs/colors'
import { ThemeContext } from '../utils/theme'

const SearchBar: React.FC = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  return (
    <div className={`min-w-full px-2 flex items-center rounded-full ${backgroundTheme === 'light' ? 'bg-gray-100' : backgroundTheme === 'black' ? 'bg-zinc-800' : 'bg-slate-800'}`} style={{
      color: backgroundTheme === 'light'
        ? lightTheme.text
        : darkTheme.text,
    }}>
      <div className={`p-3 ${backgroundTheme === 'dark' ? 'text-slate-600' : backgroundTheme === 'black' ? 'text-zinc-600' : ''}`}>
        <RiSearch2Line />
      </div>
      <input
        type='search'
        placeholder='Search Twitter'
        className={`placeholder:text-sm border-none outline-none w-full ${backgroundTheme === 'light' ? 'bg-gray-100 placeholder:text-black' : backgroundTheme === 'black' ? 'bg-zinc-800 placeholder:text-zinc-600' : 'bg-slate-800 placeholder:text-slate-600'}`}
      />
    </div>
  )
}

export default SearchBar
