import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "../../styles/Home.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import r1 from "../../assets/r-1.png";
import city1 from "../../assets/city1.png";
import city2 from "../../assets/city2.png";

import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
import TopBox2 from "../../components/TopBox2";

const Home = () => {
  const setCurrentUser = useSetCurrentUser();
  const admin = true;
  const history = useHistory()

  return (
      <div >
        <TopBox2 title="SHOT CALLER PRODUCTION" />
        <div className={styles.HomeBox} 
          // style={{ backgroundImage: `url(${r1})`, height:'100vh',
          // backgroundSize: 'cover',
          // backgroundRepeat: 'no-repeat', }}
          // style={{ backgroundImage: `url(${city2})`, height:'100vh',
          // backgroundSize: 'cover',
          // backgroundRepeat: 'no-repeat', }}
          style={{ backgroundImage: `url(${city1})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat', }}
          >
        <Row className={styles.Row}>
          <Col className="my-5" xs={12}>
            <Row>
               <Col xs={12} className={` text-center ${styles.Header}`} >
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
        {/* page 2 */}
        <div className={`mt-5 ${styles.Overview}`}>
        <h2 className={`py-2 ${styles.OverviewText} ${appStyles.playfair} text-center`} >Overview</h2>
        </div>
        <div className="px-3">
        <Row>
        <Col xs={12} md={{span: 10, offset: 1}} className="text-center">
        <p >
        The initial set up requires inputing scene details to create
        the Scene Breakdowns. This atuomatically generates the Scenes, Characters and 
        Locations Pages.</p>
        <p>Each Scene Page contains 12 Department Workspaces where initially 
        Requirements for each can be added. Then Collaborate, design and build within each Workspace.</p>
        <p>
        Explore and guide styles and choices with Mood Shoots which interlink the 
        Scenes, Characters and locations.
        </p>
        </Col>
        </Row>
        </div>
    </div>
  );
};

export default Home;