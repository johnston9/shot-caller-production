/* Page to display the info for the Schedule and Stripboard features */
import React from "react";
import { useHistory } from "react-router-dom";
import styles from "../../styles/Home.module.css";
import appStyles from "../../App.module.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import bb from "../../assets/bb.png";
import bbedit from "../../assets/bbedit.png";
import bbtop from "../../assets/bbtop.png";
import bbglob3 from "../../assets/bbglob3.png";
import btnStyles from "../../styles/Button.module.css";
import Button from "react-bootstrap/Button";
import { Image } from "react-bootstrap";

const Budgeting = () => {
    const history = useHistory();
  
    return (
      <div>
      <div className={`mt-0 ${styles.Overview}`}>
      <h2 className={`py-2 ${styles.OverviewText} ${appStyles.playfair}
       text-center`} >Budgeting</h2>
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
      {/* one */}
      <Row className="mt-1 mt-md-3 pb-4 px-3 d-flex align-items-center justify-content-center">
      <Col xs={12} md={{span: 3, offset: 1 }} className="text-center px-1 px-md-3" >
      <p >
      Create industry standard Budgets.</p>
      <p >
    The easy to use budgeting software allows the creation of 
    industry standard budgets.
      </p>
      </Col>
      <Col xs={12} md={8}>
      <div className="text-center px-1 px-md-3">
      <Image src={bb} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
      </Row>
      <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
      {/* two */}
      <Row className="px-3 pb-4 mt-4 d-flex align-items-center justify-content-center">
      <Col xs={12} md={8}>
      <div className="text-center px-1 px-md-3">
      <Image src={bbedit} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
      <Col xs={12} md={{span: 3, offset: 0 }}
      className="text-center px-1 px-md-3" >
      <p >
      The budget making page is esay to understand and manage.
      The different section headers are displayed on top with their
      respective current total. Clicking on the header will open 
      that sections input page below.
      </p>
      </Col>
      </Row>
      <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
      {/* three  */}
      <Row className="px-3 pb-4 mt-4 d-flex align-items-center justify-content-center">
      <Col xs={12} md={{span: 3, offset: 1 }}
        className="text-center px-1 px-md-3" >
      <p>The easy to use Global input section opens on top
        to allow the use of Global values for the Production 
        Prep, Shoot and Wrap weeks for all crew members.
      </p>
      </Col>
      <Col xs={12} md={8}>
      <div className="text-center px-1 px-md-3">
      <Image src={bbglob3} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
      </Row>
      <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
      {/* four */}
      <Row className="px-3 pb-4 mt-4 d-flex align-items-center justify-content-center">
      <Col xs={12} md={8}>
      <div className="text-center px-1 px-md-3">
      <Image src={bbtop} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
      <Col xs={12} md={{span: 3, offset: 0 }}
        className="text-center px-1 px-md-3" >
      <p >
      The stylish end result also produced a Cover Page
      and a Topsheet.
      </p>
      </Col>
      </Row>
      </div>
    )
  }

export default Budgeting