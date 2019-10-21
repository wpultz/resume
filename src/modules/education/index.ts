export enum EducationActions {
  AddEducation = 'ADD_EDUCATION',
  RemoveEducation = 'REMOVE_EDUCATION',
  UpdateEducation = 'UPDATE_EDUCATION'
}

export interface IEducation {
  school: string
  degree: string
  gpa: string
  description: string
}

interface IAction {
  type: EducationActions
  payload: any
}

const defaultState: IEducation[] = []

export default function reducer(state = defaultState, action: IAction) {
  switch (action.type) {
    case EducationActions.AddEducation:
      return [...state, action.payload]

    case EducationActions.RemoveEducation:
      return [...state.slice(0, action.payload), ...state.slice(action.payload + 1)]

    case EducationActions.UpdateEducation: {
      const { idx, ed } = action.payload

      const updatedEd = { ...state[idx], ...ed }

      return [...state.slice(0, idx), updatedEd, ...state.slice(idx + 1)]
    }
  }

  return state
}

export function addEducation(ed: IEducation) {
  return {
    type: EducationActions.AddEducation,
    payload: ed
  }
}

export function removeEducation(idx: number) {
  return {
    type: EducationActions.RemoveEducation,
    payload: idx
  }
}

export function updateEducation(idx: number, ed: IEducation) {
  return { type: EducationActions.UpdateEducation, payload: { idx, ed } }
}

export function getEducations(state: any): IEducation[] {
  return state.educations
}
