import * as React from 'react'

import { IExperience } from '../../modules/experience'

interface IExperienceProps {
  experience: IExperience
}

export function Experience(props: IExperienceProps) {
  const { experience } = props

  return (
    <div>
      <div>{experience.company}</div>
      <div>
        {experience.positions.map(pos => (
          <div key={pos.title}>
            <div>{pos.title}</div>
            <ul>
              {pos.highlights.map((highlight, i) => (
                <li key={i}>{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
