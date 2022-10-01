import React from "react";
import { useHistory } from "react-router-dom";
import styles from "../../styles/Home.module.css";
import appStyles from "../../App.module.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import pic from "../../assets/fight.png";
// eslint-disable-next-line 
import break1 from "../../assets/break1.png";
import break2 from "../../assets/break2.png";
import btnStyles from "../../styles/Button.module.css";
import Button from "react-bootstrap/Button";
import { Image } from "react-bootstrap";

const Breakdown = () => {
  const history = useHistory();

  return (
    <div>
    <div className={`mt-2 ${styles.Overview}`}>
    <h2 className={`pb-1 ${styles.OverviewText} ${appStyles.playfair}
     text-center`} >Scene Breakdowns and Script</h2>
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
    {/* one */}
    <Row className="mt-1 mt-md-5 d-flex align-items-center justify-content-center">
    <Col xs={6} md={{span: 3, offset: 1 }} className="text-center" >
    <p >
    Access all Scene Info including Character, Costumes, BG,
    and Department info with a click. This will be 
    automatically loaded for other features.
    </p>
    </Col>
    <Col xs={6} md={{span: 6, offset: 2 }}>
    <div className="text-center">
    <Image src={break1} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    </Row>
    {/* two */}
    <Row className="mt-1 mt-md-5 d-flex align-items-center justify-content-center">
    <Col xs={6} md={6}>
    <div className="text-center">
    <Image src={break2} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    <Col xs={6} md={{span: 3, offset: 2 }}
    className="text-center" >
    <p >
    Add the whole script to the Scenes page along with change notes
    and add the Scene script to the Scene page
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

export default Breakdown