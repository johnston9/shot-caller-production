/* Component in the Budget component to edit Indirect Costs */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const IndirectCosts = (props) => {
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});

  const {postDataIndirectCo, setPostDataIndirectCo,
  indirCoTotal, setIndirCoTotal, setShow,} = props;

  const {corporate_overhead, interim_financing, fiscal_sponsor_fee,
  } = postDataIndirectCo;

  // handleChange - replace(/\D/g,'') - works but no decimal
  const handleChange = (event) => {
    setPostDataIndirectCo({
    ...postDataIndirectCo,
    [event.target.name]: parseFloat(event.target.value.replace(/\D/g,'') || 0 ),
    });
  };

  // function to add all Indirect Costs on change
  useEffect(() => {
    const addIndirco = () => {
        setIndirCoTotal(
        parseFloat(corporate_overhead || 0) +
        parseFloat(interim_financing || 0) +
        parseFloat(fiscal_sponsor_fee || 0)
       )
    }
    const timer = setTimeout(() => {
        addIndirco();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
   // eslint-disable-next-line
  }, [corporate_overhead, interim_financing, fiscal_sponsor_fee,]);

  return (
    <div className="mt-5">
    <Row >
    <Col md={1} >
    <p className="mb-2">52.00</p>
    </Col>
    <Col md={9} >
    <p className={ `${styles.BoldBlack} mb-2`}>Indirect Costs</p>
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
    {/* Corporate Overhead */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>52.10</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Corporate Overhead</p>
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
    <Form.Group controlId="corporate_overhead" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="corporate_overhead"
        value={corporate_overhead}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.corporate_overhead?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Interim Financing */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>52.20</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Interim Financing</p>
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
    <Form.Group controlId="interim_financing" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="interim_financing"
        value={interim_financing}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.interim_financing?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Fiscal Sponsor Fee/Other */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>52.30</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Fiscal Sponsor Fee/Other</p>
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
    <Form.Group controlId="fiscal_sponsor_fee" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="fiscal_sponsor_fee"
        value={fiscal_sponsor_fee}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.fiscal_sponsor_fee?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* INDIRECT COSTS Total */}
    <Row className="mt-3">
    <Col md={1} >
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>INDIRECT COSTS TOTAL</p>
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
    <Form.Group controlId="indirCoTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="indirCoTotal"
        value={indirCoTotal}
        readOnly
            />
    </Form.Group>
    {errors?.indirCoTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
  )
}

export default IndirectCosts