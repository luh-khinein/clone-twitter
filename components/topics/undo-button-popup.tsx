import React, { Dispatch, SetStateAction, useContext, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { ThemeContext } from '../../utils/theme'

interface Props {
  topic: string
  name: string
  selector: string
  handleInactivated: Dispatch<SetStateAction<boolean>>
}

const UndoButtonPopup: React.FC<Props> = ({ topic, name, selector, handleInactivated }) => {
  const { colorTheme } = useContext(ThemeContext)
  const [isActived, setIsActived] = useState(true)

  useEffect(() => {
    setInterval(() => {
      setIsActived(false)
    }, 5000)
  }, [])

  return createPortal(
    <div className={`fixed min-w-full min-h-full ${isActived ? 'flex' : 'hidden'} transition-all justify-center items-center z-20`}>
      <div key={`${topic} - ${name}`} className='w-max fixed bottom-1.5 px-5 py-3 justify-between items-center flex rounded-md' style={{
        background: colorTheme,
        color: '#fff'
      }}>
        <span>
          We won't suggest this Topic anymore.
        </span>
        <button onClick={() => handleInactivated(false)} className='font-bold mx-4 hover:underline'>
          Undo
        </button>
      </div>
    </div>,
    document.querySelector(selector)!
  )
}

export default UndoButtonPopup
