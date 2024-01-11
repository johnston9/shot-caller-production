/* Component in the Budget component to edit Property */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const PropertyLabour = (props) => {
    // eslint-disable-next-line
    const [errors, setErrors] = useState({});

    const {postDataProperty, setPostDataProperty,
           propertymasterTotal, setPropertymasterTotal,
           assistpropertymasterTotal, setAssistpropertymasterTotal,
           onsetpropspersonTotal, setOnsetpropspersonTotal,
           propertybuyerTotal, setPropertybuyerTotal,
           armorerTotal, setArmorerTotal, setShow,
           propertylabourTotal, setPropertylabourTotal,
           propmasprepTotal, setPropmasprepTotal,
           propmaswrapTotal, setPropmaswrapTotal,
           propmasallTotal, setPropmasallTotal,
           aspropmaprepTotal, setAspropmaprepTotal,
           aspropmawrapTotal, setAspropmawrapTotal,
           aspropmaallTotal, setAspropmaallTotal,
           onsetpropprepTotal, setOnsetpropprepTotal,
           onsetpropwrapTotal, setOnsetpropwrapTotal,
           onsetpropallTotal, setOnsetpropallTotal,
           propbuyprepTotal, setPropbuyprepTotal,
           propbuywrapTotal, setPropbuywrapTotal,
           propbuyallTotal, setPropbuyallTotal,
           armorprepTotal, setArmorprepTotal,
           armorwrapTotal, setArmorwrapTotal,
           armorallTotal, setArmorallTotal,
    } = props;
    
    const {days6th7th_unit_prop, days6th7th_prop, 
        overtime_unit_prop, overtime_prop,
        holidays_unit_prop, holidays_prop, box_rent_unit_prop, box_rent_prop,
        pro_mas_qty_prep, pro_mas_uno_prep, pro_mas_una_prep, pro_mas_rt_prep,
        pro_mas_qty_wrap, pro_mas_uno_wrap, pro_mas_una_wrap, pro_mas_rt_wrap,
        as_pro_ma_qty_prep, as_pro_ma_uno_prep, as_pro_ma_una_prep, as_pro_ma_rt_prep,
        as_pro_ma_qty_wrap, as_pro_ma_uno_wrap, as_pro_ma_una_wrap, as_pro_ma_rt_wrap,
        on_set_prop_qty_prep, on_set_prop_uno_prep, 
        on_set_prop_una_prep, on_set_prop_rt_prep,
        on_set_prop_qty_wrap, on_set_prop_uno_wrap, 
        on_set_prop_una_wrap, on_set_prop_rt_wrap, 
        prop_buy_qty_prep, prop_buy_uno_prep, prop_buy_una_prep, prop_buy_rt_prep,
        prop_buy_qty_wrap, prop_buy_uno_wrap, prop_buy_una_wrap, prop_buy_rt_wrap,
        armor_qty_prep, armor_uno_prep, armor_una_prep, armor_rt_prep,
        armor_qty_wrap, armor_uno_wrap, armor_una_wrap, armor_rt_wrap,
        fringes_taxes_property,
        property_master_quantity, property_master_units_number,
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
        [event.target.name]: parseFloat(event.target.value.replace(/\D/g,'') || 0 ),
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

    // property master
    // function to calculate property master shoot on change
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
        // eslint-disable-next-line
    }, [property_master_quantity, property_master_units_number,
    property_master_rate]);

    // function to calculate property master prep on change
    useEffect(() => {
        const addPromasprep = () => {
        setPropmasprepTotal(parseFloat(pro_mas_qty_prep || 0) * 
        parseFloat(pro_mas_uno_prep || 0) * 
        parseFloat(pro_mas_rt_prep || 0))
        }
        const timer = setTimeout(() => {
            addPromasprep();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [pro_mas_qty_prep, pro_mas_uno_prep, pro_mas_rt_prep]);

    // function to calculate property master wrap on change
    useEffect(() => {
        const addPromaswrap = () => {
        setPropmaswrapTotal(parseFloat(pro_mas_qty_wrap || 0) * 
        parseFloat(pro_mas_uno_wrap || 0) * 
        parseFloat(pro_mas_rt_wrap || 0))
        }
        const timer = setTimeout(() => {
            addPromaswrap();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [pro_mas_qty_wrap, pro_mas_uno_wrap, pro_mas_rt_wrap]);

    // function to calculate property master all on change
    useEffect(() => {
        const addPromasall = () => {
        setPropmasallTotal(parseFloat(propertymasterTotal || 0) +
        parseFloat(propmasprepTotal || 0) +
        parseFloat(propmaswrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addPromasall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [propertymasterTotal, propmasprepTotal, propmaswrapTotal]);
    
    // assistant property master
    // function to calculate assistant property master shoot on change
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
        // eslint-disable-next-line
    }, [assist_property_master_quantity, assist_property_master_units_number,
    assist_property_master_rate]);

    // function to calculate assistant property master prep on change
    useEffect(() => {
        const addAssmasprep = () => {
        setAspropmaprepTotal(parseFloat(as_pro_ma_qty_prep || 0) * 
        parseFloat(as_pro_ma_uno_prep || 0) * 
        parseFloat(as_pro_ma_rt_prep || 0))
        }
        const timer = setTimeout(() => {
            addAssmasprep();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [as_pro_ma_qty_prep, as_pro_ma_uno_prep, as_pro_ma_rt_prep]);

    // function to calculate assistant property master wrap on change
    useEffect(() => {
        const addAssmaswrap = () => {
        setAspropmawrapTotal(parseFloat(as_pro_ma_qty_wrap || 0) * 
        parseFloat(as_pro_ma_uno_wrap || 0) * 
        parseFloat(as_pro_ma_rt_wrap || 0))
        }
        const timer = setTimeout(() => {
            addAssmaswrap();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [as_pro_ma_qty_wrap, as_pro_ma_uno_wrap, as_pro_ma_rt_wrap]);

    // function to calculate assistant property master all on change
    useEffect(() => {
        const addAssmasall = () => {
        setAspropmaallTotal(parseFloat(assistpropertymasterTotal || 0) +
        parseFloat(aspropmaprepTotal || 0) +
        parseFloat(aspropmawrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addAssmasall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [assistpropertymasterTotal, aspropmaprepTotal, aspropmawrapTotal]);
    
    // on set props person
    // function to calculate on set props person shoot on change
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
        // eslint-disable-next-line
    }, [on_set_props_person_quantity, on_set_props_person_units_number,
    on_set_props_person_rate]);

    // function to calculate on set props person prep on change
    useEffect(() => {
        const addOnseprprep = () => {
        setOnsetpropprepTotal(parseFloat(on_set_prop_qty_prep || 0) * 
        parseFloat(on_set_prop_uno_prep || 0) * 
        parseFloat(on_set_prop_rt_prep || 0))
        }
        const timer = setTimeout(() => {
            addOnseprprep();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [on_set_prop_qty_prep, on_set_prop_uno_prep, on_set_prop_rt_prep]);

    // function to calculate on set props person wrap on change
    useEffect(() => {
        const addOnseprwrap = () => {
        setOnsetpropwrapTotal(parseFloat(on_set_prop_qty_wrap || 0) * 
        parseFloat(on_set_prop_uno_wrap || 0) * 
        parseFloat(on_set_prop_rt_wrap || 0))
        }
        const timer = setTimeout(() => {
            addOnseprwrap();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [on_set_prop_qty_wrap, on_set_prop_uno_wrap, on_set_prop_rt_wrap]);

    // function to calculate on set props person all on change
    useEffect(() => {
        const addOnseprall = () => {
        setOnsetpropallTotal(parseFloat(onsetpropspersonTotal || 0) +
        parseFloat(onsetpropprepTotal || 0) +
        parseFloat(onsetpropwrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addOnseprall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [onsetpropspersonTotal, onsetpropprepTotal, onsetpropwrapTotal]);
    
    // property buyer
    // function to calculate property buyer shoot on change
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
        // eslint-disable-next-line
    }, [property_buyer_quantity, property_buyer_units_number,
    property_buyer_rate]);

    // function to calculate property buyer prep on change
    useEffect(() => {
        const addPrbuyeprep = () => {
        setPropbuyprepTotal(parseFloat(prop_buy_qty_prep || 0) * 
        parseFloat(prop_buy_uno_prep || 0) * 
        parseFloat(prop_buy_rt_prep || 0))
        }
        const timer = setTimeout(() => {
            addPrbuyeprep();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [prop_buy_qty_prep, prop_buy_uno_prep, prop_buy_rt_prep]);

    // function to calculate property buyer wrap on change
    useEffect(() => {
        const addPrbuyewrap = () => {
        setPropbuywrapTotal(parseFloat(prop_buy_qty_wrap || 0) * 
        parseFloat(prop_buy_uno_wrap || 0) * 
        parseFloat(prop_buy_rt_wrap || 0))
        }
        const timer = setTimeout(() => {
            addPrbuyewrap();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [prop_buy_qty_wrap, prop_buy_uno_wrap, prop_buy_rt_wrap]);

    // function to calculate property buyer all on change
    useEffect(() => {
        const addPrbuyeall = () => {
        setPropbuyallTotal(parseFloat(propertybuyerTotal || 0) +
        parseFloat(propbuyprepTotal || 0) +
        parseFloat(propbuywrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addPrbuyeall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [propertybuyerTotal, propbuyprepTotal, propbuywrapTotal]);
    
    // armorer start here
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
        // eslint-disable-next-line
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
        parseFloat(fringes_taxes_property || 0) +
        parseFloat(other_property || 0) 
        )
        }
        const timer = setTimeout(() => {
            addPropLab();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
          // eslint-disable-next-line
        }, [propertymasterTotal, assistpropertymasterTotal,
            onsetpropspersonTotal, propertybuyerTotal,
            armorerTotal, other_property, fringes_taxes_property]);

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
    {/* Assistant Property Master */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>11.20</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Assistant Property Master</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="assist_property_master_quantity" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assist_property_master_quantity"
        value={assist_property_master_quantity}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.assist_property_master_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="assist_property_master_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assist_property_master_units_number"
        value={assist_property_master_units_number}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.assist_property_master_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="assist_property_master_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assist_property_master_units_name"
        value={assist_property_master_units_name}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.assist_property_master_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="assist_property_master_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assist_property_master_rate"
        value={assist_property_master_rate}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.assist_property_master_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="assistpropertymasterTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assistpropertymasterTotal"
        value={assistpropertymasterTotal}
        readOnly
            />
    </Form.Group>
    {errors?.assistpropertymasterTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* On Set Props Person */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>11.30</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>On-Set Props Person</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="on_set_props_person_quantity" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="on_set_props_person_quantity"
        value={on_set_props_person_quantity}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.on_set_props_person_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="on_set_props_person_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="on_set_props_person_units_number"
        value={on_set_props_person_units_number}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.on_set_props_person_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="on_set_props_person_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="on_set_props_person_units_name"
        value={on_set_props_person_units_name}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.on_set_props_person_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="on_set_props_person_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="on_set_props_person_rate"
        value={on_set_props_person_rate}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.on_set_props_person_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="onsetpropspersonTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="onsetpropspersonTotal"
        value={onsetpropspersonTotal}
        readOnly
            />
    </Form.Group>
    {errors?.onsetpropspersonTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Property Buyer */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>11.40</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Property Buyer</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="property_buyer_quantity" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="property_buyer_quantity"
        value={property_buyer_quantity}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.property_buyer_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="property_buyer_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="property_buyer_units_number"
        value={property_buyer_units_number}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.property_buyer_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="property_buyer_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="property_buyer_units_name"
        value={property_buyer_units_name}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.property_buyer_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="property_buyer_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="property_buyer_rate"
        value={property_buyer_rate}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.property_buyer_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="propertybuyerTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="propertybuyerTotal"
        value={propertybuyerTotal}
        readOnly
            />
    </Form.Group>
    {errors?.propertybuyerTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Armorer */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>11.50</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Armorer</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="armorer_quantity" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="armorer_quantity"
        value={armorer_quantity}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.armorer_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="armorer_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="armorer_units_number"
        value={armorer_units_number}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.armorer_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="armorer_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="armorer_units_name"
        value={armorer_units_name}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.armorer_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="armorer_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="armorer_rate"
        value={armorer_rate}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.armorer_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="armorerTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="armorerTotal"
        value={armorerTotal}
        readOnly
            />
    </Form.Group>
    {errors?.armorerTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Other Property*/}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>11.60</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Other - Property</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    </Col>
    <Col className="px-1 mx-0" md={1} >
    </Col>
    <Col className="px-1 mx-0" md={1} >
    </Col>
    <Col md={2} >
    <Form.Group controlId="other_property" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_property"
        value={other_property}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_property?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Fringes and Taxes */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>11.70</p>
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
    <Form.Group controlId="fringes_taxes_property" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="fringes_taxes_property"
        value={fringes_taxes_property}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.fringes_taxes_property?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Property Total */}
    <Row className="mt-3">
    <Col md={1} >
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL PROPERTY</p>
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
    <Form.Group controlId="propertylabourTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="propertylabourTotal"
        value={propertylabourTotal}
        readOnly
            />
    </Form.Group>
    {errors?.propertylabourTotal?.map((message, idx) => (
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