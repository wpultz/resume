import * as React from 'react'

import { ISkill } from '../../modules/skills'

interface ISkillProps {
  skill: ISkill
}

export function Skill(props: ISkillProps) {
  const { skill } = props

  return (
    <div>
      <div>{skill.title}</div>
      <div>{skill.description}</div>
      <div>{skill.level}</div>
    </div>
  )
}
