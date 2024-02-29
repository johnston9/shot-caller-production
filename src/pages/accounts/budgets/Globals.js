/* Globals component on the Budget Edit Page */
// eslint-disable-next-line
import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../styles/Account.module.css";
import btnStyles from "../../../styles/Button.module.css";
import Button from "react-bootstrap/Button";
import InfoGlobals from "./InfoGlobals";

const Globals = () => {
  const [showInformation, setShowInformation] = useState(false);

  return (
    <div>
        <Row className="mb-3">
        <Col md={{span: 10, offset: 1}}>
        <div className={`text-center px-3 pt-1 ${styles.SubTitle2 }`}>
        <h5 className={`text-center `} >Globals</h5> 
        {/* close/INFO */}
        <Row className="mt-1 ml-2 px-3" >
            <Col xs={12}>
            <Button
              className={`${btnStyles.Button} ${btnStyles.Blue} mb-2`}
              onClick={() => setShow(false)}
            >
              Close
            </Button>
            <Button
              className={`float-right py-0 mt-1 ${btnStyles.Blue} ${btnStyles.Button}`}
              onClick={() => setShowInfo(showInfo => !showInfo)} >Information
            </Button>
            </Col>
        </Row>
        {!showInfo ? (
          ""
              ) : (
                <InfoGlobals  /> 
        ) }  
         </div> 
        </Col>
      </Row>
    </div>
  )
}

export default Globals