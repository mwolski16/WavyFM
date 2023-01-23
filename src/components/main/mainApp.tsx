import React, { useState } from 'react'
import { useLocation } from "react-router-dom";

function MainApp() {
 
  const location = useLocation();
    let isAdminLoggedIn = location?.state.isAdminLoggedIn || false;
    console.log(isAdminLoggedIn);
    const [isAdmin, setIsAdmin] = useState(isAdminLoggedIn);
    return ( 
    isAdmin ? <div>Admin</div> : <div>Not admin</div>
  )
}

export default MainApp