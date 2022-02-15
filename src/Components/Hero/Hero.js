import React from 'react'
import Styles from './Hero.module.css'
import AsSeenOn from '../../images/AsSeenOn.png'
import { Container, Row, Col } from 'react-bootstrap'
const Hero = () => {
  return (
    <div>
        <Container fluid={true}>
        <Row  className={`justify-content-center ${Styles.border}`}>
            <img className={Styles.AsSeenOn} src={AsSeenOn}/>
        </Row>

        <Row className={Styles.HeroText}>
          <h1>
          How To Extract <span className={Styles.golden}> Returns Consistently From The Financial Markets Like The Big Financial </span> Institutions Using The Same Trading System  They Use
          </h1>
          <h1>
          The Same Trading System  They Use
          </h1>

          <h2>
          … Even If You Do Not Have Any Prior Trading Knowledge, A Huge Capital To Start With Or Time To Follow The News & Markets!
          </h2>

        </Row>
        </Container>


    </div>
  )
}

export default Hero