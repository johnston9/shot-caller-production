import React from "react";
import { useHistory } from "react-router-dom";
import styles from "../../styles/Home.module.css";
import appStyles from "../../App.module.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import pic from "../../assets/fight.png";
// eslint-disable-next-line 
import storyb4 from "../../assets/storyb4.png";
import shot1 from "../../assets/shot1.png";
import shot2 from "../../assets/shot2.png";
import shot4 from "../../assets/shot4.png";
import shot5 from "../../assets/shot5.png";
import shot6 from "../../assets/shot6.png";
import shot7 from "../../assets/shot7.png";
import btnStyles from "../../styles/Button.module.css";
import Button from "react-bootstrap/Button";
import { Image } from "react-bootstrap";

const ShotStory = () => {
  const history = useHistory();
  
  return (
    <div>
    <div className={`mt-2 ${styles.Overview}`}>
    <h2 className={`pb-1 ${styles.OverviewText} ${appStyles.playfair}
     text-center`} >Shotlists and Storyboards</h2>
    </div>
    <Row className="mt-1" >
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
    Create the Storyboard in your prefered method then upload it 
    to the Scene Page
    </p>
    </Col>
    <Col xs={6} md={{span: 6, offset: 2 }}>
    <div className="text-center">
    <Image src={storyb4} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    </Row>
    {/* two */}
    <Row className="mt-1 mt-md-5 d-flex align-items-center justify-content-center">
    <Col xs={6} md={6}>
    <div className="text-center">
    <Image src={shot2} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    <Col xs={6} md={{span: 3, offset: 2 }}
    className="text-center" >
    <p >
    Create the Shotlist, individually adding each Shot in the Shotlist Create form
    </p>
    </Col>
    </Row>
    {/* three  */}
    <Row className="mt-1 mt-md-5 d-flex align-items-center justify-content-center">
    <Col xs={6} md={{span: 3, offset: 1 }}
      className="text-center" >
    <p >
    View the Storyboard and the Shotlist Create Form 
    side by side or individually
    </p>
    </Col>
    <Col xs={6} md={{span: 6, offset: 2 }}>
    <div className="text-center">
    <Image src={shot4} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    </Row>
    {/* four */}
    <Row className="mt-1 mt-md-5 d-flex align-items-center justify-content-center">
    <Col xs={6} md={6}>
    <div className="text-center">
    <Image src={shot7} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    <Col xs={6} md={{span: 3, offset: 2 }}
      className="text-center" >
    <p >
    Quickly Create Shotlists and View them on the Scene Page 
    </p>
    </Col>
    </Row>
    {/* five  */}
    <Row className="mt-1 mt-md-5 d-flex align-items-center justify-content-center">
    <Col xs={6} md={{span: 3, offset: 1 }}
      className="text-center" >
    <p >
    Expand each shot to view Extra Info
    </p>
    </Col>
    <Col xs={6} md={{span: 6, offset: 2 }}>
    <div className="text-center">
    <Image src={shot5} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    </Row>
    {/* six */}
    <Row className="mt-1 mt-md-5 d-flex align-items-center justify-content-center">
    <Col xs={6} md={6}>
    <div className="text-center">
    <Image src={shot6} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    <Col xs={6} md={{span: 3, offset: 2 }}
      className="text-center" >
    <p >
    Expand each shot to view Shot Sketch and edit each Shot
    asily without a page refresh
    </p>
    </Col>
    </Row>
    </div>
    </div>
  )
}

export default ShotStory