import React from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "../../styles/Home.module.css";
import appStyles from "../../App.module.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import city1 from "../../assets/city1.png";
// eslint-disable-next-line 
import city2 from "../../assets/city2.png";

import Container from "react-bootstrap/Container";
// eslint-disable-next-line 
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
import TopBox2 from "../../components/TopBox2";

const Home = () => {
  // const setCurrentUser = useSetCurrentUser();
  // const admin = true;
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
                <h2 >TV and Film Production Software</h2>
                <h5 style={{fontStyle: 'italic'}}>
                  The entire Creative and Production processes 
                  in one work flow.</h5>
                <Row className="mt-5 px-3" >
                <Col className={`text-center  ${styles.Creative} `}
                 md={6}>
                <h4 className={`mb-2 text-center ${styles.Creative}`}
                    style={{fontStyle: 'normal'}}>
                The Creative
                </h4>
                <p className={`${styles.Creative}`} 
                  style={{fontStyle: 'italic'}}>
                Collaborate and design in Scene Department Workspaces
                </p>
                {/* on1 */}
                <Row>
                <Col mx={6} className="px-0" >
                <p className={`${styles.Depts}`}
                  onClick={() => history.push('/scenes')}>
                Scene Breakdowns
                </p>
                </Col>
                <Col mx={6}>
                <span className={`ml-3 ${styles.Depts}`}
                  onClick={() => history.push('/scenes')} >
                Mood Shots
                </span>
                </Col>
                </Row>
                {/* on2 */}
                <Row>
                <Col xs={6} className="px-0">
                <p className={`${styles.Depts}`}
                  onClick={() => history.push('/scenes')}>
                Scene Workspaces
                </p>
                </Col>
                <Col mx={6}>
                <span className={`ml-3 ${styles.Depts}`}
                  onClick={() => history.push('/scenes')} >
                Shotlists
                </span>
                </Col>
                </Row>
                </Col>
                <Col md={6} className={`text-center  ${styles.Creative} `} >
                <h4 className={`mb-2 text-center ${styles.Creative}`}>
                Production
                </h4>
                <p className={`${styles.Header}`}
                  style={{fontStyle: 'italic'}}>
                All Production Software Tools in one Connected Workflow
                </p>
                {/* on1 */}
                <Row>
                <Col mx={6}>
                <p className={`${styles.Depts}`}
                  onClick={() => history.push('/scenes')}>
                Crew Admin
                </p>
                </Col>
                <Col mx={6}>
                <span className={`ml-3 ${styles.Depts}`}
                  onClick={() => history.push('/scenes')} >
                Cast Admin
                </span>
                </Col>
                </Row>
                {/* on2 */}
                <Row>
                <Col xs={6}>
                <p className={`${styles.Depts}`}
                  onClick={() => history.push('/scenes')}>
                Scheduling
                </p>
                </Col>
                <Col mx={6}>
                <span className={`ml-3 ${styles.Depts}`}
                  onClick={() => history.push('/scenes')} >
                Callsheets
                </span>
                </Col>
                </Row>
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
        <div>
        <Row>
        <Col>
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