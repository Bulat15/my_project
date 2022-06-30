import React from 'react'
import s from './Footer.module.sass'
import logotip from '../../media/logo.png'
import facebook from '../../media/facebook_for_down.svg'
import twitter from '../../media/twitter_for_down.svg'
import linkedin from '../../media/in_for_down.svg'
import inst from '../../media/inst.svg'

export default function Footer() {
  return (
    <div className={s.main}>
        <div className={s.logo}>

            <div className={s.img}>
                <img src={logotip}></img>
            </div>

            <div className={s.network}>

                <div className={s.square}>
                    <img src={facebook}></img>
                </div>

                <div className={s.square}>
                    <img src={twitter}></img>
                </div>

                <div className={s.square}>
                    <img src={linkedin}></img>
                </div>

                <div className={s.square}>
                    <img src={inst}></img>
                </div>
            </div>

        </div>

        <div className={s.explore}>
            <p className={s.name}>Explore</p>

            <div className={s.paragraph}>
                <div className={s.point}></div>
                <div className={s.point}></div>
                <div className={s.point}></div>
                <a>Home</a>
            </div>

            <div className={s.paragraph}>
                <div className={s.point}></div>
                <div className={s.point}></div>
                <div className={s.point}></div>
                <a>About</a>
            </div>

            <div className={s.paragraph}>
                <div className={s.point}></div>
                <div className={s.point}></div>
                <div className={s.point}></div>
                <a>Articles</a>
            </div>

            <div className={s.paragraph}>
                <div className={s.point}></div>
                <div className={s.point}></div>
                <div className={s.point}></div>
                <a>Our store</a>
            </div>

            <div className={s.paragraph}>
                <div className={s.point}></div>
                <div className={s.point}></div>
                <div className={s.point}></div>
                <a>Contact us</a>
            </div>

        </div>




        <div className={s.Utility}>
            <p className={s.name}>Utility Pages</p>

            <div className={s.paragraph}>
                <div className={s.point}></div>
                <div className={s.point}></div>
                <div className={s.point}></div>
                <a>Style Guide</a>
            </div>

            <div className={s.paragraph}>
                <div className={s.point}></div>
                <div className={s.point}></div>
                <div className={s.point}></div>
                <a>404 Not Found</a>
            </div>

            <div className={s.paragraph}>
                <div className={s.point}></div>
                <div className={s.point}></div>
                <div className={s.point}></div>
                <a>Password Protected</a>
            </div>

            <div className={s.paragraph}>
                <div className={s.point}></div>
                <div className={s.point}></div>
                <div className={s.point}></div>
                <a>Licenses</a>
            </div>

            <div className={s.paragraph}>
                <div className={s.point}></div>
                <div className={s.point}></div>
                <div className={s.point}></div>
                <a>Changelog</a>
            </div>

        </div>


        <div className={s.keep}>
            <p className={s.name}>Keep in Touch Pages</p>

            <div className={s.keep_text}>
                <div className={s.paragraph_first}>
                    <p className={s.address}>Address:</p>
                    <p className={s.mail}>Mail:</p>
                    <p className={s.phone}>Phone:</p>
                </div>

                <div className={s.paragraph_second}>
                    <p>24A Kingston St, Los Vegas<br></br>NC 28202, USA.</p>
                    <p>support@pages.com</p>
                    <p>(+22) 123 - 4567 - 900</p>
                </div>
            </div>

        </div>        


    </div>
  )
}
