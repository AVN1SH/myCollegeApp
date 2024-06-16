import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import Home from "./pages/Home.tsx"
import Layout from "./pages/studentDashboard/Layout.tsx"
import FaLayout from "./pages/facultyDashboard/FaLayout.tsx"
import Overview from "./pages/studentDashboard/Overview.tsx"
import FaOverview from './pages/facultyDashboard/FaOverview.tsx'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store/store.ts";
import Registration from './pages/Registration.tsx'
import LogIn from './pages/LogIn.tsx'
import PersonalInfo from './pages/studentDashboard/admission/PersonalInfo.tsx'
import Address from './pages/studentDashboard/admission/Address.tsx'
import Qualification from './pages/studentDashboard/admission/Qualification.tsx'
import Docs from './pages/studentDashboard/Docs.tsx'
import Payment from './pages/studentDashboard/Payment.tsx'
import Syllabus from './pages/studentDashboard/Syllabus.tsx'
import MyClasses from './pages/studentDashboard/MyClasses.tsx'
import FeedBack from './pages/studentDashboard/FeedBack.tsx'
import Progress from './pages/studentDashboard/Progress.tsx'
import Faculties from './pages/Faculties.tsx'
import PageNotFound from './pages/PageNotFound.tsx'
import Teachers from './pages/studentDashboard/Teachers.tsx'
import FacultyLogin from './pages/FacultyLogin.tsx'
import Class from './pages/facultyDashboard/Class.tsx'
import Results from './pages/studentDashboard/Results.tsx'
import AboutUs from './pages/AboutUs.tsx'
import ProtectedRoute from './components/auth/ProtectedRoute.tsx'
import Developer from './pages/Developer.tsx'
import Assignment from './pages/facultyDashboard/Assignments.tsx'
import Profile from './pages/Profile.tsx'
import Programs from './pages/Programs.tsx'
import Course from './pages/Course.tsx'
import FacultyProtectedRoute from './components/auth/FacultyProtectedRoute.tsx'
import StudentProtectedRoute from './components/auth/StudentProtectedRoute.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/faculty/login" element={<FacultyLogin />} />
      <Route path="/faculties" element={<Faculties />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/developer" element={<Developer />} />
      <Route path="/profile/:id" element={<Profile />} />
      <Route path="/programs/:id" element={<Course />} />

      <Route path="/student-dashboard" element={<ProtectedRoute><StudentProtectedRoute><Layout /></StudentProtectedRoute></ProtectedRoute>}>
        <Route path="overview" element={<ProtectedRoute><StudentProtectedRoute><Overview /></StudentProtectedRoute></ProtectedRoute>} />
        <Route path="admission/personal-info" element={<ProtectedRoute><StudentProtectedRoute><PersonalInfo /></StudentProtectedRoute></ProtectedRoute>} />
        <Route path="admission/address" element={<ProtectedRoute><StudentProtectedRoute><Address /></StudentProtectedRoute></ProtectedRoute>} />
        <Route path="admission/qualifications" element={<ProtectedRoute><StudentProtectedRoute><Qualification /></StudentProtectedRoute></ProtectedRoute>} />
        <Route path="documentation" element={<ProtectedRoute><StudentProtectedRoute><Docs /></StudentProtectedRoute></ProtectedRoute>} />
        <Route path="payment" element={<ProtectedRoute><StudentProtectedRoute><Payment /></StudentProtectedRoute></ProtectedRoute>} />
        <Route path="syllabus" element={<ProtectedRoute><StudentProtectedRoute><Syllabus /></StudentProtectedRoute></ProtectedRoute>} />
        <Route path="my-classes" element={<ProtectedRoute><StudentProtectedRoute><MyClasses /></StudentProtectedRoute></ProtectedRoute>} />
        <Route path="teachers" element={<ProtectedRoute><StudentProtectedRoute><Teachers /></StudentProtectedRoute></ProtectedRoute>} />
        <Route path="feedback" element={<ProtectedRoute><StudentProtectedRoute><FeedBack /></StudentProtectedRoute></ProtectedRoute>} />
        <Route path="progress-report" element={<ProtectedRoute><StudentProtectedRoute><Progress /></StudentProtectedRoute></ProtectedRoute>} />
        <Route path="result" element={<ProtectedRoute><StudentProtectedRoute><Results /></StudentProtectedRoute></ProtectedRoute>} />
      </Route>

      <Route path="/faculty-dashboard" element={<ProtectedRoute><FacultyProtectedRoute><FaLayout /></FacultyProtectedRoute></ProtectedRoute>}>
        <Route path="overview" element={<ProtectedRoute><FacultyProtectedRoute><FaOverview /></FacultyProtectedRoute></ProtectedRoute>} />
        <Route path="feedback" element={<ProtectedRoute><FacultyProtectedRoute><FeedBack /></FacultyProtectedRoute></ProtectedRoute>} />
        <Route path="class" element={<ProtectedRoute><FacultyProtectedRoute><Class /></FacultyProtectedRoute></ProtectedRoute>} />
        <Route path="assignment" element={<ProtectedRoute><FacultyProtectedRoute><Assignment /></FacultyProtectedRoute></ProtectedRoute>} />
      </Route>

      <Route path='*' element={<PageNotFound />} />

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router = {router} />
    </Provider>
  </React.StrictMode>
)
