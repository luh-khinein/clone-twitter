import React, { useContext } from 'react'
import Link from 'next/link'
import { darkTheme, lightTheme } from '../../libs/colors'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'
import { HiCheck } from 'react-icons/hi'

interface CheckboxValue {
  id: string
  name: string
  description: string
  hasMoreLink: boolean
  moreLink?: string
  isChecked: boolean
  handleChecked: (e: any) => void
}

const Checkbox: React.FC<CheckboxValue> = ({ id, name, description, isChecked, handleChecked, moreLink, hasMoreLink }) => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const { exSmSize, baseSize } = useContext(FontSizeContext)
  return (
    <div className='px-3 flex flex-col mb-3 w-full'>
      <div className='flex items-center justify-between w-full'>
        <span style={{ fontSize: `${baseSize}px` }}>
          {name}
        </span>
        <div id={id} onClick={handleChecked} className={`p-2 rounded-full flex items-center justify-center duration-200 cursor-pointer ${backgroundTheme === 'light' ? 'hover:brightness-95' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:brightness-110'}`} style={{
          background: backgroundTheme === 'light'
            ? lightTheme.background
            : backgroundTheme === 'dark'
              ? darkTheme.background
              : ''
        }}>
          <input
            id={id}
            type='checkbox'
            checked={isChecked}
            className={`w-6 h-6 appearance-none rounded-md cursor-pointer outline-none border-2 ${backgroundTheme === 'black' ? 'border-zinc-400' : 'border-slate-400'} checked:bg-blue-500 checked:border-none transition-all`}
          />
          {isChecked && (<HiCheck className='absolute' />)}
        </div>
      </div>
      <span className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${exSmSize}px` }}>
        {description}
        {hasMoreLink && (
          <Link href={moreLink ? moreLink : '/'}>
            <a target='_blank' style={{ color: colorTheme }}>
              &nbsp;Learn more
            </a>
          </Link>
        )}
      </span>
    </div>
  )
}

export default Checkbox
