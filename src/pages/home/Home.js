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
        <p>
        Shot Caller provides a resource to contain all the information 
        involved in a TV or film Production the one place and the necessary tools to manage it.
        Once added all information can be readily accessed between features
        as it is brought through the production flow.
        </p>
        <p >
        Simply input scene details to generate the Scenes, Characters and 
        Locations Pages. Then Collaborate, design and build in
        the Scene Pages Universal or Department Workspaces.</p>
        <p>
        Explore styles, ideas and choices with Mood Shoots and find any category of any 
        Scene Deartment with the Quick Find feature.
        </p>
        <p>
        Manage the crew by registering them and their details to give them 
        full access to collaborate. 
        </p>
        <p>
        Schedule easily with the autogeneration schedule feature which generates
        a stylish schedule page using the details added to the breakdown. 
        </p>
        <p>
        Create stylish Callsheets with each user having their own personal calltime.
        </p>
        <p>
        Manage the cast by registering them giving the access to the Callsheets pages
        and linking them to their Character page which will contain their details and costumes. 
        </p>
        </Col>
        </Row>
        </div>
    </div>
  );
};

export default Home;