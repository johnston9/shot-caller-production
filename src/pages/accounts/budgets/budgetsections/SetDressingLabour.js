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
        swinggangTotal, setSwinggangTotal, setShow,
        dressingbuyerTotal, setDressingbuyerTotal,
        dressinglabourTotal, setDressinglabourTotal,
        decsetprepTotal, setDecsetprepTotal,
        decsetwrapTotal, setDecsetwrapTotal,
        decsetallTotal, setDecsetallTotal,
        assdsetprepTotal, setAssdsetprepTotal,
        assdsetwrapTotal, setAssdsetwrapTotal,
        assdsetallTotal, setAssdsetallTotal,
        leadmanprepTotal, setLeadmanprepTotal,
        leadmanwrapTotal, setLeadmanwrapTotal,
        leadmanallTotal, setLeadmanallTotal,
        dressprepTotal, setDressprepTotal,
        dresswrapTotal, setDresswrapTotal,
        dressallTotal, setDressallTotal,
        swinggprepTotal, setSwinggprepTotal,
        swinggwrapTotal, setSwinggwrapTotal,
        swinggallTotal, setSwinggallTotal,
        dressbuyprepTotal, setDressbuyprepTotal,
        dressbuywrapTotal, setDressbuywrapTotal,
        dressbuyallTotal, setDressbuyallTotal,
    } = props;

    // Set Dressing Labour values
    const {days6th7th_unit_dres, days6th7th_dres, overtime_unit_dres, overtime_dres,
        holidays_unit_dres, holidays_dres, box_rent_unit_dres, box_rent_dres,
        set_dec_qty_prep, set_dec_uno_prep, set_dec_una_prep, set_dec_rt_prep,
        set_dec_qty_wrap, set_dec_uno_wrap, set_dec_una_wrap, set_dec_rt_wrap,
        ass_set_d_qty_prep, ass_set_d_uno_prep, ass_set_d_una_prep, ass_set_d_rt_prep,
        ass_set_d_qty_wrap, ass_set_d_uno_wrap, ass_set_d_una_wrap, ass_set_d_rt_wrap,
        lead_man_qty_prep, lead_man_uno_prep, lead_man_una_prep, lead_man_rt_prep,
        lead_man_qty_wrap, lead_man_uno_wrap, lead_man_una_wrap, lead_man_rt_wrap,
        set_dres_qty_prep, set_dres_uno_prep, set_dres_una_prep, set_dres_rt_prep,
        set_dres_qty_wrap, set_dres_uno_wrap, set_dres_una_wrap, set_dres_rt_wrap,
        swing_g_qty_prep, swing_g_uno_prep, swing_g_una_prep, swing_g_rt_prep,
        swing_g_qty_wrap, swing_g_uno_wrap, swing_g_una_wrap, swing_g_rt_wrap,
        set_d_buy_qty_prep, set_d_buy_uno_prep, set_d_buy_una_prep, set_d_buy_rt_prep,
        set_d_buy_qty_wrap, set_d_buy_uno_wrap, set_d_buy_una_wrap, set_d_buy_rt_wrap,
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
        other_set_dressing, fringes_taxes_dressing,
    } = postDataSetDressing;

    // handleChange 
    const handleChange = (event) => {
        setPostDataSetDressing({
        ...postDataSetDressing,
        [event.target.name]: parseFloat(event.target.value.replace(/\D/g,'') || 0 ),
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
    // set decorator
    // function to calculate set decorator shoot on change
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

    // function to calculate set decorator prep on change
    useEffect(() => {
        const addSetdecprep = () => {
        setDecsetprepTotal(parseFloat(set_dec_qty_prep || 0) * 
        parseFloat(set_dec_uno_prep || 0) * 
        parseFloat(set_dec_rt_prep || 0))
        }
        const timer = setTimeout(() => {
            addSetdecprep();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [set_dec_qty_prep, set_dec_uno_prep, set_dec_rt_prep]);

    // function to calculate set decorator wrap on change
    useEffect(() => {
        const addSetdecwrap = () => {
        setDecsetwrapTotal(parseFloat(set_dec_qty_wrap || 0) * 
        parseFloat(set_dec_uno_wrap || 0) * 
        parseFloat(set_dec_rt_wrap || 0))
        }
        const timer = setTimeout(() => {
            addSetdecwrap();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [set_dec_qty_wrap, set_dec_uno_wrap, set_dec_rt_wrap]);

    // function to add all set decorator on change 
    useEffect(() => {
    const addSetDecor = () => {
      setDecsetallTotal(
      parseFloat(decoratorsetTotal || 0) +
      parseFloat(decsetprepTotal || 0) +
      parseFloat(decsetwrapTotal || 0) 
      )
    }
    const timer = setTimeout(() => {
        addSetDecor();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
    }, [decoratorsetTotal, decsetprepTotal, decsetwrapTotal]);

    // assistant set decorator
    // function to calculate assistant set decorator shoot on change
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

    // function to calculate assistant set decorator prep on change
    useEffect(() => {
        const addAssdecprep = () => {
        setAssdsetprepTotal(parseFloat(ass_set_d_qty_prep || 0) * 
        parseFloat(ass_set_d_uno_prep || 0) * 
        parseFloat(ass_set_d_rt_prep || 0))
        }
        const timer = setTimeout(() => {
            addAssdecprep();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [ass_set_d_qty_prep, ass_set_d_uno_prep, ass_set_d_rt_prep]);

    // function to calculate assistant set decorator wrap on change
    useEffect(() => {
        const addAssdecwrap = () => {
        setAssdsetwrapTotal(parseFloat(ass_set_d_qty_wrap || 0) * 
        parseFloat(ass_set_d_uno_wrap || 0) * 
        parseFloat(ass_set_d_rt_wrap || 0))
        }
        const timer = setTimeout(() => {
            addAssdecwrap();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [ass_set_d_qty_wrap, ass_set_d_uno_wrap, ass_set_d_rt_wrap]);

    // function to calculate all assistant set decorator on change
    useEffect(() => {
        const addAssdecall = () => {
          setAssdsetallTotal(
          parseFloat(assistdecoratorsetTotal || 0) +
          parseFloat(assdsetprepTotal || 0) +
          parseFloat(assdsetwrapTotal || 0) 
          )
        }
        const timer = setTimeout(() => {
            addAssdecall();
        }, 1000);
    
        return () => {
          clearTimeout(timer);
        };
        // eslint-disable-next-line
      }, [assistdecoratorsetTotal, assdsetprepTotal, assdsetwrapTotal]);

    // lead man
    // function to calculate lead man shoot on change
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

    // function to calculate lead man prep on change
    useEffect(() => {
        const addLeamanprep = () => {
        setLeadmanprepTotal(parseFloat(lead_man_qty_prep || 0) * 
        parseFloat(lead_man_uno_prep || 0) * 
        parseFloat(lead_man_rt_prep || 0))
        }
        const timer = setTimeout(() => {
            addLeamanprep();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [lead_man_qty_prep, lead_man_uno_prep, lead_man_rt_prep]);

    // function to calculate lead man wrap on change
    useEffect(() => {
        const addLeamanwrap = () => {
        setLeadmanwrapTotal(parseFloat(lead_man_qty_wrap || 0) * 
        parseFloat(lead_man_uno_wrap || 0) * 
        parseFloat(lead_man_rt_wrap || 0))
        }
        const timer = setTimeout(() => {
            addLeamanwrap();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [lead_man_qty_wrap, lead_man_uno_wrap, lead_man_rt_wrap]);

    // function to calculate lead man all on change
    useEffect(() => {
        const addLeadManall = () => {
          setLeadmanallTotal(
          parseFloat(leadmanTotal || 0) +
          parseFloat(leadmanprepTotal || 0) +
          parseFloat(leadmanwrapTotal || 0) 
          )
        }
        const timer = setTimeout(() => {
            addLeadManall();
        }, 1000);
    
        return () => {
          clearTimeout(timer);
        };
        // eslint-disable-next-line
      }, [leadmanTotal, leadmanprepTotal, leadmanwrapTotal]);

    // set dressers
    // function to calculate set dressers shoot on change
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

    // function to calculate set dressers prep on change
    useEffect(() => {
        const addDressprep = () => {
        setDressprepTotal(parseFloat(set_dres_qty_prep || 0) * 
        parseFloat(set_dres_uno_prep || 0) * 
        parseFloat(set_dres_rt_prep || 0))
        }
        const timer = setTimeout(() => {
            addDressprep();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [set_dres_qty_prep, set_dres_uno_prep, set_dres_rt_prep]);

    // function to calculate set dressers wrap on change
    useEffect(() => {
        const addDresswrap = () => {
        setDresswrapTotal(parseFloat(set_dres_qty_wrap || 0) * 
        parseFloat(set_dres_uno_wrap || 0) * 
        parseFloat(set_dres_rt_wrap || 0))
        }
        const timer = setTimeout(() => {
            addDresswrap();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [set_dres_qty_wrap, set_dres_uno_wrap, set_dres_rt_wrap]);

    // function to add all set dressers on change 
    useEffect(() => {
    const addSetDecall = () => {
      setDressallTotal(
      parseFloat(dressersTotal || 0) +
      parseFloat(dressprepTotal || 0) +
      parseFloat(dresswrapTotal || 0) 
      )
    }
    const timer = setTimeout(() => {
        addSetDecall();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [dressersTotal, dressprepTotal, dresswrapTotal]);

    // swing gang
    // function to calculate swing gang shoot on change
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

    // function to calculate swing gang prep on change
    useEffect(() => {
        const addSwiGanprep = () => {
        setSwinggprepTotal(parseFloat(swing_g_qty_prep || 0) * 
        parseFloat(swing_g_uno_prep || 0) * 
        parseFloat(swing_g_rt_prep || 0))
        }
        const timer = setTimeout(() => {
            addSwiGanprep();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [swing_g_qty_prep, swing_g_uno_prep, swing_g_rt_prep]);

    // function to calculate swing gang wrap on change
    useEffect(() => {
        const addSwiGanwrap = () => {
        setSwinggwrapTotal(parseFloat(swing_g_qty_wrap || 0) * 
        parseFloat(swing_g_uno_wrap || 0) * 
        parseFloat(swing_g_rt_wrap || 0))
        }
        const timer = setTimeout(() => {
            addSwiGanwrap();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [swing_g_qty_wrap, swing_g_uno_wrap, swing_g_rt_wrap]);

    // function to add all swing gang on change 
    useEffect(() => {
    const addSwiGanall = () => {
      setSwinggallTotal(
      parseFloat(swinggangTotal || 0) +
      parseFloat(swinggprepTotal || 0) +
      parseFloat(swinggwrapTotal || 0) 
      )
    }
    const timer = setTimeout(() => {
        addSwiGanall();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [swinggangTotal, swinggprepTotal, swinggwrapTotal]);

    // set dressing buyer
    // function to calculate set dressing buyer shoot on change
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

    // function to calculate set dressing buyer prep on change
    useEffect(() => {
        const addDrebuyprep = () => {
        setDressbuyprepTotal(parseFloat(set_d_buy_qty_prep || 0) * 
        parseFloat(set_d_buy_uno_prep || 0) * 
        parseFloat(set_d_buy_rt_prep || 0))
        }
        const timer = setTimeout(() => {
            addDrebuyprep();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [set_d_buy_qty_prep, set_d_buy_uno_prep, set_d_buy_rt_prep]);

    // function to calculate set dressing buyer wrap on change
    useEffect(() => {
        const addDrebuywrap = () => {
        setDressbuywrapTotal(parseFloat(set_d_buy_qty_wrap || 0) * 
        parseFloat(set_d_buy_uno_wrap || 0) * 
        parseFloat(set_d_buy_rt_wrap || 0))
        }
        const timer = setTimeout(() => {
            addDrebuywrap();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [set_d_buy_qty_wrap, set_d_buy_uno_wrap, set_d_buy_rt_wrap]);

    // function to add all set dressing buyer on change 
    useEffect(() => {
    const addDrebuyall = () => {
      setDressbuyallTotal(
      parseFloat(dressingbuyerTotal || 0) +
      parseFloat(dressbuyprepTotal || 0) +
      parseFloat(dressbuywrapTotal || 0) 
      )
    }
    const timer = setTimeout(() => {
        addDrebuyall();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [dressingbuyerTotal, dressbuyprepTotal, dressbuywrapTotal]);
    
    // function to add all Set Dressing Labour on change
    useEffect(() => {
        const addDreLab = () => {
        setDressinglabourTotal(
        parseFloat(decsetallTotal || 0) +
        parseFloat(assdsetallTotal || 0) +
        parseFloat(leadmanallTotal || 0) +
        parseFloat(dressallTotal || 0) +
        parseFloat(swinggallTotal || 0) +
        parseFloat(dressingbuyerTotal || 0) +
        parseFloat(days6th7th_dres || 0) +
        parseFloat(overtime_dres || 0) +
        parseFloat(holidays_dres || 0) +
        parseFloat(box_rent_dres || 0) +
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
        }, [decsetallTotal, assdsetallTotal, leadmanallTotal,
            dressallTotal, swinggallTotal, dressbuyallTotal,
            days6th7th_dres, overtime_dres, holidays_dres, box_rent_dres,
            other_set_dressing, fringes_taxes_dressing,]);

  return (
    <div className={`${styles.WhiteBack} mt-3 mb-5`}>
    <Row className="mx-0" >
    <Col md={12}
        className={ `${styles.Overview} py-0 text-center`}>
            <span className={`${styles.Close } py-1 mb-0 float-right `} 
    onClick={() => setShow(false) } >Close</span>
    <p className="pl-5 py-1">
    SET DRESSING SECTION
    </p>
    </Col>
    <Col md={2} >
    </Col>
    </Row>
    <div className="px-2" >
    <Row className={`mt-3`}>
    <Col md={1} >
    <p className={`${styles.Underline}`}>10.00</p>
    </Col>
    <Col md={9} >
    <p className={ `${styles.BoldBlack}`}>Set Dressing Labour</p>
    </Col>
    <Col md={2}>
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
    {/* Set Decorator */}
    <div className="mt-2"> 
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}>10.10</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack}`}>Set Decorator</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row className="py-0 d-flex align-items-center mb-1">
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="set_dec_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="set_dec_qty_prep"
        value={set_dec_qty_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.set_dec_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="set_dec_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="set_dec_uno_prep"
        value={set_dec_uno_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.set_dec_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="set_dec_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="set_dec_una_prep"
        value={set_dec_una_prep}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.set_dec_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="set_dec_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="set_dec_rt_prep"
        value={set_dec_rt_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.set_dec_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="decsetprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="decsetprepTotal"
        value={decsetprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.decsetprepTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Shoot */}
    <Row className="py-0 d-flex align-items-center mb-1">
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Shoot</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="set_decorator_quantity" 
        className={`${styles.Width95} text-center mb-0`} >
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
        className={`${styles.Width95} text-center mb-0`} >
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
        className={`${styles.Width95} text-center mb-0`} >
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
        className={`${styles.Width95} text-center mb-0`} >
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
        className={`${styles.Width95} text-center mb-0`} >
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
    {/* Wrap */}
    <Row className="py-0 d-flex align-items-center mb-1">
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="set_dec_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="set_dec_qty_wrap"
        value={set_dec_qty_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.set_dec_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="set_dec_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="set_dec_uno_wrap"
        value={set_dec_uno_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.set_dec_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="set_dec_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="set_dec_una_wrap"
        value={set_dec_una_wrap}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.set_dec_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="set_dec_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="set_dec_rt_wrap"
        value={set_dec_rt_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.set_dec_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="decsetwrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="decsetwrapTotal"
        value={decsetwrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.decsetwrapTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Total */}
    <Row className="py-0 d-flex align-items-center">
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={9} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="decsetallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="decsetallTotal"
        value={decsetallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.decsetallTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-1 mb-0`}/>
    </Col>
    </Row>
    {/* Assistant Set Decorator start here */}
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
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-1 mb-0`}/>
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
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-1 mb-0`}/>
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
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-1 mb-0`}/>
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
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-1 mb-0`}/>
    </Col>
    </Row>
    {/* Set Dressing Buyer */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>10.60</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Set Dressing Buyer</p>
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
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-1 mb-0`}/>
    </Col>
    </Row>
    {/* 6th/7th Days */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} >
    <p className={`${styles.Underline}`}>10.70</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.BoldBlack}`}>6th/7th Days</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="days6th7th_unit_dres" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="days6th7th_unit_dres"
        value={days6th7th_unit_dres}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.days6th7th_unit_dres?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="days6th7th_dres" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="days6th7th_dres"
        value={days6th7th_dres}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.days6th7th_dres?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Overtime */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} >
    <p className={`${styles.Underline}`}>10.80</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.BoldBlack}`}>Overtime</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="overtime_unit_dres" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="overtime_unit_dres"
        value={overtime_unit_dres}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.overtime_unit_dres?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="overtime_dres" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="overtime_dres"
        value={overtime_dres}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.overtime_dres?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Holidays */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} >
    <p className={`${styles.Underline}`}>10.90</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.BoldBlack}`}>Holidays</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="holidays_unit_dres" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="holidays_unit_dres"
        value={holidays_unit_dres}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.holidays_unit_dres?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="holidays_dres" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="holidays_dres"
        value={holidays_dres}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.holidays_dres?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Box Rentals */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} >
    <p className={`${styles.Underline}`}>10.91</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.BoldBlack}`}>Box Rentals </p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="box_rent_unit_dres" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="box_rent_unit_dres"
        value={box_rent_unit_dres}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.box_rent_unit_dres?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="box_rent_dres" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="box_rent_dres"
        value={box_rent_dres}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.box_rent_dres?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Other Dressing*/}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>10.92</p>
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
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Fringes and Taxes */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>10.93</p>
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
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Set Dressing Total */}
    <Row className="mt-3 pb-2">
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
    </div>
  )
}

export default SetDressingLabour