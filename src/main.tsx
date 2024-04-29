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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/login" element={<LogIn />} />

      <Route path="/student-dashboard" element={<Layout />}>
        <Route path="overview" element={<Overview />} />
        <Route path="admission/personal-info" element={<PersonalInfo />} />
        <Route path="admission/address" element={<Address />} />
        <Route path="admission/qualifications" element={<Qualification />} />
      </Route>

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router = {router} />
    </Provider>
  </React.StrictMode>,
)
