// This is a Modal page
import React, { Dispatch, SetStateAction, useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Modal from 'react-modal'
import { colors, darkTheme, lightTheme } from '../../libs/colors'
import { ThemeContext } from '../../utils/theme'
import { BsPlusLg, BsTwitter } from 'react-icons/bs'
import { IoClose } from 'react-icons/io5'
import { FontSizeContext } from '../../utils/font-size'

Modal.setAppElement('#__next')

interface Props {
  isActive: boolean
  setIsActive: Dispatch<SetStateAction<{
    news: boolean,
    professional: boolean,
    display: boolean,
    keyboard: boolean
  }>>
}

const NewsLetters: React.FC<Props> = ({ isActive, setIsActive }) => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const { baseSize, exXlSize } = useContext(FontSizeContext)
  return (
    <Modal
      isOpen={isActive}
      onRequestClose={() => setIsActive(prev => ({
        ...prev,
        news: false
      }))}
      className='border-none rounded-xl w-min max-h-max'
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
              : '#000'
        }
      }}
    >
      <button
        onClick={() => setIsActive(prev => ({
          ...prev,
          news: false
        }))}
        className={`p-2 m-1 rounded-full ${backgroundTheme === 'light' ? 'hover:brightness-95' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:brighteness-110'} duration-200`}
        style={{
          background: backgroundTheme === 'light'
            ? lightTheme.background
            : backgroundTheme === 'dark'
              ? darkTheme.background
              : '',
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
          <span className='font-bold py-1 tracking-tight' style={{
            fontSize: `${exXlSize}px`
          }}>
            Start a newsletters for free
          </span>
          <div className='flex flex-col py-2 w-[346px]' style={{
            fontSize: `${baseSize}px`
          }}>
            <span className='tracking-tight text-start leading-[18px]'>
              Looking for other ways to reach your audience? <br />
              Ready to get paid for your work? It&apos;s time to try out <br />
              <Link href='/home'>
                <a className='hover:underline' style={{ color: colorTheme }}>
                  &nbsp;@Revue
                </a>
              </Link> - Twitter&apos;s newsletter tool for writers and
              publishers
            </span>
          </div>
          <div className='pl-5 mb-10'>
            <ul className='list-disc tracking-tight' style={{
              fontSize: `${baseSize}px`
            }}>
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

export default NewsLetters
