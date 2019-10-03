export enum SkillActions {
  AddSkill = 'ADD_SKILL',
  RemoveSkill = 'REMOVE_SKILL',
  UpdateSkillLevel = 'UPDATE_SKILL_LEVEL'
}

export type SkillLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

export interface ISkill {
  title: string
  level: SkillLevel
}

interface IAction {
  type: SkillActions
  payload: any
}

const defaultState: ISkill[] = []

export default function reducer(state = defaultState, action: IAction) {
  switch (action.type) {
    case SkillActions.AddSkill:
      return [...state, action.payload]
    case SkillActions.RemoveSkill:
      return state.filter(skill => skill.title !== action.payload)
    case SkillActions.UpdateSkillLevel:
      const targettedSkillIdx = state.findIndex(skill => skill.title === action.payload.title)
      if (targettedSkillIdx >= 0) {
        return [
          ...state.slice(0, targettedSkillIdx),
          { ...state[targettedSkillIdx], level: action.payload.level },
          ...state.slice(targettedSkillIdx + 1)
        ]
      } else {
        return state
      }
    default:
      return state
  }
}

export function addSkill(skill: ISkill) {
  return {
    type: SkillActions.AddSkill,
    payload: skill
  }
}

export function removeSkill(skillTitle: string) {
  return {
    type: SkillActions.RemoveSkill,
    payload: skillTitle
  }
}

export function updateSkillLevel(title: string, skillLevel: SkillLevel) {
  return {
    type: SkillActions.UpdateSkillLevel,
    payload: {
      title,
      skillLevel
    }
  }
}

export function getSkills(state: any): ISkill[] {
  return state.skills
}
