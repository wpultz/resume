import * as React from 'react'
import { useSelector } from 'react-redux'

import { getExperiences } from '../../modules/experience'

import { Experience } from './Experience'

export function Experiences() {
  const experiences = useSelector(getExperiences)

  return (
    <div>
      {experiences.map(experience => (
        <Experience experience={experience} key={experience.company} />
      ))}
    </div>
  )
}
