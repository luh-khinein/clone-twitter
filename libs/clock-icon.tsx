import React from 'react'
import Image from 'next/image'
import { FaPlus } from 'react-icons/fa'

const ClockIcon: React.FC = () => (
  <div className='flex items-center justify-center'>
    <div className='flex rounded-full absolute w-9 h-9 z-10' style={{
      borderWidth: '5px',
      borderColor: '#71c9f8',
    }} />
    <div className='flex rounded-full absolute w-9 h-9' style={{
      background: '#97e3ff'
    }} />
    <Image
      src='/icons/clock/arrow-rounded.png'
      width={36}
      height={36}
      className='absolute bg-none z-20'
      style={{ transform: 'rotate(-80deg)' }}
    />
    <div className='absolute flex z-30' style={{
      height: '10px',
      width: '3px',
      marginBottom: '6px',
      background: '#005fd1'
    }} />
    <div className='absolute flex z-30 ml-2 mt-1' style={{
      height: '3px',
      width: '8px',
      transform: 'rotate(20deg)',
      background: '#005fd1'
    }} />
    <FaPlus
      className='flex absolute'
      style={{
        width: '11px',
        height: '11px',
        marginLeft: '50px',
        marginBottom: '20px',
        color: '#ffad1f'
      }}
    />
    <FaPlus
      className='flex absolute'
      style={{
        top: '4px',
        width: '13px',
        height: '13px',
        marginLeft: '30px',
        color: '#f6809a'
      }}
    />
  </div>
)

export default ClockIcon
