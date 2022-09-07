import React, { useContext } from 'react'
import Link from 'next/link'
import { ThemeContext } from '../../utils/theme'
import { FontSizeContext } from '../../utils/font-size'

interface CategoryButtonValue {
  link: string
  name: string
}

const CategoryButton: React.FC<CategoryButtonValue> = ({ link, name }) => {
  const { colorTheme } = useContext(ThemeContext)
  const { baseSize } = useContext(FontSizeContext)
  return (
    <Link href={link}>
      <a className='flex items-center justify-center rounded-xl text-white font-bold py-10 mx-1 w-full hover:brightness-95 duration-200' style={{
        background: colorTheme,
        fontSize: `${baseSize}px`
      }}>
        {name}
      </a>
    </Link>
  )
}

export default CategoryButton
