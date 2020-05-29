import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import departmentReducer from './department/department-reducer';
import courseReducer from './course/course-reducer';
import videoReducer from './video/video-reducer';
import pdfReducer from './pdf/pdf-reducer';


const rootReducer = combineReducers({
  user: userReducer,
  department: departmentReducer,
  course: courseReducer,
  video: videoReducer,
  pdf: pdfReducer
});

export default rootReducer;
