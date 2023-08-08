/* Component in the Budget component to edit Cast */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const Wrangling = (props) => {
    // eslint-disable-next-line
    const [errors, setErrors] = useState({});

    const {postDataWrangling, setPostDataWrangling,
           headwranglerTotal, setHeadwranglerTotal,
           otherwranglinglabourTotal, setOtherwranglinglabourTotal,
           wranglerlabourTotal, setWranglerlabourTotal,
           setShow} = props;

    const {head_wrangler_quantity, head_wrangler_units_number,
        head_wrangler_units_name, head_wrangler_rate,
        other_wrangling_labour_quantity, other_wrangling_labour_units_number,
        other_wrangling_labour_units_name, other_wrangling_labour_rate,} = postDataWrangling;

    // handleChange 
    const handleChange = (event) => {
        setPostDataWrangling({
        ...postDataWrangling,
        [event.target.name]: parseFloat(event.target.value || 0 ),
        });
    }; 

    // handleChange Text 
    const handleChangeText = (event) => {
        setPostDataWrangling({
        ...postDataWrangling,
        [event.target.name]: event.target.value,
        });
    };

    // Calculate Functions
    // function to calculate head wrangler on change
    useEffect(() => {
        const addWrangl = () => {
        setHeadwranglerTotal(parseFloat(head_wrangler_quantity || 0) * 
        parseFloat(head_wrangler_units_number || 0) * 
        parseFloat(head_wrangler_rate || 0))
        }
        const timer = setTimeout(() => {
            addWrangl();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
    }, [head_wrangler_quantity, head_wrangler_units_number,
        head_wrangler_rate]);

    // function to calculate other wrangling labour on change
    useEffect(() => {
        const addOthwra = () => {
        setOtherwranglinglabourTotal(parseFloat(other_wrangling_labour_quantity || 0) * 
        parseFloat(other_wrangling_labour_units_number || 0) * 
        parseFloat(other_wrangling_labour_rate || 0))
        }
        const timer = setTimeout(() => {
            addOthwra();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
    }, [other_wrangling_labour_quantity, other_wrangling_labour_units_number,
        other_wrangling_labour_rate]);
    
    // function to add all Wrangling Labour on change
    useEffect(() => {
        const addWraLab = () => {
        setWranglerlabourTotal(
        parseFloat(headwranglerTotal || 0) +
        parseFloat(otherwranglinglabourTotal || 0)
        )
        }
        const timer = setTimeout(() => {
            addWraLab();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };

        }, [headwranglerTotal, otherwranglinglabourTotal]);

  return (
    <div className="mt-5">
    <Row >
    <Col md={1} >
    <p className="mb-2">12.00</p>
    </Col>
    <Col md={9} >
    <p className={ `${styles.BoldBlack} mb-2`}>Wrangling Labour</p>
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
    {/* Head Wrangler */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>12.10</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Head Wrangler</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="head_wrangler_quantity" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="head_wrangler_quantity"
        value={head_wrangler_quantity}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.head_wrangler_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="head_wrangler_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="head_wrangler_units_number"
        value={head_wrangler_units_number}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.head_wrangler_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="head_wrangler_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="head_wrangler_units_name"
        value={head_wrangler_units_name}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.head_wrangler_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="head_wrangler_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="head_wrangler_rate"
        value={head_wrangler_rate}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.head_wrangler_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="headwranglerTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="headwranglerTotal"
        value={headwranglerTotal}
        readOnly
            />
    </Form.Group>
    {errors?.headwranglerTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Other Wrangling Labour */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>12.20</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Other Wrangling Labour</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_wrangling_labour_quantity" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_wrangling_labour_quantity"
        value={other_wrangling_labour_quantity}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_wrangling_labour_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_wrangling_labour_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_wrangling_labour_units_number"
        value={other_wrangling_labour_units_number}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_wrangling_labour_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_wrangling_labour_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_wrangling_labour_units_name"
        value={other_wrangling_labour_units_name}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.other_wrangling_labour_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_wrangling_labour_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_wrangling_labour_rate"
        value={other_wrangling_labour_rate}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_wrangling_labour_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="otherwranglinglabourTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="otherwranglinglabourTotal"
        value={otherwranglinglabourTotal}
        readOnly
            />
    </Form.Group>
    {errors?.otherwranglinglabourTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Wrangling Total */}
    <Row className="mt-3">
    <Col md={1} >
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL WRANGLING</p>
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
    <Form.Group controlId="wranglerlabourTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="wranglerlabourTotal"
        value={wranglerlabourTotal}
        readOnly
            />
    </Form.Group>
    {errors?.wranglerlabourTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
  )
}

export default Wrangling