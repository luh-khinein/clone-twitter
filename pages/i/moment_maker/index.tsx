import type { NextPage } from 'next'
import React from 'react'
import MomentsLayout from '../../../components/layouts/moments-layout'
import MomentsDetailedBox from '../../../components/moments/moments-detailed-box'
import MomentsNavigations from '../../../components/moments/moments-navigations'

const MomentMaker: NextPage = () => {
  return (
    <MomentsLayout buttonIsActive={true}>
      <MomentsNavigations />
      <MomentsDetailedBox />
    </MomentsLayout>
  )
}

export default MomentMaker
