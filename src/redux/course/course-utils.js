// export const selectCourseFromDepratments = (courses, courseId)=>{
//     return courses.find(course=>course.id===courseId)
// }

const selectCourseDepartments = (departments, courseCode) => {
  let course;
  departments.forEach((department) => {
    department.courses.forEach((cour) => {
      if (cour.code === courseCode) {
        course = cour;
      }
    });
  });
  return course;
};

export default selectCourseDepartments;
