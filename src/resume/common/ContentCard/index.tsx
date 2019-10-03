import * as React from 'react'

import { Typography } from '@material-ui/core'

// @ts-ignore
import styles from './ContentCard.module.css'

interface IContentCardProps {
  title: string
  content: string | React.ReactNode
}

export function ContentCard(props: IContentCardProps) {
  return (
    <div>
      <Typography variant="h4">{props.title}</Typography>
      <div className={styles.content}>{props.content}</div>
    </div>
  )
}
