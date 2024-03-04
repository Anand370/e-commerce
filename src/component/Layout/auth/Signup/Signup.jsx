import React from "react";
import css from "./Signup.module.css"
import { Link } from "react-router-dom"

const Signup = () => {


    return (
        <div className={css.outDiv}>
            <div className={css.innerDiv}>
                <div className={css.subDiv1} ></div>
                <div className={css.subDiv2}>
                    <h1 className={css.heading} >Signup</h1>
                    <div className={css.subDiv3}>
                        <div>
                        <div className={css.subDiv4}>
                                <p>Name</p>
                                <input type="email" placeholder="Enter your name" className={css.inputField1} />
                            </div>
                            <div className={css.subDiv4}>
                                <p>Email</p>
                                <input type="email" placeholder="Enter your email" className={css.inputField1} />
                            </div>
                            <div className={css.subDiv4} >
                                <p>Password</p>
                                <input type="password" placeholder="Enter your password" className={css.inputField2} />
                            </div>
                            <div className={css.subDiv4} >
                                <p>Phone No.</p>
                                <input type="number" placeholder="Enter your password" className={css.inputField2} />
                            </div>
                        </div>
                        <div className={css.btnDiv}>
                            <button className={css.btn}>Submit</button>
                        </div>
                    </div>

                    <div className={css.subDiv5}>
                        <p>Forgot password? <button>Click here</button></p>
                        <p>Already have account? <button>Signin</button></p>
                    </div>
                </div>
                <div className={css.subDiv1} ></div>
            </div>
        </div>
    )
}

export default Signup;