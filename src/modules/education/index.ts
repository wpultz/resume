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
  return state
}

export function addEducation(ed: IEducation) {
  return {
    type: EducationActions.AddEducation,
    payload: ed
  }
}

export function removeEducation(title: string) {
  return {
    type: EducationActions.RemoveEducation,
    payload: title
  }
}

export function UpdateEducation(ed: IEducation) {
  return { type: EducationActions.UpdateEducation, payload: ed }
}

export function getEducations(state: any): IEducation[] {
  return state['educations']
}
