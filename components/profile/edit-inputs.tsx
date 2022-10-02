import React, { useCallback, useState } from 'react'
import InputSettings from '../settings/input-settings'
import t from '../../styles/textarea.module.css'

interface Props {
  nickname: string
  bio: string
  location: string
  website: string
}

const EditInputs: React.FC<Props> = ({ nickname, bio, location, website }) => {
  const [inputs, setInputs] = useState({
    nickname: nickname,
    bio: bio,
    location: location,
    web: website
  })
  const handleInputs = useCallback((e: any) => {
    e.persist()
    setInputs(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
  }, [])
  return (
    <form className='w-full flex flex-col px-3'>
      <div className='w-full flex mt-3'>
        <InputSettings
          id='nickname'
          type='text'
          placeholder='Name'
          hasConditions={false}
          handleOnChange={handleInputs}
          value={inputs.nickname}
        />
      </div>
      <div className='relative w-full mt-5 mb-24'>
        <textarea
          id='bio'
          className={t.form_area}
          onChange={handleInputs}
          value={inputs.bio}
          placeholder=' '
        ></textarea>
        <label className={`${t.form_label}`}>
          Bio
        </label>
      </div>
      <div className='w-full flex mt-3'>
        <InputSettings
          id='location'
          type='text'
          placeholder='Location'
          hasConditions={false}
          handleOnChange={handleInputs}
          value={inputs.location}
        />
      </div>
      <div className='w-full flex mt-5'>
        <InputSettings
          id='web'
          type='text'
          placeholder='Website'
          hasConditions={false}
          handleOnChange={handleInputs}
          value={inputs.web}
        />
      </div>
    </form>
  )
}

export default EditInputs
