import React from "react";
import { useHistory } from "react-router-dom";
import styles from "../../styles/Home.module.css";
import appStyles from "../../App.module.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import pic from "../../assets/fight.png";
// eslint-disable-next-line 
import city2 from "../../assets/city2.png";
import btnStyles from "../../styles/Button.module.css";
import Button from "react-bootstrap/Button";
import { Image } from "react-bootstrap";

const Callsheets = () => {
    const history = useHistory();
  
    return (
      <div>
      <div className={`mt-3 ${styles.Overview}`}>
      <h2 className={`pb-1 ${styles.OverviewText} ${appStyles.playfair}
       text-center`} >Callsheets</h2>
      </div>
      <Row className="mt-1 ml-2" >
          <Col xs={3}>
          <Button
            className={`${btnStyles.Button} ${btnStyles.Blue} mb-2`}
            onClick={() => history.goBack()}
          >
            Back
          </Button>
          </Col>
      </Row>
      <div className="px-3 mt-3">
      {/* platform */}
      <Row className="mt-1 mt-md-5 d-flex align-items-center justify-content-center">
      <Col xs={6} md={{span: 3, offset: 1 }} className="text-center" >
      <p >
      Build and manage TV and Film Production in the 
      one platform utilizing interlinking tools.
      </p>
      </Col>
      <Col xs={6} md={{span: 6, offset: 2 }}>
      <div className="text-center">
      <Image src={pic} alt="image" 
        className={` ${styles.Image}`} />
      </div>
      </Col>
      </Row>
      {/* Workspaces */}
      <Row className="mt-1 mt-md-5 d-flex align-items-center justify-content-center">
      <Col xs={6} md={6}>
      <div className="text-center">
      <Image src={pic} alt="image" 
        className={` ${styles.Image}`} />
      </div>
      </Col>
      <Col xs={6} md={{span: 3, offset: 2 }}
      className="text-center" >
      <p >
      Collaborate and design in Scene Department Workspaces and use 
      Moodshots to explore ideas.
      </p>
      </Col>
      </Row>
      {/* Callsheets  */}
      <Row className="mt-1 mt-md-5 d-flex align-items-center justify-content-center">
      <Col xs={6} md={{span: 3, offset: 1 }}
        className="text-center" >
      <p >
      Manage Cast and Crew. Easily create Shotlists, Schedules and 
      personalized Callsheets.
      </p>
      </Col>
      <Col xs={6} md={{span: 6, offset: 2 }}>
      <div className="text-center">
      <Image src={pic} alt="image" 
        className={` ${styles.Image}`} />
      </div>
      </Col>
      </Row>
      {/* mobile */}
      <Row className="mt-1 mt-md-5 d-flex align-items-center justify-content-center">
      <Col xs={6} md={6}>
      <div className="text-center">
      <Image src={pic} alt="image" 
        className={` ${styles.Image}`} />
      </div>
      </Col>
      <Col xs={6} md={{span: 3, offset: 2 }}
        className="text-center" >
      <p >
      All features easy to use on Mobile. Use Quick Find to locate all Info fast.
      </p>
      </Col>
      </Row>
      </div>
      </div>
    )
  }

export default Callsheets
