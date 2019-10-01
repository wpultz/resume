import * as React from 'react'

import { Skills } from './skills'
import { Experiences } from './experience'
import { Educations } from './education'

export function Resume() {
  return (
    <div>
      <Skills />
      <Experiences />
      <Educations />
    </div>
  )
}
