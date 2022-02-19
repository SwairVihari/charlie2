import React from 'react'
import Styles from './Footer.module.css'
import { Row,Col } from 'react-bootstrap'
const Footer = () => {
  return (
    <div className={Styles.Footer}>
        <Row className='justify-content-center'>
           
            <p className={`${Styles.Center} ${Styles.bold}`}>Important Earnings Disclaimer</p>
           
        </Row>

        <Row>
            <p className={`${Styles.Center} ${Styles.footercolor}`} >
            This site is not a part of the Facebook website or Facebook Inc. Additionally, this site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.
<br/>
This site is not a part of the YouTube website or Google LLC. This site is also NOT endorsed by Google in any way. 
            </p>
        </Row>

        <Row>
            <p className={`${Styles.Center} ${Styles.footercolor}`}>
        Disclaimer: Results may vary and testimonials are not claimed to represent typical results. All testimonials are real. These results are meant as a showcase of some of the positive results that we and our clients have achieved and should not be taken as guaranteed, average or typical results. Earnings and income representations made by Justin Ho, JH Capital Limited, its parent company, subsidiaries and affiliates, and their respective members, officers, directors, shareholders, employees, agents, co-branders, advertisers, sponsors and/or other partners are aspirational statements only. We can in NO way guarantee you will get similar or positive results.
        </p>
        </Row>

        <Row>
            <p className={`${Styles.Center} ${Styles.footercolor}`}>
            Your results will vary and depend on many factors... including but not limited to your background, experience, access to information, responsiveness to marker conditions and work ethic. All business entails risk as well as massive and consistent effort and action. If you're not willing to accept that, please do not attend.
            </p>

        </Row>

        <Row>
            <p className={`${Styles.Center} ${Styles.footercolor}`}>
            Important Terms and Conditions, Privacy Policy and Risk and Earning Disclaimers apply to information and services provided by us. Our classes aim at the discussion of skills and techniques and development of interests and shall not be taken as educational course of any sort.
            </p>
 
        </Row>

        <div className={Styles.footer_link}>
            <a href='/termsandcondition'>Terms |</a> |
            
            <a href='/privacy'>Privacy |</a> 
            
            <a href='/contact'> Contact</a> 

            </div>
          


    </div>
  )
}

export default Footer