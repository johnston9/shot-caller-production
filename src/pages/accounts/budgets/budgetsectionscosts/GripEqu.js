/* Component in the Budget component to edit Grip Equ */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const GripEqu = (props) => {
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});

  const {postDataGripEqu, setPostDataGripEqu,
  gripTotal, setGripTotal, setShow,} = props;

  const {basic_package_rent_grip, daily_rentals_grip,
    specialty_rent_grip, crane_rentals, scaffolding_grip,
    grip_purchases, loss_damage_grip, other_grip,
  } = postDataGripEqu;

  // handleChange 
  const handleChange = (event) => {
    setPostDataGripEqu({
    ...postDataGripEqu,
    [event.target.name]: parseFloat(event.target.value || 0 ),
    });
  };

  // function to add all Grip Equipment on change
  useEffect(() => {
    const addGripEqu= () => {
        setGripTotal(
        parseFloat(basic_package_rent_grip || 0) +
        parseFloat(daily_rentals_grip || 0) +
        parseFloat(specialty_rent_grip || 0) +
        parseFloat(grip_purchases || 0) +
        parseFloat(crane_rentals || 0) +
        parseFloat(scaffolding_grip || 0) +
        parseFloat(loss_damage_grip || 0) +
        parseFloat(other_grip || 0)
       )
    }
    const timer = setTimeout(() => {
        addGripEqu();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [basic_package_rent_grip, daily_rentals_grip,
    specialty_rent_grip, crane_rentals, scaffolding_grip,
    grip_purchases, loss_damage_grip, other_grip,]);

  return (
    <div className="mt-5">
    <Row >
    <Col md={1} >
    <p className="mb-2">38.00</p>
    </Col>
    <Col md={9} >
    <p className={ `${styles.BoldBlack} mb-2`}>Grip Equipment</p>
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
    {/* Basic Package Rentals */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>38.10</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Basic Package Rentals</p>
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
    <Form.Group controlId="basic_package_rent_grip" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="basic_package_rent_grip"
        value={basic_package_rent_grip}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.basic_package_rent_grip?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Daily Rentals */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>38.20</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Daily Rentals</p>
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
    <Form.Group controlId="daily_rentals_grip" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="daily_rentals_grip"
        value={daily_rentals_grip}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.daily_rentals_grip?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Specialty Rentals */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>38.30</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Specialty Rentals</p>
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
    <Form.Group controlId="specialty_rent_grip" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="specialty_rent_grip"
        value={specialty_rent_grip}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.specialty_rent_grip?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Crane Rentals */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>38.40</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Crane Rentals</p>
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
    <Form.Group controlId="crane_rentals" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="crane_rentals"
        value={crane_rentals}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.crane_rentals?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Scaffolding */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>38.50</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Scaffolding</p>
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
    <Form.Group controlId="scaffolding_grip" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="scaffolding_grip"
        value={scaffolding_grip}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.scaffolding_grip?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Purchases */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>38.60</p>
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
    <Form.Group controlId="grip_purchases" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="grip_purchases"
        value={grip_purchases}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.grip_purchases?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Loss & Damage */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>38.70</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Loss & Damage</p>
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
    <Form.Group controlId="loss_damage_grip" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="loss_damage_grip"
        value={loss_damage_grip}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.loss_damage_grip?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Other */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>38.80</p>
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
    <Form.Group controlId="other_grip" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_grip"
        value={other_grip}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_grip?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* GRIP EQUIPMENT Total */}
    <Row className="mt-3">
    <Col md={1} >
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL GRIP EQUIPMENT</p>
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
    <Form.Group controlId="gripTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="gripTotal"
        value={gripTotal}
        readOnly
            />
    </Form.Group>
    {errors?.gripTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
  )
}

export default GripEqu