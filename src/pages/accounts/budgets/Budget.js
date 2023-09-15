/* Component in the BudgetPage Component to display the budget data */
import React, { useState } from 'react';
import styles from "../../../styles/Account.module.css";
import appStyles from "../../../App.module.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link, useHistory } from 'react-router-dom';
import btnStyles from "../../../styles/Button.module.css";
import Button from "react-bootstrap/Button";
import Budgetcover from './BudgetCover';
import BudgetTop from './BudgetTop';

const Budget = (props) => {

  const {
    budget1, projectId,
  } = props;

  const budget = budget1.results[0] || "" ;

  const {// totals
    above_the_line_total, below_the_lineB_total, 
    below_the_lineB_costs_total, b_labour_and_costs_total, grand_total,
    // details
    title, series, prodco, format, location, dated,
    // length
    research, prep, shoot, wrap, post, length_total,
    // rights
    story_rights, miscellaneous, rights_total, 
    // development
    research_development, prelim_budget, consultant_expenses,
    office_expenses, staff, travel_expenses_development,
    living_expenses_development, other_development, 
    fringes_taxes_development, development_total,
    // scenario
    writers_units_number, writers_units_name,
    writers_quantity, writers_rate, writers_total,
    consultants_units_number, consultants_units_name,
    consultants_quantity, consultants_rate, consultants_total,
    editors_units_number, editors_units_name,
    editors_quantity, editors_rate, editors_scenario_total,
    admin_scenario_units_number, admin_scenario_units_name,
    admin_scenario_quantity, admin_scenario_rate, admin_scenario_total,
    office_expenses_scenario, travel_expenses_scenario,
    living_expenses_scenario, other_scenario, fringes_taxes_scenario,
    scenario_total,
    // producers-dirs
    executive_producers_rate, producers_rate,
    line_producers_rate, co_producers_rate,
    associate_producers_rate, directors_rate,
    unit2_directors_rate, executive_producers_quantity,
    producers_quantity, line_producers_quantity,
    co_producers_quantity, associate_producers_quantity,
    directors_quantity, unit2_directors_quantity,
    travel_expenses_producers_dirs, living_expenses_producers_dirs,
    other_producers_dirs, fringes_taxes_producers_dirs,
    executive_producers_total, producers_total, line_producers_total,
    co_producers_total, associate_producers_total, directors_total,
    unit2_directors_total, producers_dirs_total,
    // stars music
    stars, stars_rights_payments, travel_expenses_stars,
    living_expenses_stars, other_stars, fringes_taxes_stars,
    music, music_supervisor, travel_expenses_music, living_expenses_music,
    music_rights_addl_songs, other_music, fringes_taxes_music,
    stars_music_total,
    // cast
    principals_quantity, principals_units_number,
    principals_units_name, principals_rate, principals_total,
    actors_quantity, actors_units_number, 
    actors_units_name, actors_rate, actors_total,
    stuntcoordinators_quantity, stuntcoordinators_units_number,
    stuntcoordinators_units_name, stuntcoordinators_rate, stuntcoordinators_total,
    stuntperformers_quantity, stuntperformers_units_number,
    stuntperformers_units_name, stuntperformers_rate, stuntperformers_total,
    otherperformers_quantity, otherperformers_units_number,
    otherperformers_units_name, otherperformers_rate, otherperformers_total,
    extras_quantity, extras_units_number,
    extras_units_name, extras_rate, extras_total,
    casting_director, extras_casting,
    other_cast, fringes_taxes_cast, rights_payments_cast, cast_total,
    // production staff
    fringes_taxes_production, production_manager_quantity,
    production_manager_units_number, production_manager_units_name,
    production_manager_rate, production_supervisor_quantity,
    production_supervisor_units_number, production_supervisor_units_name,
    production_supervisor_rate, production_coordinator_quantity,
    production_coordinator_units_number, production_coordinator_units_name,
    production_coordinator_rate, unit_manager_quantity, unit_manager_units_number,
    unit_manager_units_name, unit_manager_rate,
    location_manager_quantity, location_manager_units_number,
    location_manager_units_name, location_manager_rate,
    location_manager_assistant_quantity, location_manager_assistant_units_number,
    location_manager_assistant_units_name, location_manager_assistant_rate,
    production_assistants_quantity, production_assistants_units_number,
    production_assistants_units_name, production_assistants_rate,
    production_secretary_quantity, production_secretary_units_number,
    production_secretary_units_name, production_secretary_rate,
    production_accountant_quantity, production_accountant_units_number,
    production_accountant_units_name, production_accountant_rate,
    production_accountant_assistant_quantity, production_accountant_assistant_units_number,
    production_accountant_assistant_units_name, production_accountant_assistant_rate,
    scriptsupervisor_continuity_quantity, scriptsupervisor_continuity_units_number,
    scriptsupervisor_continuity_units_name, scriptsupervisor_continuity_rate,
    payroll_quantity, payroll_units_number, payroll_units_name, payroll_rate,
    other_production_quantity, other_production_units_number,
    other_production_units_name, other_production_rate,
    directors_assistant_quantity, directors_assistant_units_number,
    directors_assistant_units_name, directors_assistant_rate,
    assistant_director_1st_quantity, assistant_director_1st_units_number,
    assistant_director_1st_units_name, assistant_director_1st_rate,
    assistant_director_2nd_quantity, assistant_director_2nd_units_number,
    assistant_director_2nd_units_name, assistant_director_2nd_rate,
    assistant_director_3rd_quantity, assistant_director_3rd_units_number,
    assistant_director_3rd_units_name, assistant_director_3rd_rate,
    craft_services_quantity, craft_services_units_number,
    craft_services_units_name, craft_services_rate,
    productionmanager_total, productionsupervisor_total, productioncoordinator_total, 
    unitmanager_total, locationmanager_total, locationmanagerassistant_total,
    productionassistants_total, productionsecretary_total, productionaccountant_total,
    productionaccountantassistant_total, scriptsupervisorcontinuity_total,
    payroll_total, otherproduction_total, directorsassistant_total,
    assistantdirector1st_total, assistantdirector2nd_total,
    assistantdirector3rd_total, craftservices_total, productionstaff_total,
    // design
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
    productiondesigner_total, artdirector_total, artassistants_total,
    productionassistantstrainees_total, graphicartists_total, designlabour_total,
    // construction
    fringes_taxes_construction,
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
    labourers_units_name, labourers_rate, 
    other_construction, constructioncoordinator_total,
    headcarpenter_total, carpenters_total, scenicpainters_total,
    headpainter_total, painters_total, labourers_total,
    constructionlabour_total,
    // dressing
    fringes_taxes_dressing,
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
    other_set_dressing, decoratorset_total, assistdecoratorset_total,
    leadman_total, dressers_total, swinggang_total,
    dressingbuyer_total, dressinglabour_total,
    // dressing
    fringes_taxes_property,
    property_master_quantity, property_master_units_number,
    property_master_units_name, property_master_rate,
    assist_property_master_quantity, assist_property_master_units_number,
    assist_property_master_units_name, assist_property_master_rate,
    on_set_props_person_quantity, on_set_props_person_units_number,
    on_set_props_person_units_name, on_set_props_person_rate,
    property_buyer_quantity, property_buyer_units_number,
    property_buyer_units_name, property_buyer_rate,
    armorer_quantity, armorer_units_number,
    armorer_units_name, armorer_rate, armorer_total,
    other_property, propertymaster_total, assistpropertymaster_total,
    onsetpropsperson_total, propertybuyer_total, propertylabour_total,
    // wrangling
    head_wrangler_quantity, head_wrangler_units_number,
    head_wrangler_units_name, head_wrangler_rate,
    other_wrangling_labour_quantity, other_wrangling_labour_units_number,
    other_wrangling_labour_units_name, other_wrangling_labour_rate,
    headwrangler_total, otherwranglinglabour_total,
    wranglerlabour_total, fringes_taxes_wrangling,
    // FX
    fx_supervisor_quantity, fx_supervisor_units_number,
    fx_supervisor_units_name, fx_supervisor_rate,
    assist_fx_quantity, assist_fx_units_number,
    assist_fx_units_name, assist_fx_rate,
    other_fx_labour_quantity, other_fx_labour_units_number,
    other_fx_labour_units_name, other_fx_labour_rate,
    fxsupervisor_total, assistfx_total,
    otherfxlabour_total, fxlabour_total, fringes_taxes_fx,
    // Wardrobe
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
    costumedesigner_total, assistcosdesigner_total, headwardrobe_total,
    wardrobeassist_total, truckcostumer_total, otherwardrobe_total,
    wardrobelabour_total, fringes_taxes_wardrobe,
    // Makeup
    fringes_taxes_makeup,
    makeup_dept_head_quantity, makeup_dept_head_units_number,
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
    headmakeup_total, keymakeup_total, makeupartist_total,
    keyhairstylist_total, hairdresser_total, hairmakeupdailies_total,
    othermakeuplabour_total, sfxmakeup_total, makeuplabour_total,
    // Camera
    dop_qty, dop_uno, dop_una, dop_rt,
    camera_op_qty, camera_op_uno, camera_op_una, camera_op_rt,
    cam_ac1_qty, cam_ac1_uno, cam_ac1_una, cam_ac1_rt,
    cam_ac2_qty, cam_ac2_uno, cam_ac2_una, cam_ac2_rt,
    dit_qty, dit_uno, dit_una, dit_rt,
    steadicam_qty, steadicam_uno, steadicam_una, steadicam_rt,
    cam_pa_qty, cam_pa_uno, cam_pa_una, cam_pa_rt, 
    drone_pilot_qty, drone_pilot_uno, drone_pilot_una, drone_pilot_rt,
    other_cam_qty, other_cam_uno, other_cam_una, other_cam_rt,
    stills_qty, stills_uno, stills_una, stills_rt,
    stills_total, dop_total, cameraop_total, camac1_total, camac2_total,
    dit_total, steadicam_total, campa_total, dronepilot_total,
    othercam_total, cameralabour_total, fringes_taxes_camera,
    // electric
    fringes_taxes_electric,
    gaffer_qty, gaffer_uno, gaffer_una, gaffer_rt,
    best_boy_qty, best_boy_uno, best_boy_una, best_boy_rt,
    electrician_qty, electrician_uno, electrician_una, electrician_rt,
    dailies_elec_qty, dailies_elec_uno, dailies_elec_una, dailies_elec_rt,
    generator_op_qty, generator_op_uno, generator_op_una, generator_op_rt,
    other_elec_qty, other_elec_uno, other_elec_una, other_elec_rt,
    gaffer_total, bestboy_total, electrician_total, dailieselec_total,
    generatorop_total, otherelectric_total, electriclabour_total,
    // grip
    fringes_taxes_grip,
    key_grip_qty, key_grip_uno, key_grip_una, key_grip_rt,
    best_boy_grip_qty, best_boy_grip_uno, best_boy_grip_una, best_boy_grip_rt,
    grips_qty, grips_uno, grips_una, grips_rt,
    dailies_grip_qty, dailies_grip_uno, dailies_grip_una, dailies_grip_rt, 
    dolly_crane_grip_qty, dolly_crane_grip_uno, dolly_crane_grip_una, dolly_crane_grip_rt,
    swing_grips_qty, swing_grips_uno, swing_grips_una, swing_grips_rt,
    other_grip_labour_qty, other_grip_labour_uno, other_grip_labour_una, other_grip_labour_rt,
    keygrip_total, bestboygrip_total, grips_total, dailiesgrip_total,
    dollycranegrip_total, swinggrips_total, othergriplabour_total, griplabour_total,
    // sound
    fringes_taxes_sound,
    sound_mixer_qty, sound_mixer_uno,
    sound_mixer_una, sound_mixer_rt,
    boom_operator_qty, boom_operator_uno,
    boom_operator_una, boom_operator_rt,
    cable_wrangler_qty, cable_wrangler_uno,
    cable_wrangler_una, cable_wrangler_rt,
    other_sound_labour_qty, other_sound_labour_uno,
    other_sound_labour_una, other_sound_labour_rt,
    soundmixer_total, boomoperator_total, cablewrangler_total,
    othersoundlabour_total, soundlabour_total,
    // transport
    fringes_taxes_transport,
    tp_coordinator_qty, tp_coordinator_uno, tp_coordinator_una, tp_coordinator_rt,
    tp_captain_qty,tp_captain_uno, tp_captain_una, tp_captain_rt,
    tp_manager_qty, tp_manager_uno, tp_manager_una, tp_manager_rt,
    head_driver_qty, head_driver_uno, head_driver_una, head_driver_rt,
    drivers_qty, drivers_uno, drivers_una, drivers_rt,
    tpcoordinator_total, tpcaptain_total, tpmanager_total,
    headdriver_total, drivers_total, transportlabour_total,
    // TV
    fringes_taxes_tv,
    tech_super_qty, tech_super_uno, tech_super_una, tech_super_rt,
    tech_direct_qty, tech_direct_uno, tech_direct_una, tech_direct_rt,
    floor_man_qty, floor_man_uno, floor_man_una, floor_man_rt, 
    light_direct_qty, light_direct_uno, light_direct_una, light_direct_rt,
    boardman_qty, boardman_uno, boardman_una, boardman_rt,
    audio_qty, audio_uno, audio_una, audio_rt,
    vtr_operator_qty, vtr_operator_uno, vtr_operator_una, vtr_operator_rt,
    stagehands_qty, stagehands_uno, stagehands_una, stagehands_rt,
    other_tv_qty, other_tv_uno, other_tv_una, other_tv_rt,
    techsuper_total, techdirect_total, floorman_total, lightdirect_total,
    boardman_total, audio_total, vtroperator_total, stagehands_total,
    othertv_total, tvspecificlabour_total,
    // Production Office
    office_rentals, office_equipment, office_supplies,
    phones_net, courier_postage, office_other, proOff_total,
    // Studio
    studio_rentals, power, carpentry_rentals, studio_total,
    studio_fx_equipment, studio_security, studio_other,
    // Site
    surveying_scouting, site_rentals, site_power, site_access,
    site_insurance, repairs_construction, site_security, site_other,
    police_control, site_total,
    // unit
    catering, craft_expenses, meal_penalty,
    green_room, first_aid, outfitting,
    medical_insurance, unit_other, unit_total,
    // travel living
    fares, accomatation_hotels, per_diems, taxis_limos,
    shipping, other_trav_liv, customs_brokerage, traliv_total,
    // Transport
    production_cars, trucks_vans, buses, motorhomes, transport_total,
    talent_cars, support_vehicles, boats_planes, fuel, repairs, taxis,
    parking, licenses_permits, brokerage_insurance, other_transport,
    // Construction Material
    rentals_carpentry, carpentry_purchases, painting_rentals,
    painting_purchases, backdrops_murals, construction_other,
    scaffolding, warehouse_rental, constructionmat_total,
    // art supplies
    drawing_supplies, drawing_equipment, tech, artSup_total,
    stock_prints_processing, blueprinting, other_art,
    // dressing
    dress_rentals, dress_purchases, dress_manufacture,
    dress_repairs_replacements, other_dressing, dressing_total,
    // props
    props_rentals, props_purchases, graphics_signs,
    props_repairs_replac, picture_vehicle_rentals, picture_vehicle_purchases,
    picture_vehicle_mods, picture_vehicle_ins, other_props, props_total,
    // FX
    fx_rentals, fx_purchases, stunts_purchases_rentals,
    armaments_permits_fees, other_fx, fx_total,
    // Animals
    animals_rentals, animals_purchases, food_stabling,
    transport, vet, customs_broker, other_animals, animals_total,
    // Wardrobe
    wardrobe_rentals, wardrobe_purchases, ward_manufact,
    ward_ship_brok, ward_repairs_clean, other_ward, wardrobe_total,
    // Makeup
    makeup_rentals, makeup_purchases, hair_rentals, makeup_total,
    hair_purchases, wigs, makeup_fx, makeup_ship_brok, other_makeup,
    // Camera Equ
    basic_package_rent_cam, daily_rentals_cam, other_camera,
    specialty_rent_cam, camera_purchases, steadicam, camera_total,
    video_teleprompter, camera_ship_brok, loss_damage_cam,
    // Electric Equ
    basic_package_rent_elec, daily_rentals_elec,
    specialty_rent_elec, electric_purchases, electric_total,
    generators, loss_damage_elec, other_electric,

    } = budget;

  console.log(props);
  console.log(budget);

  const history = useHistory();
  const [showCover, setShowCover] = useState(false);
  const [showTop, setShowTop] = useState(false);

  return (
    <div >
    <div className={`${styles.Overview}`}>
    <h2 className={`py-2 ${styles.OverviewText} ${appStyles.playfair}
     text-center`} >{title} Budget Detail Page </h2>
    </div>
    {/* back */}
    <Row className="mt-1 ml-2" >
        <Col xs={3}>
        <Button
          className={`${btnStyles.Button} ${btnStyles.Blue} mb-2`}
          onClick={() => history.goBack()}
        >
          Back
        </Button>
        </Col>
    </Row>
    {/* Add /Edit Budget */}
    {budget ? (
    <Row className='mt-0 mb-4'>
    <Col className="text-center">
    <Link to={`/budgets/edit/${projectId}`}>
    <div className={`px-1`}>
    <span className={ `${styles.Edit} py-1 px-5`}>Edit Budget</span>
    </div>
    </Link>
    </Col>
    </Row>
    ) : (
    <Row className='mt-0 mb-5'>
      <Col className="text-center" xs={{span: 6, offset: 3 }} 
       md={{span: 4, offset: 4 }} >
      <Link to={`/budgets/create/${projectId}`}>
      <div className={`px-1`}>
      <spam className={ `${styles.Edit} py-1 px-5`}>Create Budget</spam>
      </div>
      </Link>
      </Col>
    </Row>
    ) }
    {/* Cover and Top sheets buttons */}
    <Row className="mt-1 ml-2" >
        <Col xs={6} className='text-center'>
        <Button
          className={`${btnStyles.Button} ${btnStyles.Shed} mb-2`}
          onClick={() => setShowCover(showCover => !showCover)}
        >
          Budget Cover Page
        </Button>
        </Col>
        <Col xs={6} className='text-center'>
        <Button
          className={`${btnStyles.Button} ${btnStyles.Shed} mb-2`}
          onClick={() => setShowTop(showTop => !showTop)}
        >
          Budget Top Sheet
        </Button>
        </Col>
    </Row>
    {/* Cover and Top sheets */}
    {!showCover ? (
      ""
    ) : (
      <Budgetcover 
      setShowCover={setShowCover}
      budget={budget} /> 
    ) }
    {!showTop ? (
      ""
    ) : (
      <BudgetTop 
      setShowTop={setShowTop}
      budget={budget} /> 
    ) }
    {/* BUDGET ALL */}
    <div className='px-3'>
    {/* TOTALS */}
    <div>
    <Row>
    <Col md={6}>
    {/* TOTAL - ABOVE THE LINE */}
    <Row className='mt-3' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={9} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL ABOVE THE LINE </p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Bold} mb-0`}>{above_the_line_total || 0}</p>
    </Col>
    </Row>
    {/* TOTAL - GRAND */}
    <Row className='mt-3 mb-3' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={9} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL - GRAND </p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Bold} mb-0`}>{grand_total || 0}</p>
    </Col>
    </Row>
    </Col>
    <Col md={6}>
    {/* TOTAL - BELOW THE LINE "B" PRODUCTION */}
    <Row className='mt-3' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={9} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL - BELOW THE LINE "B" PRODUCTION - LABOUR </p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Bold} mb-0`}>{below_the_lineB_total || 0}</p>
    </Col>
    </Row>
    {/* TOTAL - BELOW THE LINE "B" PRODUCTION */}
    <Row className='mt-3' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={9} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL - BELOW THE LINE "B" PRODUCTION - COSTS </p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Bold} mb-0`}>{below_the_lineB_costs_total || 0}</p>
    </Col>
    </Row>
    {/* TOTAL - BELOW THE LINE "B" PRODUCTION */}
    <Row className='mt-3' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={9} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL - BELOW THE LINE "B" PRODUCTION LABOUR AND COSTS </p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Bold} mb-0`}>{b_labour_and_costs_total || 0}</p>
    </Col>
    </Row>
    </Col>
    </Row>
    </div>
    {/* DETAILS LENGTH */}
    <div>
    <Row className='px-5 mt-3'>
    {/* details  */}
    <Col xs={12} md={6} >
    <Row>
    <Col xs={4}>
    <p className={`${styles.Underline}`}>Title</p>
    <p className={`${styles.Underline}`}>Series</p>
    <p className={`${styles.Underline}`}>Prodco</p>
    <p className={`${styles.Underline}`}>Format</p>
    <p className={`${styles.Underline}`}>Location</p>
    <p className={`${styles.Underline}`}>Dated</p>
    </Col>
    <Col xs={4}>   
    </Col>
    <Col xs={4}>
    <p className={`${styles.Underline}`}>{title || "-"}</p>
    <p className={`${styles.Underline}`}>{series || "-"}</p>
    <p className={`${styles.Underline}`}>{prodco || "-"}</p>
    <p className={`${styles.Underline}`}>{format || "-"}</p>
    <p className={`${styles.Underline}`}>{location || "-"}</p>
    <p className={`${styles.Underline}`}>{dated || "-"}</p>
    </Col>
    </Row>  
    </Col>
    <Col xs={12} md={6} >
    {/* length */}
    <Row className='mt-3 mt-md-0'>
    <Col xs={4}>
    <p className={`${styles.Underline}`}>Research</p>
    <p className={`${styles.Underline}`}>Prep</p> 
    <p className={`${styles.Underline}`}>Shoot</p> 
    <p className={`${styles.Underline}`}>Wrap</p> 
    <p className={`${styles.Underline}`}>Post</p>
    <p className={`${styles.Underline}`}>Length Total</p>
    </Col>
    <Col xs={4}>
    <p className={`${styles.Underline}`}>{research || 0}</p>
    <p className={`${styles.Underline}`}>{prep || 0}</p>
    <p className={`${styles.Underline}`}>{shoot || 0}</p>
    <p className={`${styles.Underline}`}>{wrap || 0}</p>
    <p className={`${styles.Underline}`}>{post || 0}</p>
    <p className={`${styles.Underline}`}>{length_total}</p>   
    </Col>
    <Col xs={4}>
    <p className={`${styles.Underline}`}>Weeks</p>
    <p className={`${styles.Underline}`}>Weeks</p>
    <p className={`${styles.Underline}`}>Weeks</p>
    <p className={`${styles.Underline}`}>Weeks</p>
    <p className={`${styles.Underline}`}>Weeks</p>
    <p className={`${styles.Underline}`}>Weeks</p>
    </Col>
    </Row>      
    </Col>
    </Row>
    </div>
    {/* ABOVE THE LINE */}
    <div className='px-3'>
    <Row className={ `${styles.OverviewBlue} mx-1 my-5 py-1 text-center`}>
    <Col md={12}>
    <h5 className={ `${styles.BoldBlack}`}>ABOVE THE LINE</h5>
    </Col>
    </Row>
    {/* RIGHTS --------------------------------------- ------ */}
    <div>
    <Row>
    <Col md={1}>
    <p className="mb-2">01.00</p>
    </Col>
    <Col md={8} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>RIGHTS</p>
    </Col>
    </Row>
    {/* TITLES */}
    <Row className={ `${styles.Overview} mb-2 py-1`} >
    <Col md={1} >
    <p className="mb-0">ACCT</p>
    </Col>
    <Col md={6} >
    <p className="mb-0">Description</p>
    </Col>
    <Col md={1} >
    <p className="mb-0">#</p>
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
    {/* Story */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>01.10</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Story Rights</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{story_rights || 0} </p>
    </Col>
    </Row>
    {/* miscellaneous */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>01.20</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Miscellaneous</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{miscellaneous || 0 } </p>
    </Col>
    </Row>
    {/* total */}
    <Row className='mt-3'>
    <Col md={1}>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL RIGHTS</p>
    </Col>
    <Col md={3}></Col> 
    <Col md={2}>
    <p className='mb-0'>{rights_total } </p>
    </Col>
    </Row>
    </div>
    {/* DEVELOPMENT --------------------------------- ------- */}
    <div className='mt-5'>
    <Row>
    <Col md={1}>
    <p className="mb-2">02.00</p>
    </Col>
    <Col md={10}>
    <p className={ `${styles.BoldBlack}`}>PRE-PRODUCTION AND DEVELOPMENT</p>
    </Col>
    </Row>
    {/* TITLES */}
    <Row className={ `${styles.Overview} mb-2 py-1`} >
    <Col md={1} >
    <p className="mb-0">ACCT</p>
    </Col>
    <Col md={6} >
    <p className="mb-0">Description</p>
    </Col>
    <Col md={1} >
    <p className="mb-0">#</p>
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
    {/* research */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>02.10</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Research</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{research_development || 0} </p>
    </Col>
    </Row>
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>02.20</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Preliminary Breakdown/Budget</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{prelim_budget || 0 } </p>
    </Col>
    </Row>
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>02.30</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Consultants</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{consultant_expenses || 0 } </p>
    </Col>
    </Row>
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>02.40</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Office Costs/Expenses</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{office_expenses || 0} </p>
    </Col>
    </Row>
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>02.50</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Staff</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{staff || 0 } </p>
    </Col>
    </Row>
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>02.60</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Travel Expenses</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{travel_expenses_development || 0 } </p>
    </Col>
    </Row>
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>02.70</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Living Expenses</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{living_expenses_development || 0} </p>
    </Col>
    </Row>
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>02.80</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{other_development || 0 } </p>
    </Col>
    </Row>
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>02.90</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Fringes and Taxes</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{fringes_taxes_development || 0 } </p>
    </Col>
    </Row>
    <Row className='mt-3'>
    <Col md={1}>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL PRE-PRODUCTION AND DEVELOPMENT</p>
    </Col>
    <Col md={3}></Col>
    <Col md={2}>
    <p className={`${styles.Underline} mb-0`}>{development_total || 0 } </p>
    </Col>
    </Row>
    </div>
    {/* SCENARIO --------------------------------------------- */}
    <div className='mt-5'>
    <Row>
    <Col xs={1}>
    <p className='mb-2'>03.00</p>
    </Col>
    <Col xs={10}>
    <p className={ `${styles.BoldBlack} mb-2`}>SCENARIO</p>
    </Col>
    </Row>
    {/* Titles */}
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
    {/* Values */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>03.10</p>
    <p className={`${styles.Underline}`}>03.20</p>
    <p className={`${styles.Underline}`}>03.30</p>
    <p className={`${styles.Underline}`}>03.40</p>
    <p className={`${styles.Underline}`}>03.50</p>
    <p className={`${styles.Underline}`}>03.60</p>
    <p className={`${styles.Underline}`}>03.70</p>
    <p className={`${styles.Underline}`}>03.80</p>
    <p className={`${styles.Underline}`}>03.90</p>
    <p></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Writers</p>
    <p className={`${styles.Underline}`}>Consultants</p>
    <p className={`${styles.Underline}`}>Editors</p>
    <p className={`${styles.Underline}`}>Admin</p>
    <p className={`${styles.Underline}`}>Office Cost/Expenses</p>
    <p className={`${styles.Underline}`}>Travel Expenses</p>
    <p className={`${styles.Underline}`}>Living Expenses</p>
    <p className={`${styles.Underline}`}>Other</p>
    <p className={`${styles.Underline}`}>Fringes and Taxes</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{writers_quantity || 0}</p>
    <p className={`${styles.Underline}`}>{consultants_quantity || 0}</p>
    <p className={`${styles.Underline}`}>{editors_quantity || 0}</p>
    <p className={`${styles.Underline}`}>{admin_scenario_quantity || 0}</p>
    <p className={`${styles.Underline}`}></p>
    <p className={`${styles.Underline}`}></p>
    <p className={`${styles.Underline}`}></p>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{writers_units_number || 0}</p>
    <p className={`${styles.Underline}`}>{consultants_units_number || 0}</p>
    <p className={`${styles.Underline}`}>{editors_units_number || 0}</p>
    <p className={`${styles.Underline}`}>{admin_scenario_units_number || 0}</p>
    <p className={`${styles.Underline}`}></p>
    <p className={`${styles.Underline}`}></p>
    <p className={`${styles.Underline}`}></p>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{writers_units_name || 0}</p>
    <p className={`${styles.Underline}`}>{consultants_units_name || 0}</p>
    <p className={`${styles.Underline}`}>{editors_units_name || 0}</p>
    <p className={`${styles.Underline}`}>{admin_scenario_units_name || 0}</p>
    <p className={`${styles.Underline}`}></p>
    <p className={`${styles.Underline}`}></p>
    <p className={`${styles.Underline}`}></p>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{writers_rate || 0}</p>
    <p className={`${styles.Underline}`}>{consultants_rate || 0}</p>
    <p className={`${styles.Underline}`}>{editors_rate || 0}</p>
    <p className={`${styles.Underline}`}>{admin_scenario_rate || 0}</p>
    <p className={`${styles.Underline}`}></p>
    <p className={`${styles.Underline}`}></p>
    <p className={`${styles.Underline}`}></p>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{writers_total || 0}</p>
    <p className={`${styles.Underline}`}>{consultants_total || 0}</p>
    <p className={`${styles.Underline}`}>{editors_scenario_total || 0}</p>
    <p className={`${styles.Underline}`}>{admin_scenario_total || 0}</p>
    <p className={`${styles.Underline}`}>{office_expenses_scenario || 0}</p>
    <p className={`${styles.Underline}`}>{travel_expenses_scenario || 0}</p>
    <p className={`${styles.Underline}`}>{living_expenses_scenario || 0}</p>
    <p className={`${styles.Underline}`}>{other_scenario || 0}</p>
    <p className={`${styles.Underline}`}>{fringes_taxes_scenario || 0}</p>
    </Col>
    </Row>
    {/* total */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL SCENARIO</p>
    </Col>
    <Col md={3} >
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline} mb-0`}>{scenario_total || 0}</p>
    </Col>
    </Row>
    </div>
    {/* PRODUCERS AND DIRECTORS ------------------------------- */}
    <div className='mt-5'>
    <Row>
    <Col xs={1}>
    <p className='mb-2'>04.00</p>
    </Col>
    <Col xs={10}>
    <p className={ `${styles.BoldBlack} MB-2`}>PRODUCERS AND DIRECTORS</p>
    </Col>
    </Row>
    {/* TITLES */}
    <Row className={ `${styles.Overview} mb-2 py-1`} >
    <Col md={1} >
    <p className="mb-0">ACCT</p>
    </Col>
    <Col md={6} >
    <p className="mb-0">Description</p>
    </Col>
    <Col md={1} >
    <p className="mb-0">#</p>
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
    {/* Values */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}>04.10</p>
    <p className={`${styles.Underline}`}>04.20</p>
    <p className={`${styles.Underline}`}>04.30</p>
    <p className={`${styles.Underline}`}>04.40</p>
    <p className={`${styles.Underline}`}>04.50</p>
    <p className={`${styles.Underline}`}>04.60</p>
    <p className={`${styles.Underline}`}>04.70</p>
    <p className={`${styles.Underline}`}>04.80</p>
    <p className={`${styles.Underline}`}>04.90</p>
    <p className={`${styles.Underline}`}>04.91</p>
    <p className={`${styles.Underline}`}>04.92</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Executive Producers</p>
    <p className={`${styles.Underline}`}>Producers</p>
    <p className={`${styles.Underline}`}>Line Producers</p>
    <p className={`${styles.Underline}`}>Co-Producers</p>
    <p className={`${styles.Underline}`}>Associate Producers</p>
    <p className={`${styles.Underline}`}>Directors</p>
    <p className={`${styles.Underline}`}>2nd Unit Directors</p>
    <p className={`${styles.Underline}`}>Travel Expenses</p>
    <p className={`${styles.Underline}`}>Living Expenses</p>
    <p className={`${styles.Underline}`}>Other</p>
    <p className={`${styles.Underline}`}>Fringes and Taxes</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{executive_producers_quantity || 0}</p>
    <p className={`${styles.Underline}`}>{producers_quantity || 0}</p>
    <p className={`${styles.Underline}`}>{line_producers_quantity || 0}</p>
    <p className={`${styles.Underline}`}>{co_producers_quantity || 0}</p>
    <p className={`${styles.Underline}`}>{associate_producers_quantity || 0}</p>
    <p className={`${styles.Underline}`}>{directors_quantity || 0}</p>
    <p className={`${styles.Underline}`}>{unit2_directors_quantity || 0}</p>
    <p className={`${styles.Underline}`}></p>
    <p className={`${styles.Underline}`}></p>
    <p className={`${styles.Underline}`}></p>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p className={`${styles.Underline}`}></p>
    <p className={`${styles.Underline}`}></p>
    <p className={`${styles.Underline}`}></p>
    <p className={`${styles.Underline}`}></p>
    <p className={`${styles.Underline}`}></p>
    <p className={`${styles.Underline}`}></p>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{executive_producers_rate || 0}</p>
    <p className={`${styles.Underline}`}>{producers_rate || 0}</p>
    <p className={`${styles.Underline}`}>{line_producers_rate || 0}</p>
    <p className={`${styles.Underline}`}>{co_producers_rate || 0}</p>
    <p className={`${styles.Underline}`}>{associate_producers_rate || 0}</p>
    <p className={`${styles.Underline}`}>{directors_rate || 0}</p>
    <p className={`${styles.Underline}`}>{unit2_directors_rate || 0}</p>
    <p className={`${styles.Underline}`}></p>
    <p className={`${styles.Underline}`}></p>
    <p className={`${styles.Underline}`}></p>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{executive_producers_total || 0}</p>
    <p className={`${styles.Underline}`}>{producers_total || 0}</p>
    <p className={`${styles.Underline}`}>{line_producers_total || 0}</p>
    <p className={`${styles.Underline}`}>{co_producers_total || 0}</p>
    <p className={`${styles.Underline}`}>{associate_producers_total || 0}</p>
    <p className={`${styles.Underline}`}>{directors_total || 0}</p>
    <p className={`${styles.Underline}`}>{unit2_directors_total || 0}</p>
    <p className={`${styles.Underline}`}>{travel_expenses_producers_dirs || 0}</p>
    <p className={`${styles.Underline}`}>{living_expenses_producers_dirs || 0}</p>
    <p className={`${styles.Underline}`}>{other_producers_dirs || 0}</p>
    <p className={`${styles.Underline}`}>{fringes_taxes_producers_dirs || 0}</p>
    </Col>
    </Row>
    {/* total */}
    <Row className='mt-3'>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL PRODUCERS /DIRECTORS </p>
    </Col>
    <Col md={3} >
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline} mb-0`}>{producers_dirs_total || 0}</p>
    </Col>
    </Row>
    </div>
    {/* STARS / MUSIC ---------------------------------------- */}
    <div className='mt-5'>
    <Row>
    <Col xs={1}>
    <p className='mb-2'>05.00</p>
    </Col>
    <Col xs={10}>
    <p className={ `${styles.BoldBlack} mb-2`}>STARS / MUSIC</p>
    </Col>
    </Row>
    {/* TITLES */}
    <Row className={ `${styles.Overview} mb-2 py-1`} >
    <Col md={1} >
    <p className="mb-0">ACCT</p>
    </Col>
    <Col md={6} >
    <p className="mb-0">Description</p>
    </Col>
    <Col md={1} >
    <p className="mb-0">#</p>
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
    {/* Stars */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>05.10</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Stars</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{stars || 0} </p>
    </Col>
    </Row>
    {/* Stars Rights Payments */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>05.20</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Stars Rights Payments</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{stars_rights_payments || 0} </p>
    </Col>
    </Row>
    {/* Stars - Travel Expenses */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>05.30</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Stars - Travel Expenses</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{travel_expenses_stars || 0} </p>
    </Col>
    </Row>
    {/* Stars - Living Expenses */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>05.40</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Stars - Living Expenses</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{living_expenses_stars || 0} </p>
    </Col>
    </Row>
    {/* Stars - Other */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>05.50</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Stars - Other</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{other_stars || 0} </p>
    </Col>
    </Row>
    {/* Stars - Fringes Taxes */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>05.60</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Stars - Fringes / Taxes</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{fringes_taxes_stars || 0} </p>
    </Col>
    </Row>
    {/* Music */}
    <Row className='mt-3'>
    <Col md={1}>
    <p className={`${styles.Underline}`}>05.70</p>
    </Col>
    <Col md={6}>
    <p className={`${styles.Underline}`}>
    Music: all-in package includes Composer, Musicians, 
    Score, and Recording Session</p>
    </Col>
    <Col md={3}></Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{music || 0} </p>
    </Col>
    </Row>
    {/* Music Supervisor */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>05.80</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Music Supervisor</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{music_supervisor || 0} </p>
    </Col>
    </Row>
    {/* Music - Travel Expenses */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>05.90</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Music - Travel Expenses</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{travel_expenses_music || 0} </p>
    </Col>
    </Row>
    {/* Music - Living Expenses */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>05.91</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Music - Living Expenses</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{living_expenses_music || 0} </p>
    </Col>
    </Row>
    {/* Add'l Music Rights - Songs, etc. */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>05.92</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Add'l Music Rights - Songs, etc.</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{music_rights_addl_songs || 0} </p>
    </Col>
    </Row>
    {/* Music - Other */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>05.93</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Music - Other</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{other_music || 0} </p>
    </Col>
    </Row>
    {/* Music - Fringes and Taxes */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>05.94</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Music - Fringes and Taxes</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{fringes_taxes_music || 0} </p>
    </Col>
    </Row>
    {/* Stars / Music Total */}
    <Row className='mt-3' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL STARS / MUSIC </p>
    </Col>
    <Col md={3} >
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline} mb-0`}>{stars_music_total || 0}</p>
    </Col>
    </Row>
    {/* ABOVE THE LINE - TOTAL */}
    <div className="my-5">
    <Row >
    <Col className={ `${styles.Overview} my-0 py-2`} md={10} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL ABOVE THE LINE</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline} pt-2 mb-0`}>{above_the_line_total || 0}</p>
    </Col>
    </Row>
    </div>
    </div>
    </div>
    {/* BELOW THE LINE LABOUR---------------------------------------*/}
    <div className='px-3'>
    <Row className={ `${styles.OverviewBlue} mx-1 my-5 py-1 text-center`}>
    <Col md={12}>
    <h5 className={ `${styles.BoldBlack}`}>BELOW THE LINE - "B" PRODUCTION - LABOUR </h5>
    </Col>
    </Row>
    {/* CAST ------------------------------------------------ */}
    <div className='mt-5'>
    <Row>
    <Col xs={1}>
    <p className='mb-2'>06.00</p>
    </Col>
    <Col xs={10}>
    <p className={ `${styles.BoldBlack} mb-2`}>CAST</p>
    </Col>
    </Row>
    {/* Titles */}
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
    {/* Values */}
    {/* Principals */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>06.10</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Principals</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{principals_quantity || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{principals_units_number || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{principals_units_name || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{principals_rate || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{principals_total || 0}</p>
    </Col>
    </Row>
    {/* Actors */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>06.20</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Actors</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{actors_quantity || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{actors_units_number || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{actors_units_name || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{actors_rate || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{actors_total || 0}</p>
    </Col>
    </Row>
    {/* Stunt Coordinators */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>06.30</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Stunt Coordinators</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{stuntcoordinators_quantity || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{stuntcoordinators_units_number || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{stuntcoordinators_units_name || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{stuntcoordinators_rate || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{stuntcoordinators_total || 0}</p>
    </Col>
    </Row>
    {/* Stunt Performers */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>06.40</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Stunt Performers</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{stuntperformers_quantity || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{stuntperformers_units_number || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{stuntperformers_units_name || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{stuntperformers_rate || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{stuntperformers_total || 0}</p>
    </Col>
    </Row>
    {/* Other Performers */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>06.50</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Other Performers</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{otherperformers_quantity || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{otherperformers_units_number || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{otherperformers_units_name || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{otherperformers_rate || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{otherperformers_total || 0}</p>
    </Col>
    </Row>
    {/* Extras */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>06.60</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Extras</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{extras_quantity || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{extras_units_number || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{extras_units_name || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{extras_rate || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{extras_total || 0}</p>
    </Col>
    </Row>
    {/* Casting Director */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>06.70</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Casting Director</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{casting_director || 0} </p>
    </Col>
    </Row>
    {/* Extras Casting */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>06.80</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Extras Casting</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{extras_casting || 0} </p>
    </Col>
    </Row>
    {/* Other - Cast */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>06.90</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Other - Cast</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{other_cast || 0} </p>
    </Col>
    </Row>
    {/* Fringes Taxes - Cast */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>06.91</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Fringes and Taxes, Government/Unions</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{fringes_taxes_cast || 0} </p>
    </Col>
    </Row>
    {/* Rights Payments - Cast */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>06.92</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Rights Payments - Cast</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{rights_payments_cast || 0} </p>
    </Col>
    </Row>
    {/* Cast Total */}
    <Row className='mt-3' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL CAST </p>
    </Col>
    <Col md={3} >
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline} mb-0`}>{cast_total || 0}</p>
    </Col>
    </Row>
    </div>
    {/* PRODUCTION STAFF ------------------------------------ */}
    <div className='mt-5'>
    <Row>
    <Col xs={1}>
    <p className='mb-2'>07.00</p>
    </Col>
    <Col xs={10}>
    <p className={ `${styles.BoldBlack} mb-2`}>PRODUCTION STAFF</p>
    </Col>
    </Row>
    {/* Titles */}
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
    {/* Values */}
    {/* Production Manager */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>07.10</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Production Manager</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{production_manager_quantity || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{production_manager_units_number || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{production_manager_units_name || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{production_manager_rate || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{productionmanager_total || 0}</p>
    </Col>
    </Row>
    {/* Production Supervisor */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>07.20</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Production Supervisor</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{production_supervisor_quantity || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{production_supervisor_units_number || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{production_supervisor_units_name || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{production_supervisor_rate || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{productionsupervisor_total || 0}</p>
    </Col>
    </Row>
    {/* Production Coordinator */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>07.30</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Production Coordinator</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{production_coordinator_quantity || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{production_coordinator_units_number || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{production_coordinator_units_name || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{production_coordinator_rate || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{productioncoordinator_total || 0}</p>
    </Col>
    </Row>
    {/* Unit Manager */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>07.40</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Unit Manager</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{unit_manager_quantity || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{unit_manager_units_number || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{unit_manager_units_name || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{unit_manager_rate || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{unitmanager_total || 0}</p>
    </Col>
    </Row>
    {/* Location Manager */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>07.50</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Location Manager</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{location_manager_quantity || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{location_manager_units_number || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{location_manager_units_name || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{location_manager_rate || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{locationmanager_total || 0}</p>
    </Col>
    </Row>
    {/* Location Manager Assistant */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>07.60</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Location Manager Assistant</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{location_manager_assistant_quantity || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{location_manager_assistant_units_number || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{location_manager_assistant_units_name || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{location_manager_assistant_rate || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{locationmanagerassistant_total || 0}</p>
    </Col>
    </Row>
    {/* Production Assistants */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>07.70</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Production Assistants</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{production_assistants_quantity || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{production_assistants_units_number || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{production_assistants_units_name || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{production_assistants_rate || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{productionassistants_total || 0}</p>
    </Col>
    </Row>
    {/* Production Secretary */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>07.80</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Production Secretary</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{production_secretary_quantity || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{production_secretary_units_number || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{production_secretary_units_name || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{production_secretary_rate || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{productionsecretary_total || 0}</p>
    </Col>
    </Row>
    {/* Production Accountant */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>07.90</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Production Accountant</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{production_accountant_quantity || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{production_accountant_units_number || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{production_accountant_units_name || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{production_accountant_rate || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{productionaccountant_total || 0}</p>
    </Col>
    </Row>
    {/* Production Accountant Assistant */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>07.91</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Production Accountant Assistant</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{production_accountant_assistant_quantity || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{production_accountant_assistant_units_number || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{production_accountant_assistant_units_name || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{production_accountant_assistant_rate || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{productionaccountantassistant_total || 0}</p>
    </Col>
    </Row>
    {/* Script Supervisor / Continuity */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>07.92</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Script Supervisor / Continuity</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{scriptsupervisor_continuity_quantity || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{scriptsupervisor_continuity_units_number || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{scriptsupervisor_continuity_units_name || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{scriptsupervisor_continuity_rate || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{scriptsupervisorcontinuity_total || 0}</p>
    </Col>
    </Row>
    {/* Payroll */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>07.93</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Payroll</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{payroll_quantity || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{payroll_units_number || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{payroll_units_name || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{payroll_rate || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{payroll_total || 0}</p>
    </Col>
    </Row>
    {/* Other Production */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>07.94</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Other - Production</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{other_production_quantity || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{other_production_units_number || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{other_production_units_name || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{other_production_rate || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{otherproduction_total || 0}</p>
    </Col>
    </Row>
    {/* Directors Assistant */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>07.95</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Directors Assistant</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{directors_assistant_quantity || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{directors_assistant_units_number || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{directors_assistant_units_name || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{directors_assistant_rate || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{directorsassistant_total || 0}</p>
    </Col>
    </Row>
    {/* 1st Assistant Director */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>07.96</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>1st Assistant Director</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{assistant_director_1st_quantity || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{assistant_director_1st_units_number || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{assistant_director_1st_units_name || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{assistant_director_1st_rate || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{assistantdirector1st_total || 0}</p>
    </Col>
    </Row>
    {/* 2nd Assistant Director */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>07.97</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>2nd Assistant Director</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{assistant_director_2nd_quantity || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{assistant_director_2nd_units_number || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{assistant_director_2nd_units_name || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{assistant_director_2nd_rate || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{assistantdirector2nd_total || 0}</p>
    </Col>
    </Row>
    {/* 3rd Assistant Director */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>07.98</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>3rd Assistant Director</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{assistant_director_3rd_quantity || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{assistant_director_3rd_units_number || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{assistant_director_3rd_units_name || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{assistant_director_3rd_rate || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{assistantdirector3rd_total || 0}</p>
    </Col>
    </Row>
    {/* Craft Services */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>07.99</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>3rd Assistant Director</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{craft_services_quantity || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{craft_services_units_number || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{craft_services_units_name || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{craft_services_rate || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{craftservices_total || 0}</p>
    </Col>
    </Row>
    {/* Fringes Taxes */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>07.991</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Fringes and Taxes, Government/Unions</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{fringes_taxes_production || 0} </p>
    </Col>
    </Row>
    {/* Production Staff Total */}
    <Row className='mt-3' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL PRODUCTION STAFF </p>
    </Col>
    <Col md={3} >
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline} mb-0`}>{productionstaff_total || 0}</p>
    </Col>
    </Row>
    </div>
    {/* DESIGN LABOUR --------------------------------------- */}
    <div className='mt-5'>
    <Row>
    <Col xs={1}>
    <p className='mb-2'>08.00</p>
    </Col>
    <Col xs={10}>
    <p className={ `${styles.BoldBlack} mb-2`}>DESIGN LABOUR</p>
    </Col>
    </Row>
    {/* Titles */}
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
    {/* Production Designer */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>08.10</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Production Designer</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{production_designer_quantity || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{production_designer_units_number || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{production_designer_units_name || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{production_designer_rate || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{productiondesigner_total || 0}</p>
    </Col>
    </Row>
    {/* Art Director */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>08.20</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Art Director</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{art_director_quantity || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{art_director_units_number || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{art_director_units_name || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{art_director_rate || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{artdirector_total || 0}</p>
    </Col>
    </Row>
    {/* Art Assistants */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>08.30</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Art Assistants</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{art_assistants_quantity || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{art_assistants_units_number || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{art_assistants_units_name || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{art_assistants_rate || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{artassistants_total || 0}</p>
    </Col>
    </Row>
    {/* Production Assistants/Trainees */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>08.40</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Production Assistants / Trainees</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{production_assistants_trainees_quantity || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{production_assistants_trainees_units_number || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{production_assistants_trainees_units_name || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{production_assistants_trainees_rate || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{productionassistantstrainees_total || 0}</p>
    </Col>
    </Row>
    {/* Graphic Artists */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>08.50</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Graphic Artists</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{graphic_artists_quantity || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{graphic_artists_units_number || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{graphic_artists_units_name || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{graphic_artists_rate || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{graphicartists_total || 0}</p>
    </Col>
    </Row>
    {/* Other - Design */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>08.60</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>OTHER - DESIGN</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{other_design || 0} </p>
    </Col>
    </Row>
    {/* Fringes Taxes */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>08.70</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Fringes and Taxes, Government/Unions</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{fringes_taxes_design || 0} </p>
    </Col>
    </Row>
    {/* Design Total */}
    <Row className='mt-3' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL DESIGN LABOUR </p>
    </Col>
    <Col md={3} >
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline} mb-0`}>{designlabour_total || 0}</p>
    </Col>
    </Row>
    </div>
    {/* CONSTRUCTION LABOUR ---------------------------------- */}
    <div className='mt-5'>
    <Row>
    <Col xs={1}>
    <p className='mb-2'>09.00</p>
    </Col>
    <Col xs={10}>
    <p className={ `${styles.BoldBlack} mb-2`}>CONSTRUCTION LABOUR</p>
    </Col>
    </Row>
    {/* Titles */}
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
    {/* Construction Coordinator */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>09.10</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Construction Coordinator</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{constructioncoordinator_quantity || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{constructioncoordinator_units_number || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{constructioncoordinator_units_name || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{constructioncoordinator_rate || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{constructioncoordinator_total || 0}</p>
    </Col>
    </Row>
    {/* Head Carpenter */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>09.92</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Head Carpenter</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{headcarpenter_quantity || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{headcarpenter_units_number || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{headcarpenter_units_name || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{headcarpenter_rate || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{headcarpenter_total || 0}</p>
    </Col>
    </Row>
    {/* Carpenters */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>09.30</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Carpenters</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{carpenters_quantity || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{carpenters_units_number || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{carpenters_units_name || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{carpenters_rate || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{carpenters_total || 0}</p>
    </Col>
    </Row>
    {/* Scenic Painters */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>09.40</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Scenic Painters</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{scenicpainters_quantity || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{scenicpainters_units_number || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{scenicpainters_units_name || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{scenicpainters_rate || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{scenicpainters_total || 0}</p>
    </Col>
    </Row>
    {/* Head Painter */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>09.50</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Head Painter</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{headpainter_quantity || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{headpainter_units_number || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{headpainter_units_name || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{headpainter_rate || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{headpainter_total || 0}</p>
    </Col>
    </Row>
    {/* Painters */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>09.96</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Painters</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{painters_quantity || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{painters_units_number || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{painters_units_name || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{painters_rate || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{painters_total || 0}</p>
    </Col>
    </Row>
    {/* Labourers */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>09.70</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Labourers</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{labourers_quantity || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{labourers_units_number || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{labourers_units_name || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{labourers_rate || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{labourers_total || 0}</p>
    </Col>
    </Row>
    {/* Other - Construction */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>09.80</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>OTHER - CONSTRUCTION</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{other_construction || 0} </p>
    </Col>
    </Row>
    {/* Fringes Taxes */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>09.90</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Fringes and Taxes, Government/Unions</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{fringes_taxes_construction || 0} </p>
    </Col>
    </Row>
    {/* Construction Total */}
    <Row className='mt-3' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL CONSTRUCTION LABOUR </p>
    </Col>
    <Col md={3} >
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline} mb-0`}>{constructionlabour_total || 0}</p>
    </Col>
    </Row>
    </div>
    {/* SET DRESSING LABOUR ---------------------------------- */}
    <div className='mt-5'>
    <Row>
    <Col xs={1}>
    <p className='mb-2'>10.00</p>
    </Col>
    <Col xs={10}>
    <p className={ `${styles.BoldBlack} mb-2`}>SET DRESSING LABOUR</p>
    </Col>
    </Row>
    {/* Titles */}
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
    {/* Set Decorator */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>10.10</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Set Decorator</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{set_decorator_quantity || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{set_decorator_units_number || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{set_decorator_units_name || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{set_decorator_rate || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{decoratorset_total || 0}</p>
    </Col>
    </Row>
    {/* Assistant Set Decorator */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>10.20</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Assistant Set Decorator</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{assist_set_decorator_quantity || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{assist_set_decorator_units_number || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{assist_set_decorator_units_name || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{assist_set_decorator_rate || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{assistdecoratorset_total || 0}</p>
    </Col>
    </Row>
    {/* Lead Man */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>10.30</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Lead Man</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{lead_man_quantity || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{lead_man_units_number || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{lead_man_units_name || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{lead_man_rate || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{leadman_total || 0}</p>
    </Col>
    </Row>
    {/* Set Dressers */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>10.40</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Set Dressers</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{set_dressers_quantity || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{set_dressers_units_number || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{set_dressers_units_name || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{set_dressers_rate || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{dressers_total || 0}</p>
    </Col>
    </Row>
    {/* Swing Gang  */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>10.50</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Swing Gang </p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{swing_gang_quantity || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{swing_gang_units_number || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{swing_gang_units_name || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{swing_gang_rate || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{swinggang_total || 0}</p>
    </Col>
    </Row>
    {/* Set Dressing Buyer  */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>10.60</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Set Dressing Buyer </p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{set_dressing_buyer_quantity || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{set_dressing_buyer_units_number || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{set_dressing_buyer_units_name || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{set_dressing_buyer_rate || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{dressingbuyer_total || 0}</p>
    </Col>
    </Row>
    {/* Other - Dressing */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>10.70</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>OTHER - SET DRESSING</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{other_set_dressing || 0} </p>
    </Col>
    </Row>
    {/* Fringes Taxes */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>10.80</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Fringes and Taxes, Government/Unions</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{fringes_taxes_dressing || 0} </p>
    </Col>
    </Row>
    {/* Dressing Total */}
    <Row className='mt-3' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL SET DRESSING LABOUR </p>
    </Col>
    <Col md={3} >
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline} mb-0`}>{dressinglabour_total || 0}</p>
    </Col>
    </Row>
    </div>
    {/* PROPERTY LABOUR -------------------------------------- */}
    <div className='mt-5'>
    <Row>
    <Col xs={1}>
    <p className='mb-2'>11.00</p>
    </Col>
    <Col xs={10}>
    <p className={ `${styles.BoldBlack} mb-2`}>PROPERTY LABOUR</p>
    </Col>
    </Row>
    {/* Titles */}
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
    {/* Property Master */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>11.10</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Property Master</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{property_master_quantity || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{property_master_units_number || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{property_master_units_name || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{property_master_rate || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{propertymaster_total || 0}</p>
    </Col>
    </Row>
    {/* Assistant Property Master */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>11.20</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Assistant Property Master</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{assist_property_master_quantity || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{assist_property_master_units_number || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{assist_property_master_units_name || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{assist_property_master_rate || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{assistpropertymaster_total || 0}</p>
    </Col>
    </Row>
    {/* On Set Props Person */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>11.30</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>On Set Props Person</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{on_set_props_person_quantity || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{on_set_props_person_units_number || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{on_set_props_person_units_name || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{on_set_props_person_rate || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{onsetpropsperson_total || 0}</p>
    </Col>
    </Row>
    {/* Property Buyer */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>11.40</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Property Buyer</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{property_buyer_quantity || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{property_buyer_units_number || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{property_buyer_units_name || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{property_buyer_rate || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{propertybuyer_total || 0}</p>
    </Col>
    </Row>
    {/* Armorer */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>11.50</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Armorer</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{armorer_quantity || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{armorer_units_number || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{armorer_units_name || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{armorer_rate || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{armorer_total || 0}</p>
    </Col>
    </Row>
    {/* Other - Property */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>11.60</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>OTHER - PROPERTY</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{other_property || 0} </p>
    </Col>
    </Row>
    {/* Fringes Taxes */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>11.70</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Fringes and Taxes, Government/Unions</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{fringes_taxes_property || 0} </p>
    </Col>
    </Row>
    {/* Property Total */}
    <Row className='mt-3' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL PROPERTY LABOUR </p>
    </Col>
    <Col md={3} >
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline} mb-0`}>{propertylabour_total || 0}</p>
    </Col>
    </Row>
    </div>
    {/* WRANGLING LABOUR ------------------------------------- */}
    <div className='mt-5'>
    <Row>
    <Col xs={1}>
    <p className='mb-2'>12.00</p>
    </Col>
    <Col xs={10}>
    <p className={ `${styles.BoldBlack} mb-2`}>WRANGLING LABOUR</p>
    </Col>
    </Row>
    {/* Titles */}
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
    {/* Head Wrangler */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>12.10</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Head Wrangler</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{head_wrangler_quantity || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{head_wrangler_units_number || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{head_wrangler_units_name || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{head_wrangler_rate || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{headwrangler_total || 0}</p>
    </Col>
    </Row>
    {/* Other Wrangling Labour */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>12.20</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Other Wrangling Labour</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{other_wrangling_labour_quantity || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{other_wrangling_labour_units_number || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{other_wrangling_labour_units_name || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{other_wrangling_labour_rate || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{otherwranglinglabour_total || 0}</p>
    </Col>
    </Row>
    {/* Fringes Taxes */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>12.30</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Fringes and Taxes, Government/Unions</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{fringes_taxes_wrangling || 0} </p>
    </Col>
    </Row>
    {/* Wrangling Total */}
    <Row className='mt-3' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL WRANGLING LABOUR </p>
    </Col>
    <Col md={3} >
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline} mb-0`}>{wranglerlabour_total || 0}</p>
    </Col>
    </Row>
    </div>
    {/* FX LABOUR -------------------------------------------- */}
    <div className='mt-5'>
    <Row>
    <Col xs={1}>
    <p className='mb-2'>13.00</p>
    </Col>
    <Col xs={10}>
    <p className={ `${styles.BoldBlack} mb-2`}>FX LABOUR</p>
    </Col>
    </Row>
    {/* Titles */}
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
    {/* FX Supervisor */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>13.10</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>FX Supervisor</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{fx_supervisor_quantity || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{fx_supervisor_units_number || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{fx_supervisor_units_name || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{fx_supervisor_rate || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{fxsupervisor_total || 0}</p>
    </Col>
    </Row>
    {/* FX Assistant */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>13.20</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>FX Assistant</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{assist_fx_quantity || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{assist_fx_units_number || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{assist_fx_units_name || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{assist_fx_rate || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{assistfx_total || 0}</p>
    </Col>
    </Row>
    {/* Other FX Labour */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>13.30</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Other FX Labour</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{other_fx_labour_quantity || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{other_fx_labour_units_number || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{other_fx_labour_units_name || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{other_fx_labour_rate || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{otherfxlabour_total || 0}</p>
    </Col>
    </Row>
    {/* Fringes Taxes */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>13.40</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Fringes and Taxes, Government/Unions</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{fringes_taxes_fx || 0} </p>
    </Col>
    </Row>
    {/* FX Total */}
    <Row className='mt-3' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL FX LABOUR </p>
    </Col>
    <Col md={3} >
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline} mb-0`}>{fxlabour_total || 0}</p>
    </Col>
    </Row>
    </div>
    {/* WARDROBE LABOUR -------------------------------------- */}
    <div className='mt-5'>
    <Row>
    <Col xs={1}>
    <p className='mb-2'>14.00</p>
    </Col>
    <Col xs={10}>
    <p className={ `${styles.BoldBlack} mb-2`}>WARDROBE LABOUR</p>
    </Col>
    </Row>
    {/* Titles */}
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
    {/* Costume Designer */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>14.10</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Costume Designer</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{costume_designer_quantity || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{costume_designer_units_number || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{costume_designer_units_name || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{costume_designer_rate || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{costumedesigner_total || 0}</p>
    </Col>
    </Row>
    {/* Assistant Costume Designer */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>14.20</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Assistant Costume Designer</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{assist_costume_designer_quantity || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{assist_costume_designer_units_number || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{assist_costume_designer_units_name || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{assist_costume_designer_rate || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{assistcosdesigner_total || 0}</p>
    </Col>
    </Row>
    {/* Head Wardrobe */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>14.30</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Head Wardrobe</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{head_wardrobe_quantity || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{head_wardrobe_units_number || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{head_wardrobe_units_name || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{head_wardrobe_rate || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{headwardrobe_total || 0}</p>
    </Col>
    </Row>
    {/* Wardrobe Assistant */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>14.40</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Wardrobe Assistant</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{wardrobe_assist_quantity || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{wardrobe_assist_units_number || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{wardrobe_assist_units_name || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{wardrobe_assist_rate || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{wardrobeassist_total || 0}</p>
    </Col>
    </Row>
    {/* Truck Costumer */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>14.50</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Truck Costumer</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{truck_costumer_quantity || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{truck_costumer_units_number || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{truck_costumer_units_name || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{truck_costumer_rate || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{truckcostumer_total || 0}</p>
    </Col>
    </Row>
    {/* Other Wardrobe Labour */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>14.60</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Other Wardrobe Labour</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{other_wardrobe_labour_quantity || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{other_wardrobe_labour_units_number || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{other_wardrobe_labour_units_name || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{other_wardrobe_labour_rate || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{otherwardrobe_total || 0}</p>
    </Col>
    </Row>
    {/* Fringes Taxes */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>14.70</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Fringes and Taxes, Government/Unions</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{fringes_taxes_wardrobe || 0} </p>
    </Col>
    </Row>
    {/* Wardrobe Total */}
    <Row className='mt-3' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL WARDROBE LABOUR </p>
    </Col>
    <Col md={3} >
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline} mb-0`}>{wardrobelabour_total || 0}</p>
    </Col>
    </Row>
    </div>
    {/* MAKEUP LABOUR ---------------------------------------- */}
    <div className='mt-5'>
    <Row>
    <Col xs={1}>
    <p className='mb-2'>15.00</p>
    </Col>
    <Col xs={10}>
    <p className={ `${styles.BoldBlack} mb-2`}>MAKEUP LABOUR</p>
    </Col>
    </Row>
    {/* Titles */}
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
    {/* Makeup Dept Head */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>15.10</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Makeup Dept Head</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{makeup_dept_head_quantity || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{makeup_dept_head_units_number || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{makeup_dept_head_units_name || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{makeup_dept_head_rate || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{headmakeup_total || 0}</p>
    </Col>
    </Row>
    {/* Key Makeup */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>15.20</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Key Makeup</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{key_makeup_quantity || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{key_makeup_units_number || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{key_makeup_units_name || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{key_makeup_rate || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{keymakeup_total || 0}</p>
    </Col>
    </Row>
    {/* Makeup Artist */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>15.30</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Makeup Artist</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{makeup_artist_quantity || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{makeup_artist_units_number || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{makeup_artist_units_name || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{makeup_artist_rate || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{makeupartist_total || 0}</p>
    </Col>
    </Row>
    {/* Key Hairstylist */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>15.40</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Key Hairstylist</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{key_hairstylist_quantity || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{key_hairstylist_units_number || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{key_hairstylist_units_name || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{key_hairstylist_rate || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{keyhairstylist_total || 0}</p>
    </Col>
    </Row>
    {/* Hairdresser */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>15.50</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Hairdresser</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{hairdresser_quantity || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{hairdresser_units_number || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{hairdresser_units_name || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{hairdresser_rate || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{hairdresser_total || 0}</p>
    </Col>
    </Row>
    {/* Hair Makeup Dailies */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>15.60</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Hair Makeup Dailies</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{hair_makeup_dailies_quantity || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{hair_makeup_dailies_units_number || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{hair_makeup_dailies_units_name || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{hair_makeup_dailies_rate || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{hairmakeupdailies_total || 0}</p>
    </Col>
    </Row>
    {/* Other Makeup Labour */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>15.70</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Other Makeup Labour</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{other_makeup_labour_quantity || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{other_makeup_labour_units_number || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{other_makeup_labour_units_name || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{other_makeup_labour_rate || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{othermakeuplabour_total || 0}</p>
    </Col>
    </Row>
    {/* SFX Makeup */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>15.80</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>SFX Makeup</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{sfx_makeup_quantity || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{sfx_makeup_units_number || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{sfx_makeup_units_name || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{sfx_makeup_rate || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{sfxmakeup_total || 0}</p>
    </Col>
    </Row>
    {/* Fringes Taxes */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>15.90</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Fringes and Taxes, Government/Unions</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{fringes_taxes_makeup || 0} </p>
    </Col>
    </Row>
    {/* Makeup Total */}
    <Row className='mt-3' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL MAKEUP LABOUR </p>
    </Col>
    <Col md={3} >
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline} mb-0`}>{makeuplabour_total || 0}</p>
    </Col>
    </Row>
    </div>
    {/* CAMERA ----------------------------------------------- */}
    <div className='mt-5'>
    <Row>
    <Col xs={1}>
    <p className='mb-2'>16.00</p>
    </Col>
    <Col xs={10}>
    <p className={ `${styles.BoldBlack} mb-2`}>CAMERA LABOUR</p>
    </Col>
    </Row>
    {/* Titles */}
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
    {/* DOP */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>16.10</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>DOP</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{dop_qty || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{dop_uno || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{dop_una || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{dop_rt || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{dop_total || 0}</p>
    </Col>
    </Row>
    {/* Camera Operator */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>16.20</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Camera Operator</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{camera_op_qty || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{camera_op_uno || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{camera_op_una || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{camera_op_rt || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{cameraop_total || 0}</p>
    </Col>
    </Row>
    {/* 1st Assistant Camera */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>16.30</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>1st Assistant Camera</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{cam_ac1_qty || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{cam_ac1_uno || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{cam_ac1_una || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{cam_ac1_rt || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{camac1_total || 0}</p>
    </Col>
    </Row>
    {/* 2nd Assistant Camera */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>16.40</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>2nd Assistant Camera</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{cam_ac2_qty || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{cam_ac2_uno || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{cam_ac2_una || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{cam_ac2_rt || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{camac2_total || 0}</p>
    </Col>
    </Row>
    {/* DIT */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>16.50</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>DIT</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{dit_qty || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{dit_uno || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{dit_una || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{dit_rt || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{dit_total || 0}</p>
    </Col>
    </Row>
    {/* Steadicam */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>16.60</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Steadicam</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{steadicam_qty || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{steadicam_uno || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{steadicam_una || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{steadicam_rt || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{steadicam_total || 0}</p>
    </Col>
    </Row>
    {/* Camera PA */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>16.70</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Camera PA</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{cam_pa_qty || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{cam_pa_uno || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{cam_pa_una || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{cam_pa_rt || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{campa_total || 0}</p>
    </Col>
    </Row>
    {/* Drone Pilot */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>16.80</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Drone Pilot</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{drone_pilot_qty || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{drone_pilot_uno || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{drone_pilot_una || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{drone_pilot_rt || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{dronepilot_total || 0}</p>
    </Col>
    </Row>
    {/* Stills Photographer */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>16.90</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Stills Photographer</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{stills_qty || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{stills_uno || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{stills_una || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{stills_rt || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{stills_total || 0}</p>
    </Col>
    </Row>
    {/* Other */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>16.91</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Other - Camera</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{other_cam_qty || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{other_cam_uno || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{other_cam_una || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{other_cam_rt || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{othercam_total || 0}</p>
    </Col>
    </Row>
    {/* Fringes Taxes */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>16.92</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Fringes and Taxes, Government/Unions</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{fringes_taxes_camera || 0} </p>
    </Col>
    </Row>
    {/* Camera Total */}
    <Row className='mt-3' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL CAMERA LABOUR </p>
    </Col>
    <Col md={3} >
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline} mb-0`}>{cameralabour_total || 0}</p>
    </Col>
    </Row>
    </div>
    {/* ELECTRICAL ------------------------------------------- */}
    <div className='mt-5'>
    <Row>
    <Col xs={1}>
    <p className='mb-2'>17.00</p>
    </Col>
    <Col xs={10}>
    <p className={ `${styles.BoldBlack} mb-2`}>ELECTRICAL LABOUR</p>
    </Col>
    </Row>
    {/* Titles */}
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
    {/* Gaffer */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>17.10</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Gaffer</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{gaffer_qty || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{gaffer_uno || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{gaffer_una || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{gaffer_rt || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{gaffer_total || 0}</p>
    </Col>
    </Row>
    {/* Best Boy */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>17.20</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Best Boy</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{best_boy_qty || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{best_boy_uno || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{best_boy_una || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{best_boy_rt || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{bestboy_total || 0}</p>
    </Col>
    </Row>
    {/* Electricians */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>17.30</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Electricians</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{electrician_qty || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{electrician_uno || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{electrician_una || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{electrician_rt || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{electrician_total || 0}</p>
    </Col>
    </Row>
    {/* Dailies Electric */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>17.40</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Dailies Electric</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{dailies_elec_qty || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{dailies_elec_uno || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{dailies_elec_una || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{dailies_elec_rt || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{dailieselec_total || 0}</p>
    </Col>
    </Row>
    {/* Generator Operator */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>17.50</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Generator Operator</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{generator_op_qty || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{generator_op_uno || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{generator_op_una || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{generator_op_rt || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{generatorop_total || 0}</p>
    </Col>
    </Row>
    {/* Other Electrical */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>17.60</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Other Electrical</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{other_elec_qty || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{other_elec_uno || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{other_elec_una || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{other_elec_rt || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{otherelectric_total || 0}</p>
    </Col>
    </Row>
    {/* Fringes Taxes */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>17.70</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Fringes and Taxes, Government/Unions</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{fringes_taxes_electric || 0} </p>
    </Col>
    </Row>
    {/* Electric Total */}
    <Row className='mt-3' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL ELECTRICAL LABOUR </p>
    </Col>
    <Col md={3} >
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline} mb-0`}>{electriclabour_total || 0}</p>
    </Col>
    </Row>
    </div>
    {/* GRIP ------------------------------------------------- */}
    <div className='mt-5'>
    <Row>
    <Col xs={1}>
    <p className='mb-2'>18.00</p>
    </Col>
    <Col xs={10}>
    <p className={ `${styles.BoldBlack} mb-2`}>GRIP LABOUR</p>
    </Col>
    </Row>
    {/* Titles */}
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
    {/* Key Grip */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}>18.10</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Key Grip</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{key_grip_qty || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{key_grip_uno || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{key_grip_una || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{key_grip_rt || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{keygrip_total || 0}</p>
    </Col>
    </Row>
    {/* Best Boy Grip */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}>18.20</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Best Boy Grip</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{best_boy_grip_qty || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{best_boy_grip_uno || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{best_boy_grip_una || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{best_boy_grip_rt || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{bestboygrip_total || 0}</p>
    </Col>
    </Row>
    {/* Grips */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}>18.30</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Grips</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{grips_qty || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{grips_uno || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{grips_una || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{grips_rt || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{grips_total || 0}</p>
    </Col>
    </Row>
    {/* Dailies - Grips */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}>18.40</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Dailies - Grips</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{dailies_grip_qty || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{dailies_grip_uno || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{dailies_grip_una || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{dailies_grip_rt || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{dailiesgrip_total || 0}</p>
    </Col>
    </Row>
    {/* Dolly / Crane Grips */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}>18.50</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Dolly / Crane Grips</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{dolly_crane_grip_qty || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{dolly_crane_grip_uno || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{dolly_crane_grip_una || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{dolly_crane_grip_rt || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{dollycranegrip_total || 0}</p>
    </Col>
    </Row>
    {/* Swing Grips G&E */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}>18.60</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Swing Grips G&E</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{swing_grips_qty || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{swing_grips_uno || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{swing_grips_una || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{swing_grips_rt || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{swinggrips_total || 0}</p>
    </Col>
    </Row>
    {/* Other Grip Labour */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}>18.70</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Other Grip Labour</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{other_grip_labour_qty || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{other_grip_labour_uno || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{other_grip_labour_una || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{other_grip_labour_rt || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{othergriplabour_total || 0}</p>
    </Col>
    </Row>
    {/* Fringes Taxes */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>18.80</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Fringes and Taxes, Government/Unions</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{fringes_taxes_grip || 0} </p>
    </Col>
    </Row>
    {/* Grip Total */}
    <Row className='mt-3' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL GRIP LABOUR </p>
    </Col>
    <Col md={3} >
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline} mb-0`}>{griplabour_total || 0}</p>
    </Col>
    </Row>
    </div>
    {/* SOUND ------------------------------------------------ */}
    <div className='mt-5'>
    <Row>
    <Col xs={1}>
    <p className='mb-2'>19.00</p>
    </Col>
    <Col xs={10}>
    <p className={ `${styles.BoldBlack} mb-2`}>PRODUCTION SOUND LABOUR</p>
    </Col>
    </Row>
    {/* Titles */}
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
    {/* Sound Mixer */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}>19.10</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Sound Mixer</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{sound_mixer_qty || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{sound_mixer_uno || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{sound_mixer_una || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{sound_mixer_rt || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{soundmixer_total || 0}</p>
    </Col>
    </Row>
    {/* Boom Operator */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}>19.20</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Boom Operator</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{boom_operator_qty || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{boom_operator_uno || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{boom_operator_una || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{boom_operator_rt || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{boomoperator_total || 0}</p>
    </Col>
    </Row>
    {/* Cable Wrangler */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}>19.30</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Cable Wrangler</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{cable_wrangler_qty || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{cable_wrangler_uno || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{cable_wrangler_una || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{cable_wrangler_rt || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{cablewrangler_total || 0}</p>
    </Col>
    </Row>
    {/* Other Sound Labour */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}>19.40</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Other Sound Labour</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{other_sound_labour_qty || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{other_sound_labour_uno || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{other_sound_labour_una || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{other_sound_labour_rt || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{othersoundlabour_total || 0}</p>
    </Col>
    </Row>
    {/* Fringes Taxes */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>19.50</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Fringes and Taxes, Government/Unions</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{fringes_taxes_sound || 0} </p>
    </Col>
    </Row>
    {/* Sound Total */}
    <Row className='mt-3' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL SOUND LABOUR </p>
    </Col>
    <Col md={3} >
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline} mb-0`}>{soundlabour_total || 0}</p>
    </Col>
    </Row>
    </div>
    {/* TRANSPORTATION --------------------------------------- */}
    <div className='mt-5'>
    <Row>
    <Col xs={1}>
    <p className='mb-2'>20.00</p>
    </Col>
    <Col xs={10}>
    <p className={ `${styles.BoldBlack} mb-2`}>TRANSPORTATION LABOUR</p>
    </Col>
    </Row>
    {/* Titles */}
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
    {/* Transport Coordinator */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}>20.10</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Transport Coordinator</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{tp_coordinator_qty || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{tp_coordinator_uno || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{tp_coordinator_una || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{tp_coordinator_rt || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{tpcoordinator_total || 0}</p>
    </Col>
    </Row>
    {/* Transport Captain */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}>20.20</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Transport Captain</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{tp_captain_qty || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{tp_captain_uno || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{tp_captain_una || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{tp_captain_rt || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{tpcaptain_total || 0}</p>
    </Col>
    </Row>
    {/* Transport Manager */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}>20.30</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Transport Manager</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{tp_manager_qty || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{tp_manager_uno || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{tp_manager_una || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{tp_manager_rt || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{tpmanager_total || 0}</p>
    </Col>
    </Row>
    {/* Head Driver */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}>20.40</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Head Driver</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{head_driver_qty || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{head_driver_uno || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{head_driver_una || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{head_driver_rt || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{headdriver_total || 0}</p>
    </Col>
    </Row>
    {/* Drivers */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}>20.50</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Drivers</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{drivers_qty || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{drivers_uno || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{drivers_una || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{drivers_rt || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{drivers_total || 0}</p>
    </Col>
    </Row>
    {/* Fringes Taxes */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>20.60</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Fringes and Taxes, Government/Unions</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{fringes_taxes_transport || 0} </p>
    </Col>
    </Row>
    {/* Transport Total */}
    <Row className='mt-3' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL TRANSPORTATION LABOUR </p>
    </Col>
    <Col md={3} >
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline} mb-0`}>{transportlabour_total || 0}</p>
    </Col>
    </Row>
    </div>
    {/* TV SPECIFIC ------------------------------------------ */}
    <div className='mt-5'>
    <Row>
    <Col xs={1}>
    <p className='mb-2'>21.00</p>
    </Col>
    <Col xs={10}>
    <p className={ `${styles.BoldBlack} mb-2`}>TV SPECIFIC LABOUR</p>
    </Col>
    </Row>
    {/* Titles */}
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
    {/* Technical Supervisor */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}>21.10</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Technical Supervisor</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{tech_super_qty || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{tech_super_uno || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{tech_super_una || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{tech_super_rt || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{techsuper_total || 0}</p>
    </Col>
    </Row>
    {/* Technical Director */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}>21.20</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Technical Director</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{tech_direct_qty || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{tech_direct_uno || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{tech_direct_una || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{tech_direct_rt || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{techdirect_total || 0}</p>
    </Col>
    </Row>
    {/* Floor Manager */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}>21.30</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Floor Manager</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{floor_man_qty || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{floor_man_uno || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{floor_man_una || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{floor_man_rt || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{floorman_total || 0}</p>
    </Col>
    </Row>
    {/* Lighting Director */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}>21.40</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Lighting Director</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{light_direct_qty || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{light_direct_uno || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{light_direct_una || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{light_direct_rt || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{lightdirect_total || 0}</p>
    </Col>
    </Row>
    {/* Boardman */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}>21.50</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Boardman</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{boardman_qty || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{boardman_uno || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{boardman_una || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{boardman_rt || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{boardman_total || 0}</p>
    </Col>
    </Row>
    {/* Audio */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}>21.60</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Audio</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{audio_qty || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{audio_uno || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{audio_una || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{audio_rt || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{audio_total || 0}</p>
    </Col>
    </Row>
    {/* VRT Operator */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}>21.70</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>VRT Operator</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{vtr_operator_qty || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{vtr_operator_uno || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{vtr_operator_una || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{vtr_operator_rt || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{vtroperator_total || 0}</p>
    </Col>
    </Row>
    {/* Stagehands */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}>21.80</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Stagehands</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{stagehands_qty || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{stagehands_uno || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{stagehands_una || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{stagehands_rt || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{stagehands_total || 0}</p>
    </Col>
    </Row>
    {/* Other TV Labour */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}>21.90</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Other TV Labour</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{other_tv_qty || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{other_tv_uno || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{other_tv_una || 0}</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{other_tv_rt || 0}</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{othertv_total || 0}</p>
    </Col>
    </Row>
    {/* Fringes Taxes */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>21.91</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Fringes and Taxes, Government/Unions</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{fringes_taxes_tv || 0} </p>
    </Col>
    </Row>
    {/* TV Total */}
    <Row className='mt-3' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL TV SPECIFIC LABOUR </p>
    </Col>
    <Col md={3} >
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline} mb-0`}>{tvspecificlabour_total || 0}</p>
    </Col>
    </Row>
    </div>
    </div>
    {/* BELOW B PRODUCTION COSTS SECTIONS ----------------------------- */}
    <div className='px-3'>
    <Row className={ `${styles.OverviewBlue} mx-1 my-5 py-1 text-center`}>
    <Col md={12}>
    <h5 className={ `${styles.BoldBlack}`}>BELOW THE LINE - "B" PRODUCTION - COSTS </h5>
    </Col>
    </Row>
    {/* PRODUCTION OFFICE ------------------------------------ */}
    <div className='mt-5'>
    <Row>
    <Col xs={1}>
    <p className='mb-2'>22.00</p>
    </Col>
    <Col xs={10}>
    <p className={ `${styles.BoldBlack} mb-2`}>PRODUCTION OFFICE</p>
    </Col>
    </Row>
    {/* Titles */}
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
    {/* Office Rentals */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>22.10</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Office Rentals</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{office_rentals || 0} </p>
    </Col>
    </Row>
    {/* Office Equipment */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>22.20</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Office Equipment</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{office_equipment || 0} </p>
    </Col>
    </Row>
    {/* Office Supplies */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>22.30</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Office Supplies</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{office_supplies || 0} </p>
    </Col>
    </Row>
    {/* Phones/Internet/Mobiles */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>22.40</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Phones/Internet/Mobiles</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{phones_net || 0} </p>
    </Col>
    </Row>
    {/* Couriers/Postage */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>22.50</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Couriers/Postage</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{courier_postage || 0} </p>
    </Col>
    </Row>
    {/* Other */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>22.60</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{office_other || 0} </p>
    </Col>
    </Row>
    {/* Production Office Total */}
    <Row className='mt-3' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL PRODUCTION OFFICE </p>
    </Col>
    <Col md={3} >
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline} mb-0`}>{proOff_total || 0}</p>
    </Col>
    </Row>
    </div>
    {/* STUDIO ----------------------------------------------- */}
    <div className='mt-5'>
    <Row>
    <Col xs={1}>
    <p className='mb-2'>23.00</p>
    </Col>
    <Col xs={10}>
    <p className={ `${styles.BoldBlack} mb-2`}>STUDIO/BACKLOT EXPENSES</p>
    </Col>
    </Row>
    {/* Titles */}
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
    {/* Studio/Backlot Rentals */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>23.10</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Studio/Backlot Rentals</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{studio_rentals || 0} </p>
    </Col>
    </Row>
    {/* Power */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>23.20</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Power</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{power || 0} </p>
    </Col>
    </Row>
    {/* Carpentry Shop Rentals */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>23.30</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Carpentry Shop Rentals</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{carpentry_rentals || 0} </p>
    </Col>
    </Row>
    {/* Special Effects Equipment */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>23.40</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Special Effects Equipment</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{studio_fx_equipment || 0} </p>
    </Col>
    </Row>
    {/* Security */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>23.50</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Security</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{studio_security || 0} </p>
    </Col>
    </Row>
    {/* Other */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>23.60</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Other - Studio</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{studio_other || 0} </p>
    </Col>
    </Row>
    {/* Studio Total */}
    <Row className='mt-3' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL STUDIO/BACKLOT EXPENSES </p>
    </Col>
    <Col md={3} >
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline} mb-0`}>{studio_total || 0}</p>
    </Col>
    </Row>
    </div>
    {/* SITE ------------------------------------------------- */}
    <div className='mt-5'>
    <Row>
    <Col xs={1}>
    <p className='mb-2'>24.00</p>
    </Col>
    <Col xs={10}>
    <p className={ `${styles.BoldBlack} mb-2`}>SITE EXPENSES</p>
    </Col>
    </Row>
    {/* Titles */}
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
    {/* Surveying/Scouting */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>24.10</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Surveying/Scouting Expences</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{surveying_scouting || 0} </p>
    </Col>
    </Row>
    {/* Site Rentals */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>24.20</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Site Rentals</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{site_rentals || 0} </p>
    </Col>
    </Row>
    {/* Site Power */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>24.30</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Site Power</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{site_power || 0} </p>
    </Col>
    </Row>
    {/* Site Access */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>24.40</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Site Access</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{site_access || 0} </p>
    </Col>
    </Row>
    {/* Site Insurance */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>24.50</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Site Insurance</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{site_insurance || 0} </p>
    </Col>
    </Row>
    {/* Repairs/Construction */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>24.60</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Repairs/Construction</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{repairs_construction || 0} </p>
    </Col>
    </Row>
    {/* Security */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>24.70</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Security</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{site_security || 0} </p>
    </Col>
    </Row>
    {/* Police Control */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>24.80</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Police Control</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{police_control || 0} </p>
    </Col>
    </Row>
    {/* Other */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>24.90</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{site_other || 0} </p>
    </Col>
    </Row>
    {/* Site Total */}
    <Row className='mt-3' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL SITE EXPENSES </p>
    </Col>
    <Col md={3} >
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline} mb-0`}>{site_total || 0}</p>
    </Col>
    </Row>
    </div>   
    {/* UNIT ------------------------------------------------- */}
    <div className='mt-5'>
    <Row>
    <Col xs={1}>
    <p className='mb-2'>25.00</p>
    </Col>
    <Col xs={10}>
    <p className={ `${styles.BoldBlack} mb-2`}>UNIT EXPENSES</p>
    </Col>
    </Row>
    {/* Titles */}
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
    {/* Catering */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>25.10</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Catering</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{catering || 0} </p>
    </Col>
    </Row>
    {/* Craft Expenses */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>25.20</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Craft Expenses</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{craft_expenses || 0} </p>
    </Col>
    </Row>
    {/* Meal Penalty */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>25.30</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Meal Penalty</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{meal_penalty || 0} </p>
    </Col>
    </Row>
    {/* Support Area/Green Room */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>25.40</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Support Area/Green Room</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{green_room || 0} </p>
    </Col>
    </Row>
    {/* First Aid */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>25.50</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>First Aid</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{first_aid || 0} </p>
    </Col>
    </Row>
    {/* Special Crew Outfitting */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>25.60</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Special Crew Outfitting</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{outfitting || 0} </p>
    </Col>
    </Row>
    {/* Medical/Insurance/Visa Expenses */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>25.70</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Medical/Insurance/Visa Expenses</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{medical_insurance || 0} </p>
    </Col>
    </Row>
    {/* Other */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>25.80</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{unit_other || 0} </p>
    </Col>
    </Row>
    {/* Unit Total */}
    <Row className='mt-3' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL UNIT EXPENSES </p>
    </Col>
    <Col md={3} >
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline} mb-0`}>{unit_total || 0}</p>
    </Col>
    </Row>
    </div>
    {/* TRAVEL & lIVING -------------------------------------- */}
    <div className='mt-5'>
    <Row>
    <Col xs={1}>
    <p className='mb-2'>26.00</p>
    </Col>
    <Col xs={10}>
    <p className={ `${styles.BoldBlack} mb-2`}>TRAVEL & lIVING</p>
    </Col>
    </Row>
    {/* Titles */}
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
    {/* Fares */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>26.10</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Fares</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{fares || 0} </p>
    </Col>
    </Row>
    {/* Accomatation/Hotels */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>26.20</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Accomatation/Hotels</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{accomatation_hotels || 0} </p>
    </Col>
    </Row>
    {/* Per diems */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>26.30</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Per diems</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{per_diems || 0} </p>
    </Col>
    </Row>
    {/* Taxis/Limousines */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>26.40</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Taxis/Limousines</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{taxis_limos || 0} </p>
    </Col>
    </Row>
    {/* Shipping */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>26.50</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Shipping</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{shipping || 0} </p>
    </Col>
    </Row>
    {/* Customs Brokerage */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>26.60</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Customs Brokerage</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{customs_brokerage || 0} </p>
    </Col>
    </Row>
    {/* Other */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>27.60</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{other_trav_liv || 0} </p>
    </Col>
    </Row>
    {/* TRAVEL & LIVING Total */}
    <Row className='mt-3' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL TRAVEL & LIVING </p>
    </Col>
    <Col md={3} >
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline} mb-0`}>{traliv_total || 0}</p>
    </Col>
    </Row>
    </div>
    {/* TRANSPORTATION --------------------------------------- */}
    <div className='mt-5'>
    <Row>
    <Col xs={1}>
    <p className='mb-2'>27.00</p>
    </Col>
    <Col xs={10}>
    <p className={ `${styles.BoldBlack} mb-2`}>TRANSPORTATION</p>
    </Col>
    </Row>
    {/* Titles */}
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
    {/* Production Cars */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>27.10</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Production Cars</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{production_cars || 0} </p>
    </Col>
    </Row>
    {/* Trucks/Vans */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>27.20</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Trucks/Vans</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{trucks_vans || 0} </p>
    </Col>
    </Row>
    {/* Buses */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>27.30</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Buses</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{buses || 0} </p>
    </Col>
    </Row>
    {/* Motorhomes */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>27.40</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Motorhomes</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{motorhomes || 0} </p>
    </Col>
    </Row>
    {/* Talent Cars */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>27.50</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Talent Cars</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{talent_cars || 0} </p>
    </Col>
    </Row>
    {/* Special Support Vehicles */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>27.60</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Special Support Vehicles</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{support_vehicles || 0} </p>
    </Col>
    </Row>
    {/* Boats/Planes */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>27.70</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Boats/Planes</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{boats_planes || 0} </p>
    </Col>
    </Row>
    {/* Fuel */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>27.80</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Fuel</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{fuel || 0} </p>
    </Col>
    </Row>
    {/* Repairs */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>27.90</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Repairs</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{repairs || 0} </p>
    </Col>
    </Row>
    {/* Taxis */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>27.91</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Taxis</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{taxis || 0} </p>
    </Col>
    </Row>
    {/* Parking */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>27.92</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Parking</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{parking || 0} </p>
    </Col>
    </Row>
    {/* Special Licenses/Permits */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>27.93</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Special Licenses/Permits</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{licenses_permits || 0} </p>
    </Col>
    </Row>
    {/* Brokerage/Insurance */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>27.94</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Brokerage/Insurance</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{brokerage_insurance || 0} </p>
    </Col>
    </Row>
    {/* Other */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>27.95</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{other_transport || 0} </p>
    </Col>
    </Row>
    {/* TRANSPORTATION Total */}
    <Row className='mt-3' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL TRANSPORTATION </p>
    </Col>
    <Col md={3} >
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline} mb-0`}>{transport_total || 0}</p>
    </Col>
    </Row>
    </div>
    {/* CONSTRUCTION MATERIAL -------------------------------- */}
    <div className='mt-5'>
    <Row>
    <Col xs={1}>
    <p className='mb-2'>28.00</p>
    </Col>
    <Col xs={10}>
    <p className={ `${styles.BoldBlack} mb-2`}>CONSTRUCTION MATERIAL</p>
    </Col>
    </Row>
    {/* Titles */}
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
    {/* Carpentry Rentals */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>28.10</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Carpentry Rentals</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{rentals_carpentry || 0} </p>
    </Col>
    </Row>
    {/* Carpentry Purchases */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>28.20</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Carpentry Purchases</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{carpentry_purchases || 0} </p>
    </Col>
    </Row>
    {/* Painting Rentals */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>28.30</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Painting Rentals</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{painting_rentals || 0} </p>
    </Col>
    </Row>
    {/* Painting Purchases */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>28.40</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Painting Purchases</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{painting_purchases || 0} </p>
    </Col>
    </Row>
    {/* Backdrops/Murals */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>28.50</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Backdrops/Murals</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{backdrops_murals || 0} </p>
    </Col>
    </Row>
    {/* Scaffolding */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>28.60</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Scaffolding</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{scaffolding || 0} </p>
    </Col>
    </Row>
    {/* Warehouse Rental */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>28.70</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Warehouse Rental</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{warehouse_rental || 0} </p>
    </Col>
    </Row>
    {/* Other */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>28.80</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{construction_other || 0} </p>
    </Col>
    </Row>
    {/* CONSTRUCTION MATERIAL Total */}
    <Row className='mt-3' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL CONSTRUCTION MATERIAL </p>
    </Col>
    <Col md={3} >
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline} mb-0`}>{constructionmat_total || 0}</p>
    </Col>
    </Row>
    </div>
    {/* ART SUPPLIES ----------------------------------------- */}
    <div className='mt-5'>
    <Row>
    <Col xs={1}>
    <p className='mb-2'>29.00</p>
    </Col>
    <Col xs={10}>
    <p className={ `${styles.BoldBlack} mb-2`}>ART SUPPLIES</p>
    </Col>
    </Row>
    {/* Titles */}
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
    {/* Drawing Supplies */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>29.10</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Drawing Supplies</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{drawing_supplies || 0} </p>
    </Col>
    </Row>
    {/* Drawing Equipment */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>29.20</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Drawing Equipment</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{drawing_equipment || 0} </p>
    </Col>
    </Row>
    {/* Tech/Software */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>29.30</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Tech/Software</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{tech || 0} </p>
    </Col>
    </Row>
    {/* Stock/Prints/Processing */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>29.40</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Stock/Prints/Processing</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{stock_prints_processing || 0} </p>
    </Col>
    </Row>
    {/* Blueprints */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>29.50</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Blueprints</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{blueprinting || 0} </p>
    </Col>
    </Row>
    {/* Other */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>29.60</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{other_art || 0} </p>
    </Col>
    </Row>
    {/* ART SUPPLIES Total */}
    <Row className='mt-3' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL ART SUPPLIES </p>
    </Col>
    <Col md={3} >
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline} mb-0`}>{artSup_total || 0}</p>
    </Col>
    </Row>
    </div>
    {/* SET DRESSING ----------------------------------------- */}
    <div className='mt-5'>
    <Row>
    <Col xs={1}>
    <p className='mb-2'>30.00</p>
    </Col>
    <Col xs={10}>
    <p className={ `${styles.BoldBlack} mb-2`}>SET DRESSING</p>
    </Col>
    </Row>
    {/* Titles */}
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
    {/* Rentals */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>30.10</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Rentals</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{dress_rentals || 0} </p>
    </Col>
    </Row>
    {/* Purchases */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>30.20</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Purchases</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{dress_purchases || 0} </p>
    </Col>
    </Row>
    {/* Manufacture */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>30.30</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Manufacture</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{dress_manufacture || 0} </p>
    </Col>
    </Row>
    {/* Repairs/Replacements */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>30.40</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Repairs/Replacements</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{dress_repairs_replacements || 0} </p>
    </Col>
    </Row>
    {/* Other */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>30.50</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{other_dressing || 0} </p>
    </Col>
    </Row>
    {/* SET DRESSING Total */}
    <Row className='mt-3' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL SET DRESSING </p>
    </Col>
    <Col md={3} >
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline} mb-0`}>{dressing_total || 0}</p>
    </Col>
    </Row>
    </div>
    {/* PROPS ------------------------------------------------ */}
    <div className='mt-5'>
    <Row>
    <Col xs={1}>
    <p className='mb-2'>31.00</p>
    </Col>
    <Col xs={10}>
    <p className={ `${styles.BoldBlack} mb-2`}>PROPS</p>
    </Col>
    </Row>
    {/* Titles */}
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
    {/* Rentals */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>31.10</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Rentals</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{props_rentals || 0} </p>
    </Col>
    </Row>
    {/* Purchases */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>31.20</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Purchases</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{props_purchases || 0} </p>
    </Col>
    </Row>
    {/* Graphics/Signs */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>31.30</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Graphics/Signs</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{graphics_signs || 0} </p>
    </Col>
    </Row>
    {/* Repairs/Replacements */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>31.40</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Repairs/Replacements</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{props_repairs_replac || 0} </p>
    </Col>
    </Row>
    {/* Picture Vehicle Rentals */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>31.50</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Picture Vehicle Rentals</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{picture_vehicle_rentals || 0} </p>
    </Col>
    </Row>
    {/* Picture Vehicle Purchases */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>31.60</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Picture Vehicle Purchases</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{picture_vehicle_purchases || 0} </p>
    </Col>
    </Row>
    {/* Picture Vehicle Modifications */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>31.70</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Picture Vehicle Modifications</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{picture_vehicle_mods || 0} </p>
    </Col>
    </Row>
    {/* Picture Vehicle Insurance */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>31.80</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Picture Vehicle Insurance</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{picture_vehicle_ins || 0} </p>
    </Col>
    </Row>
    {/* Other */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>31.90</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{other_props || 0} </p>
    </Col>
    </Row>
    {/* PROPS Total */}
    <Row className='mt-3' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL PROPS </p>
    </Col>
    <Col md={3} >
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline} mb-0`}>{props_total || 0}</p>
    </Col>
    </Row>
    </div>
    {/* FX --------------------------------------------------- */}
    <div className='mt-5'>
    <Row>
    <Col xs={1}>
    <p className='mb-2'>32.00</p>
    </Col>
    <Col xs={10}>
    <p className={ `${styles.BoldBlack} mb-2`}>SPECIAL EFFECTS</p>
    </Col>
    </Row>
    {/* Titles */}
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
    {/* Rentals */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>32.10</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Rentals</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{fx_rentals || 0} </p>
    </Col>
    </Row>
    {/* Purchases */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>32.20</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Purchases</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{fx_purchases || 0} </p>
    </Col>
    </Row>
    {/* Stunts Purchases/Rentals */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>32.30</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Stunts Purchases/Rentals</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{stunts_purchases_rentals || 0} </p>
    </Col>
    </Row>
    {/* Armaments & Permits/Fees */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>32.40</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Armaments & Permits/Fees</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{armaments_permits_fees || 0} </p>
    </Col>
    </Row>
    {/* Other */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>32.50</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{other_fx || 0} </p>
    </Col>
    </Row>
    {/* SPECIAL EFFECTS Total */}
    <Row className='mt-3' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL SPECIAL EFFECTS </p>
    </Col>
    <Col md={3} >
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline} mb-0`}>{fx_total || 0}</p>
    </Col>
    </Row>
    </div>
    {/* ANIMALS ---------------------------------------------- */}
    <div className='mt-5'>
    <Row>
    <Col xs={1}>
    <p className='mb-2'>33.00</p>
    </Col>
    <Col xs={10}>
    <p className={ `${styles.BoldBlack} mb-2`}>ANIMALS</p>
    </Col>
    </Row>
    {/* Titles */}
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
    {/* Rentals */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>33.10</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Rentals</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{animals_rentals || 0} </p>
    </Col>
    </Row>
    {/* Purchases */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>33.20</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Purchases</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{animals_purchases || 0} </p>
    </Col>
    </Row>
    {/* Food/Stabling */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>33.30</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Food/Stabling</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{food_stabling || 0} </p>
    </Col>
    </Row>
    {/* Transport */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>33.40</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Transport</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{transport || 0} </p>
    </Col>
    </Row>
    {/* Veterinary Fees */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>33.50</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Veterinary Fees</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{vet || 0} </p>
    </Col>
    </Row>
    {/* Customs Brokerage */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>33.60</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Customs Brokerage</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{customs_broker || 0} </p>
    </Col>
    </Row>
    {/* Other */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>33.70</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{other_animals || 0} </p>
    </Col>
    </Row>
    {/* ANIMALS Total */}
    <Row className='mt-3' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL ANIMALS </p>
    </Col>
    <Col md={3} >
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline} mb-0`}>{animals_total || 0}</p>
    </Col>
    </Row>
    </div>
    {/* WARDROBE SUPPLIES ------------------------------------ */}
    <div className='mt-5'>
    <Row>
    <Col xs={1}>
    <p className='mb-2'>34.00</p>
    </Col>
    <Col xs={10}>
    <p className={ `${styles.BoldBlack} mb-2`}>WARDROBE SUPPLIES</p>
    </Col>
    </Row>
    {/* Titles */}
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
    {/* Rentals */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>34.10</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Rentals</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{wardrobe_rentals || 0} </p>
    </Col>
    </Row>
    {/* Purchases */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>34.20</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Purchases</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{wardrobe_purchases || 0} </p>
    </Col>
    </Row>
    {/* Manufacture */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>34.30</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Manufacture</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{ward_manufact || 0} </p>
    </Col>
    </Row>
    {/* Shipping/Brokerage */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>34.40</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Shipping/Brokerage</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{ward_ship_brok || 0} </p>
    </Col>
    </Row>
    {/* Repairs/Cleaning */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>34.50</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Repairs/Cleaning</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{ward_repairs_clean || 0} </p>
    </Col>
    </Row>
    {/* Other */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>34.60</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{other_ward || 0} </p>
    </Col>
    </Row>
    {/* WARDROBE SUPPLIES Total */}
    <Row className='mt-3' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL WARDROBE SUPPLIES </p>
    </Col>
    <Col md={3} >
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline} mb-0`}>{wardrobe_total || 0}</p>
    </Col>
    </Row>
    </div>
    {/* MAKEUP SUPPLIES -------------------------------------- */}
    <div className='mt-5'>
    <Row>
    <Col xs={1}>
    <p className='mb-2'>35.00</p>
    </Col>
    <Col xs={10}>
    <p className={ `${styles.BoldBlack} mb-2`}>MAKEUP SUPPLIES</p>
    </Col>
    </Row>
    {/* Titles */}
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
    {/* Makeup Rentals */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>35.10</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Makeup Rentals</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{makeup_rentals || 0} </p>
    </Col>
    </Row>
    {/* Makeup Purchases */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>35.20</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Makeup Purchases</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{makeup_purchases || 0} </p>
    </Col>
    </Row>
    {/* Hair Rentals */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>35.30</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Hair Rentals</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{hair_rentals || 0} </p>
    </Col>
    </Row>
    {/* Hair Purchases */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>35.40</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Hair Purchases</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{hair_purchases || 0} </p>
    </Col>
    </Row>
    {/* Wigs Rentals/Purchases */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>35.50</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Wigs Rentals/Purchases</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{wigs || 0} </p>
    </Col>
    </Row>
    {/* Special Effects */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>35.60</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Special Effects</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{makeup_fx || 0} </p>
    </Col>
    </Row>
    {/* Shipping/Brokerage */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>35.70</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Shipping/Brokerage</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{makeup_ship_brok || 0} </p>
    </Col>
    </Row>
    {/* Other */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>35.80</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{other_makeup || 0} </p>
    </Col>
    </Row>
    {/* MAKEUP SUPPLIES Total */}
    <Row className='mt-3' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL MAKEUP SUPPLIES </p>
    </Col>
    <Col md={3} >
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline} mb-0`}>{makeup_total || 0}</p>
    </Col>
    </Row>
    </div>
    {/* CAMERA EQUIPMENT ------------------------------------- */}
    <div className='mt-5'>
    <Row>
    <Col xs={1}>
    <p className='mb-2'>36.00</p>
    </Col>
    <Col xs={10}>
    <p className={ `${styles.BoldBlack} mb-2`}>CAMERA EQUIPMENT</p>
    </Col>
    </Row>
    {/* Titles */}
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
    {/* Basic Package Rentals */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>36.10</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Basic Package Rentals</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{basic_package_rent_cam || 0} </p>
    </Col>
    </Row>
    {/* Daily Rentals */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>36.20</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Daily Rentals</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{daily_rentals_cam || 0} </p>
    </Col>
    </Row>
    {/* Specialty Rentals */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>36.30</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Specialty Rentals</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{specialty_rent_cam || 0} </p>
    </Col>
    </Row>
    {/* Purchases */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>36.40</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Purchases</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{camera_purchases || 0} </p>
    </Col>
    </Row>
    {/* Steadicam */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>36.50</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Steadicam</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{steadicam || 0} </p>
    </Col>
    </Row>
    {/* Video/Teleprompter */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>36.60</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Video/Teleprompter</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{video_teleprompter || 0} </p>
    </Col>
    </Row>
    {/* Shipping/Brokerage */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>36.70</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Shipping/Brokerage</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{camera_ship_brok || 0} </p>
    </Col>
    </Row>
    {/* Loss & Damage */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>36.80</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Loss & Damage</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{loss_damage_cam || 0} </p>
    </Col>
    </Row>
    {/* Other */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>36.90</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{other_camera || 0} </p>
    </Col>
    </Row>
    {/* CAMERA EQUIPMENT Total */}
    <Row className='mt-3' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL CAMERA EQUIPMENT </p>
    </Col>
    <Col md={3} >
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline} mb-0`}>{camera_total || 0}</p>
    </Col>
    </Row>
    </div>
    {/* ELECTRICAL EQUIPMENT --------------------------------- */}
    <div className='mt-5'>
    <Row>
    <Col xs={1}>
    <p className='mb-2'>37.00</p>
    </Col>
    <Col xs={10}>
    <p className={ `${styles.BoldBlack} mb-2`}>ELECTRICAL EQUIPMENT</p>
    </Col>
    </Row>
    {/* Titles */}
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
    {/* Basic Package Rentals */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>37.10</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Basic Package Rentals</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{basic_package_rent_elec || 0} </p>
    </Col>
    </Row>
    {/* Daily Rentals */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>37.20</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Daily Rentals</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{daily_rentals_elec || 0} </p>
    </Col>
    </Row>
    {/* Specialty Rentals */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>37.30</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Specialty Rentals</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{specialty_rent_elec || 0} </p>
    </Col>
    </Row>
    {/* Purchases */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>37.40</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Purchases</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{electric_purchases || 0} </p>
    </Col>
    </Row>
    {/* Generators */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>37.50</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Generators</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{generators || 0} </p>
    </Col>
    </Row>
    {/* Loss & Damage */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>37.60</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Loss & Damage</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{loss_damage_elec || 0} </p>
    </Col>
    </Row>
    {/* Other */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>37.70</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{other_electric || 0} </p>
    </Col>
    </Row>
    {/* ELECTRICAL EQUIPMENT Total */}
    <Row className='mt-3' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL ELECTRICAL EQUIPMENT </p>
    </Col>
    <Col md={3} >
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline} mb-0`}>{electric_total || 0}</p>
    </Col>
    </Row>
    </div>
    </div>
    {/* END PRODUCTION B */}
    </div>
    </div>
  )
}

export default Budget