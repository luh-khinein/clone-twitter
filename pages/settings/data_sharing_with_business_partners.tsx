import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useCallback, useContext, useState } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import SettingsLayout from '../../components/layouts/settings-layout'
import Checkbox from '../../components/settings/checkbox'
import NavBar from '../../components/settings/nav-bar'
import { darkTheme, lightTheme } from '../../libs/colors'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'

const DataSharing: NextPage = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { exSmSize, xlSize } = useContext(FontSizeContext)
  const [checkboxState, setCheckboxState] = useState(false)
  const handleCheckboxState = useCallback(() => {
    setCheckboxState(!checkboxState)
  }, [checkboxState])
  const router = useRouter()
  return (
    <SettingsLayout>
      <NavBar />
      <section className={`w-timeline h-screen py-2 flex flex-col items-start justify-start border-r border-l ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
        <div className='px-3 mb-5 flex items-center'>
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
            Date sharing with business partners
          </h1>
        </div>
        <span className={`mb-5 px-3 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${exSmSize}px` }}>
          Allow sharing of additional information with Twitter's business partners.
        </span>
        <Checkbox
          id='data_sharing'
          name='Allow additional information sharing with business partners'
          description="
            Twitter always shares information with business partners as a way to run and improve its 
          products. When enabled, this allows Twitter to share additional information with those partners to 
          help support running Twitter's business, including making Twitter's marketing activities on other 
          sites and apps more relevant for you.
          "
          hasMoreLink={true}
          moreLink='/home'
          isChecked={checkboxState}
          handleChecked={handleCheckboxState}
        />
      </section>
    </SettingsLayout>
  )
}

export default DataSharing
