import * as React from 'react'

import { IEducation } from '../../modules/education'

interface IEducationProps {
  education: IEducation
}

export function Education(props: IEducationProps) {
  const { education } = props
  return (
    <div>
      <h2>{education.school}</h2>
      {education.degree}, {education.gpa}
    </div>
  )
}
