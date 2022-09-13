import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useCallback, useContext, useState } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import SettingsLayout from '../../components/layouts/settings-layout'
import Checkbox from '../../components/settings/checkbox'
import InformationButton from '../../components/settings/information-button'
import NavBar from '../../components/settings/nav-bar'
import SettingsButton from '../../components/settings/settings-button'
import { darkTheme, lightTheme } from '../../libs/colors'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'

const Accessibility: NextPage = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { exSmSize, xlSize } = useContext(FontSizeContext)
  const [checkboxState, setCheckboxState] = useState({
    increase_color: false,
    reduce_motion: false,
    receive_image: false,
  })
  const handleCheckboxState = useCallback((e: any) => {
    e.persist()
    setCheckboxState(prev => ({
      ...prev,
      [e.target.id]: [!e.target.checked]
    }))
  }, [])
  const router = useRouter()
  return (
    <SettingsLayout>
      <NavBar />
      <section className={`w-timeline h-screen flex flex-col items-start justify-start py-2 border-r border-l ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
        <div className='px-3 flex items-center mb-5'>
          <button
            onClick={() => router.back()}
            className={`p-2 mr-5 flex items-center justify-center rounded-full duration-200 ${backgroundTheme === 'light' ? 'hover:brightness-95' : backgroundTheme === 'black' ? 'hover:bg-zinc-800' : 'hover:brightness-110'}`}
            style={{
              background: backgroundTheme === 'light'
                ? lightTheme.background
                : backgroundTheme === 'dark'
                  ? darkTheme.background
                  : ''
            }}
          >
            <BsArrowLeft className='w-5 h-5' />
          </button>
          <h1 className='font-bold' style={{ fontSize: `${xlSize}px` }}>
            Accessibility
          </h1>
        </div>
        <span className={`px-3 mb-5 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${exSmSize}px` }}>
          Manage aspects of your Twitter experience such as limiting color contrast and motion. These
          settings affect all the Twitter accounts on this browser.
        </span>
        <div className={`w-full flex flex-col py-2 border-b ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
          <h2 className='font-bold mb-5 px-3' style={{ fontSize: `${xlSize}px` }}>
            Vision
          </h2>
          <Checkbox
            id='increase_color'
            name='Increase color contrast'
            description='Improves legibility by increasing the contrast between text and background colors.'
            hasMoreLink={false}
            isChecked={checkboxState.increase_color}
            handleChecked={handleCheckboxState}
          />
        </div>
        <div className={`w-full flex flex-col py-2 border-b ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
          <h2 className='font-bold mb-5 px-3' style={{ fontSize: `${xlSize}px` }}>
            Motion
          </h2>
          <Checkbox
            id='reduce_motion'
            name='Reduce motion'
            description='Limits the amount of in-app animations, including live engagement counts.'
            hasMoreLink={false}
            isChecked={checkboxState.reduce_motion}
            handleChecked={handleCheckboxState}
          />
          <SettingsButton
            name='Autoplay'
            definition='On celular or Wi-Fi'
            link='/home'
            hasIcon={false}
          />
        </div>
        <div className={`w-full flex flex-col py-2 border-b ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
          <h2 className='font-bold mb-5 px-3' style={{ fontSize: `${xlSize}px` }}>
            Media
          </h2>
          <Checkbox
            id='receive_image'
            name='Receive image description reminder'
            description='Enables a reminder to add image descriptions before a Tweet can be sent.'
            hasMoreLink={false}
            isChecked={checkboxState.receive_image}
            handleChecked={handleCheckboxState}
          />
        </div>
        <div className='flex flex-col py-2 w-full'>
          <h2 className='font-bold px-3 mb-5' style={{ fontSize: `${xlSize}px` }}>
            Learn more about accessibility at Twitter
          </h2>
          <InformationButton
            name='Accessibility at Twitter'
            link='/home'
          />
        </div>
      </section>
    </SettingsLayout>
  )
}

export default Accessibility
