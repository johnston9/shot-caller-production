/* Globals component on the Budget Edit Page */
// eslint-disable-next-line
import React, {useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../styles/Account.module.css";
import btnStyles from "../../../styles/Button.module.css";
import Alert from "react-bootstrap/Alert";
import InfoGlobals from "./InfoGlobals";

const Globals = (props) => {
  const {setShow, 
    postDataProduction, setPostDataProduction,
    postDataDesign, setPostDataDesign,
    postDataConstruction, setPostDataConstruction,
    postDataSetDressing, setPostDataSetDressing,
    postDataProperty, setPostDataProperty,
    postDataWrangling, setPostDataWrangling,
    postDataSpecialEffects, setPostDataSpecialEffects,
    postDataWardrobe, setPostDataWardrobe,
    postDataMakeup, setPostDataMakeup,
    postDataCamera, setPostDataCamera,
    postDataElectric, setPostDataElectric,
  } = props;

  const [showInfo, setShowInfo] = useState(false);
  const [errors, setErrors] = useState({});

  // GLOBALS
  const [globalData, setGlobalData] = useState({
    prep_global: "",
    shoot_global: "",
    wrap_global: "",
  })

  const {prep_global, shoot_global, wrap_global} = globalData;

  const setShoot = () => {
    /* Function to set all crew shoot weeks to shoot global  */
    setPostDataProduction({
      ...postDataProduction,
      production_manager_units_number: shoot_global,
      production_supervisor_units_number: shoot_global,
      production_coordinator_units_number: shoot_global,
      unit_manager_units_number: shoot_global,
      location_manager_units_number: shoot_global,
      location_manager_assistant_units_number: shoot_global,
      production_assistants_units_number: shoot_global,
      production_secretary_units_number: shoot_global,
      production_accountant_units_number: shoot_global,
      production_accountant_assistant_units_number: shoot_global,
      scriptsupervisor_continuity_units_number: shoot_global,
      payroll_units_number: shoot_global,
      other_production_units_number: shoot_global,
      directors_assistant_units_number: shoot_global,
      assistant_director_1st_units_number: shoot_global,
      assistant_director_2nd_units_number: shoot_global,
      assistant_director_3rd_units_number: shoot_global,
      craft_services_units_number: shoot_global,
    });
    setPostDataDesign({
      ...postDataDesign,
      production_designer_units_number: shoot_global,
      art_director_units_number: shoot_global,
      art_assistants_units_number: shoot_global,
      production_assistants_trainees_units_number: shoot_global,
      graphic_artists_units_number: shoot_global,
      supervart_uno: shoot_global,
      standby_art_uno: shoot_global,
      set_design_uno: shoot_global,
      junior_draught_uno: shoot_global,
      art_dep_coor_uno: shoot_global,
    });
    setPostDataConstruction({
      ...postDataConstruction,
      constructioncoordinator_units_number: shoot_global,
      headcarpenter_units_number: shoot_global,
      carpenters_units_number: shoot_global,
      scenicpainters_units_number: shoot_global,
      headpainter_units_number: shoot_global,
      painters_units_number: shoot_global,
      labourers_units_number: shoot_global,
    });
    setPostDataSetDressing({
      ...postDataSetDressing,
      set_decorator_units_number: shoot_global,
      assist_set_decorator_units_number: shoot_global,
      lead_man_units_number: shoot_global,
      set_dressers_units_number: shoot_global,
      swing_gang_units_number: shoot_global,
      set_dressing_buyer_units_number: shoot_global,
    });
    setPostDataProperty({
      ...postDataProperty,
      property_master_units_number: shoot_global,
      assist_property_master_units_number: shoot_global,
      on_set_props_person_units_number: shoot_global,
      property_buyer_units_number: shoot_global,
      armorer_units_number: shoot_global,
    });
    setPostDataWrangling({
      ...postDataWrangling,
      head_wrangler_units_number: shoot_global,
      other_wrangling_labour_units_number: shoot_global,
    });
    setPostDataSpecialEffects({
      ...postDataSpecialEffects,
      fx_supervisor_units_number: shoot_global,
      assist_fx_units_number: shoot_global,
      other_fx_labour_units_number: shoot_global,
    });
    setPostDataWardrobe({
      ...postDataWardrobe,
      costume_designer_units_number: shoot_global,
      assist_costume_designer_units_number: shoot_global,
      head_wardrobe_units_number: shoot_global,
      wardrobe_assist_units_number: shoot_global,
      truck_costumer_units_number: shoot_global,
      other_wardrobe_labour_units_number: shoot_global,
      train_uno: shoot_global,
      war_coor_uno: shoot_global,
      shopper_uno: shoot_global,
    });
    setPostDataMakeup({
      ...postDataMakeup,
      makeup_dept_head_units_number: shoot_global,
      key_makeup_units_number: shoot_global,
      makeup_artist_units_number: shoot_global,
      key_hairstylist_units_number: shoot_global,
      hairdresser_units_number: shoot_global,
      sfx_makeup_units_number: shoot_global,
      other_makeup_labour_units_number: shoot_global,
      mak_train_uno: shoot_global,
    });
    setPostDataCamera({
      ...postDataCamera,
      dop_uno: shoot_global,
      camera_op_uno: shoot_global,
      cam_ac1_uno: shoot_global,
      cam_ac2_uno: shoot_global,
      dit_uno: shoot_global,
      steadicam_uno: shoot_global,
      cam_pa_uno: shoot_global,
      drone_pilot_uno: shoot_global,
      other_cam_uno: shoot_global,
    });
    setPostDataElectric({
      ...postDataElectric,
      gaffer_uno: shoot_global,
      best_boy_uno: shoot_global,
      electrician_uno: shoot_global,
      generator_op_uno: shoot_global,
      other_elec_uno: shoot_global,
      dailies_elec_uno: shoot_global,
    });

  };

  const setPrep = () => {
    /* Function to set all crew prep weeks to prep global  */
    setPostDataProduction({
      ...postDataProduction,
    production_manager_uno_prep: prep_global,
    production_supervisor_uno_prep: prep_global,
    production_coordinator_uno_prep: prep_global,
    unit_manager_uno_prep: prep_global,
    location_manager_uno_prep: prep_global,
    location_manager_ass_uno_prep: prep_global,
    production_ass_uno_prep: prep_global,
    staaaaaaars: prep_global,
    staaaaaaars: prep_global,
    staaaaaaars: prep_global,
    staaaaaaars: prep_global,
    staaaaaaars: prep_global,
    staaaaaaars: prep_global,
    staaaaaaars: prep_global,
    staaaaaaars: prep_global,
    staaaaaaars: prep_global,
    staaaaaaars: prep_global,
    staaaaaaars: prep_global,
    staaaaaaars: prep_global,
    staaaaaaars: prep_global,
    staaaaaaars: prep_global,
    staaaaaaars: prep_global,
    staaaaaaars: prep_global,
    staaaaaaars: prep_global,
    staaaaaaars: prep_global,
    staaaaaaars: prep_global,
    staaaaaaars: prep_global,
    staaaaaaars: prep_global,
    staaaaaaars: prep_global,
    staaaaaaars: prep_global,
    staaaaaaars: prep_global,
    staaaaaaars: prep_global,
    staaaaaaars: prep_global,
    staaaaaaars: prep_global,
    staaaaaaars: prep_global,

    });
    setPostDataDesign({
      ...postDataDesign,
      pro_designer_uno_prep: prep_global,
      staaaaaaars: prep_global,
      staaaaaaars: prep_global,
      staaaaaaars: prep_global,
      staaaaaaars: prep_global,
      staaaaaaars: prep_global,
      staaaaaaars: prep_global,
      staaaaaaars: prep_global,
      staaaaaaars: prep_global,
      staaaaaaars: prep_global,
      staaaaaaars: prep_global,
      staaaaaaars: prep_global,
      staaaaaaars: prep_global,
      staaaaaaars: prep_global,
      staaaaaaars: prep_global,
      staaaaaaars: prep_global,
      staaaaaaars: prep_global,
      staaaaaaars: prep_global,
      staaaaaaars: prep_global,
      staaaaaaars: prep_global,
      staaaaaaars: prep_global,
      staaaaaaars: prep_global,
      staaaaaaars: prep_global,
      staaaaaaars: prep_global,
      staaaaaaars: prep_global,
      staaaaaaars: prep_global,
      staaaaaaars: prep_global,
      staaaaaaars: prep_global,
      staaaaaaars: prep_global,
      staaaaaaars: prep_global,
      staaaaaaars: prep_global,
    });
  };

  const setWrap = () => {
    /* Function to set all crew wrap weeks to wrap global */
    setPostDataProduction({
      ...postDataProduction,
      production_manager_uno_wrap: wrap_global,
      production_supervisor_uno_wrap: wrap_global,
      production_coordinator_uno_wrap: wrap_global,
      unit_manager_uno_wrap: wrap_global,
      location_manager_uno_wrap: wrap_global,
      location_manager_ass_uno_wrap: wrap_global,
      production_ass_uno_wrap: wrap_global,
      staaaaaaars: wrap_global,
      staaaaaaars: wrap_global,
      staaaaaaars: wrap_global,
      staaaaaaars: wrap_global,
      staaaaaaars: wrap_global,
      staaaaaaars: wrap_global,
      staaaaaaars: wrap_global,
      staaaaaaars: wrap_global,
      staaaaaaars: wrap_global,
      staaaaaaars: wrap_global,
      staaaaaaars: wrap_global,
      staaaaaaars: wrap_global,
      staaaaaaars: wrap_global,
      staaaaaaars: wrap_global,
      staaaaaaars: wrap_global,
      staaaaaaars: wrap_global,
      staaaaaaars: wrap_global,
      staaaaaaars: wrap_global,
      staaaaaaars: wrap_global,
      staaaaaaars: wrap_global,
      staaaaaaars: wrap_global,
      staaaaaaars: wrap_global,
      

    });
    setPostDataDesign({
      ...postDataDesign,
      pro_designer_uno_wrap: wrap_global,
      staaaaaaars: wrap_global,
      staaaaaaars: wrap_global,
      staaaaaaars: wrap_global,
      staaaaaaars: wrap_global,
      staaaaaaars: wrap_global,
      staaaaaaars: wrap_global,
      staaaaaaars: wrap_global,
      staaaaaaars: wrap_global,
      staaaaaaars: wrap_global,
      staaaaaaars: wrap_global,
      staaaaaaars: wrap_global,
      staaaaaaars: wrap_global,
      staaaaaaars: wrap_global,
      staaaaaaars: wrap_global,
      staaaaaaars: wrap_global,
      staaaaaaars: wrap_global,
      staaaaaaars: wrap_global,
      staaaaaaars: wrap_global,
      staaaaaaars: wrap_global,
      staaaaaaars: wrap_global,
      staaaaaaars: wrap_global,
      staaaaaaars: wrap_global,
      staaaaaaars: wrap_global,
      staaaaaaars: wrap_global,
      staaaaaaars: wrap_global,
      staaaaaaars: wrap_global,
      staaaaaaars: wrap_global,
    });
  };

  const handleChangeGlobals = (event) => {
    setGlobalData({
      ...globalData,
      [event.target.name]: event.target.value.replace(/[^0-9.]/g, ''),
    });
  };

  return (
        <div>
        <Row className="mb-3">
        <Col md={{span: 10, offset: 1}}>
        <div className={`text-center px-3 pt-1 ${styles.SubTitle2 }`}>
        <h5 className={`text-center `} >Globals</h5> 
        </div> 
        <div className={`px-3 pt-1 ${styles.SubTitle77 }`}>
        {/* close/INFO buttons */}
        <Row className="mt-1 ml-2 px-3" >
            <Col >
            <Button
              className={`${btnStyles.Button} ${btnStyles.Blue} mb-2`}
              onClick={() => setShow(false)}
            >
              Close
            </Button>
            <Button
              className={`float-right py-0 mt-1 ${btnStyles.Blue} ${btnStyles.Button}`}
              onClick={() => setShowInfo(showInfo => !showInfo)} >Information
            </Button>
            </Col>
        </Row>
        {/* INFO COMPONENT */}
        <div>
        {!showInfo ? (
          ""
              ) : (
                <InfoGlobals  /> 
        ) }  
        </div>
        {/* Prep Shoot Wrap Globals input boxes and set buttons*/}
        <div>
        <Row>
        {/* prep */}
        <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
        <Form.Group controlId="prep_global" 
        className={`${styles.Width95} text-center mb-0`}  >
            <Form.Label className={`${styles.Bold}`} >Prep Global</Form.Label>
            <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="prep_global"
              value={prep_global}
              onChange={handleChangeGlobals}
                />
        </Form.Group>
        {errors?.prep_global?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
        </Col>
        {/* shoot */}
        <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
        <Form.Group controlId="shoot_global" 
        className={`${styles.Width95} text-center mb-0`}>
            <Form.Label className={`${styles.Bold} text-center`}>Shoot Global</Form.Label>
            <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="shoot_global"
              value={shoot_global}
              onChange={handleChangeGlobals}
                />
        </Form.Group>
        {errors?.shoot_global?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
        </Col>
        {/* wrap */}
        <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
        <Form.Group controlId="wrap_global" 
        className={`${styles.Width95} text-center mb-0`}>
            <Form.Label className={`${styles.Bold} text-center`}>Wrap Global</Form.Label>
            <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="wrap_global"
              value={wrap_global}
              onChange={handleChangeGlobals}
                />
        </Form.Group>
        {errors?.wrap_global?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
        </Col>
        </Row>
        </div>
        {/* Prep Shoot Wrap Globals set buttons*/}
        <div>
        <Row>
        <Col xs={4} className="text-center" >
        <Button
            className={`py-0 my-2 px-5 ${btnStyles.Shed} ${btnStyles.Button}`}
            onClick={setPrep} >SET PREP
          </Button>
        </Col>
        <Col xs={4} className="text-center" >
        <Button
            className={`py-0 my-2 px-5 ${btnStyles.Shed} ${btnStyles.Button}`}
            onClick={setShoot} >SET SHOOT
        </Button>
        </Col>
        <Col xs={4} className="text-center" >
        <Button
          className={`py-0 my-2 px-5 ${btnStyles.Shed} ${btnStyles.Button}`}
          onClick={setWrap} >SET WRAP
        </Button>
        </Col>
        </Row>
        </div>
        </div>
        </Col>
      </Row>
        </div>
  )
}

export default Globals