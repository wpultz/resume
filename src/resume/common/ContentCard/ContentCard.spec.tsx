import * as React from 'react'
import renderer from 'react-test-renderer'

import { ContentCard } from './index'

describe('ContentCard component', () => {
  describe('Snapshots', () => {
    it('should render with string content', () => {
      const snap = renderer.create(<ContentCard title="This little piggy" content="Went to market" />).toJSON()
      expect(snap).toMatchSnapshot()
    })

    it('should render with React content', () => {
      const snap = renderer
        .create(<ContentCard title="This little piggy" content={<div>Ate roast beef</div>} />)
        .toJSON()
      expect(snap).toMatchSnapshot()
    })
  })
})
