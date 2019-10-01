import * as React from 'react'
import { useSelector } from 'react-redux'

import { getEducations } from '../../modules/education'

import { Education } from './Education'

export function Educations() {
  const educations = useSelector(getEducations)

  return (
    <div>
      {educations.map(education => (
        <Education education={education} key={education.degree} />
      ))}
    </div>
  )
}
