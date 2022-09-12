import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import door from "../../assets/door.png";
import rightdoor from "../../assets/rightdoor.png";
import styles from "../../styles/Landing.module.css";
import btnStyles from "../../styles/Button.module.css";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import r1 from "../../assets/r-1.png";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

import TopBox from "../../components/TopBox";
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
import TopBox2 from "../../components/TopBox2";

const Landing = () => {
  const setCurrentUser = useSetCurrentUser();
  const admin = true;
  const history = useHistory()

  return (
      <div >
        <TopBox2 title="SHOT CALLER PRODUCTION" />
        <div className={styles.HomeBox} style={{ backgroundImage: `url(${r1})`, height:'100vh',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat', }}>
        <Row className={styles.Row}>
          <Col className="my-3 pr-0 pl-3 pl-md-4"
            xs={1} md={1}>
            <Image
                className={`${styles.FillerImagel} mt-5`}
                src={door}/>
          </Col>
          <Col className="my-5 my-lg-auto " xs={10}>
            <Row>
               <Col xs={12} className={` text-center ${styles.Header}`} >
                <h2 className={`${styles.Header}`}>TV and Film Production Software</h2>
                <h5 className={`px-2 ${styles.Header}`}>The entire Creative and Production processes 
                  in one work flow.</h5>
                  <Row className="mt-5 px-3" >
                <Col className={`text-center  ${styles.Creative} `}
                style={{fontStyle: 'italic'}} md={6}>
                <h4 className={`mb-2 text-center ${styles.Creative}`}
                    style={{fontStyle: 'normal'}}>
                The Creative
                </h4>
                <Link to={`/scenes`} >
                <p>
                Scene Breakdowns
                <span className="ml-3">
                Mood Shots
                </span>
                </p>
                </Link>
                <Link to={`/scenes`} >
                <p>
                Scene Workspaces
                <span className="ml-3">
                Shotlists
                </span>
                </p>
                </Link>
                </Col>
                <Col md={6} style={{fontStyle: 'italic'}} className={`text-center  ${styles.Creative} `} >
                <h4 className={`mb-2 text-center ${styles.Creative}`}
                    style={{fontStyle: 'normal'}}>
                Production
                </h4>
                <Link to={`/scenes`} >
                <p>
                Scheduling
                <span className="ml-3">
                Cast and Crew
                </span>
                </p>
                </Link>
                <Link to={`/scenes`} >
                <p>
                Callsheets
                <span className="ml-3">
                Mood Shots
                </span>
                </p>
                </Link>
                </Col>
                </Row>
                {/* <hr className={`text-center ${styles.LineWhite}`} /> */}
                {/* <Row className="mt-3 px-3" >
                <Col className={`text-center`} md={6}>
                <h5 className={`mb-2 text-center ${styles.Creative}`}
                    style={{fontStyle: 'italic'}}>
                The Creative
                </h5>
                <Link to={`/scenes`} >
                <div className={` py-1  ${styles.Box}`}>
                <p>
                Scene Breakdowns
                </p>
                </div>
                </Link>
                <Link to={`/scenes`} >
                <div className={`px-3 py-1  ${styles.Box}`}>
                <p>
                Mood Shots
                </p>
                </div>
                </Link>
                <Link to={`/scenes`} >
                <div className={`px-3 py-1  ${styles.Box}`}>
                <p>
                Scene Workspaces
                </p>
                </div>
                </Link>
                <Link to={`/scenes`} >
                <div className={`px-3 py-1  ${styles.Box}`}>
                <p>
                Shotlists
                </p>
                </div>
                </Link>
                </Col>
                <Col md={6}>
                <h5 className={`mb-2 text-center ${styles.Creative}`}
                    style={{fontStyle: 'italic'}}>
                Production
                </h5>
                <Link to={`/scenes`} >
                <div className={`py-1  ${styles.Box}`}>
                <p>
                Scheduling
                </p>
                </div>
                </Link>
                <Link to={`/scenes`} >
                <div className={`px-3 py-1  ${styles.Box}`}>
                <p>
                Cast and Crew
                </p>
                </div>
                </Link>
                <Link to={`/scenes`} >
                <div className={`px-3 py-1  ${styles.Box}`}>
                <p>
                Callsheets
                </p>
                </div>
                </Link>
                <Link to={`/scenes`} >
                <div className={`px-3 py-1  ${styles.Box}`}>
                <p>
                Callsheets
                </p>
                </div>
                </Link>
                </Col>
                </Row> */}
                  <Container className="mt-3" >
                <Link className={styles.Link} to="/signup">
                  Sign up <span>Here</span>
                </Link>
              </Container>
               </Col>
             </Row>
          </Col>
          <Col className={`my-3 pl-0 pr-3 pr-md-4`}
            xs={1} md={1}>
            <Image
              className={`${styles.FillerImagel} mt-5`}
              src={rightdoor}
            />
          </Col>
        </Row>
        </div>
    </div>
  );
};

export default Landing;