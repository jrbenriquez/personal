import React, { useState } from "react"
import { animated, useSpring, config } from 'react-spring'
import { Link } from "gatsby"
// import "./header.module.scss"

import headerStyles from './header.module.scss'

const Header = (props) => {
    const {
        location,
        setClicked
    } = props

    return (
        <header className={headerStyles.header}>
            <h1><Link className={headerStyles.title} to='/'>JOHN REI ENRIQUEZ </Link></h1>
            <nav>
            <ul className={headerStyles.navList}>
                <li><Link onClick={() => {location.pathname === '/' ? console.log('active') : setClicked(true) }} className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link></li>
                <li><Link onClick={() => {location.pathname === '/routine' ? console.log('active') : setClicked(true) }} className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/routine">Bass Shed</Link></li>
                <li><Link onClick={() => {location.pathname === '/about' ? console.log('active') : setClicked(true) }} className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">About Me</Link></li>
                <li><Link onClick={() => {location.pathname === '/contact' ? console.log('active') : setClicked(true) }} className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">Contact</Link></li>
            </ul>
            </nav>

        </header>
    )
}

export default Header