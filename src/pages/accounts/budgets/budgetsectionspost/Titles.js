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
    {/* Titles */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>47.10</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Titles</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="titles" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="titles"
        value={titles}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.titles?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Opticals */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>47.20</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Opticals</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="opticals" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="opticals"
        value={opticals}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.opticals?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Stock Footage */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>47.30</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Stock Footage</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="stock_footage" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stock_footage"
        value={stock_footage}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.stock_footage?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Continuity Script CCSL */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>47.40</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Continuity Script CCSL</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="con_script_ccsl" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="con_script_ccsl"
        value={con_script_ccsl}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.con_script_ccsl?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* POST TITLES/OPTICALS/STOCK FOOTAGE Total */}
    <Row className="mt-3">
    <Col md={1} >
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TITLES/OPTICALS/STOCK FOOTAGE TOTAL</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="postTitlesTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="postTitlesTotal"
        value={postTitlesTotal}
        readOnly
            />
    </Form.Group>
    {errors?.postTitlesTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
  )
}

export default Titles