/* Component in the Budget component to edit Property */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const PropertyLabour = (props) => {
    const [errors, setErrors] = useState({});

    const {postDataProperty, setPostDataProperty,
           propertymasterTotal, setPropertymasterTotal,
           assistpropertymasterTotal, setAssistpropertymasterTotal,
           onsetpropspersonTotal, setOnsetpropspersonTotal,
           propertybuyerTotal, setPropertybuyerTotal,
           armorerTotal, setArmorerTotal, setShow,
           propertylabourTotal, setPropertylabourTotal} = props;
    
    const {property_master_quantity, property_master_units_number,
        property_master_units_name, property_master_rate,
        assist_property_master_quantity, assist_property_master_units_number,
        assist_property_master_units_name, assist_property_master_rate,
        on_set_props_person_quantity, on_set_props_person_units_number,
        on_set_props_person_units_name, on_set_props_person_rate,
        property_buyer_quantity, property_buyer_units_number,
        property_buyer_units_name, property_buyer_rate,
        armorer_quantity, armorer_units_number,
        armorer_units_name, armorer_rate,
        other_property,} = postDataProperty;
    
    // handleChange 
    const handleChange = (event) => {
        setPostDataProperty({
        ...postDataProperty,
        [event.target.name]: parseFloat(event.target.value || 0 ),
        });
    }; 

    // handleChange Text 
    const handleChangeText = (event) => {
        setPostDataProperty({
        ...postDataProperty,
        [event.target.name]: event.target.value,
        });
    };

    // Calculate Functions
    // function to calculate property master on change
    useEffect(() => {
        const addPromas = () => {
        setPropertymasterTotal(parseFloat(property_master_quantity || 0) * 
        parseFloat(property_master_units_number || 0) * 
        parseFloat(property_master_rate || 0))
        }
        const timer = setTimeout(() => {
            addPromas();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
    }, [property_master_quantity, property_master_units_number,
        property_master_rate]);
    
    // function to calculate assistant property master on change
    useEffect(() => {
        const addAssmas = () => {
        setAssistpropertymasterTotal(parseFloat(assist_property_master_quantity || 0) * 
        parseFloat(assist_property_master_units_number || 0) * 
        parseFloat(assist_property_master_rate || 0))
        }
        const timer = setTimeout(() => {
            addAssmas();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
    }, [assist_property_master_quantity, assist_property_master_units_number,
        assist_property_master_rate]);
    
    // function to calculate on set props person on change
    useEffect(() => {
        const addOnsepr = () => {
        setOnsetpropspersonTotal(parseFloat(on_set_props_person_quantity || 0) * 
        parseFloat(on_set_props_person_units_number || 0) * 
        parseFloat(on_set_props_person_rate || 0))
        }
        const timer = setTimeout(() => {
            addOnsepr();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
    }, [on_set_props_person_quantity, on_set_props_person_units_number,
        on_set_props_person_rate]);
    
    // function to calculate property buyer on change
    useEffect(() => {
        const addPrbuye = () => {
        setPropertybuyerTotal(parseFloat(property_buyer_quantity || 0) * 
        parseFloat(property_buyer_units_number || 0) * 
        parseFloat(property_buyer_rate || 0))
        }
        const timer = setTimeout(() => {
            addPrbuye();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
    }, [property_buyer_quantity, property_buyer_units_number,
        property_buyer_rate]);
    
    // function to calculate armorer on change
    useEffect(() => {
        const addArmour = () => {
        setArmorerTotal(parseFloat(armorer_quantity || 0) * 
        parseFloat(armorer_units_number || 0) * 
        parseFloat(armorer_rate || 0))
        }
        const timer = setTimeout(() => {
            addArmour();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
    }, [armorer_quantity, armorer_units_number,
        armorer_rate]);
    
    // function to add all Property Labour on change
    useEffect(() => {
        const addPropLab = () => {
        setPropertylabourTotal(
        parseFloat(propertymasterTotal || 0) +
        parseFloat(assistpropertymasterTotal || 0) +
        parseFloat(onsetpropspersonTotal || 0) +
        parseFloat(propertybuyerTotal || 0) +
        parseFloat(armorerTotal || 0) +
        parseFloat(other_property || 0) 
        )
        }
        const timer = setTimeout(() => {
            addPropLab();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };

        }, [propertymasterTotal, assistpropertymasterTotal,
            onsetpropspersonTotal, propertybuyerTotal,
            armorerTotal, other_property]);

  return (
    <div className="mt-5">
    <Row >
    <Col md={1} >
    <p className="mb-2">11.00</p>
    </Col>
    <Col md={9} >
    <p className={ `${styles.BoldBlack} mb-2`}>Property Labour</p>
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
    {/* Property Master */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>11.10</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Property Master</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="property_master_quantity" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="property_master_quantity"
        value={property_master_quantity}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.property_master_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="property_master_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="property_master_units_number"
        value={property_master_units_number}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.property_master_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="property_master_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="property_master_units_name"
        value={property_master_units_name}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.property_master_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="property_master_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="property_master_rate"
        value={property_master_rate}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.property_master_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="propertymasterTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="propertymasterTotal"
        value={propertymasterTotal}
        readOnly
            />
    </Form.Group>
    {errors?.propertymasterTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
  )
}

export default PropertyLabour