import React, { useCallback, useContext, useState } from 'react'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'
import Checkbox from './checkbox'

const LanguageSelectorList: React.FC = () => {
  const { backgroundTheme, colorTheme, hoverColorTheme } = useContext(ThemeContext)
  const { smSize } = useContext(FontSizeContext)
  const [hoverShowMore, setHoverShowMore] = useState(false)
  const handleHoverShowMore = useCallback(() => {
    setHoverShowMore(!hoverShowMore)
  }, [hoverShowMore])
  const [languagesSpeak, setLanguagesSpeak] = useState({
    english: true,
  })
  const handleLanguagesSpeak = useCallback((e: any) => {
    e.persist()
    setLanguagesSpeak(prev => ({
      ...prev,
      [e.target.id]: [!e.target.checked]
    }))
  }, [])
  return (
    <div className='w-full flex flex-col mt-5'>
      <div className={`w-full border-b ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
        <Checkbox
          id='english'
          name='English'
          description=''
          hasMoreLink={false}
          isChecked={languagesSpeak.english}
          handleChecked={handleLanguagesSpeak}
        />
      </div>
      <button
        onMouseEnter={handleHoverShowMore}
        onMouseLeave={handleHoverShowMore}
        className='w-full flex items-center justify-center py-2 transition-colors'
        style={{
          background: hoverShowMore ? hoverColorTheme : '',
          color: colorTheme,
          fontSize: `${smSize}px`
        }}
      >
        Show more
      </button>
    </div>
  )
}

export default LanguageSelectorList
