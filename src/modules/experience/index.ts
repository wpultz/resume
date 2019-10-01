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
      return state.filter(experience => experience.company !== action.payload)

    case ExperienceActions.UpdateExperience: {
      const updateIdx = state.findIndex(exp => exp.company === action.payload.company)

      if (updateIdx >= 0) {
        return [...state.slice(0, updateIdx), { ...state[updateIdx], ...action.payload }, ...state.slice(updateIdx + 1)]
      }
      return state
    }

    case ExperienceActions.AddPosition: {
      const expIdx = state.findIndex(exp => exp.company === action.payload.company)

      if (expIdx >= 0) {
        return [
          ...state.slice(0, expIdx),
          { ...state[expIdx], positions: state[expIdx].positions.concat(action.payload.position) },
          ...state.slice(expIdx + 1)
        ]
      }
      return state
    }

    case ExperienceActions.RemovePosition: {
      const expIdx = state.findIndex(exp => exp.company === action.payload.company)

      if (expIdx >= 0) {
        return [
          ...state.slice(0, expIdx),
          { ...state[expIdx], positions: state[expIdx].positions.filter(pos => pos.title !== action.payload.title) },
          ...state.slice(expIdx + 1)
        ]
      } else {
        return state
      }
    }

    case ExperienceActions.UpdatePosition: {
      const expIdx = state.findIndex(exp => exp.company === action.payload.company)

      if (expIdx >= 0) {
        const posIdx = state[expIdx].positions.findIndex(pos => pos.title === action.payload.position.title)

        if (posIdx >= 0) {
          const updatedPositions = [
            ...state[expIdx].positions.slice(0, posIdx),
            { ...state[expIdx].positions[posIdx], ...action.payload.position },
            ...state[expIdx].positions.slice(posIdx + 1)
          ]

          return [
            ...state.slice(0, expIdx),
            { ...state[expIdx], positions: updatedPositions },
            ...state.slice(expIdx + 1)
          ]
        }
      }
      // Couldn't find company or title
      return state
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

export function removeExperience(expTitle: string) {
  return {
    type: ExperienceActions.RemoveExperience,
    payload: expTitle
  }
}

export function updateExperience(exp: IExperience) {
  return {
    type: ExperienceActions.UpdateExperience,
    payload: exp
  }
}

export function addPosition(company: string, position: IPosition) {
  return {
    type: ExperienceActions.AddPosition,
    payload: {
      company,
      position
    }
  }
}

export function removePosition(company: string, title: string) {
  return {
    type: ExperienceActions.RemovePosition,
    payload: {
      company,
      title
    }
  }
}

export function updatePosition(company: string, position: IPosition) {
  return {
    type: ExperienceActions.UpdatePosition,
    payload: {
      company,
      position
    }
  }
}

export function getExperiences(state: any): IExperience[] {
  return state.experiences
}
