import * as React from 'react'

// @ts-ignore
import styles from './ContentCard.module.css'

interface IContentCardProps {
  title: string
  content: string | React.ReactNode
}

export function ContentCard(props: IContentCardProps) {
  return (
    <div>
      <h1>{props.title}</h1>
      <div className={styles.content}>{props.content}</div>
    </div>
  )
}
