import React from "react";
import LoggedinNavbar from "../loggedinNavbar/LoggedinNavbar";
import Footer from "../footer/footer";


const LoggedinLayout = ({ children })=>{


    return(
        <>
           <div className={CSS.outDiv}>

            <LoggedinNavbar />
            <div className={CSS.innerDiv}>
                { children }
            </div>
            <Footer />
           </div>
        </>
    )
}

export default LoggedinLayout;