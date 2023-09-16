/* Component in the Budget component to edit Construction Material */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const ConstructionMat = (props) => {
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});

  const {postDataConstructionMat,  setPostDataConstructionMat,
    constructionMatTotal, setConstructionMatTotal, setShow,} = props;

  const {rentals_carpentry, carpentry_purchases, painting_rentals,
        painting_purchases, backdrops_murals, construction_other,
        scaffolding, warehouse_rental,} = postDataConstructionMat;

  // handleChange 
  const handleChange = (event) => {
    setPostDataConstructionMat({
    ...postDataConstructionMat,
    [event.target.name]: parseFloat(event.target.value || 0 ),
    });
  };

  // function to add all Construction Material on change
  useEffect(() => {
    const addConmat = () => {
        setConstructionMatTotal(
        parseFloat(rentals_carpentry || 0) +
        parseFloat(carpentry_purchases || 0) +
        parseFloat(painting_rentals || 0) +
        parseFloat(painting_purchases || 0) +
        parseFloat(backdrops_murals || 0) +
        parseFloat(scaffolding || 0) +
        parseFloat(warehouse_rental || 0) +
        parseFloat(construction_other || 0)
       )
    }
    const timer = setTimeout(() => {
        addConmat();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [rentals_carpentry, , carpentry_purchases, painting_rentals,
    painting_purchases, backdrops_murals, scaffolding, 
    warehouse_rental, construction_other]);

  return (
    <div className="mt-5">
    <Row >
    <Col md={1} >
    <p className="mb-2">28.00</p>
    </Col>
    <Col md={9} >
    <p className={ `${styles.BoldBlack} mb-2`}>Construction Material</p>
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
    {/* Carpentry Rentals */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>28.10</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Carpentry Rentals</p>
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
    <Form.Group controlId="rentals_carpentry" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="rentals_carpentry"
        value={rentals_carpentry}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.rentals_carpentry?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Carpentry Purchases */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>28.20</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Carpentry Purchases</p>
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
    <Form.Group controlId="carpentry_purchases" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="carpentry_purchases"
        value={carpentry_purchases}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.carpentry_purchases?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Painting Rentals */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>28.30</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Painting Rentals</p>
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
    <Form.Group controlId="painting_rentals" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="painting_rentals"
        value={painting_rentals}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.painting_rentals?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Painting Purchases */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>28.40</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Painting Purchases</p>
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
    <Form.Group controlId="painting_purchases" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="painting_purchases"
        value={painting_purchases}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.painting_purchases?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Backdrops/Murals */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>28.50</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Backdrops/Murals</p>
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
    <Form.Group controlId="backdrops_murals" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="backdrops_murals"
        value={backdrops_murals}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.backdrops_murals?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Scaffolding */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>28.60</p>
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
    <Form.Group controlId="scaffolding" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="scaffolding"
        value={scaffolding}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.scaffolding?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Warehouse Rental */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>28.70</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Warehouse Rental</p>
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
    <Form.Group controlId="warehouse_rental" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="warehouse_rental"
        value={warehouse_rental}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.warehouse_rental?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Other */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>28.80</p>
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
    <Form.Group controlId="construction_other" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="construction_other"
        value={construction_other}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.construction_other?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* CONSTRUCTION MATERIAL Total */}
    <Row className="mt-3">
    <Col md={1} >
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL CONSTRUCTION MATERIAL</p>
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
    <Form.Group controlId="constructionMatTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="constructionMatTotal"
        value={constructionMatTotal}
        readOnly
            />
    </Form.Group>
    {errors?.constructionMatTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
  )
}

export default ConstructionMat