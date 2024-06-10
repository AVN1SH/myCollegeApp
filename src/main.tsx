import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import Home from "./pages/Home.tsx"
import Layout from "./pages/studentDashboard/Layout.tsx"
import Overview from "./pages/studentDashboard/Overview.tsx"
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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/faculty/login" element={<FacultyLogin />} />
      <Route path="/faculties" element={<Faculties />} />
      <Route path="/about-us" element={<AboutUs />} />

      <Route path="/student-dashboard" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
        <Route path="overview" element={<ProtectedRoute><Overview /></ProtectedRoute>} />
        <Route path="admission/personal-info" element={<ProtectedRoute><PersonalInfo /></ProtectedRoute>} />
        <Route path="admission/address" element={<ProtectedRoute><Address /></ProtectedRoute>} />
        <Route path="admission/qualifications" element={<ProtectedRoute><Qualification /></ProtectedRoute>} />
        <Route path="documentation" element={<ProtectedRoute><Docs /></ProtectedRoute>} />
        <Route path="payment" element={<ProtectedRoute><Payment /></ProtectedRoute>} />
        <Route path="syllabus" element={<ProtectedRoute><Syllabus /></ProtectedRoute>} />
        <Route path="my-classes" element={<ProtectedRoute><MyClasses /></ProtectedRoute>} />
        <Route path="teachers" element={<ProtectedRoute><Teachers /></ProtectedRoute>} />
        <Route path="feedback" element={<ProtectedRoute><FeedBack /></ProtectedRoute>} />
        <Route path="progress-report" element={<ProtectedRoute><Progress /></ProtectedRoute>} />
        <Route path="result" element={<ProtectedRoute><Results /></ProtectedRoute>} />
      </Route>

      <Route path="/faculty-dashboard" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
        <Route path="class" element={<ProtectedRoute><Class /></ProtectedRoute>} />
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
