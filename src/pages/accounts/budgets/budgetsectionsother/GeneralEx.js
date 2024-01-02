/* Component in the Budget component to edit General Expenses */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const GeneralEx = (props) => {
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});

  const {postDataGeneralEx, setPostDataGeneralEx,
  genExTotal, setGenExTotal, setShow,} = props;

  const {legal, medical, licences, payroll, bank_charges, audit,
  } = postDataGeneralEx;

  // handleChange - replace(/\D/g,'') - works but no decimal
  const handleChange = (event) => {
    setPostDataGeneralEx({
    ...postDataGeneralEx,
    [event.target.name]: parseFloat(event.target.value.replace(/\D/g,'') || 0 ),
    });
  };

  // function to add all General Expenses on change
  useEffect(() => {
    const addGenerex = () => {
        setGenExTotal(
        parseFloat(legal || 0) +
        parseFloat(medical || 0) +
        parseFloat(licences || 0) +
        parseFloat(payroll || 0) +
        parseFloat(bank_charges || 0) +
        parseFloat(audit || 0)
       )
    }
    const timer = setTimeout(() => {
        addGenerex();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
   // eslint-disable-next-line
  }, [legal, medical, licences, payroll, bank_charges, audit,]);

  return (
    <div className={`${styles.WhiteBack} mt-3 mb-5`}>
    <Row className="mx-0" >
    <Col md={12}
        className={ `${styles.Overview} py-0 text-center`}>
            <span className={`${styles.Close } py-1 mb-0 float-right `} 
    onClick={() => setShow(false) } >Close</span>
    <p className="pl-5 py-1">
    GENERAL EXPENSES SECTION
    </p>
    </Col>
    <Col md={2} >
    </Col>
    </Row>
    <div className="px-2" >
    <Row className={`mt-3`}>
    <Col md={1} >
    <p className={`${styles.Underline}`}>51.00</p>
    </Col>
    <Col md={9} >
    <p className={ `${styles.BoldBlack} mb-1`}>General Expenses</p>
    </Col>
    <Col md={2}>
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
    <Col md={1} className="text-center" >
    <p className="mb-0">#</p>
    </Col>
    <Col className="text-center" md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} className="text-center" >
    <p className="mb-0">Unit</p>
    </Col>
    <Col md={1} className="text-center" >
    <p className="mb-0">Price</p>
    </Col>
    <Col md={2} className="text-center" >
    <p className="mb-0">Total</p>
    </Col>
    </Row>
    {/* Legal */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} >
    <p className={`${styles.Underline}`}>51.10</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Legal</p>
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
    <Form.Group controlId="legal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="legal"
        value={legal}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.legal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break3} mb-0 mt-0`}/>
    </Col>
    </Row>
    {/* Medical */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} >
    <p className={`${styles.Underline}`}>51.20</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Medical</p>
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
    <Form.Group controlId="medical" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="medical"
        value={medical}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.medical?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break3} mb-0 mt-0`}/>
    </Col>
    </Row>
    {/* Licences */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} >
    <p className={`${styles.Underline}`}>51.30</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Licences</p>
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
    <Form.Group controlId="licences" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="licences"
        value={licences}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.licences?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break3} mb-0 mt-0`}/>
    </Col>
    </Row>
    {/* Payroll */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} >
    <p className={`${styles.Underline}`}>51.40</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Payroll</p>
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
    <Form.Group controlId="payroll" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="payroll"
        value={payroll}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.payroll?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break3} mb-0 mt-0`}/>
    </Col>
    </Row>
    {/* Bank Charges */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} >
    <p className={`${styles.Underline}`}>51.50</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Bank Charges</p>
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
    <Form.Group controlId="bank_charges" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="bank_charges"
        value={bank_charges}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.bank_charges?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break3} mb-0 mt-0`}/>
    </Col>
    </Row>
    {/* Audit/Other */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} >
    <p className={`${styles.Underline}`}>51.60</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Audit/Other</p>
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
    <Form.Group controlId="audit" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="audit"
        value={audit}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.audit?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break3} mb-0 mt-0`}/>
    </Col>
    </Row>
    {/* GENERAL EXPENSES Total */}
    <Row className="mt-3 pb-2">
    <Col md={1} >
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>GENERAL EXPENSES TOTAL</p>
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
    <Form.Group controlId="genExTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="genExTotal"
        value={genExTotal}
        readOnly
            />
    </Form.Group>
    {errors?.genExTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break3} mb-0 mt-0`}/>
    </Col>
    </Row>
    </div>
    </div>
  )
}

export default GeneralEx