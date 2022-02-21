import React, {useState} from 'react'
import {Modal,Button,Form} from 'react-bootstrap'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Styles from './Modal.module.css'

const ModalC = ({setSignUp}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const submitHandler = () => {
      setSignUp(true);
      console.log(setSignUp)
      console.log("harsh")
    }
  
    return (
      <>
        <Button className={Styles.ModalButton} onClick={handleShow}>
          Reserve Your Live Ticket
        </Button>
  
        <Modal  show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          
        </Modal.Header>
          <Modal.Body >

              <h1 style={{color:"#0174C7", textAlign:"center", fontWeight:"bold"}}>
                Vincero Trading MasterClass
              </h1>

              <h6 style={{textAlign:"center"}}>Register your FREE SEAT NOW!</h6>

            <Form>
              <Form.Group className='mb-3'>
                <Form.Control type="text" placeholder='Your First Name Here...'/>
              </Form.Group>

              <PhoneInput className='mb-3'
                country={'ie'}
                inputStyle={{width:'100%'}}
                containerStyle={{width:"100%"}}
                
                />

              <Form.Group className='mb-3'>
                <Form.Control type="email" placeholder='Your Email Address Here...'/>
              </Form.Group>

            </Form>
            
            <div className={Styles.ButtonContainer}>
              <Button
              onClick={submitHandler}
              className={Styles.ModalButton}>
              Reserve Your Ticket

            </Button>
            </div>


            {/* <p>
            By providing Vincero Investment Academy with my personal data: 
            </p>

            <p>
            * I agree to Vincero Investments Academy's Terms & Conditions / Service Level Agreement
            </p>

            <p>
            *I agree that Vincero Investment Academy may collect, use and disclose my personal data for purposes in accordance with its Privacy Policy and the Personal Data Protection Act 2012. I understand that my personal data may be used for marketing purposes by Vincero Investment Academy or its partners; and I hereby consent to receive marketing and promotional materials by telephone, SMS or e-mail and through other channels as determined by Vincero Investment Academy.
            </p> */}
          </Modal.Body>
        
        </Modal>
      </>
    )};


export default ModalC