import React, { useCallback, useContext, useEffect, useState } from 'react'
import { lightTheme, darkTheme } from '../../libs/colors'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'
import CategoryButton from './category-button'
import RowButtons from './row-buttons'

const CategoryButtons: React.FC = () => {
  const { backgroundTheme, colorTheme, hoverColorTheme } = useContext(ThemeContext)
  const { baseSize, xlSize } = useContext(FontSizeContext)
  const [showMoreActived, setShowMore] = useState(false)
  const [translationY, setTranslationY] = useState(270)
  const [showButtons, setShowButtons] = useState([false, false])
  const [elementsLoaded, setElementsLoaded] = useState([false, false])
  const handleShowMore = useCallback(() => {
    setShowMore(!showMoreActived)
  }, [showMoreActived])
  const handleShowButtons = useCallback(() => {
    if (showButtons[0]) {
      setShowButtons([true, true])
    } else {
      setShowButtons([true, false])
    }
  }, [showButtons])

  useEffect(() => {
    if (showButtons[0]) {
      setTranslationY(495)
      setElementsLoaded([true, false])
    }
    if (showButtons[1]) {
      setElementsLoaded([true, true])
    }
  }, [showButtons])

  return (
    <div className='flex flex-col items-start w-full py-2 mb-14' style={{
      background: backgroundTheme === 'light'
        ? lightTheme.background
        : backgroundTheme === 'dark'
          ? darkTheme.background
          : '#000'
    }}>
      <h2 className='font-bold px-5 mb-4' style={{ fontSize: `${xlSize}px` }}>
        Categories
      </h2>
      <div className='w-full flex flex-col items-center px-4'>
        <RowButtons
          names={['Fashion & beauty', 'Outdoors', 'Arts & culture']}
          links={['/i/topics/1', '/i/topics/2', '/i/topics/3']}
          elementLoaded={true}
        />
        <RowButtons
          names={['Animation & comics', 'Business & finance', 'Food']}
          links={['/i/topics/4', '/i/topics/5', '/i/topics/6']}
          elementLoaded={true}
        />
        {showButtons[0] && (
          <>
            <RowButtons
              names={['Travel', 'Entertainment', 'Music']}
              links={['/i/topics/7', '/i/topics/8', '/i/topics/9']}
              elementLoaded={elementsLoaded[0]}
            />
            <RowButtons
              names={['Gaming', 'Careers', 'Family & relationships']}
              links={['/i/topics/10', '/i/topics/11', '/i/topics/12']}
              elementLoaded={elementsLoaded[0]}
            />
          </>
        )}
        {showButtons[1] && (
          <>
            <RowButtons
              names={['Fitness', 'Sports', 'Technology']}
              links={['/i/topics/13', '/i/topics/14', '/i/topics/15']}
              elementLoaded={elementsLoaded[1]}
            />
            <div className='flex w-full items-start'>
              <div className={`flex my-1 items-start w-[189px] duration-1000 ${elementsLoaded[1] ? 'opacity-100' : 'opacity-0'}`}>
                <CategoryButton
                  link='/i/topics/16'
                  name='Science'
                />
              </div>
            </div>
          </>
        )}
      </div>
      {!showButtons[1] && (
        <button
          onMouseEnter={handleShowMore}
          onMouseLeave={handleShowMore}
          onClick={handleShowButtons}
          className='w-timeline p-4 absolute transition-all duration-200'
          style={{
            transform: `translateY(${translationY}px)`,
            color: colorTheme,
            background: showMoreActived
              ? hoverColorTheme
              : '',
            fontSize: `${baseSize}px`
          }}>
          Show more
        </button>
      )}
    </div>
  )
}

export default CategoryButtons
