{/* TITLES */}
<Row className={ `mb-2 py-0`} >
<Col md={1} ></Col>
<Col className={ `${styles.Overview} py-1`} md={1} >
<p className="mb-0">ACCT</p>
</Col>
<Col className={ `${styles.Overview} py-1`} md={3} >
<p className="mb-0">Description</p>
</Col>
<Col className={`${styles.Overview} text-center py-1`} md={1} >
<p className="mb-0">#</p>
</Col>
<Col className={`${styles.Overview} text-center py-1`} md={1} >
<p># Unit</p>
</Col>
<Col md={1} className={`${styles.Overview} text-center py-1`} >
<p className="mb-0">Unit</p>
</Col>
<Col md={1} className={`${styles.Overview} text-center py-1`} >
<p className="mb-0">Price</p>
</Col>
<Col md={2} className={`${styles.Overview} text-center py-1`} >
<p className="mb-0">Total</p>
</Col>
<Col md={1}></Col>
</Row>

    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>

// <Col md={1} ></Col>

// replace(/\D/g,'') - works but no decimal
// handleChange1 - replace(/[^0-9.]/g, '')- works with decimal
const handleChangeCast = (event) => {
    setPostDataCast({
    ...postDataCast,
    [event.target.name]: event.target.value.replace(/[^0-9.]/g, ''),
    });
};
// .toFixed()

//   15/02 - 2900      -  103
//   01/02 - 2797 3866 -   37
//   17/01 - 2760 3829 -  346
//   04/01 - 2414 3483 - -288
//   20/12 - 2711 3771 -  240
//   07/12 - 2471 3531 -  220
//   23/11 - 2259 3319
    <div>

    {/* Production Manager */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>07.10</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Production Manager</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
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
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
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
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
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
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
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
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    
    {/* 6th7 days */}
    <div>
    {/* 6th/7th Days */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>11.60</p>
    </Col>
    <Col md={5}>
    <p className={`${styles.BoldBlack}`}>6th/7th Days</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{days6th7th_unit_prop} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{days6th7th_prop || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Overtime */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>11.70</p>
    </Col>
    <Col md={5}>
    <p className={`${styles.Underline}`}>Overtime</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{overtime_unit_prop} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{overtime_prop || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Holidays */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>11.80</p>
    </Col>
    <Col md={5}>
    <p className={`${styles.Underline}`}>Holidays</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{holidays_unit_prop} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{holidays_prop || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Box Rentals */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>11.90</p>
    </Col>
    <Col md={5}>
    <p className={`${styles.Underline}`}>Box Rentals</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{box_rent_unit_prop} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{box_rent_prop || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Other */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>11.91</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_property || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Fringes Taxes */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>11.92</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Fringes & Taxes</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{fringes_taxes_property || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Property Total */}
    <Row className='mt-3 mb-1' >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL PROPERTY LABOUR</p>
    </Col>
    <Col md={1} >
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{propertylabour_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>

    {/* SECTION BLOCK */}
    {/* CAMERA ----------------------------------------------- */}
    <div className='mt-4'>
    <Row>
    <Col md={1} ></Col>
    <Col xs={1}>
    <p className={`${styles.BoldBlack}`}>16.00</p>
    </Col>
    <Col xs={8}>
    <p className={ `${styles.BoldBlack}`}>CAMERA LABOUR</p>
    </Col>
    </Row>
    {/* TITLES */}
    <Row className={ `mb-2 py-0`} >
    <Col md={1} ></Col>
    <Col className={ `${styles.Overview} py-1`} md={1} >
    <p className="mb-0">ACCT</p>
    </Col>
    <Col className={ `${styles.Overview} py-1`} md={3} >
    <p className="mb-0">Description</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p className="mb-0">#</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Price</p>
    </Col>
    <Col md={2} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Total</p>
    </Col>
    <Col md={1}></Col>
    </Row>
    {/* DOP */}
    <Row  >
    <Col md={1} >
    <p className={`${styles.Underline}`}>16.10</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>DOP {days6th7th_unit_ele} {days6th7th_ele} </p>
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
    </div>

// Budget Top Old
{/* old */}
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
    // below

// pro staff other unit
{/* <Form.Group controlId="other_unit_pro_sta" 
        className={`${styles.Width95} text-center py-0 my-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_unit_pro_sta"
        value={other_unit_pro_sta}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.other_unit_pro_sta?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))} */}

// handlechanges

// handleChange3 - parseFloat(event.target.value) ?  
    // const handleChange3 = (event) => {
    //     setPostDataCamera({
    //     ...postDataCamera,
    //     [event.target.name]: parseFloat(event.target.value) ? parseFloat(event.target.value) : '',
    //     });
    // }; 

    // handleChange4 - Use text="number" in input box
    // const handleChange4 = (event) => {
    //     setPostDataCamera({
    //     ...postDataCamera,
    //     [event.target.name]: parseFloat(event.target.value) || 0,
    //     });
    // }; 

    // handleChange7 - Use parseFloat only - - doesn't work first go
    // const handleChange7 = (event) => {
    //     setPostDataCamera({
    //     ...postDataCamera,
    //     [event.target.name]: parseFloat(event.target.value) || 0,
    //     });
    // };

    // handleChange2 - const re = /\d+\.?\d*/ - doesn't work
    // const handleChange2 = (event) => {
    //     const re = new RegExp('/\d+\.?\d*/');
    //     if (re.test(event.target.value)) {
    //       setPostDataCamera({
    //       ...postDataCamera,
    //       [event.target.name]: event.target.value,
    //       });
    //     }
    // };

    // handleChange9 - replace("[^\\d.]", ""); - doesn't work
    // const handleChange6 = (event) => {
    //     setPostDataCamera({
    //     ...postDataCamera,
    //     [event.target.name]: parseFloat(event.target.value.replace("[^\\d.]", "") || 0 ),
    //     });
    // };

    // handleChange6 - replace(/[^0-9.]/g, '') - doesn't work
    // const handleChange6 = (event) => {
    //     setPostDataCamera({
    //     ...postDataCamera,
    //     [event.target.name]: parseFloat(event.target.value.replace(/[^0-9.]/g, '') || 0 ),
    //     });
    // };

// hair makeup dailies prep Total postData 
const [makdayprepTotal, setMakdayprepTotal] = useState(0);
// hair makeup dailies wrap Total postData 
const [makdaywrapTotal, setMakdaywrapTotal] = useState(0);
// hair makeup dailies all Total postData 
const [makdayallTotal, setMakdayallTotal] = useState(0);
