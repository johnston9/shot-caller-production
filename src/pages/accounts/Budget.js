/* Component in the BudgetPage Component to display the budget data */
import React from 'react';
import styles from "../../styles/Account.module.css";
import appStyles from "../../App.module.css";
// import Card from "react-bootstrap/Card";
// import btnStyles from "../../styles/Button.module.css";
// import Button from "react-bootstrap/Button";
// import { useCurrentUser } from "../../contexts/CurrentUserContext";
// import { axiosRes } from '../../api/axiosDefaults';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// import { UniDropdown } from '../../components/UniDropDown';
// import { Link, useHistory } from 'react-router-dom';

const Budget = (props) => {
  const {
    // details
    title, series, prodco, format, location, dated,
    // length
    research, prep, shoot, wrap, post, length_total,
    // rights
    story_rights, miscel_rights, rights_total,
  } = props;

  return (
    <div >
    <div className={`${styles.Overview}`}>
    <h2 className={`py-2 ${styles.OverviewText} ${appStyles.playfair}
     text-center`} >{title} Budget </h2>
    </div>
    <div>
      <Row>
      <Col xs={6}>
      <h5>Details</h5>
      </Col>
      <Col xs={6}>
      <h5>Length</h5>
      </Col>
      </Row>
    <Row>
    <Col xs={6} >
      <p>Title</p> <p>{title}</p>
      <p>Series</p><p>{series}</p>
      <p>Prodco</p><p>{prodco}</p>
      <p>Format</p><p>{format}</p>
      <p>Location</p><p>{location}</p>
      <p>Dated</p><p>{dated}</p>
    </Col>
    <Col xs={6} >
      <p>Research</p> <p>{research}</p> <p>Weeks</p>
      <p>Prep</p> <p>{prep}</p> <p>Weeks</p>
      <p>Shoot</p> <p>{shoot}</p> <p>Weeks</p>
      <p>Wrap</p> <p>{wrap}</p> <p>Weeks</p>
      <p>Vost</p> <p>{post}</p> <p>Weeks</p>
      <p>Length Total</p> <p>{length_total}</p> <p>Weeks</p>
    </Col>
    </Row>
    </div>
    <Row>
    <Col>
    <h4>ABOVE THE LINE</h4>
    </Col>
    </Row>
    {/* rights */}
    <div>
    <h5>Rights</h5>
    <Row>
    <Col xs={6}>
    <p>Story Rights</p>
    <p>Miscellaneous</p>
    <p>Rights Total</p>
    </Col>
    <Col xs={6}>
    <p>{story_rights} </p>
    <p>{miscel_rights} </p>
    <p>{rights_total} </p>
    </Col>
    </Row>
    </div>
    </div>
  )
}

export default Budget