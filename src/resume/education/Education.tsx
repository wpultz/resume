import * as React from 'react'

import { Typography } from '@material-ui/core'

import { IEducation } from '../../modules/education'

interface IEducationProps {
  education: IEducation
}

export function Education(props: IEducationProps) {
  const { education } = props
  return (
    <div>
      <Typography variant="h5">{education.school}</Typography>
      <Typography variant="body1">
        {education.degree}, {education.gpa}
      </Typography>
    </div>
  )
}
