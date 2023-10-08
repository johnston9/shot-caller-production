/* Component in the Budget component to edit Insurance */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const Insurance = (props) => {
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});

  const {postDataInsurance, setPostDataInsurance,
    insurTotal, setInsurTotal, setShow,} = props;


  return (
    <div>Insurance</div>
  )
}

export default Insurance