export enum SkillActions {
  AddSkill = 'ADD_SKILL',
  RemoveSkill = 'REMOVE_SKILL',
  UpdateSkill = 'UPDATE_SKILL_LEVEL'
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

    case SkillActions.RemoveSkill: {
      const skillToRemove = state[action.payload]
      return state.filter(skill => skill !== skillToRemove)
    }

    case SkillActions.UpdateSkill: {
      const { idx, skill } = action.payload

      return [...state.slice(0, idx), { ...state[idx], ...skill }, ...state.slice(idx + 1)]
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

export function removeSkill(idx: number) {
  return {
    type: SkillActions.RemoveSkill,
    payload: idx
  }
}

export function updateSkill(idx: number, skill: ISkill) {
  return {
    type: SkillActions.UpdateSkill,
    payload: {
      idx,
      skill
    }
  }
}

export function getSkills(state: any): ISkill[] {
  return state.skills
}
