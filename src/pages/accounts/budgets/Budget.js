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

  const {// details
    above_the_line_total, below_the_lineB_total, grand_total,
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
    production_manager_quantity,
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
     text-center`} >{title} Budget </h2>
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
    {/* above */}
    {/* TOTAL - ABOVE THE LINE */}
    <Row className='mt-3' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL ABOVE THE LINE </p>
    </Col>
    <Col md={3} >
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline} mb-0`}>{above_the_line_total || 0}</p>
    </Col>
    </Row>
    {/* below B */}
    {/* TOTAL - BELOW THE LINE "B" PRODUCTION */}
    <Row className='mt-3' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL - BELOW THE LINE "B" PRODUCTION </p>
    </Col>
    <Col md={3} >
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline} mb-0`}>{below_the_lineB_total || 0}</p>
    </Col>
    </Row>
    {/* Grand */}
    {/* TOTAL - GRAND */}
    <Row className='mt-3 mb-3' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL - GRAND </p>
    </Col>
    <Col md={3} >
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline} mb-0`}>{grand_total || 0}</p>
    </Col>
    </Row>
    {/* DETAILS LENGTH */}
    <div>
    {/* Titles */}
    <Row className={ `${styles.OverviewBlue} mx-1 mb-2 py-1 text-center`}>
    <Col md={12}>
    <h5 className={ `${styles.BoldBlack}`}>BUDGET DETAIL PAGE</h5>
    </Col>
    </Row>
    {/* details length */}
    <Row className='px-5 mt-3'>
    {/* details */}
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
    {/* <Row>
      <Col xs={12} md={6} >
      <h5 className={`${styles.Bold} d-block d-md-none mb-2 text-center`}>Length</h5>
      </Col>
    </Row> */}
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
    {/* Rights */}
    <div>
    <Row>
    <Col md={1}>
    <p className="mb-2">1000</p>
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
    <p className={`${styles.Underline}`}>1010</p>
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
    <p className={`${styles.Underline}`}>1020</p>
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
    {/* Development */}
    <div className='mt-5'>
    <Row>
    <Col md={1}>
    <p className="mb-2">2000</p>
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
    <p className={`${styles.Underline}`}>2010</p>
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
    <p className={`${styles.Underline}`}>2020</p>
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
    <p className={`${styles.Underline}`}>2030</p>
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
    <p className={`${styles.Underline}`}>2040</p>
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
    <p className={`${styles.Underline}`}>2050</p>
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
    <p className={`${styles.Underline}`}>2060</p>
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
    <p className={`${styles.Underline}`}>2070</p>
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
    <p className={`${styles.Underline}`}>2080</p>
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
    <p className={`${styles.Underline}`}>2090</p>
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
    {/* Scenario */}
    <div className='mt-5'>
    <Row>
    <Col xs={1}>
    <p className='mb-2'>3000</p>
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
    <p className={`${styles.Underline}`}>3010</p>
    <p className={`${styles.Underline}`}>3020</p>
    <p className={`${styles.Underline}`}>3030</p>
    <p className={`${styles.Underline}`}>3040</p>
    <p className={`${styles.Underline}`}>3050</p>
    <p className={`${styles.Underline}`}>3060</p>
    <p className={`${styles.Underline}`}>3070</p>
    <p className={`${styles.Underline}`}>3080</p>
    <p className={`${styles.Underline}`}>3090</p>
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
    {/* Producers and Directors */}
    <div className='mt-5'>
    <Row>
    <Col xs={1}>
    <p className='mb-2'>4000</p>
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
    <p className={`${styles.Underline}`}>4010</p>
    <p className={`${styles.Underline}`}>4020</p>
    <p className={`${styles.Underline}`}>4030</p>
    <p className={`${styles.Underline}`}>4040</p>
    <p className={`${styles.Underline}`}>4050</p>
    <p className={`${styles.Underline}`}>4060</p>
    <p className={`${styles.Underline}`}>4070</p>
    <p className={`${styles.Underline}`}>4080</p>
    <p className={`${styles.Underline}`}>4090</p>
    <p className={`${styles.Underline}`}>4100</p>
    <p className={`${styles.Underline}`}>4110</p>
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
    {/* Stars / Music */}
    <div className='mt-5'>
    <Row>
    <Col xs={1}>
    <p className='mb-2'>5000</p>
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
    <p className={`${styles.Underline}`}>5010</p>
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
    <p className={`${styles.Underline}`}>5020</p>
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
    <p className={`${styles.Underline}`}>5030</p>
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
    <p className={`${styles.Underline}`}>5040</p>
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
    <p className={`${styles.Underline}`}>5010</p>
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
    <p className={`${styles.Underline}`}>5060</p>
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
    <p className={`${styles.Underline}`}>5070</p>
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
    <p className={`${styles.Underline}`}>5080</p>
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
    <p className={`${styles.Underline}`}>5090</p>
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
    <p className={`${styles.Underline}`}>2100</p>
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
    <p className={`${styles.Underline}`}>5110</p>
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
    <p className={`${styles.Underline}`}>5120</p>
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
    <p className={`${styles.Underline}`}>5130</p>
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
    {/* BELOW THE LINE */}
    <div className='px-3'>
    <Row className={ `${styles.OverviewBlue} mx-1 my-5 py-1 text-center`}>
    <Col md={12}>
    <h5 className={ `${styles.BoldBlack}`}>BELOW THE LINE - "B" PRODUCTION </h5>
    </Col>
    </Row>
    {/* Cast */}
    <div className='mt-5'>
    <Row>
    <Col xs={1}>
    <p className='mb-2'>6000</p>
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
    <p className={`${styles.Underline}`}>6010</p>
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
    <p className={`${styles.Underline}`}>6020</p>
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
    <p className={`${styles.Underline}`}>6030</p>
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
    <p className={`${styles.Underline}`}>6040</p>
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
    <p className={`${styles.Underline}`}>6050</p>
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
    <p className={`${styles.Underline}`}>6060</p>
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
    <p className={`${styles.Underline}`}>6070</p>
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
    <p className={`${styles.Underline}`}>6080</p>
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
    <p className={`${styles.Underline}`}>6090</p>
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
    <p className={`${styles.Underline}`}>6100</p>
    </Col>
    <Col md={9}>
    <p className={`${styles.Underline}`}>Fringes and Taxes - Cast</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{fringes_taxes_cast || 0} </p>
    </Col>
    </Row>
    {/* Rights Payments - Cast */}
    <Row>
    <Col md={1}>
    <p className={`${styles.Underline}`}>6110</p>
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
    {/* Production Staff */}
    <div className='mt-5'>
    <Row>
    <Col xs={1}>
    <p className='mb-2'>7000</p>
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
    <p className={`${styles.Underline}`}>7010</p>
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
    <p className={`${styles.Underline}`}>7020</p>
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
    <p className={`${styles.Underline}`}>7030</p>
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
    <p className={`${styles.Underline}`}>7040</p>
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
    <p className={`${styles.Underline}`}>7050</p>
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
    <p className={`${styles.Underline}`}>7060</p>
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
    <p className={`${styles.Underline}`}>7070</p>
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
    <p className={`${styles.Underline}`}>7080</p>
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
    <p className={`${styles.Underline}`}>7090</p>
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
    <p className={`${styles.Underline}`}>7100</p>
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
    <p className={`${styles.Underline}`}>7110</p>
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
    <p className={`${styles.Underline}`}>7120</p>
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
    <p className={`${styles.Underline}`}>7130</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Payroll</p>
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
    <p className={`${styles.Underline}`}>7140</p>
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
    <p className={`${styles.Underline}`}>7150</p>
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
    <p className={`${styles.Underline}`}>7160</p>
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
    <p className={`${styles.Underline}`}>7170</p>
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
    <p className={`${styles.Underline}`}>7180</p>
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

    </div>
    </div>
    </div>
  )
}

export default Budget