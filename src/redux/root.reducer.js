import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import departmentReducer from './department/department-reducer';
import courseReducer from './course/course-reducer';
import videoReducer from './video/video-reducer';
import pdfReducer from './pdf/pdf-reducer';
import unitReducer from './unit/unit-reducer';
import errorReducer from './error/error-reducer';


const rootReducer = combineReducers({
  user: userReducer,
  department: departmentReducer,
  course: courseReducer,
  unit: unitReducer,
  video: videoReducer,
  pdf: pdfReducer,
  error: errorReducer
});

export default rootReducer;
