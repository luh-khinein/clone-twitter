import React, { useContext } from 'react'
import Link from 'next/link'
import { ThemeContext } from '../../utils/theme'

interface CategoryButtonValue {
  link: string
  name: string
}

const CategoryButton: React.FC<CategoryButtonValue> = ({ link, name }) => {
  const { colorTheme } = useContext(ThemeContext)
  return (
    <Link href={link}>
      <a className='flex items-center justify-center rounded-xl text-white font-bold py-10 mx-1 w-full text-base hover:brightness-95 duration-200' style={{
        background: colorTheme
      }}>
        {name}
      </a>
    </Link>
  )
}

export default CategoryButton
