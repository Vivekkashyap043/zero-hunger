import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Root'
import Home from './home/Home'
import Contactus from './contactus/Contactus'
import Login from './login/Login'
import DonarLogin from './login/DonarLogin'
import VolunteerLogin from './login/VolunteerLogin'

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
