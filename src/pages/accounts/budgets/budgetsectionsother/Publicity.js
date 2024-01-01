/* Component in the Budget component to edit Publicity */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const Publicity = (props) => {
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});

  const {postDataPublicity, setPostDataPublicity,
  pubTotal, setPubTotal, setShow,} = props;

  const {tests_theater_ren, tests_other,
    unit_publicist, pub_press_ex, photography, epk,
    promotion, pr, firnges_pub, other_pub, previews, website,
  } = postDataPublicity;

  // handleChange - replace(/\D/g,'') - works but no decimal
  const handleChange = (event) => {
    setPostDataPublicity({
    ...postDataPublicity,
    [event.target.name]: parseFloat(event.target.value.replace(/\D/g,'') || 0 ),
    });
  };

  // function to add all Publicity on change
  useEffect(() => {
    const addPublic = () => {
        setPubTotal(
        parseFloat(tests_theater_ren || 0) +
        parseFloat(tests_other || 0) +
        parseFloat(unit_publicist || 0) +
        parseFloat(pub_press_ex || 0) +
        parseFloat(photography || 0) +
        parseFloat(epk || 0) +
        parseFloat(promotion || 0) +
        parseFloat(pr || 0) +
        parseFloat(firnges_pub || 0) +
        parseFloat(other_pub || 0) +
        parseFloat(previews || 0) +
        parseFloat(website || 0)
       )
    }
    const timer = setTimeout(() => {
        addPublic();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
   // eslint-disable-next-line
  }, [tests_theater_ren, tests_other,
    unit_publicist, pub_press_ex, photography, epk,
    promotion, pr, firnges_pub, other_pub, previews, website,]);

  return (
    <div className="mt-5">
    <Row >
    <Col md={1} >
    <p className="mb-2">49.00</p>
    </Col>
    <Col md={9} >
    <p className={ `${styles.BoldBlack} mb-2`}>Publicity</p>
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
    {/* Tests/Theatre Rental */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>49.10</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Tests/Theatre Rental</p>
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
    <Form.Group controlId="tests_theater_ren" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tests_theater_ren"
        value={tests_theater_ren}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.tests_theater_ren?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Tests - Other */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>49.20</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Tests - Other</p>
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
    <Form.Group controlId="tests_other" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tests_other"
        value={tests_other}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.tests_other?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Unit Publicist */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>49.30</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Unit Publicist</p>
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
    <Form.Group controlId="unit_publicist" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="unit_publicist"
        value={unit_publicist}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.unit_publicist?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Publicity/Press Expenses */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>49.40</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Publicity/Press Expenses</p>
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
    <Form.Group controlId="pub_press_ex" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="pub_press_ex"
        value={pub_press_ex}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.pub_press_ex?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Photography */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>49.50</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Photography</p>
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
    <Form.Group controlId="photography" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="photography"
        value={photography}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.photography?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Electronic Press Kit EPK */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>49.60</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Electronic Press Kit - EPK</p>
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
    <Form.Group controlId="epk" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="epk"
        value={epk}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.epk?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Advertising/Promotion */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>49.70</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Advertising/Promotion</p>
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
    <Form.Group controlId="promotion" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="promotion"
        value={promotion}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.promotion?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Public Relations */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>49.80</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Public Relations</p>
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
    <Form.Group controlId="pr" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="pr"
        value={pr}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.pr?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Previews */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>49.90</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Previews</p>
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
    <Form.Group controlId="previews" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="previews"
        value={previews}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.previews?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Website */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>49.91</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Website</p>
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
    <Form.Group controlId="website" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="website"
        value={website}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.website?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Fringes & Taxes */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>49.92</p>
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
    <Form.Group controlId="firnges_pub" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="firnges_pub"
        value={firnges_pub}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.firnges_pub?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Other */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>49.93</p>
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
    <Form.Group controlId="other_pub" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_pub"
        value={other_pub}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_pub?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* PUBLICITY Total */}
    <Row className="mt-3">
    <Col md={1} >
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>PUBLICITY TOTAL</p>
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
    <Form.Group controlId="pubTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="pubTotal"
        value={pubTotal}
        readOnly
            />
    </Form.Group>
    {errors?.pubTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
  )
}

export default Publicity