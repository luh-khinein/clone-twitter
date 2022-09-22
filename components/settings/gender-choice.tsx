import React, { useCallback, useContext, useEffect, useState } from 'react'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'
import s from '../../styles/radio.module.css'
import { HiCheck } from 'react-icons/hi'
import InputSettings from './input-settings'

const GenderChoice: React.FC = () => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const { baseSize } = useContext(FontSizeContext)
  const [genderState, setGenderState] = useState({
    female: false,
    male: true,
    other: false,
  })
  const handleGenderState = useCallback((e: any) => {
    e.persist()
    if (e.target.id === 'female') {
      setGenderState({
        female: true,
        male: false,
        other: false,
      })
    } else if (e.target.id === 'male') {
      setGenderState({
        female: false,
        male: true,
        other: false,
      })
    } else {
      setGenderState({
        female: false,
        male: false,
        other: true,
      })
    }
  }, [])

  const [genderInput, setGenderInput] = useState('')
  const handleGenderInput = useCallback((e: any) => {
    e.persist()
    setGenderInput(e.target.value)
  }, [])

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--color-theme', colorTheme
    )
  }, [colorTheme])

  return (
    <div className={`w-full px-3 py-2 flex flex-col border-y ${backgroundTheme === 'light' ? 'border-gray-100' : backgroundTheme === 'black' ? 'border-zinc-800' : 'border-slate-800'}`}>
      <div className='w-full flex items-center justify-between'>
        <span style={{ fontSize: `${baseSize}px` }}>
          Female
        </span>
        <div className='flex items-center justify-center'>
          <input
            id='female'
            checked={genderState.female}
            onClick={handleGenderState}
            type='radio'
            className={`${s.radio} ${backgroundTheme === 'black' ? 'border-zinc-400' : 'border-slate-400'}`}
          />
          {genderState.female && (
            <label className='text-white absolute'>
              <HiCheck className='w-4 h-4' />
            </label>
          )}
        </div>
      </div>
      <div className='w-full flex items-center justify-between'>
        <span style={{ fontSize: `${baseSize}px` }}>
          Male
        </span>
        <div className='flex items-center justify-center'>
          <input
            id='male'
            checked={genderState.male}
            onClick={handleGenderState}
            type='radio'
            className={`${s.radio} ${backgroundTheme === 'black' ? 'border-zinc-400' : 'border-slate-400'}`}
          />
          {genderState.male && (
            <label className='text-white absolute'>
              <HiCheck className='w-4 h-4' />
            </label>
          )}
        </div>
      </div>
      <div className='w-full flex items-center justify-between'>
        <span style={{ fontSize: `${baseSize}px` }}>
          Add your gender
        </span>
        <div className='flex items-center justify-center'>
          <input
            id='other'
            checked={genderState.other}
            onClick={handleGenderState}
            type='radio'
            className={`${s.radio} ${backgroundTheme === 'black' ? 'border-zinc-400' : 'border-slate-400'}`}
          />
          {genderState.other && (
            <label className='text-white absolute'>
              <HiCheck className='w-4 h-4' />
            </label>
          )}
        </div>
      </div>
      {genderState.other && (
        <div className='w-full mt-5'>
          <InputSettings
            id='other_gender'
            type='text'
            placeholder='Gender'
            hasConditions={false}
            handleOnChange={handleGenderInput}
            value={genderInput}
          />
        </div>
      )}
    </div>
  )
}

export default GenderChoice
