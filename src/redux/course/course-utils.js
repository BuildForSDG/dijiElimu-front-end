// export const selectCourseFromDepratments = (courses, courseId)=>{
//     return courses.find(course=>course.id===courseId)
// }

const selectCourseDepartments = (departments, courseId) => {
  let course;
  departments.forEach((department) => {
    department.courses.forEach((cour) => {
      if (cour.id === courseId) {
        course = cour;
      }
    });
  });
  console.log(course);
  
  return course;
};

export default selectCourseDepartments;
