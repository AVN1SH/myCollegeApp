import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import Home from "./pages/Home.tsx"

import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store/store.ts";
import Registration from './pages/Registration.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path="/registration" element={<Registration />} />
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
