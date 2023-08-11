/* Component in the Budget component to edit FX */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const SpecialEffects = (props) => {
    // eslint-disable-next-line
    const [errors, setErrors] = useState({});

    const {postDataSpecialEffects, setPostDataSpecialEffects,
        fxsupervisorTotal, setFxsupervisorTotal,
        assistfxTotal, setAssistfxTotal,
        otherfxlabourTotal, setOtherfxlabourTotal,
        fxlabourTotal, setFxlabourTotal, setShow} = props;
    
    const {fx_supervisor_quantity, fx_supervisor_units_number,
        fx_supervisor_units_name, fx_supervisor_rate,
        assist_fx_quantity, assist_fx_units_number,
        assist_fx_units_name, assist_fx_rate,
        other_fx_labour_quantity, other_fx_labour_units_number,
        other_fx_labour_units_name, other_fx_labour_rate,
        } = postDataSpecialEffects;
    
    // handleChange 
    const handleChange = (event) => {
        setPostDataSpecialEffects({
        ...postDataSpecialEffects,
        [event.target.name]: parseFloat(event.target.value || 0 ),
        });
    }; 

    // handleChange Text 
    const handleChangeText = (event) => {
        setPostDataSpecialEffects({
        ...postDataSpecialEffects,
        [event.target.name]: event.target.value,
        });
    };

    // Calculate Functions
    // function to calculate fx supervisor on change
    useEffect(() => {
        const addSpeeff = () => {
        setFxsupervisorTotal(parseFloat(fx_supervisor_quantity || 0) * 
        parseFloat(fx_supervisor_units_number || 0) * 
        parseFloat(fx_supervisor_rate || 0))
        }
        const timer = setTimeout(() => {
            addSpeeff();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
    }, [fx_supervisor_quantity, fx_supervisor_units_number,
        fx_supervisor_rate]);
    
    // function to calculate assistant fx on change
    useEffect(() => {
        const addAssfx = () => {
        setAssistfxTotal(parseFloat(assist_fx_quantity || 0) * 
        parseFloat(assist_fx_units_number || 0) * 
        parseFloat(assist_fx_rate || 0))
        }
        const timer = setTimeout(() => {
            addAssfx();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
    }, [assist_fx_quantity, assist_fx_units_number,
        assist_fx_rate]);
    
    // function to calculate other fx labour on change
    useEffect(() => {
        const addOthfx = () => {
        setOtherfxlabourTotal(parseFloat(other_fx_labour_quantity || 0) * 
        parseFloat(other_fx_labour_units_number || 0) * 
        parseFloat(other_fx_labour_rate || 0))
        }
        const timer = setTimeout(() => {
            addOthfx();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
    }, [other_fx_labour_quantity, other_fx_labour_units_number,
        other_fx_labour_rate]);

    // function to add all FX Labour on change
    useEffect(() => {
        const addFxlab = () => {
        setFxlabourTotal(
        parseFloat(fxsupervisorTotal || 0) +
        parseFloat(assistfxTotal || 0) +
        parseFloat(otherfxlabourTotal || 0)
        )
        }
        const timer = setTimeout(() => {
            addFxlab();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };

        }, [fxsupervisorTotal, assistfxTotal, 
            otherfxlabourTotal]);

  return (
    <div className="mt-5">
    <Row >
    <Col md={1} >
    <p className="mb-2">13.00</p>
    </Col>
    <Col md={9} >
    <p className={ `${styles.BoldBlack} mb-2`}>FX Labour</p>
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
    {/* FX Supervisor */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>13.10</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>FX Supervisor</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="fx_supervisor_quantity" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="fx_supervisor_quantity"
        value={fx_supervisor_quantity}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.fx_supervisor_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="fx_supervisor_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="fx_supervisor_units_number"
        value={fx_supervisor_units_number}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.fx_supervisor_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="fx_supervisor_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="fx_supervisor_units_name"
        value={fx_supervisor_units_name}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.fx_supervisor_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="fx_supervisor_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="fx_supervisor_rate"
        value={fx_supervisor_rate}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.fx_supervisor_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="fxsupervisorTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="fxsupervisorTotal"
        value={fxsupervisorTotal}
        readOnly
            />
    </Form.Group>
    {errors?.fxsupervisorTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* FX Assistant */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>13.20</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>FX Assistant</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="assist_fx_quantity" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assist_fx_quantity"
        value={assist_fx_quantity}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.assist_fx_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="assist_fx_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assist_fx_units_number"
        value={assist_fx_units_number}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.assist_fx_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="assist_fx_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assist_fx_units_name"
        value={assist_fx_units_name}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.assist_fx_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="assist_fx_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assist_fx_rate"
        value={assist_fx_rate}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.assist_fx_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="assistfxTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assistfxTotal"
        value={assistfxTotal}
        readOnly
            />
    </Form.Group>
    {errors?.assistfxTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Other FX Labour */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>13.30</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Other FX Labour</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_fx_labour_quantity" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_fx_labour_quantity"
        value={other_fx_labour_quantity}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_fx_labour_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_fx_labour_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_fx_labour_units_number"
        value={other_fx_labour_units_number}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_fx_labour_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_fx_labour_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_fx_labour_units_name"
        value={other_fx_labour_units_name}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.other_fx_labour_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_fx_labour_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_fx_labour_rate"
        value={other_fx_labour_rate}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_fx_labour_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="otherfxlabourTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="otherfxlabourTotal"
        value={otherfxlabourTotal}
        readOnly
            />
    </Form.Group>
    {errors?.otherfxlabourTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* FX Total */}
    <Row className="mt-3">
    <Col md={1} >
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL FX</p>
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
    <Form.Group controlId="fxlabourTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="fxlabourTotal"
        value={fxlabourTotal}
        readOnly
            />
    </Form.Group>
    {errors?.fxlabourTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
  )
}

export default SpecialEffects