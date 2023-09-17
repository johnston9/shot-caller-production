/* Component in the Budget component to edit Electric Equ */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const ElectricEqu = (props) => {
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});

  const {postDataElectricEqu, setPostDataElectricEqu,
  electricTotal, setElectricTotal, setShow,} = props;

  const {basic_package_rent_elec, daily_rentals_elec,
    specialty_rent_elec, electric_purchases,
    generators, loss_damage_elec, other_electric,
  } = postDataElectricEqu;

  // handleChange 
  const handleChange = (event) => {
    setPostDataElectricEqu({
    ...postDataElectricEqu,
    [event.target.name]: parseFloat(event.target.value || 0 ),
    });
  };

  // function to add all Electric Equipment on change
  useEffect(() => {
    const addElecEqu = () => {
      setElectricTotal(
        parseFloat(basic_package_rent_elec || 0) +
        parseFloat(daily_rentals_elec || 0) +
        parseFloat(specialty_rent_elec || 0) +
        parseFloat(electric_purchases || 0) +
        parseFloat(generators || 0) +
        parseFloat(loss_damage_elec || 0) +
        parseFloat(other_electric || 0)
       )
    }
    const timer = setTimeout(() => {
      addElecEqu();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
   // eslint-disable-next-line
  }, [basic_package_rent_elec, daily_rentals_elec,
    specialty_rent_elec, electric_purchases,
    generators, loss_damage_elec, other_electric,]);
  
  return (
    <div className="mt-5">
    <Row >
    <Col md={1} >
    <p className="mb-2">37.00</p>
    </Col>
    <Col md={9} >
    <p className={ `${styles.BoldBlack} mb-2`}>Electrical Equipment</p>
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
    <p className={`${styles.Underline}`}>37.10</p>
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
    <Form.Group controlId="basic_package_rent_elec" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="basic_package_rent_elec"
        value={basic_package_rent_elec}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.basic_package_rent_elec?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Daily Rentals */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>37.20</p>
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
    <Form.Group controlId="daily_rentals_elec" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="daily_rentals_elec"
        value={daily_rentals_elec}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.daily_rentals_elec?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Specialty Rentals */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>37.30</p>
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
    <Form.Group controlId="specialty_rent_elec" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="specialty_rent_elec"
        value={specialty_rent_elec}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.specialty_rent_elec?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Purchases */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>37.40</p>
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
    <Form.Group controlId="electric_purchases" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="electric_purchases"
        value={electric_purchases}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.electric_purchases?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Generators */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>37.50</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Generators</p>
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
    <Form.Group controlId="generators" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="generators"
        value={generators}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.generators?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Loss & Damage */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>37.60</p>
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
    <Form.Group controlId="loss_damage_elec" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="loss_damage_elec"
        value={loss_damage_elec}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.loss_damage_elec?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Other */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>37.70</p>
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
    <Form.Group controlId="other_electric" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_electric"
        value={other_electric}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_electric?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* ELECTRICAL EQUIPMENT Total */}
    <Row className="mt-3">
    <Col md={1} >
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL ELECTRICAL EQUIPMENT</p>
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
    <Form.Group controlId="electricTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="electricTotal"
        value={electricTotal}
        readOnly
            />
    </Form.Group>
    {errors?.electricTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
  )
}

export default ElectricEqu