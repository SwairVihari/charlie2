import React from 'react'
import Styles from './ThankYou.module.css'
const ThankYou = () => {
  return (
    <>
    <h1 className={`${Styles.center} ${Styles.color}`}>
        Congratulations!
    </h1>

    <h1 className={Styles.center}>
        You're In!
    </h1>

    <div className={Styles.videoContainer}>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/XK7T3mY1V-w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    <div className={Styles.box}>
        <h1 className={Styles.box_h1}>HERE'S WHAT TO DO NOW...</h1>

        <div className={Styles.box_item}>
            <h1>
            1. CHECK YOUR EMAIL & ADD EVENT TO YOUR CALENDAR 
            </h1>

            <p>
            Save the date by clicking on the button below. Remember to check your email. 
            </p>

            <p>
            A Zoom link to join the web Masterclass will be sent to you 1 hour before the class begins. 
If you don't see it, please check your Spam Folder or Promotion Tab.
            </p>
        </div>

        <div className={Styles.box_item}>
            <h1>
            2. CHECK YOUR EMAIL
            </h1>

            <p>
            Remember to check your email as a zoom link to join the webclass will be sent to you 1 hour before the class begins. If you don't see it, please check your Spam or Promotions folders.
            </p>
        </div>


        
        <div className={Styles.box_item}>
            <h1>
            3. BLOCK OUT YOUR TIME
            </h1>

            <p>
            The webclass will last for 90 minutes so turn off all distractions to really get the most out of this session!
            </p>
        </div>

        <div className={Styles.box_item}>
            <h1>
            4. USE YOUR DESKTOP
            </h1>

            <p>
            I will be sharing a few graphs and data during the webclass, and to get the full experience, do use your desktop instead of your mobile device.
            </p>
        </div>

        
        <div className={Styles.box_item}>
            <h1>
            5. GET READY!
            </h1>

            <p>
            Get your pen and paper ready as you embark on a journey filled with expert trading knowledge. 
            </p>
        </div>


    



    </div>
    <h1 className={`${Styles.center} ${Styles.color}`}>
        WE'LL SEE YOU SOON!
    </h1>

    </>
  )
}

export default ThankYou