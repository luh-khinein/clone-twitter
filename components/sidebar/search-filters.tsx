import React, { useCallback, useContext, useEffect, useState } from 'react'
import { HiCheck } from 'react-icons/hi'
import s from '../../styles/radio.module.css'
import { FontSizeContext } from '../../utils/font-size'
import { ThemeContext } from '../../utils/theme'

export const SearchFilterPeople: React.FC = () => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const { baseSize } = useContext(FontSizeContext)
  const [filterState, setFilterState] = useState({
    any: true,
    follow: false,
  })
  const handleToFalse = useCallback(() => {
    setFilterState({ any: false, follow: false })
  }, [])
  const handleFilterState = useCallback((e: any) => {
    e.persist()
    handleToFalse()
    setFilterState(prev => ({
      ...prev,
      [e.target.id]: true
    }))
  }, [])

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--color-theme', colorTheme
    )
  }, [colorTheme])

  return (
    <div className='flex flex-col w-full px-3' style={{ fontSize: `${baseSize}px` }}>
      <h2 className='font-semibold'>
        People
      </h2>
      <div className='w-full flex items-center justify-between'>
        <span>
          From anyone
        </span>
        <div className='flex items-center justify-center'>
          <input
            id='any'
            checked={filterState.any}
            onClick={handleFilterState}
            type='radio'
            className={`${s.radio} ${backgroundTheme === 'black' ? 'border-zinc-400' : 'border-slate-400'}`}
          />
          {filterState.any && (
            <label className='text-white absolute'>
              <HiCheck className='w-4 h-4' />
            </label>
          )}
        </div>
      </div>
      <div className='w-full flex items-center justify-between'>
        <span>
          People you follow
        </span>
        <div className='flex items-center justify-center'>
          <input
            id='follow'
            checked={filterState.follow}
            onClick={handleFilterState}
            type='radio'
            className={`${s.radio} ${backgroundTheme === 'black' ? 'border-zinc-400' : 'border-slate-400'}`}
          />
          {filterState.follow && (
            <label className='text-white absolute'>
              <HiCheck className='w-4 h-4' />
            </label>
          )}
        </div>
      </div>
    </div>
  )
}

export const SearchFilterLocation: React.FC = () => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const { baseSize } = useContext(FontSizeContext)
  const [filterState, setFilterState] = useState({
    anywhere: true,
    near: false,
  })
  const handleToFalse = useCallback(() => {
    setFilterState({ anywhere: false, near: false })
  }, [])
  const handleFilterState = useCallback((e: any) => {
    e.persist()
    handleToFalse()
    setFilterState(prev => ({
      ...prev,
      [e.target.id]: true
    }))
  }, [])
  return (
    <div className='flex flex-col w-full px-3' style={{ fontSize: `${baseSize}px` }}>
      <h2 className='font-semibold'>
        Location
      </h2>
      <div className='w-full flex items-center justify-between'>
        <span>
          Anywhere
        </span>
        <div className='flex items-center justify-center'>
          <input
            id='any'
            checked={filterState.anywhere}
            onClick={handleFilterState}
            type='radio'
            className={`${s.radio} ${backgroundTheme === 'black' ? 'border-zinc-400' : 'border-slate-400'}`}
          />
          {filterState.anywhere && (
            <label className='text-white absolute'>
              <HiCheck className='w-4 h-4' />
            </label>
          )}
        </div>
      </div>
      <div className='w-full flex items-center justify-between'>
        <span>
          Near you
        </span>
        <div className='flex items-center justify-center'>
          <input
            id='near'
            checked={filterState.near}
            onClick={handleFilterState}
            type='radio'
            className={`${s.radio} ${backgroundTheme === 'black' ? 'border-zinc-400' : 'border-slate-400'}`}
          />
          {filterState.near && (
            <label className='text-white absolute'>
              <HiCheck className='w-4 h-4' />
            </label>
          )}
        </div>
      </div>
    </div>
  )
}
