import * as React from 'react'
import { useSelector } from 'react-redux'

import { getEducations } from '../../modules/education'

import { Education } from './Education'

import { ContentCard } from '../common/ContentCard'

export function Educations() {
  const educations = useSelector(getEducations)

  const eduList = (
    <div>
      {educations.map(education => (
        <Education education={education} key={education.degree} />
      ))}
    </div>
  )

  return <ContentCard title="Education" content={eduList} />
}
