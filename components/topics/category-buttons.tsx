import React, { useCallback, useContext, useEffect, useState } from 'react'
import { lightTheme, darkTheme } from '../../libs/colors'
import { ThemeContext } from '../../utils/theme'
import CategoryButton from './category-button'
import RowButtons from './row-buttons'

const CategoryButtons: React.FC = () => {
  const { backgroundTheme, colorTheme, hoverColorTheme } = useContext(ThemeContext)
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
    <div className='flex flex-col items-start w-full py-2' style={{
      background: backgroundTheme === 'light'
        ? lightTheme.background
        : backgroundTheme === 'dark'
          ? darkTheme.background
          : '#000'
    }}>
      <h2 className='text-xl font-bold px-5 mb-4'>
        Categories
      </h2>
      <div className='w-full flex flex-col items-center px-4'>
        <RowButtons
          names={['Fashion & beauty', 'Outdoors', 'Arts & culture']}
          links={['/home', '/home', '/home']}
          elementLoaded={true}
        />
        <RowButtons
          names={['Animation & comics', 'Business & finance', 'Food']}
          links={['/home', '/home', '/home']}
          elementLoaded={true}
        />
        {showButtons[0] && (
          <>
            <RowButtons
              names={['Travel', 'Entertainment', 'Music']}
              links={['/home', '/home', '/home']}
              elementLoaded={elementsLoaded[0]}
            />
            <RowButtons
              names={['Gaming', 'Careers', 'Family & relationships']}
              links={['/home', '/home', '/home']}
              elementLoaded={elementsLoaded[0]}
            />
          </>
        )}
        {showButtons[1] && (
          <>
            <RowButtons
              names={['Fitness', 'Sports', 'Technology']}
              links={['/home', '/home', '/home']}
              elementLoaded={elementsLoaded[1]}
            />
            <div className='flex w-full items-start'>
              <div className={`flex my-1 items-start w-[189px] duration-1000 ${elementsLoaded[1] ? 'opacity-100' : 'opacity-0'}`}>
                <CategoryButton
                  link='/home'
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
              : ''
          }}>
          Show more
        </button>
      )}
    </div>
  )
}

export default CategoryButtons
