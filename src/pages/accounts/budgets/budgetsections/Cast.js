/* Component in the Budget component to edit Cast */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const Cast = (props) => {
  const [errors, setErrors] = useState({});

  const {postDataCast, setPostDataCast, setShow,
         principalsTotal, setPrincipalsTotal,
         actorsTotal, setActorsTotal,
         stuntcoordinatorsTotal, setStuntcoordinatorsTotal,
         stuntperformersTotal, setStuntperformersTotal,
         otherperformersTotal, setOtherperformersTotal,
         extrasTotal, setExtrasTotal,
         castTotal, setCastTotal} = props;

  // Cast postData values
  const {
    principals_quantity, principals_units_number,
    principals_units_name, principals_rate,
    actors_quantity, actors_units_number, 
    actors_units_name, actors_rate,
    stuntcoordinators_quantity, stuntcoordinators_units_number,
    stuntcoordinators_units_name, stuntcoordinators_rate,
    stuntperformers_quantity, stuntperformers_units_number,
    stuntperformers_units_name, stuntperformers_rate,
    otherperformers_quantity, otherperformers_units_number,
    otherperformers_units_name, otherperformers_rate,
    extras_quantity, extras_units_number,
    extras_units_name, extras_rate,
    casting_director, extras_casting,
    other_cast, fringes_taxes_cast, rights_payments_cast,
  } = postDataCast;

  // Cast handleChange 
  const handleChangeCast = (event) => {
    setPostDataCast({
      ...postDataCast,
      [event.target.name]: parseFloat(event.target.value || 0 ),
    });
  }; 

  // Cast handleChange Text 
  const handleChangeCastText = (event) => {
    setPostDataCast({
      ...postDataCast,
      [event.target.name]: event.target.value,
    });
  };

  // Calculate Functions
  // function to calculate principals on change
  useEffect(() => {
    const addPrincipals = () => {
      setPrincipalsTotal(parseFloat(principals_units_number || 0) * 
      parseFloat(principals_quantity || 0) * 
      parseFloat(principals_rate || 0))
    }
    const timer = setTimeout(() => {
      addPrincipals();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [principals_units_number, principals_quantity, principals_rate]);

  // function to calculate actors on change
  useEffect(() => {
    const addActors = () => {
      setActorsTotal(parseFloat(actors_units_number || 0) * 
      parseFloat(actors_quantity || 0) * 
      parseFloat(actors_rate || 0))
    }
    const timer = setTimeout(() => {
      addActors();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [actors_units_number, actors_quantity, actors_rate]);

  // function to calculate stuntcoordinators on change
  useEffect(() => {
    const addStuntcoordinators = () => {
      setStuntcoordinatorsTotal(parseFloat(stuntcoordinators_units_number || 0) * 
      parseFloat(stuntcoordinators_quantity || 0) * 
      parseFloat(stuntcoordinators_rate || 0))
    }
    const timer = setTimeout(() => {
      addStuntcoordinators();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [stuntcoordinators_units_number, stuntcoordinators_quantity, stuntcoordinators_rate]);

  // function to calculate stuntperformers on change
  useEffect(() => {
    const addStuntperformers = () => {
      setStuntperformersTotal(parseFloat(stuntperformers_units_number || 0) * 
      parseFloat(stuntperformers_quantity || 0) * 
      parseFloat(stuntperformers_rate || 0))
    }
    const timer = setTimeout(() => {
      addStuntperformers();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [stuntperformers_units_number, stuntperformers_quantity, stuntperformers_rate]);

  // function to calculate otherperformers on change
  useEffect(() => {
    const addOtherperformers = () => {
      setOtherperformersTotal(parseFloat(otherperformers_units_number || 0) * 
      parseFloat(otherperformers_quantity || 0) * 
      parseFloat(otherperformers_rate || 0))
    }
    const timer = setTimeout(() => {
      addOtherperformers();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [otherperformers_units_number, otherperformers_quantity, otherperformers_rate]);

  // function to calculate extras on change
  useEffect(() => {
    const addExtras = () => {
      setExtrasTotal(parseFloat(extras_units_number || 0) * 
      parseFloat(extras_quantity || 0) * 
      parseFloat(extras_rate || 0))
    }
    const timer = setTimeout(() => {
      addExtras();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [extras_units_number, extras_quantity, extras_rate]);

  // function to add all cast on change
  useEffect(() => {
    const addCast = () => {
      setCastTotal(
      parseFloat(principalsTotal || 0) +
      parseFloat(actorsTotal || 0) +
      parseFloat(stuntcoordinatorsTotal || 0) +
      parseFloat(stuntperformersTotal || 0) +
      parseFloat(otherperformersTotal || 0) +
      parseFloat(extrasTotal || 0) +
      parseFloat(casting_director || 0) +
      parseFloat(extras_casting || 0) +
      parseFloat(other_cast || 0) +
      parseFloat(rights_payments_cast || 0) +
      parseFloat(fringes_taxes_cast || 0) 
      )
    }
    const timer = setTimeout(() => {
      addCast();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [principalsTotal, actorsTotal, stuntcoordinatorsTotal,
    stuntperformersTotal, otherperformersTotal, extrasTotal,
    casting_director, extras_casting, other_cast,
    rights_payments_cast, fringes_taxes_cast ]);

  return (
    <div className="mt-5">
    <Row >
    <Col md={1} >
    <p className="mb-2">6000</p>
    </Col>
    <Col md={6} >
    <p className={ `${styles.BoldBlack} mb-2`}>CAST</p>
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
    {/* Principals */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>6010</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Principals</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="principals_quantity" 
        className={`${styles.Width100} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="principals_quantity"
        value={principals_quantity}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.principals_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="principals_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="principals_units_number"
        value={principals_units_number}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.principals_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="principals_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="principals_units_name"
        value={principals_units_name}
        onChange={handleChangeCastText}
            />
    </Form.Group>
    {errors?.principals_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="principals_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="principals_rate"
        value={principals_rate}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.principals_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="principalsTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="principalsTotal"
        value={principalsTotal}
        readOnly
            />
    </Form.Group>
    {errors?.principalsTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Actors */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>6020</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Actors</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="actors_quantity" 
        className={`${styles.Width100} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="actors_quantity"
        value={actors_quantity}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.actors_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="actors_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="actors_units_number"
        value={actors_units_number}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.actors_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="actors_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="actors_units_name"
        value={actors_units_name}
        onChange={handleChangeCastText}
            />
    </Form.Group>
    {errors?.actors_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="actors_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="actors_rate"
        value={actors_rate}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.actors_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="actorsTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="actorsTotal"
        value={actorsTotal}
        readOnly
            />
    </Form.Group>
    {errors?.actorsTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Stunt Coordinators */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>6030</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Stunt Coordinators</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="stuntcoordinators_quantity" 
        className={`${styles.Width100} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stuntcoordinators_quantity"
        value={stuntcoordinators_quantity}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.stuntcoordinators_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="stuntcoordinators_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stuntcoordinators_units_number"
        value={stuntcoordinators_units_number}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.stuntcoordinators_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="stuntcoordinators_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stuntcoordinators_units_name"
        value={stuntcoordinators_units_name}
        onChange={handleChangeCastText}
            />
    </Form.Group>
    {errors?.stuntcoordinators_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="stuntcoordinators_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stuntcoordinators_rate"
        value={stuntcoordinators_rate}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.stuntcoordinators_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="stuntcoordinatorsTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stuntcoordinatorsTotal"
        value={stuntcoordinatorsTotal}
        readOnly
            />
    </Form.Group>
    {errors?.stuntcoordinatorsTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Stunt Performers */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>6040</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Stunt Performers</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="stuntperformers_quantity" 
        className={`${styles.Width100} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stuntperformers_quantity"
        value={stuntperformers_quantity}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.stuntperformers_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="stuntperformers_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stuntperformers_units_number"
        value={stuntperformers_units_number}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.stuntperformers_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="stuntperformers_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stuntperformers_units_name"
        value={stuntperformers_units_name}
        onChange={handleChangeCastText}
            />
    </Form.Group>
    {errors?.stuntperformers_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="stuntperformers_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stuntperformers_rate"
        value={stuntperformers_rate}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.stuntperformers_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="stuntperformersTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stuntperformersTotal"
        value={stuntperformersTotal}
        readOnly
            />
    </Form.Group>
    {errors?.stuntperformersTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Other Performers */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>6050</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Other Performers</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="otherperformers_quantity" 
        className={`${styles.Width100} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="otherperformers_quantity"
        value={otherperformers_quantity}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.otherperformers_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="otherperformers_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="otherperformers_units_number"
        value={otherperformers_units_number}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.otherperformers_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="otherperformers_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="otherperformers_units_name"
        value={otherperformers_units_name}
        onChange={handleChangeCastText}
            />
    </Form.Group>
    {errors?.otherperformers_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="otherperformers_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="otherperformers_rate"
        value={otherperformers_rate}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.otherperformers_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="otherperformersTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="otherperformersTotal"
        value={otherperformersTotal}
        readOnly
            />
    </Form.Group>
    {errors?.otherperformersTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Extras */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>6060</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Extras</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="extras_quantity" 
        className={`${styles.Width100} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="extras_quantity"
        value={extras_quantity}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.extras_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="extras_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="extras_units_number"
        value={extras_units_number}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.extras_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="extras_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="extras_units_name"
        value={extras_units_name}
        onChange={handleChangeCastText}
            />
    </Form.Group>
    {errors?.extras_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="extras_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="extras_rate"
        value={extras_rate}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.extras_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="extrasTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="extrasTotal"
        value={extrasTotal}
        readOnly
            />
    </Form.Group>
    {errors?.extrasTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Casting Director */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>6070</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Casting Director</p>
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
    <Form.Group controlId="casting_director" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="casting_director"
        value={casting_director}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.casting_director?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Extras Casting */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>6080</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Extras Casting</p>
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
    <Form.Group controlId="extras_casting" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="extras_casting"
        value={extras_casting}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.extras_casting?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Other */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>6090</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Other - Cast</p>
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
    <Form.Group controlId="other_cast" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_cast"
        value={other_cast}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.other_cast?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Fringes Taxes - Cast */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>6100</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Fringes Taxes - Cast</p>
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
    <Form.Group controlId="fringes_taxes_cast" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="fringes_taxes_cast"
        value={fringes_taxes_cast}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.fringes_taxes_cast?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Rights Payments - Cast */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>6110</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Rights Payments - Cast</p>
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
    <Form.Group controlId="rights_payments_cast" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="rights_payments_cast"
        value={rights_payments_cast}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.rights_payments_cast?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Cast Total */}
    <Row className="mt-3">
    <Col md={1} >
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL CAST</p>
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
    <Form.Group controlId="castTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="castTotal"
        value={castTotal}
        readOnly
            />
    </Form.Group>
    {errors?.castTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
  )
}

export default Cast