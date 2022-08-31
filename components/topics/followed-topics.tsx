// this is a place that organize the followed topics in alphabetic order
import React, { useContext } from 'react'
import { ThemeContext } from '../../utils/theme'
import TopicsFollowedButton from './topics-followed-button'

const FollowedTopics: React.FC = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  return (
    <div className={`flex flex-col w-full border-t ${backgroundTheme === 'light' ? 'border-gray-100' : 'border-gray-800'}`}>
      <TopicsFollowedButton
        link='/home'
        topic='History'
        description='All about history'
      />
    </div>
  )
}

export default FollowedTopics
