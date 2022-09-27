// This is a Modal page
import { useRouter } from 'next/router'
import React, { Dispatch, SetStateAction, useContext } from 'react'
import Modal from 'react-modal'
import PostBox from '../../components/post-box'
import { darkTheme, lightTheme } from '../../libs/colors'
import { ThemeContext } from '../../utils/theme'

Modal.setAppElement('#__next')

interface Props {
  isActive: boolean
  setIsActive: Dispatch<SetStateAction<boolean>>
  message?: string
}

const TweetPopup: React.FC<Props> = ({ isActive, setIsActive, message }) => {
  const { backgroundTheme } = useContext(ThemeContext)
  const router = useRouter()
  return (
    <Modal
      isOpen={isActive}
      onRequestClose={() => {
        setIsActive(false)
        router.back()
      }}
      className='border-none rounded-xl p-2 max-w-max max-h-max'
      overlayElement={(props, contentElement) => (
        <div {...props} className='flex flex-col items-center pt-12'>
          {contentElement}
        </div>
      )}
      style={{
        overlay: {
          zIndex: 30,
          background: backgroundTheme === 'light'
            ? 'rgba(0,0,0,0.5)'
            : 'rgba(255,255,255,0.2)'
        },
        content: {
          background: backgroundTheme === 'light'
            ? lightTheme.background
            : backgroundTheme === 'dark'
              ? darkTheme.background
              : '#000',
        }
      }}
    >
      <PostBox autoTextAreaRows={false} rows={5} message={message} />
    </Modal>
  )
}

export default TweetPopup
