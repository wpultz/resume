import * as React from 'react'
import { useSelector } from 'react-redux'

import { getSkills } from '../../modules/skills/'

import { Skill } from './Skill'

export function Skills() {
  const skills = useSelector(getSkills)

  return (
    <div>
      {skills.map(skill => (
        <Skill skill={skill} key={skill.title} />
      ))}
    </div>
  )
}
