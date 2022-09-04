// This is a Modal page
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import Image from 'next/image'
import Modal from 'react-modal'
import { darkTheme, lightTheme } from '../../../libs/colors'
import { ThemeContext } from '../../../utils/theme'
import { IoClose } from 'react-icons/io5'
import Link from 'next/link'
import { BsTwitter } from 'react-icons/bs'

Modal.setAppElement('#__next')

const ConvertToProfessional: React.FC = () => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const router = useRouter()
  return (
    <Modal
      isOpen={!!router.query.professional}
      onRequestClose={() => router.back()}
      className='border-none rounded-xl w-min max-h-max'
      overlayElement={(props, contentElement) => (
        <div {...props} className='flex flex-col items-center pt-16'>
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
      <div className='w-timeline h-max flex flex-col'>
        <div className='flex w-full items-center p-2'>
          <button
            onClick={() => router.back()}
            className={`p-2 rounded-full absolute ${backgroundTheme === 'light' ? 'hover:brightness-95' : 'hover:brightness-110'} duration-200`}
            style={{
              background: backgroundTheme === 'light'
                ? lightTheme.background
                : backgroundTheme === 'dark'
                  ? darkTheme.background
                  : '#000'
            }}
          >
            <IoClose className='w-6 h-6' />
          </button>
          <div className='w-full justify-center flex' style={{
            color: backgroundTheme === 'light'
              ? lightTheme.text
              : darkTheme.text
          }}>
            <BsTwitter className='w-9 h-9' />
          </div>
        </div>
        <Image
          src='/assets/professional-image.png'
          width={600}
          height={300}
          alt='Dog professional'
        />
        <div className='flex flex-col items-start py-2 px-20'>
          <span className='font-bold text-3xl tracking-tight'>
            Twitter for Professionals
          </span>
          <span className='tracking-tight text-slate-600 py-1 leading-5'>
            Get access to the tools you need to better connect with your
            audience, grow your brand, and increase your profits.
          </span>
          <span className='tracking-tight text-slate-600 py-3 leading-5'>
            By tapping "Agree & continue", you are agreeing to our <br />
            <Link href='/home'>
              <a className='hover:underline' style={{ color: colorTheme }}>
                Professional Account policy.
              </a>
            </Link>
          </span>
          <button className={`w-full py-5 rounded-full mt-10 mb-1 ${backgroundTheme === 'light' ? 'hover:brightness-110' : 'hover:brightness-95'}`} style={{
            color: backgroundTheme === 'light'
              ? '#fff'
              : '#000',
            background: backgroundTheme === 'light'
              ? '#000'
              : '#fff'
          }}>
            Agree & Continue
          </button>
        </div>
      </div>
    </Modal >
  )
}

export default ConvertToProfessional
