/* Component in the Budget component to edit Transport */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const Transport = (props) => {
    // eslint-disable-next-line
    const [errors, setErrors] = useState({});

    const {postDataTransport, setPostDataTransport,
        tpcoordinatorTotal, setTpcoordinatorTotal,
        tpcaptainTotal, setTpcaptainTotal,
        tpmanagerTotal, setTpmanagerTotal,
        headdriverTotal, setHeaddriverTotal,
        driversTotal, setDriversTotal, setShow,
        transportlabourTotal, setTransportlabourTotal,} = props;

    const {tp_coordinator_qty, tp_coordinator_uno, tp_coordinator_una, tp_coordinator_rt,
        tp_captain_qty,tp_captain_uno, tp_captain_una, tp_captain_rt,
        tp_manager_qty, tp_manager_uno, tp_manager_una, tp_manager_rt,
        head_driver_qty, head_driver_uno, head_driver_una, head_driver_rt,
        drivers_qty, drivers_uno, drivers_una, drivers_rt,
        } = postDataTransport;

    // handleChange 
    const handleChange = (event) => {
        setPostDataTransport({
        ...postDataTransport,
        [event.target.name]: parseFloat(event.target.value || 0 ),
        });
      }; 
  
    // handleChange Text 
    const handleChangeText = (event) => {
        setPostDataTransport({
        ...postDataTransport,
        [event.target.name]: event.target.value,
        });
        };

    // Calculate Functions
    // function to calculate Transport Coordinator on change
    useEffect(() => {
      const addTracoo = () => {
      setTpcoordinatorTotal(parseFloat(tp_coordinator_qty || 0) * 
      parseFloat(tp_coordinator_uno || 0) * 
      parseFloat(tp_coordinator_rt || 0))
      }
      const timer = setTimeout(() => {
        addTracoo();
      }, 2000);

      return () => {
      clearTimeout(timer);
      };
    }, [tp_coordinator_qty, tp_coordinator_uno, tp_coordinator_rt]);

    // function to calculate Transport Captain on change
    useEffect(() => {
      const addTracap = () => {
      setTpcaptainTotal(parseFloat(tp_captain_qty || 0) * 
      parseFloat(tp_captain_uno || 0) * 
      parseFloat(tp_captain_rt || 0))
      }
      const timer = setTimeout(() => {
        addTracap();
      }, 2000);

      return () => {
      clearTimeout(timer);
      };
    }, [tp_captain_qty, tp_captain_uno, tp_captain_rt]);

    // function to calculate Transport Manager on change
    useEffect(() => {
      const addTraman = () => {
      setTpmanagerTotal(parseFloat(tp_manager_qty || 0) * 
      parseFloat(tp_manager_uno || 0) * 
      parseFloat(tp_manager_rt || 0))
      }
      const timer = setTimeout(() => {
        addTraman();
      }, 2000);

      return () => {
      clearTimeout(timer);
      };
    }, [tp_manager_qty, tp_manager_uno, tp_manager_rt]);

    // function to calculate Head Driver on change
    useEffect(() => {
      const addHeadri = () => {
      setHeaddriverTotal(parseFloat(head_driver_qty || 0) * 
      parseFloat(head_driver_uno || 0) * 
      parseFloat(head_driver_rt || 0))
      }
      const timer = setTimeout(() => {
        addHeadri();
      }, 2000);

      return () => {
      clearTimeout(timer);
      };
    }, [head_driver_qty, head_driver_uno, head_driver_rt]);

    // function to calculate Drivers on change
    useEffect(() => {
      const addDriver = () => {
      setDriversTotal(parseFloat(drivers_qty || 0) * 
      parseFloat(drivers_uno || 0) * 
      parseFloat(drivers_rt || 0))
      }
      const timer = setTimeout(() => {
        addDriver();
      }, 2000);

      return () => {
      clearTimeout(timer);
      };
    }, [drivers_qty, drivers_uno, drivers_rt]);

    // function to add all Transport Labour on change
    useEffect(() => {
      const AddTraLab = () => {
      setTransportlabourTotal(
      parseFloat(tpcoordinatorTotal || 0) +
      parseFloat(tpcaptainTotal || 0) +
      parseFloat(tpmanagerTotal || 0) +
      parseFloat(headdriverTotal || 0) +
      parseFloat(driversTotal || 0)
      )
      }
      const timer = setTimeout(() => {
        AddTraLab();
      }, 1000);

      return () => {
      clearTimeout(timer);
      };

      }, [tpcoordinatorTotal, tpcaptainTotal, tpmanagerTotal,
        headdriverTotal, driversTotal]);

  return (
    <div className="mt-5">
    <Row >
    <Col md={1} >
    <p className="mb-2">20.00</p>
    </Col>
    <Col md={9} >
    <p className={ `${styles.BoldBlack} mb-2`}>Transportation Labour</p>
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
    {/* Transport Coordinator */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>20.10</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Transport Coordinator</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="tp_coordinator_qty" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tp_coordinator_qty"
        value={tp_coordinator_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.tp_coordinator_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="tp_coordinator_uno" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tp_coordinator_uno"
        value={tp_coordinator_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.tp_coordinator_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="tp_coordinator_una" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tp_coordinator_una"
        value={tp_coordinator_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.tp_coordinator_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="tp_coordinator_rt" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tp_coordinator_rt"
        value={tp_coordinator_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.tp_coordinator_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="tpcoordinatorTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tpcoordinatorTotal"
        value={tpcoordinatorTotal}
        readOnly
            />
    </Form.Group>
    {errors?.tpcoordinatorTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Transport Captain */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>20.20</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Transport Captain</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="tp_captain_qty" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tp_captain_qty"
        value={tp_captain_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.tp_captain_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="tp_captain_uno" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tp_captain_uno"
        value={tp_captain_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.tp_captain_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="tp_captain_una" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tp_captain_una"
        value={tp_captain_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.tp_captain_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="tp_captain_rt" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tp_captain_rt"
        value={tp_captain_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.tp_captain_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="tpcaptainTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tpcaptainTotal"
        value={tpcaptainTotal}
        readOnly
            />
    </Form.Group>
    {errors?.tpcaptainTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Transport Manager */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>20.30</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Transport Manager</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="tp_manager_qty" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tp_manager_qty"
        value={tp_captain_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.tp_manager_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="tp_manager_uno" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tp_manager_uno"
        value={tp_manager_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.tp_manager_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="tp_manager_una" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tp_manager_una"
        value={tp_manager_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.tp_manager_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="tp_manager_rt" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tp_manager_rt"
        value={tp_manager_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.tp_manager_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="tpmanagerTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tpmanagerTotal"
        value={tpmanagerTotal}
        readOnly
            />
    </Form.Group>
    {errors?.tpmanagerTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Head Driver */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>20.40</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Head Driver</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="head_driver_qty" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="head_driver_qty"
        value={head_driver_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.head_driver_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="head_driver_uno" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="head_driver_uno"
        value={head_driver_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.head_driver_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="head_driver_una" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="head_driver_una"
        value={head_driver_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.head_driver_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="head_driver_rt" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="head_driver_rt"
        value={head_driver_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.head_driver_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="headdriverTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="headdriverTotal"
        value={headdriverTotal}
        readOnly
            />
    </Form.Group>
    {errors?.headdriverTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Drivers */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>20.50</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Drivers</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="drivers_qty" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="drivers_qty"
        value={drivers_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.drivers_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="drivers_uno" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="drivers_uno"
        value={drivers_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.drivers_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="drivers_una" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="drivers_una"
        value={drivers_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.drivers_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="drivers_rt" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="drivers_rt"
        value={drivers_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.drivers_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="driversTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="driversTotal"
        value={driversTotal}
        readOnly
            />
    </Form.Group>
    {errors?.driversTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Transport Total */}
    <Row className="mt-3">
    <Col md={1} >
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TRANSPORTATION TOTAL</p>
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
    <Form.Group controlId="transportlabourTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="transportlabourTotal"
        value={transportlabourTotal}
        readOnly
            />
    </Form.Group>
    {errors?.transportlabourTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
  )
}

export default Transport