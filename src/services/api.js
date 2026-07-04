import axios from "axios";

const API_URL = "http://localhost:3001/students";
const ATTENDANCE_URL = "http://localhost:3001/attendance";

// Student APIs
export const getStudents = () => axios.get(API_URL);

export const getStudent = (id) => axios.get(`${API_URL}/${id}`);

export const addStudent = (student) => axios.post(API_URL, student);

export const updateStudent = (id, student) =>
  axios.put(`${API_URL}/${id}`, student);

export const deleteStudent = (id) => axios.delete(`${API_URL}/${id}`);

// Attendance APIs
export const getAttendance = () => axios.get(ATTENDANCE_URL);

export const getAttendanceById = (id) => axios.get(`${ATTENDANCE_URL}/${id}`);

export const addAttendance = (attendance) =>
  axios.post(ATTENDANCE_URL, attendance);

export const updateAttendance = (id, attendance) =>
  axios.put(`${ATTENDANCE_URL}/${id}`, attendance);

export const deleteAttendance = (id) => axios.delete(`${ATTENDANCE_URL}/${id}`);
const PROGRESS_URL = "http://localhost:3001/progress";

export const getProgress = () => axios.get(PROGRESS_URL);

export const getProgressById = (id) => axios.get(`${PROGRESS_URL}/${id}`);

export const addProgress = (data) => axios.post(PROGRESS_URL, data);

export const updateProgress = (id, data) =>
  axios.put(`${PROGRESS_URL}/${id}`, data);

export const deleteProgress = (id) => axios.delete(`${PROGRESS_URL}/${id}`);
