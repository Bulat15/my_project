import React from 'react'
import s from './Header.module.sass'
import logotip from '../../media/logo.png'
import Button from '../UI/Button'
import facebook from '../../media/facebook.svg'
import twitter from '../../media/twitter.svg'
import linkedin from '../../media/in.svg'

export default function Header() {
    return (
        <nav className={s.main}>
            <div className={s.href}>
                <img className={s.logotip} src={logotip}></img>
                <div className={s.webLogo}>
                    <a href='#' >
                        <div className={s.link}>
                            <img src={facebook}></img>
                        </div>
                    </a>
                    <a href='#'>
                        <div className={s.link}>
                            <img src={twitter}></img>
                        </div>
                    </a>
                    <a href='#'>
                        <div className={s.link}>
                            <img src={linkedin}></img>
                        </div>
                    </a>
                </div>
            </div>
            <ul className={s.main_list}>
                <li>Home</li>
                <li>About</li>
                <li>Pages</li>
                <li>Contact us</li>
            </ul>
            <div className={s.btn}>
                <Button>Order Today</Button>
            </div>
        </nav>
    )
}
