import React from 'react'
import s from './Section_1.module.sass'
import title_image from '../../media/section_1_image_1.png'
import Button from '../UI/Button'

export default function Section_1() {
    return (
        <div className={s.section_one}>
            <div className={s.text_blok}>
                <div className={s.header_text}>
                    <div className={s.line}></div>
                    <p className={s.welcome}>Welcome to Pages!!!</p>
                </div>

                <p className={s.title_text}>
                    Your Books From
                </p>

                <p className={s.title_text}>
                    The Best Writer.
                </p>

                <div className={s.description}>
                    <p>
                        We believe that reading books are essential to a healthy culture.
                    </p>
                    <p>
                        They're where authors can connect with readers.
                    </p>
                </div>

                <div className={s.order}>
                    <Button>Order Today</Button>
                    <p>
                        Read Free Demo
                    </p>
                </div>

                <div className={s.properties}>

                    <div className={s.item}>
                        <div className={s.circle}></div>
                        <div>
                            <p className={s.name}>Pages:</p>
                            <p className={s.decoding}>250 Pages</p>
                        </div>
                    </div>

                    <div className={s.item}>
                        <div className={s.circle}></div>
                        <div>
                            <p className={s.name}>Length:</p>
                            <p className={s.decoding}>10 Hours</p>
                        </div>
                    </div>

                    <div className={s.item}>
                        <div className={s.circle}></div>
                        <div>
                            <p className={s.name}>Rating:</p>
                            <p className={s.decoding}>4.5/5 (305 ratings)</p>
                        </div>
                    </div>

                </div>

            </div>
            <div className={s.img_blok}>
                <img alt='' src={title_image}></img>
            </div>
        </div>
    )
}
