import React from 'react'
import css from './Header.module.css'
import logo from '../../assets/logo.png'
import {RiShoppingBag3Fill} from 'react-icons/ri'
const Header = () => {
  return (
    <div className={css.container}>
        <div className={css.logo}>
            <img src={logo} alt="" />
            <span>Amazon</span>
        </div>
        <div className={css.right}>
            <ul className={css.menu}>
              <li>Collections</li>
              <li>Brands</li>
              <li>New</li>
              <li>Sales</li>
              <li>ENG</li>
            </ul>
          
            <input className={css.search} type="text" placeholder='Search' />
            <RiShoppingBag3Fill className={css.cart}/>
        </div>
    </div>
  )
}

export default Header