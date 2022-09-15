import type { NextPage } from 'next'
import React, { useContext } from 'react'
import SettingsLayout from '../../components/layouts/settings-layout'
import InformationButton from '../../components/settings/information-button'
import NavBar from '../../components/settings/nav-bar'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'

const AdditionalResources: NextPage = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { exSmSize, xlSize } = useContext(FontSizeContext)
  return (
    <SettingsLayout>
      <NavBar />
      <section className={`w-timeline h-full py-2 pb-10 flex flex-col items-start justify-start border-r border-l ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
        <div className='flex flex-col px-3 mb-5'>
          <h1 className='font-bold mb-5' style={{ fontSize: `${xlSize}px` }}>
            Additional resources
          </h1>
          <span className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${exSmSize}px` }}>
            Check out other places for helpful information to learn more about Twitter products and services.
          </span>
        </div>
        <div className={`w-full flex flex-col items-start justify-start border-b py-2 mb-5 ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
          <h2 className='font-bold mb-5 px-3' style={{ fontSize: `${xlSize}px` }}>
            Release notes
          </h2>
          <InformationButton
            name='Release notes'
            link='/en/demo-page'
          />
        </div>
        <div className={`w-full flex flex-col items-start justify-start border-b py-2 mb-5 ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
          <h2 className='font-bold mb-5 px-3' style={{ fontSize: `${xlSize}px` }}>
            Legal
          </h2>
          <InformationButton
            name='Ads info'
            link='/en/demo-page'
          />
          <InformationButton
            name='Cookie Policy'
            link='/en/demo-page'
          />
          <InformationButton
            name='Privacy Policy'
            link='/en/demo-page'
          />
          <InformationButton
            name='Terms of Service'
            link='/en/demo-page'
          />
        </div>
        <div className='w-full flex flex-col items-start justify-start pb-10 py-2'>
          <h2 className='font-bold px-3 mb-5' style={{ fontSize: `${xlSize}px` }}>
            Miscellaneous
          </h2>
          <InformationButton
            name='About'
            link='https://about.twitter.com/pt'
          />
          <InformationButton
            name='Accessibility'
            link='/en/demo-page'
          />
          <InformationButton
            name='Advertising'
            link='/en/demo-page'
          />
          <InformationButton
            name='Blog'
            link='/en/demo-page'
          />
          <InformationButton
            name='Brand Resources'
            link='/en/demo-page'
          />
          <InformationButton
            name='Careers'
            link='/en/demo-page'
          />
          <InformationButton
            name='Developers'
            link='/en/demo-page'
          />
          <InformationButton
            name='Directory'
            link='/en/demo-page'
          />
          <InformationButton
            name='Help Center'
            link='/en/demo-page'
          />
          <InformationButton
            name='Marketing'
            link='/en/demo-page'
          />
          <InformationButton
            name='Status'
            link='/en/demo-page'
          />
          <InformationButton
            name='Twitter for Business'
            link='/en/demo-page'
          />
        </div>
      </section>
    </SettingsLayout>
  )
}

export default AdditionalResources
