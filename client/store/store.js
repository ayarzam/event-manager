import { createStore, applyMiddleware } from 'redux';
import eventReducer from './reducer'
import loggingMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk';
import axios from 'axios'
import {getEvents, getSingleEvent, gotEvents, gotSingleEvent, createNewEvent, updateEvent, deleteEvent} from './actionCreators'

export const fetchEvents = () => {
  return async (dispatch) => {
    try {
      dispatch(getEvents())
      const {data} = await axios.get('/api/events')
      dispatch(gotEvents(data))
    } catch (error) {
      console.log('Unable to get all Events')
    }
  }
}

export const fetchSingleEvent = (id) => {
  return async (dispatch) => {
    try {
      dispatch(getSingleEvent())
      const {data} = await axios.get(`/api/events/${id}`)
      dispatch(gotSingleEvent(data))
    } catch (error) {
      console.log('Not fetching a single country')
    }
  }
}

export const newEventCreated = (newEventData) => {
  return async(dispatch) => {
    try {
      const response = await axios.post('/api/events', newEventData)
      const eventData = response.data
      const newAction = createNewEvent(eventData)
      dispatch(newAction)
    } catch (error) {
      console.log('unable to create a new event')
    }
  }
}

export const fetchEventUpdate = (updatedEventData) => {
  return async (dispatch) => {
    try {
    const response = await axios.put(`api/events/${updatedEventData.id}`, updatedEventData)
    const eventData = response.data
    const newAction = updateEvent(eventData)
    dispatch(newAction)
    } catch (error) {
      console.log('unable to update Event')
    }
  }
}

export const removeEvent = (id) => {
  return async (dispatch) => {
    try {
      const {data} =  await axios.delete(`/api/events/${id}`)
      dispatch(deleteEvent(id))
    } catch (error) {
      console.log('could not delete event')
    }
  }
}

const store = createStore(
  eventReducer,
  applyMiddleware(
    thunkMiddleware,
    loggingMiddleware
  )
);

export default store;
