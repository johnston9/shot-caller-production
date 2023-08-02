/* Component in the Budget component to edit Budget
*/
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../styles/Account.module.css";
import btnStyles from "../../../styles/Button.module.css";
import Alert from "react-bootstrap/Alert";
import { axiosReq } from "../../../api/axiosDefaults";
import { useHistory, useParams } from 'react-router-dom';
import Rights from "./budgetsections/Rights";
import Info from "./budgetsections/Info";
import Development from "./budgetsections/Development";
import Scenario from "./budgetsections/Scenario";
import ProducersDirectors from "./budgetsections/ProducersDirectors";
import StarsMusic from "./budgetsections/StarsMusic";
import Cast from "./budgetsections/Cast";
import ProductionStaff from "./budgetsections/ProductionStaff";

function BudgetEdit() {
  const [errors, setErrors] = useState({});
  const history = useHistory();
  const { id } = useParams();

  const [showInfo, setShowInfo] = useState(false);
  const [showRights, setShowRights] = useState(false);
  const [showDevelopment, setShowDevelopment] = useState(false);
  const [showScenario, setShowScenario] = useState(false);
  const [showProDirs, setShowProDirs] = useState(false);
  const [showStarsMus, setShowStarsMus] = useState(false);
  const [showCast, setShowCast] = useState(false);
  const [showProStaff, setShowProStaff] = useState(false);

  // budget id
  const [budgetId, setBudgetId] = useState("");

  // INFO / LENGTH-------------------------------
  // Info postData 
  const [postDataDetails, setPostDataDetails] = useState({
    // details
    title: "",
    series: "",
    prodco: "",
    format: "",
    location: "",
    dated: "",
    writer: "",
    prelimfin: "",
    preparedby: "",
    approvedby: "",
    approvedbyco: "",
  });

  // Info postData values 
  const { 
    title, series, prodco, format, location, dated,
    prelimfin, preparedby, approvedby, approvedbyco,
    writer} = postDataDetails;

  // Length postData
  const [postDataLength, setPostDataLength] = useState({
    research: 0,
    prep: 0,
    shoot: 0,
    wrap: 0,
    post: 0,});

  // Length postData values
  const { research, prep, shoot, wrap, post,} = postDataLength; 
  
  // Length Total postData 
  const [postDataLengthTotal, setPostDataLengthTotal] = useState(0);

  // Info handleChange
  const handleChange_details = (event) => {
    setPostDataDetails({
    ...postDataDetails,
    [event.target.name]: event.target.value,
    });
  };

  // function to add all lengths on change
  useEffect(() => {
    const addLength = () => {
    setPostDataLengthTotal(
        parseFloat(research || 0) +
        parseFloat(prep || 0) +
        parseFloat(shoot || 0) +
        parseFloat(wrap || 0) +
        parseFloat(post || 0)  )
    }
    const timer = setTimeout(() => {
    addLength();
    }, 1000);

    return () => {
    clearTimeout(timer);
    };
}, [research, prep, shoot, wrap, post ]);

  // prepared by input boxes
  const prepare = (
    <div>
    <Row>
    <Col md={6} >
    {/* prelimfin */}
    <Row >
    <Col md={6}>
    <p className={`${styles.Underline}`}>Preliminary or Final</p>
    </Col>
    <Col md={6}>
    <Form.Group controlId="prelimfin" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="prelimfin"
        value={prelimfin}
        onChange={handleChange_details}
            />
    </Form.Group>
    {errors?.prelimfin?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* preparedby */}
    <Row>
    <Col md={6}>
    <p className={`${styles.Underline}`}>Budget Prepared By</p>
    </Col>
    <Col md={6}>
    <Form.Group controlId="preparedby" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="preparedby"
        value={preparedby}
        onChange={handleChange_details}
            />
    </Form.Group>
    {errors?.preparedby?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </Col>
    {/* Approved COLUMN */}
    <Col md={6} >
    {/* Approved By */}
    <Row>
    <Col md={6}>
    <p className={`${styles.Underline}`}>Approved By - Name</p>
    </Col>
    <Col md={6}>
    <Form.Group controlId="approvedby" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="approvedby"
        value={approvedby}
        onChange={handleChange_details}
            />
    </Form.Group>
    {errors?.approvedby?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Approved By */}
    <Row>
    <Col md={6}>
    <p className={`${styles.Underline}`}>Approved By - Company</p>
    </Col>
    <Col md={6}>
    <Form.Group controlId="approvedbyco" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="approvedbyco"
        value={approvedbyco}
        onChange={handleChange_details}
            />
    </Form.Group>
    {errors?.approvedbyco?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* date */}
    <Row>
    <Col md={6}>
      <p className={`${styles.Underline}`}>Budget Date</p>
      </Col>
      <Col md={6}>
      <Form.Group controlId="dated" 
          className={`${styles.Width95} text-center mb-1`} >
          <Form.Control 
          type="text"
          className={styles.Input}
          name="dated"
          value={dated}
          onChange={handleChange_details}
              />
      </Form.Group>
      {errors?.dated?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
          {message}
          </Alert>
      ))}
      </Col>
    </Row>
    </Col>
    </Row>
    </div>
  )

  // RIGHTS ----------------------------------------------------
  
  // Rights postData
  const [postDataRights, setPostDataRights] = useState({
    story_rights: 0,
    miscellaneous: 0,
  });

  // Rights postData values
  const {story_rights, miscellaneous} = postDataRights;

  // Rights Total postData 
  const [postDataRightsTotal, setPostDataRightsTotal] = useState(0);

  // function to add all rights on change
  useEffect(() => {
    const addRights = () => {
      setPostDataRightsTotal(parseFloat(story_rights || 0) + 
      parseFloat(miscellaneous ||0) )
    }
    const timer = setTimeout(() => {
      addRights();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [story_rights, miscellaneous ]);

  // PRE-PRODUCTION AND DEVELOPMENT --------------------------------------------
  
  // Development postData
  const [postDataDevelopment, setPostDataDevelopment] = useState({
    research_development: 0,
    prelim_budget: 0,
    consultant_expenses: 0,
    office_expenses: 0,
    staff: 0,
    travel_expenses_development: 0,
    living_expenses_development: 0,
    other_development: 0,
    fringes_taxes_development: 0,
  });

  // Development postData values
  const {research_development, prelim_budget, consultant_expenses,
    office_expenses, staff, travel_expenses_development,
    living_expenses_development, other_development,
    fringes_taxes_development,} = postDataDevelopment

  // Development Total postData 
  const [developmentTotal, setDevelopmentTotal] = useState(0)

  // function to add all development on change
  useEffect(() => {
    const addDevelopment = () => {
      setDevelopmentTotal(
      parseFloat(research_development || 0) +
      parseFloat(prelim_budget || 0) +
      parseFloat(consultant_expenses || 0) +
      parseFloat(office_expenses || 0) +
      parseFloat(staff || 0) +
      parseFloat(travel_expenses_development || 0) +
      parseFloat(living_expenses_development || 0) +
      parseFloat(other_development || 0) +
      parseFloat(fringes_taxes_development || 0)
      )
    }
    const timer = setTimeout(() => {
      addDevelopment();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [research_development, prelim_budget, consultant_expenses,
    office_expenses, staff, travel_expenses_development,
    living_expenses_development, other_development,
    fringes_taxes_development ]);

  // ------------------------------------------------------
  // SCENARIO --------------------------------------------
  
  // Scenario postData
  const [postDataScenario, setPostDataScenario] = useState({
    writers_units_number: 0,
    writers_units_name: "",
    writers_quantity: 0,
    writers_rate: 0,
    consultants_units_number: 0,
    consultants_units_name: "",
    consultants_quantity: 0,
    consultants_rate: 0,
    editors_scenario_units_number: 0,
    editors_scenario_units_name: "",
    editors_scenario_quantity: 0,
    editors_scenario_rate: 0,
    admin_scenario_units_number: 0,
    admin_scenario_units_name: "",
    admin_scenario_quantity: 0,
    admin_scenario_rate: 0,
    office_expenses_scenario: 0,
    travel_expenses_scenario: 0,
    living_expenses_scenario: 0,
    other_scenario: 0,
    fringes_taxes_scenario: 0,
  });

  // Scenario postData values
  const {writers_units_number, writers_units_name,
    writers_quantity, writers_rate,
    consultants_units_number, consultants_units_name,
    consultants_quantity, consultants_rate,
    editors_scenario_units_number, editors_scenario_units_name,
    editors_scenario_quantity, editors_scenario_rate,
    admin_scenario_units_number, admin_scenario_units_name,
    admin_scenario_quantity, admin_scenario_rate,
    office_expenses_scenario, travel_expenses_scenario,
    living_expenses_scenario, other_scenario, 
    fringes_taxes_scenario } = postDataScenario;

  // Writers Total postData
  const [writersTotal, setWritersTotal] = useState(0);
  // Consultants Total postData 
  const [consultantsTotal, setConsultantsTotal] = useState(0);
  // Editors Total postData
  const [editorsscenarioTotal, setEditorsscenarioTotal] = useState(0);
  // Admin Total postData 
  const [adminScenarioTotal, setAdminScenarioTotal] = useState(0);

  // Calculate Functions
  // function to calculate writers on change
  useEffect(() => {
    const addWriters = () => {
      setWritersTotal(parseFloat(writers_units_number || 0) * parseFloat(writers_quantity || 0) * parseFloat(writers_rate || 0))
    }
    const timer = setTimeout(() => {
      addWriters();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [writers_units_number, writers_quantity, writers_rate]);

  // function to calculate consultants on change
  useEffect(() => {
    const addConsultants = () => {
      setConsultantsTotal(
        parseFloat(consultants_units_number || 0) * parseFloat(consultants_quantity || 0) * parseFloat(consultants_rate || 0))
    }
    const timer = setTimeout(() => {
      addConsultants();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [consultants_units_number, consultants_quantity, consultants_rate, ])

  // function to calculate editors on change
  useEffect(() => {
    const addEditors = () => {
      setEditorsscenarioTotal(parseFloat(editors_scenario_units_number || 0) * 
      parseFloat(editors_scenario_quantity || 0) * 
      parseFloat(editors_scenario_rate || 0))
    }
    const timer = setTimeout(() => {
      addEditors();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [editors_scenario_units_number, 
    editors_scenario_quantity, editors_scenario_rate]);

  // function to calculate admin on change
  useEffect(() => {
    const addAdminScenario = () => {
      setAdminScenarioTotal(parseFloat(admin_scenario_units_number || 0) *
      parseFloat(admin_scenario_quantity || 0) *
      parseFloat(admin_scenario_rate || 0))
    }
    const timer = setTimeout(() => {
      addAdminScenario();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [admin_scenario_units_number,
    admin_scenario_quantity, admin_scenario_rate]);

  // Scenario Total postData 
  const [scenarioTotal, setScenarioTotal] = useState(0);

  // function to add all scenario on change
  useEffect(() => {
    const addScenario = () => {
      setScenarioTotal(
      parseFloat(writersTotal || 0) +
      parseFloat(consultantsTotal || 0) +
      parseFloat(editorsscenarioTotal || 0) +
      parseFloat(adminScenarioTotal || 0) +
      parseFloat(travel_expenses_scenario || 0) +
      parseFloat(office_expenses_scenario || 0) +
      parseFloat(living_expenses_scenario || 0) +
      parseFloat(other_scenario || 0) +
      parseFloat(fringes_taxes_scenario || 0) 
      )
    }
    const timer = setTimeout(() => {
      addScenario();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [writersTotal, consultantsTotal, editorsscenarioTotal,
    office_expenses_scenario, adminScenarioTotal, travel_expenses_scenario,
    living_expenses_scenario, other_scenario, 
    fringes_taxes_scenario ]);

  // end Scenario -----------------------------------------

  // PRODUCERS DIRECTORS --------------------------------------------
  
  // producers postData
  const [postDataProducersDirs, setPostDataProducersDirs] = useState({
    executive_producers_rate: 0,
    producers_rate: 0,
    line_producers_rate: 0,
    co_producers_rate: 0,
    associate_producers_rate: 0,
    directors_rate: 0,
    unit2_directors_rate: 0,
    executive_producers_quantity: 0,
    producers_quantity: 0,
    line_producers_quantity: 0,
    co_producers_quantity: 0,
    associate_producers_quantity: 0,
    directors_quantity: 0,
    unit2_directors_quantity: 0,
    travel_expenses_producers_dirs: 0,
    living_expenses_producers_dirs: 0,
    other_producers_dirs: 0,
    fringes_taxes_producers_dirs: 0,
  });

  // producers directors postData values
  const {executive_producers_rate,
    producers_rate,
    line_producers_rate,
    co_producers_rate,
    associate_producers_rate,
    directors_rate,
    unit2_directors_rate,
    executive_producers_quantity,
    producers_quantity,
    line_producers_quantity,
    co_producers_quantity,
    associate_producers_quantity,
    directors_quantity,
    unit2_directors_quantity,
    travel_expenses_producers_dirs,
    living_expenses_producers_dirs,
    other_producers_dirs,
    fringes_taxes_producers_dirs,
    } = postDataProducersDirs;

  // TOTALS
  // Exec Producers Total postData
  const [execProducersTotal, setExecProducersTotal] = useState(0);
  // Producers Total postData
  const [producersTotal, setProducersTotal] = useState(0);
  // Line Producers Total postData
  const [lineProducersTotal, setLineProducersTotal] = useState(0);
  // Co Producers Total postData
  const [coProducersTotal, setCoProducersTotal] = useState(0);
  // Associate Producers Total postData
  const [assocProducersTotal, setAssocProducersTotal] = useState(0);
  // Directors Total postData
  const [directorsTotal, setDirectorsTotal] = useState(0);
  // 2nd Unit Directors Total postData
  const [unit2DirectorsTotal, setUnit2DirectorsTotal] = useState(0);

  // ProducersDirs Total postData 
  const [producersDirsTotal, setProducersDirsTotal] = useState(0)

  // CALCULATE FUNCTIONS
  // function to calculate Exec Producers on change
  useEffect(() => {
    const addExecPros = () => {
      setExecProducersTotal(parseFloat(executive_producers_quantity || 0) * 
      parseFloat(executive_producers_rate || 0))
    }
    const timer = setTimeout(() => {
      addExecPros();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [executive_producers_quantity, executive_producers_rate]);

  // function to calculate Producers on change
  useEffect(() => {
    const addPros = () => {
      setProducersTotal(parseFloat(producers_quantity || 0) * 
      parseFloat(producers_rate || 0))
    }
    const timer = setTimeout(() => {
      addPros();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [producers_quantity, producers_rate]);

  // function to calculate Line Producers on change
  useEffect(() => {
    const addLinePros = () => {
      setLineProducersTotal(parseFloat(line_producers_quantity || 0) * 
      parseFloat(line_producers_rate || 0))
    }
    const timer = setTimeout(() => {
      addLinePros();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [line_producers_quantity, line_producers_rate]);

  // function to calculate  Co Producers on change
  useEffect(() => {
    const addCoPros = () => {
      setCoProducersTotal(parseFloat(co_producers_quantity || 0) * 
      parseFloat(co_producers_rate || 0))
    }
    const timer = setTimeout(() => {
      addCoPros();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [co_producers_quantity, co_producers_rate]);

  // function to calculate  Assoc Producers on change
  useEffect(() => {
    const addAssocPros = () => {
      setAssocProducersTotal(parseFloat(associate_producers_quantity || 0) * 
      parseFloat(associate_producers_rate || 0))
    }
    const timer = setTimeout(() => {
      addAssocPros();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [associate_producers_quantity, associate_producers_rate]);

  // function to calculate Directors on change
  useEffect(() => {
    const addDirectors = () => {
      setDirectorsTotal(parseFloat(directors_quantity || 0) * 
      parseFloat(directors_rate || 0))
    }
    const timer = setTimeout(() => {
      addDirectors();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [directors_quantity, directors_rate]);

  // function to calculate 2nd Unit Directors on change
  useEffect(() => {
    const addUnit2Dirs = () => {
      setUnit2DirectorsTotal(parseFloat(unit2_directors_quantity || 0) * 
      parseFloat(unit2_directors_rate || 0))
    }
    const timer = setTimeout(() => {
      addUnit2Dirs();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [unit2_directors_quantity, unit2_directors_rate]);

  // end calculate functions

  // function to add all ProducersDirs on change
  useEffect(() => {
    const addProducersDirs = () => {
      setProducersDirsTotal(
        parseFloat(execProducersTotal || 0) +
        parseFloat(producersTotal || 0) +
        parseFloat(lineProducersTotal || 0) +
        parseFloat(coProducersTotal || 0) +
        parseFloat(assocProducersTotal || 0) +
        parseFloat(directorsTotal || 0) +
        parseFloat(unit2DirectorsTotal || 0) +
        parseFloat(travel_expenses_producers_dirs || 0) +
        parseFloat(living_expenses_producers_dirs || 0) +
        parseFloat(other_producers_dirs || 0) +
        parseFloat(fringes_taxes_producers_dirs || 0) )
    }
    const timer = setTimeout(() => {
      addProducersDirs();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [execProducersTotal, producersTotal, lineProducersTotal, coProducersTotal,
    assocProducersTotal, directorsTotal, unit2DirectorsTotal,
    travel_expenses_producers_dirs, living_expenses_producers_dirs,
    other_producers_dirs, fringes_taxes_producers_dirs, ]);

  // end producers-directors

  // STARS / MUSIC ------------------------------------------
  // Stars postData
  const [postDataStarsMusic, setPostDataStarsMusic] = useState({
    stars: 0,
    stars_rights_payments: 0,
    travel_expenses_stars: 0,
    living_expenses_stars: 0,
    other_stars: 0,
    fringes_taxes_stars: 0,
    music: 0,
    music_supervisor: 0,
    travel_expenses_music: 0,
    living_expenses_music: 0,
    music_rights_addl_songs: 0,
    other_music: 0,
    fringes_taxes_music: 0,
    });

  // postDataStarsMusic postData values
  const {
    stars, stars_rights_payments, travel_expenses_stars,
    living_expenses_stars, other_stars, fringes_taxes_stars,
    music, music_supervisor, travel_expenses_music, living_expenses_music,
    music_rights_addl_songs, other_music, fringes_taxes_music,
  } = postDataStarsMusic; 

  // StarsMusic Total postData 
  const [starsMusicTotal, setStarsMusicTotal] = useState("")

  // function to add all StarsMusic on change
  useEffect(() => {
    const addStarsMusic = () => {
      setStarsMusicTotal(
        parseFloat(stars || 0) +
        parseFloat(stars_rights_payments || 0) +
        parseFloat(travel_expenses_stars || 0) +
        parseFloat(living_expenses_stars || 0) +
        parseFloat(other_stars || 0) +
        parseFloat(fringes_taxes_stars || 0) +
        parseFloat(music || 0) +
        parseFloat(music_supervisor || 0) +
        parseFloat(travel_expenses_music || 0) +
        parseFloat(living_expenses_music || 0) +
        parseFloat(music_rights_addl_songs || 0) +
        parseFloat(other_music || 0) +
        parseFloat(fringes_taxes_music || 0)
       )
    }
    const timer = setTimeout(() => {
      addStarsMusic();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [stars, stars_rights_payments, travel_expenses_stars,
    living_expenses_stars, other_stars, fringes_taxes_stars,
    music, music_supervisor, travel_expenses_music, living_expenses_music,
    music_rights_addl_songs, other_music, fringes_taxes_music
  ]);

  // end stars music---------------------------

  // BELOW THE LINE - "B" PRODUCTION

  // CAST ----  ----------------------------------------
  
  // Cast postData
  const [postDataCast, setPostDataCast] = useState({
    principals_quantity: 0,
    principals_units_number: 0,
    principals_units_name: "",
    principals_rate: 0,
    actors_quantity: 0,
    actors_units_number: 0,
    actors_units_name: "",
    actors_rate: 0,
    stuntcoordinators_quantity: 0,
    stuntcoordinators_units_number: 0,
    stuntcoordinators_units_name: "",
    stuntcoordinators_rate: 0,
    stuntperformers_quantity: 0,
    stuntperformers_units_number: 0,
    stuntperformers_units_name: "",
    stuntperformers_rate: 0,
    otherperformers_quantity: 0,
    otherperformers_units_number: 0,
    otherperformers_units_name: "",
    otherperformers_rate: 0,
    extras_quantity: 0,
    extras_units_number: 0,
    extras_units_name: "",
    extras_rate: 0,
    casting_director: 0,
    extras_casting: 0,
    other_cast: 0,
    fringes_taxes_cast: 0,
    rights_payments_cast: 0,
  });

  // Cast postData values
  const {
    principals_quantity, principals_units_number,
    principals_units_name, principals_rate,
    actors_quantity, actors_units_number, 
    actors_units_name, actors_rate,
    stuntcoordinators_quantity, stuntcoordinators_units_number,
    stuntcoordinators_units_name, stuntcoordinators_rate,
    stuntperformers_quantity, stuntperformers_units_number,
    stuntperformers_units_name, stuntperformers_rate,
    otherperformers_quantity, otherperformers_units_number,
    otherperformers_units_name, otherperformers_rate,
    extras_quantity, extras_units_number,
    extras_units_name, extras_rate,
    casting_director, extras_casting,
    other_cast, fringes_taxes_cast, rights_payments_cast,
  } = postDataCast;

  // Principals Total postData
  const [principalsTotal, setPrincipalsTotal] = useState(0);
  // Actors Total postData 
  const [actorsTotal, setActorsTotal] = useState(0);
  // Editors Total postData
  const [stuntcoordinatorsTotal, setStuntcoordinatorsTotal] = useState(0);
  // Admin Total postData
  const [stuntperformersTotal, setStuntperformersTotal] = useState(0);
  // Admin Total postData
  const [otherperformersTotal, setOtherperformersTotal] = useState(0);
  // Extras Total postData
  const [extrasTotal, setExtrasTotal] = useState(0);

  // Calculate Functions
  // function to calculate principals on change
  useEffect(() => {
    const addPrincipals = () => {
      setPrincipalsTotal(parseFloat(principals_units_number || 0) * 
      parseFloat(principals_quantity || 0) * 
      parseFloat(principals_rate || 0))
    }
    const timer = setTimeout(() => {
      addPrincipals();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [principals_units_number, principals_quantity, principals_rate]);

  // function to calculate actors on change
  useEffect(() => {
    const addActors = () => {
      setActorsTotal(parseFloat(actors_units_number || 0) * 
      parseFloat(actors_quantity || 0) * 
      parseFloat(actors_rate || 0))
    }
    const timer = setTimeout(() => {
      addActors();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [actors_units_number, actors_quantity, actors_rate]);

  // function to calculate stuntcoordinators on change
  useEffect(() => {
    const addStuntcoordinators = () => {
      setStuntcoordinatorsTotal(parseFloat(stuntcoordinators_units_number || 0) * 
      parseFloat(stuntcoordinators_quantity || 0) * 
      parseFloat(stuntcoordinators_rate || 0))
    }
    const timer = setTimeout(() => {
      addStuntcoordinators();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [stuntcoordinators_units_number, stuntcoordinators_quantity, stuntcoordinators_rate]);

  // function to calculate stuntperformers on change
  useEffect(() => {
    const addStuntperformers = () => {
      setStuntperformersTotal(parseFloat(stuntperformers_units_number || 0) * 
      parseFloat(stuntperformers_quantity || 0) * 
      parseFloat(stuntperformers_rate || 0))
    }
    const timer = setTimeout(() => {
      addStuntperformers();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [stuntperformers_units_number, stuntperformers_quantity, stuntperformers_rate]);

  // function to calculate otherperformers on change
  useEffect(() => {
    const addOtherperformers = () => {
      setOtherperformersTotal(parseFloat(otherperformers_units_number || 0) * 
      parseFloat(otherperformers_quantity || 0) * 
      parseFloat(otherperformers_rate || 0))
    }
    const timer = setTimeout(() => {
      addOtherperformers();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [otherperformers_units_number, otherperformers_quantity, otherperformers_rate]);

  // function to calculate extras on change
  useEffect(() => {
    const addExtras = () => {
      setExtrasTotal(parseFloat(extras_units_number || 0) * 
      parseFloat(extras_quantity || 0) * 
      parseFloat(extras_rate || 0))
    }
    const timer = setTimeout(() => {
      addExtras();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [extras_units_number, extras_quantity, extras_rate]);

  // Cast Total postData 
  const [castTotal, setCastTotal] = useState(0);

  // function to add all cast on change
  useEffect(() => {
    const addCast = () => {
      setCastTotal(
      parseFloat(principalsTotal || 0) +
      parseFloat(actorsTotal || 0) +
      parseFloat(stuntcoordinatorsTotal || 0) +
      parseFloat(stuntperformersTotal || 0) +
      parseFloat(otherperformersTotal || 0) +
      parseFloat(extrasTotal || 0) +
      parseFloat(casting_director || 0) +
      parseFloat(extras_casting || 0) +
      parseFloat(other_cast || 0) +
      parseFloat(rights_payments_cast || 0) +
      parseFloat(fringes_taxes_cast || 0) 
      )
    }
    const timer = setTimeout(() => {
      addCast();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [principalsTotal, actorsTotal, stuntcoordinatorsTotal,
    stuntperformersTotal, otherperformersTotal, extrasTotal,
    casting_director, extras_casting, other_cast,
    rights_payments_cast, fringes_taxes_cast ]);

  // PRODUCTION STAFF ------------------------------------------

  // Production postData
  const [postDataProduction, setPostDataProduction] = useState({
    production_manager_quantity: 0,
    production_manager_units_number: 0,
    production_manager_units_name: "",
    production_manager_rate: 0,
    production_supervisor_quantity: 0,
    production_supervisor_units_number: 0,
    production_supervisor_units_name: "",
    production_supervisor_rate: 0,
    production_coordinator_quantity: 0,
    production_coordinator_units_number: 0,
    production_coordinator_units_name: "",
    production_coordinator_rate: 0,
    unit_manager_quantity: 0,
    unit_manager_units_number: 0,
    unit_manager_units_name: "",
    unit_manager_rate: 0,
    location_manager_quantity: 0,
    location_manager_units_number: 0,
    location_manager_units_name: "",
    location_manager_rate: 0,
    location_manager_assistant_quantity: 0,
    location_manager_assistant_units_number: 0,
    location_manager_assistant_units_name: "",
    location_manager_assistant_rate: 0,
    production_assistants_quantity: 0,
    production_assistants_units_number: 0,
    production_assistants_units_name: "",
    production_assistants_rate: 0,
    production_secretary_quantity: 0,
    production_secretary_units_number: 0,
    production_secretary_units_name: "",
    production_secretary_rate: 0,
    production_accountant_quantity: 0,
    production_accountant_units_number: 0,
    production_accountant_units_name: "",
    production_accountant_rate: 0,
    production_accountant_assistant_quantity: 0,
    production_accountant_assistant_units_number: 0,
    production_accountant_assistant_units_name: "",
    production_accountant_assistant_rate: 0,
    scriptsupervisor_continuity_quantity: 0,
    scriptsupervisor_continuity_units_number: 0,
    scriptsupervisor_continuity_units_name: "",
    scriptsupervisor_continuity_rate: 0,
    payroll_quantity: 0,
    payroll_units_number: 0,
    payroll_units_name: "",
    payroll_rate: 0,
    other_production_quantity: 0,
    other_production_units_number: 0,
    other_production_units_name: "",
    other_production_rate: 0,
    directors_assistant_quantity: 0,
    directors_assistant_units_number: 0,
    directors_assistant_units_name: "",
    directors_assistant_rate: 0,
    assistant_director_1st_quantity: 0,
    assistant_director_1st_units_number: 0,
    assistant_director_1st_units_name: "",
    assistant_director_1st_rate: 0,
    assistant_director_2nd_quantity: 0,
    assistant_director_2nd_units_number: 0,
    assistant_director_2nd_units_name: "",
    assistant_director_2nd_rate: 0,
    assistant_director_3rd_quantity: 0,
    assistant_director_3rd_units_number: 0,
    assistant_director_3rd_units_name: "",
    assistant_director_3rd_rate: 0,
    craft_services_quantity: 0,
    craft_services_units_number: 0,
    craft_services_units_name: "",
    craft_services_rate: 0,
  });

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

  // production manager Total postData
  const [productionmanagerTotal, setProductionmanagerTotal] = useState(0);
  // production supervisor Total postData
  const [productionsupervisorTotal, setProductionsupervisorTotal] = useState(0);
  // production coordinator Total postData
  const [productioncoordinatorTotal, setProductioncoordinatorTotal] = useState(0);
  // unit manager Total postData
  const [unitmanagerTotal, setUnitmanagerTotal] = useState(0);
  // location manager Total postData
  const [locationmanagerTotal, setLocationmanagerTotal] = useState(0);
  // location manager assistant Total postData
  const [locationmanagerassistantTotal, setLocationmanagerassistantTotal] = useState(0);
  // production assistants Total postData
  const [productionassistantsTotal, setProductionassistantsTotal] = useState(0);
  // production secretary Total postData
  const [productionsecretaryTotal, setProductionsecretaryTotal] = useState(0);
  // production accountant Total postData
  const [productionaccountantTotal, setProductionaccountantTotal] = useState(0);
  // production accountant assistant Total postData
  const [productionaccountantassistantTotal, setProductionaccountantassistantTotal] = useState(0);
  // scriptsupervisor continuity Total postData
  const [scriptsupervisorcontinuityTotal, setScriptsupervisorcontinuityTotal] = useState(0);
  // payroll Total postData
  const [payrollTotal, setPayrollTotal] = useState(0);
  // other production Total postData
  const [otherproductionTotal, setOtherproductionTotal] = useState(0);
  // directors assistant Total postData
  const [directorsassistantTotal, setDirectorsassistantTotal] = useState(0);
  // assistant director 1st Total postData
  const [assistantdirector1stTotal, setAssistantdirector1stTotal] = useState(0);
  // assistant director 2nd Total postData
  const [assistantdirector2ndTotal, setAssistantdirector2ndTotal] = useState(0);
  // assistant director 3rd Total postData
  const [assistantdirector3rdTotal, setAssistantdirector3rdTotal] = useState(0);
  // craft services Total postData
  const [craftservicesTotal, setCraftservicesTotal] = useState(0);

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
  
  // function to calculate payroll on change
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

  // Production Total postData 
  const [productionstaffTotal, setProductionstaffTotal] = useState(0);

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

  //TOTALS--------------------------

  // Above the line total --------------------------

  // Above the line Total postData 
  const [aboveTheLineTotal, setAboveTheLineTotal] = useState(0);
  // function to add all Above the line totals on change

  useEffect(() => {
    const addAboveTheLine = () => {
      setAboveTheLineTotal(
        parseFloat(postDataRightsTotal || 0) +
        parseFloat(developmentTotal || 0) +
        parseFloat(scenarioTotal || 0) +
        parseFloat(producersDirsTotal || 0) +
        parseFloat(starsMusicTotal || 0))
      }
    const timer = setTimeout(() => {
      addAboveTheLine();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [postDataRightsTotal, developmentTotal, scenarioTotal,
    producersDirsTotal, starsMusicTotal]);

  // Above the line input box
  const abovethelinetotal = (
    <div className="my-5 pl-3">
    <Row>
    <Col className={ `${styles.Overview}  my-0 py-2`} md={10} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL ABOVE THE LINE</p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="aboveTheLineTotal" 
          className={`${styles.Width95} text-center pt-1 mb-0`} >
          <Form.Control 
          type="text"
          className={styles.Input}
          name="aboveTheLineTotal"
          value={aboveTheLineTotal}
          readOnly
              />
      </Form.Group>
      {errors?.aboveTheLineTotal?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
          {message}
          </Alert>
      ))}
    </Col>
    </Row>
    </div>
  );

  // Below the line B total

  // Below the line B Total postData 
  const [belowTheLineBTotal, setBelowTheLineBTotal] = useState(0);

  // function to add all Below the line totals on change
  useEffect(() => {
    const addbelowB = () => {
      setBelowTheLineBTotal(
        parseFloat(castTotal || 0) +
        parseFloat(productionstaffTotal || 0) 
        )
      }
    const timer = setTimeout(() => {
      addbelowB();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [castTotal, productionstaffTotal, 
  ]);

  // Below the line input box
  const belowthelineBtotal = (
    <div className="my-5 pl-3">
    <Row>
    <Col className={ `${styles.Overview}  my-0 py-2`} md={10} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL BELOW THE LINE - "B" PRODUCTION</p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="belowTheLineBTotal" 
          className={`${styles.Width95} text-center pt-1 mb-0`} >
          <Form.Control 
          type="text"
          className={styles.Input}
          name="belowTheLineBTotal"
          value={belowTheLineBTotal}
          readOnly
              />
      </Form.Group>
      {errors?.belowTheLineBTotal?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
          {message}
          </Alert>
      ))}
    </Col>
    </Row>
    </div>
  );

  // Grand total---------------------------

  // Grand Total postData 
  const [grandTotal, setGrandTotal] = useState(0);

  // function to add all totals on change
  useEffect(() => {
    const addGrand = () => {
      setGrandTotal(
        parseFloat(aboveTheLineTotal || 0) +
        parseFloat(belowTheLineBTotal || 0) 
        )
      }
    const timer = setTimeout(() => {
      addGrand();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [aboveTheLineTotal, belowTheLineBTotal,]);

  // Grand input box
  const grandtotal = (
    <div className="my-5 pl-3">
    <Row>
    <Col className={ `${styles.Overview}  my-0 py-2`} md={10} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>GRAND TOTAL</p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="grandTotal" 
          className={`${styles.Width95} text-center pt-1 mb-0`} >
          <Form.Control 
          type="text"
          className={styles.Input}
          name="grandTotal"
          value={grandTotal}
          readOnly
              />
      </Form.Group>
      {errors?.grandTotal?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
          {message}
          </Alert>
      ))}
    </Col>
    </Row>
    </div>
  );

  // end totals------------------------

  const buttons = (
    <div className="text-center mt-3">    
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue} px-5 mr-3`}
        onClick={() => history.goBack()}
      >
        Cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue} px-5 pl-3`} type="submit">
        Create
      </Button>
    </div>
  );

  // USE EFFECT EDIT
  // Fetch budget for edit pre input values
  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/budgets/?project=${id}`);
        console.log(data.results[0])
        setBudgetId(data.results[0].id);
        // details
        const { title, series, prodco, format, location, dated, writer,
          prelimfin, preparedby, approvedby, approvedbyco} = data.results[0];
        setPostDataDetails({ title, series, prodco, format, location, dated,
          writer, prelimfin, preparedby, approvedby, approvedbyco });
        // length
        const {research, prep, shoot, wrap, post} = data.results[0];
        setPostDataLength({research, prep, shoot, wrap, post});
        // rights
        const {story_rights, miscellaneous} = data.results[0];
        setPostDataRights({story_rights, miscellaneous});
        // development
        const {research_development, prelim_budget, consultant_expenses,
          office_expenses, staff, travel_expenses_development,
          living_expenses_development, other_development,
          fringes_taxes_development} = data.results[0];
          setPostDataDevelopment({research_development, prelim_budget, consultant_expenses,
          office_expenses, staff, travel_expenses_development,
          living_expenses_development, other_development,
          fringes_taxes_development});
        // scenario
        const {writers_units_number, writers_units_name, writers_quantity, writers_rate,
          consultants_units_number, consultants_units_name, consultants_quantity, consultants_rate,
          editors_units_number, editors_units_name, editors_quantity, editors_rate,
          admin_scenario_units_number, admin_scenario_units_name,
          admin_scenario_quantity, admin_scenario_rate,
          office_expenses_scenario, travel_expenses_scenario,
          living_expenses_scenario, other_scenario,
          fringes_taxes_scenario} = data.results[0];
          setPostDataScenario({
            writers_units_number, writers_units_name, writers_quantity, writers_rate,
          consultants_units_number, consultants_units_name, consultants_quantity, consultants_rate,
          editors_units_number, editors_units_name, editors_quantity, editors_rate,
          admin_scenario_units_number, admin_scenario_units_name,
          admin_scenario_quantity, admin_scenario_rate,
          office_expenses_scenario, travel_expenses_scenario,
          living_expenses_scenario, other_scenario, fringes_taxes_scenario
          });
        // producers-directors
        const {executive_producers_rate, producers_rate,
          line_producers_rate, co_producers_rate,
          associate_producers_rate, directors_rate,
          unit2_directors_rate, executive_producers_quantity,
          producers_quantity, line_producers_quantity,
          co_producers_quantity, associate_producers_quantity,
          directors_quantity, unit2_directors_quantity,
          travel_expenses_producers_dirs, living_expenses_producers_dirs,
          other_producers_dirs, fringes_taxes_producers_dirs,
          } = data.results[0];
          setPostDataProducersDirs({
            executive_producers_rate, producers_rate,
          line_producers_rate, co_producers_rate,
          associate_producers_rate, directors_rate,
          unit2_directors_rate, executive_producers_quantity,
          producers_quantity, line_producers_quantity,
          co_producers_quantity, associate_producers_quantity,
          directors_quantity, unit2_directors_quantity,
          travel_expenses_producers_dirs, living_expenses_producers_dirs,
          other_producers_dirs, fringes_taxes_producers_dirs,
        });
        // stars music
        const {stars, stars_rights_payments, travel_expenses_stars,
          living_expenses_stars, other_stars, fringes_taxes_stars,
          music, music_supervisor, travel_expenses_music, living_expenses_music,
          music_rights_addl_songs, other_music, 
          fringes_taxes_music} = data.results[0];
        setPostDataStarsMusic({stars, stars_rights_payments, travel_expenses_stars,
          living_expenses_stars, other_stars, fringes_taxes_stars,
          music, music_supervisor, travel_expenses_music, living_expenses_music,
          music_rights_addl_songs, other_music, 
          fringes_taxes_music});
        // cast
        const {principals_quantity, principals_units_number,
          principals_units_name, principals_rate,
          actors_quantity, actors_units_number, 
          actors_units_name, actors_rate,
          stuntcoordinators_quantity, stuntcoordinators_units_number,
          stuntcoordinators_units_name, stuntcoordinators_rate,
          stuntperformers_quantity, stuntperformers_units_number,
          stuntperformers_units_name, stuntperformers_rate,
          otherperformers_quantity, otherperformers_units_number,
          otherperformers_units_name, otherperformers_rate,
          extras_quantity, extras_units_number,
          extras_units_name, extras_rate,
          casting_director, extras_casting,
          other_cast, fringes_taxes_cast, rights_payments_cast,} = data.results[0];
          setPostDataCast({principals_quantity, principals_units_number,
          principals_units_name, principals_rate,
          actors_quantity, actors_units_number, 
          actors_units_name, actors_rate,
          stuntcoordinators_quantity, stuntcoordinators_units_number,
          stuntcoordinators_units_name, stuntcoordinators_rate,
          stuntperformers_quantity, stuntperformers_units_number,
          stuntperformers_units_name, stuntperformers_rate,
          otherperformers_quantity, otherperformers_units_number,
          otherperformers_units_name, otherperformers_rate,
          extras_quantity, extras_units_number,
          extras_units_name, extras_rate,
          casting_director, extras_casting,
          other_cast, fringes_taxes_cast, rights_payments_cast,});
        // production
        const {production_manager_quantity,
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
          craft_services_rate} = data.results[0];
          setPostDataProduction({production_manager_quantity,
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
            craft_services_rate});

      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [history, id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("project", id );
    // totals
    formData.append("above_the_line_total", aboveTheLineTotal);
    formData.append("below_the_lineB_total", belowTheLineBTotal);
    formData.append("grand_total", grandTotal);
    // prepared by
    formData.append("prelimfin", prelimfin);
    formData.append("preparedby", preparedby);
    formData.append("approvedby", approvedby);
    formData.append("approvedbyco", approvedbyco);
    // details
    formData.append("title", title);
    formData.append("series", series);
    formData.append("prodco", prodco);
    formData.append("writer", writer);
    formData.append("format", format);
    formData.append("location", location);
    formData.append("dated", dated);
    formData.append("prelimfin", prelimfin);
    formData.append("preparedby", preparedby);
    formData.append("approvedby", approvedby);
    formData.append("approvedbyco", approvedbyco);
    // length
    formData.append("research", research);
    formData.append("prep", prep);
    formData.append("shoot", shoot);
    formData.append("wrap", wrap);
    formData.append("post", post);
    formData.append("length_total", postDataLengthTotal);
    // ABOVE THE LINE
    // rights miscellaneous
    formData.append("story_rights", story_rights);
    formData.append("miscellaneous", miscellaneous);
    formData.append("rights_total ", postDataRightsTotal); 
    // development
    formData.append("research_development", research_development);
    formData.append("prelim_budget", prelim_budget);
    formData.append("consultant_expenses", consultant_expenses);
    formData.append("office_expenses", office_expenses);
    formData.append("staff", staff);
    formData.append("travel_expenses_development", travel_expenses_development);
    formData.append("living_expenses_development", living_expenses_development);
    formData.append("other_development", other_development);
    formData.append("fringes_taxes_development", fringes_taxes_development);
    formData.append("development_total ", developmentTotal);
    // scenario
    formData.append("writers_quantity", writers_quantity);
    formData.append("writers_units_number", writers_units_number);
    formData.append("writers_units_name", writers_units_name);
    formData.append("writers_rate", writers_rate);
    formData.append("writers_total", writersTotal);
    formData.append("consultants_quantity", consultants_quantity);
    formData.append("consultants_units_number", consultants_units_number);
    formData.append("consultants_units_name", consultants_units_name);
    formData.append("consultants_rate", consultants_rate);
    formData.append("consultants_total", consultantsTotal);
    formData.append("editors_scenario_quantity", editors_scenario_quantity);
    formData.append("editors_scenario_units_number ", editors_scenario_units_number);
    formData.append("editors_scenario_units_name", editors_scenario_units_name);
    formData.append("editors_scenario_rate", editors_scenario_rate);
    formData.append("editors_scenario_total", editorsscenarioTotal);
    formData.append("admin_scenario_quantity", admin_scenario_quantity);
    formData.append("admin_scenario_units_number ", admin_scenario_units_number);
    formData.append("admin_scenario_units_name", admin_scenario_units_name);
    formData.append("admin_scenario_rate", admin_scenario_rate);
    formData.append("admin_scenario_total", adminScenarioTotal);
    formData.append("office_expenses_scenario ", office_expenses_scenario);
    formData.append("travel_expenses_scenario", travel_expenses_scenario);
    formData.append("living_expenses_scenario", living_expenses_scenario);
    formData.append("other_scenario", other_scenario);
    formData.append("fringes_taxes_scenario", fringes_taxes_scenario);
    formData.append("scenario_total", scenarioTotal);
    // producers-directors
    formData.append("executive_producers_quantity", executive_producers_quantity);
    formData.append("producers_quantity", producers_quantity);
    formData.append("line_producers_quantity", line_producers_quantity);
    formData.append("co_producers_quantity", co_producers_quantity);
    formData.append("associate_producers_quantity", associate_producers_quantity);
    formData.append("directors_quantity", directors_quantity);
    formData.append("unit2_directors_quantity", unit2_directors_quantity);
    formData.append("executive_producers_rate", executive_producers_rate);
    formData.append("producers_rate", producers_rate);
    formData.append("line_producers_rate", line_producers_rate);
    formData.append("co_producers_rate", co_producers_rate);
    formData.append("associate_producers_rate", associate_producers_rate);
    formData.append("directors_rate", directors_rate);
    formData.append("unit2_directors_rate", unit2_directors_rate);
    formData.append("executive_producers_total", execProducersTotal);
    formData.append("producers_total", producersTotal);
    formData.append("line_producers_total", lineProducersTotal);
    formData.append("co_producers_total", coProducersTotal);
    formData.append("associate_producers_total", assocProducersTotal);
    formData.append("directors_total", directorsTotal);
    formData.append("unit2_directors_total", unit2DirectorsTotal);
    formData.append("travel_expenses_producers_dirs", travel_expenses_producers_dirs);
    formData.append("living_expenses_producers_dirs", living_expenses_producers_dirs);
    formData.append("other_producers_dirs", other_producers_dirs);
    formData.append("fringes_taxes_producers_dirs", fringes_taxes_producers_dirs);
    formData.append("producers_dirs_total", producersDirsTotal);
    // Stars Music
    formData.append("stars", stars);
    formData.append("stars_rights_payments", stars_rights_payments);
    formData.append("travel_expenses_stars", travel_expenses_stars);
    formData.append("living_expenses_stars", living_expenses_stars);
    formData.append("other_stars", other_stars);
    formData.append("fringes_taxes_stars", fringes_taxes_stars);
    formData.append("music", music);
    formData.append("music_supervisor", music_supervisor);
    formData.append("travel_expenses_music", travel_expenses_music);
    formData.append("living_expenses_music", living_expenses_music);
    formData.append("music_rights_addl_songs", music_rights_addl_songs);
    formData.append("other_music", other_music);
    formData.append("fringes_taxes_music", fringes_taxes_music);
    formData.append("stars_music_total", starsMusicTotal);
    // Cast
    formData.append("principals_quantity", principals_quantity);
    formData.append("principals_units_number", principals_units_number);
    formData.append("principals_units_name", principals_units_name);
    formData.append("principals_rate", principals_rate);
    formData.append("actors_quantity", actors_quantity);
    formData.append("actors_units_number", actors_units_number);
    formData.append("actors_units_name", actors_units_name);
    formData.append("actors_rate", actors_rate);
    formData.append("stuntcoordinators_quantity", stuntcoordinators_quantity);
    formData.append("stuntcoordinators_units_number", stuntcoordinators_units_number);
    formData.append("stuntcoordinators_units_name", stuntcoordinators_units_name);
    formData.append("stuntcoordinators_rate", stuntcoordinators_rate);
    formData.append("stuntperformers_quantity", stuntperformers_quantity);
    formData.append("stuntperformers_units_number", stuntperformers_units_number);
    formData.append("stuntperformers_units_name", stuntperformers_units_name);
    formData.append("stuntperformers_rate", stuntperformers_rate);
    formData.append("otherperformers_quantity", otherperformers_quantity);
    formData.append("otherperformers_units_number", otherperformers_units_number);
    formData.append("otherperformers_units_name", otherperformers_units_name);
    formData.append("otherperformers_rate", otherperformers_rate);
    formData.append("extras_quantity", extras_quantity);
    formData.append("extras_units_number", extras_units_number);
    formData.append("extras_units_name", extras_units_name);
    formData.append("extras_rate", extras_rate);
    formData.append("principals_total", principalsTotal);
    formData.append("actors_total", actorsTotal);
    formData.append("stuntcoordinators_total", stuntcoordinatorsTotal);
    formData.append("stuntperformers_total", stuntperformersTotal);
    formData.append("otherperformers_total", otherperformersTotal);
    formData.append("extras_total", extrasTotal);
    formData.append("casting_director", casting_director);
    formData.append("extras_casting", extras_casting);
    formData.append("other_cast", other_cast);
    formData.append("fringes_taxes_cast", fringes_taxes_cast);
    formData.append("rights_payments_cast", rights_payments_cast);
    formData.append("cast_total", castTotal);
    // production staff
    formData.append("production_manager_quantity", production_manager_quantity);
    formData.append("production_manager_units_number", production_manager_units_number);
    formData.append("production_manager_units_name", production_manager_units_name);
    formData.append("production_manager_rate", production_manager_rate);
    formData.append("production_supervisor_quantity", production_supervisor_quantity);
    formData.append("production_supervisor_units_number", production_supervisor_units_number);
    formData.append("production_supervisor_units_name", production_supervisor_units_name);
    formData.append("production_supervisor_rate", production_supervisor_rate);
    formData.append("production_coordinator_quantity", production_coordinator_quantity);
    formData.append("production_coordinator_units_number", production_coordinator_units_number);
    formData.append("production_coordinator_units_name", production_coordinator_units_name);
    formData.append("production_coordinator_rate", production_coordinator_rate);
    formData.append("unit_manager_quantity", unit_manager_quantity);
    formData.append("unit_manager_units_number", unit_manager_units_number);
    formData.append("unit_manager_units_name", unit_manager_units_name);
    formData.append("unit_manager_rate", unit_manager_rate);
    formData.append("location_manager_quantity", location_manager_quantity);
    formData.append("location_manager_units_number", location_manager_units_number);
    formData.append("location_manager_units_name", location_manager_units_name);
    formData.append("location_manager_rate", location_manager_rate);
    formData.append("location_manager_assistant_quantity", location_manager_assistant_quantity);
    formData.append("location_manager_assistant_units_number", location_manager_assistant_units_number);
    formData.append("location_manager_assistant_units_name", location_manager_assistant_units_name);
    formData.append("location_manager_assistant_rate", location_manager_assistant_rate);
    formData.append("production_assistants_quantity", production_assistants_quantity);
    formData.append("production_assistants_units_number", production_assistants_units_number);
    formData.append("production_assistants_units_name", production_assistants_units_name);
    formData.append("production_assistants_rate", production_assistants_rate);
    formData.append("production_secretary_quantity", production_secretary_quantity);
    formData.append("production_secretary_units_number", production_secretary_units_number);
    formData.append("production_secretary_units_name", production_secretary_units_name);
    formData.append("production_secretary_rate", production_secretary_rate);
    formData.append("production_accountant_quantity", production_accountant_quantity);
    formData.append("production_accountant_units_number", production_accountant_units_number);
    formData.append("production_accountant_units_name", production_accountant_units_name);
    formData.append("production_accountant_rate", production_accountant_rate);
    formData.append("production_accountant_assistant_quantity", production_accountant_assistant_quantity);
    formData.append("production_accountant_assistant_units_number", production_accountant_assistant_units_number);
    formData.append("production_accountant_assistant_units_name", production_accountant_assistant_units_name);
    formData.append("production_accountant_assistant_rate", production_accountant_assistant_rate);
    formData.append("scriptsupervisor_continuity_quantity", scriptsupervisor_continuity_quantity);
    formData.append("scriptsupervisor_continuity_units_number", scriptsupervisor_continuity_units_number);
    formData.append("scriptsupervisor_continuity_units_name", scriptsupervisor_continuity_units_name);
    formData.append("scriptsupervisor_continuity_rate", scriptsupervisor_continuity_rate);
    formData.append("payroll_quantity", payroll_quantity);
    formData.append("payroll_units_number", payroll_units_number);
    formData.append("payroll_units_name", payroll_units_name);
    formData.append("payroll_rate", payroll_rate);
    formData.append("other_production_quantity", other_production_quantity);
    formData.append("other_production_units_number", other_production_units_number);
    formData.append("other_production_units_name", other_production_units_name);
    formData.append("other_production_rate", other_production_rate);
    formData.append("directors_assistant_quantity", directors_assistant_quantity);
    formData.append("directors_assistant_units_number", directors_assistant_units_number);
    formData.append("directors_assistant_units_name", directors_assistant_units_name);
    formData.append("directors_assistant_rate", directors_assistant_rate);
    formData.append("assistant_director_1st_quantity", assistant_director_1st_quantity);
    formData.append("assistant_director_1st_units_number", assistant_director_1st_units_number);
    formData.append("assistant_director_1st_units_name", assistant_director_1st_units_name);
    formData.append("assistant_director_1st_rate", assistant_director_1st_rate);
    formData.append("assistant_director_2nd_quantity", assistant_director_2nd_quantity);
    formData.append("assistant_director_2nd_units_number", assistant_director_2nd_units_number);
    formData.append("assistant_director_2nd_units_name", assistant_director_2nd_units_name);
    formData.append("assistant_director_2nd_rate", assistant_director_2nd_rate);
    formData.append("assistant_director_3rd_quantity", assistant_director_3rd_quantity);
    formData.append("assistant_director_3rd_units_number", assistant_director_3rd_units_number);
    formData.append("assistant_director_3rd_units_name", assistant_director_3rd_units_name);
    formData.append("assistant_director_3rd_rate", assistant_director_3rd_rate);
    formData.append("craft_services_quantity", craft_services_quantity);
    formData.append("craft_services_units_number", craft_services_units_number);
    formData.append("craft_services_units_name", craft_services_units_name);
    formData.append("craft_services_rate", craft_services_rate);
    formData.append("productionmanager_total", productionmanagerTotal);
    formData.append("productionsupervisor_total", productionsupervisorTotal);
    formData.append("productioncoordinator_total", productioncoordinatorTotal);
    formData.append("unitmanager_total", unitmanagerTotal);
    formData.append("locationmanager_total", locationmanagerTotal);
    formData.append("locationmanagerassistant_total", locationmanagerassistantTotal);
    formData.append("productionassistants_total", productionassistantsTotal);
    formData.append("productionsecretary_total", productionsecretaryTotal);
    formData.append("productionaccountant_total", productionaccountantTotal);
    formData.append("productionaccountantassistant_total", productionaccountantassistantTotal);
    formData.append("scriptsupervisorcontinuity_total", scriptsupervisorcontinuityTotal);
    formData.append("payroll_total", payrollTotal);
    formData.append("otherproduction_total", otherproductionTotal);
    formData.append("directorsassistant_total", directorsassistantTotal);
    formData.append("assistantdirector1st_total", assistantdirector1stTotal);
    formData.append("assistantdirector2nd_total", assistantdirector2ndTotal);
    formData.append("assistantdirector3rd_total", assistantdirector3rdTotal);
    formData.append("craftservices_total", craftservicesTotal);
    formData.append("productionstaff_total", productionstaffTotal);

    try {
      const { data } = await axiosReq.put(`/budgets/${budgetId}/`, formData);
      console.log(data);
      history.goBack();
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  return (
    <div className="mt-3 ">
    <Row >
    <Col className={`${styles.Back}`}>
    <Row className={ `${styles.OverviewBlue} mx-1 mb-1 py-3 text-center`}>
    <Col md={12}>
    <h5 className={ `${styles.BoldBlack}`}>EDIT BUDGET - Project ID: {id}</h5>
    </Col>
    </Row>
    <Row className="mt-1 ml-0" >
        <Col xs={3}>
        <Button
          className={`${btnStyles.Button} ${btnStyles.Blue} mb-2`}
          onClick={() => history.goBack()}
        >
          Back
        </Button>
        </Col>
    </Row>
    <Form className="mt-1 px-3" onSubmit={handleSubmit}>
    {prepare}
    <Row className={ `${styles.OverviewBlue} mx-1 mt-5 py-1`}>
    <Col md={10}>
    <h5 className={ `ml-3 ${styles.BoldBlack}`}>ABOVE THE LINE</h5>
    </Col>
    <Col md={2}><p className="mb-0">{aboveTheLineTotal} </p></Col>
    </Row>
    {/* sections click buttons */}
    <Row className={`${styles.ButtonLine} mx-1`}>
    <Col md={2} className='text-center'>
    <Row>
    <Col md={7}>
    <p className={`py-0 mb-0 ${styles.Button}`}
          onClick={() => setShowInfo(showInfo => !showInfo)} > Info
        </p>
    </Col>
    <Col className={`py-0 mb-0 ${styles.BorderRight}`} md={5}>
    <p className="mb-0">{postDataLengthTotal} </p>
    </Col>
    </Row>
    </Col>
    <Col md={2} className='text-center'>
    <Row>
    <Col md={7}>
    <p className={`py-0 mb-0 ${styles.Button}`}
          onClick={() => setShowRights(showRights => !showRights)} > Rights
    </p>
    </Col>
    <Col className={`py-0 mb-0 ${styles.BorderRight}`} md={5}>
    <p className="mb-0">{postDataRightsTotal} </p>
    </Col>
    </Row>
    </Col>
    <Col md={2} className='text-center'>
    <Row>
    <Col md={7}>
    <p className={`py-0 mb-0 ${styles.Button}`}
    onClick={() => setShowDevelopment(showDevelopment => !showDevelopment)} > Development
    </p>
    </Col>
    <Col className={`py-0 mb-0 ${styles.BorderRight}`} md={5}>
    <p className="mb-0">{developmentTotal} </p>
    </Col>
    </Row>
    </Col>
    <Col md={2} className='text-center'>
    <Row>
    <Col md={7}>
    <p className={`py-0 mb-0 ${styles.Button}`}
          onClick={() => setShowScenario(showScenario => !showScenario)} > Scenario
    </p>
    </Col>
    <Col className={`py-0 mb-0 ${styles.BorderRight}`} md={5}>
    <p className="mb-0">{scenarioTotal} </p>
    </Col>
    </Row>
    </Col>
    <Col md={2} className='text-center'>
    <Row>
    <Col md={7}>
    <p className={`py-0 mb-0 ${styles.Button}`}
          onClick={() => setShowProDirs(showProDirs => !showProDirs)} > Producers/Directors
    </p>
    </Col>
    <Col className={`py-0 mb-0 ${styles.BorderRight}`} md={5}>
    <p className="mb-0">{producersDirsTotal} </p>
    </Col>
    </Row>
    </Col>
    <Col md={2} className='text-center'>
    <Row>
    <Col md={7}>
    <p className={`py-0 mb-0 ${styles.Button}`}
          onClick={() => setShowStarsMus(showStarsMus => !showStarsMus)} > Stars/Music
    </p>
    </Col>
    <Col className={`py-0 mb-0 ${styles.BorderRight}`} md={5}>
    <p className="mb-0">{starsMusicTotal} </p>
    </Col>
    </Row>
    </Col>
    <Col md={2} className='text-center'>
    <Row>
    <Col md={7}>
    <p className={`py-0 mb-0 ${styles.Button}`}
          onClick={() => setShowCast(showCast => !showCast)} >Cast
    </p>
    </Col>
    <Col className={`py-0 mb-0 ${styles.BorderRight}`} md={5}>
    <p className="mb-0">{castTotal} </p>
    </Col>
    </Row>
    </Col>
    <Col md={2} className='text-center'>
    <Row>
    <Col md={7}>
    <p className={`py-0 mb-0 ${styles.Button}`}
          onClick={() => setShowProStaff(showProStaff => !showProStaff)} > Production Staff
    </p>
    </Col>
    <Col className={`py-0 mb-0 ${styles.BorderRight}`} md={5}>
    <p className="mb-0">{productionstaffTotal} </p>
    </Col>
    </Row>
    </Col>
    </Row>  
    {/* info */}
    {!showInfo ? (
      ""
    ) : (
      <Info
      postDataDetails={postDataDetails}
      setPostDataDetails={setPostDataDetails}
      postDataLength={postDataLength}
      setPostDataLength={setPostDataLength}
      postDataLengthTotal={postDataLengthTotal}
      setPostDataLengthTotal={setPostDataLengthTotal}
      setShow={setShowInfo}  /> 
    ) } 
    {/* rights */}
    {!showRights ? (
      ""
    ) : (
      <Rights
      postDataRights={postDataRights}
      setPostDataRights={setPostDataRights}
      postDataRightsTotal={postDataRightsTotal}
      setPostDataRightsTotal={setPostDataRightsTotal}
      setShow={setShowRights}  /> 
    ) }
    {/* development */}
    {!showDevelopment ? (
      ""
    ) : (
      <Development
      postDataDevelopment={postDataDevelopment}
      setPostDataDevelopment={setPostDataDevelopment}
      developmentTotal={developmentTotal}
      setDevelopmentTotal={setDevelopmentTotal}
      setShow={setShowDevelopment}  /> 
    ) }
    {/* scenario */}
    {!showScenario ? (
      ""
    ) : (
      <Scenario
      postDataScenario={postDataScenario}
      setPostDataScenario={setPostDataScenario}
      writersTotal={writersTotal}
      setWritersTotal={setWritersTotal}
      consultantsTotal={consultantsTotal}
      setConsultantsTotal={setConsultantsTotal}
      editorsscenarioTotal={editorsscenarioTotal}
      setEditorsscenarioTotal={setEditorsscenarioTotal}
      adminScenarioTotal={adminScenarioTotal}
      setAdminScenarioTotal={setAdminScenarioTotal}
      setShow={setShowScenario}  /> 
    ) }
    {/* producersDirs */}
    {!showProDirs ? (
      ""
    ) : (
      <ProducersDirectors
      postDataProducersDirs={postDataProducersDirs}
      setPostDataProducersDirs={setPostDataProducersDirs}
      execProducersTotal={execProducersTotal}
      setExecProducersTotal={setExecProducersTotal}
      producersTotal={producersTotal}
      setProducersTotal={setProducersTotal}
      lineProducersTotal={lineProducersTotal}
      setLineProducersTotal={setLineProducersTotal}
      coProducersTotal={coProducersTotal}
      setCoProducersTotal={setCoProducersTotal}
      assocProducersTotal={assocProducersTotal}
      setAssocProducersTotal={setAssocProducersTotal}
      directorsTotal={directorsTotal}
      setDirectorsTotal={setDirectorsTotal}
      unit2DirectorsTotal={unit2DirectorsTotal}
      setUnit2DirectorsTotal={setUnit2DirectorsTotal}
      producersDirsTotal={producersDirsTotal}
      setProducersDirsTotal={setProducersDirsTotal}
      setShow={setShowProDirs}  /> 
    ) }
    {/* starsmusic */}
    {!showStarsMus ? (
      ""
    ) : (
      <StarsMusic
      postDataStarsMusic={postDataStarsMusic}
      setPostDataStarsMusic={setPostDataStarsMusic}
      starsMusicTotal={starsMusicTotal}
      setStarsMusicTotal={setStarsMusicTotal}
      setShow={setShowStarsMus}  /> 
    ) }
    {abovethelinetotal}
    <Row className={ `${styles.OverviewBlue} mx-1 my-5 py-1 text-center`}>
    <Col md={12}>
    <h5 className={ `${styles.BoldBlack}`}>BELOW THE LINE - "B" PRODUCTION</h5>
    </Col>
    </Row>
    <Row className={ `${styles.OverviewBlue} mx-1 mt-5 py-1`}>
    <Col md={10}>
    <h5 className={ `ml-3 ${styles.BoldBlack}`}>BELOW THE LINE "B" PRODUCTION</h5>
    </Col>
    <Col md={2}><p className="mb-0">{belowTheLineBTotal} </p></Col>
    </Row>
    {/* cast */}
    {!showCast ? (
      ""
    ) : (
      <Cast
      postDataCast={postDataCast}
      setPostDataCast={setPostDataCast}
      principalsTotal={principalsTotal}
      setPrincipalsTotal={setPrincipalsTotal}
      actorsTotal={actorsTotal}
      setActorsTotal={setActorsTotal}
      stuntcoordinatorsTotal={stuntcoordinatorsTotal}
      setStuntcoordinatorsTotal={setStuntcoordinatorsTotal}
      stuntperformersTotal={stuntperformersTotal}
      setStuntperformersTotal={setStuntperformersTotal}
      otherperformersTotal={otherperformersTotal}
      setOtherperformersTotal={setOtherperformersTotal}
      extrasTotal={extrasTotal}
      setExtrasTotal={setExtrasTotal}
      castTotal={castTotal}
      setCastTotal={setCastTotal}
      setShow={setShowCast}  /> 
    ) }
    {/* production staff */}
    {!showProStaff ? (
      ""
    ) : (
      <ProductionStaff
      postDataProduction={postDataProduction}
      setPostDataProduction={setPostDataProduction}
      productionmanagerTotal={productionmanagerTotal}
      setProductionmanagerTotal={setProductionmanagerTotal}
      productionsupervisorTotal={productionsupervisorTotal}
      setProductionsupervisorTotal={setProductionsupervisorTotal}
      productioncoordinatorTotal={productioncoordinatorTotal}
      setProductioncoordinatorTotal={setProductioncoordinatorTotal}
      unitmanagerTotal={unitmanagerTotal}
      setUnitmanagerTotal={setUnitmanagerTotal}
      locationmanagerTotal={locationmanagerTotal}
      setLocationmanagerTotal={setLocationmanagerTotal}
      locationmanagerassistantTotal={locationmanagerassistantTotal}
      setLocationmanagerassistantTotal={setLocationmanagerassistantTotal}
      productionassistantsTotal={productionassistantsTotal}
      setProductionassistantsTotal={setProductionassistantsTotal}
      productionsecretaryTotal={productionsecretaryTotal}
      setProductionsecretaryTotal={setProductionsecretaryTotal}
      productionaccountantTotal={productionaccountantTotal}
      setProductionaccountantTotal={setProductionaccountantTotal}
      productionaccountantassistantTotal={productionaccountantassistantTotal}
      setProductionaccountantassistantTotal={setProductionaccountantassistantTotal}
      scriptsupervisorcontinuityTotal={scriptsupervisorcontinuityTotal}
      setScriptsupervisorcontinuityTotal={setScriptsupervisorcontinuityTotal}
      payrollTotal={payrollTotal}
      setPayrollTotal={setPayrollTotal}
      otherproductionTotal={otherproductionTotal}
      setOtherproductionTotal={setOtherproductionTotal}
      directorsassistantTotal={directorsassistantTotal}
      setDirectorsassistantTotal={setDirectorsassistantTotal}
      assistantdirector1stTotal={assistantdirector1stTotal}
      setAssistantdirector1stTotal={setAssistantdirector1stTotal}
      assistantdirector2ndTotal={assistantdirector2ndTotal}
      setAssistantdirector2ndTotal={setAssistantdirector2ndTotal}
      assistantdirector3rdTotal={assistantdirector3rdTotal}
      setAssistantdirector3rdTotal={setAssistantdirector3rdTotal}
      craftservicesTotal={craftservicesTotal}
      setCraftservicesTotal={setCraftservicesTotal}
      productionstaffTotal={productionstaffTotal}
      setProductionstaffTotal={setProductionstaffTotal}
      setShow={setShowProStaff}  /> 
    ) }
    {belowthelineBtotal}
    {grandtotal}
    {/* buttons */}
    <Row>
    <Col>
      <div className= {`mt-1`} >{buttons} </div>
    </Col>
    </Row>
    </Form>
    </Col>
    </Row>
    </div>
  );
}

export default BudgetEdit