import React from "react";
import css from "./footer.module.css";
import { FaFacebookSquare, FaInstagramSquare, FaLinkedinIn,FaWhatsapp } from "react-icons/fa";

const Footer = ()=>{

    return (
        <>
          <div className={css.fOuterDiv}>
            <div className={css.fInnerDiv}>
                <div className={css.fMenuItem}>
                    <h3 className={css.item}>About</h3>
                    <p className={css.item} >contact us</p>
                    <p className={css.item} >about us</p>
                    <p className={css.item} >careers</p>
                    <p className={css.item} >corporate information</p>
                    <p className={css.item} >press</p>
                </div>
                <div className={css.fMenuItem} >
                    <h3 className={css.item} >Help</h3>
                    <p className={css.item} > payments</p>
                    <p className={css.item} > Shiping</p>
                    <p className={css.item} > cncellation & returns</p>
                    <p className={css.item} > FAQ</p>
                </div>
                <div className={css.fMenuItem} >
                    <h3>Connect with us</h3>
                    <div>
                        <p className={css.item} > <FaFacebookSquare size={20} /> Facebook</p>
                        <p className={css.item}> <FaWhatsapp size={20} /> Whatsapp</p>
                        <p className={css.item} ><FaLinkedinIn  size={20} /> Linkedin</p>
                        <p className={css.item} > <FaInstagramSquare size={20} /> Instagram</p>
                    </div>
                </div>
                <div className={css.fMenuItem}>
                    <h3>Address</h3>
                    <p className={css.item} >
                        #23,Baba gents homes pg, asrath nagar, 2nd cross, marthahalli, bangalore
                    </p>
                </div>
            </div>
             <div className={css.rightServed}>
                <p>All right reserved to e-commerce.com</p>
             </div>
          </div>
        </>
    )
}

export default Footer;