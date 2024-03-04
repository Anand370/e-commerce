import React, { useState } from 'react'
import css from "./LoggedinNavbar.module.css";
import logo from '../../../assets/image/e-logo.png';
import search from "../../../assets/image/google-search.png";
import darkmode from "../../../assets/image/dark-icon.png";
import whiteMode from "../../../assets/image/white-logo.png";
import { CiSearch, CiMenuBurger, CiUser } from "react-icons/ci";
import { FaAngleDown, FaAngleUp , FaBowlingBall, FaCalendar } from "react-icons/fa";
import userIcon from "../../../assets/image/anand.jpg";
import { BsCart3 } from "react-icons/bs";
import { useSelector } from 'react-redux';
import { RiLogoutBoxRFill } from "react-icons/ri";
const LoggedinNavbar = () => {
  const cartData = useSelector(store => store.cart.cart);
  const [drop, setDrop] = useState(false);
  const [profileOver, profileLeave] = useState(false)
  const handleMouseEnter = () => {
    let list = document.getElementById("moreList");
    list.setAttribute("style", "color:#fff;")
    setDrop(true)

  }
  const handleMouseLeave = () => {
    let list = document.getElementById("moreList");
    list.setAttribute("style", "color:#000;")
    setDrop(false)

  }
  const handleImgMouseEnter = () => {
    // let pimg = document.getElementById("profileOutDiv");
    // pimg.setAttribute("style", "display:flex;width:300px;height:auto;margin:10px 0 0 -130px")
  }
  const handleProfileLeave = () => {
    let pimg = document.getElementById("profileOutDiv");
    pimg.setAttribute("style", "display:none;")
  }
  return (
    <>
      <div className={css.Navbar}>
        <img src={logo} alt="logo" className={css.logo} />
        <div className={css.search_box}>
          <input type='text' placeholder='search' className={css.searchBar} />
          <img src={search} alt={'search icon'} className={css.search_icons} />
        </div>
        <div className={css.menuDiv}>

          <div className={css.manuList} id="moreList" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} > <p>More {drop ? <FaAngleDown id='drop1' /> : <FaAngleUp id='drop2' />}</p>
            <div className={css.profileOutDiv} id='profileOutDiv' onMouseLeave={handleProfileLeave}>

            </div>
          </div>

          <div className={css.manuList} >
            <h6>< BsCart3 size={25} />
              <p className={css.cartValue}>{cartData.length}</p></h6><p className={css.cartText}>Cart</p>
          </div>

          <div className={css.menuList1}  >
            <img src={userIcon} alt='user-icon' className={css.profileImg} onMouseEnter={handleImgMouseEnter} />
            <div className={css.profileOutDiv} id='profileOutDiv' onMouseLeave={handleProfileLeave}>
              <div className={css.profileInnDiv}>
                <div className={css.menuItem}>
                  <div className={css.menuInnItem}>
                    <p className={css.item}><CiUser size={25} /> Anand kumar</p>
                  </div>
                </div>
                <hr className={css.hr} />
                <div className={css.menuItem}>
                  <div className={css.menuInnItem}>
                    <p className={css.item}>
                    <p>< BsCart3 size={25} /> Cart</p>
                    <p> {cartData.length}</p>
                    </p>
                  </div>
                </div>
                <hr className={css.hr} />
                <div className={css.menuItem}>
                  <div className={css.menuInnItem}>
                    <p className={css.item}> <p>< FaBowlingBall size={25} />  my Order</p></p>
                  </div>
                </div>
                <hr className={css.hr} />
                <div className={css.menuItem}>
                  <div className={css.menuInnItem}>
                    <p className={css.item}><p><FaCalendar size={25} /> Notification</p></p>
                  </div>
                </div>
                <hr className={css.hr} />
                <div className={css.menuItem}>
                  <div className={css.menuInnItem}>
                    <p className={css.item}><p><FaCalendar size={25} /> Gift Card</p></p>
                  </div>
                </div>
                <hr className={css.hr} />
                <div className={css.menuItem}>
                  <div className={css.menuInnItem}>
                    <p className={css.item}><p><FaCalendar size={25} /> Coupons</p></p>
                  </div>
                </div>
                <hr className={css.hr} />
                <div className={css.menuItem}>
                  <div className={css.menuInnItem}>
                    <p className={css.item}><p><FaCalendar size={25} /> My profile</p></p>
                  </div>
                </div>
                <hr className={css.hr} />
                <div className={css.menuItem}>
                  <div className={css.menuInnItem}>
                    <p className={css.item}><p><RiLogoutBoxRFill size={25} /> Logout</p></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default LoggedinNavbar;