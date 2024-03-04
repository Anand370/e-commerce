import React from "react";
import Footer from "../footer/footer";
import Navbar from "../Navbar/Navbar";
import css from "./layout1.module.css";

const Layout1 = ({ children })=>{


    return(
        <>
          <div className={css.outerDiv}>
             <Navbar />
             <div className={css.innerDiv}>
                <div>
                { children }
                </div>
             </div>
             <Footer />
          </div>
        </>
    )
}

export default Layout1;