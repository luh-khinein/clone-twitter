import type { NextPage } from 'next'
import React, { useContext } from 'react'
import { BsBrush, BsEyeSlash } from 'react-icons/bs'
import { FaGlobeAmericas } from 'react-icons/fa'
import SettingsLayout from '../../components/layouts/settings-layout'
import NavBar from '../../components/settings/nav-bar'
import SettingsButton from '../../components/settings/settings-button'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'

const Accessibility: NextPage = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { exSmSize, xlSize } = useContext(FontSizeContext)
  return (
    <SettingsLayout>
      <NavBar />
      <section className={`w-timeline h-screen py-2 flex flex-col items-start justify-start border-l border-r ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
        <div className='flex flex-col mb-5 px-3'>
          <h1 className='font-bold mb-5' style={{ fontSize: `${xlSize}px` }}>
            Accessibility, display and languages
          </h1>
          <span style={{ fontSize: `${exSmSize}px` }}>
            Manage how Twitter content is displayed to you.
          </span>
        </div>
        <SettingsButton
          name='Accessibility'
          definition='Manage aspects of your Twitter experience such as limiting color contrast and motion.'
          link='/home'
          icon={<BsEyeSlash />}
        />
        <SettingsButton
          name='Display'
          definition='Manage your font size, color, and background. These settings affect all the Twitter accounts on this browser.'
          link='/home'
          icon={<BsBrush />}
        />
        <SettingsButton
          name='Languages'
          definition='Manage which languages are used to personalize your Twitter experience.'
          link='/home'
          icon={<FaGlobeAmericas />}
        />
        <SettingsButton
          name='Data usage'
          definition='Limit how Twitter uses some of your network data. These settings affect all the Twitter accounts on this browser.'
          link='/home'
          icon={<BsEyeSlash />}
        />
      </section>
    </SettingsLayout>
  )
}

export default Accessibility
