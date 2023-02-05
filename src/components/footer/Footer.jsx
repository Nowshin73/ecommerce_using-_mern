import React from 'react'
import css from './Footer.module.css'
import logo from '../../assets/logo.png'
import {IoLocationOutline} from 'react-icons/io5'
import {BsTelephone} from 'react-icons/bs'
import {CiMail} from 'react-icons/ci'
import {GoSignIn} from 'react-icons/go'
import {MdPeopleOutline} from 'react-icons/md'
import {RiLinksFill} from 'react-icons/ri'
const Footer = () => {
  return (
    <div className={css.footer}>
        <hr />
        <div className={css.container}>
            <div className={css.logo}>
                <img src={logo} alt="" />
                <span>Amazon</span>
            </div>
            <div className={css.part}>
                <h2>Contact Us</h2>
                <div>
                <IoLocationOutline/><span><address>111 north avenue Ontario, Ft, 32801</address></span>
                </div>
                <div><BsTelephone/><span>352-306-4415</span></div>
                <div><CiMail/><span>support@amazon.com</span></div>
            </div>
            <div className={css.part}>
                <h2>Account</h2>
                <div><GoSignIn/><span>Sign-in</span></div>
            </div>
            <div className={css.part}>
                <h2>Company</h2>
                <div><MdPeopleOutline/><span>About us</span></div>
            </div>
            <div className={css.part}>
                <h2>Resources</h2>
                <div><RiLinksFill/><span>Safety Privacy & Terms</span></div>
            </div>
        </div>
        <div className={css.copyright}>
            <span>Copyright c2023 by Amazon, Inc. </span>
            <span>All rights reserved</span>
        </div>
    </div>
  )
}

export default Footer