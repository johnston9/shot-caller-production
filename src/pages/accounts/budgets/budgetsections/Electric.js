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
        electriclabourTotal, setElectriclabourTotal,
        gafprepTotal, setGafprepTotal,
        gafwrapTotal, setGafwrapTotal,
        gafallTotal, setGafallTotal,
        bboyprepTotal, setBboyprepTotal,
        bboywrapTotal, setBboywrapTotal,
        bboyallTotal, setBboyallTotal,
        elecprepTotal, setElecprepTotal,
        elecwrapTotal, setElecwrapTotal,
        elecallTotal, setElecallTotal,
        daelecprepTotal, setDaelecprepTotal,
        daelecwrapTotal, setDaelecwrapTotal,
        daelecallTotal, setDaelecallTotal,
        genopprepTotal, setGenopprepTotal,
        genopwrapTotal, setGenopwrapTotal,
        genopallTotal, setGenopallTotal,
        otelecprepTotal, setOtelecprepTotal, 
        otelecwrapTotal, setOtelecwrapTotal,
        otelecallTotal, setOtelecallTotal,
    } = props;
    
    const {days6th7th_unit_ele,days6th7th_ele,
        overtime_unit_ele, overtime_ele, holidays_unit_ele, 
        holidays_ele, box_rent_unit_ele, box_rent_ele, other_solo_ele,
        gaf_qty_prep, gaf_uno_prep, gaf_una_prep, gaf_rt_prep, 
        gaf_qty_wrap, gaf_uno_wrap, gaf_una_wrap, gaf_rt_wrap,
        b_boy_qty_prep, b_boy_uno_prep, b_boy_una_prep, b_boy_rt_prep,
        b_boy_qty_wrap, b_boy_uno_wrap, b_boy_una_wrap, b_boy_rt_wrap,
        elec_qty_prep, elec_uno_prep, elec_una_prep, elec_rt_prep,
        elec_qty_wrap, elec_uno_wrap, elec_una_wrap, elec_rt_wrap,
        d_elec_qty_prep, d_elec_uno_prep, d_elec_una_prep, d_elec_rt_prep,
        d_elec_qty_wrap, d_elec_uno_wrap, d_elec_una_wrap, d_elec_rt_wrap,
        gen_op_qty_prep, gen_op_uno_prep, gen_op_una_prep, gen_op_rt_prep,
        gen_op_qty_wrap, gen_op_uno_wrap, gen_op_una_wrap, gen_op_rt_wrap,
        ot_el_qty_prep, ot_el_uno_prep, ot_el_una_prep, ot_el_rt_prep,
        ot_el_qty_wrap, ot_el_uno_wrap, ot_el_una_wrap, ot_el_rt_wrap,
        gaffer_qty, gaffer_uno, gaffer_una, gaffer_rt,
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
        [event.target.name]: event.target.value.replace(/[^0-9.]/g, ''),
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

    // gaffer
    // function to calculate gaffer shoot on change
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

    // function to calculate gaffer prep on change
    useEffect(() => {
        const addGafprep = () => {
        setGafprepTotal(parseFloat(gaf_qty_prep || 0) * 
        parseFloat(gaf_uno_prep || 0) * 
        parseFloat(gaf_rt_prep || 0))
        }
        const timer = setTimeout(() => {
            addGafprep();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [gaf_qty_prep, gaf_uno_prep, gaf_rt_prep]);

    // function to calculate gaffer wrap on change
    useEffect(() => {
        const addGafwrap = () => {
        setGafwrapTotal(parseFloat(gaf_qty_wrap || 0) * 
        parseFloat(gaf_uno_wrap || 0) * 
        parseFloat(gaf_rt_wrap || 0))
        }
        const timer = setTimeout(() => {
            addGafwrap();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [gaf_qty_wrap, gaf_uno_wrap, gaf_rt_wrap]);

    // function to calculate gaffer all on change
    useEffect(() => {
        const addGafall = () => {
        setGafallTotal(parseFloat(gafferTotal || 0) +
        parseFloat(gafprepTotal || 0) +
        parseFloat(gafwrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addGafall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [gafferTotal, gafprepTotal, gafwrapTotal]);

    // best boy 
    // function to calculate best boy shoot on change
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

    // function to calculate best boy prep on change
    useEffect(() => {
        const addBesboyprep = () => {
        setBboyprepTotal(parseFloat(b_boy_qty_prep || 0) * 
        parseFloat(b_boy_uno_prep || 0) * 
        parseFloat(b_boy_rt_prep || 0))
        }
        const timer = setTimeout(() => {
            addBesboyprep();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [b_boy_qty_prep, b_boy_uno_prep, b_boy_rt_prep]);

    // function to calculate best boy wrap on change
    useEffect(() => {
        const addBesboywrap = () => {
        setBboywrapTotal(parseFloat(b_boy_qty_wrap || 0) * 
        parseFloat(b_boy_uno_wrap || 0) * 
        parseFloat(b_boy_rt_wrap || 0))
        }
        const timer = setTimeout(() => {
            addBesboywrap();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [b_boy_qty_wrap, b_boy_uno_wrap, b_boy_rt_wrap]);

    // function to calculate best boy all on change
    useEffect(() => {
        const addBesboyall = () => {
        setBboyallTotal(parseFloat(bestboyTotal || 0) +
        parseFloat(bboyprepTotal || 0) +
        parseFloat(bboywrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addBesboyall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [bestboyTotal, bboyprepTotal, bboywrapTotal]);

    // electrician
    // function to calculate electrician shoot on change
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

    // function to calculate electrician prep on change
    useEffect(() => {
        const addElectrprep = () => {
        setElecprepTotal(parseFloat(elec_qty_prep || 0) * 
        parseFloat(elec_uno_prep || 0) * 
        parseFloat(elec_rt_prep || 0))
        }
        const timer = setTimeout(() => {
            addElectrprep();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [elec_qty_prep, elec_uno_prep, elec_rt_prep]);

    // function to calculate electrician wrap on change
    useEffect(() => {
        const addElectrwrap = () => {
        setElecwrapTotal(parseFloat(elec_qty_wrap || 0) * 
        parseFloat(elec_uno_wrap || 0) * 
        parseFloat(elec_rt_wrap || 0))
        }
        const timer = setTimeout(() => {
            addElectrwrap();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [elec_qty_wrap, elec_uno_wrap, elec_rt_wrap]);

    // function to calculate electrician all on change
    useEffect(() => {
        const addElectrall = () => {
        setElecallTotal(parseFloat(electricianTotal || 0) +
        parseFloat(elecprepTotal || 0) +
        parseFloat(elecwrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addElectrall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [electricianTotal, elecprepTotal, elecwrapTotal]);

    // dailies
    // function to calculate dailies shoot on change
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

    // function to calculate dailies prep on change
    useEffect(() => {
        const addDaielprep = () => {
        setDaelecprepTotal(parseFloat(d_elec_qty_prep || 0) * 
        parseFloat(d_elec_uno_prep || 0) * 
        parseFloat(d_elec_rt_prep || 0))
        }
        const timer = setTimeout(() => {
            addDaielprep();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
      }, [d_elec_qty_prep, d_elec_uno_prep, d_elec_rt_prep]);

    // function to calculate dailies wrap on change
    useEffect(() => {
        const addDaielwrap = () => {
        setDaelecwrapTotal(parseFloat(d_elec_qty_wrap || 0) * 
        parseFloat(d_elec_uno_wrap || 0) * 
        parseFloat(d_elec_rt_wrap || 0))
        }
        const timer = setTimeout(() => {
            addDaielwrap();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [d_elec_qty_wrap, d_elec_uno_wrap, d_elec_rt_wrap]);

    // function to calculate dailies all on change
    useEffect(() => {
        const addDaielall = () => {
        setDaelecallTotal(parseFloat(dailieselecTotal || 0) +
        parseFloat(daelecprepTotal || 0) +
        parseFloat(daelecwrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addDaielall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [dailieselecTotal, daelecprepTotal, daelecwrapTotal]);

    // generator operator
    // function to calculate generator operator shoot on change
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

    // function to calculate generator operator prep on change
    useEffect(() => {
        const addGeropprep = () => {
        setGenopprepTotal(parseFloat(gen_op_qty_prep || 0) * 
        parseFloat(gen_op_uno_prep || 0) * 
        parseFloat(gen_op_rt_prep || 0))
        }
        const timer = setTimeout(() => {
            addGeropprep();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [gen_op_qty_prep, gen_op_uno_prep, gen_op_rt_prep]);

    // function to calculate generator operator wrap on change
    useEffect(() => {
        const addGeropwrap = () => {
        setGenopwrapTotal(parseFloat(gen_op_qty_wrap || 0) * 
        parseFloat(gen_op_uno_wrap || 0) * 
        parseFloat(gen_op_rt_wrap || 0))
        }
        const timer = setTimeout(() => {
            addGeropwrap();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [gen_op_qty_wrap, gen_op_uno_wrap, gen_op_rt_wrap]);

    // function to calculate generator operator all on change
    useEffect(() => {
        const addGeropall = () => {
        setGenopallTotal(parseFloat(generatoropTotal || 0) +
        parseFloat(genopprepTotal || 0) +
        parseFloat(genopwrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addGeropall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [generatoropTotal, genopprepTotal, genopwrapTotal]);

    // other elec
    // function to calculate other elec shoot on change
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

    // function to calculate other elec prep on change
    useEffect(() => {
        const addOthelprep = () => {
        setOtelecprepTotal(parseFloat(ot_el_qty_prep || 0) * 
        parseFloat(ot_el_uno_prep || 0) * 
        parseFloat(ot_el_rt_prep || 0))
        }
        const timer = setTimeout(() => {
            addOthelprep();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [ot_el_qty_prep, ot_el_uno_prep, ot_el_rt_prep]);

    // function to calculate other elec wrap on change
    useEffect(() => {
        const addOthelwrap = () => {
        setOtelecwrapTotal(parseFloat(ot_el_qty_wrap || 0) * 
        parseFloat(ot_el_uno_wrap || 0) * 
        parseFloat(ot_el_rt_wrap || 0))
        }
        const timer = setTimeout(() => {
            addOthelwrap();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [ot_el_qty_wrap, ot_el_uno_wrap, ot_el_rt_wrap]);

    // function to calculate other elec all on change
    useEffect(() => {
        const addOthelall = () => {
        setOtelecallTotal(parseFloat(otherelectricTotal || 0) +
        parseFloat(otelecprepTotal || 0) +
        parseFloat(otelecwrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addOthelall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [otherelectricTotal, otelecprepTotal, otelecwrapTotal]);

    // function to add all Electric Labour on change
    useEffect(() => {
        const AddEleLab = () => {
        setElectriclabourTotal(
        parseFloat(gafallTotal || 0) +
        parseFloat(bboyallTotal || 0) +
        parseFloat(elecallTotal || 0) +
        parseFloat(daelecallTotal || 0) +
        parseFloat(genopallTotal || 0) +
        parseFloat(otelecallTotal || 0) +
        parseFloat(days6th7th_ele || 0) +
        parseFloat(overtime_ele || 0) +
        parseFloat(holidays_ele || 0) +
        parseFloat(box_rent_ele || 0) +
        parseFloat(other_solo_ele || 0) +
        parseFloat(fringes_taxes_electric || 0)
        )
        }
        const timer = setTimeout(() => {
            AddEleLab();
        }, 1000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
        }, [gafallTotal, bboyallTotal, elecallTotal,
            genopallTotal, otelecallTotal, daelecallTotal,
            days6th7th_ele, overtime_ele, holidays_ele, 
            box_rent_ele, other_solo_ele, fringes_taxes_electric,
    ]);

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