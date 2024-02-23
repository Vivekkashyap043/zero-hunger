import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Root'
import Home from './home/Home'
import Contactus from './contactus/Contactus'

function Router() {
    let router=createBrowserRouter([
        {
            path:"/",
            element:<Root/>,
            children:[  
                {
                    path:"",
                    element:<Login/>,
                    children:[
                      {
                        path:"/donar-login",
                        element:<DonarLogin/>
                      },
                      {
                        path:"/volunteer-login",
                        element:<VolunteerLogin/>
                      }
                    ]
                },
                {
                    path:"/contactus",
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
