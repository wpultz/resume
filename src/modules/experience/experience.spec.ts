import reducer from './index'
import * as experience from './index'

function getExp() {
  return {
    company: 'Stone Wheels Inc.',
    positions: [getPos()]
  }
}

function getPos() {
  return {
    title: 'Head Honcho',
    highlights: ['Cool dude', 'Good at things'],
    start: '1000 B.C',
    end: 'Current'
  }
}

describe('Education Redux module', () => {
  describe('Action creators', () => {
    it('should produce an "add experience" action', () => {
      const exp = getExp()
      const action = experience.addExperience(exp)

      expect(action).toEqual({
        type: experience.ExperienceActions.AddExperience,
        payload: exp
      })
    })

    it('should produce an "remove experience" action', () => {
      const action = experience.removeExperience(1)

      expect(action).toEqual({
        type: experience.ExperienceActions.RemoveExperience,
        payload: 1
      })
    })

    it('should produce an "update experience" action', () => {
      const exp = getExp()
      const action = experience.updateExperience(1, exp)

      expect(action).toEqual({
        type: experience.ExperienceActions.UpdateExperience,
        payload: {
          experienceIdx: 1,
          exp: exp
        }
      })
    })

    it('should produce an "add postion" action', () => {
      const pos = getPos()
      const action = experience.addPosition(1, pos)

      expect(action).toEqual({
        type: experience.ExperienceActions.AddPosition,
        payload: {
          experienceIdx: 1,
          position: pos
        }
      })
    })

    it('should produce an "remove position" action', () => {
      const action = experience.removePosition(1, 2)

      expect(action).toEqual({
        type: experience.ExperienceActions.RemovePosition,
        payload: {
          experienceIdx: 1,
          positionIdx: 2
        }
      })
    })

    it('should produce an "update position" action', () => {
      const pos = getPos()
      const action = experience.updatePosition(1, 2, pos)

      expect(action).toEqual({
        type: experience.ExperienceActions.UpdatePosition,
        payload: {
          experienceIdx: 1,
          positionIdx: 2,
          position: pos
        }
      })
    })
  })

  describe('Reducer', () => {
    describe('Experience cases', () => {
      it('should add an experience', () => {
        const exp = getExp()
        const state = reducer(undefined, experience.addExperience(exp))

        expect(state).toEqual([exp])
      })

      it('should remove an experience', () => {
        const state = reducer([getExp(), getExp(), getExp()], experience.removeExperience(0))

        expect(state.length).toBe(2)
      })

      it('should update an experience', () => {
        const exp = getExp()
        const updatedExp = { ...exp, company: 'Fire! Ltd.' }
        const state = reducer([exp], experience.updateExperience(0, updatedExp))

        expect(state).toEqual([updatedExp])
      })
    })

    describe('Position cases', () => {
      it('should add a position to an experience', () => {
        const exp = getExp()
        const pos = getPos()
        const updatedExp = { ...exp, positions: [...exp.positions, pos] }

        const state = reducer([exp], experience.addPosition(0, pos))

        expect(state).toEqual([updatedExp])
      })

      it('should remove a position from an experience', () => {
        const exp = getExp()
        const state = reducer([exp], experience.removePosition(0, 0))

        expect(state[0].positions.length).toBe(0)
      })

      it('should update a position in an experience', () => {
        const exp = getExp()
        const updatedPos = { ...exp.positions[0], title: 'Rock Harvester' }

        const state = reducer([exp], experience.updatePosition(0, 0, updatedPos))

        expect(state[0].positions).toEqual([updatedPos])
      })
    })
  })

  describe('Selectors', () => {
    it('should select the list experiences', () => {
      const expState = [getExp()]
      const state = {
        experiences: expState
      }

      expect(experience.getExperiences(state)).toBe(expState)
    })
  })
})
