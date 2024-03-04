import React from "react";
import css from "./Signin.module.css"
import { Link } from "react-router-dom"

const Signin = () => {


    return (
        <div className={css.outDiv}>
            <div className={css.innerDiv}>
                <div className={css.subDiv1} ></div>
                <div className={css.subDiv2}>
                    <h1 className={css.heading} >Login to your account</h1>
                    <div className={css.subDiv3}>
                        <p className={css.hGoogle}>Signin with google account</p>
                        <div>
                            <div className={css.subDiv4}>
                                <p>Email</p>
                                <input type="email" placeholder="Enter your username" className={css.inputField1} />
                            </div>
                            <div className={css.subDiv4} >
                                <p>Password</p>
                                <input type="password" placeholder="Enter your password" className={css.inputField2} />
                            </div>
                        </div>
                        <div className={css.btnDiv}>
                            <button className={css.btn}>Submit</button>
                        </div>
                    </div>

                    <div className={css.subDiv5}>
                        <p>Forgot password? <button>Click here</button></p>
                        <p>Don't have account? <button>Signup</button></p>
                    </div>
                </div>
                <div className={css.subDiv1} ></div>
            </div>
        </div>
    )
}

export default Signin;