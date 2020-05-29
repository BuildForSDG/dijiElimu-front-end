import videoActionTypes from './video-action-types';

const INITIAL_STATE = {
  video: null,
  isLoading: false,
  error: null
};
const videoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case videoActionTypes.FETCH_VIDEO_START:
      return {
        ...state,
        isLoading: true
      };
    case videoActionTypes.FETCH_VIDEO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        video: action.payload
      };
    case videoActionTypes.FETCH_VIDEO_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default videoReducer;
