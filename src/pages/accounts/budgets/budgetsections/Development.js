/* Component in the Budget component to edit Development */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const Development = (props) => {
    const [errors, setErrors] = useState({});
    const {postDataDevelopment, setPostDataDevelopment,
      developmentTotal, setDevelopmentTotal, setShow} = props;
    // Development postData values
    const {research_development, prelim_budget, consultant_expenses,
    office_expenses, staff, travel_expenses_development,
    living_expenses_development, other_development,
    fringes_taxes_development,} = postDataDevelopment;

    // Development handleChange
    const handleChangeDevelopment = (event) => {
      setPostDataDevelopment({
        ...postDataDevelopment,
        [event.target.name]: parseFloat(event.target.value || 0 ),
      });
    };

    // function to add all development on change
    useEffect(() => {
    const addDevelopment = () => {
      setDevelopmentTotal(
      parseFloat(research_development || 0) +
      parseFloat(prelim_budget || 0) +
      parseFloat(consultant_expenses || 0) +
      parseFloat(office_expenses || 0) +
      parseFloat(staff || 0) +
      parseFloat(travel_expenses_development || 0) +
      parseFloat(living_expenses_development || 0) +
      parseFloat(other_development || 0) +
      parseFloat(fringes_taxes_development || 0)
      )
    }
    const timer = setTimeout(() => {
      addDevelopment();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [research_development, prelim_budget, consultant_expenses,
    office_expenses, staff, travel_expenses_development,
    living_expenses_development, other_development,
    fringes_taxes_development ]);

  return (
    <div className="mt-5">
    <Row >
    <Col md={1} >
    <p className="mb-2">2000</p>
    </Col>
    <Col md={6} >
    <p className={ `${styles.BoldBlack} mb-2`}>PRE-PRODUCTION AND DEVELOPMENT</p>
    </Col>
    </Row>
    {/* TITLES */}
    <Row className={ `${styles.Overview} mb-2 py-1`} >
    <Col md={1} >
    <p className="mb-0">ACCT</p>
    </Col>
    <Col md={6} >
    <p className="mb-0">Description</p>
    </Col>
    <Col md={1} >
    <p className="mb-0">#</p>
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
    {/* Research */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>2010</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Research</p>
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
    <Form.Group controlId="research_development" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="research_development"
        value={research_development}
        onChange={handleChangeDevelopment}
            />
    </Form.Group>
    {errors?.research_development?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Preliminary Breakdown/Budget */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>2020</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Preliminary Breakdown/Budget</p>
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
    <Form.Group controlId="prelim_budget" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="prelim_budget"
        value={prelim_budget}
        onChange={handleChangeDevelopment}
            />
    </Form.Group>
    {errors?.prelim_budget?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Consultant Expenses */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>2030</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Consultant Expenses</p>
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
    <Form.Group controlId="consultant_expenses" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="consultant_expenses"
        value={consultant_expenses}
        onChange={handleChangeDevelopment}
            />
    </Form.Group>
    {errors?.consultant_expenses?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Office Expenses */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>2040</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Office Expenses</p>
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
    <Form.Group controlId="office_expenses" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="office_expenses"
        value={office_expenses}
        onChange={handleChangeDevelopment}
            />
    </Form.Group>
    {errors?.office_expenses?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Staff */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>2050</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Staff</p>
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
    <Form.Group controlId="staff" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="staff"
        value={staff}
        onChange={handleChangeDevelopment}
            />
    </Form.Group>
    {errors?.staff?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Travel Expenses Development */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>2060</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Travel Expenses</p>
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
    <Form.Group controlId="travel_expenses_development" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="travel_expenses_development"
        value={travel_expenses_development}
        onChange={handleChangeDevelopment}
            />
    </Form.Group>
    {errors?.travel_expenses_development?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Living Expenses Development */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>2070</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Living Expenses Development</p>
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
    <Form.Group controlId="living_expenses_development" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="living_expenses_development"
        value={living_expenses_development}
        onChange={handleChangeDevelopment}
            />
    </Form.Group>
    {errors?.living_expenses_development?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Other Development */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>2080</p>
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
    <Form.Group controlId="other_development" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_development"
        value={other_development}
        onChange={handleChangeDevelopment}
            />
    </Form.Group>
    {errors?.other_development?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Fringes and Taxes */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>2090</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Fringes and Taxes</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>%</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="fringes_taxes_development" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="fringes_taxes_development"
        value={fringes_taxes_development}
        onChange={handleChangeDevelopment}
            />
    </Form.Group>
    {errors?.fringes_taxes_development?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Development Total */}
    <Row className="mt-3">
    <Col md={1} >
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL PRE-PRODUCTION AND DEVELOPMENT</p>
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
    <Form.Group controlId="developmentTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="developmentTotal"
        value={developmentTotal}
        readOnly
            />
    </Form.Group>
    {errors?.developmentTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
  )
}

export default Development