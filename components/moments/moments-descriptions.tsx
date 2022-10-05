import React, { useCallback, useContext, useState } from 'react'
import { HiOutlinePencil } from 'react-icons/hi'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'
import EditDescriptionModal from '../modal/moments-edit-description'

interface DescriptionValue {
  title: string
  description: string
}

const MomentsDescription: React.FC<DescriptionValue> = ({ title, description }) => {
  const { backgroundTheme, colorTheme, hoverColorTheme } = useContext(ThemeContext)
  const { baseSize, xlSize } = useContext(FontSizeContext)
  const [hoverButton, setHoverButton] = useState(false)
  const handleHoverButton = useCallback(() => {
    setHoverButton(!hoverButton)
  }, [hoverButton])
  const [editModal, setEditModal] = useState(false)
  const handleEditModal = useCallback(() => {
    setEditModal(true)
  }, [])
  return (
    <div className={`w-full flex flex-col px-3 mt-[330px] py-2 border-b ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
      <div className='flex items-center w-full justify-between mb-2'>
        <h1 className={`font-bold ${title !== '' ? '' : backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{
          fontSize: `${xlSize}px`
        }}>
          {title === '' ? (<>Add a title</>) : (<>{title}</>)}
        </h1>
        <button
          onMouseEnter={handleHoverButton}
          onMouseLeave={handleHoverButton}
          onClick={handleEditModal}
          className='p-2 flex items-center justify-center rounded-full transition-all'
          style={{
            color: colorTheme,
            background: hoverButton ? hoverColorTheme : ''
          }}
        >
          <HiOutlinePencil className='w-4 h-4' />
        </button>
      </div>
      <div className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${baseSize}px` }}>
        Write a short description about this Moment
      </div>
      <EditDescriptionModal
        isActive={editModal}
        setIsActive={setEditModal}
        title={title}
        description={description}
      />
    </div>
  )
}

export default MomentsDescription
