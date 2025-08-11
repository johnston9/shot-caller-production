/* Page to display the info for the Mobile feature */
import React from "react";
import { useHistory } from "react-router-dom";
import styles from "../../styles/Home.module.css";
import appStyles from "../../App.module.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import moscenes from "../../assets/moscenes.png";
import moscene from "../../assets/moscene.png";
import moposts from "../../assets/moposts.png";
import mopost2 from "../../assets/mopost2.png";
import btnStyles from "../../styles/Button.module.css";
import Button from "react-bootstrap/Button";
import { Image } from "react-bootstrap";

const Mobile = () => {
    const history = useHistory();
  
    return (
      <div>
      <div className={`mt-0 ${styles.Overview}`}>
      <h2 className={`py-2 ${styles.OverviewText} ${appStyles.playfair}
       text-center`} >Moblile View and Quick Find</h2>
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
      <Row>
      <Col className="text-center" >
      <p >
      All features apart from the Budget are totally compatable with mobile in terms 
      of functionality and view.
      </p>
      </Col>
      </Row>
      {/* one Scenes */}
      <Row className="px-3 pb-md-4 mt-3 d-flex align-items-center justify-content-center">
      <Col xs={12} md={6}>
      <div className="text-center px-1 px-md-3">
      <Image src={moscenes} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      <p className="mt-3 text-center">
      Scene page in mobile view.
      </p>
      </Col>
      <Col xs={12} md={6}>
      <div className="text-center px-1 px-md-3">
      <Image src={moscene} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      <p className="mt-3 text-center">
      Scene page and Workspace in mobile view.
      </p>
      </Col>
      </Row>
      <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
      {/* two Posts */}
      <Row className="px-3 pb-md-4 mt-3 d-flex align-items-center justify-content-center">
      <Col xs={12} md={6}>
      <div className="text-center px-1 px-md-3">
      <Image src={moposts} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      <p className="mt-3 text-center">
      A Department Category's Posts page in mobile view.
      </p>
      </Col>
      <Col xs={12} md={6}>
      <div className="text-center px-1 px-md-3">
      <Image src={mopost2} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      <p className="mt-3 text-center">
      A Department Category Post in mobile view.
      </p>
      </Col>
      </Row>
      <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>

      <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
      {/* four */}

      </div>
    )
  }

export default Mobile