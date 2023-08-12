/* Component in the Budget component to edit FX */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const Wardrobe = (props) => {
    // eslint-disable-next-line
    const [errors, setErrors] = useState({});

    const {postDataWardrobe, setPostDataWardrobe,
           costumedesignerTotal, setCostumedesignerTotal,
           assistcosdesignerTotal, setAssistcosdesignerTotal,
           headwardrobeTotal, setHeadwardrobeTotal,
           wardrobeassistTotal, setWardrobeassistTotal,
           truckcostumerTotal, setTruckcostumerTotal,
           otherwardrobeTotal, setOtherwardrobeTotal, setShow,
           wardrobelabourTotal, setWardrobelabourTotal} = props;
    
    // Wardrobe Labour postData values
    const {costume_designer_quantity, costume_designer_units_number,
        costume_designer_units_name, costume_designer_rate,
        assist_costume_designer_quantity, assist_costume_designer_units_number,
        assist_costume_designer_units_name, assist_costume_designer_rate,
        head_wardrobe_quantity, head_wardrobe_units_number,
        head_wardrobe_units_name, head_wardrobe_rate,
        wardrobe_assist_quantity, wardrobe_assist_units_number,
        wardrobe_assist_units_name, wardrobe_assist_rate,
        truck_costumer_quantity, truck_costumer_units_number,
        truck_costumer_units_name, truck_costumer_rate,
        other_wardrobe_labour_quantity, other_wardrobe_labour_units_number,
        other_wardrobe_labour_units_name, other_wardrobe_labour_rate,
    } = postDataWardrobe;

    // handleChange 
    const handleChange = (event) => {
        setPostDataWardrobe({
        ...postDataWardrobe,
        [event.target.name]: parseFloat(event.target.value || 0 ),
        });
    }; 

    // handleChange Text 
    const handleChangeText = (event) => {
        setPostDataWardrobe({
        ...postDataWardrobe,
        [event.target.name]: event.target.value,
        });
    };

    // Calculate Functions
    // function to calculate costume designer on change
    useEffect(() => {
        const addCosdes = () => {
        setCostumedesignerTotal(parseFloat(costume_designer_quantity || 0) * 
        parseFloat(costume_designer_units_number || 0) * 
        parseFloat(costume_designer_rate || 0))
        }
        const timer = setTimeout(() => {
            addCosdes();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
    }, [costume_designer_quantity, costume_designer_units_number,
        costume_designer_rate]);
    
    // function to calculate assistant costume designer on change
    useEffect(() => {
        const addAsscos = () => {
        setAssistcosdesignerTotal(parseFloat(assist_costume_designer_quantity || 0) * 
        parseFloat(assist_costume_designer_units_number || 0) * 
        parseFloat(assist_costume_designer_rate || 0))
        }
        const timer = setTimeout(() => {
            addAsscos();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
    }, [assist_costume_designer_quantity, assist_costume_designer_units_number,
        assist_costume_designer_rate]);

    // function to calculate head wardrobe on change
    useEffect(() => {
        const addHeawar = () => {
        setHeadwardrobeTotal(parseFloat(head_wardrobe_quantity || 0) * 
        parseFloat(head_wardrobe_units_number || 0) * 
        parseFloat(head_wardrobe_rate || 0))
        }
        const timer = setTimeout(() => {
            addHeawar();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
    }, [head_wardrobe_quantity, head_wardrobe_units_number,
        head_wardrobe_rate]);

    // function to calculate wardrobe assistant on change
    useEffect(() => {
        const addWarass = () => {
        setWardrobeassistTotal(parseFloat(wardrobe_assist_quantity || 0) * 
        parseFloat(wardrobe_assist_units_number || 0) * 
        parseFloat(wardrobe_assist_rate || 0))
        }
        const timer = setTimeout(() => {
            addWarass();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
    }, [wardrobe_assist_quantity, wardrobe_assist_units_number,
        wardrobe_assist_rate]);

    // function to calculate truck costumer on change
    useEffect(() => {
        const addTrucus = () => {
        setTruckcostumerTotal(parseFloat(truck_costumer_quantity || 0) * 
        parseFloat(truck_costumer_units_number || 0) * 
        parseFloat(truck_costumer_rate || 0))
        }
        const timer = setTimeout(() => {
            addTrucus();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
    }, [truck_costumer_quantity, truck_costumer_units_number,
        truck_costumer_rate]);

    // function to calculate other wardrobe labour on change
    useEffect(() => {
        const addOthwar = () => {
        setOtherwardrobeTotal(parseFloat(other_wardrobe_labour_quantity || 0) * 
        parseFloat(other_wardrobe_labour_units_number || 0) * 
        parseFloat(other_wardrobe_labour_rate || 0))
        }
        const timer = setTimeout(() => {
            addOthwar();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
    }, [other_wardrobe_labour_quantity, other_wardrobe_labour_units_number,
        other_wardrobe_labour_rate]);

    // function to add all Wardrobe Labour on change
    useEffect(() => {
        const addWarlab = () => {
        setWardrobelabourTotal(
        parseFloat(costumedesignerTotal || 0) +
        parseFloat(assistcosdesignerTotal || 0) +
        parseFloat(headwardrobeTotal || 0) +
        parseFloat(wardrobeassistTotal || 0) +
        parseFloat(truckcostumerTotal || 0) +
        parseFloat(otherwardrobeTotal || 0)
        )
        }
        const timer = setTimeout(() => {
            addWarlab();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };

        }, [costumedesignerTotal, assistcosdesignerTotal, headwardrobeTotal,
            wardrobeassistTotal, truckcostumerTotal, otherwardrobeTotal]);


  return (
    <div className="mt-5">
    <Row >
    <Col md={1} >
    <p className="mb-2">14.00</p>
    </Col>
    <Col md={9} >
    <p className={ `${styles.BoldBlack} mb-2`}>Wardrobe Labour</p>
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
    {/* Costume Designer */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>14.10</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Costume Designer</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="costume_designer_quantity" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="costume_designer_quantity"
        value={costume_designer_quantity}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.costume_designer_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="costume_designer_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="costume_designer_units_number"
        value={costume_designer_units_number}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.costume_designer_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="costume_designer_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="costume_designer_units_name"
        value={costume_designer_units_name}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.costume_designer_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="costume_designer_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="costume_designer_rate"
        value={costume_designer_rate}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.costume_designer_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="costumedesignerTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="costumedesignerTotal"
        value={costumedesignerTotal}
        readOnly
            />
    </Form.Group>
    {errors?.costumedesignerTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Assistant Costume Designer */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>14.20</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Assistant Costume Designer</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="assist_costume_designer_quantity" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assist_costume_designer_quantity"
        value={assist_costume_designer_quantity}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.assist_costume_designer_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="assist_costume_designer_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assist_costume_designer_units_number"
        value={assist_costume_designer_units_number}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.assist_costume_designer_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="assist_costume_designer_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assist_costume_designer_units_name"
        value={assist_costume_designer_units_name}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.assist_costume_designer_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="assist_costume_designer_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assist_costume_designer_rate"
        value={assist_costume_designer_rate}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.assist_costume_designer_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="assistcosdesignerTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assistcosdesignerTotal"
        value={assistcosdesignerTotal}
        readOnly
            />
    </Form.Group>
    {errors?.assistcosdesignerTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Head Wardrobe */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>14.30</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Head Wardrobe</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="head_wardrobe_quantity" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="head_wardrobe_quantity"
        value={head_wardrobe_quantity}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.head_wardrobe_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="head_wardrobe_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="head_wardrobe_units_number"
        value={head_wardrobe_units_number}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.head_wardrobe_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="head_wardrobe_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="head_wardrobe_units_name"
        value={head_wardrobe_units_name}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.head_wardrobe_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="head_wardrobe_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="head_wardrobe_rate"
        value={head_wardrobe_rate}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.head_wardrobe_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="headwardrobeTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="headwardrobeTotal"
        value={headwardrobeTotal}
        readOnly
            />
    </Form.Group>
    {errors?.headwardrobeTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Wardrobe Assistant */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>14.40</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Wardrobe Assistant</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="wardrobe_assist_quantity" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="wardrobe_assist_quantity"
        value={wardrobe_assist_quantity}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.wardrobe_assist_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="wardrobe_assist_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="wardrobe_assist_units_number"
        value={wardrobe_assist_units_number}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.wardrobe_assist_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="wardrobe_assist_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="wardrobe_assist_units_name"
        value={wardrobe_assist_units_name}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.wardrobe_assist_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="wardrobe_assist_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="wardrobe_assist_rate"
        value={wardrobe_assist_rate}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.wardrobe_assist_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="wardrobeassistTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="wardrobeassistTotal"
        value={wardrobeassistTotal}
        readOnly
            />
    </Form.Group>
    {errors?.wardrobeassistTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Truck Costumer */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>14.50</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Truck Costumer</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="truck_costumer_quantity" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="truck_costumer_quantity"
        value={truck_costumer_quantity}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.truck_costumer_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="truck_costumer_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="truck_costumer_units_number"
        value={truck_costumer_units_number}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.truck_costumer_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="truck_costumer_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="truck_costumer_units_name"
        value={truck_costumer_units_name}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.truck_costumer_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="truck_costumer_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="truck_costumer_rate"
        value={truck_costumer_rate}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.truck_costumer_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="truckcostumerTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="truckcostumerTotal"
        value={truckcostumerTotal}
        readOnly
            />
    </Form.Group>
    {errors?.truckcostumerTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Other Wardrobe Labour */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>14.60</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Other Wardrobe Labour</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_wardrobe_labour_quantity" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_wardrobe_labour_quantity"
        value={other_wardrobe_labour_quantity}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_wardrobe_labour_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_wardrobe_labour_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_wardrobe_labour_units_number"
        value={other_wardrobe_labour_units_number}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_wardrobe_labour_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_wardrobe_labour_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_wardrobe_labour_units_name"
        value={other_wardrobe_labour_units_name}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.other_wardrobe_labour_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_wardrobe_labour_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_wardrobe_labour_rate"
        value={other_wardrobe_labour_rate}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_wardrobe_labour_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="otherwardrobeTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="otherwardrobeTotal"
        value={otherwardrobeTotal}
        readOnly
            />
    </Form.Group>
    {errors?.otherwardrobeTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Wardrobe Total */}
    <Row className="mt-3">
    <Col md={1} >
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>WARDROBE FX</p>
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
    <Form.Group controlId="wardrobelabourTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="wardrobelabourTotal"
        value={wardrobelabourTotal}
        readOnly
            />
    </Form.Group>
    {errors?.wardrobelabourTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
  )
}

export default Wardrobe