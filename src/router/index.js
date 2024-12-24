import Layout from "@/pages/Layout";
import Login from "@/pages/Login";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'/login',
        element:<Login/>
      }
    ]
  },
  {
    path:'*',
    element:<div>you missed ? </div>
  }
])

export default router