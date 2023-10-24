/* Component in the Budget component to edit Grip */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const Grip = (props) => {
    // eslint-disable-next-line
    const [errors, setErrors] = useState({});

    const {postDataGrip, setPostDataGrip,
           keygripTotal, setKeygripTotal,
           bestboygripTotal, setBestboygripTotal,
           gripsTotal, setGripsTotal,
           dailiesgripTotal, setDailiesgripTotal,
           dollycranegripTotal, setDollycranegripTotal,
           swinggripsTotal, setSwinggripsTotal, setShow,
           othergriplabourTotal, setOthergriplabourTotal,
           griplabourTotal, setGriplabourTotal,} = props;

    const {key_grip_qty, key_grip_uno, key_grip_una, key_grip_rt,
    best_boy_grip_qty, best_boy_grip_uno, best_boy_grip_una, best_boy_grip_rt,
    grips_qty, grips_uno, grips_una, grips_rt,
    dailies_grip_qty, dailies_grip_uno, dailies_grip_una, dailies_grip_rt, 
    dolly_crane_grip_qty, dolly_crane_grip_uno, dolly_crane_grip_una, dolly_crane_grip_rt,
    swing_grips_qty, swing_grips_uno, swing_grips_una, swing_grips_rt,
    other_grip_labour_qty, other_grip_labour_uno, other_grip_labour_una, other_grip_labour_rt,
    fringes_taxes_grip,} = postDataGrip;

    // handleChange 
    const handleChange = (event) => {
      setPostDataGrip({
      ...postDataGrip,
      [event.target.name]: parseFloat(event.target.value || 0 ),
      });
    }; 

    // handleChange Text 
    const handleChangeText = (event) => {
      setPostDataGrip({
    ...postDataGrip,
    [event.target.name]: event.target.value,
    });
    };

    // Calculate Functions
    // function to calculate key grip on change
    useEffect(() => {
      const addKetgri = () => {
      setKeygripTotal(parseFloat(key_grip_qty || 0) * 
      parseFloat(key_grip_uno || 0) * 
      parseFloat(key_grip_rt || 0))
      }
      const timer = setTimeout(() => {
        addKetgri();
      }, 2000);

      return () => {
      clearTimeout(timer);
      };
      // eslint-disable-next-line
    }, [key_grip_qty, key_grip_uno, key_grip_rt]);

    // function to calculate best boy grip on change
    useEffect(() => {
      const addBbgrip = () => {
      setBestboygripTotal(parseFloat(best_boy_grip_qty || 0) * 
      parseFloat(best_boy_grip_uno || 0) * 
      parseFloat(best_boy_grip_rt || 0))
      }
      const timer = setTimeout(() => {
        addBbgrip();
      }, 2000);

      return () => {
      clearTimeout(timer);
      };
      // eslint-disable-next-line
    }, [best_boy_grip_qty, best_boy_grip_uno, best_boy_grip_rt]);

    // function to calculate grips on change
    useEffect(() => {
      const addGrips = () => {
      setGripsTotal(parseFloat(grips_qty || 0) * 
      parseFloat(grips_uno || 0) * 
      parseFloat(grips_rt || 0))
      }
      const timer = setTimeout(() => {
        addGrips();
      }, 2000);

      return () => {
      clearTimeout(timer);
      };
      // eslint-disable-next-line
    }, [grips_qty, grips_uno, grips_rt]);

    // function to calculate dailies grip on change
    useEffect(() => {
      const addDaigri = () => {
      setDailiesgripTotal(parseFloat(dailies_grip_qty || 0) * 
      parseFloat(dailies_grip_uno || 0) * 
      parseFloat(dailies_grip_rt || 0))
      }
      const timer = setTimeout(() => {
        addDaigri();
      }, 2000);

      return () => {
      clearTimeout(timer);
      };
      // eslint-disable-next-line
    }, [dailies_grip_qty, dailies_grip_uno, dailies_grip_rt]);

    // function to calculate dolly crane grip on change
    useEffect(() => {
      const addDolcra = () => {
      setDollycranegripTotal(parseFloat(dolly_crane_grip_qty || 0) * 
      parseFloat(dolly_crane_grip_uno || 0) * 
      parseFloat(dolly_crane_grip_rt || 0))
      }
      const timer = setTimeout(() => {
        addDolcra();
      }, 2000);

      return () => {
      clearTimeout(timer);
      };
      // eslint-disable-next-line
    }, [dolly_crane_grip_qty, dolly_crane_grip_uno, dolly_crane_grip_rt]);

    // function to calculate swing grips on change
    useEffect(() => {
      const addSwigri = () => {
      setSwinggripsTotal(parseFloat(swing_grips_qty || 0) * 
      parseFloat(swing_grips_uno || 0) * 
      parseFloat(swing_grips_rt || 0))
      }
      const timer = setTimeout(() => {
        addSwigri();
      }, 2000);

      return () => {
      clearTimeout(timer);
      };
      // eslint-disable-next-line
    }, [swing_grips_qty, swing_grips_uno, swing_grips_rt]);

    // function to calculate other grip labour on change
    useEffect(() => {
      const addOthgri = () => {
      setOthergriplabourTotal(parseFloat(other_grip_labour_qty || 0) * 
      parseFloat(other_grip_labour_uno || 0) * 
      parseFloat(other_grip_labour_rt || 0))
      }
      const timer = setTimeout(() => {
        addOthgri();
      }, 2000);

      return () => {
      clearTimeout(timer);
      };
      // eslint-disable-next-line
    }, [other_grip_labour_qty, other_grip_labour_uno, other_grip_labour_rt]);

    // function to add all Grip Labour on change
    useEffect(() => {
      const AddGriLab = () => {
      setGriplabourTotal(
      parseFloat(keygripTotal || 0) +
      parseFloat(bestboygripTotal || 0) +
      parseFloat(gripsTotal || 0) +
      parseFloat(dailiesgripTotal || 0) +
      parseFloat(dollycranegripTotal || 0) +
      parseFloat(swinggripsTotal || 0) +
      parseFloat(fringes_taxes_grip || 0) +
      parseFloat(othergriplabourTotal || 0)
      )
      }
      const timer = setTimeout(() => {
        AddGriLab();
      }, 1000);

      return () => {
      clearTimeout(timer);
      };
      // eslint-disable-next-line
      }, [keygripTotal, bestboygripTotal, gripsTotal,
        dailiesgripTotal, dollycranegripTotal, swinggripsTotal,
        othergriplabourTotal, fringes_taxes_grip,]);
   
  return (
    <div className="mt-5">
    <Row >
    <Col md={1} >
    <p className="mb-2">18.00</p>
    </Col>
    <Col md={9} >
    <p className={ `${styles.BoldBlack} mb-2`}>Grip Labour</p>
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
    {/* key grip */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>18.10</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Key Grip</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="key_grip_qty" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="key_grip_qty"
        value={key_grip_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.key_grip_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="key_grip_uno" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="key_grip_uno"
        value={key_grip_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.key_grip_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="key_grip_una" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="key_grip_una"
        value={key_grip_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.key_grip_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="key_grip_rt" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="key_grip_rt"
        value={key_grip_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.key_grip_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="keygripTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="keygripTotal"
        value={keygripTotal}
        readOnly
            />
    </Form.Group>
    {errors?.keygripTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* best boy grip */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>18.20</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Best Boy Grip</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="best_boy_grip_qty" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="best_boy_grip_qty"
        value={best_boy_grip_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.best_boy_grip_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="best_boy_grip_uno" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="best_boy_grip_uno"
        value={best_boy_grip_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.best_boy_grip_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="best_boy_grip_una" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="best_boy_grip_una"
        value={best_boy_grip_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.best_boy_grip_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="best_boy_grip_rt" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="best_boy_grip_rt"
        value={best_boy_grip_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.best_boy_grip_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="bestboygripTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="bestboygripTotal"
        value={bestboygripTotal}
        readOnly
            />
    </Form.Group>
    {errors?.bestboygripTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* grips */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>18.30</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Grips</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="grips_qty" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="grips_qty"
        value={grips_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.grips_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="grips_uno" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="grips_uno"
        value={grips_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.grips_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="grips_una" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="grips_una"
        value={grips_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.grips_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="grips_rt" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="grips_rt"
        value={grips_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.grips_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="gripsTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="gripsTotal"
        value={gripsTotal}
        readOnly
            />
    </Form.Group>
    {errors?.gripsTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Dailies - Grip */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>18.40</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Dailies - Grip</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="dailies_grip_qty" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dailies_grip_qty"
        value={dailies_grip_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.dailies_grip_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="dailies_grip_uno" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dailies_grip_uno"
        value={dailies_grip_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.dailies_grip_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="dailies_grip_una" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dailies_grip_una"
        value={dailies_grip_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.dailies_grip_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="dailies_grip_rt" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dailies_grip_rt"
        value={dailies_grip_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.dailies_grip_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="dailiesgripTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dailiesgripTotal"
        value={dailiesgripTotal}
        readOnly
            />
    </Form.Group>
    {errors?.dailiesgripTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Dolly / Crane Grips */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>18.50</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Dolly / Crane Grips</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="dolly_crane_grip_qty" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dolly_crane_grip_qty"
        value={dolly_crane_grip_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.dolly_crane_grip_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="dolly_crane_grip_uno" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dolly_crane_grip_uno"
        value={dolly_crane_grip_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.dolly_crane_grip_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="dolly_crane_grip_una" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dolly_crane_grip_una"
        value={dolly_crane_grip_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.dolly_crane_grip_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="dolly_crane_grip_rt" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dolly_crane_grip_rt"
        value={dolly_crane_grip_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.dolly_crane_grip_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="dollycranegripTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dollycranegripTotal"
        value={dollycranegripTotal}
        readOnly
            />
    </Form.Group>
    {errors?.dollycranegripTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Swing Grips */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>18.60</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Swing Grips G&E</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="swing_grips_qty" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="swing_grips_qty"
        value={swing_grips_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.swing_grips_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="swing_grips_uno" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="swing_grips_uno"
        value={swing_grips_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.swing_grips_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="swing_grips_una" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="swing_grips_una"
        value={swing_grips_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.swing_grips_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="swing_grips_rt" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="swing_grips_rt"
        value={swing_grips_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.swing_grips_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="swinggripsTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="swinggripsTotal"
        value={swinggripsTotal}
        readOnly
            />
    </Form.Group>
    {errors?.swinggripsTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Other Grip Labour */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>18.70</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Other Grip Labour</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_grip_labour_qty" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_grip_labour_qty"
        value={other_grip_labour_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_grip_labour_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_grip_labour_uno" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_grip_labour_uno"
        value={other_grip_labour_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_grip_labour_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_grip_labour_una" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_grip_labour_una"
        value={other_grip_labour_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.other_grip_labour_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_grip_labour_rt" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_grip_labour_rt"
        value={other_grip_labour_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_grip_labour_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="othergriplabourTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="othergriplabourTotal"
        value={othergriplabourTotal}
        readOnly
            />
    </Form.Group>
    {errors?.othergriplabourTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Fringes and Taxes */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>18.80</p>
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
    <Form.Group controlId="fringes_taxes_grip" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="fringes_taxes_grip"
        value={fringes_taxes_grip}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.fringes_taxes_grip?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Grip Total */}
    <Row className="mt-3">
    <Col md={1} >
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>GRIP TOTAL</p>
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
    <Form.Group controlId="griplabourTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="griplabourTotal"
        value={griplabourTotal}
        readOnly
            />
    </Form.Group>
    {errors?.griplabourTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
  )
}

export default Grip