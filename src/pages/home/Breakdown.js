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
import mood1 from "../../assets/mood1.png";
import mood2 from "../../assets/mood2.png";
import btnStyles from "../../styles/Button.module.css";
import Button from "react-bootstrap/Button";
import { Image } from "react-bootstrap";

const Breakdown = () => {
  const history = useHistory();

  return (
    <div className={`mt-0 ${styles.BlueBody}`}>
    <div className={`${styles.Overview}`}>
    <h2 className={`pb-1 ${styles.OverviewText} ${appStyles.playfair}
     text-center`} >Breakdowns, Moodshots and Script</h2>
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
    <Col xs={12} md={{span: 3, offset: 1 }} className="text-center px-1 px-md-3" >
    <p >
    Access all Scene Info including Character, Costumes, BG,
    and Department info with a click. This will be 
    automatically loaded for other features.
    </p>
    </Col>
    <Col xs={12} md={8}>
    <div className="text-center px-1 px-md-3">
    <Image src={break1} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    </Row>
    {/* two */}
    <Row className="mt-5 d-flex align-items-center justify-content-center">
    <Col xs={12} md={8}>
    <div className="text-center px-1 px-md-3">
    <Image src={break2} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    <Col xs={12} md={{span: 3, offset: 0 }}
    className="text-center px-1 px-md-3" >
    <p >
    Add the Scene script to the Scene page.
    Add the Script to the Scenes page.
    Add changes details and notes.
    and 
    </p>
    </Col>
    </Row>
    {/* 3  */} 
    <Row className="mt-5 d-flex align-items-center justify-content-center">
    <Col xs={12} md={{span: 3, offset: 1 }}
      className="text-center px-1 px-md-3" >
    <p >
    Use Moodshots to explore and design. Create them by
    Character, Location, Scene or any combination of the three.
    </p>
    </Col>
    <Col xs={12} md={8}>
    <div className="text-center px-1 px-md-3">
    <Image src={mood1} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    </Row>
    {/* 4 */}
    <Row className="mt-5 d-flex align-items-center justify-content-center">
    <Col xs={12} md={8}>
    <div className="text-center px-1 px-md-3">
    <Image src={mood2} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    <Col xs={12} md={{span: 3, offset: 0 }}
      className="text-center px-1 px-md-3" >
    <p >
    Add and view Moodshots from their subject's pages or 
    from the Moodshots page.
    </p>
    </Col>
    </Row>
    </div>
    </div>
  )
}

export default Breakdown