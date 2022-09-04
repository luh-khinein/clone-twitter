// This is a Modal page
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import Image from 'next/image'
import Modal from 'react-modal'
import { colors, darkTheme, lightTheme } from '../../libs/colors'
import { ThemeContext } from '../../utils/theme'
import { BsPlusLg, BsTwitter } from 'react-icons/bs'
import { IoClose } from 'react-icons/io5'

Modal.setAppElement('#__next')

const NewsLetters: React.FC = () => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const router = useRouter()
  return (
    <Modal
      isOpen={!!router.query.newsletters}
      onRequestClose={() => router.back()}
      className='border-none rounded-xl w-min max-h-max'
      overlayElement={(props, contentElement) => (
        <div {...props} className='flex flex-col items-center pt-12'>
          {contentElement}
        </div>
      )}
      style={{
        overlay: {
          zIndex: 30,
          background: 'rgba(0,0,0,0.5)'
        },
        content: {
          background: backgroundTheme === 'light'
            ? lightTheme.background
            : backgroundTheme === 'dark'
              ? darkTheme.background
              : '#000'
        }
      }}
    >
      <button
        onClick={() => router.back()}
        className={`p-2 m-1 rounded-full ${backgroundTheme === 'light' ? 'hover:brightness-95' : 'hover:brighteness-110'} duration-200`}
        style={{
          background: backgroundTheme === 'light'
            ? lightTheme.background
            : backgroundTheme === 'dark'
              ? darkTheme.background
              : '#000',
          color: backgroundTheme === 'light'
            ? lightTheme.text
            : darkTheme.text
        }}>
        <IoClose className='w-6 h-6' />
      </button>
      <div className='flex items-center pb-20' style={{
        color: backgroundTheme === 'light'
          ? lightTheme.text
          : darkTheme.text
      }}>
        <div className='flex flex-col px-28 items-start justify-center'>
          <div className='flex items-center w-max'>
            <BsTwitter className='w-14 h-14' style={{ color: colors.default }} />
            <BsPlusLg className='w-4 h-4 text-slate-300 mx-2' />
            <Image
              src='/assets/revue-logo.svg'
              width={124}
              height={60}
              alt='Revue logo'
            />
          </div>
          <span className='text-2xl font-bold py-1 tracking-tight'>
            Start a newsletters for free
          </span>
          <div className='flex flex-col py-2 w-[346px]'>
            <span className='tracking-tight text-start leading-[18px]'>
              Looking for other ways to reach your audience? <br />
              Ready to get paid for your work? It's time to try out <br />
              <a href='/home' className='hover:underline' style={{ color: colorTheme }}>
                &nbsp;@Revue
              </a> - Twitter's newsletter tool for writers and
              publishers
            </span>
          </div>
          <div className='pl-5 mb-10'>
            <ul className='list-disc tracking-tight'>
              <li>
                Compose and schedule newsletters
              </li>
              <li>
                Embed Tweets
              </li>
              <li>
                Import email lists
              </li>
              <li>
                Analyze engagement
              </li>
              <li>
                Earn money from paid subscribers
              </li>
            </ul>
          </div>
          <button className='rounded-full py-3 w-full flex items-center justify-center text-white font-bold text-lg hover:brightness-95 duration-200' style={{ background: colorTheme }}>
            Find out more
          </button>
        </div>
      </div>
    </Modal>
  )
}
/* 
*/

export default NewsLetters
