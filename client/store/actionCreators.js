import {GET_EVENTS, GOT_EVENTS, GET_SINGLE_EVENT, GOT_SINGLE_EVENT, CREATE_NEW_EVENT, UPDATE_EVENT, DELETE_EVENT} from './actions'

export const getEvents = () => ({
  type: GET_EVENTS
})
export const gotEvents = (data) => ({
  type: GOT_EVENTS,
  data
})
export const getSingleEvent = () => ({
  type: GET_SINGLE_EVENT
})
export const gotSingleEvent = (singleEventData) => ({
  type: GOT_SINGLE_EVENT,
  singleEventData
})
export const createNewEvent = (newEventData) => ({
  type: CREATE_NEW_EVENT,
  newEventData
})
export const updateEvent = (updatedEventData) => ({
  type: UPDATE_EVENT,
  updatedEventData
})
export const deleteEvent = (removedEventData) => ({
  type: DELETE_EVENT,
  removedEventData
})
