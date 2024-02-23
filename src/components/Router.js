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
                    path:" ",
                    element:<Home />
                },
                {
                    path:"contactus",
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
