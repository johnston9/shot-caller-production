/* Component in the Budget component to edit Construction */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const Construction = (props) => {
    // eslint-disable-next-line
    const [errors, setErrors] = useState({});

    const {postDataConstruction, setPostDataConstruction,
           constructioncoordinatorTotal, setConstructioncoordinatorTotal,
           headcarpenterTotal, setHeadcarpenterTotal,
           carpentersTotal, setCarpentersTotal,
           scenicpaintersTotal, setScenicpaintersTotal,
           headpainterTotal, setHeadpainterTotal,
           paintersTotal, setPaintersTotal,
           labourersTotal, setLabourersTotal, setShow,
           constructionlabourTotal, setConstructionlabourTotal,
    } = props;

    const {constructioncoordinator_quantity, constructioncoordinator_units_number,
        constructioncoordinator_units_name, constructioncoordinator_rate,
        headcarpenter_quantity, headcarpenter_units_number,
        headcarpenter_units_name, headcarpenter_rate,
        carpenters_quantity, carpenters_units_number,
        carpenters_units_name, carpenters_rate,
        scenicpainters_quantity, scenicpainters_units_number,
        scenicpainters_units_name, scenicpainters_rate,
        headpainter_quantity, headpainter_units_number,
        headpainter_units_name, headpainter_rate,
        painters_quantity, painters_units_number, 
        painters_units_name, painters_rate,
        labourers_quantity, labourers_units_number, 
        labourers_units_name, labourers_rate, 
        other_construction,} = postDataConstruction;

    // Construction handleChange 
    const handleChange = (event) => {
        setPostDataConstruction({
        ...postDataConstruction,
        [event.target.name]: parseFloat(event.target.value || 0 ),
        });
    }; 

    // Construction handleChange Text 
    const handleChangeText = (event) => {
        setPostDataConstruction({
        ...postDataConstruction,
        [event.target.name]: event.target.value,
        });
    };

  // Calculate Functions
  // function to calculate construction coordinator on change
  useEffect(() => {
    const addConcoo = () => {
      setConstructioncoordinatorTotal(parseFloat(constructioncoordinator_quantity || 0) * 
      parseFloat(constructioncoordinator_units_number || 0) * 
      parseFloat(constructioncoordinator_rate || 0))
    }
    const timer = setTimeout(() => {
        addConcoo();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [constructioncoordinator_quantity, constructioncoordinator_units_number,
      constructioncoordinator_rate]);

  // function to calculate head carpenter on change
  useEffect(() => {
    const addHedcar = () => {
      setHeadcarpenterTotal(parseFloat(headcarpenter_quantity || 0) * 
      parseFloat(headcarpenter_units_number || 0) * 
      parseFloat(headcarpenter_rate || 0))
    }
    const timer = setTimeout(() => {
        addHedcar();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [headcarpenter_quantity, headcarpenter_units_number,
    headcarpenter_rate]);

  // function to calculate carpenters on change
  useEffect(() => {
    const addCarpen = () => {
      setCarpentersTotal(parseFloat(carpenters_quantity || 0) * 
      parseFloat(carpenters_units_number || 0) * 
      parseFloat(carpenters_rate || 0))
    }
    const timer = setTimeout(() => {
        addCarpen();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [carpenters_quantity, carpenters_units_number,
    carpenters_rate]);

  // function to calculate scenic painters on change
  useEffect(() => {
    const addScepan = () => {
      setScenicpaintersTotal(parseFloat(scenicpainters_quantity || 0) * 
      parseFloat(scenicpainters_units_number || 0) * 
      parseFloat(scenicpainters_rate || 0))
    }
    const timer = setTimeout(() => {
        addScepan();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [scenicpainters_quantity, scenicpainters_units_number,
      scenicpainters_rate]);

  // function to calculate head painter on change
  useEffect(() => {
    const addHeaPan = () => {
      setHeadpainterTotal(parseFloat(headpainter_quantity || 0) * 
      parseFloat(headpainter_units_number || 0) * 
      parseFloat(headpainter_rate || 0))
    }
    const timer = setTimeout(() => {
        addHeaPan();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [headpainter_quantity, headpainter_units_number,
    headpainter_rate]);

  // function to calculate painters on change
  useEffect(() => {
    const addPainte = () => {
      setPaintersTotal(parseFloat(painters_quantity || 0) * 
      parseFloat(painters_units_number || 0) * 
      parseFloat(painters_rate || 0))
    }
    const timer = setTimeout(() => {
        addPainte();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [painters_quantity, painters_units_number,
    painters_rate]);

  // function to calculate labourers on change
  useEffect(() => {
    const addLabour = () => {
      setLabourersTotal(parseFloat(labourers_quantity || 0) * 
      parseFloat(labourers_units_number || 0) * 
      parseFloat(labourers_rate || 0))
    }
    const timer = setTimeout(() => {
        addLabour();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [labourers_quantity, labourers_units_number,
    labourers_rate]);

  // function to add all Construction Labour on change
  useEffect(() => {
    const addConLab = () => {
      setConstructionlabourTotal(
      parseFloat(constructioncoordinatorTotal || 0) +
      parseFloat(headcarpenterTotal || 0) +
      parseFloat(carpentersTotal || 0) +
      parseFloat(scenicpaintersTotal || 0) +
      parseFloat(headpainterTotal || 0) +
      parseFloat(paintersTotal || 0) +
      parseFloat(labourersTotal || 0) +
      parseFloat(other_construction || 0) 
      )
    }
    const timer = setTimeout(() => {
        addConLab();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };

    }, [constructioncoordinatorTotal, headcarpenterTotal, carpentersTotal,
        scenicpaintersTotal, headpainterTotal, paintersTotal,
        labourersTotal, other_construction]);

  return (
    <div className="mt-5">
    <Row >
    <Col md={1} >
    <p className="mb-2">09.00</p>
    </Col>
    <Col md={9} >
    <p className={ `${styles.BoldBlack} mb-2`}>Construction Labour</p>
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
    {/* Construction Coordinator */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>09.10</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Construction Coordinator</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="constructioncoordinator_quantity" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="constructioncoordinator_quantity"
        value={constructioncoordinator_quantity}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.constructioncoordinator_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="constructioncoordinator_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="constructioncoordinator_units_number"
        value={constructioncoordinator_units_number}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.constructioncoordinator_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="constructioncoordinator_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="constructioncoordinator_units_name"
        value={constructioncoordinator_units_name}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.constructioncoordinator_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="constructioncoordinator_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="constructioncoordinator_rate"
        value={constructioncoordinator_rate}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.constructioncoordinator_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="constructioncoordinatorTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="constructioncoordinatorTotal"
        value={constructioncoordinatorTotal}
        readOnly
            />
    </Form.Group>
    {errors?.constructioncoordinatorTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Head Carpenter */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>09.20</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Head Carpenter</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="headcarpenter_quantity" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="headcarpenter_quantity"
        value={headcarpenter_quantity}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.headcarpenter_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="headcarpenter_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="headcarpenter_units_number"
        value={headcarpenter_units_number}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.headcarpenter_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="headcarpenter_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="headcarpenter_units_name"
        value={headcarpenter_units_name}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.headcarpenter_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="headcarpenter_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="headcarpenter_rate"
        value={headcarpenter_rate}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.headcarpenter_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="headcarpenterTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="headcarpenterTotal"
        value={headcarpenterTotal}
        readOnly
            />
    </Form.Group>
    {errors?.headcarpenterTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Carpenters */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>09.30</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Carpenters</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="carpenters_quantity" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="carpenters_quantity"
        value={carpenters_quantity}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.carpenters_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="carpenters_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="carpenters_units_number"
        value={carpenters_units_number}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.carpenters_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="carpenters_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="carpenters_units_name"
        value={carpenters_units_name}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.carpenters_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="carpenters_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="carpenters_rate"
        value={carpenters_rate}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.carpenters_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="carpentersTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="carpentersTotal"
        value={carpentersTotal}
        readOnly
            />
    </Form.Group>
    {errors?.carpentersTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Scenic Painters */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>09.40</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Scenic Painters</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="scenicpainters_quantity" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="scenicpainters_quantity"
        value={scenicpainters_quantity}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.scenicpainters_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="scenicpainters_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="scenicpainters_units_number"
        value={scenicpainters_units_number}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.scenicpainters_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="scenicpainters_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="scenicpainters_units_name"
        value={scenicpainters_units_name}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.scenicpainters_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="scenicpainters_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="scenicpainters_rate"
        value={scenicpainters_rate}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.scenicpainters_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="scenicpaintersTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="scenicpaintersTotal"
        value={scenicpaintersTotal}
        readOnly
            />
    </Form.Group>
    {errors?.scenicpaintersTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Head Painter */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>09.50</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Head Painter</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="headpainter_quantity" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="headpainter_quantity"
        value={headpainter_quantity}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.headpainter_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="headpainter_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="headpainter_units_number"
        value={headpainter_units_number}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.headpainter_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="headpainter_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="headpainter_units_name"
        value={headpainter_units_name}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.headpainter_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="headpainter_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="headpainter_rate"
        value={headpainter_rate}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.headpainter_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="headpainterTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="headpainterTotal"
        value={headpainterTotal}
        readOnly
            />
    </Form.Group>
    {errors?.headpainterTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Painters */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>09.60</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Painters</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="painters_quantity" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="painters_quantity"
        value={painters_quantity}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.painters_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="painters_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="painters_units_number"
        value={painters_units_number}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.painters_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="painters_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="painters_units_name"
        value={painters_units_name}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.painters_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="painters_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="painters_rate"
        value={painters_rate}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.painters_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="paintersTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="paintersTotal"
        value={paintersTotal}
        readOnly
            />
    </Form.Group>
    {errors?.paintersTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Labourers */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>09.70</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Labourers</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="labourers_quantity" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="labourers_quantity"
        value={labourers_quantity}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.labourers_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="labourers_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="labourers_units_number"
        value={labourers_units_number}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.labourers_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="labourers_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="labourers_units_name"
        value={labourers_units_name}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.labourers_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="labourers_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="labourers_rate"
        value={labourers_rate}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.labourers_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="labourersTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="labourersTotal"
        value={labourersTotal}
        readOnly
            />
    </Form.Group>
    {errors?.labourersTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Other */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>09.80</p>
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
    <Form.Group controlId="other_construction" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_construction"
        value={other_construction}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_construction?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Construction Total */}
    <Row className="mt-3">
    <Col md={1} >
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL CONSTRUCTION</p>
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
    <Form.Group controlId="constructionlabourTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="constructionlabourTotal"
        value={constructionlabourTotal}
        readOnly
            />
    </Form.Group>
    {errors?.constructionlabourTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
  )
}

export default Construction