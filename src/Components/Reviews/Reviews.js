import React from 'react'
import { Col,Row, Container } from 'react-bootstrap'
import Styles from './Reviews.module.css'
import s1  from '../../images/s1.png'
import s2  from '../../images/s2.png'
import s3  from '../../images/s3.jpg'
import s4  from '../../images/s4.png'
import s5  from '../../images/s5.jpg'
import s6  from '../../images/s6.jpg'
import s7  from '../../images/s7.jpg'
import s8  from '../../images/s8.jpg'
const Reviews  = () => {
  return (
   <Container fluid={true}>
       <Row className={Styles.ReviewsH1}>
           <h1>
           JUST SOME OF OUR STUDENT'S RESULTS
           </h1>

       </Row>
       
       <div>
           <Row>
               <Col lg={true}>
               <div className={Styles.videoContainer}>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/XK7T3mY1V-w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
               </Col>

               <Col lg={true}>
               <div className={Styles.videoContainer}>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/XK7T3mY1V-w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
               </Col>
           </Row>

           <div className={Styles.imgContainer}>
                <img className={Styles.img1} src={s3} />
               <img className={Styles.img1} src={s4} />
               <img className={Styles.img1} src={s5} />

           </div>

           <div className={Styles.imgContainer}>
           <img className={Styles.img1} src={s6} />
               <img className={Styles.img1} src={s7} />
               <img className={Styles.img1} src={s8} />
           </div>
       </div>


   </Container>
  )
}

export default Reviews