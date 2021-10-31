import { useEffect, useReducer } from 'react'

export const API_RESOURCES = {
  CATEGORIES: 'categories'
}
export const API_ERROR = {
  INVALID_REQUEST: 'invalid useApiResource, must define resource and default value',
  INVALID_RESPONSE: (data) => `Could not retrieve data -> ${data}`
}
let defaultValue = null
const getInitResponse = (data) => {
  defaultValue = data
  return {
    loading: true,
    data,
    error: null
  }
}
const SERVER_PATH = 'http://localhost:3500'
const ACTIONS = {
  UPDATE_RESPONSE: 'UPDATE_RESPONSE',
  ERROR_LOAD: 'ERROR_LOAD'
}
const fetchResourceReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ERROR_LOAD:
      return { ...state, loading: false, error: action.payload, data: defaultValue }
    case ACTIONS.UPDATE_RESPONSE:
      return { ...state, loading: false, error: null, data: action.payload }
    default:
      return state
  }
}
const handleErrors = (data, apiResource) => {
  return data || throw Error(API_ERROR.INVALID_RESPONSE(apiResource))
}

function handleNetwork (res, apiResource) {
  return !res.ok ? throw Error(`${res.statusText} -> ${apiResource}`) : res.json()
}

const fetchApiResource = (resource, dispatch) => {
  const apiResource = `${SERVER_PATH}/${resource}`
  fetch(apiResource)
    .then((res) => handleNetwork(res, apiResource))
    .then((data) => handleErrors(data, apiResource))
    .then((data) => dispatch({
      type: ACTIONS.UPDATE_RESPONSE,
      payload: data
    }))
    .catch((error) => dispatch({
      type: ACTIONS.ERROR_LOAD,
      payload: error.message
    }))
}

export const useApiResource = (apiResource, defaultValue) => {
  const validHook = !!apiResource && !!defaultValue
  const [response, dispatch] = useReducer(fetchResourceReducer, getInitResponse(defaultValue))

  useEffect(() => {
    if (!validHook) {
      dispatch({
        type: ACTIONS.ERROR_LOAD,
        payload: API_ERROR.INVALID_REQUEST
      })
    } else {
      fetchApiResource(apiResource, dispatch)
    }
  }, [])

  return [response]
}
