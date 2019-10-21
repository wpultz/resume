export enum ExperienceActions {
  AddExperience = 'ADD_EXPERIENCE',
  RemoveExperience = 'REMOVE_EXPERIENCE',
  UpdateExperience = 'UPDATE_EXPERIENCE',
  AddPosition = 'ADD_POSITION',
  RemovePosition = 'REMOVE_POSITION',
  UpdatePosition = 'UPDATE_POSITION'
}

export interface IExperience {
  company: string
  positions: IPosition[]
}

export interface IPosition {
  title: string
  highlights: string[]
  start: string
  end: string
}

interface IAction {
  type: ExperienceActions
  payload: any
}

const defaultState: IExperience[] = []

export default function reducer(state = defaultState, action: IAction) {
  switch (action.type) {
    case ExperienceActions.AddExperience:
      return [...state, action.payload]

    case ExperienceActions.RemoveExperience:
      return [...state.slice(0, action.payload), ...state.slice(action.payload + 1)]

    case ExperienceActions.UpdateExperience: {
      const { experienceIdx, exp } = action.payload

      return [...state.slice(0, experienceIdx), { ...state[experienceIdx], ...exp }, ...state.slice(experienceIdx + 1)]
    }

    case ExperienceActions.AddPosition: {
      const { experienceIdx, position } = action.payload

      return [
        ...state.slice(0, experienceIdx),
        { ...state[experienceIdx], positions: state[experienceIdx].positions.concat(position) },
        ...state.slice(experienceIdx + 1)
      ]
    }

    case ExperienceActions.RemovePosition: {
      const { experienceIdx, positionIdx } = action.payload
      const positionToRemove = state[experienceIdx].positions[positionIdx]

      return [
        ...state.slice(0, experienceIdx),
        { ...state[experienceIdx], positions: state[experienceIdx].positions.filter(pos => pos !== positionToRemove) },
        ...state.slice(experienceIdx + 1)
      ]
    }

    case ExperienceActions.UpdatePosition: {
      const { experienceIdx, positionIdx, position } = action.payload
      const positions = state[experienceIdx].positions
      const updatedPositions = [
        ...positions.slice(0, positionIdx),
        { ...positions[positionIdx], ...position },
        ...positions.slice(positionIdx + 1)
      ]

      return [
        ...state.slice(0, experienceIdx),
        { ...state[experienceIdx], positions: updatedPositions },
        ...state.slice(experienceIdx + 1)
      ]
    }

    default:
      return state
  }
}

export function addExperience(exp: IExperience) {
  return {
    type: ExperienceActions.AddExperience,
    payload: exp
  }
}

export function removeExperience(idx: number) {
  return {
    type: ExperienceActions.RemoveExperience,
    payload: idx
  }
}

export function updateExperience(experienceIdx: number, exp: IExperience) {
  return {
    type: ExperienceActions.UpdateExperience,
    payload: {
      experienceIdx,
      exp
    }
  }
}

export function addPosition(experienceIdx: number, position: IPosition) {
  return {
    type: ExperienceActions.AddPosition,
    payload: {
      experienceIdx,
      position
    }
  }
}

export function removePosition(experienceIdx: number, positionIdx: number) {
  return {
    type: ExperienceActions.RemovePosition,
    payload: {
      experienceIdx,
      positionIdx
    }
  }
}

export function updatePosition(experienceIdx: number, positionIdx: number, position: IPosition) {
  return {
    type: ExperienceActions.UpdatePosition,
    payload: {
      experienceIdx,
      positionIdx,
      position
    }
  }
}

export function getExperiences(state: any): IExperience[] {
  return state.experiences
}
