import { Outlet } from "react-router-dom";

const Layout =()=>{
  return(
    <div className="">
      Layout Page
      <Outlet/>
    </div>
  )
}

export default Layout;