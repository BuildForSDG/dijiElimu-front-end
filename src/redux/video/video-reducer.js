import videoActionTypes from './video-action-types';

const INITIAL_STATE = {
  video: null,
  isLoading: false,
  error: null,
  isCreating:false,
  isUpdating:false,
  createVideoHidden: true
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
    case videoActionTypes.HIDE_CREATE_VIDEO_COMPONENT:
      return {
        ...state,
        createVideoHidden: true
      }
    case videoActionTypes.TOGGLE_CREATE_VIDEO_HIDDEN:
      return {
        ...state,
        createVideoHidden: !state.createVideoHidden
      }
    case videoActionTypes.TOGGLE_COMPONENT_TO_CREATE:
      return {
        ...state,
        isCreating: true,
        isUpdating: false
      }
    default:
      return state;
  }
};

export default videoReducer;
