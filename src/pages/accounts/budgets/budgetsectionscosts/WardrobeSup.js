/* Component in the Budget component to edit Wardrobe Supplies */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const WardrobeSup = (props) => {
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});

  const {postDataWardrobeSup, setPostDataWardrobeSup,
    wardrobeTotal, setWardrobeTotal, setShow,} = props;

  const {wardrobe_rentals, wardrobe_purchases, ward_manufact,
        ward_ship_brok, ward_repairs_clean, other_ward,
  } = postDataWardrobeSup;

  // handleChange - replace(/\D/g,'') - works but no decimal
  const handleChange = (event) => {
    setPostDataWardrobeSup({
    ...postDataWardrobeSup,
    [event.target.name]: parseFloat(event.target.value.replace(/\D/g,'') || 0 ),
    });
  };

  // function to add all Wardrobe sup on change
  useEffect(() => {
    const addWardSup = () => {
        setWardrobeTotal(
        parseFloat(wardrobe_rentals || 0) +
        parseFloat(wardrobe_purchases || 0) +
        parseFloat(ward_manufact || 0) +
        parseFloat(ward_ship_brok || 0) +
        parseFloat(ward_repairs_clean || 0) +
        parseFloat(other_ward || 0)
       )
    }
    const timer = setTimeout(() => {
        addWardSup();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
   // eslint-disable-next-line
  }, [wardrobe_rentals, wardrobe_purchases, ward_manufact,
    ward_ship_brok, ward_repairs_clean, other_ward,]);

  return (
    <div className={`${styles.WhiteBack} mt-3 mb-5`}>
    <Row className="mx-0" >
    <Col md={12}
        className={ `${styles.Overview} py-0 text-center`}>
            <span className={`${styles.Close } py-1 mb-0 float-right `} 
    onClick={() => setShow(false) } >Close</span>
    <p className="pl-5 py-1">
    WARDROBE SUPPLIES SECTION
    </p>
    </Col>
    <Col md={2} >
    </Col>
    </Row>
    <div className="px-2" >
    <Row className={`mt-3`}>
    <Col md={1} >
    <p className={`${styles.Underline}`}>34.00</p>
    </Col>
    <Col md={9} >
    <p className={ `${styles.BoldBlack} mb-1`}>Wardrobe Supplies</p>
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
    {/* Rentals */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} >
    <p className={`${styles.Underline}`}>34.10</p>
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
    <Form.Group controlId="wardrobe_rentals" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="wardrobe_rentals"
        value={wardrobe_rentals}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.wardrobe_rentals?.map((message, idx) => (
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
    {/* Purchases */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} >
    <p className={`${styles.Underline}`}>34.20</p>
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
    <Form.Group controlId="wardrobe_purchases" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="wardrobe_purchases"
        value={wardrobe_purchases}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.wardrobe_purchases?.map((message, idx) => (
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
    {/* Manufacture */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} >
    <p className={`${styles.Underline}`}>34.30</p>
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
    <Form.Group controlId="ward_manufact" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ward_manufact"
        value={ward_manufact}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.ward_manufact?.map((message, idx) => (
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
    {/* Shipping/Brokerage */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} >
    <p className={`${styles.Underline}`}>34.40</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Shipping/Brokerage</p>
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
    <Form.Group controlId="ward_ship_brok" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ward_ship_brok"
        value={ward_ship_brok}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.ward_ship_brok?.map((message, idx) => (
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
    {/* Repairs/Cleaning */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} >
    <p className={`${styles.Underline}`}>34.50</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Repairs/Cleaning</p>
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
    <Form.Group controlId="ward_repairs_clean" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ward_repairs_clean"
        value={ward_repairs_clean}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.ward_repairs_clean?.map((message, idx) => (
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
    {/* Other */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} >
    <p className={`${styles.Underline}`}>34.60</p>
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
    <Form.Group controlId="other_ward" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_ward"
        value={other_ward}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_ward?.map((message, idx) => (
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
    {/* WARDROBE SUPPLIES Total */}
    <Row className="mt-3 pb-2">
    <Col md={1} >
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL WARDROBE SUPPLIES</p>
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
    <Form.Group controlId="wardrobeTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="wardrobeTotal"
        value={wardrobeTotal}
        readOnly
            />
    </Form.Group>
    {errors?.wardrobeTotal?.map((message, idx) => (
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

export default WardrobeSup