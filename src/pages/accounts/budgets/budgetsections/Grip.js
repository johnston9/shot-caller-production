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
           griplabourTotal, setGriplabourTotal,
           kgripprepTotal, setKgripprepTotal,
           kgripwrapTotal, setKgripwrapTotal,
           kgripallTotal, setKgripallTotal,
           bbgripprepTotal, setBbgripprepTotal,
           bbgripwrapTotal, setBbgripwrapTotal,
           bbgripallTotal, setBbgripallTotal,
           gripsprepTotal, setGripsprepTotal,
           gripswrapTotal, setGripswrapTotal,
           gripsallTotal, setGripsallTotal,
           dolgripprepTotal, setDolgripprepTotal,
           dolgripwrapTotal, setDolgripwrapTotal,
           dolgripallTotal, setDolgripallTotal,
           swigripsprepTotal, setSwigripsprepTotal,
           swigripswrapTotal, setSwigripswrapTotal,
           swigripsallTotal, setSwigripsallTotal,
           othgripprepTotal, setOthgripprepTotal,
           othgripwrapTotal, setOthgripwrapTotal,
           othgripallTotal, setOthgripallTotal,
        } = props;

    const {days6th7th_unit_grip, days6th7th_grip, overtime_unit_grip,
    overtime_grip, holidays_unit_grip, 
    holidays_grip, box_rent_unit_grip, box_rent_grip, other_solo_grip,
    k_grip_qty_prep, k_grip_uno_prep, k_grip_una_prep, k_grip_rt_prep,
    k_grip_qty_wrap, k_grip_uno_wrap, k_grip_una_wrap, k_grip_rt_wrap, 
    bb_grip_qty_prep, bb_grip_uno_prep, bb_grip_una_prep, bb_grip_rt_prep,
    bb_grip_qty_wrap, bb_grip_uno_wrap, bb_grip_una_wrap, bb_grip_rt_wrap,
    grips_qty_prep, grips_uno_prep, grips_una_prep, grips_rt_prep,
    grips_qty_wrap, grips_uno_wrap, grips_una_wrap, grips_rt_wrap,
    dol_grip_qty_prep, dol_grip_uno_prep, dol_grip_una_prep, dol_grip_rt_prep,
    dol_grip_qty_wrap, dol_grip_uno_wrap, dol_grip_una_wrap, dol_grip_rt_wrap,
    sw_grips_qty_prep, sw_grips_uno_prep, sw_grips_una_prep, sw_grips_rt_prep,
    sw_grips_qty_wrap, sw_grips_uno_wrap, sw_grips_una_wrap, sw_grips_rt_wrap,
    oth_grip_qty_prep, oth_grip_uno_prep, oth_grip_una_prep, oth_grip_rt_prep,
    oth_grip_qty_wrap, oth_grip_uno_wrap, oth_grip_una_wrap, oth_grip_rt_wrap,
    key_grip_qty, key_grip_uno, key_grip_una, key_grip_rt,
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
      [event.target.name]: event.target.value.replace(/[^0-9.]/g, ''),
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

    // key grip
    // function to calculate key grip shoot on change
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

    // function to calculate key grip prep on change
    useEffect(() => {
        const addKetgriprep = () => {
        setKgripprepTotal(parseFloat(k_grip_qty_prep || 0) * 
        parseFloat(k_grip_uno_prep || 0) * 
        parseFloat(k_grip_rt_prep || 0))
        }
        const timer = setTimeout(() => {
            addKetgriprep();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [k_grip_qty_prep, k_grip_uno_prep, k_grip_rt_prep]);

    // function to calculate key grip wrap on change
    useEffect(() => {
        const addKetgriwrap = () => {
        setKgripwrapTotal(parseFloat(k_grip_qty_wrap || 0) * 
        parseFloat(k_grip_uno_wrap || 0) * 
        parseFloat(k_grip_rt_wrap || 0))
        }
        const timer = setTimeout(() => {
            addKetgriwrap();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [k_grip_qty_wrap, k_grip_uno_wrap, k_grip_rt_wrap]);

    // function to calculate key grip all on change
    useEffect(() => {
        const addKetgriall = () => {
        setKgripallTotal(parseFloat(keygripTotal || 0) +
        parseFloat(kgripprepTotal || 0) +
        parseFloat(kgripwrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addKetgriall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [keygripTotal, kgripprepTotal, kgripwrapTotal]);

    // best boy grip
    // function to calculate best boy grip shoot on change
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

    // function to calculate best boy grip prep on change
    useEffect(() => {
        const addBbgriprep = () => {
        setBbgripprepTotal(parseFloat(bb_grip_qty_prep || 0) * 
        parseFloat(bb_grip_uno_prep || 0) * 
        parseFloat(bb_grip_rt_prep || 0))
        }
        const timer = setTimeout(() => {
            addBbgriprep();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [bb_grip_qty_prep, bb_grip_uno_prep, bb_grip_rt_prep]);

    // function to calculate best boy grip wrap on change
    useEffect(() => {
        const addBbgriwrap = () => {
        setBbgripwrapTotal(parseFloat(bb_grip_qty_wrap || 0) * 
        parseFloat(bb_grip_uno_wrap || 0) * 
        parseFloat(bb_grip_rt_wrap || 0))
        }
        const timer = setTimeout(() => {
            addBbgriwrap();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [bb_grip_qty_wrap, bb_grip_uno_wrap, bb_grip_rt_wrap]);

    // function to calculate best boy grip all on change
    useEffect(() => {
        const addBbgriall = () => {
        setBbgripallTotal(parseFloat(bestboygripTotal || 0) +
        parseFloat(bbgripprepTotal || 0) +
        parseFloat(bbgripwrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addBbgriall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [bestboygripTotal, bbgripprepTotal, bbgripwrapTotal]);

    // grips
    // function to calculate grips shoot on change
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

    // function to calculate grips prep on change
    useEffect(() => {
        const addGriprep = () => {
        setGripsprepTotal(parseFloat(grips_qty_prep || 0) * 
        parseFloat(grips_uno_prep || 0) * 
        parseFloat(grips_rt_prep || 0))
        }
        const timer = setTimeout(() => {
            addGriprep();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [grips_qty_prep, grips_uno_prep, grips_rt_prep]);

    // function to calculate grips wrap on change
    useEffect(() => {
        const addGriwrap = () => {
        setGripswrapTotal(parseFloat(grips_qty_wrap || 0) * 
        parseFloat(grips_uno_wrap || 0) * 
        parseFloat(grips_rt_wrap || 0))
        }
        const timer = setTimeout(() => {
            addGriwrap();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [grips_qty_wrap, grips_uno_wrap, grips_rt_wrap]);

    // function to calculate grips all on change
    useEffect(() => {
        const addGriall = () => {
        setGripsallTotal(parseFloat(gripsTotal || 0) +
        parseFloat(gripsprepTotal || 0) +
        parseFloat(gripswrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addGriall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [gripsTotal, gripsprepTotal, gripswrapTotal]);

    // dolly crane grip
    // function to calculate dolly crane grip shoot on change
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

    // function to calculate dolly crane grip prep on change
    useEffect(() => {
        const addDolcraprep = () => {
        setDolgripprepTotal(parseFloat(dol_grip_qty_prep || 0) * 
        parseFloat(dol_grip_uno_prep || 0) * 
        parseFloat(dol_grip_rt_prep || 0))
        }
        const timer = setTimeout(() => {
            addDolcraprep();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [dol_grip_qty_prep, dol_grip_uno_prep, dol_grip_rt_prep]);

    // function to calculate dolly crane grip wrap on change
    useEffect(() => {
        const addDolcrawrap = () => {
        setDolgripwrapTotal(parseFloat(dol_grip_qty_wrap || 0) * 
        parseFloat(dol_grip_uno_wrap || 0) * 
        parseFloat(dol_grip_rt_wrap || 0))
        }
        const timer = setTimeout(() => {
            addDolcrawrap();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [dol_grip_qty_wrap, dol_grip_uno_wrap, dol_grip_rt_wrap]);

    // function to calculate dolly crane grip all on change
    useEffect(() => {
        const addDolcraall = () => {
        setDolgripallTotal(parseFloat(dollycranegripTotal || 0) +
        parseFloat(dolgripprepTotal || 0) +
        parseFloat(dolgripwrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addDolcraall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [dollycranegripTotal, dolgripprepTotal, dolgripwrapTotal]);

    // swing grips
    // function to calculate swing grips shoot on change
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

    // function to calculate swing grips prep on change
    useEffect(() => {
        const addSwigriprep = () => {
        setSwigripsprepTotal(parseFloat(sw_grips_qty_prep || 0) * 
        parseFloat(sw_grips_uno_prep || 0) * 
        parseFloat(sw_grips_rt_prep || 0))
        }
        const timer = setTimeout(() => {
            addSwigriprep();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [sw_grips_qty_prep, sw_grips_uno_prep, sw_grips_rt_prep]);

    // function to calculate swing grips wrap on change
    useEffect(() => {
        const addSwigriwrap = () => {
        setSwigripswrapTotal(parseFloat(sw_grips_qty_wrap || 0) * 
        parseFloat(sw_grips_uno_wrap || 0) * 
        parseFloat(sw_grips_rt_wrap || 0))
        }
        const timer = setTimeout(() => {
            addSwigriwrap();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [sw_grips_qty_wrap, sw_grips_uno_wrap, sw_grips_rt_wrap]);

    // function to calculate swing grips all on change
    useEffect(() => {
        const addSwigriall = () => {
        setSwigripsallTotal(parseFloat(swinggripsTotal || 0) +
        parseFloat(swigripsprepTotal || 0) +
        parseFloat(swigripswrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addSwigriall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [swinggripsTotal, swigripsprepTotal, swigripswrapTotal]);

    // other grip labour
    // function to calculate other grip labour shoot on change
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

    // function to calculate other grip labour prep on change
    useEffect(() => {
        const addOthgriprep = () => {
        setOthgripprepTotal(parseFloat(oth_grip_qty_prep || 0) * 
        parseFloat(oth_grip_uno_prep || 0) * 
        parseFloat(oth_grip_rt_prep || 0))
        }
        const timer = setTimeout(() => {
            addOthgriprep();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [oth_grip_qty_prep, oth_grip_uno_prep, oth_grip_rt_prep]);

    // function to calculate other grip labour wrap on change
    useEffect(() => {
        const addOthgriwrap = () => {
        setOthgripwrapTotal(parseFloat(oth_grip_qty_wrap || 0) * 
        parseFloat(oth_grip_uno_wrap || 0) * 
        parseFloat(oth_grip_rt_wrap || 0))
        }
        const timer = setTimeout(() => {
            addOthgriwrap();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [oth_grip_qty_wrap, oth_grip_uno_wrap, oth_grip_rt_wrap]);

    // function to calculate  other grip labour all on change
    useEffect(() => {
        const addOthgriall = () => {
        setOthgripallTotal(parseFloat(othergriplabourTotal || 0) +
        parseFloat(othgripprepTotal || 0) +
        parseFloat(othgripwrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addOthgriall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [othergriplabourTotal, othgripprepTotal, othgripwrapTotal]);

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

    // function to add all Grip Labour on change
    useEffect(() => {
      const AddGriLab = () => {
      setGriplabourTotal(
      parseFloat(kgripallTotal || 0) +
      parseFloat(bbgripallTotal || 0) +
      parseFloat(gripsallTotal || 0) +
      parseFloat(dolgripallTotal || 0) +
      parseFloat(swigripsallTotal || 0) +
      parseFloat(othgripallTotal || 0) +
      parseFloat(dailiesgripTotal || 0) +
      parseFloat(days6th7th_grip || 0) +
      parseFloat(overtime_grip || 0) +
      parseFloat(holidays_grip || 0) +
      parseFloat(box_rent_grip || 0) +
      parseFloat(other_solo_grip || 0) +
      parseFloat(fringes_taxes_grip || 0)
      )
      }
      const timer = setTimeout(() => {
        AddGriLab();
      }, 1000);

      return () => {
      clearTimeout(timer);
      };
      // eslint-disable-next-line
      }, [kgripallTotal, bbgripallTotal, gripsallTotal,
        dolgripallTotal, swigripsallTotal, othgripallTotal,
        dailiesgripTotal, days6th7th_grip, overtime_grip,
        holidays_grip, box_rent_grip, other_solo_grip,
        fringes_taxes_grip,]);
   
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