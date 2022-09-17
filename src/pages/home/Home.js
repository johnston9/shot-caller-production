import React from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "../../styles/Home.module.css";
import appStyles from "../../App.module.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import city1 from "../../assets/city1.png";
import pic from "../../assets/fight.png";
// eslint-disable-next-line 
import city2 from "../../assets/city2.png";

import Container from "react-bootstrap/Container";
// eslint-disable-next-line 
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
import TopBox2 from "../../components/TopBox2";
import { Image } from "react-bootstrap";

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
                  in one Workflow.</h5>
                <Row className="mt-5" >
                <Col className={`text-center  ${styles.Creative} `}
                 md={6}>
                <h4 className={`mb-2 ${styles.Creative}`}>
                The Creative
                </h4>
                <p className={`${styles.Creative}`} 
                  style={{fontStyle: 'italic'}}>
                Collaborate and design in Scene Department Workspaces
                </p>
                {/* on1 */}
                <Row >
                <Col mx={6} >
                <p className={`${styles.Depts}`}
                  onClick={() => history.push('/scenes')}>
                Scene Breakdowns
                </p>
                </Col>
                <Col mx={6} >
                <span className={`${styles.Depts}`}
                  onClick={() => history.push('/scenes')} >
                Mood Shots
                </span>
                </Col>
                </Row>
                {/* on2 */}
                <Row>
                <Col xs={6} >
                <p className={`${styles.Depts}`}
                  onClick={() => history.push('/scenes')}>
                Scene Workspaces
                </p>
                </Col>
                <Col mx={6}>
                <span className={`${styles.Depts}`}
                  onClick={() => history.push('/scenes')} >
                Shotlists
                </span>
                </Col>
                </Row>
                </Col>
                <Col md={6} className={` ${styles.Creative} `} >
                <h4 className={`mb-2 ${styles.Creative}`}>
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
                <p className={`${styles.Depts}`}
                  onClick={() => history.push('/scenes')} >
                Cast Admin
                </p>
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
                <p className={`${styles.Depts}`}
                  onClick={() => history.push('/scenes')} >
                Callsheets
                </p>
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
        <div className={`mt-5 px-5 mx-5 ${styles.Overview}`}>
        <h2 className={`pb-1 ${styles.OverviewText} ${appStyles.playfair}
         text-center`} >Overview</h2>
        </div>
        <div className="px-3 mt-3">
        {/* platform */}
        <Row className="mt-1 mt-md-5 d-flex align-items-center justify-content-center">
        <Col xs={6} md={{span: 3, offset: 1 }}
        className="text-center" >
        <p >
        Build and manage TV and Film Production in the 
        one platform utilizing interlinking tools.
        </p>
        </Col>
        <Col xs={6} md={{span: 6, offset: 2 }}>
        <div className="text-center d-flex align-items-center justify-content-center">
        <Image src={pic} alt="image" 
          className={` ${styles.Image}`} />
        </div>
        </Col>
        </Row>
        {/* Workspaces */}
        <Row className="mt-1 mt-md-5 d-flex align-items-center justify-content-center">
        <Col xs={6} md={6}>
        <div className="text-center d-flex justify-content-center">
        <Image src={pic} alt="image" 
          className={` ${styles.Image}`} />
        </div>
        </Col>
        <Col xs={6} md={{span: 3, offset: 2 }}
        className="text-center" >
        <p >
        Collaborate and design in Scene Department Workspaces and use 
        Moodshots to explore ideas.
        </p>
        </Col>
        </Row>
        {/* mobile */}
        <Row className="mt-1 mt-md-5 d-flex align-items-center justify-content-center">
        <Col xs={6} md={{span: 3, offset: 1 }}
        className="text-center" >
        <p >
        As easy to use in mobile as desktop. Use Quick Find to locate all info fast.
        </p>
        </Col>
        <Col xs={6} md={{span: 6, offset: 2 }}>
        <div className="text-center d-flex align-items-center justify-content-center">
        <Image src={pic} alt="image" 
          className={` ${styles.Image}`} />
        </div>
        </Col>
        </Row>
        {/* Callsheets */}
        <Row className="mt-1 mt-md-5 d-flex align-items-center justify-content-center">
        <Col xs={6} md={6}>
        <div className="text-center d-flex justify-content-center">
        <Image src={pic} alt="image" 
          className={` ${styles.Image}`} />
        </div>
        </Col>
        <Col xs={6} md={{span: 3, offset: 2 }}
        className="text-center" >
        <p >
        Manage the cast and crew. Easily create Shotlists, Schedules and 
        personalized Callsheets.
        </p>
        </Col>
        </Row>
        <Row>
        <Col xs={12} md={{span: 10, offset: 1}} className="text-center">
        </Col>
        </Row>
        </div>
        {/* page 3 */}
        <div className={`mt-5 px-5 mx-5 ${styles.Overview}`}>
        <h2 className={`pb-1 ${styles.OverviewText} ${appStyles.playfair} 
        text-center`} >Features</h2>
        </div>
        <div>
        <Row>
        <Col>
        </Col>
        </Row>
        </div>
    </div>
  );
};

export default Home;