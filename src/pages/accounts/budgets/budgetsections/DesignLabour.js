/* Component in the Budget component to edit Design */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const DesignLabour = (props) => {
    // eslint-disable-next-line
    const [errors, setErrors] = useState({});

    const {postDataDesign, setPostDataDesign, setShow,
        productiondesignerTotal, setProductiondesignerTotal,
        artdirectorTotal, setArtdirectorTotal,
        artassistantsTotal, setArtassistantsTotal,
        productionassistantstraineesTotal, setProductionassistantstraineesTotal,
        graphicartistsTotal, setGraphicartistsTotal,
        designlabourTotal, setDesignlabourTotal,
        prodesprepTotal, setProdesprepTotal,
        prodeswrapTotal, setProdeswrapTotal,
        prodesallTotal, setProdesallTotal,
        artdirprepTotal, setArtdirprepTotal,
        artdirwrapTotal, setArtdirwrapTotal,
        artdirallTotal, setArtdirallTotal,
        artassprepTotal, setArtassprepTotal,
        artasswrapTotal, setArtasswrapTotal,
        artassallTotal, setArtassallTotal,
        proasstrainprepTotal, setProasstrainprepTotal,
        proasstrainwrapTotal, setProasstrainwrapTotal,
        proasstrainallTotal, setProasstrainallTotal,
        graphicartprepTotal, setGraphicartprepTotal,
        graphicartallTotal, setGraphicartallTotal,
        // new
        supartdirTotal, setSupartdirTotal,
        supartdirprepTotal, setSupartdirprepTotal,
        supartdirallTotal, setSupartdirpallTotal,
        setdesTotal, setSetdesTotal,
        setdesprepTotal, setSetdesprepTotal,
        setdesallTotal, setSetdesallTotal,
        jundraughtTotal, setJundraughtTotal,
        jundraprepTotal, setJundraprepTotal,
        jundraallTotal, setJundraallTotal,
        standbyartTotal, setStandbyartTotal,
        stbyartprepTotal, setStbyartprepTotal,
        stbyartallTotal, setStbyartallTotal,
        artcoorTotal, setArtcoorTotal,
        artcoorprepTotal, setArtcoorprepTotal,
        artcoorwrapTotal, setArtcoorwrapTotal,
        artcoorallTotal, setArtcoorallTotal,
    } = props;
    
    const {supervart_qty, supervart_uno,
        supervart_una, supervart_rt,
        supervart_qty_prep, supervart_uno_prep,
        supervart_una_prep, supervart_rt_prep,
        art_dep_coor_qty, art_dep_coor_uno,
        art_dep_coor_una, art_dep_coor_rt,
        art_dep_coor_qty_prep, art_dep_coor_uno_prep,
        art_dep_coor_una_prep, art_dep_coor_rt_prep,
        art_dep_coor_qty_wrap, art_dep_coor_uno_wrap,
        art_dep_coor_una_wrap, art_dep_coor_rt_wrap,
        set_design_qty, set_design_uno,
        set_design_una, set_design_rt,
        set_design_qty_prep, set_design_uno_prep,
        set_design_una_prep, set_design_rt_prep,
        junior_draught_qty, junior_draught_uno,
        junior_draught_una, junior_draught_rt,
        junior_draught_qty_prep, junior_draught_uno_prep,
        junior_draught_una_prep, junior_draught_rt_prep,
        standby_art_qty, standby_art_uno,
        standby_art_una, standby_art_rt,
        standby_art_qty_prep, standby_art_uno_prep,
        standby_art_una_prep, standby_art_rt_prep,
        pro_designer_qty_prep, pro_designer_uno_prep,
        pro_designer_una_prep, pro_designer_rt_prep,
        pro_designer_qty_wrap, pro_designer_uno_wrap,
        pro_designer_una_wrap, pro_designer_rt_wrap,
        art_director_qty_prep, art_director_uno_prep,
        art_director_una_prep, art_director_rt_prep,
        art_director_qty_wrap, art_director_uno_wrap,
        art_director_una_wrap, art_director_rt_wrap,
        art_ass_qty_prep, art_ass_uno_prep,
        art_ass_una_prep, art_ass_rt_prep,
        art_ass_qty_wrap, art_ass_uno_wrap,
        art_ass_una_wrap, art_ass_rt_wrap,
        pro_ass_trainees_qty_prep, pro_ass_trainees_uno_prep,
        pro_ass_trainees_una_prep, pro_ass_trainees_rt_prep,
        pro_ass_trainees_qty_wrap, pro_ass_trainees_uno_wrap,
        pro_ass_trainees_una_wrap, pro_ass_trainees_rt_wrap,
        sketch_artists, sketch_artists_unit,
        storyboard_artists, storyboard_artists_unit,
        holidays_design, holidays_unit_design,
        overtime_design, overtime_unit_design,
        days6th7th_design, days6th7th_unit_design,
        box_rent_unit_design, box_rent_design,
        fringes_taxes_design,
        production_designer_quantity, production_designer_units_number,
        production_designer_units_name, production_designer_rate,
        art_director_quantity, art_director_units_number,
        art_director_units_name, art_director_rate,
        art_assistants_quantity, art_assistants_units_number,
        art_assistants_units_name, art_assistants_rate,
        production_assistants_trainees_quantity, production_assistants_trainees_units_number,
        production_assistants_trainees_units_name, production_assistants_trainees_rate,
        graphic_artists_quantity, graphic_artists_units_number,
        graphic_artists_units_name, graphic_artists_rate, other_design,
    } = postDataDesign;
  
  // handleChange1 - replace(/\D/g,'') - works but no decimal
  const handleChangeDesign = (event) => {
    setPostDataProduction({
    ...postDataProduction,
    [event.target.name]: parseFloat(event.target.value.replace(/\D/g,'') || 0 ),
    });
  };          
            
  // Design handleChange - parseFloat
//   const handleChangeDesign = (event) => {
//     setPostDataDesign({
//       ...postDataDesign,
//       [event.target.name]: parseFloat(event.target.value || 0 ),
//     });
//   }; 

  // Design handleChange Text 
  const handleChangeDesignText = (event) => {
    setPostDataDesign({
      ...postDataDesign,
      [event.target.name]: event.target.value,
    });
  };

  // Calculate Functions

  // production designer
  // function to calculate production designer shoot on change
  useEffect(() => {
    const addProdes = () => {
      setProductiondesignerTotal(parseFloat(production_designer_quantity || 0) * 
      parseFloat(production_designer_units_number || 0) * 
      parseFloat(production_designer_rate || 0))
    }
    const timer = setTimeout(() => {
        addProdes();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [production_designer_quantity, production_designer_units_number, 
  production_designer_rate]);

  // function to calculate production designer prep on change
  useEffect(() => {
    const addProdesprep = () => {
      setProdesprepTotal(parseFloat(pro_designer_qty_prep || 0) * 
      parseFloat(pro_designer_uno_prep || 0) * 
      parseFloat(pro_designer_rt_prep || 0))
    }
    const timer = setTimeout(() => {
        addProdesprep();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [pro_designer_qty_prep, pro_designer_uno_prep, 
  pro_designer_rt_prep]);

  // function to calculate production designer wrap on change
  useEffect(() => {
    const addProdeswrap = () => {
      setProdeswrapTotal(parseFloat(pro_designer_qty_wrap || 0) * 
      parseFloat(pro_designer_uno_wrap || 0) * 
      parseFloat(pro_designer_rt_wrap || 0))
    }
    const timer = setTimeout(() => {
        addProdeswrap();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [pro_designer_qty_wrap, pro_designer_uno_wrap,
  pro_designer_rt_wrap]);

  // function to add all production designer on change 
  useEffect(() => {
    const addProDes = () => {
      setProdesallTotal(
      parseFloat(productiondesignerTotal || 0) +
      parseFloat(prodesprepTotal || 0) +
      parseFloat(prodeswrapTotal || 0) 
      )
    }
    const timer = setTimeout(() => {
        addProDes();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [productiondesignerTotal, prodesprepTotal, prodeswrapTotal]);

  // art director
  // function to calculate art director shoot on change
  useEffect(() => {
    const addArtdir = () => {
      setArtdirectorTotal(parseFloat(art_director_quantity || 0) * 
      parseFloat(art_director_units_number || 0) * 
      parseFloat(art_director_rate || 0))
    }
    const timer = setTimeout(() => {
        addArtdir();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [art_director_quantity, art_director_units_number, 
  art_director_rate]);

  // function to calculate art director prep on change
  useEffect(() => {
    const addArtdirprep = () => {
      setArtdirprepTotal(parseFloat(art_director_qty_prep || 0) * 
      parseFloat(art_director_uno_prep || 0) * 
      parseFloat(art_director_rt_prep || 0))
    }
    const timer = setTimeout(() => {
        addArtdirprep();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [art_director_qty_prep, art_director_uno_prep, 
  art_director_rt_prep]);

  // function to calculate art director wrap on change
  useEffect(() => {
    const addArtdirwrap = () => {
      setArtdirwrapTotal(parseFloat(art_director_qty_wrap || 0) * 
      parseFloat(art_director_uno_wrap || 0) * 
      parseFloat(art_director_rt_wrap || 0))
    }
    const timer = setTimeout(() => {
        addArtdirwrap();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [art_director_qty_wrap, art_director_uno_wrap,
  art_director_rt_wrap]);

  // function to add all art director on change 
  useEffect(() => {
    const addArtDir = () => {
      setArtdirallTotal(
      parseFloat(artdirectorTotal || 0) +
      parseFloat(artdirprepTotal || 0) +
      parseFloat(artdirwrapTotal || 0) 
      )
    }
    const timer = setTimeout(() => {
        addArtDir();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [artdirectorTotal, artdirprepTotal, artdirwrapTotal]);

  // art assistants
  // function to calculate art assistants shoot on change
  useEffect(() => {
    const addArtass = () => {
      setArtassistantsTotal(parseFloat(art_assistants_quantity || 0) * 
      parseFloat(art_assistants_units_number || 0) * 
      parseFloat(art_assistants_rate || 0))
    }
    const timer = setTimeout(() => {
        addArtass();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [art_assistants_quantity, art_assistants_units_number, 
  art_assistants_rate]);

  // function to calculate art assistants prep on change
  useEffect(() => {
    const addArtassprep = () => {
      setArtassprepTotal(parseFloat(art_ass_qty_prep || 0) * 
      parseFloat(art_ass_uno_prep || 0) * 
      parseFloat(art_ass_rt_prep || 0))
    }
    const timer = setTimeout(() => {
        addArtassprep();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [art_ass_qty_prep, art_ass_uno_prep, art_ass_rt_prep]);

  // function to calculate art assistants wrap on change
  useEffect(() => { 
    const addArtasswrap = () => {
      setArtasswrapTotal(parseFloat(art_ass_qty_wrap || 0) * 
      parseFloat(art_ass_uno_wrap || 0) * 
      parseFloat(art_ass_rt_wrap || 0))
    }
    const timer = setTimeout(() => {   
        addArtasswrap();  
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [art_ass_qty_wrap, art_ass_uno_wrap, art_ass_rt_wrap]);

  // function to add all art assistants on change 
  useEffect(() => {
    const addArtAss = () => {
      setArtassallTotal(
      parseFloat(artassistantsTotal || 0) +
      parseFloat(artassprepTotal || 0) +
      parseFloat(artasswrapTotal || 0) 
      )
    }
    const timer = setTimeout(() => {
        addArtAss();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [artassistantsTotal, artassprepTotal, artasswrapTotal]);

  // production assistants/trainees
  // function to calculate production assistants/trainees shoot on change
  useEffect(() => {
    const addProasstra = () => {
      setProductionassistantstraineesTotal(parseFloat(production_assistants_trainees_quantity || 0) * 
      parseFloat(production_assistants_trainees_units_number || 0) * 
      parseFloat(production_assistants_trainees_rate || 0))
    }
    const timer = setTimeout(() => {
        addProasstra();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [production_assistants_trainees_quantity, production_assistants_trainees_units_number, 
  production_assistants_trainees_rate]);

  // function to calculate production assistants/trainees prep on change
  useEffect(() => {
    const addProasstraprep = () => {
      setProasstrainprepTotal(parseFloat(pro_ass_trainees_qty_prep || 0) * 
      parseFloat(pro_ass_trainees_uno_prep || 0) * 
      parseFloat(pro_ass_trainees_rt_prep || 0))
    }
    const timer = setTimeout(() => {
        addProasstraprep();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [pro_ass_trainees_qty_prep, pro_ass_trainees_uno_prep, 
  pro_ass_trainees_rt_prep]);

  // function to calculate production assistants/trainees wrap on change
  useEffect(() => {
    const addProasstrawrap = () => {
      setProasstrainwrapTotal(parseFloat(pro_ass_trainees_qty_wrap || 0) * 
      parseFloat(pro_ass_trainees_uno_wrap || 0) * 
      parseFloat(pro_ass_trainees_rt_wrap || 0))
    }
    const timer = setTimeout(() => {
        addProasstrawrap();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [pro_ass_trainees_qty_wrap, pro_ass_trainees_uno_wrap,
  pro_ass_trainees_rt_wrap]);

  // function to add all production assistants/trainees on change 
  useEffect(() => {
    const addProAssTra = () => {
      setProasstrainallTotal(
      parseFloat(productionassistantstraineesTotal || 0) +
      parseFloat(proasstrainprepTotal || 0) +
      parseFloat(proasstrainwrapTotal || 0) 
      )
    }
    const timer = setTimeout(() => {
        addProAssTra();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [productionassistantstraineesTotal, proasstrainprepTotal,
    proasstrainwrapTotal]);

  // graphic artists start here add new prep and all
  // function to calculate graphic artists on change
  useEffect(() => {
    const addGraart = () => {
      setGraphicartistsTotal(parseFloat(graphic_artists_quantity || 0) * 
      parseFloat(graphic_artists_units_number || 0) * 
      parseFloat(graphic_artists_rate || 0))
    }
    const timer = setTimeout(() => {
        addGraart();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [graphic_artists_quantity, graphic_artists_units_number, 
  graphic_artists_rate]);

  // new start here
  // supervising art director
  // function to calculate supervising art director shoot on change
  useEffect(() => {
    const addArtdirsup = () => {
      setSupartdirTotal(parseFloat(art_director_quantity || 0) * 
      parseFloat(art_director_units_number || 0) * 
      parseFloat(art_director_rate || 0))
    }
    const timer = setTimeout(() => {
        addArtdirsup();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [art_director_quantity, art_director_units_number, 
  art_director_rate]);

  // function to calculate art director prep on change
  useEffect(() => {
    const addArtdirprep = () => {
      setArtdirprepTotal(parseFloat(art_director_qty_prep || 0) * 
      parseFloat(art_director_uno_prep || 0) * 
      parseFloat(art_director_rt_prep || 0))
    }
    const timer = setTimeout(() => {
        addArtdirprep();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [art_director_qty_prep, art_director_uno_prep, 
  art_director_rt_prep]);

  // function to calculate art director wrap on change
  useEffect(() => {
    const addArtdirwrap = () => {
      setArtdirwrapTotal(parseFloat(art_director_qty_wrap || 0) * 
      parseFloat(art_director_uno_wrap || 0) * 
      parseFloat(art_director_rt_wrap || 0))
    }
    const timer = setTimeout(() => {
        addArtdirwrap();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [art_director_qty_wrap, art_director_uno_wrap,
  art_director_rt_wrap]);

  // function to add all art director on change 
  useEffect(() => {
    const addArtDir = () => {
      setArtdirallTotal(
      parseFloat(artdirectorTotal || 0) +
      parseFloat(artdirprepTotal || 0) +
      parseFloat(artdirwrapTotal || 0) 
      )
    }
    const timer = setTimeout(() => {
        addArtDir();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [artdirectorTotal, artdirprepTotal, artdirwrapTotal]);
  // end new

  // function to add all design on change
  useEffect(() => {
    const addDesign = () => {
      setDesignlabourTotal(
      parseFloat(productiondesignerTotal || 0) +
      parseFloat(artdirectorTotal || 0) +
      parseFloat(artassistantsTotal || 0) +
      parseFloat(productionassistantstraineesTotal || 0) +
      parseFloat(graphicartistsTotal || 0) +
      parseFloat(fringes_taxes_design || 0) +
      parseFloat(sketch_artists || 0) +
      parseFloat(storyboard_artists || 0) +
      parseFloat(holidays_design || 0) +
      parseFloat(overtime_design || 0) +
      parseFloat(days6th7th_design || 0) +
      parseFloat(box_rent_design || 0) +
      parseFloat(other_design || 0)
      )
    }
    const timer = setTimeout(() => {
        addDesign();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [other_design, graphicartistsTotal, productionassistantstraineesTotal,
    artassistantsTotal, artdirectorTotal, productiondesignerTotal,
    fringes_taxes_design, sketch_artists, storyboard_artists,
    holidays_design, overtime_design, days6th7th_design, box_rent_design]);

  return (
    <div className="mt-5">
    <Row >
    <Col md={1} >
    <p className="mb-2">08.00</p>
    </Col>
    <Col md={9} >
    <p className={ `${styles.BoldBlack} mb-2`}>Design Labour</p>
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
    {/* Production Designer */}
    <div>
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>08.10</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Production Designer</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Prep</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="pro_designer_qty_prep" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="pro_designer_qty_prep"
        value={pro_designer_qty_prep}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.pro_designer_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="pro_designer_uno_prep" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="pro_designer_uno_prep"
        value={pro_designer_uno_prep}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.pro_designer_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="pro_designer_una_prep" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="pro_designer_una_prep"
        value={pro_designer_una_prep}
        onChange={handleChangeDesignText}
            />
    </Form.Group>
    {errors?.pro_designer_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="pro_designer_rt_prep" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="pro_designer_rt_prep"
        value={pro_designer_rt_prep}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.pro_designer_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="prodesprepTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="prodesprepTotal"
        value={prodesprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.prodesprepTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Shoot */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Shoot</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_designer_quantity" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_designer_quantity"
        value={production_designer_quantity}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.production_designer_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_designer_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_designer_units_number"
        value={production_designer_units_number}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.production_designer_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_designer_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_designer_units_name"
        value={production_designer_units_name}
        onChange={handleChangeDesignText}
            />
    </Form.Group>
    {errors?.production_designer_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_designer_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_designer_rate"
        value={production_designer_rate}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.production_designer_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="productiondesignerTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="productiondesignerTotal"
        value={productiondesignerTotal}
        readOnly
            />
    </Form.Group>
    {errors?.productiondesignerTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Wrap */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Wrap</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="pro_designer_qty_wrap" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="pro_designer_qty_wrap"
        value={pro_designer_qty_wrap}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.pro_designer_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="pro_designer_uno_wrap" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="pro_designer_uno_wrap"
        value={pro_designer_uno_wrap}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.pro_designer_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="pro_designer_una_wrap" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="pro_designer_una_wrap"
        value={pro_designer_una_wrap}
        onChange={handleChangeDesignText}
            />
    </Form.Group>
    {errors?.pro_designer_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="pro_designer_rt_wrap" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="pro_designer_rt_wrap"
        value={pro_designer_rt_wrap}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.pro_designer_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="prodeswrapTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="prodeswrapTotal"
        value={prodeswrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.prodeswrapTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Total */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={9} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="prodesallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="prodesallTotal"
        value={prodesallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.prodesallTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
    {/* Supervising Art Director */}
    <div>
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>08.20</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Supervising Art Director</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Prep</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="supervart_qty_prep" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="supervart_qty_prep"
        value={supervart_qty_prep}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.supervart_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="supervart_uno_prep" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="supervart_uno_prep"
        value={supervart_uno_prep}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.supervart_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="supervart_una_prep" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="supervart_una_prep"
        value={supervart_una_prep}
        onChange={handleChangeDesignText}
            />
    </Form.Group>
    {errors?.supervart_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="supervart_rt_prep" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="supervart_rt_prep"
        value={supervart_rt_prep}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.supervart_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="supartdirprepTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="supartdirprepTotal"
        value={supartdirprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.supartdirprepTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Shoot */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Shoot</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="supervart_qty" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="supervart_qty"
        value={supervart_qty}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.supervart_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="supervart_uno" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="supervart_uno"
        value={supervart_uno}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.supervart_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="supervart_una" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="supervart_una"
        value={supervart_una}
        onChange={handleChangeDesignText}
            />
    </Form.Group>
    {errors?.supervart_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="supervart_rt" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="supervart_rt"
        value={supervart_rt}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.supervart_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="supartdirallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="supartdirallTotal"
        value={supartdirallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.supartdirallTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
    {/* Art Director */}
    <div>
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>08.30</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Art Director</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Prep</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="art_director_qty_prep" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="art_director_qty_prep"
        value={art_director_qty_prep}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.art_director_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="art_director_uno_prep" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="art_director_uno_prep"
        value={art_director_uno_prep}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.art_director_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="art_director_una_prep" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="art_director_una_prep"
        value={art_director_una_prep}
        onChange={handleChangeDesignText}
            />
    </Form.Group>
    {errors?.art_director_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="art_director_rt_prep" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="art_director_rt_prep"
        value={art_director_rt_prep}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.art_director_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="artdirprepTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="artdirprepTotal"
        value={artdirprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.artdirprepTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Shoot */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Shoot</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="art_director_quantity" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="art_director_quantity"
        value={art_director_quantity}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.art_director_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="art_director_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="art_director_units_number"
        value={art_director_units_number}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.art_director_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="art_director_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="art_director_units_name"
        value={art_director_units_name}
        onChange={handleChangeDesignText}
            />
    </Form.Group>
    {errors?.art_director_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="art_director_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="art_director_rate"
        value={art_director_rate}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.art_director_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="artdirectorTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="artdirectorTotal"
        value={artdirectorTotal}
        readOnly
            />
    </Form.Group>
    {errors?.artdirectorTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Wrap */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Wrap</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="art_director_qty_wrap" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="art_director_qty_wrap"
        value={art_director_qty_wrap}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.art_director_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="art_director_uno_wrap" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="art_director_uno_wrap"
        value={art_director_uno_wrap}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.art_director_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="art_director_una_wrap" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="art_director_una_wrap"
        value={art_director_una_wrap}
        onChange={handleChangeDesignText}
            />
    </Form.Group>
    {errors?.art_director_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="art_director_rt_wrap" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="art_director_rt_wrap"
        value={art_director_rt_wrap}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.art_director_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="artdirwrapTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="artdirwrapTotal"
        value={artdirwrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.artdirwrapTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Total */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={9} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="artdirallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="artdirallTotal"
        value={artdirallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.artdirallTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
    {/* Standby Art Director */}
    <div>
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>08.40</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Standby Art Director</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Prep</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="standby_art_qty_prep" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="standby_art_qty_prep"
        value={standby_art_qty_prep}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.standby_art_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="standby_art_uno_prep" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="standby_art_uno_prep"
        value={standby_art_uno_prep}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.standby_art_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="standby_art_una_prep" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="standby_art_una_prep"
        value={standby_art_una_prep}
        onChange={handleChangeDesignText}
            />
    </Form.Group>
    {errors?.standby_art_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="standby_art_rt_prep" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="standby_art_rt_prep"
        value={standby_art_rt_prep}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.standby_art_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="stbyartprepTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stbyartprepTotal"
        value={stbyartprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.stbyartprepTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Shoot */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Shoot</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="standby_art_qty" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="standby_art_qty"
        value={standby_art_qty}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.standby_art_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="standby_art_uno" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="standby_art_uno"
        value={standby_art_uno}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.standby_art_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="standby_art_una" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="standby_art_una"
        value={standby_art_una}
        onChange={handleChangeDesignText}
            />
    </Form.Group>
    {errors?.standby_art_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="standby_art_rt" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="standby_art_rt"
        value={standby_art_rt}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.standby_art_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="standbyartTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="standbyartTotal"
        value={standbyartTotal}
        readOnly
            />
    </Form.Group>
    {errors?.standbyartTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Total */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={9} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="stbyartallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stbyartallTotal"
        value={stbyartallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.stbyartallTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
    {/* Art Assistants */}
    <div>
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>08.50</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Art Assistants</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Prep</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="art_ass_qty_prep" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="art_ass_qty_prep"
        value={art_ass_qty_prep}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.art_ass_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="art_ass_uno_prep" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="art_ass_uno_prep"
        value={art_ass_uno_prep}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.art_ass_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="art_ass_una_prep" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="art_ass_una_prep"
        value={art_ass_una_prep}
        onChange={handleChangeDesignText}
            />
    </Form.Group>
    {errors?.art_ass_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="art_ass_rt_prep" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="art_ass_rt_prep"
        value={art_ass_rt_prep}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.art_ass_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="artassprepTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="artassprepTotal"
        value={artassprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.artassprepTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Shoot */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Shoot</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="art_assistants_quantity" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="art_assistants_quantity"
        value={art_assistants_quantity}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.art_assistants_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="art_assistants_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="art_assistants_units_number"
        value={art_assistants_units_number}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.art_assistants_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="art_assistants_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="art_assistants_units_name"
        value={art_assistants_units_name}
        onChange={handleChangeDesignText}
            />
    </Form.Group>
    {errors?.art_assistants_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="art_assistants_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="art_assistants_rate"
        value={art_assistants_rate}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.art_assistants_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="artassistantsTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="artassistantsTotal"
        value={artassistantsTotal}
        readOnly
            />
    </Form.Group>
    {errors?.artassistantsTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Wrap */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Wrap</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="art_ass_qty_wrap" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="art_ass_qty_wrap"
        value={art_ass_qty_wrap}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.art_ass_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="art_ass_uno_wrap" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="art_ass_uno_wrap"
        value={art_ass_uno_wrap}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.art_ass_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="art_ass_una_wrap" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="art_ass_una_wrap"
        value={art_ass_una_wrap}
        onChange={handleChangeDesignText}
            />
    </Form.Group>
    {errors?.art_ass_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="art_ass_rt_wrap" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="art_ass_rt_wrap"
        value={art_ass_rt_wrap}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.art_ass_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="artasswrapTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="artasswrapTotal"
        value={artasswrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.artasswrapTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Total */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={9} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="artassallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="artassallTotal"
        value={artassallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.artassallTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
    {/* Set Designer/Draughtsperson */}
    <div>
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>08.60</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Set Designer/Draughtsperson</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Prep</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="set_design_qty_prep" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="set_design_qty_prep"
        value={set_design_qty_prep}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.set_design_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="set_design_uno_prep" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="set_design_uno_prep"
        value={set_design_uno_prep}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.set_design_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="set_design_una_prep" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="set_design_una_prep"
        value={set_design_una_prep}
        onChange={handleChangeDesignText}
            />
    </Form.Group>
    {errors?.set_design_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="set_design_rt_prep" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="set_design_rt_prep"
        value={set_design_rt_prep}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.set_design_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="setdesprepTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="setdesprepTotal"
        value={setdesprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.setdesprepTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Shoot */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Shoot</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="set_design_qty" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="set_design_qty"
        value={set_design_qty}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.set_design_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="set_design_uno" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="set_design_uno"
        value={set_design_uno}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.set_design_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="set_design_una" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="set_design_una"
        value={set_design_una}
        onChange={handleChangeDesignText}
            />
    </Form.Group>
    {errors?.set_design_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="set_design_rt" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="set_design_rt"
        value={set_design_rt}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.set_design_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="setdesTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="setdesTotal"
        value={setdesTotal}
        readOnly
            />
    </Form.Group>
    {errors?.setdesTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Total */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={9} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="setdesallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="setdesallTotal"
        value={setdesallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.setdesallTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
    {/* Junior Draughtsperson 08.70 */}
    {/* Production Assistants/Trainees */}
    <div>
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>08.40</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Production Assistants / Trainees</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Prep</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="pro_ass_trainees_qty_prep" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="pro_ass_trainees_qty_prep"
        value={pro_ass_trainees_qty_prep}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.pro_ass_trainees_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="pro_ass_trainees_uno_prep" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="pro_ass_trainees_uno_prep"
        value={pro_ass_trainees_uno_prep}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.pro_ass_trainees_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="pro_ass_trainees_una_prep" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="pro_ass_trainees_una_prep"
        value={pro_ass_trainees_una_prep}
        onChange={handleChangeDesignText}
            />
    </Form.Group>
    {errors?.pro_ass_trainees_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="pro_ass_trainees_rt_prep" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="pro_ass_trainees_rt_prep"
        value={pro_ass_trainees_rt_prep}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.pro_ass_trainees_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="proasstrainprepTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="proasstrainprepTotal"
        value={proasstrainprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.proasstrainprepTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Shoot */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Shoot</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_assistants_trainees_quantity" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_assistants_trainees_quantity"
        value={production_assistants_trainees_quantity}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.production_assistants_trainees_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_assistants_trainees_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_assistants_trainees_units_number"
        value={production_assistants_trainees_units_number}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.production_assistants_trainees_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_assistants_trainees_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_assistants_trainees_units_name"
        value={production_assistants_trainees_units_name}
        onChange={handleChangeDesignText}
            />
    </Form.Group>
    {errors?.production_assistants_trainees_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_assistants_trainees_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_assistants_trainees_rate"
        value={production_assistants_trainees_rate}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.production_assistants_trainees_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="productionassistantstraineesTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="productionassistantstraineesTotal"
        value={productionassistantstraineesTotal}
        readOnly
            />
    </Form.Group>
    {errors?.productionassistantstraineesTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Wrap */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Wrap</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="pro_ass_trainees_qty_wrap" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="pro_ass_trainees_qty_wrap"
        value={pro_ass_trainees_qty_wrap}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.pro_ass_trainees_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="pro_ass_trainees_uno_wrap" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="pro_ass_trainees_uno_wrap"
        value={pro_ass_trainees_uno_wrap}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.pro_ass_trainees_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="pro_ass_trainees_una_wrap" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="pro_ass_trainees_una_wrap"
        value={pro_ass_trainees_una_wrap}
        onChange={handleChangeDesignText}
            />
    </Form.Group>
    {errors?.pro_ass_trainees_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="pro_ass_trainees_rt_wrap" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="pro_ass_trainees_rt_wrap"
        value={pro_ass_trainees_rt_wrap}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.pro_ass_trainees_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="proasstrainwrapTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="proasstrainwrapTotal"
        value={proasstrainwrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.proasstrainwrapTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Total */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={9} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="proasstrainallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="proasstrainallTotal"
        value={proasstrainallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.proasstrainallTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
    {/* Graphic Artists 08.80  */}
    <div>
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>08.50</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Graphic Artists</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="graphic_artists_quantity" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="graphic_artists_quantity"
        value={graphic_artists_quantity}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.graphic_artists_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="graphic_artists_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="graphic_artists_units_number"
        value={graphic_artists_units_number}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.graphic_artists_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="graphic_artists_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="graphic_artists_units_name"
        value={graphic_artists_units_name}
        onChange={handleChangeDesignText}
            />
    </Form.Group>
    {errors?.graphic_artists_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="graphic_artists_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="graphic_artists_rate"
        value={graphic_artists_rate}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.graphic_artists_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="graphicartistsTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="graphicartistsTotal"
        value={graphicartistsTotal}
        readOnly
            />
    </Form.Group>
    {errors?.graphicartistsTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
    {/* Art Department Coordinator 08.90 */}
    {/* Illustrator */}
    {/* Story Board Artist */}
    {/* Other*/}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>08.60</p>
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
    <Form.Group controlId="other_design" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_design"
        value={other_design}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.other_design?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Fringes and Taxes */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>08.70</p>
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
    <Form.Group controlId="fringes_taxes_design" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="fringes_taxes_design"
        value={fringes_taxes_design}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.fringes_taxes_design?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Design Total */}
    <Row className="mt-3">
    <Col md={1} >
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL DESIGN</p>
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
    <Form.Group controlId="designlabourTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="designlabourTotal"
        value={designlabourTotal}
        readOnly
            />
    </Form.Group>
    {errors?.designlabourTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
  )
}

export default DesignLabour