import * as React from 'react'

import { ISkill } from '../../modules/skills'

const styles = require('./Skill.module.css')

interface ISkillProps {
  skill: ISkill
}

export function Skill(props: ISkillProps) {
  const { skill } = props

  // Skill level is out of 10; multiply by 10 to get the percentage
  const skillPct = skill.level * 10

  return (
    <div className={styles.card}>
      <h2>{skill.title}</h2>
      <div className={styles.skillMeterBack}>
        <div className={styles.skillMeterFore} style={{ width: `${skillPct}%` }}></div>
      </div>
    </div>
  )
}
