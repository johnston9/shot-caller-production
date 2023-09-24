/* Component in the Budget component to edit Titles */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const Titles = (props) => {
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});

  const {postDataPostTitles, setPostDataPostTitles,
  postTitlesTotal, setPostTitlesTotal, setShow,} = props;

  const {titles, opticals, stock_footage, con_script_ccsl,
  } = postDataPostTitles;

  // handleChange 
  const handleChange = (event) => {
    setPostDataPostTitles({
    ...postDataPostTitles,
    [event.target.name]: parseFloat(event.target.value || 0 ),
    });
  };
  
  // function to add all Post Titles/Opticals on change
  useEffect(() => {
    const addTitOp = () => {
        setPostTitlesTotal(
        parseFloat(titles || 0) +
        parseFloat(opticals || 0) +
        parseFloat(stock_footage || 0) +
        parseFloat(con_script_ccsl || 0)
       )
    }
    const timer = setTimeout(() => {
        addTitOp();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
   // eslint-disable-next-line
  }, [titles, opticals, stock_footage, con_script_ccsl,]);

  return (
    <div className="mt-5">
    <Row >
    <Col md={1} >
    <p className="mb-2">47.00</p>
    </Col>
    <Col md={9} >
    <p className={ `${styles.BoldBlack} mb-2`}>Titles/Opticals/Stock Footage</p>
    </Col>
    <Col md={2}>
    <span className={`${styles.Close }`} 
    onClick={() => setShow(false) } >Close</span>
    </Col>
    </Row>
    {/* TITLES */}
    <Row className={ `${styles.Overview} mb-2 py-1`} >
    <Col md={1} >
    <p className="mb-0">ACCT</p>
    </Col>
    <Col md={5} >
    <p className="mb-0">Description</p>
    </Col>
    <Col md={1} >
    <p className="mb-0">#</p>
    </Col>
    <Col className="px-0 mx-0" md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} >
    <p className="mb-0">Unit</p>
    </Col>
    <Col md={1} >
    <p className="mb-0">Price</p>
    </Col>
    <Col md={2} >
    <p className="mb-0">Total</p>
    </Col>
    </Row>
    </div>
  )
}

export default Titles