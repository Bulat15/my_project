import React from 'react'
import s from './Section_5.module.sass'
import cup from '../../media/section_5_image_1.png' 

export default function Section_5() {
  return (
    <div className={s.main}>

        <div className={s.text}>
            <p className={s.header}>Get Book Copy Today!</p>
            <div className={s.line}></div>
            <p className={s.description}>
            We believe that bookstores are essential to a healthy culture. 
            They're where authors can connect with readers.
            </p>
        </div>

        <img src={cup}></img>

    </div>
  )
}
