/* Component in the Budget component to edit travel and living */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const TravelLiving = (props) => {
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});

  const {postDataTraLiv, setPostDataTraLiv,
    tralivTotal, setTralivTotal, setShow} = props;

  const {fares, accomatation_hotels, per_diems, taxis_limos,
        shipping, other_trav_liv, customs_brokerage,} = postDataTraLiv;

  // handleChange 
  const handleChange = (event) => {
    setPostDataTraLiv({
    ...postDataTraLiv,
    [event.target.name]: parseFloat(event.target.value || 0 ),
    });
  }; 

  // function to add all Travel & Living on change
  useEffect(() => {
    const addTraliv = () => {
        setTralivTotal(
        parseFloat(fares || 0) +
        parseFloat(accomatation_hotels || 0) +
        parseFloat(per_diems || 0) +
        parseFloat(taxis_limos || 0) +
        parseFloat(shipping || 0) +
        parseFloat(other_trav_liv || 0) +
        parseFloat(customs_brokerage || 0) 
       )
    }
    const timer = setTimeout(() => {
        addTraliv();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
   // eslint-disable-next-line
  }, [fares, accomatation_hotels, per_diems, taxis_limos,
    shipping, other_trav_liv, customs_brokerage,]);

  return (
    <div className="mt-5">
    <Row >
    <Col md={1} >
    <p className="mb-2">26.00</p>
    </Col>
    <Col md={9} >
    <p className={ `${styles.BoldBlack} mb-2`}>Travel & Living</p>
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
    {/* Fares */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>26.10</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Fares</p>
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
    <Form.Group controlId="fares" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="fares"
        value={fares}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.fares?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Accomatation/Hotels */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>26.20</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Accomatation/Hotels</p>
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
    <Form.Group controlId="accomatation_hotels" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="accomatation_hotels"
        value={accomatation_hotels}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.accomatation_hotels?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Per diems */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>26.30</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Per diems</p>
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
    <Form.Group controlId="per_diems" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="per_diems"
        value={per_diems}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.per_diems?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Taxis/Limousines */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>26.40</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Taxis/Limousines</p>
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
    <Form.Group controlId="taxis_limos" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="taxis_limos"
        value={taxis_limos}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.taxis_limos?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Shipping */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>26.50</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Shipping</p>
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
    <Form.Group controlId="shipping" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="shipping"
        value={shipping}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.shipping?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Customs Brokerage */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>26.60</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Customs Brokerage</p>
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
    <Form.Group controlId="customs_brokerage" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="customs_brokerage"
        value={customs_brokerage}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.customs_brokerage?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Other */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>26.70</p>
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
    <Form.Group controlId="other_trav_liv" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_trav_liv"
        value={other_trav_liv}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_trav_liv?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* TRAVEL & LIVING Total */}
    <Row className="mt-3">
    <Col md={1} >
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL TRAVEL & LIVING</p>
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
    <Form.Group controlId="tralivTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tralivTotal"
        value={tralivTotal}
        readOnly
            />
    </Form.Group>
    {errors?.tralivTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
  )
}

export default TravelLiving
