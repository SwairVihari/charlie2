import React from 'react'
import { Row,Col,Container, Modal } from 'react-bootstrap'
import AfterReviewStack from './AfterReviewStack'
import Styles from './AfterReview.module.css'
import ModalC from '../Modal/ModalC'

const AfterReview = () => {
  return (
    <>
    <Container className='my-3'>
        <Row>
            <Col  className={Styles.videoContainer} lg={true}>
           
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/XK7T3mY1V-w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
            </Col>
            <Col lg={true}>
           <AfterReviewStack/>
            </Col>
        </Row>

        
           
            <ModalC/>
           
        
    </Container>
    </>
  )
}

export default AfterReview