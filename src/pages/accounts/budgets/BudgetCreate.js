/* Component in the Account component to create Budgets */
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
import DesignLabour from "./budgetsections/DesignLabour";
import Construction from "./budgetsections/Construction";
import SetDressingLabour from "./budgetsections/SetDressingLabour";
import PropertyLabour from "./budgetsections/PropertyLabour";
import Wrangling from "./budgetsections/Wrangling";
import SpecialEffects from "./budgetsections/SpecialEffects";
import Wardrobe from "./budgetsections/Wardrobe";
import Makeup from "./budgetsections/Makeup";
import Camera from "./budgetsections/Camera";
import Electric from "./budgetsections/Electric";
import Grip from "./budgetsections/Grip";
import Sound from "./budgetsections/Sound";

function BudgetCreate() {
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
  const [showDesign, setShowDesign] = useState(false);
  const [showCon, setShowCon] = useState(false);
  const [showDress, setShowDress] = useState(false);
  const [showProps, setShowProps] = useState(false);
  const [showWrang, setShowWrang] = useState(false);
  const [showFx, setShowFx] = useState(false);
  const [showWardrobe, setShowWardrobe] = useState(false);
  const [showMake, setShowMake] = useState(false);
  const [showCam, setShowCam] = useState(false);
  const [showElec, setShowElec] = useState(false);
  const [showGrip, setShowGrip] = useState(false);
  const [showSound, setShowSound] = useState(false);

  // INFO / LENGTH -------------------------
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
    fringes_taxes_development,} = postDataDevelopment;

  // Development Total postData 
  const [developmentTotal, setDevelopmentTotal] = useState(0);

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

  // Scenario Total postData 
  const [scenarioTotal, setScenarioTotal] = useState(0);

  // PRODUCERS DIRECTORS --------------------------------------------
  
  // producers/directors postData
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

  // STARS / MUSIC ------------------------------------------
  // Stars Music postData
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
  const [starsMusicTotal, setStarsMusicTotal] = useState(0);

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

  // Cast Total postData 
  const [castTotal, setCastTotal] = useState(0);

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

  // Production Total postData 
  const [productionstaffTotal, setProductionstaffTotal] = useState(0);

  // DESIGN LABOUR ------------------------------------------

  // Design Labour postData
  const [postDataDesign, setPostDataDesign] = useState({
    production_designer_quantity: 0,
    production_designer_units_number: 0,
    production_designer_units_name: "",
    production_designer_rate: 0,
    art_director_quantity: 0,
    art_director_units_number: 0,
    art_director_units_name: "",
    art_director_rate: 0,
    art_assistants_quantity: 0,
    art_assistants_units_number: 0,
    art_assistants_units_name: "",
    art_assistants_rate: 0,
    production_assistants_trainees_quantity: 0,
    production_assistants_trainees_units_number: 0,
    production_assistants_trainees_units_name: "",
    production_assistants_trainees_rate: 0,
    graphic_artists_quantity: 0,
    graphic_artists_units_number: 0,
    graphic_artists_units_name: "",
    graphic_artists_rate: 0,
    other_design: 0,
  });

  // Design Labour values
  const {production_designer_quantity, production_designer_units_number,
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

  // production designer Total postData
  const [productiondesignerTotal, setProductiondesignerTotal] = useState(0);
  // art director Total postData
  const [artdirectorTotal, setArtdirectorTotal] = useState(0);
  // art assistants Total postData
  const [artassistantsTotal, setArtassistantsTotal] = useState(0);
  // production assistants / trainees Total postData
  const [productionassistantstraineesTotal, setProductionassistantstraineesTotal] = useState(0);
  // graphic artists Total postData
  const [graphicartistsTotal, setGraphicartistsTotal] = useState(0);

  // Design Labour Total postData 
  const [designlabourTotal, setDesignlabourTotal] = useState(0);

  // CONSTRUCTION LABOUR ----------------------------------

  // Construction Labour postData
  const [postDataConstruction, setPostDataConstruction] = useState({
    constructioncoordinator_quantity: 0,
    constructioncoordinator_units_number: 0,
    constructioncoordinator_units_name: "",
    constructioncoordinator_rate: 0,
    headcarpenter_quantity: 0,
    headcarpenter_units_number: 0,
    headcarpenter_units_name: "",
    headcarpenter_rate: 0,
    carpenters_quantity: 0,
    carpenters_units_number: 0,
    carpenters_units_name: "",
    carpenters_rate: 0,
    scenicpainters_quantity: 0,
    scenicpainters_units_number: 0,
    scenicpainters_units_name: "",
    scenicpainters_rate: 0,
    headpainter_quantity: 0,
    headpainter_units_number: 0,
    headpainter_units_name: "",
    headpainter_rate: 0,
    painters_quantity: 0,
    painters_units_number: 0,
    painters_units_name: "",
    painters_rate: 0,
    labourers_quantity: 0,
    labourers_units_number: 0,
    labourers_units_name: "",
    labourers_rate: 0,
    other_construction: 0,
  });

  // Construction Labour values
  const {
    constructioncoordinator_quantity, constructioncoordinator_units_number,
    constructioncoordinator_units_name, constructioncoordinator_rate,
    headcarpenter_quantity, headcarpenter_units_number,
    headcarpenter_units_name, headcarpenter_rate,
    carpenters_quantity, carpenters_units_number,
    carpenters_units_name, carpenters_rate,
    scenicpainters_quantity, scenicpainters_units_number,
    scenicpainters_units_name, scenicpainters_rate,
    headpainter_quantity, headpainter_units_number,
    headpainter_units_name, headpainter_rate,
    painters_quantity, painters_units_number, 
    painters_units_name, painters_rate,
    labourers_quantity, labourers_units_number, 
    labourers_units_name, labourers_rate, other_construction,
  } = postDataConstruction;

  // Totals
  // construction coordinator Total postData
  const [constructioncoordinatorTotal, setConstructioncoordinatorTotal] = useState(0);

  // head carpenter Total postData
  const [headcarpenterTotal, setHeadcarpenterTotal] = useState(0);

  // carpenters Total postData
  const [carpentersTotal, setCarpentersTotal] = useState(0);

  // scenic painters Total postData
  const [scenicpaintersTotal, setScenicpaintersTotal] = useState(0);

  // head painter Total postData
  const [headpainterTotal, setHeadpainterTotal] = useState(0);

  // painters Total postData
  const [paintersTotal, setPaintersTotal] = useState(0);

  // labourers Total postData
  const [labourersTotal, setLabourersTotal] = useState(0);

  // construction Labour Total postData 
  const [constructionlabourTotal, setConstructionlabourTotal] = useState(0);

  // SET DRESSING LABOUR ----------------------------------

  // Set Dressing Labour postData 
  const [postDataSetDressing, setPostDataSetDressing] = useState({
    set_decorator_quantity: 0,
    set_decorator_units_number: 0,
    set_decorator_units_name: "",
    set_decorator_rate: 0,
    assist_set_decorator_quantity: 0,
    assist_set_decorator_units_number: 0,
    assist_set_decorator_units_name: "",
    assist_set_decorator_rate: 0,
    lead_man_quantity: 0,
    lead_man_units_number: 0,
    lead_man_units_name: "",
    lead_man_rate: 0,
    set_dressers_quantity: 0,
    set_dressers_units_number: 0,
    set_dressers_units_name: "",
    set_dressers_rate: 0,
    swing_gang_quantity: 0,
    swing_gang_units_number: 0,
    swing_gang_units_name: "",
    swing_gang_rate: 0,
    set_dressing_buyer_quantity: 0,
    set_dressing_buyer_units_number: 0,
    set_dressing_buyer_units_name: "",
    set_dressing_buyer_rate: 0,
    other_set_dressing: 0,
  });

  // Set Dressing Labour values
  const {set_decorator_quantity, set_decorator_units_number,
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
    other_set_dressing,
  } = postDataSetDressing;

  // Totals
  // set decorator Total postData
  const [decoratorsetTotal, setDecoratorsetTotal] = useState(0);

  // assist set decorator Total postData
  const [assistdecoratorsetTotal, setAssistdecoratorsetTotal] = useState(0);

  // lead man Total postData
  const [leadmanTotal, setLeadmanTotal] = useState(0);

  // dressers Total postData
  const [dressersTotal, setDressersTotal] = useState(0);

  // swing gang Total postData
  const [swinggangTotal, setSwinggangTotal] = useState(0);

  // set dressing buyer Total postData
  const [dressingbuyerTotal, setDressingbuyerTotal] = useState(0);

  // set dressing Labour Total postData 
  const [dressinglabourTotal, setDressinglabourTotal] = useState(0);

  // PROPERTY LABOUR ----------------------------------

  // Property Labour postData 
  const [postDataProperty, setPostDataProperty] = useState({
    property_master_quantity: 0,
    property_master_units_number: 0,
    property_master_units_name: "",
    property_master_rate: 0,
    assist_property_master_quantity: 0,
    assist_property_master_units_number: 0,
    assist_property_master_units_name: "",
    assist_property_master_rate: 0,
    on_set_props_person_quantity: 0,
    on_set_props_person_units_number: 0,
    on_set_props_person_units_name: "",
    on_set_props_person_rate: 0,
    property_buyer_quantity: 0,
    property_buyer_units_number: 0,
    property_buyer_units_name: "",
    property_buyer_rate: 0,
    armorer_quantity: 0,
    armorer_units_number: 0,
    armorer_units_name: "",
    armorer_rate: 0,
    other_property: 0,
  });

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

  // Totals
  // property master Total postData
  const [propertymasterTotal, setPropertymasterTotal] = useState(0);

  // assist property master Total postData
  const [assistpropertymasterTotal, setAssistpropertymasterTotal] = useState(0);

  // on set props person Total postData
  const [onsetpropspersonTotal, setOnsetpropspersonTotal] = useState(0);

  // property buyer Total postData
  const [propertybuyerTotal, setPropertybuyerTotal] = useState(0);

  // armorer Total postData
  const [armorerTotal, setArmorerTotal] = useState(0);

  // Property Labour Total postData 
  const [propertylabourTotal, setPropertylabourTotal] = useState(0);

  // WRANGLING LABOUR ----------------------------------

  // Wrangling Labour postData 
  const [postDataWrangling, setPostDataWrangling] = useState({
    head_wrangler_quantity: 0,
    head_wrangler_units_number: 0,
    head_wrangler_units_name: "",
    head_wrangler_rate: 0,
    other_wrangling_labour_quantity: 0,
    other_wrangling_labour_units_number: 0,
    other_wrangling_labour_units_name: "",
    other_wrangling_labour_rate: 0,
  });

  // Wrangling Labour values
  const {head_wrangler_quantity, head_wrangler_units_number,
    head_wrangler_units_name, head_wrangler_rate,
    other_wrangling_labour_quantity, other_wrangling_labour_units_number,
    other_wrangling_labour_units_name, other_wrangling_labour_rate,
  } = postDataWrangling;

  // Totals
  // head wrangler Total postData
  const [headwranglerTotal, setHeadwranglerTotal] = useState(0);

  // other wrangling labour Total postData
  const [otherwranglinglabourTotal, setOtherwranglinglabourTotal] = useState(0);

  // Wrangling Labour Total postData 
  const [wranglerlabourTotal, setWranglerlabourTotal] = useState(0);

  // SPECIAL EFFECTS LABOUR ----------------------------------

  // Special Effects Labour postData
  const [postDataSpecialEffects, setPostDataSpecialEffects] = useState({
    fx_supervisor_quantity: 0,
    fx_supervisor_units_number: 0,
    fx_supervisor_units_name: "",
    fx_supervisor_rate: 0,
    assist_fx_quantity: 0,
    assist_fx_units_number: 0,
    assist_fx_units_name: "",
    assist_fx_rate: 0,
    other_fx_labour_quantity: 0,
    other_fx_labour_units_number: 0,
    other_fx_labour_units_name: "",
    other_fx_labour_rate: 0,
  });

  // Special Effects Labour values
  const {fx_supervisor_quantity, fx_supervisor_units_number,
    fx_supervisor_units_name, fx_supervisor_rate,
    assist_fx_quantity, assist_fx_units_number,
    assist_fx_units_name, assist_fx_rate,
    other_fx_labour_quantity, other_fx_labour_units_number,
    other_fx_labour_units_name, other_fx_labour_rate,
  } = postDataSpecialEffects;

  // Totals
  // fx supervisor Total postData 
  const [fxsupervisorTotal, setFxsupervisorTotal] = useState(0);

  // assistant fx Total postData
  const [assistfxTotal, setAssistfxTotal] = useState(0);

  // other fx labour Total postData
  const [otherfxlabourTotal, setOtherfxlabourTotal] = useState(0);

  // FX Labour Total postData 
  const [fxlabourTotal, setFxlabourTotal] = useState(0);

  // WARDROBE LABOUR ----------------------------------

  // Wardrobe Labour postData
  const [postDataWardrobe, setPostDataWardrobe] = useState({
    costume_designer_quantity: 0,
    costume_designer_units_number: 0,
    costume_designer_units_name: "",
    costume_designer_rate: 0,
    assist_costume_designer_quantity: 0,
    assist_costume_designer_units_number: 0,
    assist_costume_designer_units_name: "",
    assist_costume_designer_rate: 0,
    head_wardrobe_quantity: 0,
    head_wardrobe_units_number: 0,
    head_wardrobe_units_name: "",
    head_wardrobe_rate: 0,
    wardrobe_assist_quantity: 0,
    wardrobe_assist_units_number: 0,
    wardrobe_assist_units_name: "",
    wardrobe_assist_rate: 0,
    truck_costumer_quantity: 0,
    truck_costumer_units_number: 0,
    truck_costumer_units_name: "",
    truck_costumer_rate: 0,
    other_wardrobe_labour_quantity: 0,
    other_wardrobe_labour_units_number: 0,
    other_wardrobe_labour_units_name: "",
    other_wardrobe_labour_rate: 0,
  });

  // Wardrobe Labour postData values
  const {costume_designer_quantity, costume_designer_units_number,
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
  } = postDataWardrobe;

  // Totals
  // costume designer Total postData 
  const [costumedesignerTotal, setCostumedesignerTotal] = useState(0);

  // assistant costume designer Total postData 
  const [assistcosdesignerTotal, setAssistcosdesignerTotal] = useState(0);

  // head wardrobe Total postData 
  const [headwardrobeTotal, setHeadwardrobeTotal] = useState(0);

  // wardrobe assist Total postData 
  const [wardrobeassistTotal, setWardrobeassistTotal] = useState(0);

  // truck costumer Total postData 
  const [truckcostumerTotal, setTruckcostumerTotal] = useState(0);

  // other wardrobe labour Total postData 
  const [otherwardrobeTotal, setOtherwardrobeTotal] = useState(0);

  // Wardrobe Labour Total postData 
  const [wardrobelabourTotal, setWardrobelabourTotal] = useState(0);

  // MAKEUP LABOUR ----------------------------------

  // Makeup Labour postData
  const [postDataMakeup, setPostDataMakeup] = useState({
    makeup_dept_head_quantity: 0,
    makeup_dept_head_units_number: 0,
    makeup_dept_head_units_name: "",
    makeup_dept_head_rate: 0,
    key_makeup_quantity: 0,
    key_makeup_units_number: 0,
    key_makeup_units_name: "",
    key_makeup_rate: 0,
    makeup_artist_quantity: 0,
    makeup_artist_units_number: 0,
    makeup_artist_units_name: "",
    makeup_artist_rate: 0,
    key_hairstylist_quantity: 0,
    key_hairstylist_units_number: 0,
    key_hairstylist_units_name: "",
    key_hairstylist_rate: 0,
    hairdresser_quantity: 0,
    hairdresser_units_number: 0,
    hairdresser_units_name: "",
    hairdresser_rate: 0,
    hair_makeup_dailies_quantity: 0,
    hair_makeup_dailies_units_number: 0,
    hair_makeup_dailies_units_name: "",
    hair_makeup_dailies_rate: 0,
    other_makeup_labour_quantity: 0,
    other_makeup_labour_units_number: 0,
    other_makeup_labour_units_name: "",
    other_makeup_labour_rate: 0,
    sfx_makeup_quantity: 0,
    sfx_makeup_units_number: 0,
    sfx_makeup_units_name: "",
    sfx_makeup_rate: 0,
  });

  const {makeup_dept_head_quantity, makeup_dept_head_units_number,
    makeup_dept_head_units_name, makeup_dept_head_rate,
    key_makeup_quantity, key_makeup_units_number,
    key_makeup_units_name, key_makeup_rate,
    makeup_artist_quantity, makeup_artist_units_number,
    makeup_artist_units_name, makeup_artist_rate,
    key_hairstylist_quantity, key_hairstylist_units_number,
    key_hairstylist_units_name, key_hairstylist_rate,
    hairdresser_quantity, hairdresser_units_number,
    hairdresser_units_name, hairdresser_rate,
    hair_makeup_dailies_quantity, hair_makeup_dailies_units_number,
    hair_makeup_dailies_units_name, hair_makeup_dailies_rate,
    other_makeup_labour_quantity, other_makeup_labour_units_number,
    other_makeup_labour_units_name, other_makeup_labour_rate,
    sfx_makeup_quantity, sfx_makeup_units_number,
    sfx_makeup_units_name, sfx_makeup_rate,
  } = postDataMakeup;
  
  // Totals
  // head makeup Total postData 
  const [headmakeupTotal, setHeadmakeupTotal] = useState(0);

  // key makeup Total postData 
  const [keymakeupTotal, setKeymakeupTotal] = useState(0);

  // makeup artist Total postData 
  const [makeupartistTotal, setMakeupartistTotal] = useState(0);

  // key hairstylist Total postData 
  const [keyhairstylistTotal, setKeyhairstylistTotal] = useState(0);

  // hairdresser Total postData 
  const [hairdresserTotal, setHairdresserTotal] = useState(0);

  // hair makeup dailies Total postData 
  const [hairmakeupdailiesTotal, setHairmakeupdailiesTotal] = useState(0);

  // other makeup labour Total postData 
  const [othermakeuplabourTotal, setOthermakeuplabourTotal] = useState(0);

  // sfxmakeup labour Total postData 
  const [sfxmakeupTotal, setSfxmakeupTotal] = useState(0);

  // Makeup Labour Total postData 
  const [makeuplabourTotal, setMakeuplabourTotal] = useState(0);

  // CAMERA LABOUR ----------------------------------

  // Camera Labour postData
  const [postDataCamera, setPostDataCamera] = useState({
    dop_qty: 0,
    dop_uno: 0,
    dop_una: "",
    dop_rt: 0,
    camera_op_qty: 0,
    camera_op_uno: 0,
    camera_op_una: "",
    camera_op_rt: 0,
    cam_ac1_qty: 0,
    cam_ac1_uno: 0,
    cam_ac1_una: "",
    cam_ac1_rt: 0,
    cam_ac2_qty: 0,
    cam_ac2_uno: 0,
    cam_ac2_una: "",
    cam_ac2_rt: 0,
    dit_qty: 0,
    dit_uno: 0,
    dit_una: "",
    dit_rt: 0,
    steadicam_qty: 0,
    steadicam_uno: 0,
    steadicam_una: "",
    steadicam_rt: 0,
    cam_pa_qty: 0,
    cam_pa_uno: 0,
    cam_pa_una: "",
    cam_pa_rt: 0,
    drone_pilot_qty: 0,
    drone_pilot_uno: 0,
    drone_pilot_una: "",
    drone_pilot_rt: 0,
    other_cam_qty: 0,
    other_cam_uno: 0,
    other_cam_una: "",
    other_cam_rt: 0,
    stills_qty: 0,
    stills_uno: 0,
    stills_una: "",
    stills_rt: 0,
  });

  // Camera Labour postData values
  const {dop_qty, dop_uno, dop_una, dop_rt,
    camera_op_qty, camera_op_uno, camera_op_una, camera_op_rt,
    cam_ac1_qty, cam_ac1_uno, cam_ac1_una, cam_ac1_rt,
    cam_ac2_qty, cam_ac2_uno, cam_ac2_una, cam_ac2_rt,
    dit_qty, dit_uno, dit_una, dit_rt,
    steadicam_qty, steadicam_uno, steadicam_una, steadicam_rt,
    cam_pa_qty, cam_pa_uno, cam_pa_una, cam_pa_rt, 
    drone_pilot_qty, drone_pilot_uno, drone_pilot_una, drone_pilot_rt,
    other_cam_qty, other_cam_uno, other_cam_una, other_cam_rt,
    stills_qty, stills_uno, stills_una, stills_rt,
  } = postDataCamera;

  // Totals
  // dop Total postData 
  const [dopTotal, setDopTotal] = useState(0);

  // Camera Operator Total postData 
  const [cameraopTotal, setCameraopTotal] = useState(0);

  // 1st Assistant Camera Total postData 
  const [camac1Total, setCamac1Total] = useState(0);

  // 2nd Assistant Camera Total postData 
  const [camac2Total, setCamac2Total] = useState(0);

  // DIT Total postData 
  const [ditTotal, setDitTotal] = useState(0);

  // Steadicam Total postData 
  const [steadicamTotal, setSteadicamTotal] = useState(0);

  // Camera PA Total postData 
  const [campaTotal, setCampaTotal] = useState(0);

  // Drone Pilot Total postData 
  const [dronepilotTotal, setDronepilotTotal] = useState(0);

  // Other Camera Total postData 
  const [othercamTotal, setOthercamTotal] = useState(0);

  // Stills Total postData 
  const [stillsTotal, setStillsTotal] = useState(0);

  // Camera Labour Total postData 
  const [cameralabourTotal, setCameralabourTotal] = useState(0);

  // ELECTRICAL LABOUR ----------------------------------

  // Electrical Labour postData
  const [postDataElectric, setPostDataElectric] = useState({
    gaffer_qty: 0,
    gaffer_uno: 0,
    gaffer_una: "",
    gaffer_rt: 0,
    best_boy_qty: 0,
    best_boy_uno: 0,
    best_boy_una: "",
    best_boy_rt: 0,
    electrician_qty: 0,
    electrician_uno: 0,
    electrician_una: "",
    electrician_rt: 0,
    dailies_elec_qty: 0,
    dailies_elec_uno: 0,
    dailies_elec_una: "",
    dailies_elec_rt: 0,
    generator_op_qty: 0,
    generator_op_uno: 0,
    generator_op_una: "",
    generator_op_rt: 0,
    other_elec_qty: 0,
    other_elec_uno: 0,
    other_elec_una: "",
    other_elec_rt: 0,
  });

  const {gaffer_qty, gaffer_uno, gaffer_una, gaffer_rt,
    best_boy_qty, best_boy_uno, best_boy_una, best_boy_rt,
    electrician_qty, electrician_uno, electrician_una, electrician_rt,
    dailies_elec_qty, dailies_elec_uno, dailies_elec_una, dailies_elec_rt,
    generator_op_qty, generator_op_uno, generator_op_una, generator_op_rt,
    other_elec_qty, other_elec_uno, other_elec_una, other_elec_rt,
    } = postDataElectric;

  // Totals
  // gaffer Total postData 
  const [gafferTotal, setGafferTotal] = useState(0);

  // best boy Total postData 
  const [bestboyTotal, setBestboyTotal] = useState(0);

  // electrician Total postData 
  const [electricianTotal, setElectricianTotal] = useState(0);

  // dailies electric Total postData 
  const [dailieselecTotal, setDailieselecTotal] = useState(0);

  // generator operator Total postData 
  const [generatoropTotal, setGeneratoropTotal] = useState(0);

  // other electric Total postData 
  const [otherelectricTotal, setOtherelectricTotal] = useState(0);

  // Electric Labour Total postData 
  const [electriclabourTotal, setElectriclabourTotal] = useState(0);

  // GRIP LABOUR ----------------------------------

  // Grip Labour postData
  const [postDataGrip, setPostDataGrip] = useState({
    key_grip_qty: 0,
    key_grip_uno: 0,
    key_grip_una: "",
    key_grip_rt: 0,
    best_boy_grip_qty: 0,
    best_boy_grip_uno: 0,
    best_boy_grip_una: "",
    best_boy_grip_rt: 0,
    grips_qty: 0,
    grips_uno: 0,
    grips_una: "",
    grips_rt: 0,
    dailies_grip_qty: 0,
    dailies_grip_uno: 0,
    dailies_grip_una: "",
    dailies_grip_rt: 0,
    dolly_crane_grip_qty: 0,
    dolly_crane_grip_uno: 0,
    dolly_crane_grip_una: "",
    dolly_crane_grip_rt: 0,
    swing_grips_qty: 0,
    swing_grips_uno: 0,
    swing_grips_una: "",
    swing_grips_rt: 0,
    other_grip_labour_qty: 0,
    other_grip_labour_uno: 0,
    other_grip_labour_una: "",
    other_grip_labour_rt: 0,
  });

  const {key_grip_qty, key_grip_uno, key_grip_una, key_grip_rt,
    best_boy_grip_qty, best_boy_grip_uno, best_boy_grip_una, best_boy_grip_rt,
    grips_qty, grips_uno, grips_una, grips_rt,
    dailies_grip_qty, dailies_grip_uno, dailies_grip_una, dailies_grip_rt, 
    dolly_crane_grip_qty, dolly_crane_grip_uno, dolly_crane_grip_una, dolly_crane_grip_rt,
    swing_grips_qty, swing_grips_uno, swing_grips_una, swing_grips_rt,
    other_grip_labour_qty, other_grip_labour_uno, other_grip_labour_una, other_grip_labour_rt,
    } = postDataGrip;

  // Totals
  // key grip Total postData 
  const [keygripTotal, setKeygripTotal] = useState(0);

  // best boy grip Total postData 
  const [bestboygripTotal, setBestboygripTotal] = useState(0);

  // grips Total postData 
  const [gripsTotal, setGripsTotal] = useState(0);

  // dailies grip Total postData 
  const [dailiesgripTotal, setDailiesgripTotal] = useState(0);

  // dolly crane grip Total postData 
  const [dollycranegripTotal, setDollycranegripTotal] = useState(0);

  // swing grips Total postData 
  const [swinggripsTotal, setSwinggripsTotal] = useState(0);

  // other grip labour Total postData 
  const [othergriplabourTotal, setOthergriplabourTotal] = useState(0);

  // Grip Labour Total postData 
  const [griplabourTotal, setGriplabourTotal] = useState(0);

  // PRODUCTION SOUND LABOUR ----------------------------------

  // Production Sound Labour postData
  const [postDataSoundPro, setPostDataSoundPro] = useState({
    sound_mixer_qty: 0,
    sound_mixer_uno: 0,
    sound_mixer_una: "",
    sound_mixer_rt: 0,
    boom_operator_qty: 0,
    boom_operator_uno: 0,
    boom_operator_una: "",
    boom_operator_rt: 0,
    cable_wrangler_qty: 0,
    cable_wrangler_uno: 0,
    cable_wrangler_una: "",
    cable_wrangler_rt: 0,
    other_sound_labour_qty: 0,
    other_sound_labour_uno: 0,
    other_sound_labour_una: "",
    other_sound_labour_rt: 0,
  });

  const {sound_mixer_qty, sound_mixer_uno,
    sound_mixer_una, sound_mixer_rt,
    boom_operator_qty, boom_operator_uno,
    boom_operator_una, boom_operator_rt,
    cable_wrangler_qty, cable_wrangler_uno,
    cable_wrangler_una, cable_wrangler_rt,
    other_sound_labour_qty, other_sound_labour_uno,
    other_sound_labour_una, other_sound_labour_rt,
  } = postDataSoundPro;

  // Totals
  // sound mixer Total postData 
  const [soundmixerTotal, setSoundmixerTotal] = useState(0);

  // boom operator Total postData 
  const [boomoperatorTotal, setBoomoperatorTotal] = useState(0);

  // cable wrangler Total postData 
  const [cablewranglerTotal, setCablewranglerTotal] = useState(0)

  // other sound labour Total postData 
  const [othersoundlabourTotal, setOthersoundlabourTotal] = useState(0);

  // Sound Labour Total postData 
  const [soundlabourTotal, setSoundlabourTotal] = useState(0);

  // TRANSPORTATION LABOUR ----------------------------------

  // Transport Labour postData
  const [postDataTransport, setPostDataTransport] = useState({
    tp_co_ordinator_qty: 0,
    tp_coordinator_uno: 0,
    tp_coordinator_una: "",
    tp_coordinator_rt: 0,
    tp_captain_qty: 0,
    tp_captain_uno: 0,
    tp_captain_una: "",
    tp_captain_rt: 0,
    tp_manager_qty: 0,
    tp_manager_uno: 0,
    tp_manager_una: "",
    tp_manager_rt: 0,
    head_driver_qty: 0,
    head_driver_uno: 0,
    head_driver_una: "",
    head_driver_rt: 0,
    drivers_qty: 0,
    drivers_uno: 0,
    drivers_una: "",
    drivers_rt: 0,
  });

  const {tp_coordinator_qty, tp_coordinator_uno, tp_coordinator_una, tp_coordinator_rt,
    tp_captain_qty,tp_captain_uno, tp_captain_una, tp_captain_rt,
    tp_manager_qty, tp_manager_uno, tp_manager_una, tp_manager_rt,
    head_driver_qty, head_driver_uno, head_driver_una, head_driver_rt,
    drivers_qty, drivers_uno, drivers_una, drivers_rt,
  } = postDataTransport;

  // Totals
  // tp coordinator Total postData 
  const [tpcoordinatorTotal, setTpcoordinatorTotal] = useState(0);

  // tp captain Total postData 
  const [tpcaptainTotal, setTpcaptainTotal] = useState(0);

  // tp manager Total postData 
  const [tpmanagerTotal, setTpmanagerTotal] = useState(0);

  // head driver Total postData 
  const [headdriverTotal, setHeaddriverTotal] = useState(0);

  // drivers Total postData 
  const [driversTotal, setDriversTotal] = useState(0);

  // Transport Labour Total postData 
  const [transportlabourTotal, setTransportlabourTotal] = useState(0);

   // end below B

  // TOTALS ABOVE / BELOW / GRAND -----------------------------

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
  // eslint-disable-next-line
  const abovethelinetotal = (
    <div className="my-0 pl-3">
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
  // eslint-disable-next-line
  const belowthelineBtotal = (
    <div className="my-0 pl-3">
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
    <div className="mt-3 pl-3">
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

  // end totals-------------------------

  // Buttons
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

  // Submit
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
    // rights 
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
    // design
    formData.append("production_designer_quantity", production_designer_quantity);
    formData.append("production_designer_units_number", production_designer_units_number);
    formData.append("production_designer_units_name", production_designer_units_name);
    formData.append("production_designer_rate", production_designer_rate);
    formData.append("art_director_quantity", art_director_quantity);
    formData.append("art_director_units_number", art_director_units_number);
    formData.append("art_director_units_name", art_director_units_name);
    formData.append("art_director_rate", art_director_rate);
    formData.append("art_assistants_quantity", art_assistants_quantity);
    formData.append("art_assistants_units_number", art_assistants_units_number);
    formData.append("art_assistants_units_name", art_assistants_units_name);
    formData.append("art_assistants_rate", art_assistants_rate);
    formData.append("production_assistants_trainees_quantity", production_assistants_trainees_quantity);
    formData.append("production_assistants_trainees_units_number", production_assistants_trainees_units_number);
    formData.append("production_assistants_trainees_units_name", production_assistants_trainees_units_name);
    formData.append("production_assistants_trainees_rate", production_assistants_trainees_rate);
    formData.append("graphic_artists_quantity", graphic_artists_quantity);
    formData.append("graphic_artists_units_number", graphic_artists_units_number);
    formData.append("graphic_artists_units_name", graphic_artists_units_name);
    formData.append("graphic_artists_rate", graphic_artists_rate);
    formData.append("productiondesigner_total", productiondesignerTotal);
    formData.append("artdirector_total", artdirectorTotal);
    formData.append("artassistants_total", artassistantsTotal);
    formData.append("productionassistantstrainees_total", productionassistantstraineesTotal);
    formData.append("graphicartists_total", graphicartistsTotal);
    formData.append("other_design", other_design);
    formData.append("designlabour_total", designlabourTotal);
    // construction
    formData.append("constructioncoordinator_quantity", constructioncoordinator_quantity);
    formData.append("constructioncoordinator_units_number", constructioncoordinator_units_number);
    formData.append("constructioncoordinator_units_name", constructioncoordinator_units_name);
    formData.append("constructioncoordinator_rate", constructioncoordinator_rate);
    formData.append("headcarpenter_quantity", headcarpenter_quantity);
    formData.append("headcarpenter_units_number", headcarpenter_units_number);
    formData.append("headcarpenter_units_name", headcarpenter_units_name);
    formData.append("headcarpenter_rate", headcarpenter_rate);
    formData.append("carpenters_quantity", carpenters_quantity);
    formData.append("carpenters_units_number", carpenters_units_number);
    formData.append("carpenters_units_name", carpenters_units_name);
    formData.append("carpenters_rate", carpenters_rate);
    formData.append("scenicpainters_quantity", scenicpainters_quantity);
    formData.append("scenicpainters_units_number", scenicpainters_units_number);
    formData.append("scenicpainters_units_name", scenicpainters_units_name);
    formData.append("scenicpainters_rate", scenicpainters_rate);
    formData.append("headpainter_quantity", headpainter_quantity);
    formData.append("headpainter_units_number", headpainter_units_number);
    formData.append("headpainter_units_name", headpainter_units_name);
    formData.append("headpainter_rate", headpainter_rate);
    formData.append("painters_quantity", painters_quantity);
    formData.append("painters_units_number", painters_units_number);
    formData.append("painters_units_name", painters_units_name);
    formData.append("painters_rate", painters_rate);
    formData.append("labourers_quantity", labourers_quantity);
    formData.append("labourers_units_number", labourers_units_number);
    formData.append("labourers_units_name", labourers_units_name);
    formData.append("labourers_rate", labourers_rate);
    formData.append("other_construction", other_construction);
    formData.append("constructioncoordinator_total", constructioncoordinatorTotal);
    formData.append("headcarpenter_total", headcarpenterTotal);
    formData.append("carpenters_total", carpentersTotal);
    formData.append("scenicpainters_total", scenicpaintersTotal);
    formData.append("headpainter_total", headpainterTotal);
    formData.append("painters_total", paintersTotal);
    formData.append("labourers_total", labourersTotal);
    formData.append("constructionlabour_total", constructionlabourTotal);
    // dressing
    formData.append("set_decorator_quantity", set_decorator_quantity);
    formData.append("set_decorator_units_number", set_decorator_units_number);
    formData.append("set_decorator_units_name", set_decorator_units_name);
    formData.append("set_decorator_rate", set_decorator_rate);
    formData.append("assist_set_decorator_quantity", assist_set_decorator_quantity);
    formData.append("assist_set_decorator_units_number", assist_set_decorator_units_number);
    formData.append("assist_set_decorator_units_name", assist_set_decorator_units_name);
    formData.append("assist_set_decorator_rate", assist_set_decorator_rate);
    formData.append("lead_man_quantity", lead_man_quantity);
    formData.append("lead_man_units_number", lead_man_units_number);
    formData.append("lead_man_units_name", lead_man_units_name);
    formData.append("lead_man_rate", lead_man_rate);
    formData.append("set_dressers_quantity", set_dressers_quantity);
    formData.append("set_dressers_units_number", set_dressers_units_number);
    formData.append("set_dressers_units_name", set_dressers_units_name);
    formData.append("set_dressers_rate", set_dressers_rate);
    formData.append("swing_gang_quantity", swing_gang_quantity);
    formData.append("swing_gang_units_number", swing_gang_units_number);
    formData.append("swing_gang_units_name", swing_gang_units_name);
    formData.append("swing_gang_rate", swing_gang_rate);
    formData.append("set_dressing_buyer_quantity", set_dressing_buyer_quantity);
    formData.append("set_dressing_buyer_units_number", set_dressing_buyer_units_number);
    formData.append("set_dressing_buyer_units_name", set_dressing_buyer_units_name);
    formData.append("set_dressing_buyer_rate", set_dressing_buyer_rate);
    formData.append("other_set_dressing", other_set_dressing);
    formData.append("decoratorset_total", decoratorsetTotal);
    formData.append("assistdecoratorset_total", assistdecoratorsetTotal);
    formData.append("leadman_total", leadmanTotal);
    formData.append("dressers_total", dressersTotal);
    formData.append("swinggang_total", swinggangTotal);
    formData.append("dressingbuyer_total", dressingbuyerTotal);
    formData.append("dressinglabour_total", dressinglabourTotal);
    // property
    formData.append("property_master_quantity", property_master_quantity);
    formData.append("property_master_units_number", property_master_units_number);
    formData.append("property_master_units_name", property_master_units_name);
    formData.append("property_master_rate", property_master_rate);
    formData.append("assist_property_master_quantity", assist_property_master_quantity);
    formData.append("assist_property_master_units_number", assist_property_master_units_number);
    formData.append("assist_property_master_units_name", assist_property_master_units_name);
    formData.append("assist_property_master_rate", assist_property_master_rate);
    formData.append("on_set_props_person_quantity", on_set_props_person_quantity);
    formData.append("on_set_props_person_units_number", on_set_props_person_units_number);
    formData.append("on_set_props_person_units_name", on_set_props_person_units_name);
    formData.append("on_set_props_person_rate", on_set_props_person_rate);
    formData.append("property_buyer_quantity", property_buyer_quantity);
    formData.append("property_buyer_units_number", property_buyer_units_number);
    formData.append("property_buyer_units_name", property_buyer_units_name);
    formData.append("property_buyer_rate", property_buyer_rate);
    formData.append("armorer_quantity", armorer_quantity);
    formData.append("armorer_units_number", armorer_units_number);
    formData.append("armorer_units_name", armorer_units_name);
    formData.append("armorer_rate", armorer_rate);
    formData.append("other_property", other_property);
    formData.append("propertymaster_total", propertymasterTotal);
    formData.append("assistpropertymaster_total", assistpropertymasterTotal);
    formData.append("onsetpropsperson_total", onsetpropspersonTotal);
    formData.append("propertybuyer_total", propertybuyerTotal);
    formData.append("armorer_total", armorerTotal);
    formData.append("propertylabour_total", propertylabourTotal);
    // wrangling 
    formData.append("head_wrangler_quantity", head_wrangler_quantity);
    formData.append("head_wrangler_units_number", head_wrangler_units_number);
    formData.append("head_wrangler_units_name", head_wrangler_units_name);
    formData.append("head_wrangler_rate", head_wrangler_rate);
    formData.append("other_wrangling_labour_quantity", other_wrangling_labour_quantity);
    formData.append("other_wrangling_labour_units_number", other_wrangling_labour_units_number);
    formData.append("other_wrangling_labour_units_name", other_wrangling_labour_units_name);
    formData.append("other_wrangling_labour_rate", other_wrangling_labour_rate);
    formData.append("headwrangler_total", headwranglerTotal);
    formData.append("otherwranglinglabour_total", otherwranglinglabourTotal);
    formData.append("wranglerlabour_total", wranglerlabourTotal);
    // fx
    formData.append("fx_supervisor_quantity", fx_supervisor_quantity);
    formData.append("fx_supervisor_units_number", fx_supervisor_units_number);
    formData.append("fx_supervisor_units_name", fx_supervisor_units_name);
    formData.append("fx_supervisor_rate", fx_supervisor_rate);
    formData.append("assist_fx_quantity", assist_fx_quantity);
    formData.append("assist_fx_units_number", assist_fx_units_number);
    formData.append("assist_fx_units_name", assist_fx_units_name);
    formData.append("assist_fx_rate", assist_fx_rate);
    formData.append("other_fx_labour_quantity", other_fx_labour_quantity);
    formData.append("other_fx_labour_units_number", other_fx_labour_units_number);
    formData.append("other_fx_labour_units_name", other_fx_labour_units_name);
    formData.append("other_fx_labour_rate", other_fx_labour_rate);
    formData.append("fxsupervisor_total", fxsupervisorTotal);
    formData.append("assistfx_total", assistfxTotal);
    formData.append("otherfxlabour_total", otherfxlabourTotal);
    formData.append("fxlabour_total", fxlabourTotal);
    // wardrobe
    formData.append("costume_designer_quantity", costume_designer_quantity); 
    formData.append("costume_designer_units_number", costume_designer_units_number); 
    formData.append("costume_designer_units_name", costume_designer_units_name); 
    formData.append("costume_designer_rate", costume_designer_rate); 
    formData.append("assist_costume_designer_quantity", assist_costume_designer_quantity);
    formData.append("assist_costume_designer_units_number", assist_costume_designer_units_number); 
    formData.append("assist_costume_designer_units_name", assist_costume_designer_units_name); 
    formData.append("assist_costume_designer_rate", assist_costume_designer_rate); 
    formData.append("head_wardrobe_quantity", head_wardrobe_quantity); 
    formData.append("head_wardrobe_units_number", head_wardrobe_units_number); 
    formData.append("head_wardrobe_units_name", head_wardrobe_units_name); 
    formData.append("head_wardrobe_rate", head_wardrobe_rate); 
    formData.append("wardrobe_assist_quantity", wardrobe_assist_quantity); 
    formData.append("wardrobe_assist_units_number", wardrobe_assist_units_number); 
    formData.append("wardrobe_assist_units_name", wardrobe_assist_units_name); 
    formData.append("wardrobe_assist_rate", wardrobe_assist_rate); 
    formData.append("truck_costumer_quantity", truck_costumer_quantity); 
    formData.append("truck_costumer_units_number", truck_costumer_units_number); 
    formData.append("truck_costumer_units_name", truck_costumer_units_name); 
    formData.append("truck_costumer_rate", truck_costumer_rate); 
    formData.append("other_wardrobe_labour_quantity", other_wardrobe_labour_quantity); 
    formData.append("other_wardrobe_labour_units_number", other_wardrobe_labour_units_number); 
    formData.append("other_wardrobe_labour_units_name", other_wardrobe_labour_units_name); 
    formData.append("other_wardrobe_labour_rate", other_wardrobe_labour_rate); 
    formData.append("costumedesigner_total", costumedesignerTotal); 
    formData.append("assistcosdesigner_total", assistcosdesignerTotal); 
    formData.append("headwardrobe_total", headwardrobeTotal); 
    formData.append("wardrobeassist_total", wardrobeassistTotal); 
    formData.append("truckcostumer_total", truckcostumerTotal); 
    formData.append("otherwardrobe_total", otherwardrobeTotal); 
    formData.append("wardrobelabour_total", wardrobelabourTotal);
    // makeup
    formData.append("makeup_dept_head_quantity", makeup_dept_head_quantity);
    formData.append("makeup_dept_head_units_number", makeup_dept_head_units_number);
    formData.append("makeup_dept_head_units_name", makeup_dept_head_units_name);
    formData.append("makeup_dept_head_rate", makeup_dept_head_rate);
    formData.append("key_makeup_quantity", key_makeup_quantity);
    formData.append("key_makeup_units_number", key_makeup_units_number);
    formData.append("key_makeup_units_name", key_makeup_units_name);
    formData.append("key_makeup_rate", key_makeup_rate);
    formData.append("makeup_artist_quantity", makeup_artist_quantity);
    formData.append("makeup_artist_units_number", makeup_artist_units_number);
    formData.append("makeup_artist_units_name", makeup_artist_units_name);
    formData.append("makeup_artist_rate", makeup_artist_rate);
    formData.append("key_hairstylist_quantity", key_hairstylist_quantity);
    formData.append("key_hairstylist_units_number", key_hairstylist_units_number);
    formData.append("key_hairstylist_units_name", key_hairstylist_units_name);
    formData.append("key_hairstylist_rate", key_hairstylist_rate);
    formData.append("hairdresser_quantity", hairdresser_quantity);
    formData.append("hairdresser_units_number", hairdresser_units_number);
    formData.append("hairdresser_units_name", hairdresser_units_name);
    formData.append("hairdresser_rate", hairdresser_rate);
    formData.append("hair_makeup_dailies_quantity", hair_makeup_dailies_quantity);
    formData.append("hair_makeup_dailies_units_number", hair_makeup_dailies_units_number);
    formData.append("hair_makeup_dailies_units_name", hair_makeup_dailies_units_name);
    formData.append("hair_makeup_dailies_rate", hair_makeup_dailies_rate);
    formData.append("other_makeup_labour_quantity", other_makeup_labour_quantity);
    formData.append("other_makeup_labour_units_number", other_makeup_labour_units_number);
    formData.append("other_makeup_labour_units_name", other_makeup_labour_units_name);
    formData.append("other_makeup_labour_rate", other_makeup_labour_rate);
    formData.append("sfx_makeup_quantity", sfx_makeup_quantity);
    formData.append("sfx_makeup_units_number", sfx_makeup_units_number);
    formData.append("sfx_makeup_units_name", sfx_makeup_units_name);
    formData.append("sfx_makeup_rate", sfx_makeup_rate);
    formData.append("headmakeup_total", headmakeupTotal);
    formData.append("keymakeup_total", keymakeupTotal);
    formData.append("makeupartist_total", makeupartistTotal);
    formData.append("keyhairstylist_total", keyhairstylistTotal);
    formData.append("hairdresser_total", hairdresserTotal);
    formData.append("hairmakeupdailies_total", hairmakeupdailiesTotal);
    formData.append("othermakeuplabour_total", othermakeuplabourTotal);
    formData.append("sfxmakeup_total", sfxmakeupTotal);
    formData.append("makeuplabour_total", makeuplabourTotal);
    // camera
    formData.append("dop_qty", dop_qty);
    formData.append("dop_uno", dop_uno);
    formData.append("dop_una", dop_una);
    formData.append("dop_rt", dop_rt);
    formData.append("camera_op_qty", camera_op_qty);
    formData.append("camera_op_uno", camera_op_uno);
    formData.append("camera_op_una", camera_op_una);
    formData.append("camera_op_rt", camera_op_rt);
    formData.append("cam_ac1_qty", cam_ac1_qty);
    formData.append("cam_ac1_uno", cam_ac1_uno);
    formData.append("cam_ac1_una", cam_ac1_una);
    formData.append("cam_ac1_rt", cam_ac1_rt);
    formData.append("cam_ac2_qty", cam_ac2_qty);
    formData.append("cam_ac2_uno", cam_ac2_uno);
    formData.append("cam_ac2_una", cam_ac2_una);
    formData.append("cam_ac2_rt", cam_ac2_rt);
    formData.append("dit_qty", dit_qty);
    formData.append("dit_uno", dit_uno);
    formData.append("dit_una", dit_una);
    formData.append("dit_rt", dit_rt);
    formData.append("steadicam_qty", steadicam_qty);
    formData.append("steadicam_uno", steadicam_uno);
    formData.append("steadicam_una", steadicam_una);
    formData.append("steadicam_rt", steadicam_rt);
    formData.append("cam_pa_qty", cam_pa_qty);
    formData.append("cam_pa_uno", cam_pa_uno);
    formData.append("cam_pa_una", cam_pa_una);
    formData.append("cam_pa_rt", cam_pa_rt);
    formData.append("drone_pilot_qty", drone_pilot_qty);
    formData.append("drone_pilot_uno", drone_pilot_uno);
    formData.append("drone_pilot_una", drone_pilot_una);
    formData.append("drone_pilot_rt", drone_pilot_rt);
    formData.append("other_cam_qty", other_cam_qty);
    formData.append("other_cam_uno", other_cam_uno);
    formData.append("other_cam_una", other_cam_una);
    formData.append("other_cam_rt", other_cam_rt);
    formData.append("stills_qty", stills_qty);
    formData.append("stills_uno", stills_uno);
    formData.append("stills_una", stills_una);
    formData.append("stills_rt", stills_rt);
    formData.append("stills_total", stillsTotal);
    formData.append("dop_total", dopTotal);
    formData.append("cameraop_total", cameraopTotal);
    formData.append("camac1_total", camac1Total);
    formData.append("camac2_total", camac2Total);
    formData.append("dit_total", ditTotal);
    formData.append("steadicam_total", steadicamTotal);
    formData.append("campa_total", campaTotal);
    formData.append("dronepilot_total", dronepilotTotal);
    formData.append("othercam_total", othercamTotal);
    formData.append("cameralabour_total", cameralabourTotal);
    // electric
    formData.append("gaffer_qty", gaffer_qty);
    formData.append("gaffer_uno", gaffer_uno);
    formData.append("gaffer_una", gaffer_una);
    formData.append("gaffer_rt", gaffer_rt);
    formData.append("best_boy_qty", best_boy_qty);
    formData.append("best_boy_uno", best_boy_uno);
    formData.append("best_boy_una", best_boy_una);
    formData.append("best_boy_rt", best_boy_rt);
    formData.append("electrician_qty", electrician_qty);
    formData.append("electrician_uno", electrician_uno);
    formData.append("electrician_una", electrician_una);
    formData.append("electrician_rt", electrician_rt);
    formData.append("dailies_elec_qty", dailies_elec_qty);
    formData.append("dailies_elec_uno", dailies_elec_uno);
    formData.append("dailies_elec_una", dailies_elec_una);
    formData.append("dailies_elec_rt", dailies_elec_rt);
    formData.append("generator_op_qty", generator_op_qty);
    formData.append("generator_op_uno", generator_op_uno);
    formData.append("generator_op_una", generator_op_una);
    formData.append("generator_op_rt", generator_op_rt);
    formData.append("other_elec_qty", other_elec_qty);
    formData.append("other_elec_uno", other_elec_uno);
    formData.append("other_elec_una", other_elec_una);
    formData.append("other_elec_rt", other_elec_rt);
    formData.append("gaffer_total", gafferTotal);
    formData.append("bestboy_total", bestboyTotal);
    formData.append("electrician_total", electricianTotal);
    formData.append("dailieselec_total", dailieselecTotal);
    formData.append("generatorop_total", generatoropTotal);
    formData.append("otherelectric_total", otherelectricTotal);
    formData.append("electriclabour_total", electriclabourTotal);
    // grip 
    formData.append("key_grip_qty", key_grip_qty);
    formData.append("key_grip_uno", key_grip_uno);
    formData.append("key_grip_una", key_grip_una);
    formData.append("key_grip_rt", key_grip_rt);
    formData.append("best_boy_grip_qty", best_boy_grip_qty);
    formData.append("best_boy_grip_uno", best_boy_grip_uno);
    formData.append("best_boy_grip_una", best_boy_grip_una);
    formData.append("best_boy_grip_rt", best_boy_grip_rt);
    formData.append("grips_qty", grips_qty);
    formData.append("grips_uno", grips_uno);
    formData.append("grips_una", grips_una);
    formData.append("grips_rt", grips_rt);
    formData.append("dailies_grip_qty", dailies_grip_qty);
    formData.append("dailies_grip_uno", dailies_grip_uno);
    formData.append("dailies_grip_una", dailies_grip_una);
    formData.append("dailies_grip_rt", dailies_grip_rt);
    formData.append("dolly_crane_grip_qty", dolly_crane_grip_qty);
    formData.append("dolly_crane_grip_uno", dolly_crane_grip_uno);
    formData.append("dolly_crane_grip_una", dolly_crane_grip_una);
    formData.append("dolly_crane_grip_rt", dolly_crane_grip_rt);
    formData.append("swing_grips_qty", swing_grips_qty);
    formData.append("swing_grips_uno", swing_grips_uno);
    formData.append("swing_grips_una", swing_grips_una);
    formData.append("swing_grips_rt", swing_grips_rt);
    formData.append("other_grip_labour_qty", other_grip_labour_qty);
    formData.append("other_grip_labour_uno", other_grip_labour_uno);
    formData.append("other_grip_labour_una", other_grip_labour_una);
    formData.append("other_grip_labour_rt", other_grip_labour_rt);
    formData.append("keygrip_total", keygripTotal);
    formData.append("bestboygrip_total", bestboygripTotal);
    formData.append("grips_total", gripsTotal);
    formData.append("dailiesgrip_total", dailiesgripTotal);
    formData.append("dollycranegrip_total", dollycranegripTotal);
    formData.append("swinggrips_total", swinggripsTotal);
    formData.append("othergriplabour_total", othergriplabourTotal);
    formData.append("griplabour_total", griplabourTotal);
    // sound pro 
    formData.append("sound_mixer_qty", sound_mixer_qty);
    formData.append("sound_mixer_uno", sound_mixer_uno);
    formData.append("sound_mixer_una", sound_mixer_una);
    formData.append("sound_mixer_rt", sound_mixer_rt);
    formData.append("boom_operator_qty", boom_operator_qty);
    formData.append("boom_operator_uno", boom_operator_uno);
    formData.append("boom_operator_una", boom_operator_una);
    formData.append("boom_operator_rt", boom_operator_rt);
    formData.append("cable_wrangler_qty", cable_wrangler_qty);
    formData.append("cable_wrangler_uno", cable_wrangler_uno);
    formData.append("cable_wrangler_una", cable_wrangler_una);
    formData.append("cable_wrangler_rt", cable_wrangler_rt);
    formData.append("other_sound_labour_qty", other_sound_labour_qty);
    formData.append("other_sound_labour_uno", other_sound_labour_uno);
    formData.append("other_sound_labour_una", other_sound_labour_una);
    formData.append("other_sound_labour_rt", other_sound_labour_rt);
    formData.append("soundmixer_total", soundmixerTotal);
    formData.append("boomoperator_total", boomoperatorTotal);
    formData.append("cablewrangler_total", cablewranglerTotal);
    formData.append("othersoundlabour_total", othersoundlabourTotal);
    formData.append("soundlabour_total", soundlabourTotal);
    // formData.append("stars", stars);

    try {
      const { data } = await axiosReq.post("/budgets/", formData);
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
    <div className="mt-3">
    <Row >
    <Col className={`${styles.Back}`}>
    <Row className={ `${styles.OverviewBlue} mx-1 mb-1 py-3 text-center`}>
    <Col md={12}>
    <h5 className={ `${styles.BoldBlack}`}>CREATE BUDGET - Project ID: {id}</h5>
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
    <Form className="mt-3 px-3" onSubmit={handleSubmit}>
    {prepare}
    {/* above total */}
    <Row className={ `${styles.OverviewBlue} mx-1 mt-5 py-1`}>
    <Col md={10}>
    <h5 className={ `ml-3 ${styles.BoldBlack}`}>ABOVE THE LINE</h5>
    </Col>
    <Col md={2}><p className="mb-0">{aboveTheLineTotal} </p></Col>
    </Row>
    {/* sections above click buttons */}
    <Row className={`${styles.ButtonLine} mx-1`}>
    <Col md={4} className='px-0 mx-0'>
    <div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
    <Row>
    <Col md={8}>
    <p className={`pl-2 py-0 mb-0 ${styles.Button}`}
          onClick={() => setShowInfo(showInfo => !showInfo)} > Info / Length
        </p>
    </Col>
    <Col md={4}>
    <p className="mb-0">{postDataLengthTotal} </p>
    </Col>
    </Row>
    </div>
    </Col>
    <Col md={4} className='px-0 mx-0'>
    <div className={`p-0 m-0 ${styles.BorderRight}`}>
    <Row>
    <Col md={8}>
    <p className={`pl-2 py-0 mb-0 ${styles.Button}`}
          onClick={() => setShowRights(showRights => !showRights)} > Rights
    </p>
    </Col>
    <Col md={4}>
    <p className="mb-0">{postDataRightsTotal} </p>
    </Col>
    </Row>
    </div>
    </Col>
    <Col md={4} className='px-0 mx-0'>
    <div className={`p-0 m-0 ${styles.BorderRight}`}>
    <Row>
    <Col md={8}>
    <p className={`pl-2 py-0 mb-0 ${styles.Button}`}
    onClick={() => setShowDevelopment(showDevelopment => !showDevelopment)} > Development
    </p>
    </Col>
    <Col md={4}>
    <p className="mb-0">{developmentTotal} </p>
    </Col>
    </Row>
    </div>
    </Col>
    <Col md={4} className='px-0 mx-0'>
    <div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
    <Row>
    <Col md={8}>
    <p className={`pl-2 py-0 mb-0 ${styles.Button}`}
          onClick={() => setShowScenario(showScenario => !showScenario)} > Scenario
    </p>
    </Col>
    <Col md={4}>
    <p className="mb-0">{scenarioTotal} </p>
    </Col>
    </Row>
    </div>
    </Col>
    <Col md={4} className='px-0 mx-0'>
    <div className={`p-0 m-0 ${styles.BorderRight}`}>
    <Row>
    <Col md={8}>
    <p className={`pl-2 py-0 mb-0 ${styles.Button}`}
          onClick={() => setShowProDirs(showProDirs => !showProDirs)} > Producers/Directors
    </p>
    </Col>
    <Col md={4}>
    <p className="mb-0">{producersDirsTotal} </p>
    </Col>
    </Row>
    </div>
    </Col>
    <Col md={4} className='px-0 mx-0'>
    <div className={`p-0 m-0 ${styles.BorderRight}`}>
    <Row>
    <Col md={8}>
    <p className={`pl-2 py-0 mb-0 ${styles.Button}`}
          onClick={() => setShowStarsMus(showStarsMus => !showStarsMus)} > Stars/Music
    </p>
    </Col>
    <Col md={4}>
    <p className="mb-0">{starsMusicTotal} </p>
    </Col>
    </Row>
    </div>
    </Col>
    </Row>  
    {/* {abovethelinetotal} */}
    {/* below B */}
    <Row className={ `${styles.OverviewBlue} mx-1 mb-2 mt-2 py-1`}>
    <Col md={10}>
    <p className={ `mb-0 ml-3 ${styles.BoldBlack}`}>
      BELOW THE LINE "B" PRODUCTION</p>
    </Col>
    <Col md={2}><p className="mb-0">{belowTheLineBTotal} </p></Col>
    </Row>
    {/* sections below B click buttons */}
    <Row className={`${styles.ButtonLine} mx-1`}>
    <Col md={3} className='px-0 mx-0'>
    <div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
    <Row>
    <Col md={8}>
    <p className={`pl-2 py-0 mb-0 ${styles.Button}`}
          onClick={() => setShowCast(showCast => !showCast)} >Cast
    </p>
    </Col>
    <Col md={4}>
    <p className="mb-0">{castTotal} </p>
    </Col>
    </Row>
    </div>
    </Col>
    <Col md={3} className='px-0 mx-0'>
    <div className={`p-0 m-0 ${styles.BorderRight}`}>
    <Row>
    <Col md={8}>
    <p className={`pl-2 py-0 mb-0 ${styles.Button}`}
          onClick={() => setShowProStaff(showProStaff => !showProStaff)} > Production Staff
    </p>
    </Col>
    <Col md={4}>
    <p className="mb-0">{productionstaffTotal} </p>
    </Col>
    </Row>
    </div>
    </Col>
    <Col md={3} className='px-0 mx-0'>
    <div className={`p-0 m-0 ${styles.BorderRight}`}>
    <Row>
    <Col md={8}>
    <p className={`pl-2 py-0 mb-0 ${styles.Button}`}
          onClick={() => setShowDesign(showDesign => !showDesign)} > Design Labour
    </p>
    </Col>
    <Col md={4}>
    <p className="mb-0">{designlabourTotal} </p>
    </Col>
    </Row>
    </div>
    </Col>
    <Col md={3} className='px-0 mx-0'>
    <div className={`p-0 m-0 ${styles.BorderRight}`}>
    <Row>
    <Col md={8}>
    <p className={`pl-2 py-0 mb-0 ${styles.Button}`}
          onClick={() => setShowCon(showCon => !showCon)} >Construction Labour
    </p>
    </Col>
    <Col md={4}>
    <p className="mb-0">{constructionlabourTotal} </p>
    </Col>
    </Row>
    </div>
    </Col>
    <Col md={3} className='px-0 mx-0'>
    <div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
    <Row>
    <Col md={8}>
    <p className={`pl-2 py-0 mb-0 ${styles.Button}`}
          onClick={() => setShowDress(showDress => !showDress)} >Set Dressing Labour
    </p>
    </Col>
    <Col md={4}>
    <p className="mb-0">{dressinglabourTotal} </p>
    </Col>
    </Row>
    </div>
    </Col>
    {/* property */}
    <Col md={3} className='px-0 mx-0'>
    <div className={`p-0 m-0 ${styles.BorderRight}`}>
    <Row>
    <Col md={8}>
    <p className={`pl-2 py-0 mb-0 ${styles.Button}`}
          onClick={() => setShowProps(showProps => !showProps)} >Property Labour
    </p>
    </Col>
    <Col md={4}>
    <p className="mb-0">{propertylabourTotal} </p>
    </Col>
    </Row>
    </div>
    </Col>
    <Col md={3} className='px-0 mx-0'>
    <div className={`p-0 m-0 ${styles.BorderRight}`}>
    <Row>
    <Col md={8}>
    <p className={`pl-2 py-0 mb-0 ${styles.Button}`}
          onClick={() => setShowWrang(showWrang => !showWrang)} >Wrangling Labour
    </p>
    </Col>
    <Col md={4}>
    <p className="mb-0">{wranglerlabourTotal} </p>
    </Col>
    </Row>
    </div>
    </Col>
    <Col md={3} className='px-0 mx-0'>
    <div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
    <Row>
    <Col md={8}>
    <p className={`pl-2 py-0 mb-0 ${styles.Button}`}
          onClick={() => setShowFx(showFx => !showFx)} >FX Labour
    </p>
    </Col>
    <Col md={4}>
    <p className="mb-0">{fxlabourTotal} </p>
    </Col>
    </Row>
    </div>
    </Col>
    {/* wardrobe */}
    <Col md={3} className='px-0 mx-0'>
    <div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
    <Row>
    <Col md={8}>
    <p className={`pl-2 py-0 mb-0 ${styles.Button}`}
          onClick={() => setShowWardrobe(showWardrobe => !showWardrobe)} >Wardrobe Labour
    </p>
    </Col>
    <Col md={4}>
    <p className="mb-0">{wardrobelabourTotal} </p>
    </Col>
    </Row>
    </div>
    </Col>
    <Col md={3} className='px-0 mx-0'>
    <div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
    <Row>
    <Col md={8}>
    <p className={`pl-2 py-0 mb-0 ${styles.Button}`}
          onClick={() => setShowMake(showMake => !showMake)} >Makeup Labour
    </p>
    </Col>
    <Col md={4}>
    <p className="mb-0">{makeuplabourTotal} </p>
    </Col>
    </Row>
    </div>
    </Col>
    <Col md={3} className='px-0 mx-0'>
    <div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
    <Row>
    <Col md={8}>
    <p className={`pl-2 py-0 mb-0 ${styles.Button}`}
          onClick={() => setShowCam(showCam => !showCam)} >Camera Labour
    </p>
    </Col>
    <Col md={4}>
    <p className="mb-0">{cameralabourTotal} </p>
    </Col>
    </Row>
    </div>
    </Col>
    {/* electric */}
    <Col md={3} className='px-0 mx-0'>
    <div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
    <Row>
    <Col md={8}>
    <p className={`pl-2 py-0 mb-0 ${styles.Button}`}
          onClick={() => setShowElec(showElec => !showElec)} >Electrical Labour
    </p>
    </Col>
    <Col md={4}>
    <p className="mb-0">{electriclabourTotal} </p>
    </Col>
    </Row>
    </div>
    </Col>
    <Col md={3} className='px-0 mx-0'>
    <div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
    <Row>
    <Col md={8}>
    <p className={`pl-2 py-0 mb-0 ${styles.Button}`}
          onClick={() => setShowGrip(showGrip => !showGrip)} >Grip Labour
    </p>
    </Col>
    <Col md={4}>
    <p className="mb-0">{griplabourTotal} </p>
    </Col>
    </Row>
    </div>
    </Col>
    <Col md={3} className='px-0 mx-0'>
    <div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
    <Row>
    <Col md={8}>
    <p className={`pl-2 py-0 mb-0 ${styles.Button}`}
          onClick={() => setShowSound(showSound => !showSound)} >Production Sound Labour
    </p>
    </Col>
    <Col md={4}>
    <p className="mb-0">{soundlabourTotal} </p>
    </Col>
    </Row>
    </div>
    </Col>
    </Row> 
    {/* {belowthelineBtotal} */}
    {grandtotal}
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
      scenarioTotal={scenarioTotal}
      setScenarioTotal={setScenarioTotal}
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
    {/* design */}
    {!showDesign ? (
      ""
    ) : (
      <DesignLabour
      postDataDesign={postDataDesign}
      setPostDataDesign={setPostDataDesign}
      productiondesignerTotal={productiondesignerTotal}
      setProductiondesignerTotal={setProductiondesignerTotal}
      artdirectorTotal={artdirectorTotal}
      setArtdirectorTotal={setArtdirectorTotal}
      artassistantsTotal={artassistantsTotal}
      setArtassistantsTotal={setArtassistantsTotal}
      productionassistantstraineesTotal={productionassistantstraineesTotal}
      setProductionassistantstraineesTotal={setProductionassistantstraineesTotal}
      graphicartistsTotal={graphicartistsTotal}
      setGraphicartistsTotal={setGraphicartistsTotal}
      designlabourTotal={designlabourTotal}
      setDesignlabourTotal={setDesignlabourTotal}
      setShow={setShowDesign}  /> 
    ) }
    {/* construction */}
    {!showCon ? (
      ""
    ) : (
      <Construction
      postDataConstruction={postDataConstruction}
      setPostDataConstruction={setPostDataConstruction}
      constructioncoordinatorTotal={constructioncoordinatorTotal}
      setConstructioncoordinatorTotal={setConstructioncoordinatorTotal}
      headcarpenterTotal={headcarpenterTotal}
      setHeadcarpenterTotal={setHeadcarpenterTotal}
      carpentersTotal={carpentersTotal}
      setCarpentersTotal={setCarpentersTotal}
      scenicpaintersTotal={scenicpaintersTotal}
      setScenicpaintersTotal={setScenicpaintersTotal}
      headpainterTotal={headpainterTotal}
      setHeadpainterTotal={setHeadpainterTotal}
      paintersTotal={paintersTotal}
      setPaintersTotal={setPaintersTotal}
      labourersTotal={labourersTotal}
      setLabourersTotal={setLabourersTotal}
      constructionlabourTotal={constructionlabourTotal}
      setConstructionlabourTotal={setConstructionlabourTotal}
      setShow={setShowCon}  /> 
    ) }
    {/* set dressing */}
    {!showDress ? (
      ""
    ) : (
      <SetDressingLabour
      postDataSetDressing={postDataSetDressing}
      setPostDataSetDressing={setPostDataSetDressing}
      decoratorsetTotal={decoratorsetTotal}
      setDecoratorsetTotal={setDecoratorsetTotal}
      assistdecoratorsetTotal={assistdecoratorsetTotal}
      setAssistdecoratorsetTotal={setAssistdecoratorsetTotal}
      leadmanTotal={leadmanTotal}
      setLeadmanTotal={setLeadmanTotal}
      dressersTotal={dressersTotal}
      setDressersTotal={setDressersTotal}
      swinggangTotal={swinggangTotal}
      setSwinggangTotal={setSwinggangTotal}
      dressingbuyerTotal={dressingbuyerTotal}
      setDressingbuyerTotal={setDressingbuyerTotal}
      dressinglabourTotal={dressinglabourTotal}
      setDressinglabourTotal={setDressinglabourTotal}
      setShow={setShowDress}  /> 
    ) }
    {/* property */}
    {!showProps ? (
      ""
    ) : (
      <PropertyLabour
      postDataProperty={postDataProperty}
      setPostDataProperty={setPostDataProperty}
      propertymasterTotal={propertymasterTotal}
      setPropertymasterTotal={setPropertymasterTotal}
      assistpropertymasterTotal={assistpropertymasterTotal}
      setAssistpropertymasterTotal={setAssistpropertymasterTotal}
      onsetpropspersonTotal={onsetpropspersonTotal}
      setOnsetpropspersonTotal={setOnsetpropspersonTotal}
      propertybuyerTotal={propertybuyerTotal}
      setPropertybuyerTotal={setPropertybuyerTotal}
      armorerTotal={armorerTotal}
      setArmorerTotal={setArmorerTotal}
      propertylabourTotal={propertylabourTotal}
      setPropertylabourTotal={setPropertylabourTotal}
      setShow={setShowProps}  /> 
    ) }
    {/* wrangling */}
    {!showWrang ? (
      ""
    ) : (
      <Wrangling
      postDataWrangling={postDataWrangling}
      setPostDataWrangling={setPostDataWrangling}
      headwranglerTotal={headwranglerTotal}
      setHeadwranglerTotal={setHeadwranglerTotal}
      otherwranglinglabourTotal={otherwranglinglabourTotal}
      setOtherwranglinglabourTotal={setOtherwranglinglabourTotal}
      wranglerlabourTotal={wranglerlabourTotal}
      setWranglerlabourTotal={setWranglerlabourTotal}
      setShow={setShowWrang}  /> 
    ) }
    {/* fx */}
    {!showFx ? (
      ""
    ) : (
      <SpecialEffects
      postDataSpecialEffects={postDataSpecialEffects}
      setPostDataSpecialEffects={setPostDataSpecialEffects}
      fxsupervisorTotal={fxsupervisorTotal}
      setFxsupervisorTotal={setFxsupervisorTotal}
      assistfxTotal={assistfxTotal}
      setAssistfxTotal={setAssistfxTotal}
      otherfxlabourTotal={otherfxlabourTotal}
      setOtherfxlabourTotal={setOtherfxlabourTotal}
      fxlabourTotal={fxlabourTotal}
      setFxlabourTotal={setFxlabourTotal}
      setShow={setShowFx}  /> 
    ) }
    {/* wardrobe */}
    {!showWardrobe ? (
      ""
    ) : (
      <Wardrobe
      postDataWardrobe={postDataWardrobe}
      setPostDataWardrobe={setPostDataWardrobe}
      costumedesignerTotal={costumedesignerTotal}
      setCostumedesignerTotal={setCostumedesignerTotal}
      assistcosdesignerTotal={assistcosdesignerTotal}
      setAssistcosdesignerTotal={setAssistcosdesignerTotal}
      headwardrobeTotal={headwardrobeTotal}
      setHeadwardrobeTotal={setHeadwardrobeTotal}
      wardrobeassistTotal={wardrobeassistTotal}
      setWardrobeassistTotal={setWardrobeassistTotal}
      truckcostumerTotal={truckcostumerTotal}
      setTruckcostumerTotal={setTruckcostumerTotal}
      otherwardrobeTotal={otherwardrobeTotal}
      setOtherwardrobeTotal={setOtherwardrobeTotal}
      wardrobelabourTotal={wardrobelabourTotal}
      setWardrobelabourTotal={setWardrobelabourTotal}
      setShow={setShowWardrobe}  /> 
    ) }
    {/* makeup */}
    {!showMake ? (
      ""
    ) : (
      <Makeup 
      postDataMakeup={postDataMakeup}
      setPostDataMakeup={setPostDataMakeup}
      headmakeupTotal={headmakeupTotal}
      setHeadmakeupTotal={setHeadmakeupTotal}
      keymakeupTotal={keymakeupTotal}
      setKeymakeupTotal={setKeymakeupTotal}
      makeupartistTotal={makeupartistTotal}
      setMakeupartistTotal={setMakeupartistTotal}
      keyhairstylistTotal={keyhairstylistTotal}
      setKeyhairstylistTotal={setKeyhairstylistTotal}
      hairdresserTotal={hairdresserTotal}
      setHairdresserTotal={setHairdresserTotal}
      hairmakeupdailiesTotal={hairmakeupdailiesTotal}
      setHairmakeupdailiesTotal={setHairmakeupdailiesTotal}
      othermakeuplabourTotal={othermakeuplabourTotal}
      setOthermakeuplabourTotal={setOthermakeuplabourTotal}
      sfxmakeupTotal={sfxmakeupTotal}
      setSfxmakeupTotal={setSfxmakeupTotal}
      makeuplabourTotal={makeuplabourTotal}
      setMakeuplabourTotal={setMakeuplabourTotal}
      setShow={setShowMake}  /> 
    ) }
    {/* camera */}
    {!showCam ? (
      ""
    ) : (
      <Camera
      postDataCamera={postDataCamera}
      setPostDataCamera={setPostDataCamera}
      dopTotal={dopTotal}
      setDopTotal={setDopTotal}
      cameraopTotal={cameraopTotal}
      setCameraopTotal={setCameraopTotal}
      camac1Total={camac1Total}
      setCamac1Total={setCamac1Total}
      camac2Total={camac2Total}
      setCamac2Total={setCamac2Total}
      ditTotal={ditTotal}
      setDitTotal={setDitTotal}
      steadicamTotal={steadicamTotal}
      setSteadicamTotal={setSteadicamTotal}
      campaTotal={campaTotal}
      setCampaTotal={setCampaTotal}
      dronepilotTotal={dronepilotTotal}
      setDronepilotTotal={setDronepilotTotal}
      othercamTotal={othercamTotal}
      setOthercamTotal={setOthercamTotal}
      stillsTotal={stillsTotal}
      setStillsTotal={setStillsTotal}
      cameralabourTotal={cameralabourTotal}
      setCameralabourTotal={setCameralabourTotal}
      setShow={setShowCam}  /> 
    ) }
    {/* electric */}
    {!showElec ? (
      ""
    ) : (
      <Electric
      postDataElectric={postDataElectric}
      setPostDataElectric={setPostDataElectric}
      gafferTotal={gafferTotal}
      setGafferTotal={setGafferTotal}
      bestboyTotal={bestboyTotal}
      setBestboyTotal={setBestboyTotal}
      electricianTotal={electricianTotal}
      setElectricianTotal={setElectricianTotal}
      dailieselecTotal={dailieselecTotal}
      setDailieselecTotal={setDailieselecTotal}
      generatoropTotal={generatoropTotal}
      setGeneratoropTotal={setGeneratoropTotal}
      otherelectricTotal={otherelectricTotal}
      setOtherelectricTotal={setOtherelectricTotal}
      electriclabourTotal={electriclabourTotal}
      setElectriclabourTotal={setElectriclabourTotal}
      setShow={setShowElec}  /> 
    ) }
    {/* grip */}
    {!showGrip ? (
      ""
    ) : (
      <Grip 
      postDataGrip={postDataGrip}
      setPostDataGrip={setPostDataGrip}
      keygripTotal={keygripTotal}
      setKeygripTotal={setKeygripTotal}
      bestboygripTotal={bestboygripTotal}
      setBestboygripTotal={setBestboygripTotal}
      gripsTotal={gripsTotal}
      setGripsTotal={setGripsTotal}
      dailiesgripTotal={dailiesgripTotal}
      setDailiesgripTotal={setDailiesgripTotal}
      dollycranegripTotal={dollycranegripTotal}
      setDollycranegripTotal={setDollycranegripTotal}
      swinggripsTotal={swinggripsTotal}
      setSwinggripsTotal={setSwinggripsTotal}
      othergriplabourTotal={othergriplabourTotal}
      setOthergriplabourTotal={setOthergriplabourTotal}
      griplabourTotal={griplabourTotal}
      setGriplabourTotal={setGriplabourTotal}
      setShow={setShowGrip}  /> 
    ) }
    {/* sound */}
    {!showSound ? (
      ""
    ) : (
      <Sound 
      postDataSoundPro={postDataSoundPro}
      setPostDataSoundPro={setPostDataSoundPro}
      soundmixerTotal={soundmixerTotal}
      setSoundmixerTotal={setSoundmixerTotal}
      boomoperatorTotal={boomoperatorTotal}
      setBoomoperatorTotal={setBoomoperatorTotal}
      cablewranglerTotal={cablewranglerTotal}
      setCablewranglerTotal={setCablewranglerTotal}
      othersoundlabourTotal={othersoundlabourTotal}
      setOthersoundlabourTotal={setOthersoundlabourTotal}
      soundlabourTotal={soundlabourTotal}
      setSoundlabourTotal={setSoundlabourTotal}
      setShow={setShowSound}  /> 
    ) }
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

export default BudgetCreate