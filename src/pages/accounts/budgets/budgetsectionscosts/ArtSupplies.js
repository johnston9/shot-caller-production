/* Component in the Budget component to edit Art Supplies */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const ArtSupplies = (props) => {
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});

  const {postDataArtSup, setPostDataArtSup,
    artSupTotal, setArtSupTotal, setShow} = props;

  const {drawing_supplies, drawing_equipment, tech,
        stock_prints_processing, blueprinting, other_art,
  } = postDataArtSup;
  
  // handleChange - replace(/\D/g,'') - works but no decimal
  const handleChange = (event) => {
    setPostDataArtSup({
    ...postDataArtSup,
    [event.target.name]: parseFloat(event.target.value.replace(/\D/g,'') || 0 ),
    });
  };

  // function to add all Art Supplies on change
  useEffect(() => {
    const addArtsup = () => {
        setArtSupTotal(
        parseFloat(drawing_supplies || 0) +
        parseFloat(drawing_equipment || 0) +
        parseFloat(tech || 0) +
        parseFloat(stock_prints_processing || 0) +
        parseFloat(blueprinting || 0) +
        parseFloat(other_art || 0)
       )
    }
    const timer = setTimeout(() => {
        addArtsup();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [drawing_supplies, drawing_equipment, tech,
    stock_prints_processing, blueprinting, other_art]);

  return (
    <div className={`${styles.WhiteBack} mt-3 mb-5`}>
    <Row className="mx-0" >
    <Col md={12}
        className={ `${styles.Overview} py-0 text-center`}>
            <span className={`${styles.Close } py-1 mb-0 float-right `} 
    onClick={() => setShow(false) } >Close</span>
    <p className="pl-5 py-1">
    ART SUPPLIES SECTION
    </p>
    </Col>
    <Col md={2} >
    </Col>
    </Row>
    <div className="px-2" >
    <Row className={`mt-3`}>
    <Col md={1} >
    <p className={`${styles.Underline}`}>29.00</p>
    </Col>
    <Col md={9} >
    <p className={ `${styles.BoldBlack} mb-1`}>Art Supplies</p>
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
    {/* Drawing Supplies */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} >
    <p className={`${styles.Underline}`}>29.10</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Drawing Supplies</p>
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
    <Form.Group controlId="drawing_supplies" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="drawing_supplies"
        value={drawing_supplies}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.drawing_supplies?.map((message, idx) => (
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
    {/* Drawing Equipment */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} >
    <p className={`${styles.Underline}`}>29.20</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Drawing Equipment</p>
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
    <Form.Group controlId="drawing_equipment" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="drawing_equipment"
        value={drawing_equipment}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.drawing_equipment?.map((message, idx) => (
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
    {/* Tech */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} >
    <p className={`${styles.Underline}`}>29.30</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Tech/Software</p>
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
    <Form.Group controlId="tech" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tech"
        value={tech}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.tech?.map((message, idx) => (
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
    {/* Stock/Prints/Processing */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} >
    <p className={`${styles.Underline}`}>29.40</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Stock/Prints/Processing</p>
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
    <Form.Group controlId="stock_prints_processing" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stock_prints_processing"
        value={stock_prints_processing}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.stock_prints_processing?.map((message, idx) => (
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
    {/* Blueprints */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} >
    <p className={`${styles.Underline}`}>29.50</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Blueprints</p>
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
    <Form.Group controlId="blueprinting" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="blueprinting"
        value={blueprinting}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.blueprinting?.map((message, idx) => (
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
    <p className={`${styles.Underline}`}>29.60</p>
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
    <Form.Group controlId="other_art" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_art"
        value={other_art}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_art?.map((message, idx) => (
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
    {/* ART SUPPLIES Total */}
    <Row className="mt-3 pb-2">
    <Col md={1} >
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL ART SUPPLIES</p>
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
    <Form.Group controlId="artSupTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="artSupTotal"
        value={artSupTotal}
        readOnly
            />
    </Form.Group>
    {errors?.artSupTotal?.map((message, idx) => (
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

export default ArtSupplies