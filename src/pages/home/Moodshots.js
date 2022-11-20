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
import mood1a from "../../assets/mood1a.png";
import mood2b from "../../assets/mood2b.png";
import btnStyles from "../../styles/Button.module.css";
import Button from "react-bootstrap/Button";
import { Image } from "react-bootstrap";

const Breakdown = () => {
  const history = useHistory();

  return (
    <div className={`mt-0 ${styles.BlueBody}`}>
    <div className={`${styles.Overview}`}>
    <h2 className={`pb-1 ${styles.OverviewText} ${appStyles.playfair}
     text-center`} >Moodshots and Script</h2>
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
    <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
    {/* 1 */}
    <Row className="px-3 pb-4 mt-1 mt-md-3 d-flex align-items-center justify-content-center">
    <Col xs={12} md={8}>
    <div className="text-center px-1 px-md-3">
    <Image src={mood1a} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    <Col xs={12} md={{span: 3, offset: 0 }}
    className="text-center px-1 px-md-3" >
    <p >
    Create Moodshots for Characters, Locations,
    Scenes or other themes. They can be created or viewed from 
    their respective pages or from the Moodshot page.
    </p>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
    {/* 2  */} 
    <Row className="px-3 mt-4 pb-4 d-flex align-items-center justify-content-center">
    <Col xs={12} md={{span: 3, offset: 1 }}
      className="text-center px-1 px-md-3" >
    <p >
    Like Moodboards they aid the exploration,
    design and guidance of Visual Style but allow multiple Moodboards 
    for each Character, Location and Scene and any combination of the three.
    </p>
    </Col>
    <Col xs={12} md={8}>
    <div className="text-center px-1 px-md-3">
    <Image src={mood2b} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
    {/* 3 */}
    <Row className="px-3 mt-4 pb-4 d-flex align-items-center justify-content-center">
    <Col xs={12} md={8}>
    <div className="text-center px-1 px-md-3">
    <Image src={mood2} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    <Col xs={12} md={{span: 3, offset: 0 }}
      className="text-center px-1 px-md-3" >
    <p >
    A Moodshot can be added solely for a Character, Location 
    and Scene or any combination of the three, interlinking them and 
    allowing general or specific exploration and design.
    </p>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
    {/* scipt */} 
    <Row className="px-3 mt-4 pb-4 d-flex align-items-center justify-content-center">
    <Col xs={12} md={{span: 3, offset: 1 }}
      className="text-center px-1 px-md-3" >
    <p >
    Add the Scene script to the Scene page along with
    changes details and notes.
    </p>
    </Col>
    <Col xs={12} md={8}>
    <div className="text-center px-1 px-md-3">
    <Image src={break2} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    </Row>
    </div>
  )
}

export default Breakdown