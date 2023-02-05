import React from 'react'
import css from '../hero/hero.module.css'
import hero from '../../assets/hero.png'
import {FaShoppingBag} from 'react-icons/fa'
import {BsArrowRight} from 'react-icons/bs'
import { motion } from 'framer-motion'
const Hero = () => {
    return (
        <div className={css.container}>
            <div className={css.h_sides}>
                <span className={css.text1}>Skin Protection Cream</span>
                <div className={css.text2}>
                    <span>Trendy Collection</span>
                    <span>
                        {""}
                        Maintain your skin's protective barrier with CeraVe Healing Ointment
                    </span>
                </div>
            </div>
            <div className={css.wrapper}>
                <motion.div 
                initial={ {top:'-2%'}}
                whileInView = {{top: "19%"}}
                transition={{ duration: 0.5 }}
                className={css.blueCircle}>
                    
                </motion.div>
                <motion.img
                initial={ {top:'30%'}}
                whileInView = {{top: "19%"}}
                transition={{ duration: 0.5 }}
                className ={css.hero_img}
                 src={hero} alt="" width={600} />
               
                <motion.div 
                initial={ {right:'-10%'}}
                whileInView = {{ right: "0%"}}
                transition={{ duration: 0.5 }}
                className={css.cart2}>
                    <FaShoppingBag/>
                    <div className={css.sign_up}>
                     <span>Best Sign Up Offers</span>
                    <div>
                        <BsArrowRight/>
                    </div>
                    </div>
                </motion.div>
            </div>
            {/* right side */}
            <div className={css.h_sides}>
                <div className={css.traffic}>
                    <span>1.5m</span>
                    <span>Monthly Traffic</span>
                </div>
                <div className={css.customers}>
                    <span>100k</span>
                    <span>Happy Customers</span>
                </div>
            </div>
        </div>
    )
}

export default Hero