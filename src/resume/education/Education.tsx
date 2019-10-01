import * as React from 'react'

import { IEducation } from '../../modules/education'

interface IEducationProps {
  education: IEducation
}

export function Education(props: IEducationProps) {
  const { education } = props
  return (
    <div>
      <div>{education.school}</div>
      <div>{education.degree}</div>
      <div>{education.gpa}</div>
      <div>{education.description}</div>
    </div>
  )
}
