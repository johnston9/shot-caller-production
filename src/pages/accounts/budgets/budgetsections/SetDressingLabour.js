/* Component in the Budget component to edit Set Dressing */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const SetDressingLabour = (props) => {
    // eslint-disable-next-line
    const [errors, setErrors] = useState({});

    // Set Dressing Labour postdata
    const {postDataSetDressing, setPostDataSetDressing,
        decoratorsetTotal, setDecoratorsetTotal,
        assistdecoratorsetTotal, setAssistdecoratorsetTotal,
        leadmanTotal, setLeadmanTotal,
        dressersTotal, setDressersTotal,
        swinggangTotal, setSwinggangTotal,
        dressingbuyerTotal, setDressingbuyerTotal,
        dressinglabourTotal, setDressinglabourTotal,
        setShow} = props;

    // Set Dressing Labour values
    const {fringes_taxes_dressing,
        set_decorator_quantity, set_decorator_units_number,
        set_decorator_units_name, set_decorator_rate,
        assist_set_decorator_quantity, assist_set_decorator_units_number,
        assist_set_decorator_units_name, assist_set_decorator_rate,
        lead_man_quantity, lead_man_units_number,
        lead_man_units_name, lead_man_rate,
        set_dressers_quantity, set_dressers_units_number,
        set_dressers_units_name, set_dressers_rate,
        swing_gang_quantity, swing_gang_units_number,
        swing_gang_units_name, swing_gang_rate,
        set_dressing_buyer_quantity, set_dressing_buyer_units_number,
        set_dressing_buyer_units_name, set_dressing_buyer_rate, 
        other_set_dressing,
    } = postDataSetDressing;

    // handleChange 
    const handleChange = (event) => {
        setPostDataSetDressing({
        ...postDataSetDressing,
        [event.target.name]: parseFloat(event.target.value || 0 ),
        });
    }; 

    // handleChange Text 
    const handleChangeText = (event) => {
        setPostDataSetDressing({
        ...postDataSetDressing,
        [event.target.name]: event.target.value,
        });
    };

    // Calculate Functions
    // function to calculate set decorator on change
    useEffect(() => {
        const addSetdec = () => {
        setDecoratorsetTotal(parseFloat(set_decorator_quantity || 0) * 
        parseFloat(set_decorator_units_number || 0) * 
        parseFloat(set_decorator_rate || 0))
        }
        const timer = setTimeout(() => {
            addSetdec();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [set_decorator_quantity, set_decorator_units_number,
        set_decorator_rate]);

    // function to calculate assistant set decorator on change
    useEffect(() => {
        const addAssdec = () => {
        setAssistdecoratorsetTotal(parseFloat(assist_set_decorator_quantity || 0) * 
        parseFloat(assist_set_decorator_units_number || 0) * 
        parseFloat(assist_set_decorator_rate || 0))
        }
        const timer = setTimeout(() => {
            addAssdec();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [assist_set_decorator_quantity, assist_set_decorator_units_number,
        assist_set_decorator_rate]);

    // function to calculate lead man on change
    useEffect(() => {
        const addLeaman = () => {
        setLeadmanTotal(parseFloat(lead_man_quantity || 0) * 
        parseFloat(lead_man_units_number || 0) * 
        parseFloat(lead_man_rate || 0))
        }
        const timer = setTimeout(() => {
            addLeaman();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [lead_man_quantity, lead_man_units_number,
        lead_man_rate]);

    // function to calculate set dressers on change
    useEffect(() => {
        const addDresse = () => {
        setDressersTotal(parseFloat(set_dressers_quantity || 0) * 
        parseFloat(set_dressers_units_number || 0) * 
        parseFloat(set_dressers_rate || 0))
        }
        const timer = setTimeout(() => {
            addDresse();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [set_dressers_quantity, set_dressers_units_number,
        set_dressers_rate]);

    // function to calculate swing gang on change
    useEffect(() => {
        const addSwiGan = () => {
        setSwinggangTotal(parseFloat(swing_gang_quantity || 0) * 
        parseFloat(swing_gang_units_number || 0) * 
        parseFloat(swing_gang_rate || 0))
        }
        const timer = setTimeout(() => {
            addSwiGan();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [swing_gang_quantity, swing_gang_units_number,
        swing_gang_rate]);

    // function to calculate set dressing buyer on change
    useEffect(() => {
        const addDrebuy = () => {
        setDressingbuyerTotal(parseFloat(set_dressing_buyer_quantity || 0) * 
        parseFloat(set_dressing_buyer_units_number || 0) * 
        parseFloat(set_dressing_buyer_rate || 0))
        }
        const timer = setTimeout(() => {
            addDrebuy();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [set_dressing_buyer_quantity, set_dressing_buyer_units_number,
        set_dressing_buyer_rate]);
    
    // function to add all Set Dressing Labour on change
    useEffect(() => {
        const addDreLab = () => {
        setDressinglabourTotal(
        parseFloat(decoratorsetTotal || 0) +
        parseFloat(assistdecoratorsetTotal || 0) +
        parseFloat(leadmanTotal || 0) +
        parseFloat(dressersTotal || 0) +
        parseFloat(swinggangTotal || 0) +
        parseFloat(dressingbuyerTotal || 0) +
        parseFloat(fringes_taxes_dressing || 0) +
        parseFloat(other_set_dressing || 0) 
        )
        }
        const timer = setTimeout(() => {
            addDreLab();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
        }, [decoratorsetTotal, assistdecoratorsetTotal, leadmanTotal,
            dressersTotal, swinggangTotal, dressingbuyerTotal,
            other_set_dressing, fringes_taxes_dressing,]);

  return (
    <div className="mt-5">
    <Row >
    <Col md={1} >
    <p className="mb-2">10.00</p>
    </Col>
    <Col md={9} >
    <p className={ `${styles.BoldBlack} mb-2`}>Set Dressing Labour</p>
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
    {/* Set Decorator */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>10.10</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Set Decorator</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="set_decorator_quantity" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="set_decorator_quantity"
        value={set_decorator_quantity}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.set_decorator_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="set_decorator_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="set_decorator_units_number"
        value={set_decorator_units_number}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.set_decorator_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="set_decorator_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="set_decorator_units_name"
        value={set_decorator_units_name}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.set_decorator_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="set_decorator_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="set_decorator_rate"
        value={set_decorator_rate}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.set_decorator_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="decoratorsetTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="decoratorsetTotal"
        value={decoratorsetTotal}
        readOnly
            />
    </Form.Group>
    {errors?.decoratorsetTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Assistant Set Decorator */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>10.20</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Assistant Set Decorator</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="assist_set_decorator_quantity" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assist_set_decorator_quantity"
        value={assist_set_decorator_quantity}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.assist_set_decorator_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="assist_set_decorator_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assist_set_decorator_units_number"
        value={assist_set_decorator_units_number}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.assist_set_decorator_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="assist_set_decorator_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assist_set_decorator_units_name"
        value={assist_set_decorator_units_name}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.assist_set_decorator_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="assist_set_decorator_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assist_set_decorator_rate"
        value={assist_set_decorator_rate}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.assist_set_decorator_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="assistdecoratorsetTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assistdecoratorsetTotal"
        value={assistdecoratorsetTotal}
        readOnly
            />
    </Form.Group>
    {errors?.assistdecoratorsetTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Lead Man */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>10.30</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Lead Man</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="lead_man_quantity" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="lead_man_quantity"
        value={lead_man_quantity}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.lead_man_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="lead_man_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="lead_man_units_number"
        value={lead_man_units_number}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.lead_man_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="lead_man_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="lead_man_units_name"
        value={lead_man_units_name}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.lead_man_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="lead_man_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="lead_man_rate"
        value={lead_man_rate}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.lead_man_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="leadmanTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="leadmanTotal"
        value={leadmanTotal}
        readOnly
            />
    </Form.Group>
    {errors?.leadmanTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Set Dressers */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>10.40</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Set Dressers</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="set_dressers_quantity" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="set_dressers_quantity"
        value={set_dressers_quantity}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.set_dressers_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="set_dressers_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="set_dressers_units_number"
        value={set_dressers_units_number}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.set_dressers_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="set_dressers_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="set_dressers_units_name"
        value={set_dressers_units_name}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.set_dressers_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="set_dressers_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="set_dressers_rate"
        value={set_dressers_rate}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.set_dressers_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="dressersTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dressersTotal"
        value={dressersTotal}
        readOnly
            />
    </Form.Group>
    {errors?.dressersTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Swing Gang */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>10.50</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Swing Gang</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="swing_gang_quantity" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="swing_gang_quantity"
        value={swing_gang_quantity}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.swing_gang_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="swing_gang_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="swing_gang_units_number"
        value={swing_gang_units_number}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.swing_gang_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="swing_gang_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="swing_gang_units_name"
        value={swing_gang_units_name}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.swing_gang_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="swing_gang_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="swing_gang_rate"
        value={swing_gang_rate}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.swing_gang_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="swinggangTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="swinggangTotal"
        value={swinggangTotal}
        readOnly
            />
    </Form.Group>
    {errors?.swinggangTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Set Dressing Buyer */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>10.60</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Swing Gang</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="set_dressing_buyer_quantity" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="set_dressing_buyer_quantity"
        value={set_dressing_buyer_quantity}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.set_dressing_buyer_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="set_dressing_buyer_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="set_dressing_buyer_units_number"
        value={set_dressing_buyer_units_number}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.set_dressing_buyer_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="set_dressing_buyer_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="set_dressing_buyer_units_name"
        value={set_dressing_buyer_units_name}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.set_dressing_buyer_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="set_dressing_buyer_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="set_dressing_buyer_rate"
        value={set_dressing_buyer_rate}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.set_dressing_buyer_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="dressingbuyerTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dressingbuyerTotal"
        value={dressingbuyerTotal}
        readOnly
            />
    </Form.Group>
    {errors?.dressingbuyerTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Other Dressing*/}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>10.70</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    </Col>
    <Col className="px-1 mx-0" md={1} >
    </Col>
    <Col className="px-1 mx-0" md={1} >
    </Col>
    <Col md={2} >
    <Form.Group controlId="other_set_dressing" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_set_dressing"
        value={other_set_dressing}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_set_dressing?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Fringes and Taxes */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>10.80</p>
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
    <Form.Group controlId="fringes_taxes_dressing" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="fringes_taxes_dressing"
        value={fringes_taxes_dressing}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.fringes_taxes_dressing?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Set Dressing Total */}
    <Row className="mt-3">
    <Col md={1} >
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL SET DRESSING</p>
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
    <Form.Group controlId="dressinglabourTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dressinglabourTotal"
        value={dressinglabourTotal}
        readOnly
            />
    </Form.Group>
    {errors?.dressinglabourTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
  )
}

export default SetDressingLabour