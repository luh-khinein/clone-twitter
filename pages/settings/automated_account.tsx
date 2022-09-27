// This is a modal page
import { useRouter } from 'next/router'
import React, { Dispatch, SetStateAction, useContext } from 'react'
import Image from 'next/image'
import { BsTwitter } from 'react-icons/bs'
import { IoClose } from 'react-icons/io5'
import Modal from 'react-modal'
import { darkTheme, lightTheme } from '../../libs/colors'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'

Modal.setAppElement('#__next')

interface Props {
  isActive: boolean
  setIsActive: Dispatch<SetStateAction<boolean>>
}

const AutomatedAccounts: React.FC<Props> = ({ isActive, setIsActive }) => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { baseSize, xlSize, exXlSize } = useContext(FontSizeContext)
  const router = useRouter()
  return (
    <Modal
      isOpen={isActive}
      onRequestClose={() => {
        setIsActive(false)
        router.back()
      }}
      className='border-none rounded-xl max-w-max max-h-max'
      overlayElement={(props, contentElement) => (
        <div {...props} className='flex flex-col items-center'>
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
      <div className='w-timeline h-max flex flex-col overflow-y-scroll max-h-[700px]'>
        <div className='flex w-full items-center p-2'>
          <button
            onClick={() => {
              setIsActive(false)
              router.back()
            }}
            className={`p-2 rounded-full absolute ${backgroundTheme === 'light' ? 'hover:brightness-95' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:brightness-110'} duration-200`}
            style={{
              background: backgroundTheme === 'light'
                ? lightTheme.background
                : backgroundTheme === 'dark'
                  ? darkTheme.background
                  : ''
            }}
          >
            <IoClose className='w-6 h-6' />
          </button>
          <div className='w-full justify-center flex' style={{
            color: backgroundTheme === 'light'
              ? lightTheme.text
              : darkTheme.text
          }}>
            <BsTwitter className='w-7 h-7' />
          </div>
        </div>
        <div className='w-full flex flex-col'>
          <div className='px-8 py-14 pb-20 flex w-full' style={{
            background: backgroundTheme === 'light'
              ? '#009499'
              : '#00c9d1',
            clipPath: 'ellipse(100% 100% at 38% 0%)'
          }}>
            <h1 className='font-bold text-white text-3xl'>
              Automated Account Labels
            </h1>
          </div>
        </div>
        <div className='px-8 w-full flex flex-col mt-10'>
          <h2 className='font-bold' style={{ fontSize: `${exXlSize}px` }}>
            What&apos;s an automated account?
          </h2>
          <span className={`w-full mt-1 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${baseSize}px` }}>
            Autmated accounts are programmed to perform  certain actions automatically through th Twitter API.
            Like Tweeting a region&apos;s weather conditions, for example. They&apos;re created and managed by other people on Twitter.
          </span>
        </div>
        <div className='w-full flex justify-center mt-14' style={{
          background: backgroundTheme === 'light'
            ? '#e8ffff'
            : ''
        }}>
          <Image
            src='/assets/automated-image-1.png'
            width={326}
            height={249}
            alt=''
          />
        </div>
        <span className={`w-full px-8 my-10 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${baseSize}px` }}>
          Labels let the world know who&apos;s managing the automated account. Once an automated account
          owner has connected their managing account, a label will
          appear on the automated account profile and Tweets.
        </span>
        <div className='w-full py-4 flex justify-center' style={{
          background: backgroundTheme === 'light'
            ? '#e8ffff'
            : ''
        }}>
          <Image
            src='/assets/automated-image-2.png'
            width={329}
            height={175}
            alt=''
          />
        </div>
        <div className='w-full px-8 my-10'>
          <h2 className='font-bold' style={{ fontSize: `${exXlSize}px` }}>
            Do I need to label my automated accounts?
          </h2>
          <span className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${baseSize}px` }}>
            Yes, all automated accounts need to be labled. This is required under our&nbsp;
            <strong className='underline'>new roles.</strong>
          </span>
        </div>
        <div className='w-full px-8 my-10'>
          <h2 className='font-bold' style={{ fontSize: `${exXlSize}px` }}>
            How do I label my automated account?
          </h2>
          <div className='flex items-center mt-8'>
            <div className='p-4 flex items-center justify-center font-bold rounded-[100%]' style={{
              fontSize: `${exXlSize}px`,
              color: backgroundTheme === 'light' ? '#fff' : '#000',
              background: backgroundTheme === 'light' ? '#000' : '#fff'
            }}>
              <span className='w-5 h-5 flex items-center justify-center'>
                1
              </span>
            </div>
            <div className='ml-4 flex flex-col'>
              <span className='font-bold' style={{ fontSize: `${xlSize}px` }}>
                Create a managing account
              </span>
              <span className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${baseSize}px` }}>
                A managing account is the human-run account responsible for the automated account.
              </span>
            </div>
          </div>
          <div className='flex items-center mt-4'>
            <div className='p-4 flex items-center justify-center font-bold rounded-[100%]' style={{
              fontSize: `${exXlSize}px`,
              color: backgroundTheme === 'light' ? '#fff' : '#000',
              background: backgroundTheme === 'light' ? '#000' : '#fff'
            }}>
              <span className='w-5 h-5 flex items-center justify-center'>
                2
              </span>
            </div>
            <div className='ml-4 flex flex-col'>
              <span className='font-bold' style={{ fontSize: `${xlSize}px` }}>
                Connect your managing and automated acccount
              </span>
              <span className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${baseSize}px` }}>
                Connect your accounts from the Automation page in your settings.
              </span>
            </div>
          </div>
          <div className='flex items-center my-4'>
            <div className='p-4 flex items-center justify-center font-bold rounded-[100%]' style={{
              fontSize: `${exXlSize}px`,
              color: backgroundTheme === 'light' ? '#fff' : '#000',
              background: backgroundTheme === 'light' ? '#000' : '#fff'
            }}>
              <span className='w-5 h-5 flex items-center justify-center'>
                3
              </span>
            </div>
            <div className='ml-4 flex flex-col'>
              <span className='font-bold' style={{ fontSize: `${xlSize}px` }}>
                Your account is labeled!
              </span>
              <span className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${baseSize}px` }}>
                Once the accounts are connected, the automated account will have a label.
              </span>
            </div>
          </div>
          <span className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${baseSize}px` }}>
            Learn more on the&nbsp;<strong className='underline'>automated account label FAQ</strong> page.
          </span>
        </div>
        <div className='w-full px-8'>
          <button className='w-full py-3 mb-10 font-bold text-white flex items-center justify-center rounded-full duration-200 hover:brightness-95' style={{
            background: backgroundTheme === 'light'
              ? '#009499'
              : '#00c9d1',
            fontSize: `${xlSize}px`
          }}>
            Got it
          </button>
        </div>
      </div>
    </Modal>
  )
}

export default AutomatedAccounts
