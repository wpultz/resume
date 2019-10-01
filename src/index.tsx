import * as React from 'react'
import { render } from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

import { getStore } from './modules/'

import { Provider } from 'react-redux'

const initialState = {
  skills: [
    {
      title: 'React',
      description: 'sweet lib',
      level: 9
    },
    {
      title: 'Redux',
      description: 'state management',
      level: 9
    },
    {
      title: 'TypeScript',
      description: 'Type checking and compilation',
      level: 5
    },
    {
      title: 'Node.js',
      description: 'Tooling and servers',
      level: 6
    },
    {
      title: 'Webpack',
      description: 'Tooling and bundling',
      level: 7
    },
    {
      title: 'NPM',
      description: 'Package distribution and consumption',
      level: 8
    },
    {
      title: 'Team Management',
      description: '1-1s, goals, growth, sprint/workload management',
      level: 7
    }
  ],
  experiences: [
    {
      company: 'Western Digital',
      positions: [
        {
          title: 'Technologist Engineer',
          description: 'did stuff',
          highlights: ['managed people', 'did cool stuff'],
          start: '',
          end: ''
        }
      ]
    },
    {
      company: 'Mobelux',
      positions: [
        {
          title: 'Web Developer',
          description: 'did all sorts of stuff',
          highlights: ['new custom', 'roku', 'upthere']
        }
      ]
    },
    {
      company: 'Royall & Company',
      positions: [
        {
          title: 'Senior Web Developer',
          description: 'building things and managing people',
          highlights: [],
          start: '',
          end: ''
        },
        {
          title: 'Web Developer',
          description: 'JS and CFML, starting some junior mentoring',
          highlights: [],
          start: '',
          end: ''
        },
        {
          title: 'Junior Web Developer',
          description: 'some java, some CFML and JS',
          highlights: [],
          start: '',
          end: ''
        }
      ]
    }
  ],
  educations: [
    {
      school: 'Virginia Commonwealther University',
      degree: 'Bachelors of Science, Computer Science',
      description: 'very little math required',
      gpa: '3.78'
    }
  ]
}

render(
  <Provider store={getStore(initialState)}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
