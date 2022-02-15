import React from 'react'
import { Button } from 'react-bootstrap'
import Styles from './Card.module.css'

const Card = () => {
  return (
    <div className={Styles.Card}>
        <div className={Styles.videoContainer}>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/XK7T3mY1V-w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        <div className={Styles.CardText}>
        <h4 className={Styles.CardTexth4}>
            SECURE YOUR LIVE TICKET RIGHT NOW!
        </h4>

        <div className={Styles.CardSubText}>
            <h4>
            Here's what you'll discover:
            </h4>

            <ul>
                <li>
                How You Can Generate Consistent Returns From The Market In Any Market Condition (... Yes, Even In A Crisis Like This!) 
                </li>

                <li>
                How You Can Start Trading Like The Pros, With As Little As $500 And Just Spending 15 Minutes A Day (I’m Revealing What Institutional Traders Don't Want You To Know!) 
                </li>

                <li>
                Copy and Paste One of My Most Closely Guarded Strategies (....That Has Been Responsible for Making Me 7-Figures in the Currency Markets) 
                </li>
            </ul>


        <Button className='ms-5'>Value</Button>
        
    <p className={Styles.greyText}>
    By providing Vincero Investment Academy with my personal data: 
    </p>

    <p className={Styles.greyText}>
    * I agree to Vincero Investments Academy's Terms & Conditions / Service Level Agreement
    </p>

    <p className={Styles.greyText}>
    * I agree that Vincero Investment Academy may collect, use and disclose my personal data for purposes in accordance with its Privacy Policy and the Personal Data Protection Act 2012. I understand that my personal data may be used for marketing purposes by Vincero Investment Academy or its partners; and I hereby consent to receive marketing and promotional materials by telephone, SMS or e-mail and through other channels as determined by Vincero Investment Academy.
    </p>



        </div>
    </div>
    </div>
  )
}

export default Card