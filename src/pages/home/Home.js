import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import door from "../../assets/door.png";
import rightdoor from "../../assets/rightdoor.png";
import styles from "../../styles/Home.module.css";
import btnStyles from "../../styles/Button.module.css";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

import TopBox from "../../components/TopBox";
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";

const Home = () => {
  const setCurrentUser = useSetCurrentUser();
  const admin = true;
  const history = useHistory()

  return (
      <Container className={styles.HomeBox} >
        <TopBox title="SHOT CALLER PRODUCTION" />
        <Row className={styles.Row}>
          <Col className="my-3 pr-0 pl-3 pl-md-4"
            xs={1} md={1}>
            <Image
                className={`${styles.FillerImagel}`}
                src={door}/>
          </Col>
          <Col className="my-auto py-2 p-md-2" xs={10}>
            <Row>
               <Col xs={12} className={`text-center ${styles.Header}`} >
                <h2 className={`${styles.Header}`}>TV and Film Production</h2>
                <p className={`px-2 ${styles.Header}`}>Combining the entire Creative and Production processes 
                  in one work flow.</p>
                <hr className={`text-center ${styles.LineWhite}`} />
                <Row className="mt-3 px-3" >
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
                </Row>
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
              className={`${styles.FillerImagel}`}
              src={rightdoor}
            />
          </Col>
        </Row>
    </Container>
  );
};

export default Home;