import reducer from './index'
import * as skill from './index'

function getSkill(): skill.ISkill {
  return {
    title: 'Carving',
    level: 9
  }
}

describe('Skill Redux module', () => {
  describe('Action creators', () => {
    it('should produce an "add skill" action', () => {
      const sk = getSkill()
      const action = skill.addSkill(sk)

      expect(action).toEqual({
        type: skill.SkillActions.AddSkill,
        payload: sk
      })
    })

    it('should produce an "remove skill" action', () => {
      const action = skill.removeSkill(5)

      expect(action).toEqual({
        type: skill.SkillActions.RemoveSkill,
        payload: 5
      })
    })

    it('should produce an "update skill level" action', () => {
      const sk = getSkill()
      const action = skill.updateSkill(4, sk)

      expect(action).toEqual({
        type: skill.SkillActions.UpdateSkill,
        payload: {
          idx: 4,
          skill: sk
        }
      })
    })
  })

  describe('Reducer', () => {
    it('should add a skill', () => {
      const sk = getSkill()
      const state = reducer(undefined, skill.addSkill(sk))

      expect(state).toEqual([sk])
    })

    it('should remove a skill', () => {
      const sk = getSkill()
      const state = reducer([sk], skill.removeSkill(0))

      expect(state.length).toEqual(0)
    })

    it('should update a skill level', () => {
      const sk = getSkill()
      const updatedSkill = { ...sk, skillLevel: 6 }

      const state = reducer([sk], skill.updateSkill(0, updatedSkill))

      expect(state).toEqual([updatedSkill])
    })
  })

  describe('Selectors', () => {
    it('should select the list of skills', () => {
      const skillState = [getSkill()]
      const state = {
        skills: skillState
      }

      expect(skill.getSkills(state)).toBe(skillState)
    })
  })
})
