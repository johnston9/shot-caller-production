/* Component in the Budget component to edit Electrical */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const Electric = (props) => {
    // eslint-disable-next-line
    const [errors, setErrors] = useState({});

    const {postDataElectric, setPostDataElectric,
        gafferTotal, setGafferTotal,
        bestboyTotal, setBestboyTotal,
        electricianTotal, setElectricianTotal,
        dailieselecTotal, setDailieselecTotal,
        generatoropTotal, setGeneratoropTotal,
        otherelectricTotal, setOtherelectricTotal, setShow,
        electriclabourTotal, setElectriclabourTotal,} = props;
    
    const {gaffer_qty, gaffer_uno, gaffer_una, gaffer_rt,
        best_boy_qty, best_boy_uno, best_boy_una, best_boy_rt,
        electrician_qty, electrician_uno, electrician_una, electrician_rt,
        dailies_elec_qty, dailies_elec_uno, dailies_elec_una, dailies_elec_rt,
        generator_op_qty, generator_op_uno, generator_op_una, generator_op_rt,
        other_elec_qty, other_elec_uno, other_elec_una, other_elec_rt,
        fringes_taxes_electric,} = postDataElectric;

    // handleChange 
    const handleChange = (event) => {
        setPostDataElectric({
        ...postDataElectric,
        [event.target.name]: parseFloat(event.target.value || 0 ),
        });
    }; 
  
    // handleChange Text 
    const handleChangeText = (event) => {
    setPostDataElectric({
    ...postDataElectric,
    [event.target.name]: event.target.value,
    });
    };

    // Calculate Functions
    // function to calculate gaffer on change
    useEffect(() => {
        const addGaffer = () => {
        setGafferTotal(parseFloat(gaffer_qty || 0) * 
        parseFloat(gaffer_uno || 0) * 
        parseFloat(gaffer_rt || 0))
        }
        const timer = setTimeout(() => {
            addGaffer();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
      }, [gaffer_qty, gaffer_uno, gaffer_rt]);

    // function to calculate best boy on change
    useEffect(() => {
        const addBesboy = () => {
        setBestboyTotal(parseFloat(best_boy_qty || 0) * 
        parseFloat(best_boy_uno || 0) * 
        parseFloat(best_boy_rt || 0))
        }
        const timer = setTimeout(() => {
            addBesboy();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
      }, [best_boy_qty, best_boy_uno, best_boy_rt]);

    // function to calculate electrician on change
    useEffect(() => {
        const addElectr = () => {
        setElectricianTotal(parseFloat(electrician_qty || 0) * 
        parseFloat(electrician_uno || 0) * 
        parseFloat(electrician_rt || 0))
        }
        const timer = setTimeout(() => {
            addElectr();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
      }, [electrician_qty, electrician_uno, electrician_rt]);

    // function to calculate dailies on change
    useEffect(() => {
        const addDaiele = () => {
        setDailieselecTotal(parseFloat(dailies_elec_qty || 0) * 
        parseFloat(dailies_elec_uno || 0) * 
        parseFloat(dailies_elec_rt || 0))
        }
        const timer = setTimeout(() => {
            addDaiele();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
      }, [dailies_elec_qty, dailies_elec_uno, dailies_elec_rt]);

    // function to calculate generator operator on change
    useEffect(() => {
        const addGerope = () => {
        setGeneratoropTotal(parseFloat(generator_op_qty || 0) * 
        parseFloat(generator_op_uno || 0) * 
        parseFloat(generator_op_rt || 0))
        }
        const timer = setTimeout(() => {
            addGerope();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
      }, [generator_op_qty, generator_op_uno, generator_op_rt]);

    // function to calculate other elec on change
    useEffect(() => {
        const addOthele = () => {
        setOtherelectricTotal(parseFloat(other_elec_qty || 0) * 
        parseFloat(other_elec_uno || 0) * 
        parseFloat(other_elec_rt || 0))
        }
        const timer = setTimeout(() => {
            addOthele();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
      }, [other_elec_qty, other_elec_uno, other_elec_rt]);

    // function to add all Electric Labour on change
    useEffect(() => {
        const AddEleLab = () => {
        setElectriclabourTotal(
        parseFloat(gafferTotal || 0) +
        parseFloat(bestboyTotal || 0) +
        parseFloat(electricianTotal || 0) +
        parseFloat(dailieselecTotal || 0) +
        parseFloat(generatoropTotal || 0) +
        parseFloat(fringes_taxes_electric || 0) +
        parseFloat(otherelectricTotal || 0) 
        )
        }
        const timer = setTimeout(() => {
            AddEleLab();
        }, 1000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
        }, [gafferTotal, bestboyTotal, electricianTotal,
            dailieselecTotal, generatoropTotal, otherelectricTotal,
            fringes_taxes_electric,]);


  return (
    <div className="mt-5">
    <Row >
    <Col md={1} >
    <p className="mb-2">17.00</p>
    </Col>
    <Col md={9} >
    <p className={ `${styles.BoldBlack} mb-2`}>Electrical Labour</p>
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
    {/* Gaffer */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>17.10</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Gaffer</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="gaffer_qty" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="gaffer_qty"
        value={gaffer_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.gaffer_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="gaffer_uno" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="gaffer_uno"
        value={gaffer_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.gaffer_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="gaffer_una" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="gaffer_una"
        value={gaffer_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.gaffer_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="gaffer_rt" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="gaffer_rt"
        value={gaffer_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.gaffer_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="gafferTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="gafferTotal"
        value={gafferTotal}
        readOnly
            />
    </Form.Group>
    {errors?.gafferTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Best Boy */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>17.20</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Best Boy</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="best_boy_qty" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="best_boy_qty"
        value={best_boy_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.best_boy_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="best_boy_uno" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="best_boy_uno"
        value={best_boy_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.best_boy_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="best_boy_una" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="best_boy_una"
        value={best_boy_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.best_boy_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="best_boy_rt" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="best_boy_rt"
        value={best_boy_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.best_boy_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="bestboyTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="bestboyTotal"
        value={bestboyTotal}
        readOnly
            />
    </Form.Group>
    {errors?.bestboyTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Electrician */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>17.30</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Electricians</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="electrician_qty" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="electrician_qty"
        value={electrician_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.electrician_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="electrician_uno" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="electrician_uno"
        value={electrician_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.electrician_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="electrician_una" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="electrician_una"
        value={electrician_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.electrician_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="electrician_rt" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="electrician_rt"
        value={electrician_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.electrician_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="electricianTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="electricianTotal"
        value={electricianTotal}
        readOnly
            />
    </Form.Group>
    {errors?.electricianTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Dailies Electric */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>17.40</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Dailies Electrical</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="dailies_elec_qty" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dailies_elec_qty"
        value={dailies_elec_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.dailies_elec_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="dailies_elec_uno" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dailies_elec_uno"
        value={dailies_elec_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.dailies_elec_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="dailies_elec_una" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dailies_elec_una"
        value={dailies_elec_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.dailies_elec_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="dailies_elec_rt" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dailies_elec_rt"
        value={dailies_elec_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.dailies_elec_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="dailieselecTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dailieselecTotal"
        value={dailieselecTotal}
        readOnly
            />
    </Form.Group>
    {errors?.dailieselecTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Generator Operator */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>17.50</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Generator Operator</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="generator_op_qty" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="generator_op_qty"
        value={generator_op_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.generator_op_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="generator_op_uno" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="generator_op_uno"
        value={generator_op_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.generator_op_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="generator_op_una" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="generator_op_una"
        value={generator_op_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.generator_op_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="generator_op_rt" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="generator_op_rt"
        value={generator_op_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.generator_op_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="generatoropTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="generatoropTotal"
        value={generatoropTotal}
        readOnly
            />
    </Form.Group>
    {errors?.generatoropTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Other Electrical */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>17.60</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Other - Electrical</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_elec_qty" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_elec_qty"
        value={other_elec_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_elec_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_elec_uno" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_elec_uno"
        value={other_elec_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_elec_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_elec_una" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_elec_una"
        value={other_elec_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.other_elec_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_elec_rt" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_elec_rt"
        value={other_elec_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_elec_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="otherelectricTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="otherelectricTotal"
        value={otherelectricTotal}
        readOnly
            />
    </Form.Group>
    {errors?.otherelectricTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Fringes and Taxes */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>17.70</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Fringes and Taxes</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} className="text-center" >
    <p className={`${styles.Underline}`}>%</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="fringes_taxes_electric" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="fringes_taxes_electric"
        value={fringes_taxes_electric}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.fringes_taxes_electric?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Electric Total */}
    <Row className="mt-3">
    <Col md={1} >
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>ELECTRICAL TOTAL</p>
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
    <Form.Group controlId="electriclabourTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="electriclabourTotal"
        value={electriclabourTotal}
        readOnly
            />
    </Form.Group>
    {errors?.electriclabourTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
  )
}

export default Electric