import * as React from 'react'

import { IExperience } from '../../modules/experience'

interface IExperienceProps {
  experience: IExperience
}

export function Experience(props: IExperienceProps) {
  const { experience } = props

  return (
    <div>
      <h2>{experience.company}</h2>
      <div>
        {experience.positions.map(pos => (
          <div key={pos.title}>
            <h3>
              {pos.title}&nbsp;
              <i>
                {pos.start} - {pos.end}
              </i>
            </h3>
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
