import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "../../styles/Home.module.css";
import btnStyles from "../../styles/Button.module.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import r1 from "../../assets/r-1.png";
import city1 from "../../assets/city1.png";
import city2 from "../../assets/city2.png";
import appStyles from "../../App.module.css";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
import TopBox2 from "../../components/TopBox2";

const Landing = () => {
  const setCurrentUser = useSetCurrentUser();
  const admin = true;
  const history = useHistory()

  return (
      <div >
        <div className={styles.HomeBox} 
          // style={{ backgroundImage: `url(${r1})`, height:'100vh',
          // backgroundSize: 'cover',
          // backgroundRepeat: 'no-repeat', }}
          style={{ backgroundImage: `url(${city1})`, height:'100vh',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat', }}
        //   style={{ backgroundImage: `url(${city1})`, height:'100vh',
        //   backgroundSize: 'cover',
        //   backgroundRepeat: 'no-repeat', }}
          >
        <Row className={styles.Row}>
          <Col className="my-5" xs={12}>
          <Row>
               <Col xs={12} className={` text-center ${styles.Header}`} >
                <h1>SHOT CALLER PRODUCTION</h1>
                <h2 className={`${styles.Header}`}>TV and Film Production Software</h2>
                <h5 className={`px-2 ${styles.Header}`}>
                  The entire Creative and Production processes 
                  in one work flow.</h5>
                  <Row className="mt-5 px-3" >
                <Col className={`text-center  ${styles.Creative} `}
                style={{fontStyle: 'italic'}} md={6}>
                <h4 className={`mb-2 text-center ${styles.Creative}`}
                    style={{fontStyle: 'normal'}}>
                The Creative
                </h4>
                <p className={`px-2 ${styles.Header}`}>
                Collaborate and design in Scene Department Workspaces
                </p>
                <p onClick={() => history.push('/scenes')}>
                Scene Breakdowns
                <span onClick={() => history.push('/scenes')}
                className="ml-3">
                Mood Shots
                </span>
                </p>
                <p>
                Scene Workspaces
                <span onClick={() => history.push('/scenes')}
                className="ml-3">
                Shotlists
                </span>
                </p>
                </Col>
                <Col md={6} style={{fontStyle: 'italic'}} className={`text-center  ${styles.Creative} `} >
                <h4 className={`mb-2 text-center ${styles.Creative}`}
                    style={{fontStyle: 'normal'}}>
                Production
                </h4>
                <p className={`px-2 ${styles.Header}`}>
                Manage Requirement and Production in Scene Workspaces
                </p>
                <p>
                <span onClick={() => history.push('/scenes')}
                className="ml-3">
                Cast and Crew Admin
                </span>
                </p>
                <p>
                Scheduling
                <span onClick={() => history.push('/scenes')}
                className="ml-3">
                Callsheets
                </span>
                </p>
                </Col>
                </Row>
                  <Container className="mt-3" >
                <Link className={styles.Link} to="/signup">
                  Sign up <span>Here</span>
                </Link>
              </Container>
               </Col>
             </Row>
          </Col>
        </Row>
        </div>
    </div>
  );
};

export default Landing