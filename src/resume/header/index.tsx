import * as React from 'react'

import { Typography } from '@material-ui/core'

//@ts-ignore
import styles from './Header.module.css'

export function Header() {
  return (
    <div className={styles.center}>
      <Typography variant="h3" className={styles.name}>
        Wyatt Pultz
      </Typography>
      <Typography variant="subtitle2">
        Mechanicsville, VA | wpultz@gmail.com | github.com/wpultz | linkedin.com/in/wyatt-pultz-42360232
      </Typography>
    </div>
  )
}
