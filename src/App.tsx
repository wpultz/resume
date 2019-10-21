import * as React from 'react'

import { Resume } from './resume'

// @ts-ignore
import styles from './App.module.css'

// @ts-ignore
import profileImg from './assets/IMG_0416.JPG'

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.sidebar}>
        <img src={profileImg} className={styles.sidebarProfileImg} alt="profile" />
        <div className={styles.sidebarDetail}>
          <h1 className={styles.sidebarName}>Wyatt Pultz</h1>
          <div>
            <strong>
              <a href="mailto:wpultz@gmail.com">Email</a>
              {' | '}
              <a href="https://linkedin.com/in/wyatt-pultz-42360232" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </strong>
          </div>
          <div className={styles.sidebarDesc}>
            Web developer residing in the Richmond, VA area with a track record of quality work and leadership
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <Resume />
      </div>
    </div>
  )
}

export default App
