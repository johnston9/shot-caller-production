/* Globals component on the Budget Edit Page */
import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../styles/Account.module.css";

const Globals = () => {
    
  return (
    <div>
        <Row className="mb-3">
        <Col md={{span: 10, offset: 1}}>
        <div className={`text-center px-3 pt-1 ${styles.SubTitle2 }`}>
        <h5 className={`text-center `} >Globals</h5> 
         </div> 
        </Col>
      </Row>
    </div>
  )
}

export default Globals