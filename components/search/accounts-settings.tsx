import React, { useCallback, useContext, useState } from 'react'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'
import InputSettings from '../settings/input-settings'

const AccountsSettings: React.FC = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  const { smSize, xlSize } = useContext(FontSizeContext)
  const [accountsSettings, setAccountsSettings] = useState({
    from: '',
    to: '',
    mentioning: '',
  })
  const handleAccountsSettings = useCallback((e: any) => {
    e.persist()
    setAccountsSettings(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
  }, [])
  return (
    <div className={`w-full flex flex-col items-start justify-start px-3 py-2 border-b ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
      <h2 className='font-bold mb-3' style={{ fontSize: `${xlSize}px` }}>
        Accounts
      </h2>
      <div className='flex flex-col w-full mb-5'>
        <InputSettings
          id='from'
          placeholder='From these accounts'
          type='text'
          hasConditions={false}
          handleOnChange={handleAccountsSettings}
          value={accountsSettings.from}
        />
        <span className={`px-3 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${smSize}px` }}>
          Example: @Twitter - sent from @Twitter
        </span>
      </div>
      <div className='flex flex-col w-full mb-5'>
        <InputSettings
          id='to'
          placeholder='To these accounts'
          type='text'
          hasConditions={false}
          handleOnChange={handleAccountsSettings}
          value={accountsSettings.to}
        />
        <span className={`px-3 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${smSize}px` }}>
          Example: @Twitter - sent in reply to @Twitter
        </span>
      </div>
      <div className='flex flex-col w-full'>
        <InputSettings
          id='mentioning'
          placeholder='Mentioning these accounts'
          type='text'
          hasConditions={false}
          handleOnChange={handleAccountsSettings}
          value={accountsSettings.mentioning}
        />
        <span className={`px-3 ${backgroundTheme === 'black' ? 'text-zinc-400' : 'text-slate-400'}`} style={{ fontSize: `${smSize}px` }}>
          Example: @SFBART @Caltrain - mentions @SFBART or mentions @Caltrain
        </span>
      </div>
    </div>
  )
}

export default AccountsSettings
