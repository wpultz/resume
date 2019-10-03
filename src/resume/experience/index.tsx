import * as React from 'react'
import { useSelector } from 'react-redux'

import { getExperiences } from '../../modules/experience'

import { Experience } from './Experience'
import { ContentCard } from 'resume/common/ContentCard'

export function Experiences() {
  const experiences = useSelector(getExperiences)

  const expList = (
    <div>
      {experiences.map(experience => (
        <Experience experience={experience} key={experience.company} />
      ))}
    </div>
  )

  return <ContentCard title="Experience" content={expList} />
}
