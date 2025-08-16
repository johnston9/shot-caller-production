/* Page to display the info for the Scene Page
    Breakdowns and Workspaces features */
import React from "react";
import { useHistory } from "react-router-dom";
import styles from "../../styles/Home.module.css";
import appStyles from "../../App.module.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import work1 from "../../assets/work1.png";
import work4 from "../../assets/work4.png";
import work5 from "../../assets/work5.png";
import work6 from "../../assets/work6.png";
import work7 from "../../assets/work7.png";
import break23 from "../../assets/break23.png";
import charbg from "../../assets/charbg.png";
import btnStyles from "../../styles/Button.module.css";
import Button from "react-bootstrap/Button";
import { Image } from "react-bootstrap";

const Workspaces = () => {
  const history = useHistory();
  
  return (
    <div className={`mt-0 ${styles.BlueBody} mx-0`}>
    <div className={`mt-0 ${styles.Overview}`}>
    <h2 className={`py-2 ${styles.OverviewText} ${appStyles.playfair}
     text-center`} >Scenes - Breakdowns / Workspace</h2>
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
    {/* desktop */}
    <div className="d-none d-md-block">
    {/* one */}
    <Row className="mt-1 mt-md-3 pb-4 px-3 d-flex align-items-center justify-content-center">
    <Col xs={12} md={{span: 3, offset: 1 }} className="text-center px-1 px-md-3" >
    <p >
    Create the Scenes quickly then easily select a Scene to work in
    </p>
    </Col>
    <Col xs={12} md={8}>
    <div className="text-center px-1 px-md-3">
    <Image src={work1} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
    {/* 2 */}
    <Row className="mt-1 mt-md-3 pb-4 px-3 d-flex align-items-center justify-content-center">
    <Col xs={12} md={8} className="text-center px-1 px-md-3" >
    <div className="text-center px-1 px-md-3 mb-3">
    <Image src={work7} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    <Col xs={12} md={{span: 3, offset: 0 }}
    className="text-center px-1 px-md-3" >
    <p >
    Each Scene contains a Breakdown, Workspace, Shotlist, Characters/BG,
    Storyboard, Moodboards and Script feature to work in
    </p>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
    {/* 3 */}
    <Row className="mt-1 mt-md-3 pb-4 px-3 d-flex align-items-center justify-content-center">
    <Col xs={12} md={{span: 3, offset: 1 }} className="text-center px-1 px-md-3" >
    <p >
    Create Breakdowns which will be
    automatically loaded in all other features including Stripboards
    </p>
    </Col>
    <Col xs={12} md={8}>
    <div className="text-center px-1 px-md-3">
    <Image src={break23} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
    {/* 4 */}
    <Row className="px-3 pb-4 mt-4 d-flex align-items-center justify-content-center">
    <Col xs={12} md={8}>
    <div className="text-center px-1 px-md-3">
    <Image src={charbg} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    <Col xs={12} md={{span: 3, offset: 0 }}
    className="text-center px-1 px-md-3" >
    <p >
    Create the Character/BG Breakdown, which includes
    Costumes, and will also be
    automatically loaded in all other features including Stripboards
    </p>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
    {/* 5 */}
    <Row className="px-3 pb-4 mt-4 d-flex align-items-center justify-content-center">
    <Col xs={12} md={{span: 3, offset: 1 }}
      className="text-center px-1 px-md-3" >
    <p >
    Collaborate in the Scene Workspaces by Department using Requirements, Workspaces 
    and Finals categories
    </p>
    </Col>
    <Col xs={12} md={8}>
    <div className="text-center px-1 px-md-3">
      <Image src={work5} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
    {/* 6 */}
    <Row className="px-3 pb-4 mt-4 d-flex align-items-center justify-content-center">
    <Col xs={12} md={8}>
    <div className="text-center px-1 px-md-3">
    <Image src={work6} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    <Col xs={12} md={{span: 3, offset: 0 }}
      className="text-center px-1 px-md-3" >
    <p >
    Use the Department Category's Posts for precision work in the Scene
    </p>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
    {/* 7 */}
    <Row className="px-3 pb-4 mt-4 d-flex align-items-center justify-content-center">
    <Col xs={12} md={{span: 3, offset: 1 }}
      className="text-center px-1 px-md-3" >
    <p >
    Upload Ideas and Images/Files in Posts each with a Comments Section
    </p>
    </Col>
    <Col xs={12} md={8}>
    <div className="text-center px-1 px-md-3">
    <Image src={work4} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
    {/* 8 */}
    <Row className="mt-1 mt-md-3 pb-4 px-3 d-flex align-items-center justify-content-center">
    <Col xs={12} md={8} className="text-center px-1 px-md-3" >
    <div className="text-center px-1 px-md-3 mb-3">
    <Image src={work7} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    <Col xs={12} md={{span: 3, offset: 0 }}
    className="text-center px-1 px-md-3" >
      <p >
    The Find Post page facilitates collaboration in the Scenes Workspace and is designed
    to make sure you don't miss any Posts relevent to yor work
    </p>
    <p>
    Use it to find Posts by Department, the Requirement Posts being returned in Scene order
    </p>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
    {/* 9 */}
    <Row className="mt-1 mt-md-3 pb-4 px-3 d-flex align-items-center justify-content-center">
    <Col xs={12} md={{span: 3, offset: 1 }} className="text-center px-1 px-md-3" >
    <p >
    Here you can also view your Feed, set up by simply folllowing users on the profiles page,
    so you can be up to date with whatever production Posts you need
    </p>
    <p >
    You can also view all your Liked and Starred Posts here too
    </p>
    </Col>
    <Col xs={12} md={8}>
    <div className="text-center px-1 px-md-3">
    <Image src={break23} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    </Row>
    </div>
    {/* mobile */}
    <div className="d-block d-md-none">
    {/* one */}
    <Row className="mt-3 px-3 d-flex align-items-center justify-content-center">
    <Col xs={12}>
    <div className="text-center px-1 px-md-3">
    <Image src={work1} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    <Col xs={12} className="text-center mt-3 px-3" >
    <p >
    Create the Scenes quickly then easily select a Scene to work in
    </p>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
    {/* 2 */}
    <Row className="mt-3 px-3 d-flex align-items-center justify-content-center">
    <Col xs={12} md={8} className="text-center px-1 px-md-3" >
    <div className="text-center px-1 px-md-3 mb-3">
    <Image src={work7} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    <Col xs={12} md={{span: 3, offset: 0 }}
    className="text-center px-3" >
    <p >
    Each Scene contains a Breakdown, Workspace, Shotlist, Characters/BG,
    Storyboard, Moodboards and Script feature to work in
    </p>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
    {/* 3 */}
    <Row className="mt-3 px-3 d-flex align-items-center justify-content-center">
    <Col xs={12} md={8}>
    <div className="text-center px-1 px-md-3">
    <Image src={break23} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    <Col xs={12} className="text-center px-3 mt-3" >
    <p >
    Create Breakdowns which will be
    automatically loaded in all other features including Stripboards
    </p>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
    {/* 4 */}
    <Row className="mt-3 px-3 d-flex align-items-center justify-content-center">
    <Col xs={12} md={8}>
    <div className="text-center px-1 px-md-3">
    <Image src={charbg} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    <Col xs={12} md={{span: 3, offset: 0 }}
    className="text-center px-3 mt-3" >
    <p >
    Create the Character/BG Breakdown, which includes
    Costumes, and will also be
    automatically loaded in all other features including Stripboards
    </p>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
    {/* 5 */}
    <Row className="px-3 mt-3 d-flex align-items-center justify-content-center">
    <Col xs={12} md={8}>
    <div className="text-center px-1 px-md-3">
      <Image src={work5} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    <Col xs={12} md={{span: 3, offset: 1 }}
      className="text-center px-3 mt-3" >
    <p >
    Collaborate in the Scene Workspaces by Department using Requirements, Workspaces 
    and Finals categories
    </p>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
    {/* 6 */}
    <Row className="px-3 mt-3 d-flex align-items-center justify-content-center">
    <Col xs={12} md={8}>
    <div className="text-center px-1 px-md-3">
    <Image src={work6} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    <Col xs={12} md={{span: 3, offset: 0 }}
      className="text-center px-3 mt-3" >
    <p >
    Use the Department Category's Posts for precision work in the Scene
    </p>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
    {/* 7 */}
    <Row className="px-3 mt-3 d-flex align-items-center justify-content-center">
    <Col xs={12} md={8}>
    <div className="text-center px-1 px-md-3">
    <Image src={work4} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    <Col xs={12} md={{span: 3, offset: 1 }}
      className="text-center px-3" >
    <p >
    Upload Ideas and Images/Files in Posts each with a Comments Section
    </p>
    </Col>
    </Row>
    </div>
    </div>
  )
}

export default Workspaces