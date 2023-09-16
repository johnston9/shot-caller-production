/* Component in the Budget component to edit Makeup Supplies */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const MakeupSup = (props) => {
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});

  const {postDataMakeupSup, setPostDataMakeupSup,
    makeupTotal, setMakeupTotal, setShow} = props;

  const {makeup_rentals, makeup_purchases, hair_rentals,
      hair_purchases, wigs, makeup_fx, makeup_ship_brok, other_makeup,
  } = postDataMakeupSup;

  // handleChange 
  const handleChange = (event) => {
    setPostDataMakeupSup({
    ...postDataMakeupSup,
    [event.target.name]: parseFloat(event.target.value || 0 ),
    });
  };

  // function to add all Makeup sup on change
  useEffect(() => {
    const addMakeSup = () => {
        setMakeupTotal(
        parseFloat(makeup_rentals || 0) +
        parseFloat(makeup_purchases || 0) +
        parseFloat(hair_rentals || 0) +
        parseFloat(hair_purchases || 0) +
        parseFloat(wigs || 0) +
        parseFloat(makeup_fx || 0) +
        parseFloat(makeup_ship_brok || 0) +
        parseFloat(other_makeup || 0)
       )
    }
    const timer = setTimeout(() => {
      addMakeSup();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
   // eslint-disable-next-line
  }, [makeup_rentals, makeup_purchases, hair_rentals, hair_purchases,
    wigs, makeup_fx, makeup_ship_brok, other_makeup,]);
    
  return (
    <div className="mt-5">
    <Row >
    <Col md={1} >
    <p className="mb-2">35.00</p>
    </Col>
    <Col md={9} >
    <p className={ `${styles.BoldBlack} mb-2`}>Makeup Supplies</p>
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
    {/* Makeup Rentals */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>35.10</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Makeup Rentals</p>
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
    <Form.Group controlId="makeup_rentals" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="makeup_rentals"
        value={makeup_rentals}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.makeup_rentals?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Makeup Purchases */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>35.20</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Makeup Purchases</p>
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
    <Form.Group controlId="makeup_purchases" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="makeup_purchases"
        value={makeup_purchases}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.makeup_purchases?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Hair Rentals */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>35.30</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Hair Rentals</p>
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
    <Form.Group controlId="hair_rentals" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="hair_rentals"
        value={hair_rentals}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.hair_rentals?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Hair Purchases */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>35.40</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Hair Purchases</p>
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
    <Form.Group controlId="hair_purchases" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="hair_purchases"
        value={hair_purchases}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.hair_purchases?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Wigs Rentals/Purchases */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>35.50</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Wigs Rentals/Purchases</p>
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
    <Form.Group controlId="wigs" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="wigs"
        value={wigs}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.wigs?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Special Effects */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>35.60</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Special Effects</p>
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
    <Form.Group controlId="makeup_fx" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="makeup_fx"
        value={makeup_fx}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.makeup_fx?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Shipping/Brokerage */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>35.70</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Shipping/Brokerage</p>
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
    <Form.Group controlId="makeup_ship_brok" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="makeup_ship_brok"
        value={makeup_ship_brok}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.makeup_ship_brok?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Other */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>35.80</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Other</p>
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
    <Form.Group controlId="other_makeup" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_makeup"
        value={other_makeup}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_makeup?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* MAKEUP SUPPLIES Total */}
    <Row className="mt-3">
    <Col md={1} >
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL MAKEUP SUPPLIES</p>
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
    <Form.Group controlId="makeupTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="makeupTotal"
        value={makeupTotal}
        readOnly
            />
    </Form.Group>
    {errors?.makeupTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
  )
}

export default MakeupSup