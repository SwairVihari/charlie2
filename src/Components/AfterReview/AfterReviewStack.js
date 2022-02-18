import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import Styles from './AfterReviewStack.module.css'
const AfterReviewStack = () => {
  return (
    <Container>
       <Row className='mb-3'>
        <Col
        
        lg={3}
        md={3}
         className={Styles.border}>
        <div className={`${Styles.imgContainer}`}  >
        <img className={Styles.img} src='https://www.vinceroia.com/hosted/images/9e/1aaa434ba84e568f13671ce210bc83/Screenshot-2020-06-06-at-3.07.34-PM.png'></img>
        </div>
        </Col>

        <Col  className={Styles.afterRiviewColWidth}>
        <h5 className={Styles.text}>
        Iris Ie - IT Manager of US Retail Firm
        </h5>

        <p className={Styles.text}>
        Before attending the course, I thought that there were so many currency pairs and it was difficult to decide which one to trade at a certain time. But Justin is a very good teacher and he made the content very simple. I now have the confidence to decide which currency pair to trade.
        </p>
        </Col>
       </Row>

       <Row className='mb-3'>
       <Col
        
        lg={3}
        md={3} className={Styles.border}>
        <div className={`${Styles.imgContainer}`}  >
        <img className={Styles.img} src='https://www.vinceroia.com/hosted/images/9e/1aaa434ba84e568f13671ce210bc83/Screenshot-2020-06-06-at-3.07.34-PM.png'></img>
        </div>
        </Col>

        <Col
           
             className={Styles.afterRiviewColWidth}>
        <h5 className={Styles.text} >
        Iris Ie - IT Manager of US Retail Firm
        </h5>

        <p className={Styles.text}>
        Before attending the course, I thought that there were so many currency pairs and it was difficult to decide which one to trade at a certain time. But Justin is a very good teacher and he made the content very simple. I now have the confidence to decide which currency pair to trade.
        </p>
        </Col>
        </Row>

       <Row className='mb-3'>


        <Col
        
        lg={3}
        md={3} className={Styles.border}>
        <div className={`${Styles.imgContainer}`}  >
        <img className={Styles.img} src='https://www.vinceroia.com/hosted/images/9e/1aaa434ba84e568f13671ce210bc83/Screenshot-2020-06-06-at-3.07.34-PM.png'></img>
        </div>
        </Col>

        <Col  className={Styles.afterRiviewColWidth}>
        <h5 className={Styles.text} >
        Iris Ie - IT Manager of US Retail Firm
        </h5>

        <p className={Styles.text}>
        Before attending the course, I thought that there were so many currency pairs and it was difficult to decide which one to trade at a certain time. But Justin is a very good teacher and he made the content very simple. I now have the confidence to decide which currency pair to trade.
        </p>
        </Col> 
       </Row>

       <Row>
           
       </Row>
    </Container>
  )
}

export default AfterReviewStack