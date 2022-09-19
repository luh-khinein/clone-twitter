import React from 'react'
import Image from 'next/image'
import { FaPlus } from 'react-icons/fa'

const SparkleIcon: React.FC = () => (
  <div className='flex items-center justify-center'>
    <Image
      src='/icons/sparkle/sparkles-body.png'
      width={40}
      height={40}
      className='absolute bg-none z-20'
    />
    <FaPlus
      className='flex absolute'
      style={{
        width: '13px',
        height: '13px',
        marginRight: '30px',
        marginTop: '30px',
        color: '#ffad1f'
      }}
    />
    <FaPlus
      className='flex absolute'
      style={{
        top: '8px',
        width: '18px',
        height: '18px',
        marginRight: '45px',
        color: '#f6809a'
      }}
    />
  </div>
)

export default SparkleIcon
