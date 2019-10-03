import * as React from 'react'
import { useSelector } from 'react-redux'

import { Grid } from '@material-ui/core'

import { getSkills } from '../../modules/skills/'

import { Skill } from './Skill'
import { ContentCard } from '../common/ContentCard'

export function Skills() {
  const skills = useSelector(getSkills)

  const skillGrid = (
    <Grid container spacing={1}>
      {skills.map(skill => (
        <Grid item key={skill.title} xs={12} sm={4} lg={3}>
          <Skill skill={skill} />
        </Grid>
      ))}
    </Grid>
  )

  return <ContentCard title="Skills" content={skillGrid} />
}
