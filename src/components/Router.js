import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Root'
import Home from './home/Home'
import Contactus from './contactus/Contactus'
import Login from './login/Login'
import Register from './register/Register'
import DonarDashboard from './donar-dashboard/DonarDashboard';
import DonarRegister from './register/DonarRegister'
import VolunteerRegister from './register/VolunteerRegister'

function Router() {
    let router=createBrowserRouter([
        {
            path:"/",
            element:<Root/>,
            children:[
                {
                    path:" ",
                    element:<Home />
                },
                {
                    path:"contactus",
                    element:<Contactus/>
                },
                {
                  path:"login",
                  element:<Login />
                },
                {
                  path:"register",
                  element:<Register />,
                },
                    {
                      path:"donar-register",
                      element:<DonarRegister />
                    },
                    {
                      path:"volunteer-register",
                      element:<VolunteerRegister />
                    },
                {
                  path:"donar-dashboard",
                  element:<DonarDashboard />
                }
            ]
        }
    ])
  return (
    <div>
      <RouterProvider  router={router}/>
    </div>
  )
}

export default Router
