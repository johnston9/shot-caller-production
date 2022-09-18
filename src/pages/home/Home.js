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
import features from "../../assets/r-1.png";

import Container from "react-bootstrap/Container";
// eslint-disable-next-line 
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
import TopBox2 from "../../components/TopBox2";
import { Image } from "react-bootstrap";

const Home = () => {
  // const setCurrentUser = useSetCurrentUser();
  // const admin = true;
  const history = useHistory();
  const height = "75px";

  return (
      <div >
        <TopBox2 title="SHOT CALLER PRODUCTION" />
        {/* page 1 */}
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
                <h2 className={`${styles.Header}`} >TV and Film Production Software</h2>
                <h5 className={`${styles.Header}`}  style={{fontStyle: 'italic'}}>
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
        <div>
        <div className={`mt-5 ${styles.Overview}`}>
        <h2 className={`pb-1 ${styles.OverviewText} ${appStyles.playfair}
         text-center`} >Overview</h2>
        </div>
        <div className="px-3 mt-3">
        {/* platform */}
        <Row className="mt-1 mt-md-5 d-flex align-items-center justify-content-center">
        <Col xs={6} md={{span: 3, offset: 1 }} className="text-center" >
        <p >
        Build and manage TV and Film Production in the 
        one platform utilizing interlinking tools.
        </p>
        </Col>
        <Col xs={6} md={{span: 6, offset: 2 }}>
        <div className="text-center">
        <Image src={pic} alt="image" 
          className={` ${styles.Image}`} />
        </div>
        </Col>
        </Row>
        {/* Workspaces */}
        <Row className="mt-1 mt-md-5 d-flex align-items-center justify-content-center">
        <Col xs={6} md={6}>
        <div className="text-center">
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
        {/* Callsheets  */}
        <Row className="mt-1 mt-md-5 d-flex align-items-center justify-content-center">
        <Col xs={6} md={{span: 3, offset: 1 }}
          className="text-center" >
        <p >
        Manage Cast and Crew. Easily create Shotlists, Schedules and 
        personalized Callsheets.
        </p>
        </Col>
        <Col xs={6} md={{span: 6, offset: 2 }}>
        <div className="text-center">
        <Image src={pic} alt="image" 
          className={` ${styles.Image}`} />
        </div>
        </Col>
        </Row>
        {/* mobile */}
        <Row className="mt-1 mt-md-5 d-flex align-items-center justify-content-center">
        <Col xs={6} md={6}>
        <div className="text-center">
        <Image src={pic} alt="image" 
          className={` ${styles.Image}`} />
        </div>
        </Col>
        <Col xs={6} md={{span: 3, offset: 2 }}
          className="text-center" >
        <p >
        All features easy to use on Mobile. Use Quick Find to locate all Info fast.
        </p>
        </Col>
        </Row>
        </div>
        </div>
        {/* page 3 */}
        <div className={`mt-5 px-5 mx-5 ${styles.Overview}`}>
        <h2 className={`pb-1 ${styles.OverviewText} ${appStyles.playfair} 
        text-center`} >The Creative Features</h2>
        </div>
        <div className="px-5">
        {/* 1 Breakdowns - Characters and Locations */}
        <Row className="mb-3 mt-5">
        {/* Breakdowns */}
        <Col xs={12} md={6} >
        <Row className="d-flex align-items-center justify-content-center">
        <div className={`${styles.FeatureLink} d-flex align-items-center justify-content-center`}>
        <Col xs={3} >
        <div className="text-center" >
        <Image 
          onClick={() => history.push('/landing')}
          height={height}
          width={height}
          src={features} alt="image" 
          className={`round ${styles.FeaturesImage}`} />
        </div>
        </Col>
        <Col xs={9} className="text-center" >
        <h4>Scene Breakdowns</h4>
        <p >
        Create Scene Breakdowns for all the Scene Info including Department
        Info 
        </p>
        </Col>
        </div>
        </Row>
        </Col>
        {/* Characters and Locations */}
        <Col xs={12} md={6}>
        <Row className="d-flex align-items-center justify-content-center">
        <div className={`${styles.FeatureLink} d-flex align-items-center justify-content-center`}>
        <Col xs={9} className="text-center" >
        <h4>Characters and Locations</h4>
        <p >
        Create Characters and Locations pages with Images
        and all relevant Info.
        </p>
        </Col>
        <Col xs={3} >
        <div className="text-center" >
        <Image 
          onClick={() => history.push('/landing')}
          height={height}
          width={height}
          src={features} alt="image" 
          className={`round ${styles.FeaturesImage}`} />
        </div>
        </Col>
        </div>
        </Row>
        </Col>
        </Row>
        {/* 2 Workspaces - Script, Storyboard and Shotlists */}
        <Row className="my-3">
        {/* Workspaces */}
        <Col xs={12} md={6} >
        <Row className="d-flex align-items-center justify-content-center">
        <div className={`${styles.FeatureLink} d-flex align-items-center justify-content-center`}>
        <Col xs={3} >
        <div className="text-center" >
        <Image 
          onClick={() => history.push('/landing')}
          height={height}
          width={height}
          src={features} alt="image" 
          className={`round ${styles.FeaturesImage}`} />
        </div>
        </Col>
        <Col xs={9} className="text-center" >
        <h4>Scene Workspaces</h4>
        <p >
        Utilize the Primary Creative feature the Scene Workspaces
        to Design, Collaborate and Build in each Scene Department.
        </p>
        </Col>
        </div>
        </Row>
        </Col>
        {/* Script, Storyboard and Shotlists */}
        <Col xs={12} md={6}>
        <Row className="d-flex align-items-center justify-content-center">
        <div className={`${styles.FeatureLink} d-flex align-items-center justify-content-center`}>
        <Col xs={9} className="text-center" >
        <h4>Shotlists, Script and Storyboard</h4>
        <p >
        Create Scene Shotlists in the Scene Page and add it's Script 
        and Storyboard 
        </p>
        </Col>
        <Col xs={3} >
        <div className="text-center" >
        <Image 
          onClick={() => history.push('/landing')}
          height={height}
          width={height}
          src={features} alt="image" 
          className={`round ${styles.FeaturesImage}`} />
        </div>
        </Col>
        </div>
        </Row>
        </Col>
        </Row>
        {/* 3 Moodshots - Script, Storyboard and Shotlists */}
        <Row className="my-3">
        {/* Moodshots */}
        <Col xs={12} md={6} >
        <Row className="d-flex align-items-center justify-content-center">
        <div className={`${styles.FeatureLink} d-flex align-items-center justify-content-center`}>
        <Col xs={3} >
        <div className="text-center" >
        <Image 
          onClick={() => history.push('/landing')}
          height={height}
          width={height}
          src={features} alt="image" 
          className={`round ${styles.FeaturesImage}`} />
        </div>
        </Col>
        <Col xs={9} className="text-center" >
        <h4>Moodshots</h4>
        <p >
        Use Moodshots to explore and guide Scene, Character and 
        Location design and style 
        </p>
        </Col>
        </div>
        </Row>
        </Col>
        {/* Script, Storyboard and Shotlists */}
        <Col xs={12} md={6}>
        <Row className="d-flex align-items-center justify-content-center">
        <div className={`${styles.FeatureLink} d-flex align-items-center justify-content-center`}>
        <Col xs={9} className="text-center" >
        <h4>Shotlists, Script and Storyboard</h4>
        <p >
        Create Scene Shotlists in the Scene Page and add it's Script 
        and Storyboard 
        </p>
        </Col>
        <Col xs={3} >
        <div className="text-center" >
        <Image 
          onClick={() => history.push('/landing')}
          height={height}
          width={height}
          src={features} alt="image" 
          className={`round ${styles.FeaturesImage}`} />
        </div>
        </Col>
        </div>
        </Row>
        </Col>
        </Row>
        </div>
        {/* page 4 */}
        <div className={`mt-5 px-5 mx-5 ${styles.Overview}`}>
        <h2 className={`pb-1 ${styles.OverviewText} ${appStyles.playfair} 
        text-center`} >Production Features</h2>
        </div>
        <div className="px-5">
        {/* 1 Cast and Crew - Schedule */}
        <Row className="mb-3 mt-5">
        {/* Cast and Crew */}
        <Col xs={12} md={6} >
        <Row className="d-flex align-items-center justify-content-center">
        <div className={`${styles.FeatureLink} d-flex align-items-center justify-content-center`}>
        <Col xs={3} >
        <div className="text-center" >
        <Image 
          onClick={() => history.push('/landing')}
          height={height}
          width={height}
          src={features} alt="image" 
          className={`round ${styles.FeaturesImage}`} />
        </div>
        </Col>
        <Col xs={9} className="text-center" >
        <h4>Cast and Crew</h4>
        <p >
        Manage the Cast and Crew with all the necessary Info Requirements
        </p>
        </Col>
        </div>
        </Row>
        </Col>
        {/* Schedule */}
        <Col xs={12} md={6}>
        <Row className="d-flex align-items-center justify-content-center">
        <div className={`${styles.FeatureLink} d-flex align-items-center justify-content-center`}>
        <Col xs={9} className="text-center" >
        <h4>Create Schedules</h4>
        <p >
        Create Schedules and Stripboards in a flash automatically 
        adding all details from the Scene Breakdown 
        </p>
        </Col>
        <Col xs={3} >
        <div className="text-center" >
        <Image 
          onClick={() => history.push('/landing')}
          height={height}
          width={height}
          src={features} alt="image" 
          className={`round ${styles.FeaturesImage}`} />
        </div>
        </Col>
        </div>
        </Row>
        </Col>
        </Row>
        {/* 2 Callsheets */}
        <Row className="my-3">
        {/* Callsheets */}
        <Col xs={12} md={6} >
        <Row className="d-flex align-items-center justify-content-center">
        <div className={`${styles.FeatureLink} d-flex align-items-center justify-content-center`}>
        <Col xs={3} >
        <div className="text-center" >
        <Image 
          onClick={() => history.push('/landing')}
          height={height}
          width={height}
          src={features} alt="image" 
          className={`round ${styles.FeaturesImage}`} />
        </div>
        </Col>
        <Col xs={9} className="text-center" >
        <h4>Callsheets</h4>
        <p >
        Create stylish Callsheets with personalized Call Times
        and Google Maps for Locations
        </p>
        </Col>
        </div>
        </Row>
        </Col>
        {/* Mobile */}
        <Col xs={12} md={6}>
        <Row className="d-flex align-items-center justify-content-center">
        <div className={`${styles.FeatureLink} d-flex align-items-center justify-content-center`}>
        <Col xs={9} className="text-center" >
        <h4>Mobile View</h4>
        <p >
        Use all Features in Mobile View and find all Info fast 
        using the Quick Find Feature
        </p>
        </Col>
        <Col xs={3} >
        <div className="text-center" >
        <Image 
          onClick={() => history.push('/landing')}
          height={height}
          width={height}
          src={features} alt="image" 
          className={`round ${styles.FeaturesImage}`} />
        </div>
        </Col>
        </div>
        </Row>
        </Col>
        </Row>
        {/* 3  */}
        {/* <Row >
        <Col xs={12} md={6} >
        <Row className="d-flex align-items-center justify-content-center">
        <div className={`${styles.FeatureLink} d-flex align-items-center justify-content-center my-5`}>
        <Col xs={3} >
        <div className="text-center" >
        <Image 
          onClick={() => history.push('/landing')}
          height={height}
          width={height}
          src={features} alt="image" 
          className={`round ${styles.FeaturesImage}`} />
        </div>
        </Col>
        <Col xs={9} className="text-center" >
        <h4>Moodshots</h4>
        <p >
        Use Moodshots to explore and guide Scene, Character and 
        Location design and style 
        </p>
        </Col>
        </div>
        </Row>
        </Col>
        <Col xs={12} md={6}>
        <Row className="d-flex align-items-center justify-content-center">
        <div className={`${styles.FeatureLink} d-flex align-items-center justify-content-center my-5`}>
        <Col xs={9} className="text-center" >
        <h4>Shotlists, Script and Storyboard</h4>
        <p >
        Create Scene Shotlists in the Scene Page and add it's Script 
        and Storyboard 
        </p>
        </Col>
        <Col xs={3} >
        <div className="text-center" >
        <Image 
          onClick={() => history.push('/landing')}
          height={height}
          width={height}
          src={features} alt="image" 
          className={`round ${styles.FeaturesImage}`} />
        </div>
        </Col>
        </div>
        </Row>
        </Col>
        </Row> */}
        </div>
    </div>
  );
};

export default Home;