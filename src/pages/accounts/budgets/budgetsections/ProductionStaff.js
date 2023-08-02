/* Component in the Budget component to edit Production Staff */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const ProductionStaff = (props) => {
  const [errors, setErrors] = useState({});

  const {postDataProduction, setPostDataProduction, setShow,
         productionmanagerTotal, setProductionmanagerTotal,
         productionsupervisorTotal, setProductionsupervisorTotal,
         productioncoordinatorTotal, setProductioncoordinatorTotal,
         unitmanagerTotal, setUnitmanagerTotal,
         locationmanagerTotal, setLocationmanagerTotal,
         locationmanagerassistantTotal, setLocationmanagerassistantTotal,
         productionassistantsTotal, setProductionassistantsTotal,
         productionsecretaryTotal, setProductionsecretaryTotal,
         productionaccountantTotal, setProductionaccountantTotal,
         productionaccountantassistantTotal, setProductionaccountantassistantTotal,
         scriptsupervisorcontinuityTotal, setScriptsupervisorcontinuityTotal,
         payrollTotal, setPayrollTotal,
         otherproductionTotal, setOtherproductionTotal,
         directorsassistantTotal, setDirectorsassistantTotal,
         assistantdirector1stTotal, setAssistantdirector1stTotal,
         assistantdirector2ndTotal, setAssistantdirector2ndTotal,
         assistantdirector3rdTotal, setAssistantdirector3rdTotal,
         craftservicesTotal, setCraftservicesTotal,
         productionstaffTotal, setProductionstaffTotal} = props;
  
  // Production postData values
  const {
    production_manager_quantity,
    production_manager_units_number,
    production_manager_units_name,
    production_manager_rate,
    production_supervisor_quantity,
    production_supervisor_units_number,
    production_supervisor_units_name,
    production_supervisor_rate,
    production_coordinator_quantity,
    production_coordinator_units_number,
    production_coordinator_units_name,
    production_coordinator_rate,
    unit_manager_quantity,
    unit_manager_units_number,
    unit_manager_units_name,
    unit_manager_rate,
    location_manager_quantity,
    location_manager_units_number,
    location_manager_units_name,
    location_manager_rate,
    location_manager_assistant_quantity,
    location_manager_assistant_units_number,
    location_manager_assistant_units_name,
    location_manager_assistant_rate,
    production_assistants_quantity,
    production_assistants_units_number,
    production_assistants_units_name,
    production_assistants_rate,
    production_secretary_quantity,
    production_secretary_units_number,
    production_secretary_units_name,
    production_secretary_rate,
    production_accountant_quantity,
    production_accountant_units_number,
    production_accountant_units_name,
    production_accountant_rate,
    production_accountant_assistant_quantity,
    production_accountant_assistant_units_number,
    production_accountant_assistant_units_name,
    production_accountant_assistant_rate,
    scriptsupervisor_continuity_quantity,
    scriptsupervisor_continuity_units_number,
    scriptsupervisor_continuity_units_name,
    scriptsupervisor_continuity_rate,
    payroll_quantity,
    payroll_units_number,
    payroll_units_name,
    payroll_rate,
    other_production_quantity,
    other_production_units_number,
    other_production_units_name,
    other_production_rate,
    directors_assistant_quantity,
    directors_assistant_units_number,
    directors_assistant_units_name,
    directors_assistant_rate,
    assistant_director_1st_quantity,
    assistant_director_1st_units_number,
    assistant_director_1st_units_name,
    assistant_director_1st_rate,
    assistant_director_2nd_quantity,
    assistant_director_2nd_units_number,
    assistant_director_2nd_units_name,
    assistant_director_2nd_rate,
    assistant_director_3rd_quantity,
    assistant_director_3rd_units_number,
    assistant_director_3rd_units_name,
    assistant_director_3rd_rate,
    craft_services_quantity,
    craft_services_units_number,
    craft_services_units_name,
    craft_services_rate,
  } = postDataProduction;

  // Production handleChange 
  const handleChangePro = (event) => {
    setPostDataProduction({
      ...postDataProduction,
      [event.target.name]: parseFloat(event.target.value || 0 ),
    });
  }; 

  // Production handleChange Text 
  const handleChangeProText = (event) => {
    setPostDataProduction({
      ...postDataProduction,
      [event.target.name]: event.target.value,
    });
  };

    // Calculate Functions
  // function to calculate production manager on change
  useEffect(() => {
    const addproman = () => {
      setProductionmanagerTotal(parseFloat(production_manager_quantity || 0) * 
      parseFloat(production_manager_units_number || 0) * 
      parseFloat(production_manager_rate || 0))
    }
    const timer = setTimeout(() => {
      addproman();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [production_manager_quantity, production_manager_units_number, 
    production_manager_rate]);

  // function to calculate production supervisor on change
  useEffect(() => {
    const addprosup = () => {
      setProductionsupervisorTotal(parseFloat(production_supervisor_quantity || 0) * 
      parseFloat(production_supervisor_units_number || 0) * 
      parseFloat(production_supervisor_rate || 0))
    }
    const timer = setTimeout(() => {
      addprosup();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [production_supervisor_quantity, production_supervisor_units_number, 
    production_supervisor_rate]);

  // function to calculate production coordinator on change
  useEffect(() => {
    const addprocoor = () => {
      setProductioncoordinatorTotal(parseFloat(production_coordinator_quantity || 0) * 
      parseFloat(production_coordinator_units_number || 0) * 
      parseFloat(production_coordinator_rate || 0))
    }
    const timer = setTimeout(() => {
      addprocoor();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [production_coordinator_quantity, production_coordinator_units_number, 
    production_coordinator_rate]);

  // function to calculate unit manager on change
  useEffect(() => {
    const addunitman = () => {
      setUnitmanagerTotal(parseFloat(unit_manager_quantity || 0) * 
      parseFloat(unit_manager_units_number || 0) * 
      parseFloat(unit_manager_rate || 0))
    }
    const timer = setTimeout(() => {
      addunitman();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [unit_manager_quantity, unit_manager_units_number, 
    unit_manager_rate]);
  
  // function to calculate location manager on change
  useEffect(() => {
    const addlocman = () => {
      setLocationmanagerTotal(parseFloat(location_manager_quantity || 0) * 
      parseFloat(location_manager_units_number || 0) * 
      parseFloat(location_manager_rate || 0))
    }
    const timer = setTimeout(() => {
      addlocman();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [location_manager_quantity, location_manager_units_number, 
    location_manager_rate]);
  
  // function to calculate location manager assistant on change
  useEffect(() => {
    const addlocmanass = () => {
      setLocationmanagerassistantTotal(parseFloat(location_manager_assistant_quantity || 0) * 
      parseFloat(location_manager_assistant_units_number || 0) * 
      parseFloat(location_manager_assistant_rate || 0))
    }
    const timer = setTimeout(() => {
      addlocmanass();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [location_manager_assistant_quantity, location_manager_assistant_units_number, 
    location_manager_assistant_rate]);
  
  // function to calculate production assistants on change
  useEffect(() => {
    const addproass = () => {
      setProductionassistantsTotal(parseFloat(production_assistants_quantity || 0) * 
      parseFloat(production_assistants_units_number || 0) * 
      parseFloat(production_assistants_rate || 0))
    }
    const timer = setTimeout(() => {
      addproass();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [production_assistants_quantity, production_assistants_units_number, 
    production_assistants_rate]);

  // function to calculate production secretary on change
  useEffect(() => {
    const addprosec = () => {
      setProductionsecretaryTotal(parseFloat(production_secretary_quantity || 0) * 
      parseFloat(production_secretary_units_number || 0) * 
      parseFloat(production_secretary_rate || 0))
    }
    const timer = setTimeout(() => {
      addprosec();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [production_secretary_quantity, production_secretary_units_number, 
    production_secretary_rate]);

  // function to calculate production accountant on change
  useEffect(() => {
    const addproacc = () => {
      setProductionaccountantTotal(parseFloat(production_accountant_quantity || 0) * 
      parseFloat(production_accountant_units_number || 0) * 
      parseFloat(production_accountant_rate || 0))
    }
    const timer = setTimeout(() => {
      addproacc();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [production_accountant_quantity, production_accountant_units_number, 
    production_accountant_rate]);
  
  // function to calculate production accountant assistant on change
  useEffect(() => {
    const addaccass = () => {
      setProductionaccountantassistantTotal(parseFloat(production_accountant_assistant_quantity || 0) * 
      parseFloat(production_accountant_assistant_units_number || 0) * 
      parseFloat(production_accountant_assistant_rate || 0))
    }
    const timer = setTimeout(() => {
      addaccass();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [production_accountant_assistant_quantity, production_accountant_assistant_units_number, 
    production_accountant_assistant_rate]);

  // function to calculate scriptsupervisor continuity on change
  useEffect(() => {
    const addsupcon = () => {
      setScriptsupervisorcontinuityTotal(parseFloat(scriptsupervisor_continuity_quantity || 0) * 
      parseFloat(scriptsupervisor_continuity_units_number || 0) * 
      parseFloat(scriptsupervisor_continuity_rate || 0))
    }
    const timer = setTimeout(() => {
      addsupcon();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [scriptsupervisor_continuity_quantity, scriptsupervisor_continuity_units_number, 
    scriptsupervisor_continuity_rate]);
  
  // function to calculate unit manager on change
  useEffect(() => {
    const addpayrol = () => {
      setPayrollTotal(parseFloat(payroll_quantity || 0) * 
      parseFloat(payroll_units_number || 0) * 
      parseFloat(payroll_rate || 0))
    }
    const timer = setTimeout(() => {
      addpayrol();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [payroll_quantity, payroll_units_number, 
    payroll_rate]);

  // function to calculate other production on change
  useEffect(() => {
    const addothpro = () => {
      setOtherproductionTotal(parseFloat(other_production_quantity || 0) * 
      parseFloat(other_production_units_number || 0) * 
      parseFloat(other_production_rate || 0))
    }
    const timer = setTimeout(() => {
      addothpro();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [other_production_quantity, other_production_units_number, 
    other_production_rate]);

  // function to calculate directors assistant on change
  useEffect(() => {
    const adddirass = () => {
      setDirectorsassistantTotal(parseFloat(directors_assistant_quantity || 0) * 
      parseFloat(directors_assistant_units_number || 0) * 
      parseFloat(directors_assistant_rate || 0))
    }
    const timer = setTimeout(() => {
      adddirass();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [directors_assistant_quantity, directors_assistant_units_number, 
    directors_assistant_rate]);

  // function to calculate 1st assistant director on change
  useEffect(() => {
    const addasdir1 = () => {
      setAssistantdirector1stTotal(parseFloat(assistant_director_1st_quantity || 0) * 
      parseFloat(assistant_director_1st_units_number || 0) * 
      parseFloat(assistant_director_1st_rate || 0))
    }
    const timer = setTimeout(() => {
      addasdir1();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [assistant_director_1st_quantity, assistant_director_1st_units_number, 
    assistant_director_1st_rate]);

  // function to calculate 2nd assistant director on change
  useEffect(() => {
    const addasdir2 = () => {
      setAssistantdirector2ndTotal(parseFloat(assistant_director_2nd_quantity || 0) * 
      parseFloat(assistant_director_2nd_units_number || 0) * 
      parseFloat(assistant_director_2nd_rate || 0))
    }
    const timer = setTimeout(() => {
      addasdir2();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [assistant_director_2nd_quantity, assistant_director_2nd_units_number, 
    assistant_director_2nd_rate]);

  // function to calculate 3rd assistant director on change
  useEffect(() => {
    const addasdir3 = () => {
      setAssistantdirector3rdTotal(parseFloat(assistant_director_3rd_quantity || 0) * 
      parseFloat(assistant_director_3rd_units_number || 0) * 
      parseFloat(assistant_director_3rd_rate || 0))
    }
    const timer = setTimeout(() => {
      addasdir3();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [assistant_director_3rd_quantity, assistant_director_3rd_units_number, 
    assistant_director_3rd_rate]);

  // function to calculate craft services on change
  useEffect(() => {
    const addcraser = () => {
      setCraftservicesTotal(parseFloat(craft_services_quantity || 0) * 
      parseFloat(craft_services_units_number || 0) * 
      parseFloat(craft_services_rate || 0))
    }
    const timer = setTimeout(() => {
      addcraser();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [craft_services_quantity, craft_services_units_number, 
    craft_services_rate]);

  // function to add all production on change
  useEffect(() => {
    const addPro = () => {
      setProductionstaffTotal(
      parseFloat(productionmanagerTotal || 0) +
      parseFloat(productionsupervisorTotal || 0) +
      parseFloat(productioncoordinatorTotal || 0) +
      parseFloat(unitmanagerTotal || 0) +
      parseFloat(locationmanagerTotal || 0) +
      parseFloat(locationmanagerassistantTotal || 0) +
      parseFloat(productionassistantsTotal || 0) +
      parseFloat(productionsecretaryTotal || 0) +
      parseFloat(productionaccountantTotal || 0) +
      parseFloat(productionaccountantassistantTotal || 0) +
      parseFloat(scriptsupervisorcontinuityTotal || 0) +
      parseFloat(payrollTotal || 0) +
      parseFloat(otherproductionTotal || 0) +
      parseFloat(directorsassistantTotal || 0) +
      parseFloat(assistantdirector1stTotal || 0) +
      parseFloat(assistantdirector2ndTotal || 0) +
      parseFloat(assistantdirector3rdTotal || 0) +
      parseFloat(craftservicesTotal || 0)
      )
    }
    const timer = setTimeout(() => {
      addPro();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [productionmanagerTotal, productionsupervisorTotal, productioncoordinatorTotal,
    unitmanagerTotal, locationmanagerTotal, locationmanagerassistantTotal,
    productionassistantsTotal, productionsecretaryTotal, productionaccountantTotal,
    productionaccountantassistantTotal, scriptsupervisorcontinuityTotal,
    payrollTotal, otherproductionTotal, directorsassistantTotal,
    assistantdirector1stTotal, assistantdirector2ndTotal,
    assistantdirector3rdTotal, craftservicesTotal,
    ]);

  return (
    <div className="mt-5">
    <Row >
    <Col md={1} >
    <p className="mb-2">7000</p>
    </Col>
    <Col md={9} >
    <p className={ `${styles.BoldBlack} mb-2`}>PRODUCTION STAFF</p>
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
    {/* Production Manager */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>7010</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Production Manager</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_manager_quantity" 
        className={`${styles.Width100} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_manager_quantity"
        value={production_manager_quantity}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_manager_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_manager_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_manager_units_number"
        value={production_manager_units_number}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_manager_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_manager_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_manager_units_name"
        value={production_manager_units_name}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.production_manager_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_manager_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_manager_rate"
        value={production_manager_rate}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_manager_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="productionmanagerTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="productionmanagerTotal"
        value={productionmanagerTotal}
        readOnly
            />
    </Form.Group>
    {errors?.productionmanagerTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Production Supervisor */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>7020</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Production Supervisor</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_supervisor_quantity" 
        className={`${styles.Width100} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_supervisor_quantity"
        value={production_supervisor_quantity}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_supervisor_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_supervisor_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_supervisor_units_number"
        value={production_supervisor_units_number}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_supervisor_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_supervisor_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_supervisor_units_name"
        value={production_supervisor_units_name}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.production_supervisor_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_supervisor_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_supervisor_rate"
        value={production_supervisor_rate}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_supervisor_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="productionsupervisorTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="productionsupervisorTotal"
        value={productionsupervisorTotal}
        readOnly
            />
    </Form.Group>
    {errors?.productionsupervisorTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Production Coordinator */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>7030</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Production Coordinator</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_coordinator_quantity" 
        className={`${styles.Width100} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_coordinator_quantity"
        value={production_coordinator_quantity}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_coordinator_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_coordinator_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_coordinator_units_number"
        value={production_coordinator_units_number}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_coordinator_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_coordinator_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_coordinator_units_name"
        value={production_coordinator_units_name}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.production_coordinator_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_coordinator_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_coordinator_rate"
        value={production_coordinator_rate}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_coordinator_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="productioncoordinatorTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="productioncoordinatorTotal"
        value={productioncoordinatorTotal}
        readOnly
            />
    </Form.Group>
    {errors?.productioncoordinatorTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Unit Manager */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>7040</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Unit Manager</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="unit_manager_quantity" 
        className={`${styles.Width100} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="unit_manager_quantity"
        value={unit_manager_quantity}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.unit_manager_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="unit_manager_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="unit_manager_units_number"
        value={unit_manager_units_number}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.unit_manager_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="unit_manager_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="unit_manager_units_name"
        value={unit_manager_units_name}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.unit_manager_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="unit_manager_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="unit_manager_rate"
        value={unit_manager_rate}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.unit_manager_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="unitmanagerTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="unitmanagerTotal"
        value={unitmanagerTotal}
        readOnly
            />
    </Form.Group>
    {errors?.unitmanagerTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Location Manager */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>7050</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Location Manager</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="location_manager_quantity" 
        className={`${styles.Width100} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="location_manager_quantity"
        value={location_manager_quantity}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.location_manager_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="location_manager_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="location_manager_units_number"
        value={location_manager_units_number}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.location_manager_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="location_manager_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="location_manager_units_name"
        value={location_manager_units_name}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.location_manager_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="location_manager_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="location_manager_rate"
        value={location_manager_rate}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.location_manager_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="locationmanagerTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="locationmanagerTotal"
        value={locationmanagerTotal}
        readOnly
            />
    </Form.Group>
    {errors?.locationmanagerTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Location Manager Assistant */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>7060</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Location Manager Assistant</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="location_manager_assistant_quantity" 
        className={`${styles.Width100} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="location_manager_assistant_quantity"
        value={location_manager_assistant_quantity}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.location_manager_assistant_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="location_manager_assistant_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="location_manager_assistant_units_number"
        value={location_manager_assistant_units_number}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.location_manager_assistant_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="location_manager_assistant_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="location_manager_assistant_units_name"
        value={location_manager_assistant_units_name}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.location_manager_assistant_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="location_manager_assistant_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="location_manager_assistant_rate"
        value={location_manager_assistant_rate}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.location_manager_assistant_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="locationmanagerassistantTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="locationmanagerassistantTotal"
        value={locationmanagerassistantTotal}
        readOnly
            />
    </Form.Group>
    {errors?.locationmanagerassistantTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Production Assistants */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>7070</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Production Assistants</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_assistants_quantity" 
        className={`${styles.Width100} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_assistants_quantity"
        value={production_assistants_quantity}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_assistants_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_assistants_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_assistants_units_number"
        value={production_assistants_units_number}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_assistants_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_assistants_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_assistants_units_name"
        value={production_assistants_units_name}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.production_assistants_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_assistants_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_assistants_rate"
        value={production_assistants_rate}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_assistants_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="productionassistantsTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="productionassistantsTotal"
        value={productionassistantsTotal}
        readOnly
            />
    </Form.Group>
    {errors?.productionassistantsTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Production Secretary */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>7080</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Production Secretary</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_secretary_quantity" 
        className={`${styles.Width100} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_secretary_quantity"
        value={production_secretary_quantity}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_secretary_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_secretary_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_secretary_units_number"
        value={production_secretary_units_number}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_secretary_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_secretary_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_secretary_units_name"
        value={production_secretary_units_name}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.production_secretary_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_secretary_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_secretary_rate"
        value={production_secretary_rate}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_secretary_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="productionsecretaryTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="productionsecretaryTotal"
        value={productionsecretaryTotal}
        readOnly
            />
    </Form.Group>
    {errors?.productionsecretaryTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Production Accountant */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>7090</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Production Accountant</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_accountant_quantity" 
        className={`${styles.Width100} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_accountant_quantity"
        value={production_secretary_quantity}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_accountant_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_accountant_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_accountant_units_number"
        value={production_accountant_units_number}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_accountant_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_accountant_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_accountant_units_name"
        value={production_accountant_units_name}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.production_accountant_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_accountant_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_accountant_rate"
        value={production_accountant_rate}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_accountant_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="productionaccountantTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="productionaccountantTotal"
        value={productionaccountantTotal}
        readOnly
            />
    </Form.Group>
    {errors?.productionaccountantTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Production Accountant Assistant */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>7100</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Production Accountant Assistant</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_accountant_assistant_quantity" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_accountant_assistant_quantity"
        value={production_accountant_assistant_quantity}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_accountant_assistant_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_accountant_assistant_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_accountant_assistant_units_number"
        value={production_accountant_assistant_units_number}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_accountant_assistant_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_accountant_assistant_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_accountant_assistant_units_name"
        value={production_accountant_assistant_units_name}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.production_accountant_assistant_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_accountant_assistant_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_accountant_assistant_rate"
        value={production_accountant_assistant_rate}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_accountant_assistant_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="productionaccountantassistantTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="productionaccountantassistantTotal"
        value={productionaccountantassistantTotal}
        readOnly
            />
    </Form.Group>
    {errors?.productionaccountantassistantTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Script Supervisor / Continuity */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>7110</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Production Accountant Assistant</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="scriptsupervisor_continuity_quantity" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="scriptsupervisor_continuity_quantity"
        value={scriptsupervisor_continuity_quantity}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.scriptsupervisor_continuity_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="scriptsupervisor_continuity_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="scriptsupervisor_continuity_units_number"
        value={scriptsupervisor_continuity_units_number}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.scriptsupervisor_continuity_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="scriptsupervisor_continuity_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="scriptsupervisor_continuity_units_name"
        value={scriptsupervisor_continuity_units_name}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.scriptsupervisor_continuity_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="scriptsupervisor_continuity_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="scriptsupervisor_continuity_rate"
        value={scriptsupervisor_continuity_rate}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.scriptsupervisor_continuity_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="scriptsupervisorcontinuityTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="scriptsupervisorcontinuityTotal"
        value={scriptsupervisorcontinuityTotal}
        readOnly
            />
    </Form.Group>
    {errors?.scriptsupervisorcontinuityTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Payroll */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>7120</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Payroll</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="payroll_quantity" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="payroll_quantity"
        value={payroll_quantity}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.payroll_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="payroll_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="payroll_units_number"
        value={payroll_units_number}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.payroll_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="payroll_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="payroll_units_name"
        value={payroll_units_name}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.payroll_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="payroll_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="payroll_rate"
        value={payroll_rate}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.payroll_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="payrollTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="payrollTotal"
        value={payrollTotal}
        readOnly
            />
    </Form.Group>
    {errors?.payrollTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Other Production */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>7130</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Other Production</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_production_quantity" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_production_quantity"
        value={other_production_quantity}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.other_production_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_production_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_production_units_number"
        value={other_production_units_number}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.other_production_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_production_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_production_units_name"
        value={other_production_units_name}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.other_production_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_production_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_production_rate"
        value={other_production_rate}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.other_production_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="otherproductionTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="otherproductionTotal"
        value={otherproductionTotal}
        readOnly
            />
    </Form.Group>
    {errors?.otherproductionTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Directors Assistant */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>7140</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Director's Assistant</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="directors_assistant_quantity" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="directors_assistant_quantity"
        value={directors_assistant_quantity}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.directors_assistant_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="directors_assistant_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="directors_assistant_units_number"
        value={directors_assistant_units_number}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.directors_assistant_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="directors_assistant_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="directors_assistant_units_name"
        value={directors_assistant_units_name}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.directors_assistant_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="directors_assistant_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="directors_assistant_rate"
        value={directors_assistant_rate}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.directors_assistant_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="directorsassistantTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="directorsassistantTotal"
        value={directorsassistantTotal}
        readOnly
            />
    </Form.Group>
    {errors?.directorsassistantTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* 1st Assistant Director */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>7150</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>1st Assistant Director</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="assistant_director_1st_quantity" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assistant_director_1st_quantity"
        value={assistant_director_1st_quantity}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.assistant_director_1st_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="assistant_director_1st_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assistant_director_1st_units_number"
        value={assistant_director_1st_units_number}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.assistant_director_1st_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="assistant_director_1st_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assistant_director_1st_units_name"
        value={assistant_director_1st_units_name}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.assistant_director_1st_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="assistant_director_1st_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assistant_director_1st_rate"
        value={assistant_director_1st_rate}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.assistant_director_1st_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="assistantdirector1stTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assistantdirector1stTotal"
        value={assistantdirector1stTotal}
        readOnly
            />
    </Form.Group>
    {errors?.assistantdirector1stTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* 2nd Assistant Director */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>7160</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>2nd Assistant Director</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="assistant_director_2nd_quantity" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assistant_director_2nd_quantity"
        value={assistant_director_2nd_quantity}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.assistant_director_2nd_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="assistant_director_2nd_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assistant_director_2nd_units_number"
        value={assistant_director_2nd_units_number}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.assistant_director_2nd_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="assistant_director_2nd_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assistant_director_2nd_units_name"
        value={assistant_director_2nd_units_name}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.assistant_director_2nd_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="assistant_director_2nd_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assistant_director_2nd_rate"
        value={assistant_director_2nd_rate}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.assistant_director_2nd_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="assistantdirector2ndTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assistantdirector2ndTotal"
        value={assistantdirector2ndTotal}
        readOnly
            />
    </Form.Group>
    {errors?.assistantdirector2ndTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* 3rd Assistant Director */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>7170</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>3rd Assistant Director</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="assistant_director_3rd_quantity" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assistant_director_3rd_quantity"
        value={assistant_director_3rd_quantity}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.assistant_director_3rd_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="assistant_director_3rd_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assistant_director_3rd_units_number"
        value={assistant_director_3rd_units_number}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.assistant_director_3rd_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="assistant_director_3rd_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assistant_director_3rd_units_name"
        value={assistant_director_3rd_units_name}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.assistant_director_3rd_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="assistant_director_3rd_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assistant_director_3rd_rate"
        value={assistant_director_3rd_rate}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.assistant_director_3rd_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="assistantdirector3rdTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assistantdirector3rdTotal"
        value={assistantdirector3rdTotal}
        readOnly
            />
    </Form.Group>
    {errors?.assistantdirector3rdTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Craft Services */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>7180</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Craft Services</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="craft_services_quantity" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="craft_services_quantity"
        value={craft_services_quantity}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.craft_services_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="craft_services_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="craft_services_units_number"
        value={craft_services_units_number}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.craft_services_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="craft_services_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="craft_services_units_name"
        value={craft_services_units_name}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.craft_services_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="craft_services_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="craft_services_rate"
        value={craft_services_rate}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.craft_services_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="craftservicesTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="craftservicesTotal"
        value={craftservicesTotal}
        readOnly
            />
    </Form.Group>
    {errors?.craftservicesTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Production Staff Total */}
    <Row className="mt-3">
    <Col md={1} >
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL PRODUCTION STAFF</p>
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
    <Form.Group controlId="productionstaffTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="productionstaffTotal"
        value={productionstaffTotal}
        readOnly
            />
    </Form.Group>
    {errors?.productionstaffTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
  )
}

export default ProductionStaff