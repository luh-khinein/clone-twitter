import React, { useCallback, useContext, useState } from 'react'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'
import AddURLModal from '../modal/moments-add-url'

const NewMomentsEmpty: React.FC = () => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const { baseSize } = useContext(FontSizeContext)
  const [urlModal, setURLModal] = useState(false)
  const handleURLModal = useCallback(() => {
    setURLModal(true)
  }, [])
  return (
    <div className='w-full flex flex-col items-center justify-center mt-20 px-32'>
      <div className='flex flex-col mb-5'>
        <span className='font-bold text-3xl mb-1'>
          Make your Moment
        </span>
        <span className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{
          fontSize: `${baseSize}px`
        }}>
          Start by adding Tweets using the import tools or entering a Tweet URL.
        </span>
      </div>
      <button
        onClick={handleURLModal}
        className='px-8 py-4 flex items-center justify-center rounded-full text-white text-lg font-bold duration-200 hover:brightness-110'
        style={{
          background: colorTheme
        }}
      >
        Add Tweet URL
      </button>
      <AddURLModal
        isActive={urlModal}
        setIsActive={setURLModal}
      />
    </div>
  )
}

export default NewMomentsEmpty
