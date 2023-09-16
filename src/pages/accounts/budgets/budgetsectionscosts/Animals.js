/* Component in the Budget component to edit Animals */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const Animals = (props) => {
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});

  const {postDataAnimals, setPostDataAnimals,
    animalsTotal, setAnimalsTotal, setShow} = props;

  const {animals_rentals, animals_purchases, food_stabling,
        transport, vet, customs_broker, other_animals,} = postDataAnimals;

  // handleChange 
  const handleChange = (event) => {
    setPostDataAnimals({
    ...postDataAnimals,
    [event.target.name]: parseFloat(event.target.value || 0 ),
    });
  };

  // function to add all Animals on change
  useEffect(() => {
    const addAnimal = () => {
        setAnimalsTotal(
        parseFloat(animals_rentals || 0) +
        parseFloat(animals_purchases || 0) +
        parseFloat(food_stabling || 0) +
        parseFloat(transport || 0) +
        parseFloat(vet || 0) +
        parseFloat(customs_broker || 0) +
        parseFloat(other_animals || 0)
       )
    }
    const timer = setTimeout(() => {
        addAnimal();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [animals_rentals, animals_purchases, food_stabling,
    transport, vet, customs_broker, other_animals,]);

  return (
    <div className="mt-5">
    <Row >
    <Col md={1} >
    <p className="mb-2">33.00</p>
    </Col>
    <Col md={9} >
    <p className={ `${styles.BoldBlack} mb-2`}>Animals</p>
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
    <p className={`${styles.Underline}`}>33.10</p>
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
    <Form.Group controlId="animals_rentals" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="animals_rentals"
        value={animals_rentals}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.animals_rentals?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Purchases */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>33.20</p>
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
    <Form.Group controlId="animals_purchases" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="animals_purchases"
        value={animals_purchases}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.animals_purchases?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Food/Stabling */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>33.30</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Food/Stabling</p>
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
    <Form.Group controlId="food_stabling" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="food_stabling"
        value={food_stabling}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.food_stabling?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Transport */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>33.40</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Transport</p>
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
    <Form.Group controlId="transport" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="transport"
        value={transport}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.transport?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Veterinary Fees */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>33.50</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Veterinary Fees</p>
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
    <Form.Group controlId="vet" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="vet"
        value={vet}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.vet?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Customs Brokerage */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>33.60</p>
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
    <Form.Group controlId="customs_broker" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="customs_broker"
        value={customs_broker}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.customs_broker?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Other */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>33.70</p>
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
    <Form.Group controlId="other_animals" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_animals"
        value={other_animals}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_animals?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* ANIMALS Total */}
    <Row className="mt-3">
    <Col md={1} >
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL ANIMALS</p>
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
    <Form.Group controlId="animalsTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="animalsTotal"
        value={animalsTotal}
        readOnly
            />
    </Form.Group>
    {errors?.animalsTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
  )
}

export default Animals