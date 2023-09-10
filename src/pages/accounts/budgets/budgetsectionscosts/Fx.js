/* Component in the Budget component to edit Fx */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const Fx = (props) => {
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});

  const {postDataSpecEf, setPostDataSpecEf,
    fxTotal, setFxTotal, setShow} = props;

  const {fx_rentals, fx_purchases, stunts_purchases_rentals,
        armaments_permits_fees, other_fx,} = postDataSpecEf;

  // handleChange 
  const handleChange = (event) => {
    setPostDataSpecEf({
    ...postDataSpecEf,
    [event.target.name]: parseFloat(event.target.value || 0 ),
    });
  };

  // function to add all FX on change
  useEffect(() => {
    const addSpefx = () => {
        setFxTotal(
        parseFloat(fx_rentals || 0) +
        parseFloat(fx_purchases || 0) +
        parseFloat(stunts_purchases_rentals || 0) +
        parseFloat(armaments_permits_fees || 0) +
        parseFloat(other_fx || 0)
       )
    }
    const timer = setTimeout(() => {
        addSpefx();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };

  }, [fx_rentals, fx_purchases, stunts_purchases_rentals,
    armaments_permits_fees, other_fx]);

  return (
    <div className="mt-5">
    <Row >
    <Col md={1} >
    <p className="mb-2">32.00</p>
    </Col>
    <Col md={9} >
    <p className={ `${styles.BoldBlack} mb-2`}>Special Effects</p>
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
    {/* Rentals */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>32.10</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Rentals</p>
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
    <Form.Group controlId="fx_rentals" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="fx_rentals"
        value={fx_rentals}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.fx_rentals?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Purchases */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>32.20</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Purchases</p>
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
    <Form.Group controlId="fx_purchases" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="fx_purchases"
        value={fx_purchases}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.fx_purchases?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Stunts Purchases/Rentals */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>32.30</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Stunts Purchases/Rentals</p>
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
    <Form.Group controlId="stunts_purchases_rentals" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stunts_purchases_rentals"
        value={stunts_purchases_rentals}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.stunts_purchases_rentals?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Armaments & Permits/Fees */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>32.40</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Armaments & Permits/Fees</p>
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
    <Form.Group controlId="armaments_permits_fees" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="armaments_permits_fees"
        value={armaments_permits_fees}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.armaments_permits_fees?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Other */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>32.50</p>
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
    <Form.Group controlId="other_fx" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_fx"
        value={other_fx}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_fx?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* SPECIAL EFFECTS Total */}
    <Row className="mt-3">
    <Col md={1} >
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL SPECIAL EFFECTS</p>
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
    <Form.Group controlId="fxTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="fxTotal"
        value={fxTotal}
        readOnly
            />
    </Form.Group>
    {errors?.fxTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
  )
}

export default Fx