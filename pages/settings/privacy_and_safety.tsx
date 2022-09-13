import type { NextPage } from 'next'
import React, { useContext } from 'react'
import { BiMap, BiVolume } from 'react-icons/bi'
import { BsPencil, BsWindow } from 'react-icons/bs'
import { HiOutlineSwitchHorizontal, HiOutlineUserGroup } from 'react-icons/hi'
import { IoMdOpen } from 'react-icons/io'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMic2Line, RiSearchEyeLine } from 'react-icons/ri'
import { TbActivityHeartbeat } from 'react-icons/tb'
import SettingsLayout from '../../components/layouts/settings-layout'
import InformationButton from '../../components/settings/information-button'
import NavBar from '../../components/settings/nav-bar'
import SettingsButton from '../../components/settings/settings-button'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'

const PrivacyAndSafety: NextPage = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { exSmSize, xlSize } = useContext(FontSizeContext)
  return (
    <SettingsLayout>
      <NavBar />
      <section className={`w-timeline h-full flex flex-col py-2 items-start justify-start border-r border-l ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
        <div className='flex flex-col items-start justify-start mb-5 px-3'>
          <h1 className='font-bold' style={{ fontSize: `${xlSize}px` }}>
            Privacy and safety
          </h1>
          <span className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${exSmSize}px` }}>
            Manage what information you see and share on Twitter.
          </span>
        </div>
        <div className={`w-full flex flex-col items-start justify-start border-b mb-5 py-2 ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
          <h2 className='font-bold mb-5 px-3' style={{ fontSize: `${xlSize}px` }}>
            Your Twitter activity
          </h2>
          <SettingsButton
            name='Audience and tagging'
            definition='Manage what information you allow other people on Twitter to see.'
            link='/settings/audience_and_tagging'
            hasIcon={true}
            icon={<HiOutlineUserGroup />}
          />
          <SettingsButton
            name='Your Tweets'
            definition='Manage the information associated with your Tweets.'
            link='/settings/your_tweets'
            hasIcon={true}
            icon={<BsPencil />}
          />
          <SettingsButton
            name='Content you see'
            definition='Decide what you see on Twitter based on your preferences like Topics and interests.'
            link='/settings/content_you_see'
            hasIcon={true}
            icon={<BsWindow />}
          />
          <SettingsButton
            name='Mute and block'
            definition="Manage the accounts, words, and notifications that you've muted or blocked."
            link='/settings/mute_and_block'
            hasIcon={true}
            icon={<BiVolume />}
          />
          <SettingsButton
            name='Direct Messages'
            definition='Manage who can message you directly.'
            link='/settings/direct_messages'
            hasIcon={true}
            icon={<MdOutlineEmail />}
          />
          <SettingsButton
            name='Spaces'
            definition='Manage who can see your Spaces listening activity.'
            link='/settings/spaces'
            hasIcon={true}
            icon={<RiMic2Line />}
          />
          <SettingsButton
            name='Discoverability and contacts'
            definition="Control your discoverability settings and manage contacts you've imported."
            link='/settings/contacts'
            hasIcon={true}
            icon={<RiSearchEyeLine />}
          />
        </div>
        <div className={`w-full flex flex-col items-start justify-start border-b mb-5 py-2 ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
          <h2 className='font-bold mb-5 px-3' style={{ fontSize: `${xlSize}px` }}>
            Data sharing and personalization
          </h2>
          <SettingsButton
            name='Ads preferences'
            definition='Manage your ads experience on Twitter.'
            link='/settings/ads_preferences'
            hasIcon={true}
            icon={<IoMdOpen />}
          />
          <SettingsButton
            name='Inferred indentity'
            definition="Allow Twitter to personalize your experience with your inferred activity, e.g. activity on devices you haven't used to log in to Twitter."
            link='/settings/off_twitter_activity'
            hasIcon={true}
            icon={<TbActivityHeartbeat />}
          />
          <SettingsButton
            name='Data sharing with business partners'
            definition="Allow sharing of additional information with Twitter's business partners."
            link='/settings/data_sharing_with_business_partners'
            hasIcon={true}
            icon={<HiOutlineSwitchHorizontal />}
          />
          <SettingsButton
            name='Location information'
            definition="Manage the location information Twitter uses to personalize your experience."
            link='/settings/location_information'
            hasIcon={true}
            icon={<BiMap />}
          />
        </div>
        <div className='w-full flex flex-col items-start justify-start py-2 pb-10'>
          <h2 className='font-bold mb-5 px-3' style={{ fontSize: `${xlSize}px` }}>
            Learn more about privacy on Twitter
          </h2>
          <InformationButton
            link='/home'
            name='Privacy center'
          />
          <InformationButton
            link='/home'
            name='Privacy policy'
          />
          <InformationButton
            link='/home'
            name='Contact us'
          />
        </div>
      </section>
    </SettingsLayout>
  )
}

export default PrivacyAndSafety
