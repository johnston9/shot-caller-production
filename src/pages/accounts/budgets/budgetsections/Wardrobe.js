/* Component in the Budget component to edit Wardrobe */
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
           wardrobelabourTotal, setWardrobelabourTotal,
           cosdesprepTotal, setCosdesprepTotal,
           cosdeswrapTotal, setCosdeswrapTotal,
           cosdesallTotal, setCosdesallTotal,
           ascosdesprepTotal, setAscosdesprepTotal,
           ascosdeswrapTotal, setAscosdeswrapTotal,
           ascosdesallTotal, setAscosdesallTotal,
           hewarprepTotal, setHewarprepTotal,
           hewarwrapTotal, setHewarwrapTotal,
           hewarallTotal, setHewarallTotal,
           warasprepTotal, setWarasprepTotal,
           waraswrapTotal, setWaraswrapTotal,
           warasallTotal, setWarasallTotal,
           trucosprepTotal, setTrucosprepTotal,
           trucoswrapTotal, setTrucoswrapTotal,
           trucosallTotal, setTrucosallTotal,
           shopperTotal, setShopperTotal,
           shopprepTotal, setShopprepTotal,
           shopallTotal, setShopallTotal,
           othwarprepTotal, setOthwarprepTotal,
           othwarwrapTotal, setOthwarwrapTotal,
           othwarallTotal, setOthwarallTotal,
    } = props;
    
    // Wardrobe Labour postData values
    const {days6th7th_unit_war, days6th7th_war, overtime_unit_war, overtime_war,
        holidays_unit_war, holidays_war, box_rent_unit_war, box_rent_war, other_solo_war,
        cos_des_qty_prep, cos_des_uno_prep, cos_des_una_prep, cos_des_rt_prep,
        cos_des_qty_wrap, cos_des_uno_wrap, cos_des_una_wrap, cos_des_rt_wrap,
        as_cos_des_qty_prep, as_cos_des_uno_prep, as_cos_des_una_prep, as_cos_des_rt_prep,
        as_cos_des_qty_wrap, as_cos_des_uno_wrap, as_cos_des_una_wrap, as_cos_des_rt_wrap,
        he_war_qty_prep, he_war_uno_prep, he_war_una_prep, he_war_rt_prep,
        he_war_qty_wrap, he_war_uno_wrap, he_war_una_wrap, he_war_rt_wrap,
        war_as_qty_prep, war_as_uno_prep, war_as_una_prep, war_as_rt_prep, 
        war_as_qty_wrap, war_as_uno_wrap, war_as_una_wrap, war_as_rt_wrap,
        tru_cos_qty_prep, tru_cos_uno_prep, tru_cos_una_prep, tru_cos_rt_prep,
        tru_cos_qty_wrap, tru_cos_uno_wrap, tru_cos_una_wrap, tru_cos_rt_wrap,
        ot_war_qty_prep, ot_war_uno_prep, ot_war_una_prep, ot_war_rt_prep,
        ot_war_qty_wrap, ot_war_uno_wrap, ot_war_una_wrap, ot_war_rt_wrap,
        shopper_qty, shopper_uno, shopper_una, shopper_rt,
        shopper_qty_prep, shopper_uno_prep, shopper_una_prep, shopper_rt_prep,
        tailors, textile_ar, cos_coor,
        costume_designer_quantity, costume_designer_units_number,
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
        fringes_taxes_wardrobe, } = postDataWardrobe;

    // handleChange 
    const handleChange = (event) => {
        setPostDataWardrobe({
        ...postDataWardrobe,
        [event.target.name]: parseFloat(event.target.value.replace(/\D/g,'') || 0 ),
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

    // costume designer
    // function to calculate costume designer shoot on change
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
        // eslint-disable-next-line
    }, [costume_designer_quantity, costume_designer_units_number,
    costume_designer_rate]);

    // function to calculate costume designer prep on change
    useEffect(() => {
        const addCosdesprep = () => {
        setCosdesprepTotal(parseFloat(cos_des_qty_prep || 0) * 
        parseFloat(cos_des_uno_prep || 0) * 
        parseFloat(cos_des_rt_prep || 0))
        }
        const timer = setTimeout(() => {
            addCosdesprep();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [cos_des_qty_prep, cos_des_uno_prep, cos_des_rt_prep]);

    // function to calculate costume designer wrap on change
    useEffect(() => {
        const addCosdeswrap = () => {
        setCosdeswrapTotal(parseFloat(cos_des_qty_wrap || 0) * 
        parseFloat(cos_des_uno_wrap || 0) * 
        parseFloat(cos_des_rt_wrap || 0))
        }
        const timer = setTimeout(() => {
            addCosdeswrap();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [cos_des_qty_wrap, cos_des_uno_wrap, cos_des_rt_wrap]);

    // function to calculate costume designer all on change
    useEffect(() => {
        const addCosdesall = () => {
        setCosdesallTotal(parseFloat(costumedesignerTotal || 0) +
        parseFloat(cosdesprepTotal || 0) +
        parseFloat(cosdeswrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addCosdesall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [costumedesignerTotal, cosdesprepTotal, cosdeswrapTotal]);
    
    // function to calculate assistant costume designer shoot on change
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
        // eslint-disable-next-line
    }, [assist_costume_designer_quantity, assist_costume_designer_units_number,
    assist_costume_designer_rate]);

    // function to calculate assistant costume designer prep on change
    useEffect(() => {
        const addAsscosprep = () => {
        setAscosdesprepTotal(parseFloat(as_cos_des_qty_prep || 0) * 
        parseFloat(as_cos_des_uno_prep || 0) * 
        parseFloat(as_cos_des_rt_prep || 0))
        }
        const timer = setTimeout(() => {
            addAsscosprep();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [as_cos_des_qty_prep, as_cos_des_uno_prep, as_cos_des_rt_prep]);

    // function to calculate assistant costume designer wrap on change
    useEffect(() => {
        const addAsscoswrap = () => {
        setAscosdeswrapTotal(parseFloat(as_cos_des_qty_wrap || 0) * 
        parseFloat(as_cos_des_uno_wrap || 0) * 
        parseFloat(as_cos_des_rt_wrap || 0))
        }
        const timer = setTimeout(() => {
            addAsscoswrap();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [as_cos_des_qty_wrap, as_cos_des_uno_wrap, as_cos_des_rt_wrap]);

    // function to calculate assistant costume designer all on change
    useEffect(() => {
        const addAsscosall = () => {
        setAscosdesallTotal(parseFloat(assistcosdesignerTotal || 0) +
        parseFloat(ascosdesprepTotal || 0) +
        parseFloat(ascosdeswrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addAsscosall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [assistcosdesignerTotal, ascosdesprepTotal, ascosdeswrapTotal]);

    // head wardrobe/supervisor
    // function to calculate head wardrobe shoot on change
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
        // eslint-disable-next-line
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
        // eslint-disable-next-line
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
        // eslint-disable-next-line
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
        // eslint-disable-next-line
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
        parseFloat(fringes_taxes_wardrobe || 0) +
        parseFloat(otherwardrobeTotal || 0)
        )
        }
        const timer = setTimeout(() => {
            addWarlab();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
        }, [costumedesignerTotal, assistcosdesignerTotal, headwardrobeTotal,
            wardrobeassistTotal, truckcostumerTotal, otherwardrobeTotal,
            fringes_taxes_wardrobe,]);


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
    {/* Fringes and Taxes */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>14.70</p>
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
    <Form.Group controlId="fringes_taxes_wardrobe" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="fringes_taxes_wardrobe"
        value={fringes_taxes_wardrobe}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.fringes_taxes_wardrobe?.map((message, idx) => (
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
    <p className={ `${styles.Bold} pb-0 mb-0`}>WARDROBE TOTAL</p>
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