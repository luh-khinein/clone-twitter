import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import { BsArrowLeft } from 'react-icons/bs'
import SettingsLayout from '../../components/layouts/settings-layout'
import NavBar from '../../components/settings/nav-bar'
import { darkTheme, lightTheme } from '../../libs/colors'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'
import s from '../../styles/toggle-switch.module.css'
import Checkbox from '../../components/settings/checkbox'
import TopTweetsNotifications from '../../components/settings/top-tweets-notifications'

const EmailNotifications: NextPage = () => {
  const { backgroundTheme, colorTheme, lightColorTheme } = useContext(ThemeContext)
  const { exSmSize, baseSize, xlSize } = useContext(FontSizeContext)
  const [emailSettings, setEmailSettings] = useState({
    related_you: {
      new_notifications: true,
      direct_messages: true,
      tweets_emailed: true,
      updates_about_performance: false,
    },
    from_twitter: {
      news_about_twitter: true,
      tips_getting_more: true,
      missed_since: true,
      partner_products: true,
      research_surveys: true,
      recommended_accounts: true,
      based_your_follows: true,
      business_products: true,
    }
  })
  const handleEmailSettings = useCallback((e: any) => {
    e.persist()
    setEmailSettings(prev => ({
      ...prev,
      [e.target.id]: [!e.target.checked]
    }))
  }, [])
  const router = useRouter()

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--color-theme', colorTheme
    )
    document.documentElement.style.setProperty(
      '--light-color-theme', lightColorTheme
    )
  }, [colorTheme])

  return (
    <SettingsLayout>
      <NavBar />
      <section className={`w-timeline h-full flex flex-col items-start justify-start py-2 pb-10 border-x ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
        <div className='flex items-center px-3 mb-5'>
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
            Email notifications
          </h1>
        </div>
        <div className={`py-5 px-3 flex flex-col w-full border-b ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-zinc-800'}`}>
          <div className='w-full mb-1 flex justify-between items-center'>
            <span className='font-bold' style={{ fontSize: `${baseSize}px` }}>
              Email notifications
            </span>
            <input
              type='checkbox'
              className={s.toggle}
            />
          </div>
          <span className={`${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${exSmSize}px` }}>
            Get emails to find out what's going on when you're not on Twitter. You can turn them off anytime.
            <Link href='/en/demo-page' target='_blank'>
              <a style={{ color: colorTheme }}>
                &nbsp;Learn more
              </a>
            </Link>
          </span>
        </div>
        <div className={`flex flex-col w-full py-2 border-b ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
          <h2 className='font-bold px-3 mb-3' style={{ fontSize: `${xlSize}px` }}>
            Related to you and your Tweets
          </h2>
          <Checkbox
            id='new_notifications'
            name='New notifications'
            description=''
            hasMoreLink={false}
            isChecked={emailSettings.related_you.new_notifications}
            handleChecked={handleEmailSettings}
          />
          <Checkbox
            id='direct_messages'
            name='Direct messages'
            description=''
            hasMoreLink={false}
            isChecked={emailSettings.related_you.direct_messages}
            handleChecked={handleEmailSettings}
          />
          <Checkbox
            id='tweets_emailed'
            name='Tweets emailed to you'
            description=''
            hasMoreLink={false}
            isChecked={emailSettings.related_you.tweets_emailed}
            handleChecked={handleEmailSettings}
          />
          <TopTweetsNotifications />
          <Checkbox
            id='updates_about_performance'
            name='Updates about the performance of your Tweets'
            description=''
            hasMoreLink={false}
            isChecked={emailSettings.related_you.tweets_emailed}
            handleChecked={handleEmailSettings}
          />
        </div>
        <div className='py-2 w-full flex flex-col'>
          <h2 className='px-3 mb-3 font-bold' style={{ fontSize: `${xlSize}px` }}>
            From Twitter
          </h2>
          <Checkbox
            id='news_about_twitter'
            name='News about Twitter product and feature updates'
            description=''
            hasMoreLink={false}
            isChecked={emailSettings.from_twitter.news_about_twitter}
            handleChecked={handleEmailSettings}
          />
          <Checkbox
            id='tips_getting_more'
            name='Tips on getting more out of Twitter'
            description=''
            hasMoreLink={false}
            isChecked={emailSettings.from_twitter.tips_getting_more}
            handleChecked={handleEmailSettings}
          />
          <Checkbox
            id='missed_since'
            name='Things you missed since you last logged into Twitter'
            description=''
            hasMoreLink={false}
            isChecked={emailSettings.from_twitter.missed_since}
            handleChecked={handleEmailSettings}
          />
          <Checkbox
            id='partner_products'
            name='News about Twitter on partner products and other third party services'
            description=''
            hasMoreLink={false}
            isChecked={emailSettings.from_twitter.partner_products}
            handleChecked={handleEmailSettings}
          />
          <Checkbox
            id='research_surveys'
            name='Participation in Twitter research surveys'
            description=''
            hasMoreLink={false}
            isChecked={emailSettings.from_twitter.research_surveys}
            handleChecked={handleEmailSettings}
          />
          <Checkbox
            id='recommended_accounts'
            name='Suggestions for recommended accounts'
            description=''
            hasMoreLink={false}
            isChecked={emailSettings.from_twitter.recommended_accounts}
            handleChecked={handleEmailSettings}
          />
          <Checkbox
            id='based_your_follows'
            name='Suggestions based on your recent follows'
            description=''
            hasMoreLink={false}
            isChecked={emailSettings.from_twitter.based_your_follows}
            handleChecked={handleEmailSettings}
          />
          <Checkbox
            id='business_products'
            name='Tips on Twitter business products'
            description=''
            hasMoreLink={false}
            isChecked={emailSettings.from_twitter.business_products}
            handleChecked={handleEmailSettings}
          />
        </div>
      </section>
    </SettingsLayout>
  )
}

export default EmailNotifications
