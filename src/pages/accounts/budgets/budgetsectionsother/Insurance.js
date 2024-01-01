/* Component in the Budget component to edit Insurance */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const Insurance = (props) => {
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});

  const {postDataInsurance, setPostDataInsurance,
  insurTotal, setInsurTotal, setShow,} = props;

  const {pro_package, gen_lia, eando, umbrella, 
    union_insurance, other_in,
  } = postDataInsurance;

  // handleChange - replace(/\D/g,'') - works but no decimal
  const handleChange = (event) => {
    setPostDataInsurance({
    ...postDataInsurance,
    [event.target.name]: parseFloat(event.target.value.replace(/\D/g,'') || 0 ),
    });
  };

  // function to add all Insurance on change
  useEffect(() => {
    const addInsur = () => {
        setInsurTotal(
        parseFloat(pro_package || 0) +
        parseFloat(gen_lia || 0) +
        parseFloat(eando || 0) +
        parseFloat(umbrella || 0) +
        parseFloat(union_insurance || 0) +
        parseFloat(other_in || 0)
       )
    }
    const timer = setTimeout(() => {
      addInsur();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
   // eslint-disable-next-line
  }, [pro_package, gen_lia, eando, umbrella, 
    union_insurance, other_in,]);

  return (
    <div className="mt-5">
    <Row >
    <Col md={1} >
    <p className="mb-2">50.00</p>
    </Col>
    <Col md={9} >
    <p className={ `${styles.BoldBlack} mb-2`}>Insurance</p>
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
    {/* Production Package */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>50.10</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Production Package</p>
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
    <Form.Group controlId="pro_package" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="pro_package"
        value={pro_package}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.pro_package?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* General/Public Liability */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>50.20</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>General/Public Liability</p>
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
    <Form.Group controlId="gen_lia" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="gen_lia"
        value={gen_lia}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.gen_lia?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* E & O */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>50.30</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>E & O</p>
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
    <Form.Group controlId="eando" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="eando"
        value={eando}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.eando?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Umbrella */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>50.40</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Umbrella</p>
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
    <Form.Group controlId="umbrella" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="umbrella"
        value={umbrella}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.umbrella?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Union Insurance/Workers Comp */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>50.50</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Union Insurance/Workers Comp</p>
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
    <Form.Group controlId="union_insurance" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="union_insurance"
        value={union_insurance}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.union_insurance?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Equipment/Specialty/Other Insurance */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>50.60</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Equipment/Specialty/Other Insurance</p>
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
    <Form.Group controlId="other_in" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_in"
        value={other_in}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_in?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* INSURANCE Total */}
    <Row className="mt-3">
    <Col md={1} >
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>INSURANCE TOTAL</p>
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
    <Form.Group controlId="insurTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="insurTotal"
        value={insurTotal}
        readOnly
            />
    </Form.Group>
    {errors?.insurTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
  )
}

export default Insurance