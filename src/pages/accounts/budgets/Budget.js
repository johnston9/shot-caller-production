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
import Information from './Information';

const Budget = (props) => {
  const [showInfo, setShowInfo] = useState(false);

  const {
    budget1, projectId,
  } = props;

  const budget = budget1.results[0] || "" ;

  const {// totals
    above_the_line_total, below_the_lineB_total, 
    below_the_lineB_costs_total, b_labour_and_costs_total, 
    post_productionC_total, belowB_andC_total,
    above_belowABC_total, otherD_total, above_belowABCandD_total,
    grand_total,
    // prepared
    dated, prelimfin, preparedby, approvedby, approvedbyco,
    // details
    title, series, prodco, format, location,
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
    editors_scenario_units_number, editors_scenario_units_name,
    editors_scenario_quantity, editors_scenario_rate, editors_scenario_total,
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
    rehersals_cast, rehersals_unit_cast,
    overtime_cast, overtime_unit_cast,
    days6th7th_cast, days6th7th_unit_cast,
    holidays_cast, holidays_unit_cast,
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
    holidays_pro_sta, 
    overtime_pro_sta, 
    days6th7th_pro_sta, 
    box_rent_pro_sta,
    other_pro_sta,
    holidays_unit_pro_sta, 
    overtime_unit_pro_sta, 
    days6th7th_unit_pro_sta, 
    other_unit_pro_sta,
    box_rent_unit_pro_sta,
    production_manager_qty_prep,
    production_manager_uno_prep,
    production_manager_una_prep,
    production_manager_rt_prep,
    production_manager_qty_wrap,
    production_manager_uno_wrap,
    production_manager_una_wrap,
    production_manager_rt_wrap,
    production_supervisor_qty_prep,
    production_supervisor_uno_prep,
    production_supervisor_una_prep,
    production_supervisor_rt_prep,
    production_supervisor_qty_wrap,
    production_supervisor_uno_wrap,
    production_supervisor_una_wrap,
    production_supervisor_rt_wrap,
    production_coordinator_qty_prep,
    production_coordinator_uno_prep,
    production_coordinator_una_prep,
    production_coordinator_rt_prep,
    production_coordinator_qty_wrap,
    production_coordinator_uno_wrap,
    production_coordinator_una_wrap,
    production_coordinator_rt_wrap,
    unit_manager_qty_prep,
    unit_manager_uno_prep,
    unit_manager_una_prep,
    unit_manager_rt_prep,
    unit_manager_qty_wrap,
    unit_manager_uno_wrap,
    unit_manager_una_wrap,
    unit_manager_rt_wrap,
    location_manager_qty_prep,
    location_manager_uno_prep,
    location_manager_una_prep,
    location_manager_rt_prep,
    location_manager_qty_wrap,
    location_manager_uno_wrap,
    location_manager_una_wrap,
    location_manager_rt_wrap,
    location_manager_ass_qty_prep,
    location_manager_ass_uno_prep,
    location_manager_ass_una_prep,
    location_manager_ass_rt_prep,
    location_manager_ass_qty_wrap,
    location_manager_ass_uno_wrap,
    location_manager_ass_una_wrap,
    location_manager_ass_rt_wrap,
    production_ass_qty_prep,
    production_ass_uno_prep,
    production_ass_una_prep,
    production_ass_rt_prep,
    production_ass_qty_wrap,
    production_ass_uno_wrap,
    production_ass_una_wrap,
    production_ass_rt_wrap,
    production_sec_qty_prep,
    production_sec_uno_prep,
    production_sec_una_prep,
    production_sec_rt_prep,
    production_sec_qty_wrap,
    production_sec_uno_wrap,
    production_sec_una_wrap,
    production_sec_rt_wrap,
    production_acc_qty_prep,
    production_acc_uno_prep,
    production_acc_una_prep,
    production_acc_rt_prep,
    production_acc_qty_wrap,
    production_acc_uno_wrap,
    production_acc_una_wrap,
    production_acc_rt_wrap,
    production_acc_ass_qty_prep,
    production_acc_ass_uno_prep,
    production_acc_ass_una_prep,
    production_acc_ass_rt_prep,
    production_acc_ass_qty_wrap,
    production_acc_ass_uno_wrap,
    production_acc_ass_una_wrap,
    production_acc_ass_rt_wrap,
    scriptsupervisor_con_qty_prep,
    scriptsupervisor_con_uno_prep,
    scriptsupervisor_con_una_prep,
    scriptsupervisor_con_rt_prep,
    scriptsupervisor_con_qty_wrap,
    scriptsupervisor_con_uno_wrap,
    scriptsupervisor_con_una_wrap,
    scriptsupervisor_con_rt_wrap,
    payroll_qty_prep,
    payroll_uno_prep,
    payroll_una_prep,
    payroll_rt_prep,
    payroll_qty_wrap,
    payroll_uno_wrap,
    payroll_una_wrap,
    payroll_rt_wrap,
    other_pro_qty_prep,
    other_pro_uno_prep,
    other_pro_una_prep,
    other_pro_rt_prep,
    other_pro_qty_wrap,
    other_pro_uno_wrap,
    other_pro_una_wrap,
    other_pro_rt_wrap,
    directors_ass_qty_prep,
    directors_ass_uno_prep,
    directors_ass_una_prep,
    directors_ass_rt_prep,
    directors_ass_qty_wrap,
    directors_ass_uno_wrap,
    directors_ass_una_wrap,
    directors_ass_rt_wrap,
    ass_director_1st_qty_prep,
    ass_director_1st_uno_prep,
    ass_director_1st_una_prep,
    ass_director_1st_rt_prep,
    ass_director_1st_qty_wrap,
    ass_director_1st_uno_wrap,
    ass_director_1st_una_wrap,
    ass_director_1st_rt_wrap,
    ass_director_2nd_qty_prep,
    ass_director_2nd_uno_prep,
    ass_director_2nd_una_prep,
    ass_director_2nd_rt_prep,
    ass_director_2nd_qty_wrap,
    ass_director_2nd_uno_wrap,
    ass_director_2nd_una_wrap,
    ass_director_2nd_rt_wrap,
    ass_director_3rd_qty_prep,
    ass_director_3rd_uno_prep,
    ass_director_3rd_una_prep,
    ass_director_3rd_rt_prep,
    ass_director_3rd_qty_wrap,
    ass_director_3rd_uno_wrap,
    ass_director_3rd_una_wrap,
    ass_director_3rd_rt_wrap,
    craft_services_qty_prep,
    craft_services_uno_prep,
    craft_services_una_prep,
    craft_services_rt_prep,
    craft_services_qty_wrap,
    craft_services_uno_wrap,
    craft_services_una_wrap,
    craft_services_rt_wrap,
    // new totals
    productionmanagerprep_total, productionmanagerwrap_total,
    productionmanagerall_total, productionsupervisorprep_total,
    productionsupervisorwrap_total, productionsupervisorall_total,
    productioncoordinatorprep_total, productioncoordinatorwrap_total,
    productioncoordinatorall_total, unitmanagerprep_total,
    unitmanagerwrap_total, unitmanagerall_total, locationmanagerprep_total,
    locationmanagerwrap_total, locationmanagerall_total, locmanassprep_total,
    locmanasswrap_total, locmanassall_total, proassprep_total,
    proasswrap_total, proassall_total, prosecprep_total, prosecwrap_total,
    prosecall_total, proaccprep_total, proaccwrap_total, proaccall_total,
    proaccassprep_total, proaccasswrap_total, proaccassall_total,
    scriptsupconprep_total, scriptsupconwrap_total, scriptsupconall_total,
    payrollprep_total, payrollwrap_total, payrollall_total,
    otherproprep_total, otherprowrap_total, otherproall_total,
    directorsassprep_total, directorsasswrap_total, directorsassall_total,
    assdirector1stprep_total, assdirector1stwrap_total, assdirector1stall_total,
    assdirector2ndprep_total, assdirector2ndwrap_total, assdirector2ndall_total,
    assdirector3rdprep_total, assdirector3rdwrap_total, assdirector3rdall_total,
    craftservicesprep_total, craftserviceswrap_total, craftservicesall_total,
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
    production_designer_quantity, production_designer_units_number,
    production_designer_units_name, production_designer_rate,
    pro_designer_qty_prep, pro_designer_uno_prep,
    pro_designer_una_prep, pro_designer_rt_prep,
    pro_designer_qty_wrap, pro_designer_uno_wrap,
    pro_designer_una_wrap, pro_designer_rt_wrap,
    supervart_qty, supervart_uno,
    supervart_una, supervart_rt,
    supervart_qty_prep, supervart_uno_prep,
    supervart_una_prep, supervart_rt_prep,
    art_director_quantity, art_director_units_number,
    art_director_units_name, art_director_rate,
    art_director_qty_prep, art_director_uno_prep,
    art_director_una_prep, art_director_rt_prep,
    art_director_qty_wrap, art_director_uno_wrap,
    art_director_una_wrap, art_director_rt_wrap,
    standby_art_qty, standby_art_uno,
    standby_art_una, standby_art_rt,
    standby_art_qty_prep, standby_art_uno_prep,
    standby_art_una_prep, standby_art_rt_prep,
    art_assistants_quantity, art_assistants_units_number,
    art_assistants_units_name, art_assistants_rate,
    art_ass_qty_prep, art_ass_uno_prep,
    art_ass_una_prep, art_ass_rt_prep,
    art_ass_qty_wrap, art_ass_uno_wrap,
    art_ass_una_wrap, art_ass_rt_wrap,
    set_design_qty, set_design_uno,
    set_design_una, set_design_rt,
    set_design_qty_prep, set_design_uno_prep,
    set_design_una_prep, set_design_rt_prep,
    junior_draught_qty, junior_draught_uno,
    junior_draught_una, junior_draught_rt,
    junior_draught_qty_prep, junior_draught_uno_prep,
    junior_draught_una_prep, junior_draught_rt_prep,
    graphic_artists_quantity, graphic_artists_units_number,
    graphic_artists_units_name, graphic_artists_rate,
    graphic_art_qty_prep, graphic_art_uno_prep,
    graphic_art_una_prep, graphic_art_rt_prep,
    art_dep_coor_qty, art_dep_coor_uno,
    art_dep_coor_una, art_dep_coor_rt,
    art_dep_coor_qty_prep, art_dep_coor_uno_prep,
    art_dep_coor_una_prep, art_dep_coor_rt_prep,
    art_dep_coor_qty_wrap, art_dep_coor_uno_wrap,
    art_dep_coor_una_wrap, art_dep_coor_rt_wrap,
    production_assistants_trainees_quantity, production_assistants_trainees_units_number,
    production_assistants_trainees_units_name, production_assistants_trainees_rate,
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
    other_design, fringes_taxes_design,
    productiondesigner_total, prodesprep_total, prodeswrap_total, prodesall_total,
    supartdir_total, supartdirprep_total, supartdirall_total,
    artdirector_total, artdirprep_total, artdirwrap_total, artdirall_total,
    standbyart_total, stbyartprep_total, stbyartall_total,
    artassistants_total, artassprep_total, artasswrap_total, artassall_total,
    setdes_total, setdesprep_total, setdesall_total,
    jundraught_total, jundraprep_total, jundraall_total,
    artcoor_total, artcoorprep_total, artcoorwrap_total, artcoorall_total,
    productionassistantstrainees_total, proasstrainprep_total,
    proasstrainwrap_total, proasstrainall_total,
    graphicartists_total, graphicartprep_total, graphicartall_total,
    designlabour_total,
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
    // Camera Equipment
    basic_package_rent_cam, daily_rentals_cam, other_camera,
    specialty_rent_cam, camera_purchases, steadicam, camera_total,
    video_teleprompter, camera_ship_brok, loss_damage_cam,
    // Electric Equipment
    basic_package_rent_elec, daily_rentals_elec,
    specialty_rent_elec, electric_purchases, electric_total,
    generators, loss_damage_elec, other_electric,
    // Grip Equipment
    basic_package_rent_grip, daily_rentals_grip, grip_total,
    specialty_rent_grip, crane_rentals, scaffolding_grip,
    grip_purchases, loss_damage_grip, other_grip,
    // Sound Equipment
    basic_package_rent_sound, daily_rentals_sound, sound_total,
    wireless_mics, sound_purchases, walkie_talkies, other_sound,
    // Second Unit
    crew_2U, equipment_2U, travliv_2U, transport_2U, secondU_total,
    mat_sup_2U, aerial_unit, marine_unit, fringes_taxes_2U, other_2U,
    // Stock and Lab
    film_stock, video_stock, digital_stock, transfer_stock,
    hard_drives, dalies, telecine, audio_stock, magnetic_transfer,
    stills, loss_dam_lab, other_lab, stockLab_total,
    // Post Production Staff/Facilities
    post_supervisor_qty, post_supervisor_uno, 
    post_supervisor_una, post_supervisor_rt, 
    post_coordinator_qty, post_coordinator_uno,
    post_coordinator_una, post_coordinator_rt,
    post_assistants_qty, post_assistants_uno,
    post_assistants_una, post_assistants_rt,
    post_accountants_qty, post_accountants_uno,
    post_accountants_una, post_accountants_rt,
    post_accountants_ass_qty, post_accountants_ass_uno,
    post_accountants_ass_una, post_accountants_ass_rt,
    post_office_rent, post_office_equ, post_office_sup, post_consultant, 
    post_it_network, post_phone_net, post_computers_soft, post_store,
    post_ship, post_craft, fringes_taxes_post, post_other,
    postSuper_total,postCoordin_total, postAssist_total, 
    postAccount_total, postAccountAss_total, postStaffFac_total,
    // Editing
    editor_qty, editor_uno, editor_una, editor_rt,
    editor_vfx_qty, editor_vfx_uno, editor_vfx_una, editor_vfx_rt,
    editor_ass_qty, editor_ass_uno, editor_ass_una, editor_ass_rt,
    colorist_grader_qty, colorist_grader_uno, colorist_grader_una, colorist_grader_rt,
    graphics_qty, graphics_uno, graphics_una, graphics_rt,
    edit_rooms, edit_equip, edit_equip_nonlin, online,
    vfx_ed_system, post_edit_pur, lossdam_edit, fringes_taxes_post_edit,
    other_post_edit, editor_total, editorVfx_total, editorAss_total,
    grader_total, graphics_total, editing_total,
    // Post Sound
    sound_designer_qty, sound_designer_uno, sound_designer_una, sound_designer_rt,
    editor_sound_qty, editor_sound_uno, editor_sound_una, editor_sound_rt,
    editor_music_qty, editor_music_uno, editor_music_una, editor_music_rt,
    ed_sound_ass_qty, ed_sound_ass_uno, ed_sound_ass_una, ed_sound_ass_rt,
    adr_super_qty, adr_super_uno, adr_super_una, adr_super_rt,
    foley_labour_qty, foley_labour_uno, foley_labour_una, foley_labour_rt,
    sound_edit_rooms, sound_edit_equ, music_edit_equ,
    post_sound_edit_pur, adr, foley, pre_mix, mix, printmaster, transfers_deliverables,
    lossdam_sound, fringes_taxes_post_sound, other_post_sound,
    desSound_total, editorSound_total, editorMusic_total, 
    soundEdAss_total, adrSup_total, folLab_total, postSound_total,
    // VFX
    vfx_producer, vfx_supervisor, vfx_coordinator, vfx_post_other_lab,
    vfx_storyboard, vfx_pre_vis_team, vfx_post_vis_team, cyberscanning,
    vfx_rentals, vfx_purchases, vfx_vendor_1, vfx_vendor_2, vfx_vendor_3,
    vfx_vendor_4, vfx_vendor_5, vfx_vendor_6, vfx_vendor_7, vfx_vendor_8,
    vfx_vendor_9, vfx_vendor_10, vfx_vendors_x, vfx_traliv, vfx_expenses,
    miniatures_build, miniatures_shoot, motion_capture, lossdam_vfx,
    box_ren_vfx, fringes_taxes_vfx, other_post_vfx, postVfx_total,
    // Post Lab/Video Copies
    stock, neg_cutting, color_cor, interpos_neg, prints,
    transfers, other_media_delivery, distribution_copies, 
    storage_post, postLab_total,
    // Post Titles/Opticals/Stock Footage
    titles, opticals, stock_footage, con_script_ccsl, postTitles_total,
    // Versioning,
    dubs, subtitles, closed_caption, versioning, trailers,
    ads, transfers_ver, prints_ver, dig_copies_ver, 
    other_copies_ver, postVersion_total,
    // Publicity
    tests_theater_ren, tests_other, unit_publicist,
    pub_press_ex, photography, epk, promotion, pr, firnges_pub,
    other_pub, previews, website, pub_total,
    // Insurance
    pro_package, gen_lia, eando, umbrella, 
    union_insurance, other_in, insur_total,
    // General Expenses
    legal, medical, licences, payroll, bank_charges, audit,
    genEx_total,
    // Indirect Costs
    corporate_overhead, interim_financing, fiscal_sponsor_fee,
    indirCo_total,
    // Contingency/Bond
    contingency, completion_bond,

    } = budget;

  console.log(props);
  console.log(budget);

  const history = useHistory();
  const [showCover, setShowCover] = useState(false);
  const [showTop, setShowTop] = useState(false);

  return (
    <div >
    <div className={`${styles.Overview}`}>
    <h2 className={`py-2 ${styles.BoldBlack} ${appStyles.playfair}
     text-center`} >{title} Budget Detail Page </h2>
    </div>
    {/* back/INFO */}
    <Row className="mt-1 ml-2 px-3" >
        <Col xs={12}>
        <Button
          className={`${btnStyles.Button} ${btnStyles.Blue} mb-2`}
          onClick={() => history.goBack()}
        >
          Back
        </Button>
        <Button
          className={`float-right py-0 mt-1 ${btnStyles.Blue} ${btnStyles.Button}`}
          onClick={() => setShowInfo(showInfo => !showInfo)} >Information
        </Button>
        </Col>
    </Row>
    {!showInfo ? (
      ""
          ) : (
            <Information  /> 
    ) }   
    {/* Add /Edit Budget */}
    {budget ? (
    <Row className='mt-0 mb-0'>
    <Col className="text-center">
    <Link to={`/budgets/edit/${projectId}`}>
    <div className={`px-1`}>
    <span className={ `${styles.Edit} py-1 px-5`}>Edit Budget</span>
    </div>
    </Link>
    </Col>
    </Row>
    ) : (
    <Row className='mt-0 mb-0'>
      <Col className="text-center" xs={{span: 6, offset: 3 }} 
       md={{span: 4, offset: 4 }} >
      <Link to={`/budgets/create/${projectId}`}>
      <div className={`px-1`}>
      <span className={ `${styles.Edit} py-1 px-5`}>Create Budget</span>
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
    <div className={`${styles.WhiteBack}`}>
    <div className='mt-3 pl-5'>
    <Row className={ `${styles.OverviewBlue} mx-1 my-3 py-3 text-center`}>
    <Col md={12}>
    <h5 className={ `${styles.BoldBlack}`}>BUDGET DETAIL PAGE</h5>
    </Col>
    </Row>
    </div>
    {/* DETAILS LENGTH */}
    <div className={ `my-0 py-0`}>
    <Row className='px-5'>
    {/* details */}
    <Col xs={12} md={6} className={ `${styles.RightBorder} my-0 py-0`}>
    {/* Title */}
    <Row>
    <Col xs={4}>
    <p className={`${styles.Underline6}`}>Title</p>
    </Col>
    <Col xs={2}>   
    </Col>
    <Col xs={6}>
    <p className={`${styles.Underline}`}>{title || ""}</p>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* series */}
    <Row>
    <Col xs={4}>
    <p className={`${styles.Underline6}`}>Series</p>
    </Col>
    <Col xs={2}>   
    </Col>
    <Col xs={6}>
    <p className={`${styles.Underline}`}>{series || ""}</p>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* prodco */}
    <Row>
    <Col xs={4}>
    <p className={`${styles.Underline6}`}>Prodco</p>
    </Col>
    <Col xs={2}>   
    </Col>
    <Col xs={6}>
    <p className={`${styles.Underline}`}>{prodco || ""}</p>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* format */}
    <Row>
    <Col xs={4}>
    <p className={`${styles.Underline6}`}>Format</p>
    </Col>
    <Col xs={2}>   
    </Col>
    <Col xs={6}>
    <p className={`${styles.Underline}`}>{format || ""}</p>
    </Col>
    </Row> 
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* location */}
    <Row>
    <Col xs={4}>
    <p className={`${styles.Underline6}`}>Location</p>
    </Col>
    <Col xs={2}>   
    </Col>
    <Col xs={6}>
    <p className={`${styles.Underline}`}>{location || ""}</p>
    </Col>
    </Row> 
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Dated */}
    <Row>
    <Col xs={4}>
    <p className={`${styles.Underline6}`}>Dated</p>
    </Col>
    <Col xs={2}>   
    </Col>
    <Col xs={6}>
    <p className={`${styles.Underline}`}>{dated || "-"}</p>
    </Col>
    </Row> 
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </Col>
    <Col xs={12} md={6} className='pl-5' >
    {/* development */}
    <Row className='mt-3 mt-md-0'>
    <Col xs={7}>
    <p className={`${styles.Underline6}`}>Development</p>
    </Col>
    <Col xs={2}>
    <p className={`${styles.Underline}`}>{research || 0}</p>  
    </Col>
    <Col xs={3}>
    <p className={`${styles.Underline}`}>Weeks</p>
    </Col>
    </Row> 
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col xs={7}>
    <p className={`${styles.Underline6}`}>Prep</p> 
    </Col>
    <Col xs={2}>
    <p className={`${styles.Underline}`}>{prep || 0}</p>   
    </Col>
    <Col xs={3}>
    <p className={`${styles.Underline}`}>Weeks</p>
    </Col>
    </Row> 
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* shoot */}
    <Row >
    <Col xs={7}>
    <p className={`${styles.Underline6}`}>Shoot</p> 
    </Col>
    <Col xs={2}>
    <p className={`${styles.Underline}`}>{shoot || 0}</p>
    </Col>
    <Col xs={3}>
    <p className={`${styles.Underline}`}>Weeks</p>
    </Col>
    </Row> 
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    <Row >
    <Col xs={7}>
    <p className={`${styles.Underline6}`}>Wrap</p> 
    </Col>
    <Col xs={2}>
    <p className={`${styles.Underline}`}>{wrap || 0}</p>  
    </Col>
    <Col xs={3}>
    <p className={`${styles.Underline}`}>Weeks</p>
    </Col>
    </Row> 
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    <Row >
    <Col xs={7}>
    <p className={`${styles.Underline6}`}>Post</p>
    </Col>
    <Col xs={2}>
    <p className={`${styles.Underline}`}>{post || 0}</p>  
    </Col>
    <Col xs={3}>
    <p className={`${styles.Underline}`}>Weeks</p>
    </Col>
    </Row> 
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    <Row >
    <Col xs={7}>
    <p className={`${styles.Underline6}`}>Length Total</p>
    </Col>
    <Col xs={2}>
    <p className={`${styles.Underline}`}>{length_total}</p>   
    </Col>
    <Col xs={3}>
    <p className={`${styles.Underline}`}>Weeks</p>
    </Col>
    </Row> 
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>     
    </Col>
    </Row>
    </div>
    {/* prepared by */}
    <div className={ `mt-4 px-5`}>
    <Row>
    <Col md={6} className={ `${styles.RightBorder} my-0 py-0`} >
    <Row>
    <Col md={6} >
    <p className={`${styles.Underline6}`}>
    BUDGET PREPARED BY
    </p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>
    {preparedby}
    </p>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    <Row>
    <Col md={6} >
    <p className={`${styles.Underline6}`}>
    PRELIMINARY OR FINAL
    </p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>
    {prelimfin}
    </p>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </Col>
    <Col md={6} className='pl-md-5'>
    <Row>
    <Col md={7} >
    <p className={`${styles.Underline6}`}>
    BUDGET APPROVED BY
    </p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>
    {approvedby}
    </p>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    <Row>
    <Col md={7} >
    <p className={`${styles.Underline6}`}>
    APPROVING COMPANY
    </p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>
    {approvedbyco}
    </p>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </Col>
    </Row>
    </div>
    {/* TOTALS */}
    <div className='mt-3 px-5'>
    <Row>
    <Col md={6}>
    <div className='pl-2'>
    {/* TOTAL - ABOVE THE LINE */}
    <Row className='mt-3' >
    <Col className={ `${styles.Overview} my-0 py-0`} md={10} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL - ABOVE THE LINE "A"</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
         d-flex align-items-center justify-content-center`}>
    <p className={`${styles.BoldBlack} mb-0`}>{above_the_line_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* TOTAL - BELOW THE LINE "B" PRODUCTION */}
    <Row className='mt-3' >
    <Col className={ `${styles.Overview} my-0 py-0`} md={10} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL - "B" PRODUCTION - LABOUR </p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
         d-flex align-items-center justify-content-center`}>
    <p className={`${styles.BoldBlack} mb-0`}>{below_the_lineB_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* TOTAL - BELOW THE LINE "B" PRODUCTION - COSTS */}
    <Row className='mt-3' >
    <Col className={ `${styles.Overview} my-0 py-0`} md={10} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL - "B" PRODUCTION - COSTS </p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
         d-flex align-items-center justify-content-center`}>
    <p className={`${styles.BoldBlack} mb-0`}>{below_the_lineB_costs_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* TOTAL - BELOW THE LINE "B" PRODUCTION LABOUR AND COSTS */}
    <Row className='mt-3' >
    <Col className={ `${styles.Overview} my-0 py-0`} md={10} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL - "B" LABOUR AND COSTS </p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
         d-flex align-items-center justify-content-center`}>
    <p className={`${styles.BoldBlack} mb-0`}>{b_labour_and_costs_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* TOTAL - POST PRODUCTION "C" */}
    <Row className='mt-3 mb-3' >
    <Col className={ `${styles.Overview} my-0 py-0`} md={10} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL - POST PRODUCTION "C" </p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
         d-flex align-items-center justify-content-center`}>
    <p className={`${styles.BoldBlack} mb-0`}>{post_productionC_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    </Col>
    <Col md={6} className='pl-5' >
    <div className='pl-2'>
    {/* TOTAL - BELOW "B" and "C" */}
    <Row className='mt-3 mb-3' >
    <Col className={ `${styles.Overview} my-0 py-0`} md={10} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL - BELOW "B" and "C" </p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
         d-flex align-items-center justify-content-center`}>
    <p className={`${styles.BoldB} mb-0`}>{belowB_andC_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* TOTAL - ABOVE/BELOW "A" "B" and "C" */}
    <Row className='mt-3 mb-3' >
    <Col className={ `${styles.Overview} my-0 py-0`} md={10} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL - ABOVE/BELOW "A" "B" and "C" </p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
         d-flex align-items-center justify-content-center`}>
    <p className={`${styles.BoldBlack} mb-0`}>{above_belowABC_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* TOTAL - OTHER "D" */}
    <Row className='mt-3 mb-3' >
    <Col className={ `${styles.Overview} my-0 py-0`} md={10} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL - OTHER "D" </p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
         d-flex align-items-center justify-content-center`}>
    <p className={`${styles.BoldBlack} mb-0`}>{otherD_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* TOTAL - "A", "B", "C" and "D" */}
    <Row className='mt-3 mb-3' >
    <Col className={ `${styles.Overview} my-0 py-0`} md={10} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL - "A", "B", "C" and "D" </p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
         d-flex align-items-center justify-content-center`}>
    <p className={`${styles.BoldBlack} mb-0`}>{above_belowABCandD_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* TOTAL - GRAND */}
    <Row className='mt-3 mb-3' >
    <Col className={ `${styles.Overview} my-0 py-0`} md={10} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL - GRAND </p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
         d-flex align-items-center justify-content-center`}>
    <p className={`${styles.BoldBlack} mb-0`}>{grand_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    </Col>
    </Row>
    </div>
    {/* ABOVE THE LINE -----------------------------------------*/}
    <div className='px-3'>
    <Row className={ `${styles.OverviewBlue} mx- mt-5 mb-3 py-1 text-center`}>
    <Col md={12}>
    <h5 className={ `${styles.BoldBlack}`}>ABOVE THE LINE</h5>
    </Col>
    </Row>
    {/* RIGHTS --------------------------------------- ------ */}
    <div>
    <Row >
    <Col md={1}>
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>01.00</p>
    </Col>
    <Col md={8} >   
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>RIGHTS</p>
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
    <Col md={1} className="text-center">
    <p className="mb-0">#</p>
    </Col>
    <Col className="text-center" md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Price</p>
    </Col>
    <Col md={2} >
    <p className="text-center">Total</p>
    </Col>
    </Row>
    {/* Story */}
    <Row >
    <Col md={1}>
    <p className={`${styles.Underline}`}>01.10</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Story Rights</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{story_rights || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* miscellaneous */}
    <Row >
    <Col md={1}>
    <p className={`${styles.Underline}`}>01.20</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Miscellaneous</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{miscellaneous || 0 } </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* total */}
    <Row className='mt-3 mb-1'>
    <Col md={1}>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>TOTAL RIGHTS</p>
    </Col>
    <Col md={3}></Col> 
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.BoldBlack} pb-0 mb-0`}>{rights_total || 0 } </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* DEVELOPMENT --------------------------------- ------- */}
    <div className='mt-4'>
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>02.00</p>
    </Col>
    <Col md={10}>
    <p className={ `${styles.BoldBlack}`}>PRE-PRODUCTION AND DEVELOPMENT</p>
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
    <Col md={1} className="text-center">
    <p className="mb-0">#</p>
    </Col>
    <Col className="text-center" md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Price</p>
    </Col>
    <Col md={2} >
    <p className="text-center">Total</p>
    </Col>
    </Row>
    {/* research */}
    <Row >
    <Col md={1}>
    <p className={`${styles.Underline}`}>02.10</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Research</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
       d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{research_development || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    <Row >
    <Col md={1}>
    <p className={`${styles.Underline}`}>02.20</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Preliminary Breakdown/Budget</p>
    </Col>
    <Col md={2} className={`text-center`}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{prelim_budget || 0 } </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    <Row >
    <Col md={1}>
    <p className={`${styles.Underline}`}>02.30</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Consultants</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{consultant_expenses || 0 } </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    <Row >
    <Col md={1}> 
    <p className={`${styles.Underline}`}>02.40</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Office Costs/Expenses</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{office_expenses || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    <Row >
    <Col md={1}>
    <p className={`${styles.Underline}`}>02.50</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Staff</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{staff || 0 } </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    <Row >
    <Col md={1}>
    <p className={`${styles.Underline}`}>02.60</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Travel Expenses</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{travel_expenses_development || 0 } </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    <Row >
    <Col md={1}>
    <p className={`${styles.Underline}`}>02.70</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Living Expenses</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{living_expenses_development || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    <Row >
    <Col md={1}>
    <p className={`${styles.Underline}`}>02.80</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_development || 0 } </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    <Row >
    <Col md={1}>
    <p className={`${styles.Underline}`}>02.90</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Fringes and Taxes</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{fringes_taxes_development || 0 } </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    <Row className='mt-3 mb-1'>
    <Col md={1}>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>TOTAL PRE-PRODUCTION AND DEVELOPMENT</p>
    </Col>
    <Col md={3}></Col>
    <Col md={2}>
    <div className={`${styles.Box4} 
      py-2 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{development_total || 0 } </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* SCENARIO --------------------------------------------- */}
    <div className='mt-4'>
    <Row>
    <Col xs={1}>
    <p className={`${styles.Underline}`}>03.00</p>
    </Col>
    <Col xs={10}>
    <p className={ `${styles.BoldBlack}`}>SCENARIO</p>
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
    <Col md={1} className="text-center">
    <p className="mb-0">#</p>
    </Col>
    <Col className="text-center" md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Price</p>
    </Col>
    <Col md={2} >
    <p className="text-center">Total</p>
    </Col>
    </Row>
    {/* Writers */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}>03.10</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Writers</p>
    </Col>
    <Col md={1}  >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{writers_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{writers_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{writers_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{writers_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{writers_total || 0}</p>
    </div>
    </Col>
    </Row>
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Consultants */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}>03.20</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Consultants</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{consultants_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{consultants_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{consultants_units_name || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{consultants_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{consultants_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Editors */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}>03.30</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Editors</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{editors_scenario_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{editors_scenario_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{editors_scenario_units_name || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{editors_scenario_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{editors_scenario_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Admin */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}>03.40</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Admin</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{admin_scenario_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{admin_scenario_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{admin_scenario_units_name || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{admin_scenario_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{admin_scenario_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Office Cost/Expenses */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}>03.50</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Office Cost/Expenses</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{office_expenses_scenario || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Travel Expenses*/}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}>03.60</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Travel Expenses</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{travel_expenses_scenario || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Living Expenses*/}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}>03.70</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Living Expenses</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{living_expenses_scenario || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Other*/}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}>03.80</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_scenario || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Fringes and Taxes*/}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}>03.90</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Fringes & Taxes</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{fringes_taxes_scenario || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* total */}
    <Row className='mt-3 mb-1' >
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
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{scenario_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* PRODUCERS AND DIRECTORS ------------------------------- */}
    <div className='mt-4'>
    <Row>
    <Col xs={1}>
    <p className={`${styles.Underline}`}>04.00</p>
    </Col>
    <Col xs={10}>
    <p className={ `${styles.BoldBlack} MB-2`}>PRODUCERS AND DIRECTORS</p>
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
    <Col md={1} className="text-center">
    <p className="mb-0">#</p>
    </Col>
    <Col className="text-center" md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Price</p>
    </Col>
    <Col md={2} >
    <p className="text-center">Total</p>
    </Col>
    </Row>
    {/* Executive Producers */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}>04.10</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Executive Producers</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{executive_producers_quantity || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{executive_producers_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{executive_producers_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Producers */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}>04.20</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Producers</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{producers_quantity || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{producers_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{producers_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Line Producers */}
    <Row className={`${styles.Underline2}`}>
    <Col md={1} >
    <p className={`${styles.Underline}`}>04.30</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Line Producers</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{line_producers_quantity || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{line_producers_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{line_producers_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Co-Producers */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}>04.40</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Co-Producers</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{co_producers_quantity || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{co_producers_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{co_producers_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Associate Producers */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}>04.50</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Associate Producers</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{associate_producers_quantity || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{associate_producers_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{associate_producers_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Directors */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}>04.60</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Directors</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{directors_quantity || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{directors_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{directors_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* 2nd Unit Directors */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}>04.70</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>2nd Unit Directors</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{unit2_directors_quantity || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{unit2_directors_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{unit2_directors_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Travel Expenses */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}>04.80</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Travel Expenses</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{travel_expenses_producers_dirs || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Living Expenses */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}>04.90</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Living Expenses</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{living_expenses_producers_dirs || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Other */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}>04.91</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_producers_dirs || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Fringes & Taxes */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}>04.92</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Fringes & Taxes</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{fringes_taxes_producers_dirs || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* total */}
    <Row className='mt-3 mb-1'>
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
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{producers_dirs_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* STARS / MUSIC ---------------------------------------- */}
    <div className='mt-4'>
    <Row>
    <Col xs={1}>
    <p className={ `${styles.BoldBlack}`}>05.00</p>
    </Col>
    <Col xs={10}>
    <p className={ `${styles.BoldBlack}`}>STARS / MUSIC</p>
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
    <Col md={1} className="text-center">
    <p className="mb-0">#</p>
    </Col>
    <Col className="text-center" md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Price</p>
    </Col>
    <Col md={2} >
    <p className="text-center">Total</p>
    </Col>
    </Row>
    <Row>
    <Col xs={1}>
    <p className='mb-2'></p>
    </Col>
    <Col xs={6}>
    <p className={ `${styles.BoldBlackU} mb-2`}>STARS</p>
    </Col>
    </Row>
    {/* Stars */}
    <Row >
    <Col md={1}>
    <p className={`${styles.Underline}`}>05.10</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.BoldBlack}`}>Stars</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{stars || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Stars Rights Payments */}
    <Row >
    <Col md={1}>
    <p className={`${styles.Underline}`}>05.20</p>  
    </Col>
    <Col md={9}>
    <p className={`${styles.BoldBlack}`}>Rights Payments</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{stars_rights_payments || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Stars - Travel Expenses */}
    <Row >
    <Col md={1}>
    <p className={`${styles.Underline}`}>05.30</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.BoldBlack}`}>Travel Expenses</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{travel_expenses_stars || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Stars - Living Expenses */}
    <Row >
    <Col md={1}>
    <p className={`${styles.Underline}`}>05.40</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.BoldBlack}`}>Living Expenses</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{living_expenses_stars || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Stars - Other */}
    <Row >
    <Col md={1}>
    <p className={`${styles.Underline}`}>05.50</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.BoldBlack}`}>Other</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_stars || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Stars - Fringes Taxes */}
    <Row >
    <Col md={1}>
    <p className={`${styles.Underline}`}>05.60</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.BoldBlack}`}>Fringes/Taxes</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{fringes_taxes_stars || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    <Row className='mt-3' >
    <Col xs={1}>
    <p className='mb-2'></p>
    </Col>
    <Col xs={6}>
    <p className={ `${styles.BoldBlackU} mb-2`}>MUSIC</p>
    </Col>
    </Row>
    {/* Music */}
    <Row >
    <Col md={1}>
    <p className={`${styles.Underline}`}>05.70</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.BoldBlack}`}>
    Music: All-in package includes Composer, Musicians, 
    Score, and Recording Session</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{music || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Music Supervisor */}
    <Row >
    <Col md={1}>
    <p className={`${styles.Underline}`}>05.80</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.BoldBlack}`}>Music Supervisor</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{music_supervisor || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Music - Travel Expenses */}
    <Row >
    <Col md={1}>
    <p className={`${styles.Underline}`}>05.90</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.BoldBlack}`}>Travel Expenses</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{travel_expenses_music || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Music - Living Expenses */}
    <Row >
    <Col md={1}>
    <p className={`${styles.Underline}`}>05.91</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.BoldBlack}`}>Living Expenses</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{living_expenses_music || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Add'l Music Rights - Songs, etc. */}
    <Row >
    <Col md={1}>
    <p className={`${styles.Underline}`}>05.92</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.BoldBlack}`}>Add'l Music Rights - Songs, etc.</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{music_rights_addl_songs || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Music - Other */}
    <Row >
    <Col md={1}>
    <p className={`${styles.Underline}`}>05.93</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.BoldBlack}`}>Music</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_music || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Music - Fringes and Taxes */}
    <Row >
    <Col md={1}>
    <p className={`${styles.Underline}`}>05.94</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.BoldBlack}`}>Fringes and Taxes</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{fringes_taxes_music || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Stars / Music Total */}
    <Row className='mt-3 mb-1' >
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
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{stars_music_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* ABOVE THE LINE - TOTAL */}
    <div className="my-4 pl-3">
    <Row >
    <Col className={ `${styles.Overview} my-0 py-0`} md={10} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>TOTAL ABOVE THE LINE</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.BoldBlack}`}>{above_the_line_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    </div>
    {/* BELOW THE LINE "B" PRODUCTION - LABOUR -----------------*/}
    <div className='px-3'>
    <Row className={ `${styles.OverviewBlue} mx-1 mt-5 py-1 text-center`}>
    <Col md={12}>
    <h5 className={ `${styles.BoldBlack}`}>BELOW THE LINE - "B" PRODUCTION - LABOUR </h5>
    </Col>
    </Row>
    {/* CAST ------------------------------------------------ */}
    <div className='mt-3'>
    <Row>
    <Col xs={1}>
    <p className={`${styles.Underline}`}>06.00</p>
    </Col>
    <Col xs={10}>
    <p className={ `${styles.BoldBlack}`}>CAST</p>
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
    <Col md={1} className="text-center">
    <p className="mb-0">#</p>
    </Col>
    <Col className="text-center" md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Price</p>
    </Col>
    <Col md={2} >
    <p className="text-center">Total</p>
    </Col>
    </Row>
    {/* Principals */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}>06.10</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Principals</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{principals_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{principals_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{principals_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{principals_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{principals_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Actors */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}>06.20</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Actors</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{actors_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{actors_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{actors_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{actors_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{actors_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Stunt Coordinators */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}>06.30</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Stunt Coordinators</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{stuntcoordinators_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{stuntcoordinators_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{stuntcoordinators_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{stuntcoordinators_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{stuntcoordinators_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Stunt Performers */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}>06.40</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Stunt Performers</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{stuntperformers_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{stuntperformers_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{stuntperformers_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{stuntperformers_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{stuntperformers_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Other Performers */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}>06.50</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Other Performers</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{otherperformers_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{otherperformers_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{otherperformers_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{otherperformers_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{otherperformers_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Extras */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}>06.60</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Extras</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{extras_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{extras_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{extras_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{extras_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{extras_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Casting Director */}
    <Row >
    <Col md={1}>
    <p className={`${styles.Underline}`}>06.70</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Casting Director</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{casting_director || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Extras Casting */}
    <Row >
    <Col md={1}>
    <p className={`${styles.Underline}`}>06.80</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Extras Casting</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{extras_casting || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Rehersals */}
    <Row >
    <Col md={1}>
    <p className={`${styles.Underline}`}>06.90</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Rehersals</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{rehersals_unit_cast} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{rehersals_cast || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* 6th/7th Days */}
    <Row >
    <Col md={1}>
    <p className={`${styles.Underline}`}>06.91</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>6th/7th Days</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{days6th7th_unit_cast} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{days6th7th_cast || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Overtime */}
    <Row >
    <Col md={1}>
    <p className={`${styles.Underline}`}>06.92</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Overtime</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{overtime_unit_cast} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{overtime_cast || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Holidays */}
    <Row >
    <Col md={1}>
    <p className={`${styles.Underline}`}>06.93</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Holidays</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{holidays_unit_cast} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{holidays_cast || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Rights Payments - Cast */}
    <Row >
    <Col md={1}>
    <p className={`${styles.Underline}`}>06.94</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Rights Payments - Cast</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{rights_payments_cast || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Other - Cast */}
    <Row >
    <Col md={1}>
    <p className={`${styles.Underline}`}>06.95</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_cast || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Fringes Taxes - Cast */}
    <Row >
    <Col md={1}>
    <p className={`${styles.Underline}`}>06.96</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Fringes & Taxes</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{fringes_taxes_cast || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Cast Total */}
    <Row className='mt-3 mb-1' >
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
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{cast_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* PRODUCTION STAFF ------------------------------------ */}
    <div className='mt-4'>
    <Row>
    <Col xs={1}>
    <p className={`${styles.Underline}`}>07.00</p>
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
    <Col md={1} className="text-center">
    <p className="mb-0">#</p>
    </Col>
    <Col className="text-center" md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Price</p>
    </Col>
    <Col md={2} >
    <p className="text-center">Total</p>
    </Col>
    </Row>
    {/* Production Manager */}
    <div>
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>07.10</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Production Manager</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} >
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_manager_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_manager_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_manager_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_manager_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{productionmanagerprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_manager_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_manager_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_manager_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_manager_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{productionmanager_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_manager_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_manager_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_manager_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_manager_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{productionmanagerwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={9} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{productionmanagerall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Production Supervisor */}
    <div className='mt-1' >
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>07.20</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Production Supervisor</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_supervisor_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_supervisor_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_supervisor_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_supervisor_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{productionsupervisorprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_supervisor_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_supervisor_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_supervisor_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_supervisor_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{productionsupervisor_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_supervisor_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_supervisor_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_supervisor_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_supervisor_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{productionsupervisorwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={9} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{productionsupervisorall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Production Coordinator */}
    <div className='mt-1'>
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>07.30</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Production Coordinator</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_coordinator_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_coordinator_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_coordinator_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_coordinator_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{productioncoordinatorprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_coordinator_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_coordinator_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_coordinator_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_coordinator_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{productioncoordinator_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_coordinator_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_coordinator_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_coordinator_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_coordinator_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{productioncoordinatorwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={9} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{productioncoordinatorall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Unit Manager */}
    <div className='mt-1'>
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>07.40</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Unit Manager</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{unit_manager_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{unit_manager_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{unit_manager_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{unit_manager_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{unitmanagerprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{unit_manager_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{unit_manager_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{unit_manager_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{unit_manager_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{unitmanager_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{unit_manager_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{unit_manager_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{unit_manager_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{unit_manager_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{unitmanagerwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={9} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{unitmanagerall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Location Manager */}
    <div className='mt-1'>
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>07.50</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Location Manager</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{location_manager_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{location_manager_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{location_manager_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{location_manager_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{locationmanagerprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{location_manager_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{location_manager_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{location_manager_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{location_manager_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{locationmanager_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{location_manager_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{location_manager_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{location_manager_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{location_manager_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{locationmanagerwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={9} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{locationmanagerall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Location Manager Assistant */}
    <div className='mt-1'>
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>07.60</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Location Manager Assistant</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{location_manager_ass_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{location_manager_ass_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{location_manager_ass_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{location_manager_ass_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{locmanassprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{location_manager_assistant_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{location_manager_assistant_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{location_manager_assistant_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{location_manager_assistant_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{locationmanagerassistant_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{location_manager_ass_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{location_manager_ass_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{location_manager_ass_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{location_manager_ass_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{locmanasswrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={9} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{locmanassall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Production Assistants */}
    <div className='mt-1'>
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>07.70</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Production Assistants</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_ass_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_ass_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_ass_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_ass_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{proassprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_assistants_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_assistants_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_assistants_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_assistants_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{productionassistants_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_ass_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_ass_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_ass_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_ass_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{proasswrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={9} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{proassall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Production Secretary */}
    <div className='mt-1'>
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>07.80</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Production Secretary</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_sec_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_sec_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_sec_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_sec_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{prosecprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_secretary_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_secretary_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_secretary_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_secretary_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{productionsecretary_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_sec_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_sec_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_sec_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_sec_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{prosecwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={9} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{prosecall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Production Accountant */}
    <div className='mt-1'>
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>07.90</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Production Accountant</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_acc_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_acc_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_acc_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_acc_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{proaccprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_accountant_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_accountant_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_accountant_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_accountant_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{productionaccountant_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_acc_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_acc_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_acc_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_acc_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{proaccwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={9} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{proaccall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Production Accountant Assistant */}
    <div className='mt-1'>
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>07.91</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Production Accountant Assistant</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_acc_ass_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_acc_ass_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_acc_ass_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_acc_ass_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{proaccassprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_accountant_assistant_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_accountant_assistant_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_accountant_assistant_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_accountant_assistant_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{productionaccountantassistant_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_acc_ass_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_acc_ass_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_acc_ass_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_acc_ass_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{proaccasswrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={9} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{proaccassall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Script Supervisor / Continuity */}
    <div className='mt-1'>
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>07.92</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Script Supervisor/Continuity</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{scriptsupervisor_con_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{scriptsupervisor_con_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{scriptsupervisor_con_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{scriptsupervisor_con_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{scriptsupconprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{scriptsupervisor_continuity_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{scriptsupervisor_continuity_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{scriptsupervisor_continuity_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{scriptsupervisor_continuity_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{scriptsupervisorcontinuity_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{scriptsupervisor_con_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{scriptsupervisor_con_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{scriptsupervisor_con_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{scriptsupervisor_con_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{scriptsupconwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={9} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{scriptsupconall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Payroll */}
    <div className='mt-1'>
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>07.93</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Payroll</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{payroll_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{payroll_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{payroll_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{payroll_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{payrollprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{payroll_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{payroll_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{payroll_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{payroll_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{payroll_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{payroll_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{payroll_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{payroll_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{payroll_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{payrollwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={9} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{payrollall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Other Production */}
    <div className='mt-1'>
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>07.94</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Other - Production</p>
    </Col>
    </Row>
    {/* Prep  */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_pro_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_pro_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_pro_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_pro_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{otherproprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_production_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_production_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_production_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_production_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{otherproduction_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap  */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_pro_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_pro_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_pro_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_pro_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{otherprowrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={9} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{otherproall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Directors Assistant */}
    <div className='mt-1'>
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>07.95</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Directors Assistant</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{directors_ass_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{directors_ass_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{directors_ass_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{directors_ass_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{directorsassprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{directors_assistant_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{directors_assistant_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{directors_assistant_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{directors_assistant_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{directorsassistant_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{directors_ass_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{directors_ass_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{directors_ass_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{directors_ass_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{directorsasswrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={9} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{directorsassall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* 1st Assistant Director */}
    <div className='mt-1'>
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>07.96</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>1st Assistant Director</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ass_director_1st_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ass_director_1st_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ass_director_1st_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ass_director_1st_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{assdirector1stprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{assistant_director_1st_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{assistant_director_1st_units_number || 0}</p>
    </div>
    </Col>     
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{assistant_director_1st_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{assistant_director_1st_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{assistantdirector1st_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ass_director_1st_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ass_director_1st_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ass_director_1st_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ass_director_1st_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{assdirector1stwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={9} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{assdirector1stall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* 2nd Assistant Director */}
    <div className='mt-1'>
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>07.97</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>2nd Assistant Director</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ass_director_2nd_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ass_director_2nd_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ass_director_2nd_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ass_director_2nd_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{assdirector2ndprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{assistant_director_2nd_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{assistant_director_2nd_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{assistant_director_2nd_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{assistant_director_2nd_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{assistantdirector2nd_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ass_director_2nd_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ass_director_2nd_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    </div>
    <p className={`${styles.Underline}`}>{ass_director_2nd_una_wrap}</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ass_director_2nd_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{assdirector2ndwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={9} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{assdirector2ndall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* 3rd Assistant Director */}
    <div className='mt-1'>
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>07.98</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>3rd Assistant Director</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ass_director_3rd_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ass_director_3rd_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ass_director_3rd_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ass_director_3rd_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{assdirector3rdprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{assistant_director_3rd_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{assistant_director_3rd_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{assistant_director_3rd_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{assistant_director_3rd_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{assistantdirector3rd_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ass_director_3rd_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ass_director_3rd_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ass_director_3rd_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ass_director_3rd_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{assdirector3rdwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={9} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{assdirector3rdall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Craft Services */}
    <div className='mt-1'>
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>07.9</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Craft Services</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{craft_services_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{craft_services_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{craft_services_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{craft_services_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{craftservicesprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{craft_services_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{craft_services_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{craft_services_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{craft_services_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{craftservices_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{craft_services_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{craft_services_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{craft_services_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{craft_services_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{craftserviceswrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={9} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{craftservicesall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* 6th/7th Days */}
    <Row >
    <Col md={1}>
    <p className={`${styles.Underline}`}>07.991</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.BoldBlack}`}>6th/7th Days</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{days6th7th_unit_pro_sta} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{days6th7th_pro_sta || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Overtime */}
    <Row >
    <Col md={1}>
    <p className={`${styles.Underline}`}>07.992</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Overtime</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{overtime_unit_pro_sta} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{overtime_pro_sta || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Holidays */}
    <Row >
    <Col md={1}>
    <p className={`${styles.Underline}`}>07.993</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Holidays</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{holidays_unit_pro_sta} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{holidays_pro_sta || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Other */}
    <Row >
    <Col md={1}>
    <p className={`${styles.Underline}`}>07.994</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_unit_pro_sta} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_pro_sta || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Box Rentals */}
    <Row >
    <Col md={1}>
    <p className={`${styles.Underline}`}>07.995</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Box Rentals</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{box_rent_unit_pro_sta} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{box_rent_pro_sta || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Fringes Taxes */}
    <Row >
    <Col md={1}>
    <p className={`${styles.Underline}`}>07.996</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Fringes and Taxes, Government/Unions</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{fringes_taxes_production || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Production Staff Total */}
    <Row className='mt-3 mb-1' >
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
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{productionstaff_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* DESIGN LABOUR --------------------------------------- */}
    <div className='mt-4'>
    <Row>
    <Col xs={1}>
    <p className={ `${styles.BoldBlack}`}>08.00</p>
    </Col>
    <Col xs={10}>
    <p className={ `${styles.BoldBlack} mb-2`}>DESIGN LABOUR</p>
    </Col>
    </Row>
    {/* Titles */}
    <Row className={ `${styles.Overview} mx-0 mb-2 py-1`} >
    <Col md={1} className="mx-0 px-0" >
    <p className="mb-0">ACCT</p>
    </Col>
    <Col md={5} className="mx-0 px-0"  >
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
    <div >
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}>08.10</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Production Designer</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} >
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{pro_designer_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{pro_designer_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{pro_designer_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{pro_designer_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{prodesprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_designer_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_designer_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_designer_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_designer_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{productiondesigner_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{pro_designer_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{pro_designer_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{pro_designer_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{pro_designer_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{prodeswrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={9} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{prodesall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Supervising Art Director */}
    <div >
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}>08.20</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Supervising Art Director</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} >
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{supervart_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{supervart_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{supervart_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{supervart_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{supartdirprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{supervart_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{supervart_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{supervart_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{supervart_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{supartdir_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={9} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{supartdirall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Art Director */}
    <div >
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}>08.30</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Art Director</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} >
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{art_director_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{art_director_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{art_director_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{art_director_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{artdirprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{art_director_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{art_director_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{art_director_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{art_director_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{artdirector_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{art_director_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{art_director_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{art_director_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{art_director_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{artdirwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={9} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{artdirall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Standby Art Director */}
    <div >
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}>08.40</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Standby Art Director</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} >
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{standby_art_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{standby_art_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{standby_art_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{standby_art_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{stbyartprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{standby_art_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{standby_art_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{standby_art_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{standby_art_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{standbyart_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={9} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{stbyartall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Art Assistants */}
    <div >
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}>08.50</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Art Assistants</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} >
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{art_ass_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{art_ass_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{art_ass_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{art_ass_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{artassprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{art_assistants_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{art_assistants_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{art_assistants_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{art_assistants_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{artassistants_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{art_ass_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{art_ass_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{art_ass_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{art_ass_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{artasswrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={9} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{artassall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Set Designer/Draughtsperson */}
    <div >
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}>08.60</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Set Designer/Draughtsperson</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} >
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{set_design_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{set_design_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{set_design_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{set_design_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{setdesprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{set_design_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{set_design_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{set_design_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{set_design_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{setdes_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={9} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{setdesall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Junior Draughtsperson */}
    <div >
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}>08.70</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Junior Draughtsperson</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} >
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{junior_draught_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{junior_draught_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{junior_draught_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{junior_draught_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{jundraprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{junior_draught_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{junior_draught_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{junior_draught_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{junior_draught_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{jundraught_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={9} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{jundraall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Graphic Artists */}
    <div >
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}>08.80</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Graphic Artists</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} >
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{graphic_art_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{graphic_art_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{graphic_art_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{graphic_art_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{graphicartprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{graphic_artists_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{graphic_artists_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{graphic_artists_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{graphic_artists_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{graphicartists_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={9} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{graphicartall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Art Department Coordinator */}
    <div >
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}>08.90</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Art Department Coordinator</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} >
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{art_dep_coor_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{art_dep_coor_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{art_dep_coor_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{art_dep_coor_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{artcoorprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{art_dep_coor_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{art_dep_coor_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{art_dep_coor_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{art_dep_coor_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{artcoor_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{art_dep_coor_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{art_dep_coor_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{art_dep_coor_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{art_dep_coor_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{artcoorwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={9} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{artcoorall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Production Assistants/Trainees */}
    <div >
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}>08.91</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Production Assistants/Trainees</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} >
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{pro_ass_trainees_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{pro_ass_trainees_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{pro_ass_trainees_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{pro_ass_trainees_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{proasstrainprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_assistants_trainees_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_assistants_trainees_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_assistants_trainees_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_assistants_trainees_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{productionassistantstrainees_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{pro_ass_trainees_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{pro_ass_trainees_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{pro_ass_trainees_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{pro_ass_trainees_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{proasstrainwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={9} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{proasstrainall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Concept Artist/Illustrator */}
    <Row >
    <Col md={1}>
    <p className={`${styles.Underline}`}>08.92</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.BoldBlack}`}>Concept Artist/Illustrator</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{sketch_artists_unit} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{sketch_artists || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Story Board Artist */}
    <Row >
    <Col md={1}>
    <p className={`${styles.Underline}`}>08.93</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.BoldBlack}`}>Story Board Artist</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{storyboard_artists_unit} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{storyboard_artists || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* 6th / 7th Days */}
    <Row >
    <Col md={1}>
    <p className={`${styles.Underline}`}>08.94</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.BoldBlack}`}>6th/7th Days</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{days6th7th_unit_design} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{days6th7th_design || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Overtime */}
    <Row >
    <Col md={1}>
    <p className={`${styles.Underline}`}>08.95</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.BoldBlack}`}>Overtime</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{overtime_unit_design} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{overtime_design || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Holidays */}
    <Row >
    <Col md={1}>
    <p className={`${styles.Underline}`}>08.96</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.BoldBlack}`}>Holidays</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{holidays_unit_design} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{holidays_design || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Other - Design */}
    <Row >
    <Col md={1}>
    <p className={`${styles.Underline}`}>08.97</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.BoldBlack}`}>Other</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_design || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Box Rentals */}
    <Row >
    <Col md={1}>
    <p className={`${styles.Underline}`}>08.98</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.BoldBlack}`}>Box Rentals</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{box_rent_unit_design} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{box_rent_design || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Fringes Taxes */}
    <Row >
    <Col md={1}>
    <p className={`${styles.Underline}`}>08.98</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.BoldBlack}`}>Fringes Taxes</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{fringes_taxes_design || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Design Total */}
    <Row className='mt-3 mb-1' >
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
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{designlabour_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    <p>from edit</p>
    {/* CONSTRUCTION LABOUR ---------------------------------- */}
    <div className='mt-4'>
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
    <Row >
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
    {/* TOTAL - BELOW THE LINE "B" PRODUCTION */}
    <div className="mt-5 pl-3">
    <Row >
    <Col className={ `${styles.Overview} my-0 py-0`} md={10} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL - "B" PRODUCTION - LABOUR </p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
  py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.BoldBlack} `}>{below_the_lineB_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    </div>
    {/* BELOW THE LINE "B" PRODUCTION - COSTS ----------------- */}
    <div className='px-3'>
    <Row className={ `${styles.OverviewBlue} mx-1 my-5 py-1 text-center`}>
    <Col md={12}>
    <h5 className={ `${styles.BoldBlack}`}>BELOW THE LINE - "B" PRODUCTION - COSTS </h5>
    </Col>
    </Row>
    {/* PRODUCTION OFFICE ------------------------------------ */}
    <div className='mt-4'>
    <Row>
    <Col xs={1}>
    <p className={`${styles.Underline}`}>22.00</p>
    </Col>
    <Col xs={10}>
    <p className={ `${styles.BoldBlack}`}>PRODUCTION OFFICE</p>
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
    <Col md={1} className="text-center">
    <p className="mb-0">#</p>
    </Col>
    <Col className="text-center" md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Price</p>
    </Col>
    <Col md={2} >
    <p className="text-center">Total</p>
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
    <div className={`${styles.Box3} 
     d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{office_rentals || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
     d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{office_equipment || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
     d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{office_supplies || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
     d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{phones_net || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
     d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{courier_postage || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
     d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{office_other || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Production Office Total */}
    <Row className='mt-3 mb-1' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>TOTAL PRODUCTION OFFICE </p>
    </Col>
    <Col md={3} >
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
     py-2 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{proOff_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* STUDIO ----------------------------------------------- */}
    <div className='mt-4'>
    <Row>
    <Col xs={1}>
    <p className={`${styles.Underline}`}>23.00</p>
    </Col>
    <Col xs={10}>
    <p className={ `${styles.BoldBlack}`}>STUDIO/BACKLOT EXPENSES</p>
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
    <Col md={1} className="text-center">
    <p className="mb-0">#</p>
    </Col>
    <Col className="text-center" md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Price</p>
    </Col>
    <Col md={2} >
    <p className="text-center">Total</p>
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
    <div className={`${styles.Box3} 
     py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{studio_rentals || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
     py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{power || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
     py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{carpentry_rentals || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
     py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{studio_fx_equipment || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
     py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{studio_security || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
     py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{studio_other || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Studio Total */}
    <Row className='mt-3 mb-1' >
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
    <div className={`${styles.Box4} 
     py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{studio_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* SITE ------------------------------------------------- */}
    <div className='mt-4'>
    <Row>
    <Col xs={1}>
    <p className={`${styles.Underline}`}>24.00</p>
    </Col>
    <Col xs={10}>
    <p className={ `${styles.BoldBlack}`}>SITE EXPENSES</p>
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
    <Col md={1} className="text-center">
    <p className="mb-0">#</p>
    </Col>
    <Col className="text-center" md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Price</p>
    </Col>
    <Col md={2} >
    <p className="text-center">Total</p>
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
    <div className={`${styles.Box3} 
     d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{surveying_scouting || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
     d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{site_rentals || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
     d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{site_power || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
     d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{site_access || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
     d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{site_insurance || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
     d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{repairs_construction || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
     d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{site_security || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
     d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{police_control || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{site_other || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Site Total */}
    <Row className='mt-3 mb-1' >
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
    <div className={`${styles.Box4} 
     d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{site_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>   
    {/* UNIT ------------------------------------------------- */}
    <div className='mt-4'>
    <Row>
    <Col xs={1}>
    <p className={`${styles.Underline}`}>25.00</p>
    </Col>
    <Col xs={10}>
    <p className={ `${styles.BoldBlack}`}>UNIT EXPENSES</p>
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
    <Col md={1} className="text-center">
    <p className="mb-0">#</p>
    </Col>
    <Col className="text-center" md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Price</p>
    </Col>
    <Col md={2} >
    <p className="text-center">Total</p>
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
    <div className={`${styles.Box3} 
         d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{catering || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
         d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{craft_expenses || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
       d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{meal_penalty || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
       d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{green_room || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
       d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{first_aid || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
       d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{outfitting || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
       d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{medical_insurance || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
       d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{unit_other || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Unit Total */}
    <Row className='mt-3 mb-1' >
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
    <div className={`${styles.Box3} 
       d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{unit_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* TRAVEL & lIVING -------------------------------------- */}
    <div className='mt-4'>
    <Row>
    <Col xs={1}>
    <p className={`${styles.Underline}`}>26.00</p>
    </Col>
    <Col xs={10}>
    <p className={ `${styles.BoldBlack}`}>TRAVEL & LIVING</p>
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
    <Col md={1} className="text-center">
    <p className="mb-0">#</p>
    </Col>
    <Col className="text-center" md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Price</p>
    </Col>
    <Col md={2} >
    <p className="text-center">Total</p>
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
    <div className={`${styles.Box3} 
       d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{fares || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Accommodation/Hotels */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>26.20</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Accommodation/Hotels</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
       d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{accomatation_hotels || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
       d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{per_diems || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Taxis/Limousines */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>26.40</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Taxis/Limousines/Car Allowances</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
       d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{taxis_limos || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
       d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{shipping || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
       d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{customs_brokerage || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
       d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_trav_liv || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* TRAVEL & LIVING Total */}
    <Row className='mt-3 mb-1' >
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
    <div className={`${styles.Box4} 
       d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{traliv_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* TRANSPORTATION --------------------------------------- */}
    <div className='mt-4'>
    <Row>
    <Col xs={1}>
    <p className={`${styles.Underline}`}>27.00</p>
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
    <Col md={1} className="text-center">
    <p className="mb-0">#</p>
    </Col>
    <Col className="text-center" md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Price</p>
    </Col>
    <Col md={2} >
    <p className="text-center">Total</p>
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
    <div className={`${styles.Box3} 
       d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_cars || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
       d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{trucks_vans || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
       d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{buses || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
       d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{motorhomes || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
       d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{talent_cars || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
       d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{support_vehicles || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
       d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{boats_planes || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
       d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{fuel || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
       d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{repairs || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
       d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{taxis || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
       d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{parking || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
       d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{licenses_permits || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
       d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{brokerage_insurance || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
       d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_transport || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* TRANSPORTATION Total */}
    <Row className='mt-3 mb-1' >
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
    <div className={`${styles.Box4} 
       d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{transport_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* CONSTRUCTION MATERIAL -------------------------------- */}
    <div className='mt-4'>
    <Row>
    <Col xs={1}>
    <p className={`${styles.Underline}`}>28.00</p>
    </Col>
    <Col xs={10}>
    <p className={ `${styles.BoldBlack}`}>CONSTRUCTION MATERIALS</p>
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
    <Col md={1} className="text-center">
    <p className="mb-0">#</p>
    </Col>
    <Col className="text-center" md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Price</p>
    </Col>
    <Col md={2} >
    <p className="text-center">Total</p>
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
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{rentals_carpentry || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{carpentry_purchases || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{painting_rentals || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{painting_purchases || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{backdrops_murals || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{scaffolding || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{warehouse_rental || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{construction_other || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* CONSTRUCTION MATERIAL Total */}
    <Row className='mt-3 mb-1' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL CONSTRUCTION MATERIALS </p>
    </Col>
    <Col md={3} >
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{constructionmat_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* ART SUPPLIES ----------------------------------------- */}
    <div className='mt-4'>
    <Row>
    <Col xs={1}>
    <p className={`${styles.Underline}`}>29.00</p>
    </Col>
    <Col xs={10}>
    <p className={ `${styles.BoldBlack}`}>ART SUPPLIES</p>
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
    <Col md={1} className="text-center">
    <p className="mb-0">#</p>
    </Col>
    <Col className="text-center" md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Price</p>
    </Col>
    <Col md={2} >
    <p className="text-center">Total</p>
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
    <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{drawing_supplies || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{drawing_equipment || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tech || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{stock_prints_processing || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{blueprinting || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_art || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* ART SUPPLIES Total */}
    <Row className='mt-3 mb-1' >
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
    <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{artSup_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* SET DRESSING ----------------------------------------- */}
    <div className='mt-4'>
    <Row>
    <Col xs={1}>
    <p className={`${styles.Underline}`}>30.00</p>
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
    <Col md={1} className="text-center">
    <p className="mb-0">#</p>
    </Col>
    <Col className="text-center" md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Price</p>
    </Col>
    <Col md={2} >
    <p className="text-center">Total</p>
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
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dress_rentals || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dress_purchases || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dress_manufacture || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dress_repairs_replacements || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_dressing || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* SET DRESSING Total */}
    <Row className='mt-3 mb-1' >
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
    <div className={`${styles.Box4} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{dressing_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* PROPS ------------------------------------------------ */}
    <div className='mt-4'>
    <Row>
    <Col xs={1}>
    <p className={`${styles.Underline}`}>31.00</p>
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
    <Col md={1} className="text-center">
    <p className="mb-0">#</p>
    </Col>
    <Col className="text-center" md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Price</p>
    </Col>
    <Col md={2} >
    <p className="text-center">Total</p>
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
    <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{props_rentals || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{props_purchases || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{graphics_signs || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{props_repairs_replac || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{picture_vehicle_rentals || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{picture_vehicle_purchases || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{picture_vehicle_mods || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{picture_vehicle_ins || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_props || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* PROPS Total */}
    <Row className='mt-3 mb-1' >
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
    <div className={`${styles.Box4} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{props_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* FX --------------------------------------------------- */}
    <div className='mt-4'>
    <Row>
    <Col xs={1}>
    <p className={`${styles.Underline}`}>32.00</p>
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
    <Col md={1} className="text-center">
    <p className="mb-0">#</p>
    </Col>
    <Col className="text-center" md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Price</p>
    </Col>
    <Col md={2} >
    <p className="text-center">Total</p>
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
    <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{fx_rentals || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{fx_purchases || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{stunts_purchases_rentals || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{armaments_permits_fees || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_fx || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{fx_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* ANIMALS ---------------------------------------------- */}
    <div className='mt-4'>
    <Row>
    <Col xs={1}>
    <p className={`${styles.Underline}`}>33.00</p>
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
    <Col md={1} className="text-center">
    <p className="mb-0">#</p>
    </Col>
    <Col className="text-center" md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Price</p>
    </Col>
    <Col md={2} >
    <p className="text-center">Total</p>
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
    <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{animals_rentals || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{animals_purchases || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{food_stabling || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{transport || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{vet || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{customs_broker || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_animals || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* ANIMALS Total */}
    <Row className='mt-3 mb-1' >
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
    <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{animals_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* WARDROBE SUPPLIES ------------------------------------ */}
    <div className='mt-4'>
    <Row>
    <Col xs={1}>
    <p className={`${styles.Underline}`}>34.00</p>
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
    <Col md={1} className="text-center">
    <p className="mb-0">#</p>
    </Col>
    <Col className="text-center" md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Price</p>
    </Col>
    <Col md={2} >
    <p className="text-center">Total</p>
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
    <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{wardrobe_rentals || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{wardrobe_purchases || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ward_manufact || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ward_ship_brok || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ward_repairs_clean || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_ward || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* WARDROBE SUPPLIES Total */}
    <Row className='mt-3 mb-1' >
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
    <div className={`${styles.Box4} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{wardrobe_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* MAKEUP SUPPLIES -------------------------------------- */}
    <div className='mt-4'>
    <Row>
    <Col xs={1}>
    <p className={`${styles.Underline}`}>35.00</p>
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
    <Col md={1} className="text-center">
    <p className="mb-0">#</p>
    </Col>
    <Col className="text-center" md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Price</p>
    </Col>
    <Col md={2} >
    <p className="text-center">Total</p>
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
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{makeup_rentals || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{makeup_purchases || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{hair_rentals || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{hair_purchases || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{wigs || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{makeup_fx || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{makeup_ship_brok || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_makeup || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* MAKEUP SUPPLIES Total */}
    <Row className='mt-3 mb-1' >
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
    <div className={`${styles.Box4} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{makeup_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* CAMERA EQUIPMENT ------------------------------------- */}
    <div className='mt-4'>
    <Row>
    <Col xs={1}>
    <p className={`${styles.Underline}`}>36.00</p>
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
    <Col md={1} className="text-center">
    <p className="mb-0">#</p>
    </Col>
    <Col className="text-center" md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Price</p>
    </Col>
    <Col md={2} >
    <p className="text-center">Total</p>
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
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{basic_package_rent_cam || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{daily_rentals_cam || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{specialty_rent_cam || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{camera_purchases || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{steadicam || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{video_teleprompter || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{camera_ship_brok || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{loss_damage_cam || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_camera || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* CAMERA EQUIPMENT Total */}
    <Row className='mt-3 mb-1' >
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
    <div className={`${styles.Box4} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{camera_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* ELECTRICAL EQUIPMENT --------------------------------- */}
    <div className='mt-4'>
    <Row>
    <Col xs={1}>
    <p className={`${styles.Underline}`}>37.00</p>
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
    <Col md={1} className="text-center">
    <p className="mb-0">#</p>
    </Col>
    <Col className="text-center" md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Price</p>
    </Col>
    <Col md={2} >
    <p className="text-center">Total</p>
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
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{basic_package_rent_elec || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{daily_rentals_elec || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{specialty_rent_elec || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{electric_purchases || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{generators || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{loss_damage_elec || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
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
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_electric || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* ELECTRICAL EQUIPMENT Total */}
    <Row className='mt-3 mb-1' >
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
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{electric_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* GRIP EQUIPMENT --------------------------------------- */}
    <div className='mt-4'>
    <Row>
    <Col xs={1}>
    <p className={`${styles.Underline}`}>38.00</p>
    </Col>
    <Col xs={10}>
    <p className={ `${styles.BoldBlack} mb-2`}>GRIP EQUIPMENT</p>
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
    <Col md={1} className="text-center">
    <p className="mb-0">#</p>
    </Col>
    <Col className="text-center" md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Price</p>
    </Col>
    <Col md={2} >
    <p className="text-center">Total</p>
    </Col>
    </Row>
    {/* Basic Package Rentals */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>38.10</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Basic Package Rentals</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{basic_package_rent_grip || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Daily Rentals */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>38.20</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Daily Rentals</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{daily_rentals_grip || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Specialty Rentals */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>38.30</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Specialty Rentals</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{specialty_rent_grip || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Crane Rentals */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>38.40</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Crane Rentals</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{crane_rentals || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Scaffolding */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>38.50</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Scaffolding</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{scaffolding_grip || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Purchases */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>38.60</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Purchases</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{grip_purchases || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Loss & Damage */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>38.70</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Loss & Damage</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{loss_damage_grip || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Other */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>38.80</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_grip || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* GRIP EQUIPMENT Total */}
    <Row className='mt-3 mb-1' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL GRIP EQUIPMENT </p>
    </Col>
    <Col md={3} >
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{grip_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* SOUND EQUIPMENT -------------------------------------- */}
    <div className='mt-4'>
    <Row>
    <Col xs={1}>
    <p className={`${styles.Underline}`}>39.00</p>
    </Col>
    <Col xs={10}>
    <p className={ `${styles.BoldBlack} mb-2`}>SOUND EQUIPMENT</p>
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
    <Col md={1} className="text-center">
    <p className="mb-0">#</p>
    </Col>
    <Col className="text-center" md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Price</p>
    </Col>
    <Col md={2} >
    <p className="text-center">Total</p>
    </Col>
    </Row>
    {/* Basic Package Rentals */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>39.10</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Basic Package Rentals</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{basic_package_rent_sound || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Daily Rentals */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>39.20</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Daily Rentals</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{daily_rentals_sound || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Wireless Microphones */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>39.30</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Wireless Microphones</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{wireless_mics || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Purchases */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>39.40</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Purchases</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{sound_purchases || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Walkie Talkies */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>39.50</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Walkie Talkies</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{walkie_talkies || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Other */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>39.60</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_sound || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* SOUND EQUIPMENT Total */}
    <Row className='mt-3 mb-1' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL SOUND EQUIPMENT </p>
    </Col>
    <Col md={3} >
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{sound_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* SECOND UNIT ------------------------------------------ */}
    <div className='mt-4'>
    <Row>
    <Col xs={1}>
    <p className={`${styles.Underline}`}>40.00</p>
    </Col>
    <Col xs={10}>
    <p className={ `${styles.BoldBlack} mb-2`}>SECOND UNIT</p>
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
    <Col md={1} className="text-center">
    <p className="mb-0">#</p>
    </Col>
    <Col className="text-center" md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Price</p>
    </Col>
    <Col md={2} >
    <p className="text-center">Total</p>
    </Col>
    </Row>
    {/* Crew */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>40.10</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Crew</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{crew_2U || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Equipment */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>40.20</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Equipment</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{equipment_2U || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Travel & Living */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>40.30</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Travel & Living</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{travliv_2U || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Transport */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>40.40</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Transport</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{transport_2U || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Materials/Supplies */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>40.50</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Materials/Supplies</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{mat_sup_2U || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Aerial Unit */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>40.60</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Aerial Unit</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{aerial_unit || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Marine Unit */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>40.70</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Marine Unit</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{marine_unit || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Other */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>40.80</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_2U || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Fringes & Taxes */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>40.90</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Fringes & Taxes</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{fringes_taxes_2U || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* SECOND UNIT Total */}
    <Row className='mt-3 mb-1' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL SECOND UNIT</p>
    </Col>
    <Col md={3} >
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{secondU_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* STOCK & LAB ------------------------------------------ */}
    <div className='mt-4'>
    <Row>
    <Col xs={1}>
    <p className={`${styles.Underline}`}>41.00</p>
    </Col>
    <Col xs={10}>
    <p className={ `${styles.BoldBlack} mb-2`}>PRODUCTION STOCK & LAB</p>
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
    <Col md={1} className="text-center">
    <p className="mb-0">#</p>
    </Col>
    <Col className="text-center" md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Price</p>
    </Col>
    <Col md={2} >
    <p className="text-center">Total</p>
    </Col>
    </Row>
    {/* Film Stock */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>41.10</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Film Stock</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{film_stock || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Video Stock */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>41.20</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Video Stock</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{video_stock || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Digital Stock */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>41.30</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Digital Stock</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{digital_stock || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Transfer Stock */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>41.40</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Transfer Stock</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{transfer_stock || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Hard Drives */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>41.50</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Hard Drives</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{hard_drives || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Dailies */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>41.60</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Dailies</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dalies || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Telecine */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>41.70</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Telecine</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{telecine || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Audio Stock */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>41.80</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Audio Stock</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{audio_stock || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Magnetic Transfer */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>41.90</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Magnetic Transfer</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{magnetic_transfer || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Stills */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>41.91</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Stills</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{stills || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Loss & Damage */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>41.92</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Loss & Damage</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{loss_dam_lab || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Other */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>41.93</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_lab || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* PRODUCTION STOCK & LAB Total */}
    <Row className='mt-3 mb-1' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL PRODUCTION STOCK & LAB </p>
    </Col>
    <Col md={3} >
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{stockLab_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* TOTAL - BELOW THE LINE "B" PRODUCTION - COSTS */}
    <div className="mt-5 pl-3">
    <Row >
    <Col className={ `${styles.Overview} my-0 py-0`} md={10} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL - "B" PRODUCTION - COSTS </p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
       d-flex align-items-center justify-content-center`}>
    <p className={`${styles.BoldBlack}`}>{below_the_lineB_costs_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* TOTAL - BELOW THE LINE "B" PRODUCTION LABOUR AND COSTS */}
    <div className="mt-3 pl-3">
    <Row >
    <Col className={ `${styles.Overview} my-0 py-0`} md={10} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL - "B" LABOUR AND COSTS </p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
     d-flex align-items-center justify-content-center`}>
    <p className={`${styles.BoldBlack} `}>{b_labour_and_costs_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    </div>
    {/* "C" POST PRODUCTION ----------------------------------- */}
    <div className='px-3'>
    <Row className={ `${styles.OverviewBlue} mx-1 my-5 py-1 text-center`}>
    <Col md={12}>
    <h5 className={ `${styles.BoldBlack}`}>"C" POST PRODUCTION</h5>
    </Col>
    </Row>
    {/* POST PRODUCTION STAFF/FACILITIES ---------------------- */}
    <div className='mt-4'>
    <Row>
    <Col xs={1}>
    <p className={`${styles.Underline}`}>42.00</p>
    </Col>
    <Col xs={10}>
    <p className={ `${styles.BoldBlack}`}>POST PRODUCTION STAFF/FACILITIES</p>
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
    <Col md={1} className="text-center">
    <p className="mb-0">#</p>
    </Col>
    <Col className="text-center" md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Price</p>
    </Col>
    <Col md={2} >
    <p className="text-center">Total</p>
    </Col>
    </Row>
    {/* Post Production Supervisor */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>42.10</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Post Production Supervisor</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{post_supervisor_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{post_supervisor_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{post_supervisor_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{post_supervisor_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{postSuper_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Post Production Coordinator */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>42.20</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Post Production Coordinator</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{post_coordinator_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5}
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{post_coordinator_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{post_coordinator_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{post_coordinator_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{postCoordin_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Post Production Assistants */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>42.30</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Post Production Assistants</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{post_assistants_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{post_assistants_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{post_assistants_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{post_assistants_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{postAssist_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Post Production Accountants */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>42.40</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Post Production Accountants</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{post_accountants_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{post_accountants_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{post_accountants_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{post_accountants_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{postAccount_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Post Production Accounting Assistants */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>42.50</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Post Production Accounting Assistants</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{post_accountants_ass_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{post_accountants_ass_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{post_accountants_ass_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{post_accountants_ass_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{postAccountAss_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Post Production Consultant */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>42.60</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Post Production Consultant</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{post_consultant || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Post Production Office Rental */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>42.70</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Post Production Office Rental</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{post_office_rent || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Post Office Equipment */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>42.80</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Post Office Equipment</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{post_office_equ || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Post Office Supplies */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>42.90</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Post Office Supplies</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{post_office_sup || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Post IT, Network Equipment & Support*/}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>42.91</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Post IT, Network Equipment & Support</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{post_it_network || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Post Phone & Internet */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>42.92</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Post Phone & Internet</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{post_phone_net || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Post Computers & Software */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>42.93</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Post Computers & Software</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{post_computers_soft || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Post Storage */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>42.94</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Post Storage</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{post_store || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Post Shipping */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>42.95</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Post Shipping</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{post_ship || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Post Catering & Craft Services */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>42.96</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Post Catering & Craft Services</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{post_craft || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Other */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>42.97</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{post_other || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Fringes & Taxes post_other */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>42.98</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Fringes & Taxes</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{fringes_taxes_post || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* POST PRODUCTION STAFF/FACILITIES Total */}
    <Row className='mt-3 mb-1' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL POST PRODUCTION STAFF/FACILITIES </p>
    </Col>
    <Col md={3} >
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{postStaffFac_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* EDITING ----------------------------------------------- */}
    <div className='mt-4'>
    <Row>
    <Col xs={1}>
    <p className={`${styles.Underline}`}>43.00</p>
    </Col>
    <Col xs={10}>
    <p className={ `${styles.BoldBlack}`}>EDITING</p>
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
    <Col md={1} className="text-center">
    <p className="mb-0">#</p>
    </Col>
    <Col className="text-center" md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Price</p>
    </Col>
    <Col md={2} >
    <p className="text-center">Total</p>
    </Col>
    </Row>
    {/* Film/Video Editors */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>43.10</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Film/Video Editors</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{editor_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{editor_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{editor_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{editor_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{editor_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* VFX Editors */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>43.20</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>VFX Editors</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{editor_vfx_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{editor_vfx_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{editor_vfx_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{editor_vfx_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{editorVfx_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Assistant Editors */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>43.30</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Assistant Editors</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{editor_ass_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{editor_ass_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{editor_ass_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{editor_ass_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{editorAss_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Colorist/Grader */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>43.40</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Colorist/Grader</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{colorist_grader_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{colorist_grader_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{colorist_grader_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{colorist_grader_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{grader_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Graphics */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>43.50</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Graphics</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{graphics_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{graphics_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{graphics_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{graphics_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{graphics_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Editing Rooms */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>43.60</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Editing Rooms</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{edit_rooms || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Editing Equipment */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>43.70</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Editing Equipment</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{edit_equip || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Editing Equipment Offline */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>43.80</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Editing Equipment Offline</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{edit_equip_nonlin || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Editing Equipment Online */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>43.90</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Editing Equipment Online</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{online || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* VFX Editing System */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>43.91</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>VFX Editing System</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{vfx_ed_system || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Editing Purchases */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>43.92</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Editing Purchases</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{post_edit_pur || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Loss/Damage Editing */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>43.93</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Loss/Damage Editing</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{lossdam_edit || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Other */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>43.94</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_post_edit || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Fringes & Taxes */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>43.95</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Fringes & Taxes</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{fringes_taxes_post_edit || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* EDITING Total */}
    <Row className='mt-3 mb-1' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL EDITING</p>
    </Col>
    <Col md={3} >
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{editing_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* POST SOUND -------------------------------------------- */}
    <div className='mt-4'>
    <Row>
    <Col xs={1}>
    <p className={`${styles.Underline}`}>44.00</p>
    </Col>
    <Col xs={10}>
    <p className={ `${styles.BoldBlack}`}>POST SOUND</p>
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
    <Col md={1} className="text-center">
    <p className="mb-0">#</p>
    </Col>
    <Col className="text-center" md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Price</p>
    </Col>
    <Col md={2} >
    <p className="text-center">Total</p>
    </Col>
    </Row>
    {/* Sound Designer */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>44.10</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Sound Designer</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{sound_designer_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{sound_designer_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{sound_designer_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{sound_designer_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{desSound_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Sound Editor */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>44.20</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Sound Editor</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{editor_sound_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{editor_sound_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{editor_sound_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{editor_sound_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
     d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{editorSound_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Music Editor */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>44.30</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Music Editor</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{editor_music_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{editor_music_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{editor_music_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{editor_music_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{editorMusic_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Assistant Sound Editors */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>44.40</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Assistant Sound Editors</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ed_sound_ass_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ed_sound_ass_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ed_sound_ass_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ed_sound_ass_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{soundEdAss_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* ADR Supervisor */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>44.50</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>ADR Supervisor</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{adr_super_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{adr_super_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{adr_super_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{adr_super_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{adrSup_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Foley Labour */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>44.60</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Foley Labour</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{foley_labour_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{foley_labour_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{foley_labour_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{foley_labour_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{folLab_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Sound Editing Rooms */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>44.70</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Sound Editing Rooms</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{sound_edit_rooms || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Sound Editing Equipment */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>44.80</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Sound Editing Equipment</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{sound_edit_equ || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Music Editing Equipment */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>44.90</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Music Editing Equipment</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{music_edit_equ || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Sound Editing Purchases */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>44.91</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Sound Editing Purchases</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{post_sound_edit_pur || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* ADR */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>44.92</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>ADR</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{adr || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Foley */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>44.93</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Foley</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{foley || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Pre-mix */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>44.94</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Pre-mix</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{pre_mix || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Mix */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>44.95</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Mix</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{mix || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Printmaster */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>44.96</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Printmaster</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{printmaster || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Transfers/Deliverables */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>44.97</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Transfers/Deliverables</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{transfers_deliverables || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Loss/Damage */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>44.98</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Loss/Damage</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{lossdam_sound || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Other */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>44.99</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_post_sound || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Fringes & Taxes */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>44.991</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Fringes & Taxes</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{fringes_taxes_post_sound || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* POST SOUND Total */}
    <Row className='mt-3 mb-1' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL POST SOUND</p>
    </Col>
    <Col md={3} >
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{postSound_total || 0}</p>
    </div>
    </Col>
    </Row>  
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* VISUAL EFFECTS ---------------------------------------- */}
    <div className='mt-4'>
    <Row>
    <Col xs={1}>
    <p className={`${styles.Underline}`}>45.00</p>
    </Col>
    <Col xs={10}>
    <p className={ `${styles.BoldBlack}`}>VISUAL EFFECTS</p>
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
    <Col md={1} className="text-center">
    <p className="mb-0">#</p>
    </Col>
    <Col className="text-center" md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Price</p>
    </Col>
    <Col md={2} >
    <p className="text-center">Total</p>
    </Col>
    </Row>
    {/* VFX Producer */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>45.10</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>VFX Producer</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{vfx_producer || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* VFX Supervisor */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>45.20</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>VFX Supervisor</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{vfx_supervisor || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* VFX Coordinator */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>45.30</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>VFX Coordinator</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{vfx_coordinator || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* VFX Storyboard */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>45.40</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>VFX Storyboard</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{vfx_storyboard || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* VFX Pre Vis Team */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>45.50</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>VFX Pre Vis Team</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{vfx_pre_vis_team || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* VFX Post Vis Team */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>45.60</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>VFX Post Vis Team</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{vfx_post_vis_team || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* VFX Other Labour */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>45.70</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>VFX Other Labour</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{vfx_post_other_lab || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Miniatures Build */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>45.80</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Miniatures Build</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{miniatures_build || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Miniatures Shoot */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>45.90</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Miniatures Shoot</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{miniatures_shoot || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Motion Capture */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>45.91</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Motion Capture</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{motion_capture || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Cyberscanning */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>45.92</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Cyberscanning</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{cyberscanning || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* VFX Rentals */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>45.93</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>VFX Rentals</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{vfx_rentals || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* VFX Purchases */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>45.94</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>VFX Purchases</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{vfx_purchases || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* VFX Vendor #1 */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>45.95</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>VFX Vendor #1</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{vfx_vendor_1 || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* VFX Vendor #2 */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>45.96</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>VFX Vendor #2</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{vfx_vendor_2 || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* VFX Vendor #3 */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>45.97</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>VFX Vendor #3</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{vfx_vendor_3 || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* VFX Vendor #4 */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>45.98</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>VFX Vendor #4</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{vfx_vendor_4 || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* VFX Vendor #5 */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>45.99</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>VFX Vendor #5</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{vfx_vendor_5 || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* VFX Vendor #6 */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>45.991</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>VFX Vendor #6</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
     d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{vfx_vendor_6 || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* VFX Vendor #7 */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>45.992</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>VFX Vendor #7</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{vfx_vendor_7 || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* VFX Vendor #8 */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>45.993</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>VFX Vendor #8</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{vfx_vendor_8 || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* VFX Vendor #9 */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>45.994</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>VFX Vendor #9</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{vfx_vendor_9 || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* VFX Vendor #10 */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>45.995</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>VFX Vendor #10</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{vfx_vendor_10 || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Other VFX Vendors Total */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>45.996</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Other VFX Vendors Total </p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{vfx_vendors_x || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* VFX Expenses */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>45.997</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>VFX Expense </p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{vfx_expenses || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* VFX Travel & Living */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>45.998</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>VFX Travel & Living </p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{vfx_traliv || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Box Rentals */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>45.999</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Box Rentals</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{box_ren_vfx || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Loss/Damage */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>45.9991</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Loss/Damage</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{lossdam_vfx || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Other */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>45.9992</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_post_vfx || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Fringes & Taxes */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>45.9993</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Fringes & Taxes</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{fringes_taxes_vfx || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* VISUAL EFFECTS Total */}
    <Row className='mt-3 mb-1' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL VISUAL EFFECTS</p>
    </Col>
    <Col md={3} >
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{postVfx_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* POST LAB/VIDEO COPIES --------------------------------- */}
    <div className='mt-4'>
    <Row>
    <Col xs={1}>
    <p className={`${styles.Underline}`}>46.00</p>
    </Col>
    <Col xs={10}>
    <p className={ `${styles.BoldBlack}`}>POST PRODUCTION LAB/VIDEO COPIES</p>
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
    <Col md={1} className="text-center">
    <p className="mb-0">#</p>
    </Col>
    <Col className="text-center" md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Price</p>
    </Col>
    <Col md={2} >
    <p className="text-center">Total</p>
    </Col>
    </Row>
    {/* Stock */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>46.10</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Stock</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{stock || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Neg Cutting */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>46.20</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Neg Cutting</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{neg_cutting || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Colour Correct */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>46.30</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Colour Correct</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{color_cor || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Interpositive/Internegative */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>46.40</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Interpositive/Internegative</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{interpos_neg || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Prints */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>46.50</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Prints</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{prints || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Transfers */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>46.60</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Transfers</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{transfers || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Distribution Copies */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>46.70</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Distribution Copies</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{distribution_copies || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* All Media Types Copies */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>46.80</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>All Media Types Copies</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_media_delivery || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Storage */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>46.90</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Storage</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{storage_post || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* POST PRODUCTION LAB/VIDEO COPIES Total */}
    <Row className='mt-3 mb-1' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL POST PRODUCTION LAB/VIDEO COPIES</p>
    </Col>
    <Col md={3} >
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{postLab_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* TITLES/OPTICALS/STOCK FOOTAGE ------------------------- */}
    <div className='mt-4'>
    <Row>
    <Col xs={1}>
    <p className={`${styles.Underline}`}>47.00</p>
    </Col>
    <Col xs={10}>
    <p className={ `${styles.BoldBlack}`}>TITLES/OPTICALS/STOCK FOOTAGE</p>
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
    <Col md={1} className="text-center">
    <p className="mb-0">#</p>
    </Col>
    <Col className="text-center" md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Price</p>
    </Col>
    <Col md={2} >
    <p className="text-center">Total</p>
    </Col>
    </Row>
    {/* Titles */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>47.10</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Titles</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{titles || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Opticals */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>47.20</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Opticals</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{opticals || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Stock Footage */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>47.30</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Stock Footage</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{stock_footage || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Continuity Script CCSL */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>47.40</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Continuity Script CCSL</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{con_script_ccsl || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* TITLES/OPTICALS/STOCK FOOTAGE Total */}
    <Row className='mt-3 mb-1' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL TITLES/OPTICALS/STOCK FOOTAGE </p>
    </Col>
    <Col md={3} >
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{postTitles_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* VERSIONING/CLOSED-CAPTIONING/COPIES ------------------- */}
    <div className='mt-4'>
    <Row>
    <Col xs={1}>
    <p className={`${styles.Underline}`}>48.00</p>
    </Col>
    <Col xs={10}>
    <p className={ `${styles.BoldBlack}`}>VERSIONING/CLOSED-CAPTIONING/COPIES</p>
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
    <Col md={1} className="text-center">
    <p className="mb-0">#</p>
    </Col>
    <Col className="text-center" md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Price</p>
    </Col>
    <Col md={2} >
    <p className="text-center">Total</p>
    </Col>
    </Row>
    {/* Dubs */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>48.10</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Dubs</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dubs || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Subtitles */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>48.20</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Subtitles</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{subtitles || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Closed-Captioning */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>48.30</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Closed-Captioning</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{closed_caption || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Versioning */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>48.40</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Versioning</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{versioning || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Trailers */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>48.50</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Trailers</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{trailers || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Ads */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>48.60</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Ads</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ads || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Versioning Transfers */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>48.70</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Versioning Transfers</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{transfers_ver || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Versioning Prints */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>48.80</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Versioning Prints</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{prints_ver || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Versioning Digital Copies */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>48.90</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Versioning Digital Copies</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dig_copies_ver || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Versioning Other Media Copies */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>48.90</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Versioning Other Media Copies</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_copies_ver || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* VERSIONING/CLOSED-CAPTIONING/COPIES Total */}
    <Row className='mt-3 mb-1' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL VERSIONING/CLOSED-CAPTIONING/COPIES</p>
    </Col>
    <Col md={3} >
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{postVersion_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* TOTAL - POST PRODUCTION "C" */}
    <div className="mt-5 pl-3">
    <Row  >
    <Col className={ `${styles.Overview} my-0 py-0`} md={10} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL - POST PRODUCTION "C" </p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
     d-flex align-items-center justify-content-center`}>
    <p className={`${styles.BoldBlack} `}>{post_productionC_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* TOTAL - BELOW "B" and "C" */}
    <div className="mt-3 pl-3">
    <Row >
    <Col className={ `${styles.Overview} my-0 py-0`} md={10} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL - BELOW THE LINE "B" and "C" </p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
     d-flex align-items-center justify-content-center`}>
    <p className={`${styles.BoldBlack}`}>{belowB_andC_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* TOTAL - ABOVE/BELOW "A" "B" and "C" */}
    <div className="mt-3 pl-3">
    <Row >
    <Col className={ `${styles.Overview} my-0 py-0`} md={10} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL - ABOVE/BELOW THE LINE "A" "B" and "C" </p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
     d-flex align-items-center justify-content-center`}>
    <p className={`${styles.BoldBlack}`}>{above_belowABC_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    </div>
    {/* "D" OTHER --------------------------------------------- */}
    <div className='px-3'>
    <Row className={ `${styles.OverviewBlue} mx-1 my-5 py-1 text-center`}>
    <Col md={12}>
    <h5 className={ `${styles.BoldBlack}`}>"D" OTHER</h5>
    </Col>
    </Row>
    {/* PUBLICITY --------------------------------------------- */}
    <div className='mt-4'>
    <Row>
    <Col xs={1}>
    <p className={`${styles.Underline}`}>49.00</p>
    </Col>
    <Col xs={10}>
    <p className={ `${styles.BoldBlack}`}>PUBLICITY</p>
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
    <Col md={1} className="text-center">
    <p className="mb-0">#</p>
    </Col>
    <Col className="text-center" md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Price</p>
    </Col>
    <Col md={2} >
    <p className="text-center">Total</p>
    </Col>
    </Row>
    {/* Tests/Theatre Rental */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>49.10</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Tests/Theatre Rental</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tests_theater_ren || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Tests - Other */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>49.20</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Tests - Other</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tests_other || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Unit Publicist */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>49.30</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Unit Publicist</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{unit_publicist || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Publicity/Press Expenses */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>49.40</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Publicity/Press Expenses</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{pub_press_ex || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Photography */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>49.50</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Photography</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
     d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{photography || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Electronic Press Kit - EPK */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>49.60</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Electronic Press Kit - EPK</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{epk || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Advertising/Promotion */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>49.70</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Advertising/Promotion</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{promotion || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Public Relations */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>49.80</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Public Relations</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{pr || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Previews */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>49.90</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Previews</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{previews || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Website */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>49.91</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Website</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{website || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Fringes & Taxes */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>49.92</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Fringes & Taxes</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{firnges_pub || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Other */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>49.93</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_pub || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* PUBLICITY Total */}
    <Row className='mt-3 mb-1' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL PUBLICITY</p>
    </Col>
    <Col md={3} >
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{pub_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* INSURANCE --------------------------------------------- */}
    <div className='mt-4'>
    <Row>
    <Col xs={1}>
    <p className={`${styles.Underline}`}>50.00</p>
    </Col>
    <Col xs={10}>
    <p className={ `${styles.BoldBlack}`}>INSURANCE</p>
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
    <Col md={1} className="text-center">
    <p className="mb-0">#</p>
    </Col>
    <Col className="text-center" md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Price</p>
    </Col>
    <Col md={2} >
    <p className="text-center">Total</p>
    </Col>
    </Row>
    {/* Production Package */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>50.10</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Production Package</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{pro_package || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* General/Public Liability */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>50.20</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>General/Public Liability</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{gen_lia || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* E & O */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>50.30</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>E & O</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{eando || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Umbrella */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>50.40</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Umbrella</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{umbrella || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Union Insurance/Workers Comp */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>50.50</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Union Insurance/Workers Comp</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{union_insurance || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Equipment/Specialty/Other Insurance */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>50.60</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Equipment/Specialty/Other Insurance</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_in || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* INSURANCE Total */}
    <Row className='mt-3 mb-1' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL INSURANCE</p>
    </Col>
    <Col md={3} >
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{insur_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* GENERAL EXPENSES -------------------------------------- */}
    <div className='mt-4'>
    <Row>
    <Col xs={1}>
    <p className={`${styles.Underline}`}>51.00</p>
    </Col>
    <Col xs={10}>
    <p className={ `${styles.BoldBlack}`}>GENERAL EXPENSES</p>
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
    <Col md={1} className="text-center">
    <p className="mb-0">#</p>
    </Col>
    <Col className="text-center" md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Price</p>
    </Col>
    <Col md={2} >
    <p className="text-center">Total</p>
    </Col>
    </Row>
    {/* Legal */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>51.10</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Legal</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{legal || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Medical */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>51.20</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Medical</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{medical || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Licences */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>51.30</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Licences</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{licences || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Payroll */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>51.40</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Payroll</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{payroll || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Bank Charges */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>51.50</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Bank Charges</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{bank_charges || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Audit/Other */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>51.60</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Audit/Other</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{audit || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* GENERAL EXPENSES Total */}
    <Row className='mt-3 mb-1' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL GENERAL EXPENSES</p>
    </Col>
    <Col md={3} >
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{genEx_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* INDIRECT COSTS ---------------------------------------- */}
    <div className='mt-4'>
    <Row>
    <Col xs={1}>
    <p className={`${styles.Underline}`}>52.00</p>
    </Col>
    <Col xs={10}>
    <p className={ `${styles.BoldBlack} mb-2`}>INDIRECT COSTS</p>
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
    <Col md={1} className="text-center">
    <p className="mb-0">#</p>
    </Col>
    <Col className="text-center" md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Unit</p>
    </Col>
    <Col md={1} >
    <p className="text-center">Price</p>
    </Col>
    <Col md={2} >
    <p className="text-center">Total</p>
    </Col>
    </Row>
    {/* Corporate Overhead */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>52.10</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Corporate Overhead</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{corporate_overhead || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Interim Financing */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>52.20</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Interim Financing</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{interim_financing || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Fiscal Sponsor Fee/Other */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>52.30</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Fiscal Sponsor Fee/Other</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{fiscal_sponsor_fee || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* INDIRECT COSTS Total */}
    <Row className='mt-3 mb-1' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL INDIRECT COSTS</p>
    </Col>
    <Col md={3} >
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{indirCo_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* TOTAL - OTHER "D" */}
    <div className="mt-5 pl-3">
    <Row >
    <Col className={ `${styles.Overview} my-0 py-0`} md={10} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL - OTHER "D" </p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
     d-flex align-items-center justify-content-center`}>
    <p className={`${styles.BoldBlack}`}>{otherD_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    </div>
    {/* TOTAL - A, B, C and D */}
    <div className="mt-3 px-3">
    <Row className="pl-3" >
    <Col className={ `${styles.Overview} my-0 py-0`} md={10} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL - "A", "B", "C" and "D" </p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.BoldBlack}`}>{above_belowABCandD_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* CONTINGENCY/BOND ------------------------------------------- */}
    <div className='px-3 mt-4'>
    {/* Contingency */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Contingency</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{contingency || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Completion Bond */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Completion Bond</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{completion_bond || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* TOTAL - GRAND */}
    <div className='mt-5 px-3'>
    <Row className='pl-3 mb-3' >
    <Col className={ `${styles.Overview} my-0 py-0`} md={10} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL - GRAND </p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
     d-flex align-items-center justify-content-center`}>
    <p className={`${styles.BoldBlack} mt-3 mb-0`}>{grand_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    </div>
    </div>
  )
}

export default Budget