import * as creatorsUtil from '../utils/creators.js'

export const RECEIVE_CREATORS = "RECEIVE_CREATORS";

export const receiveCreators = (creators) => ({
  type: RECEIVE_CREATORS,
  creators
})

export const fetchCreators = () => {
  return dispatch => {
    return creatorsUtil.fetchCreators()
      .then(creators => dispatch(receiveCreators(creators)))
  }
}
