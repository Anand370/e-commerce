import React from "react";
import Home from "../HomePage/HomePage";
import Signin from "../Layout/auth/Signin/Signin";
import Signup from "../Layout/auth/Signup/Signup";



const LoggedInRoutes = [
    {
        path:"/",
        element:<Home />
    },
    {
        path:"/join/signin",
        element:<Signin />
    },
    {
        path:"/join/signup",
        element:<Signup />
    }
]

export default LoggedInRoutes;