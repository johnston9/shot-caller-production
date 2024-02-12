/* Component in the Budget component to edit TV */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const TV = (props) => {
    // eslint-disable-next-line
    const [errors, setErrors] = useState({});

    const {postDataTV, setPostDataTV,
           techsuperTotal, setTechsuperTotal, 
           techdirectTotal, setTechdirectTotal,
           floormanTotal, setFloormanTotal,
           lightdirectTotal, setLightdirectTotal,
           boardmanTotal, setBoardmanTotal,
           audioTotal, setAudioTotal,
           vtroperatorTotal, setVtroperatorTotal,
           stagehandsTotal, setStagehandsTotal,
           othertvTotal, setOthertvTotal, setShow,
           tvspecificlabourTotal, setTvspecificlabourTotal,
           tecsupprepTotal, setTecsupprepTotal,
           tecsupwrapTotal, setTecsupwrapTotal,
           tecsupallTotal, setTecsupallTotal,
           tecdirprepTotal, setTecdirprepTotal,
           tecdirwrapTotal, setTecdirwrapTotal,
           tecdirallTotal, setTecdirallTotal,
           flomanprepTotal, setFlomanprepTotal,
           flomanwrapTotal, setFlomanwrapTotal,
           flomanallTotal, setFlomanallTotal,
           ligdirprepTotal, setLigdirprepTotal,
           ligdirwrapTotal, setLigdirwrapTotal,
           ligdirallTotal, setLigdirallTotal,
           boamanprepTotal, setBoamanprepTotal,
           boamanwrapTotal, setBoamanwrapTotal,
           boamanallTotal, setBoamanallTotal,
           audprepTotal, setAudprepTotal,
           audwrapTotal, setAudwrapTotal,
           audallTotal, setAudallTotal,
           vtropprepTotal, setVtropprepTotal,
           vtropwrapTotal, setVtropwrapTotal,
           vtropallTotal, setVtropallTotal,
           stagehprepTotal, setStagehprepTotal,
           stagehwrapTotal, setStagehwrapTotal,
           stagehallTotal, setStagehallTotal,
           othtvprepTotal, setOthtvprepTotal,
           othtvwrapTotal, setOthtvwrapTotal,
           othtvallTotal, setOthtvallTotal,
        } = props;

    const {days6th7th_unit_tv, days6th7th_tv, 
    overtime_unit_tv, overtime_tv, holidays_unit_tv, 
    holidays_tv, box_rent_unit_tv, box_rent_tv, other_solo_tv,
    tec_sup_qty_prep, tec_sup_uno_prep, tec_sup_una_prep, tec_sup_rt_prep,
    tec_sup_qty_wrap, tec_sup_uno_wrap, tec_sup_una_wrap, tec_sup_rt_wrap,
    tec_dir_qty_prep, tec_dir_uno_prep, tec_dir_una_prep, tec_dir_rt_prep,
    tec_dir_qty_wrap, tec_dir_uno_wrap, tec_dir_una_wrap, tec_dir_rt_wrap,
    flo_man_qty_prep, flo_man_uno_prep, flo_man_una_prep, flo_man_rt_prep,
    flo_man_qty_wrap, flo_man_uno_wrap, flo_man_una_wrap, flo_man_rt_wrap,
    lig_dir_qty_prep, lig_dir_uno_prep, lig_dir_una_prep, lig_dir_rt_prep,
    lig_dir_qty_wrap, lig_dir_uno_wrap, lig_dir_una_wrap, lig_dir_rt_wrap,
    boardm_qty_prep, boardm_uno_prep, boardm_una_prep, boardm_rt_prep,
    boardm_qty_wrap, boardm_uno_wrap, boardm_una_wrap, boardm_rt_wrap,
    audio_qty_prep, audio_uno_prep, audio_una_prep, audio_rt_prep,
    audio_qty_wrap, audio_uno_wrap, audio_una_wrap, audio_rt_wrap,
    vtr_op_qty_prep, vtr_op_uno_prep, vtr_op_una_prep, vtr_op_rt_prep,
    vtr_op_qty_wrap, vtr_op_uno_wrap, vtr_op_una_wrap, vtr_op_rt_wrap,
    stageh_qty_prep, stageh_uno_prep, stageh_una_prep, stageh_rt_prep,
    stageh_qty_wrap, stageh_uno_wrap, stageh_una_wrap, stageh_rt_wrap,
    oth_tv_qty_prep, oth_tv_uno_prep, oth_tv_una_prep, oth_tv_rt_prep,
    oth_tv_qty_wrap, oth_tv_uno_wrap, oth_tv_una_wrap, oth_tv_rt_wrap,
    tech_super_qty, tech_super_uno, tech_super_una, tech_super_rt,
    tech_direct_qty, tech_direct_uno, tech_direct_una, tech_direct_rt,
    floor_man_qty, floor_man_uno, floor_man_una, floor_man_rt, 
    light_direct_qty, light_direct_uno, light_direct_una, light_direct_rt,
    boardman_qty, boardman_uno, boardman_una, boardman_rt,
    audio_qty, audio_uno, audio_una, audio_rt,
    vtr_operator_qty, vtr_operator_uno, vtr_operator_una, vtr_operator_rt,
    stagehands_qty, stagehands_uno, stagehands_una, stagehands_rt,
    other_tv_qty, other_tv_uno, other_tv_una, other_tv_rt,
    fringes_taxes_tv,} = postDataTV;

    // handleChange 
    const handleChange = (event) => {
        setPostDataTV({
        ...postDataTV,
        [event.target.name]: event.target.value.replace(/[^0-9.]/g, ''),
        });
    }; 
  
    // handleChange Text 
    const handleChangeText = (event) => {
        setPostDataTV({
        ...postDataTV,
        [event.target.name]: event.target.value,
        });
    };

    // Calculate Functions

    // Technical Supervisor
    // function to calculate Technical Supervisor shoot on change
    useEffect(() => {
        const addTecsup = () => {
        setTechsuperTotal(parseFloat(tech_super_qty || 0) * 
        parseFloat(tech_super_uno || 0) * 
        parseFloat(tech_super_rt || 0))
        }
        const timer = setTimeout(() => {
            addTecsup();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [tech_super_qty, tech_super_uno, tech_super_rt]);

    // function to calculate Technical Supervisor prep on change
    useEffect(() => {
        const addTecsupprep = () => {
        setTecsupprepTotal(parseFloat(tec_sup_qty_prep || 0) * 
        parseFloat(tec_sup_uno_prep || 0) * 
        parseFloat(tec_sup_rt_prep || 0))
        }
        const timer = setTimeout(() => {
            addTecsupprep();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [tec_sup_qty_prep, tec_sup_uno_prep, tec_sup_rt_prep]);

    // function to calculate Technical Supervisor wrap on change
    useEffect(() => {
        const addTecsupwrap = () => {
        setTecsupwrapTotal(parseFloat(tec_sup_qty_wrap || 0) * 
        parseFloat(tec_sup_uno_wrap || 0) * 
        parseFloat(tec_sup_rt_wrap || 0))
        }
        const timer = setTimeout(() => {
            addTecsupwrap();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [tec_sup_qty_wrap, tec_sup_uno_wrap, tec_sup_rt_wrap]);

    // function to calculate Technical Supervisor all on change
    useEffect(() => {
        const addTecsupall = () => {
        setTecsupallTotal(parseFloat(techsuperTotal || 0) +
        parseFloat(tecsupprepTotal || 0) +
        parseFloat(tecsupwrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addTecsupall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [techsuperTotal, tecsupprepTotal, tecsupwrapTotal]);
    
    // Technical Director
    // function to calculate Technical Director shoot on change
    useEffect(() => {
        const addTecdir = () => {
        setTechdirectTotal(parseFloat(tech_direct_qty || 0) * 
        parseFloat(tech_direct_uno || 0) * 
        parseFloat(tech_direct_rt || 0))
        }
        const timer = setTimeout(() => {
            addTecdir();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [tech_direct_qty, tech_direct_uno, tech_direct_rt]);

    // function to calculate Technical Director prep on change
    useEffect(() => {
        const addTecdirprep = () => {
        setTecdirprepTotal(parseFloat(tec_dir_qty_prep || 0) * 
        parseFloat(tec_dir_uno_prep || 0) * 
        parseFloat(tec_dir_rt_prep || 0))
        }
        const timer = setTimeout(() => {
            addTecdirprep();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [tec_dir_qty_prep, tec_dir_uno_prep, tec_dir_rt_prep]);

    // function to calculate Technical Director wrap on change
    useEffect(() => {
        const addTecdirwrap = () => {
        setTecdirwrapTotal(parseFloat(tec_dir_qty_wrap || 0) * 
        parseFloat(tec_dir_uno_wrap || 0) * 
        parseFloat(tec_dir_rt_wrap || 0))
        }
        const timer = setTimeout(() => {
            addTecdirwrap();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [tec_dir_qty_wrap, tec_dir_uno_wrap, tec_dir_rt_wrap]);

    // function to calculate Technical Director all on change
    useEffect(() => {
        const addTecdirall = () => {
        setTecdirallTotal(parseFloat(techdirectTotal || 0) +
        parseFloat(tecdirprepTotal || 0) +
        parseFloat(tecdirwrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addTecdirall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [techdirectTotal, tecdirprepTotal, tecdirwrapTotal]);

    // Floor Manager
    // function to calculate Floor Manager shoot on change
    useEffect(() => {
        const addFloman = () => {
        setFloormanTotal(parseFloat(floor_man_qty || 0) * 
        parseFloat(floor_man_uno || 0) * 
        parseFloat(floor_man_rt || 0))
        }
        const timer = setTimeout(() => {
            addFloman();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [floor_man_qty, floor_man_uno, floor_man_rt]);

    // function to calculate Floor Manager prep on change
    useEffect(() => {
        const addFlomanprep = () => {
        setFlomanprepTotal(parseFloat(flo_man_qty_prep || 0) * 
        parseFloat(flo_man_uno_prep || 0) * 
        parseFloat(flo_man_rt_prep || 0))
        }
        const timer = setTimeout(() => {
            addFlomanprep();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [flo_man_qty_prep, flo_man_uno_prep, flo_man_rt_prep]);

    // function to calculate Floor Manager wrap on change
    useEffect(() => {
        const addFlomanwrap = () => {
        setFlomanwrapTotal(parseFloat(flo_man_qty_wrap || 0) * 
        parseFloat(flo_man_uno_wrap || 0) * 
        parseFloat(flo_man_rt_wrap || 0))
        }
        const timer = setTimeout(() => {
            addFlomanwrap();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [flo_man_qty_wrap, flo_man_uno_wrap, flo_man_rt_wrap]);

    // function to calculate Floor Manager all on change
    useEffect(() => {
        const addFlomanall = () => {
        setFlomanallTotal(parseFloat(floormanTotal || 0) +
        parseFloat(flomanprepTotal || 0) +
        parseFloat(flomanwrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addFlomanall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [floormanTotal, flomanprepTotal, flomanwrapTotal]);

    // Lighting Director
    // function to calculate Lighting Director shoot on change
    useEffect(() => {
        const addLigdir = () => {
        setLightdirectTotal(parseFloat(light_direct_qty || 0) * 
        parseFloat(light_direct_uno || 0) * 
        parseFloat(light_direct_rt || 0))
        }
        const timer = setTimeout(() => {
            addLigdir();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [light_direct_qty, light_direct_uno, light_direct_rt]);

    // function to calculate Lighting Director prep on change
    useEffect(() => {
        const addLigdirprep = () => {
        setLigdirprepTotal(parseFloat(lig_dir_qty_prep || 0) * 
        parseFloat(lig_dir_uno_prep || 0) * 
        parseFloat(lig_dir_rt_prep || 0))
        }
        const timer = setTimeout(() => {
            addLigdirprep();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [lig_dir_qty_prep, lig_dir_uno_prep, lig_dir_rt_prep]);

    // function to calculate Lighting Director wrap on change
    useEffect(() => {
        const addLigdirwrap = () => {
        setLigdirwrapTotal(parseFloat(lig_dir_qty_wrap || 0) * 
        parseFloat(lig_dir_uno_wrap || 0) * 
        parseFloat(lig_dir_rt_wrap || 0))
        }
        const timer = setTimeout(() => {
            addLigdirwrap();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [lig_dir_qty_wrap, lig_dir_uno_wrap, lig_dir_rt_wrap]);

    // function to calculate Lighting Director all on change
    useEffect(() => {
        const addLigdirall = () => {
        setLigdirallTotal(parseFloat(lightdirectTotal || 0) +
        parseFloat(ligdirprepTotal || 0) +
        parseFloat(ligdirwrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addLigdirall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [lightdirectTotal, ligdirprepTotal, ligdirwrapTotal]);

    // Boardman start here
    // function to calculate Boardman on change
    useEffect(() => {
        const addBoardm = () => {
        setBoardmanTotal(parseFloat(boardman_qty || 0) * 
        parseFloat(boardman_uno || 0) * 
        parseFloat(boardman_rt || 0))
        }
        const timer = setTimeout(() => {
            addBoardm();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
      }, [boardman_qty, boardman_uno, boardman_rt]);

    // function to calculate Audio on change
    useEffect(() => {
        const addAudio = () => {
        setAudioTotal(parseFloat(audio_qty || 0) * 
        parseFloat(audio_uno || 0) * 
        parseFloat(audio_rt || 0))
        }
        const timer = setTimeout(() => {
            addAudio();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
      }, [audio_qty, audio_uno, audio_rt]);

    // function to calculate VRT Operator on change
    useEffect(() => {
        const addVtrope = () => {
        setVtroperatorTotal(parseFloat(vtr_operator_qty || 0) * 
        parseFloat(vtr_operator_uno || 0) * 
        parseFloat(vtr_operator_rt || 0))
        }
        const timer = setTimeout(() => {
            addVtrope();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
      }, [vtr_operator_qty, vtr_operator_uno, vtr_operator_rt]);

    // function to calculate Stagehands on change
    useEffect(() => {
        const addStageh = () => {
        setStagehandsTotal(parseFloat(stagehands_qty || 0) * 
        parseFloat(stagehands_uno || 0) * 
        parseFloat(stagehands_rt || 0))
        }
        const timer = setTimeout(() => {
            addStageh();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
      }, [stagehands_qty, stagehands_uno, stagehands_rt]);

    // function to calculate Other TV Labour on change
    useEffect(() => {
        const addOthetv = () => {
        setOthertvTotal(parseFloat(other_tv_qty || 0) * 
        parseFloat(other_tv_uno || 0) * 
        parseFloat(other_tv_rt || 0))
        }
        const timer = setTimeout(() => {
        addOthetv();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [other_tv_qty, other_tv_uno, other_tv_rt]);

    // function to add all TV Specific Labour on change
    useEffect(() => {
        const AddTVLab = () => {
        setTvspecificlabourTotal(
        parseFloat(techsuperTotal || 0) +
        parseFloat(techdirectTotal || 0) +
        parseFloat(floormanTotal || 0) +
        parseFloat(lightdirectTotal || 0) +
        parseFloat(boardmanTotal || 0) +
        parseFloat(audioTotal || 0) +
        parseFloat(vtroperatorTotal || 0) +
        parseFloat(stagehandsTotal || 0) +
        parseFloat(fringes_taxes_tv || 0) +
        parseFloat(othertvTotal || 0)
        )
        }
        const timer = setTimeout(() => {
            AddTVLab();
        }, 1000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
        }, [techsuperTotal, techdirectTotal, floormanTotal,
            lightdirectTotal, boardmanTotal, audioTotal,
            vtroperatorTotal, stagehandsTotal, othertvTotal,
            fringes_taxes_tv,]);

  return (
    <div className="mt-5">
    <Row >
    <Col md={1} >
    <p className="mb-2">21.00</p>
    </Col>
    <Col md={9} >
    <p className={ `${styles.BoldBlack} mb-2`}>TV Specific Labour</p>
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
    {/* Technical Supervisor */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>21.10</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Technical Supervisor</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="tech_super_qty" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tech_super_qty"
        value={tech_super_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.tech_super_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="tech_super_uno" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tech_super_uno"
        value={tech_super_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.tech_super_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="tech_super_una" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tech_super_una"
        value={tech_super_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.tech_super_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="tech_super_rt" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tech_super_rt"
        value={tech_super_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.tech_super_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="techsuperTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="techsuperTotal"
        value={techsuperTotal}
        readOnly
            />
    </Form.Group>
    {errors?.techsuperTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Technical Director */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>21.20</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Technical Director</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="tech_direct_qty" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tech_direct_qty"
        value={tech_direct_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.tech_direct_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="tech_direct_uno" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tech_direct_uno"
        value={tech_direct_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.tech_direct_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="tech_direct_una" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tech_direct_una"
        value={tech_direct_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.tech_direct_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="tech_direct_rt" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tech_direct_rt"
        value={tech_direct_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.tech_direct_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="techdirectTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="techdirectTotal"
        value={techdirectTotal}
        readOnly
            />
    </Form.Group>
    {errors?.techdirectTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Floor Manager */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>21.30</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Floor Manager</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="floor_man_qty" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="floor_man_qty"
        value={floor_man_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.floor_man_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="floor_man_uno" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="floor_man_uno"
        value={floor_man_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.floor_man_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="floor_man_una" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="floor_man_una"
        value={floor_man_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.floor_man_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="floor_man_rt" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="floor_man_rt"
        value={floor_man_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.floor_man_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="floormanTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="floormanTotal"
        value={floormanTotal}
        readOnly
            />
    </Form.Group>
    {errors?.floormanTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Lighting Director */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>21.40</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Lighting Director</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="light_direct_qty" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="light_direct_qty"
        value={light_direct_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.light_direct_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="light_direct_uno" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="light_direct_uno"
        value={light_direct_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.light_direct_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="light_direct_una" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="light_direct_una"
        value={light_direct_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.light_direct_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="light_direct_rt" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="light_direct_rt"
        value={light_direct_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.light_direct_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="lightdirectTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="lightdirectTotal"
        value={lightdirectTotal}
        readOnly
            />
    </Form.Group>
    {errors?.lightdirectTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Boardman */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>21.50</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Boardman</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="boardman_qty" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="boardman_qty"
        value={boardman_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.boardman_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="boardman_uno" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="boardman_uno"
        value={boardman_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.boardman_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="boardman_una" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="boardman_una"
        value={boardman_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.boardman_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="boardman_rt" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="boardman_rt"
        value={boardman_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.boardman_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="boardmanTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="boardmanTotal"
        value={boardmanTotal}
        readOnly
            />
    </Form.Group>
    {errors?.boardmanTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Audio */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>21.60</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Audio</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="audio_qty" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="audio_qty"
        value={audio_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.audio_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="audio_uno" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="audio_uno"
        value={audio_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.audio_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="audio_una" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="audio_una"
        value={audio_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.audio_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="audio_rt" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="audio_rt"
        value={audio_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.audio_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="audioTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="audioTotal"
        value={audioTotal}
        readOnly
            />
    </Form.Group>
    {errors?.audioTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* VRT Operator */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>21.70</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>VRT Operator</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="vtr_operator_qty" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="vtr_operator_qty"
        value={vtr_operator_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.vtr_operator_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="vtr_operator_uno" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="vtr_operator_uno"
        value={vtr_operator_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.vtr_operator_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="vtr_operator_una" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="vtr_operator_una"
        value={vtr_operator_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.vtr_operator_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="vtr_operator_rt" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="vtr_operator_rt"
        value={vtr_operator_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.vtr_operator_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="vtroperatorTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="vtroperatorTotal"
        value={vtroperatorTotal}
        readOnly
            />
    </Form.Group>
    {errors?.vtroperatorTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Stagehands */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>21.80</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Stagehands</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="stagehands_qty" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stagehands_qty"
        value={stagehands_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.stagehands_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="stagehands_uno" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stagehands_uno"
        value={stagehands_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.stagehands_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="stagehands_una" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stagehands_una"
        value={stagehands_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.stagehands_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="stagehands_rt" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stagehands_rt"
        value={stagehands_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.stagehands_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="stagehandsTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stagehandsTotal"
        value={stagehandsTotal}
        readOnly
            />
    </Form.Group>
    {errors?.stagehandsTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Other TV Labour */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>21.90</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Other TV Labour</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_tv_qty" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_tv_qty"
        value={other_tv_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_tv_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_tv_uno" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_tv_uno"
        value={other_tv_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_tv_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_tv_una" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_tv_una"
        value={other_tv_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.other_tv_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_tv_rt" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_tv_rt"
        value={other_tv_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_tv_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="othertvTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="othertvTotal"
        value={othertvTotal}
        readOnly
            />
    </Form.Group>
    {errors?.othertvTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Fringes and Taxes */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>21.91</p>
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
    <Form.Group controlId="fringes_taxes_tv" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="fringes_taxes_tv"
        value={fringes_taxes_tv}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.fringes_taxes_tv?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* TV Total */}
    <Row className="mt-3">
    <Col md={1} >
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TV SPECIFIC TOTAL</p>
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
    <Form.Group controlId="tvspecificlabourTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tvspecificlabourTotal"
        value={tvspecificlabourTotal}
        readOnly
            />
    </Form.Group>
    {errors?.tvspecificlabourTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
  )
}

export default TV