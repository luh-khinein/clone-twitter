import type { NextPage } from 'next'
import React from 'react'
import MomentsLayout from '../../../../components/layouts/moments-layout'
import PreviewMoment from '../../../../components/moments/moment-preview'
import MomentsNavigations from '../../../../components/moments/moments-navigations'

const PreviewId: NextPage = () => {
  return (
    <MomentsLayout buttonIsActive={true}>
      <MomentsNavigations />
      <PreviewMoment />
    </MomentsLayout>
  )
}

export default PreviewId
