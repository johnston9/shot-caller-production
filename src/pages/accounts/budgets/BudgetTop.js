/* Component in the Budget Component to display 
   the budget Top page  */
   import React from 'react';
   import styles from "../../../styles/Account.module.css";
   import Col from 'react-bootstrap/Col';
   import Row from 'react-bootstrap/Row';
//    import { Link, useHistory } from 'react-router-dom';
//    import btnStyles from "../../styles/Button.module.css";
//    import Button from "react-bootstrap/Button";

const BudgetTop = (props) => {
const {setShowTop, budget} = props;

const {above_the_line_total, below_the_lineB_total,
  below_the_lineB_costs_total, b_labour_and_costs_total,
  post_productionC_total, belowB_andC_total, grand_total,
  above_belowABC_total, otherD_total, above_belowABCandD_total,
  dated, prelimfin, preparedby, approvedby, approvedbyco,
  title, series, prodco, writer, format, location,
  research, prep, shoot, wrap, post, length_total,
  rights_total, development_total, scenario_total,
  producers_dirs_total, stars_music_total, cast_total,
  productionstaff_total, designlabour_total, constructionlabour_total,
  dressinglabour_total, propertylabour_total, wranglerlabour_total,
  fxlabour_total, wardrobelabour_total, makeuplabour_total,
  cameralabour_total, electriclabour_total, griplabour_total,
  soundlabour_total, transportlabour_total, tvspecificlabour_total,
  proOff_total, studio_total, site_total, unit_total, traliv_total,
  transport_total, constructionmat_total, artSup_total, dressing_total,
  props_total, fx_total, animals_total, wardrobe_total, makeup_total,
  camera_total, electric_total, grip_total, sound_total, secondU_total,
  stockLab_total, postStaffFac_total, editing_total, postSound_total,
  postLab_total, postTitles_total, postVersion_total, postVfx_total,
  pub_total, insur_total, genEx_total, indirCo_total,
  contingency, completion_bond,
} = budget;

  return (
    <div className='mx-5 px-5 mb-5'>
    <h5 style={{ textTransform: 'uppercase'}} 
    className={`mt-1 mb-2 pl-5 py-3 text-center ${styles.SubTitle4 }`}>
        Budget Topsheet
        <span style={{ textTransform: 'none'}} 
        className={`float-right ${styles.Close } pr-3`} 
        onClick={() => setShowTop(false) } >Close</span>
    </h5>
    <div>
    {/* details length */}
    <Row className='px-3'>
    {/* details */}
    <Col xs={12} md={6} >
    <Row>
    <Col xs={4}>
    <p className={`${styles.Underline}`}>Title</p>
    <p className={`${styles.Underline}`}>Series</p>
    <p className={`${styles.Underline}`}>Prodco</p>
    <p className={`${styles.Underline}`}>Writers</p>
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
    <p className={`${styles.Underline}`}>{writer || "-"}</p>
    <p className={`${styles.Underline}`}>{format || "-"}</p>
    <p className={`${styles.Underline}`}>{location || "-"}</p>
    <p className={`${styles.Underline}`}>{dated || "-"}</p>
    </Col>
    </Row>  
    </Col>
    <Col xs={12} md={6} >
    <Row className='mt-3 mt-md-0'>
    <Col xs={4}>
    <p className={`${styles.Underline}`}>Development</p>
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
    <div className='mt-1 px-2'>
    <Row>
    <Col md={6} >
    <p className={`${styles.Underline}`}>
    BUDGET PREPARED BY: {preparedby}
    </p>
    <p className={`${styles.Underline}`}>
    PRELIMINARY OR FINAL: {prelimfin}
    </p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>
    BUDGET APPROVED BY: {approvedby}
    </p>
    <p className={`${styles.Underline}`}>
    APPROVING COMPANY: {approvedbyco}
    </p>
    </Col>
    </Row>
    </div>
    </div>
    {/* ABOVE THE LINE */}
    <div className='px-3'>
    <Row className={ `${styles.OverviewBlue} mx-1 my-2 py-1 text-center`}>
    <Col md={12}>
    <h5 className={ `${styles.BoldBlack}`}>ABOVE THE LINE {above_the_line_total} </h5>
    </Col>
    </Row>
    {/* RIGHTS */}
    <Row>
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">01.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>RIGHTS</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">{rights_total}</p>
    </Col>
    </Row>
    {/* PRE-PRODUCTION AND DEVELOPMENT */}
    <Row>
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">02.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>PRE-PRODUCTION AND DEVELOPMENT</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">{development_total}</p>
    </Col>
    </Row>
    {/* SCENARIO */}
    <Row>
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">03.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>SCENARIO</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">{scenario_total}</p>
    </Col>
    </Row>
    {/* PRODUCERS AND DIRECTORS */}
    <Row>
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">04.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>PRODUCERS AND DIRECTORS</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">{producers_dirs_total}</p>
    </Col>
    </Row>
    {/* STARS / MUSIC */}
    <Row>
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">05.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>STARS / MUSIC</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">{stars_music_total}</p>
    </Col>
    </Row>
    {/* TOTAL - ABOVE THE LINE */}
    <Row className='mt-3' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={9} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL - ABOVE THE LINE "A"</p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Bold} mb-0`}>{above_the_line_total || 0}</p>
    </Col>
    </Row>
    </div>
    {/* BELOW THE LINE "B" PRODUCTION - LABOUR -----------------*/}
    <div className='px-3'>
    <Row className={ `${styles.OverviewBlue} mx-1 my-5 py-1 text-center`}>
    <Col md={12}>
    <h5 className={ `${styles.BoldBlack}`}>BELOW THE LINE - "B" PRODUCTION - LABOUR </h5>
    </Col>
    </Row>
    {/* CAST */}
    <Row>
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">06.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>CAST</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">{cast_total}</p>
    </Col>
    </Row>
    {/* PRODUCTION STAFF */}
    <Row>
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">07.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>PRODUCTION STAFF</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">{productionstaff_total}</p>
    </Col>
    </Row>
    {/* DESIGN LABOUR */}
    <Row>
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">08.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>DESIGN LABOUR</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">{designlabour_total}</p>
    </Col>
    </Row>
    {/* CONSTRUCTION LABOUR */}
    <Row>
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">09.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>CONSTRUCTION LABOUR</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">{constructionlabour_total}</p>
    </Col>
    </Row>
    {/* SET DRESSING LABOUR */}
    <Row>
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">10.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>SET DRESSING LABOUR</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">{dressinglabour_total}</p>
    </Col>
    </Row>
    {/* PROPERTY LABOUR */}
    <Row>
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">11.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>PROPERTY LABOUR</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">{propertylabour_total}</p>
    </Col>
    </Row>
    {/* WRANGLING LABOUR */}
    <Row>
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">12.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>WRANGLING LABOUR</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">{wranglerlabour_total}</p>
    </Col>
    </Row>
    {/* FX LABOUR */}
    <Row>
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">13.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>FX LABOUR</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">{fxlabour_total}</p>
    </Col>
    </Row>
    {/* WARDROBE LABOUR */}
    <Row>
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">14.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>WARDROBE LABOUR</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">{wardrobelabour_total}</p>
    </Col>
    </Row>
    {/* MAKEUP LABOUR */}
    <Row>
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">15.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>MAKEUP LABOUR</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">{makeuplabour_total}</p>
    </Col>
    </Row>
    {/* CAMERA LABOUR */}
    <Row>
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">16.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>CAMERA LABOUR</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">{cameralabour_total}</p>
    </Col>
    </Row>
    {/* ELECTRICAL LABOUR */}
    <Row>
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">17.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>ELECTRICAL LABOUR</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">{electriclabour_total}</p>
    </Col>
    </Row>
    {/* GRIP LABOUR */}
    <Row>
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">18.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>GRIP LABOUR</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">{griplabour_total}</p>
    </Col>
    </Row>
    {/* PRODUCTION SOUND LABOUR */}
    <Row>
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">19.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>PRODUCTION SOUND LABOUR</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">{soundlabour_total}</p>
    </Col>
    </Row>
    {/* TRANSPORTATION LABOUR */}
    <Row>
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">20.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>TRANSPORTATION LABOUR</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">{transportlabour_total}</p>
    </Col>
    </Row>
    {/* TV SPECIFIC LABOUR */}
    <Row>
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">21.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>TV SPECIFIC LABOUR</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">{tvspecificlabour_total}</p>
    </Col>
    </Row>
    {/* TOTAL - BELOW THE LINE "B" PRODUCTION */}
    <Row className='mt-3' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={9} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL - "B" PRODUCTION - LABOUR </p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Bold} mb-0`}>{below_the_lineB_total || 0}</p>
    </Col>
    </Row>
    </div>
    {/* BELOW THE LINE "B" PRODUCTION - COSTS ----------------- */}
    <div className='px-3'>
    <Row className={ `${styles.OverviewBlue} mx-1 my-5 py-1 text-center`}>
    <Col md={12}>
    <h5 className={ `${styles.BoldBlack}`}>BELOW THE LINE - "B" PRODUCTION - COSTS </h5>
    </Col>
    </Row>
    {/* PRODUCTION OFFICE */}
    <Row>
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">22.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>PRODUCTION OFFICE</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">{proOff_total}</p>
    </Col>
    </Row>
    {/* STUDIO */}
    <Row>
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">23.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>STUDIO</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">{studio_total}</p>
    </Col>
    </Row>
    {/* SITE */}
    <Row>
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">24.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>SITE</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">{site_total}</p>
    </Col>
    </Row>
    {/* UNIT */}
    <Row>
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">25.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>UNIT</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">{unit_total}</p>
    </Col>
    </Row>
    {/* TRAVEL & LIVING */}
    <Row>
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">26.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>TRAVEL & LIVING</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">{traliv_total}</p>
    </Col>
    </Row>
    {/* TRANSPORTATION */}
    <Row>
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">27.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>TRANSPORTATION</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">{transport_total}</p>
    </Col>
    </Row>
    {/* CONSTRUCTION MATERIAL */}
    <Row>
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">28.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>CONSTRUCTION MATERIAL</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">{constructionmat_total}</p>
    </Col>
    </Row>
    {/* ART SUPPLIES */}
    <Row>
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">29.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>ART SUPPLIES</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">{artSup_total}</p>
    </Col>
    </Row>
    {/* SET DRESSING */}
    <Row>
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">30.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>SET DRESSING</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">{dressing_total}</p>
    </Col>
    </Row>
    {/* PROPS */}
    <Row>
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">31.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>PROPS</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">{props_total}</p>
    </Col>
    </Row>
    {/* FX */}
    <Row>
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">32.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>FX</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">{fx_total}</p>
    </Col>
    </Row>
    {/* ANIMALS */}
    <Row>
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">33.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>ANIMALS</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">{animals_total}</p>
    </Col>
    </Row>
    {/* WARDROBE SUPPLIES */}
    <Row>
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">34.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>WARDROBE SUPPLIES</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">{wardrobe_total}</p>
    </Col>
    </Row>
    {/* MAKEUP SUPPLIES */}
    <Row>
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">35.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>MAKEUP SUPPLIES</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">{makeup_total}</p>
    </Col>
    </Row>
    {/* CAMERA EQUIPMENT */}
    <Row>
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">36.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>CAMERA EQUIPMENT</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">{camera_total}</p>
    </Col>
    </Row>
    {/* ELECTRICAL EQUIPMENT */}
    <Row>
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">37.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>ELECTRICAL EQUIPMENT</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">{electric_total}</p>
    </Col>
    </Row>
    {/* GRIP EQUIPMENT */}
    <Row>
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">38.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>GRIP EQUIPMENT</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">{grip_total}</p>
    </Col>
    </Row>
    {/* SOUND EQUIPMENT */}
    <Row>
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">39.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>SOUND EQUIPMENT</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">{sound_total}</p>
    </Col>
    </Row>
    {/* SECOND UNIT */}
    <Row>
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">40.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>SECOND UNIT</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">{secondU_total}</p>
    </Col>
    </Row>
    {/* STOCK & LAB*/}
    <Row>
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">41.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>STOCK & LAB</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">{stockLab_total}</p>
    </Col>
    </Row>
    {/* TOTAL - BELOW THE LINE "B" PRODUCTION - COSTS */}
    <Row className='mt-3' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={9} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL - "B" PRODUCTION - COSTS </p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Bold} mb-0`}>{below_the_lineB_costs_total || 0}</p>
    </Col>
    </Row>
    {/* TOTAL - BELOW THE LINE "B" PRODUCTION LABOUR AND COSTS */}
    <Row className='mt-3' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={9} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL - "B" LABOUR AND COSTS </p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Bold} mb-0`}>{b_labour_and_costs_total || 0}</p>
    </Col>
    </Row>
    </div>
    {/* "C" POST PRODUCTION ----------------------------------- */}
    <div className='px-3'>
    <Row className={ `${styles.OverviewBlue} mx-1 my-5 py-1 text-center`}>
    <Col md={12}>
    <h5 className={ `${styles.BoldBlack}`}>"C" POST PRODUCTION</h5>
    </Col>
    </Row>
    {/* POST PRODUCTION STAFF/FACILITIES*/}
    <Row>
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">42.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>POST PRODUCTION STAFF/FACILITIES</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">{postStaffFac_total}</p>
    </Col>
    </Row>
    {/* EDITING */}
    <Row>
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">43.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>EDITING</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">{editing_total}</p>
    </Col>
    </Row>
    {/* POST SOUND */}
    <Row>
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">44.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>POST SOUND</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">{postSound_total}</p>
    </Col>
    </Row>
    {/* VISUAL EFFECTS */}
    <Row>
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">45.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>VISUAL EFFECTS</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">{postVfx_total}</p>
    </Col>
    </Row>
    {/* POST LAB/VIDEO COPIES */}
    <Row>
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">46.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>POST PRODUCTION LAB/VIDEO COPIES</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">{postLab_total}</p>
    </Col>
    </Row>
    {/* TITLES/OPTICALS/STOCK FOOTAGE */}
    <Row>
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">47.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>TITLES/OPTICALS/STOCK FOOTAGE</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">{postTitles_total}</p>
    </Col>
    </Row>
    {/* VERSIONING/CLOSED-CAPTIONING/COPIES */}
    <Row>
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">48.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>VERSIONING/CLOSED-CAPTIONING/COPIES</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">{postVersion_total}</p>
    </Col>
    </Row>
    {/* TOTAL - POST PRODUCTION "C" */}
    <Row className='mt-3 mb-3' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={9} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL - POST PRODUCTION "C" </p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Bold} mb-0`}>{post_productionC_total || 0}</p>
    </Col>
    </Row>
    {/* TOTAL - BELOW "B" and "C" */}
    <Row className='mt-3 mb-3' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={9} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL - BELOW "B" and "C" </p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Bold} mb-0`}>{belowB_andC_total || 0}</p>
    </Col>
    </Row>
    {/* TOTAL - ABOVE/BELOW "A" "B" and "C" */}
    <Row className='mt-3 mb-3' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={9} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL - ABOVE/BELOW "A" "B" and "C" </p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Bold} mb-0`}>{above_belowABC_total || 0}</p>
    </Col>
    </Row>
    </div>
    {/* "D" OTHER --------------------------------------------- */}
    <div className='px-3'>
    <Row className={ `${styles.OverviewBlue} mx-1 my-5 py-1 text-center`}>
    <Col md={12}>
    <h5 className={ `${styles.BoldBlack}`}>"D" OTHER</h5>
    </Col>
    </Row>
    {/* PUBLICITY */}
    <Row>
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">49.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>PUBLICITY</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">{pub_total}</p>
    </Col>
    </Row>
    {/* INSURANCE */}
    <Row>
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">50.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>INSURANCE</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">{insur_total}</p>
    </Col>
    </Row>
    {/* GENERAL EXPENSES */}
    <Row>
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">51.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>GENERAL EXPENSES</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">{genEx_total}</p>
    </Col>
    </Row>
    {/* INDIRECT COSTS */}
    <Row>
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">51.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>INDIRECT COSTS</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className="mb-2">{indirCo_total}</p>
    </Col>
    </Row>
    {/* TOTAL - OTHER "D" */}
    <Row className='mt-3 mb-3' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={9} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL - OTHER "D" </p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Bold} mb-0`}>{otherD_total || 0}</p>
    </Col>
    </Row>
    </div>
    {/* TOTAL - A, B, C and D */}
    <div className='px-3 mt-3'>
    <Row className='mt-5' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-2`} md={8} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL - "A", "B", "C" and "D" </p>
    </Col>
    <Col md={1}></Col>
    <Col md={2} >
    <p className={`${styles.Bold} mb-0 my-2`}>{above_belowABCandD_total || 0}</p>
    </Col>
    </Row>
    </div>
    {/* CONTINGENCY/BOND ------------------------------------------- */}
    <div className='px-3 mt-3'>
    {/* Contingency */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={9} >
    <p className={`${styles.Underline}`}>Contingency</p>
    </Col>
    <Col md={2}>
    <p className={`${styles.Underline}`}>{contingency || 0} </p>
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
    <p className={`${styles.Underline}`}>{completion_bond || 0} </p>
    </Col>
    </Row>
    </div>
    {/* TOTAL - GRAND */}
    <div className='px-3 mt-3'>
    <Row className='mt-3 mb-3' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-3 py-3`} md={8} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL - GRAND </p>
    </Col>
    <Col md={1}></Col>
    <Col md={2} className="pt-3" >
    <p className={`${styles.Bold} mt-3 mb-0`}>{grand_total || 0}</p>
    </Col>
    </Row>
    </div>

    <h5
    className={`mt-1 mb-2 pl-5 py-1 text-center ${styles.SubTitle }`}>
      End Topsheet
        <span style={{ textTransform: 'none'}} 
        className={`float-right ${styles.Close } pr-3`} 
        onClick={() => setShowTop(false) } >Close</span>
    </h5>
    </div>
  )
}
export default BudgetTop