/* Component in the Budget component to edit Set Dressing */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const Dressing = (props) => {
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});

  const {postDataDress, setPostDataDress,
    dressingTotal, setDressingTotal, setShow} = props;

  const {dress_rentals, dress_purchases, dress_manufacture,
        dress_repairs_replacements, other_dressing,
  } = postDataDress;

  // handleChange 
  const handleChange = (event) => {
    setPostDataDress({
    ...postDataDress,
    [event.target.name]: parseFloat(event.target.value || 0 ),
    });
  };

  // function to add all Set Dressing on change
  useEffect(() => {
    const addDres = () => {
        setDressingTotal(
        parseFloat(dress_rentals || 0) +
        parseFloat(dress_purchases || 0) +
        parseFloat(dress_manufacture || 0) +
        parseFloat(dress_repairs_replacements || 0) +
        parseFloat(other_dressing || 0)
       )
    }
    const timer = setTimeout(() => {
        addDres();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };

  }, [dress_rentals, dress_purchases, dress_manufacture,
    dress_repairs_replacements, other_dressing,]);

  return (
    <div className="mt-5">
    <Row >
    <Col md={1} >
    <p className="mb-2">30.00</p>
    </Col>
    <Col md={9} >
    <p className={ `${styles.BoldBlack} mb-2`}>Set Dressing</p>
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
    <p className={`${styles.Underline}`}>30.10</p>
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
    <Form.Group controlId="dress_rentals" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dress_rentals"
        value={dress_rentals}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.dress_rentals?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Purchases */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>30.20</p>
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
    <Form.Group controlId="dress_purchases" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dress_purchases"
        value={dress_purchases}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.dress_purchases?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Manufacture */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>30.30</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Manufacture</p>
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
    <Form.Group controlId="dress_manufacture" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dress_manufacture"
        value={dress_manufacture}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.dress_manufacture?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Repairs/Replacements */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>30.40</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Repairs/Replacements</p>
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
    <Form.Group controlId="dress_repairs_replacements" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dress_repairs_replacements"
        value={dress_repairs_replacements}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.dress_repairs_replacements?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Other */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>30.50</p>
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
    <Form.Group controlId="other_dressing" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_dressing"
        value={other_dressing}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_dressing?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* SET DRESSING Total */}
    <Row className="mt-3">
    <Col md={1} >
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL SET DRESSING</p>
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
    <Form.Group controlId="dressingTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dressingTotal"
        value={dressingTotal}
        readOnly
            />
    </Form.Group>
    {errors?.dressingTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
  )
}

export default Dressing