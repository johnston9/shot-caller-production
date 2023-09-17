/* Component in the Budget component to edit Second Unit Equ */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const SecondU = (props) => {
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});

  const {postDataSecondU, setPostDataSecondU,
  secondUTotal, setSecondUTotal, setShow,} = props;

  const {crew_2U, equipment_2U, travliv_2U, transport_2U,
    mat_sup_2U, aerial_unit, marine_unit, fringes_taxes_2U, other_2U,
  } = postDataSecondU;

  // handleChange 
  const handleChange = (event) => {
    setPostDataSecondU({
    ...postDataSecondU,
    [event.target.name]: parseFloat(event.target.value || 0 ),
    });
  };

  // function to add all Second Unit on change
  useEffect(() => {
    const addSecond = () => {
        setSecondUTotal(
        parseFloat(crew_2U || 0) +
        parseFloat(equipment_2U || 0) +
        parseFloat(travliv_2U || 0) +
        parseFloat(transport_2U || 0) +
        parseFloat(mat_sup_2U || 0) +
        parseFloat(aerial_unit || 0) +
        parseFloat(marine_unit || 0) +
        parseFloat(fringes_taxes_2U || 0) +
        parseFloat(other_2U || 0)
       )
    }
    const timer = setTimeout(() => {
        addSecond();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
   // eslint-disable-next-line
  }, [crew_2U, equipment_2U, travliv_2U, transport_2U,
    mat_sup_2U, aerial_unit, marine_unit, fringes_taxes_2U, other_2U,]);

  return (
    <div className="mt-5">
    <Row >
    <Col md={1} >
    <p className="mb-2">40.00</p>
    </Col>
    <Col md={9} >
    <p className={ `${styles.BoldBlack} mb-2`}>Second Unit</p>
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
    {/* Crew */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>40.10</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Crew</p>
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
    <Form.Group controlId="crew_2U" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="crew_2U"
        value={crew_2U}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.crew_2U?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Equipment */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>40.20</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Equipment</p>
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
    <Form.Group controlId="equipment_2U" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="equipment_2U"
        value={equipment_2U}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.equipment_2U?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Travel & Living */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>40.30</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Travel & Living</p>
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
    <Form.Group controlId="travliv_2U" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="travliv_2U"
        value={travliv_2U}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.travliv_2U?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Transport */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>40.40</p>
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
    <Form.Group controlId="transport_2U" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="transport_2U"
        value={transport_2U}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.transport_2U?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Materials/Supplies */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>40.50</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Materials/Supplies</p>
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
    <Form.Group controlId="mat_sup_2U" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="mat_sup_2U"
        value={mat_sup_2U}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.mat_sup_2U?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Aerial Unit */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>40.60</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Aerial Unit</p>
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
    <Form.Group controlId="aerial_unit" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="aerial_unit"
        value={aerial_unit}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.aerial_unit?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Marine Unit */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>40.70</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Marine Unit</p>
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
    <Form.Group controlId="marine_unit" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="marine_unit"
        value={marine_unit}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.marine_unit?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Fringes & Taxes */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>40.80</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Fringes & Taxes</p>
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
    <Form.Group controlId="fringes_taxes_2U" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="fringes_taxes_2U"
        value={fringes_taxes_2U}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.fringes_taxes_2U?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Other */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>40.90</p>
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
    <Form.Group controlId="other_2U" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_2U"
        value={other_2U}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_2U?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* SECOND UNIT Total */}
    <Row className="mt-3">
    <Col md={1} >
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL SECOND UNIT</p>
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
    <Form.Group controlId="secondUTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="secondUTotal"
        value={secondUTotal}
        readOnly
            />
    </Form.Group>
    {errors?.secondUTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
  )
}

export default SecondU