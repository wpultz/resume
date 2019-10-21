import reducer from './index'
import * as education from './index'

function getEd() {
  return {
    school: 'VCU',
    degree: 'Computer Wizardry',
    gpa: '5.0',
    description: 'Magically motherboards making music'
  }
}

describe('Education Redux module', () => {
  describe('Action creators', () => {
    it('should produce an "add" action', () => {
      const ed1 = getEd()
      const addAction = education.addEducation(ed1)

      expect(addAction).toEqual({
        type: education.EducationActions.AddEducation,
        payload: ed1
      })
    })

    it('should produce a "remove" action', () => {
      const removeAction = education.removeEducation(3)

      expect(removeAction).toEqual({
        type: education.EducationActions.RemoveEducation,
        payload: 3
      })
    })

    it('should produce an "update" action', () => {
      const ed1 = getEd()
      const updateAction = education.updateEducation(1, ed1)

      expect(updateAction).toEqual({
        type: education.EducationActions.UpdateEducation,
        payload: {
          idx: 1,
          ed: ed1
        }
      })
    })
  })

  describe('Reducer', () => {
    it('should return the default state', () => {
      // Ignore the TS error about the INIT action not being an Education action
      // @ts-ignore
      const defState = reducer(undefined, { type: 'INIT' })

      expect(defState).toEqual([])
    })

    it('should return the default state initialized with a value', () => {
      const ed1 = getEd()
      // Ignore the TS error about the INIT action not being an Education action
      // @ts-ignore
      const defState = reducer([ed1], { type: 'INIT' })

      expect(defState).toEqual([ed1])
    })

    it('should add an education', () => {
      const ed = getEd()
      const state = reducer(undefined, education.addEducation(ed))

      expect(state.length).toBe(1)
      expect(state).toEqual([ed])
    })

    it('should remove an education', () => {
      const ed = getEd()
      const ed2 = getEd()

      const state = reducer([ed, ed2], education.removeEducation(0))

      expect(state).toEqual([ed2])
    })

    it('should update an education', () => {
      const ed = getEd()
      const updatedEd = { ...ed, school: 'Hard Knocks' }

      const state = reducer([ed], education.updateEducation(0, updatedEd))

      expect(state).toEqual([updatedEd])
    })
  })

  describe('Selectors', () => {
    it('should select the list of educations', () => {
      const ed1 = getEd()
      const state = { educations: [ed1] }

      const educations = education.getEducations(state)

      expect(educations).toEqual([ed1])
    })
  })
})
