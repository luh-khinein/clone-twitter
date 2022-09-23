import React, { useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FontSizeContext } from '../../utils/font-size'

interface Props {
  link: string
  topic: string
  time: string
  context: string
  image: string
}

const TopTrendingNews: React.FC<Props> = ({ link, topic, time, context, image }) => {
  const { smSize, xlSize } = useContext(FontSizeContext)
  return (
    <Link href={link}>
      <a className='mt-20 flex flex-col items-center bg-black'>
        <div className='cursor-pointer flex items-end'>
          <div className='absolute z-[6]'>
            <div className='flex flex-col m-4'>
              <span className='text-white' style={{
                fontSize: `${smSize}px`
              }}>
                {topic} · {time}
              </span>
              <span className='text-white' style={{
                fontSize: `${xlSize}px`
              }}>
                <strong>
                  {context}
                </strong>
              </span>
            </div>
          </div>
          <div className='w-[598px] h-[340px] z-[5] absolute bg-gradient-to-t from-black' />
          <Image
            src={image}
            alt='Mr President'
            className='z-[4]'
            width={598}
            height={340}
          />
        </div>
      </a>
    </Link>
  )
}

export default TopTrendingNews
