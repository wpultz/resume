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
      level: 9
    },
    {
      title: 'Redux',
      level: 9
    },
    {
      title: 'TypeScript',
      level: 6
    },
    {
      title: 'Node.js',
      level: 6
    },
    {
      title: 'Webpack',
      level: 8
    },
    {
      title: 'NPM',
      level: 8
    },
    {
      title: 'Team Leadership',
      level: 7
    }
  ],
  experiences: [
    {
      company: 'Western Digital',
      positions: [
        {
          title: 'Technologist Engineer',
          description: '',
          highlights: [
            'Managed day-to-day operation of a 3-5 member React, Redux, and Node focused UI team. Held weekly one on one and quarterly goals meetings with individual team members.',
            'Participated in design, specification, and collaboration sessions with product and application stakeholders.',
            'Participated in focus groups to shape engineering architecture and culture both inside and outside the UI team.',
            'Led the architecture and development of an Electron application using TypeScript, React, React hooks, React context, and GraphQL.',
            'Architected a shared library of React components and stylesheets built with TypeScript, React, hooks, and context, tested with Jest, Enzyme and Storybook, and bundled with Webpack.',
            'Created and published JS libraries shared across Western Digital applications as NPM modules.',
            'Architected, developed, and shipped the Sandisk Flashback web application in Fall 2018 (https://www.flashbackapp.com). Flashback is a cloud backup service for select Sandisk drives. The Flashback web application allows users to view, search, and share their backed up content. Sample account available on request.',
            'Shipped ongoing improvements and bug fixes for the Upthere Home web application (https://app.upthere.com). Upthere Home is a cloud storage service that allows users to upload and sync content from their phone or desktop to the cloud. The web application empowers users to upload content, organize content into collections, and share their content. Sample account available on request.'
          ],
          start: 'Dec. 2017',
          end: 'Present'
        }
      ]
    },
    {
      company: 'Mobelux',
      positions: [
        {
          title: 'Web Developer, newcustom.com',
          description: 'did all sorts of stuff',
          highlights: [
            'Expanded the checkout flow, account management pages, and product configuration flow of newcustom.com utilizing Django, React, Redux, GraphQL, and Mapbox.',
            'Wrote a Redux GraphQL integration based on the lokka JavaScript GraphQL client.',
            'Wrote GraphQL resolvers and mutations to work with the Graphene integration for Django applications.'
          ],
          start: 'Jan. 2016',
          end: 'Jun. 2016'
        },
        {
          title: 'Developer, The Design Network',
          description: '',
          highlights: [
            "Built and published a Roku Channel from scratch for The Design Network using Roku's BrightScript language and SceneGraph BrightScript templates.",
            "Integrated with existing REST endpoints from the client's web application to fetch video playlist data and content for display."
          ],
          start: 'Jun. 2016',
          end: 'Sept. 2016'
        },
        {
          title: 'Staff Augmentation, Upthere Inc.',
          description: '',
          highlights: [
            'Improved and expanded upon the existing Upthere Home web application using React, Redux, and Express.',
            'Performed peer code reviews for all members of the web team.',
            'Rebuilt existing features and added several new features in the Upthere Home web application to support product updates.',
            'Team lead for a subgroup of the Upthere web team. Managed the tasks and goals of the subgroup.'
          ],
          start: 'Sept. 2016',
          end: 'Dec. 2017'
        }
      ]
    },
    {
      company: 'Royall & Company',
      positions: [
        {
          title: 'Senior Web Developer',
          description: '',
          highlights: [
            'Designed and implemented solutions to satisfy business needs using CFML and JavaScript/jQuery.',
            'Defined tasks for junior developers and monitored their progress. Reviewed the code produced for those tasks and provided feedback to the originating developers.',
            "Contributed to large portions of the architectural design and codebase of Royall's new content configuration web application and runtime. This included a JSON-driven JavaScript/jQuery event manager for web applications created by the new content configuration system, as well as a JSON-driven page content generator.",
            "Evaluated and enhanced technologies and methodologies in the team's development process."
          ],
          start: 'Nov. 2014',
          end: 'Jan. 2016'
        },
        {
          title: 'Web Developer',
          description: '',
          highlights: [
            "Worked with web team lead to enhance several of Royall's flagship products.",
            'Designed solutions for small marketing test projects. Worked with web designers to create a JS poll widget backed by MongoDB to be included in custom CFML web applications.',
            'Reviewed and gave feedback on CFML and JavaScript/jQuery code produced by junior developers.'
          ],
          start: 'Feb. 2013',
          end: 'Nov. 2014'
        },
        {
          title: 'Junior Web Developer',
          description: '',
          highlights: [
            'Worked on legacy web applications under the direction of the web team lead. Created new UI components to simplify usage of old web applications.',
            'Worked on a small team of Java developers to build a Java library to scrub addresses via Melissa Data.'
          ],
          start: 'May 2011',
          end: 'Feb. 2013'
        }
      ]
    }
  ],
  educations: [
    {
      school: 'Virginia Commonwealth University',
      degree: 'Bachelors of Science, Computer Science',
      description: '',
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
