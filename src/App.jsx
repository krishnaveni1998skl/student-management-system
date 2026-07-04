import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import ProtectedRoute from "./routes/ProtectedRoute";
import StudentList from "./pages/students/StudentList";
import AddStudent from "./pages/students/AddStudent";
import EditStudent from "./pages/students/EditStudent";
import ViewStudent from "./pages/students/ViewStudent";
import Attendance from "./pages/attendance/Attendance";
import AddAttendance from "./pages/attendance/AddAttendance";
import ViewAttendance from "./pages/attendance/ViewAttendance";
import EditAttendance from "./pages/attendance/EditAttendance";
import Reports from "./pages/reports/Reports";
import Progress from "./pages/progress/Progress";
import AddProgress from "./pages/progress/AddProgress";
import EditProgress from "./pages/progress/EditProgress";
import ViewProgress from "./pages/progress/ViewProgress";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/students"
          element={
            <ProtectedRoute>
              <StudentList />
            </ProtectedRoute>
          }
        />

        <Route
          path="/students/add"
          element={
            <ProtectedRoute>
              <AddStudent />
            </ProtectedRoute>
          }
        />

        <Route
          path="/students/edit/:id"
          element={
            <ProtectedRoute>
              <EditStudent />
            </ProtectedRoute>
          }
        />

        <Route
          path="/students/view/:id"
          element={
            <ProtectedRoute>
              <ViewStudent />
            </ProtectedRoute>
          }
        />
        <Route
          path="/attendance"
          element={
            <ProtectedRoute>
              <Attendance />
            </ProtectedRoute>
          }
        />
        <Route
          path="/attendance/add"
          element={
            <ProtectedRoute>
              <AddAttendance />
            </ProtectedRoute>
          }
        />
        <Route
          path="/attendance/view/:id"
          element={
            <ProtectedRoute>
              <ViewAttendance />
            </ProtectedRoute>
          }
        />
        <Route
          path="/attendance/edit/:id"
          element={
            <ProtectedRoute>
              <EditAttendance />
            </ProtectedRoute>
          }
        />
        <Route
          path="/reports"
          element={
            <ProtectedRoute>
              <Reports />
            </ProtectedRoute>
          }
        />
        <Route
          path="/progress"
          element={
            <ProtectedRoute>
              <Progress />
            </ProtectedRoute>
          }
        />

        <Route
          path="/progress/add"
          element={
            <ProtectedRoute>
              <AddProgress />
            </ProtectedRoute>
          }
        />
        <Route
          path="/progress/edit/:id"
          element={
            <ProtectedRoute>
              <EditProgress />
            </ProtectedRoute>
          }
        />
        <Route
          path="/progress/view/:id"
          element={
            <ProtectedRoute>
              <ViewProgress />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
