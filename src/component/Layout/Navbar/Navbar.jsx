import React from 'react'
import css from "./Navbar.module.css";
import logo from '../../../assets/image/e-logo.png';
import search from "../../../assets/image/google-search.png";
import darkmode from "../../../assets/image/dark-icon.png";
import whiteMode from "../../../assets/image/white-logo.png";
import { CiSearch, CiMenuBurger } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const cartData = useSelector(store=> store.cart.cart);
  console.log(cartData)
  return (
    <div className={css.Navbar}>
        <img src={logo} alt="logo" className={css.logo} />
        <div className={css.search_box}>
            <input type='text' placeholder='search' className={css.searchBar} />
            <img src={search} alt={'search icon'} className={css.search_icons} />
        </div>
        <ul className={css.menuDiv}>
            {/* <li className={css.manuList}>Product</li>
            <li className={css.manuList}>Features</li> */}
            
            <div className={css.manuList} ><h6>< BsCart3 size={25} /> <p className={css.cartValue}>{cartData.length}</p></h6><p className={css.cartText}>Cart</p></div>
            <div className={css.manuList}><button className={css.menuBtn}>Signin</button></div>
            <div className={css.manuList}  ><button className={css.menuBtn}>Signup</button></div>
        </ul>
        
          <div className={css.menuIcon}>
               <span><CiMenuBurger size={40} /></span>
               <div className={css.menuOuterDiv}>
                  <div className={css.menuInnerDiv}>
                     <div className={css.menuDivItem}>
                       <p>< BsCart3 size={25} /> Cart</p> <p>{cartData.length}</p>
                     </div>
                     <div className={css.menuDivItem} >
                        <p >Signin</p>
                     </div>
                     <div className={css.menuDivItem} >
                        <p >Signup</p>
                     </div>
                  </div>
               </div>
          </div>
    </div>
  )
}

export default Navbar