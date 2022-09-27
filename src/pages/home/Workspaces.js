import React from "react";
import { useHistory } from "react-router-dom";
import styles from "../../styles/Home.module.css";
import appStyles from "../../App.module.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import work1 from "../../assets/work1.png";
import work2 from "../../assets/work2.png";
// eslint-disable-next-line 
import pic from "../../assets/fight.png";
import btnStyles from "../../styles/Button.module.css";
import Button from "react-bootstrap/Button";
import { Image } from "react-bootstrap";

const Workspaces = () => {
  const history = useHistory();
  
  return (
    <div>
    <div className={`mt-3 ${styles.Overview}`}>
    <h2 className={`pb-1 ${styles.OverviewText} ${appStyles.playfair}
     text-center`} >Scene Workspaces</h2>
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
    Create the Scenes quickly then easily select the one you wish to work on
    </p>
    </Col>
    <Col xs={6} md={{span: 6, offset: 2 }}>
    <div className="text-center">
    <Image src={work1} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    </Row>
    {/* two */}
    <Row className="mt-1 mt-md-5 d-flex align-items-center justify-content-center">
    <Col xs={6} md={6}>
    <div className="text-center">
    <Image src={work2} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    <Col xs={6} md={{span: 3, offset: 2 }}
    className="text-center" >
    <p >
    Collaborate and design in Scene Department Workspaces
    using the Workspace Guide to show which spaces you
    will be using 
    </p>
    </Col>
    </Row>
    {/* three  */}
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
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    </Row>
    {/* four */}
    <Row className="mt-1 mt-md-5 d-flex align-items-center justify-content-center">
    <Col xs={6} md={6}>
    <div className="text-center">
    <Image src={pic} alt="image" 
      className={` ${styles.FeatureImage}`} />
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

export default Workspaces