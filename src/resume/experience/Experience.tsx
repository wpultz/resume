import * as React from 'react'

import { IExperience } from '../../modules/experience'

import Typography from '@material-ui/core/Typography'

interface IExperienceProps {
  experience: IExperience
}

export function Experience(props: IExperienceProps) {
  const { experience } = props

  return (
    <div>
      <Typography variant="h5">{experience.company}</Typography>
      <div>
        {experience.positions.map(pos => (
          <div key={pos.title}>
            <Typography variant="h6">{pos.title}</Typography>
            <ul>
              {pos.highlights.map((highlight, i) => (
                <li key={i}>
                  <Typography variant="body1">{highlight}</Typography>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
