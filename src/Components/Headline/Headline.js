import React from 'react'
import { Row,Col, Container } from 'react-bootstrap'
import Styles from './Headline.module.css'
const Headline = () => {
  return (
   <Container fluid={true}>
         <h1 className={Styles.headline}>FREE LIVE VIRTUAL CLASS - Register NOW!</h1>
         </Container>

        
    
  )
}

export default Headline