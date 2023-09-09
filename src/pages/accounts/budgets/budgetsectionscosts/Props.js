/* Component in the Budget component to edit Props */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const Props = (props) => {
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});

  const {postDataProps, setPostDataProps,
    propsTotal, setPropsTotal, setShow,} = props;

  const{props_rentals, props_purchases, graphics_signs,
        props_repairs_replac, picture_vehicle_rentals, picture_vehicle_purchases,
        picture_vehicle_mods, picture_vehicle_ins, other_props,
  } = postDataProps;

  // handleChange 
  const handleChange = (event) => {
    setPostDataProps({
    ...postDataProps,
    [event.target.name]: parseFloat(event.target.value || 0 ),
    });
  };

  // function to add all Props on change
  useEffect(() => {
    const addProp = () => {
        setPropsTotal(
        parseFloat(props_rentals || 0) +
        parseFloat(props_purchases || 0) +
        parseFloat(graphics_signs || 0) +
        parseFloat(props_repairs_replac || 0) +
        parseFloat(picture_vehicle_rentals || 0) +
        parseFloat(picture_vehicle_purchases || 0) +
        parseFloat(picture_vehicle_mods || 0) +
        parseFloat(picture_vehicle_ins || 0) +
        parseFloat(other_props || 0)
       )
    }
    const timer = setTimeout(() => {
        addProp();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };

  }, [props_rentals, props_purchases, graphics_signs,
    props_repairs_replac, picture_vehicle_rentals, picture_vehicle_purchases,
    picture_vehicle_mods, picture_vehicle_ins, other_props]);

  return (
    <div className="mt-5">
    <Row >
    <Col md={1} >
    <p className="mb-2">31.00</p>
    </Col>
    <Col md={9} >
    <p className={ `${styles.BoldBlack} mb-2`}>Props</p>
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
    <p className={`${styles.Underline}`}>31.10</p>
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
    <Form.Group controlId="props_rentals" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="props_rentals"
        value={props_rentals}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.props_rentals?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Purchases */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>31.20</p>
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
    <Form.Group controlId="props_purchases" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="props_purchases"
        value={props_purchases}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.props_purchases?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Graphics/Signs */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>31.30</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Graphics/Signs</p>
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
    <Form.Group controlId="graphics_signs" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="graphics_signs"
        value={graphics_signs}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.graphics_signs?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Repairs/Replacements */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>31.40</p>
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
    <Form.Group controlId="props_repairs_replac" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="props_repairs_replac"
        value={props_repairs_replac}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.props_repairs_replac?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Picture Vehicle Rentals */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>31.50</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Picture Vehicle Rentals</p>
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
    <Form.Group controlId="picture_vehicle_rentals" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="picture_vehicle_rentals"
        value={picture_vehicle_rentals}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.picture_vehicle_rentals?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Picture Vehicle Purchases */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>31.60</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Picture Vehicle Purchases</p>
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
    <Form.Group controlId="picture_vehicle_purchases" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="picture_vehicle_purchases"
        value={picture_vehicle_purchases}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.picture_vehicle_purchases?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Picture Vehicle Modifications */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>31.70</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Picture Vehicle Modifications</p>
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
    <Form.Group controlId="picture_vehicle_mods" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="picture_vehicle_mods"
        value={picture_vehicle_mods}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.picture_vehicle_mods?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Picture Vehicle Insurance */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>31.80</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Picture Vehicle Insurance</p>
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
    <Form.Group controlId="picture_vehicle_ins" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="picture_vehicle_ins"
        value={picture_vehicle_ins}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.picture_vehicle_ins?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Other */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>31.09</p>
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
    <Form.Group controlId="other_props" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_props"
        value={other_props}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_props?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* PROPS Total */}
    <Row className="mt-3">
    <Col md={1} >
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL PROPS</p>
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
    <Form.Group controlId="propsTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="propsTotal"
        value={propsTotal}
        readOnly
            />
    </Form.Group>
    {errors?.propsTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
  )
}

export default Props