import React from 'react'
import Image from 'next/image'
import { FiCamera } from 'react-icons/fi'

interface Props {
  wallpaper: string
}

const MomentsWallpaper: React.FC<Props> = ({ wallpaper }) => {
  return (
    <div className='w-full flex flex-col'>
      {wallpaper !== ''
        ? (
          <div className={`absolute w-[110px] h-[110px] rounded-full flex items-center justify-center text-slate-500 bg-slate-300`}>
            <Image
              src={wallpaper}
              alt='wallpaper'
              width={600}
              height={330}
            />
            <button
              className='bg-[rgba(15,20,25,.5)] rounded-full p-2 duration-200 hover:bg-[rgba(39,44,48,.75)]'
            >
              <FiCamera className='w-5 h-5 text-white' />
            </button>
          </div>
        )
        : (
          <div className='absolute mb-5 flex w-full max-w-[598px] h-[330px] items-center justify-center bg-[rgba(0,0,0,.3)]'>
            <button
              className='bg-[rgba(15,20,25,.5)] rounded-full p-2 duration-200 hover:bg-[rgba(39,44,48,.75)]'
            >
              <FiCamera className='w-5 h-5 text-white' />
            </button>
          </div>
        )}
    </div>
  )
}

export default MomentsWallpaper 
