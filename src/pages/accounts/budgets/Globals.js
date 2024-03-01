/* Globals component on the Budget Edit Page */
// eslint-disable-next-line
import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../styles/Account.module.css";
// import btnStyles from "../../../styles/Button.module.css";
// import Button from "react-bootstrap/Button";
// import InfoGlobals from "./InfoGlobals";

const Globals = (props) => {
  const {setShow, setPostDataProduction, postDataProduction,} = props;
  // const [showInfo, setShowInfo] = useState(false);

  // GLOBALS
  const [globalData, setGlobalData] = useState({
    prep_global: 0,
    shoot_global: 0,
    wrap_global: 0,
  })

  const {prep_global, shoot_global, wrap_global} = globalData;

  // const setPrep = () => {
  //   setPostDataProduction({
  //     ...postDataProduction,
  //   production_manager_uno_prep: prep_global,
  //   });
  // };

  // const handleChange = (event) => {
  //   setPostData({
  //     ...postData,
  //     [event.target.name]: event.target.value,
  //   });
  // };

  return (
        <div>
        <Row className="mb-3">
        <Col md={{span: 10, offset: 1}}>
        <div className={`text-center px-3 pt-1 ${styles.SubTitle2 }`}>
        <h5 className={`text-center `} >Globals</h5> 
        </div> 
        <div className={`px-3 pt-1 ${styles.SubTitle77 }`}>
        {/* close/INFO buttons */}
        {/* <Row className="mt-1 ml-2 px-3" >
            <Col >
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
        </Row> */}
        {/* INFO COMPONENT */}
        {/* <div>
        {!showInfo ? (
          ""
              ) : (
                <InfoGlobals  /> 
        ) }  
        </div> */}
        {/* Prep Shoot Wrap Globals input boxes and set buttons*/}
        {/* <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="prep_global" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Prep Global</Form.Label>
              <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="prep_global"
                value={prep_global}
                onChange={handleChange}
                  />
          </Form.Group>
          {errors?.prep_global?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          <Button
            className={`py-0 my-2 px-5 ${btnStyles.Shed} ${btnStyles.Button}`}
            onClick={setPrep} >SET PREP
        </Button>
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="shoot_global" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`}>Shoot Global</Form.Label>
              <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="shoot_global"
                value={shoot_global}
                onChange={handleChange}
                  />
          </Form.Group>
          {errors?.shoot_global?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          <Button
            className={`py-0 my-2 px-5 ${btnStyles.Shed} ${btnStyles.Button}`}
            onClick={setPrep} >SET SHOOT
        </Button>
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="wrap_global" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`}>Wrap Global</Form.Label>
              <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="wrap_global"
                value={wrap_global}
                onChange={handleChange}
                  />
          </Form.Group>
          {errors?.wrap_global?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          <Button
            className={`py-0 my-2 px-5 ${btnStyles.Shed} ${btnStyles.Button}`}
            onClick={setPrep} >SET WRAP
        </Button>
          </Col>
        </Row> */}
        </div>
        </Col>
      </Row>
        </div>
  )
}

export default Globals