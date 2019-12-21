import {GET_EVENTS, GOT_EVENTS, GET_SINGLE_EVENT, GOT_SINGLE_EVENT, CREATE_NEW_EVENT, UPDATE_EVENT, DELETE_EVENT} from './actions'

const eventReducer = (state = {event: [], singleEvent: {}, loading: false}, action) =>  {
  switch (action.type) {
    case GET_EVENTS:
      return {...state, loading: true}
    case GET_SINGLE_EVENT:
      return {...state, loading: true}
    case GOT_EVENTS:
      return {...state, loading: false, events: action.data}
    case GOT_SINGLE_EVENT:
      return {...state, loading: false, singleEvent: action.singleEventData}
    case CREATE_NEW_EVENT:
      return {...state, events: [...state.events, action.newEventData]}
    case UPDATE_EVENT:
      return {...state, singleEvent: action.updatedEventData}
    case DELETE_EVENT:
      return {...state, events: state.events.filter(event => event.id !== action.removedEventData)}
    default:
      return state
  }
}
export default eventReducer
