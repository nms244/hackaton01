import axios from "axios"

// async function request(path, options = {}) {
//   const url = `${process.env.REACT_APP_API_ORIGIN}${path}`;
//   const response = await fetch(url, options);
//   return response.json();
// }

// export async function getStudentTasks(studentId) {
//   const params = new URLSearchParams(arg);
//   return request(`/api/tasks/filter/student/${studentId}`);
// }

function request(path) {
  const url = `${process.env.REACT_APP_API_ORIGIN}${path}`;
  axios.get(url).then((response) => {
    return response.data;
  });
}

export function getStudentTasks(studentId) {
  return request(`/api/tasks/filter/student/${studentId.toString()}`);
}

