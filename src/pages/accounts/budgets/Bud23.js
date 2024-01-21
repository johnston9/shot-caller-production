  days6th7th_unit_cam,
  days6th7th_cam,
  overtime_unit_cam,
  overtime_cam,
  holidays_unit_cam, 
  holidays_cam,
  box_rent_unit_cam,
  box_rent_cam,
  other_solo_cam,
  dop_qty_prep,
  dop_uno_prep,
  dop_una_prep,
  dop_rt_prep,
  dop_qty_wrap,
  dop_uno_wrap,
  dop_una_wrap,
  dop_rt_wrap,
  cam_op_qty_prep,
  cam_op_uno_prep,
  cam_op_una_prep,
  cam_op_rt_prep,
  cam_op_qty_wrap,
  cam_op_uno_wrap,
  cam_op_una_wrap,
  cam_op_rt_wrap,
  cam_ac1_qty_prep,
  cam_ac1_uno_prep,
  cam_ac1_una_prep,
  cam_ac1_rt_prep,
  cam_ac1_qty_wrap,
  cam_ac1_uno_wrap,
  cam_ac1_una_wrap,
  cam_ac1_rt_wrap,
  cam_ac2_qty_prep,
  cam_ac2_uno_prep,
  cam_ac2_una_prep,
  cam_ac2_rt_prep,
  cam_ac2_qty_wrap,
  cam_ac2_uno_wrap,
  cam_ac2_una_wrap,
  cam_ac2_rt_wrap,
  dit_qty_prep,
  dit_uno_prep,
  dit_una_prep,
  dit_rt_prep,
  dit_qty_wrap,
  dit_uno_wrap,
  dit_una_wrap,
  dit_rt_wrap,
  stead_qty_prep
  stead_uno_prep,
  stead_una_prep,
  stead_rt_prep,
  stead_qty_wrap,
  stead_uno_wrap
  stead_una_wrap,
  stead_rt_wrap,
  cam_pa_qty_prep,
  cam_pa_uno_prep,
  cam_pa_una_prep,
  cam_pa_rt_prep,
  cam_pa_qty_wrap,
  cam_pa_uno_wrap,
  cam_pa_una_wrap,
  cam_pa_rt_wrap,
  dro_pil_qty_prep,
  dro_pil_uno_prep,
  dro_pil_una_prep,
  dro_pil_rt_prep,
  dro_pil_qty_wrap,
  dro_pil_uno_wrap,
  dro_pil_una_wrap,
  dro_pil_rt_wrap,
  ot_cam_qty_prep,
  ot_cam_uno_prep,
  ot_cam_una_prep,
  ot_cam_rt_prep,
  ot_cam_qty_wrap,
  ot_cam_uno_wrap,
  ot_cam_una_wrap,
  ot_cam_rt_wrap,
  // Totals

  // dop
  // dop shoot Total postData 
  const [dopTotal, setDopTotal] = useState(0);
  // dop prep Total postData 
  const [dopprepTotal, setDopprepTotal] = useState(0);
  // dop wrap Total postData 
  const [dopwrapTotal, setDopwrapTotal] = useState(0);
  // dop all Total postData 
  const [dopallTotal, setDopallTotal] = useState(0);

  // Camera Operator
  // Camera Operator shoot Total postData 
  const [cameraopTotal, setCameraopTotal] = useState(0);
  // Camera Operator prep Total postData 
  const [camopprepTotal, setCamopprepTotal] = useState(0);
  // Camera Operator wrap Total postData 
  const [camopwrapTotal, setCamopwrapTotal] = useState(0);
  // Camera Operator all Total postData 
  const [camopallTotal, setCamopallTotal] = useState(0);

  // 1st Assistant Camera
  // 1st Assistant Camera shoot Total postData 
  const [camac1Total, setCamac1Total] = useState(0);
  // 1st Assistant Camera prep Total postData 
  const [camac1prepTotal, setCamac1prepTotal] = useState(0);
  // 1st Assistant Camera wrap Total postData 
  const [camac1wrapTotal, setCamac1wrapTotal] = useState(0);
  // 1st Assistant Camera all Total postData 
  const [camac1allTotal, setCamac1allTotal] = useState(0);

  // 2nd Assistant Camera
  // 2nd Assistant Camera shoot Total postData 
  const [camac2Total, setCamac2Total] = useState(0);
  // 2nd Assistant Camera prep Total postData 
  const [camac2prepTotal, setCamac2prepTotal] = useState(0);
  // 2nd Assistant Camera wrap Total postData 
  const [camac2wrapTotal, setCamac2wrapTotal] = useState(0);
  // 2nd Assistant Camera all Total postData 
  const [camac2allTotal, setCamac2allTotal] = useState(0);

  // DIT Total
  // DIT shoot Total postData 
  const [ditTotal, setDitTotal] = useState(0);
  // DIT prep Total postData 
  const [ditprepTotal, setDitprepTotal] = useState(0);
  // DIT wrap Total postData 
  const [ditwrapTotal, setDitwrapTotal] = useState(0);
  // DIT prep Total postData 
  const [ditallTotal, setDitallTotal] = useState(0);

  // Steadicam
  // Steadicam shoot Total postData 
  const [steadicamTotal, setSteadicamTotal] = useState(0);
  // Steadicam prep Total postData 
  const [stecamprepTotal, setStecamprepTotal] = useState(0);
  // Steadicam wrap Total postData 
  const [stecamwrapTotal, setStecamwrapTotal] = useState(0);
  // Steadicam all Total postData 
  const [stecamallTotal, setStecamallTotal] = useState(0);

  // Camera PA
  // Camera PA shoot Total postData 
  const [campaTotal, setCampaTotal] = useState(0);
  // Camera PA prep Total postData 
  const [campaprepTotal, setCampaprepTotal] = useState(0);
  // Camera PA wrap Total postData 
  const [campawrapTotal, setCampawrapTotal] = useState(0);
  // Camera PA all Total postData 
  const [campaallTotal, setCampaallTotal] = useState(0);

  // Drone Pilot
  // Drone Pilot shoot Total postData 
  const [dronepilotTotal, setDronepilotTotal] = useState(0);
  // Drone Pilot prep Total postData 
  const [dronpiprepTotal, setDronpiprepTotal] = useState(0);
  // Drone Pilot wrap Total postData 
  const [dronpiwrapTotal, setDronpiwrapTotal] = useState(0);
  // Drone Pilot all Total postData 
  const [dronpiallTotal, setDronpiallTotal] = useState(0);

  // other cam
  // other cam shoot Total postData 
  const [othercamTotal, setOthercamTotal] = useState(0);
  // other cam prep Total postData 
  const [othcamprepTotal, setOthcamprepTotal] = useState(0);
  // other cam wrap Total postData 
  const [othcamwrapTotal, setOthcamwrapTotal] = useState(0);
  // other cam all Total postData 
  const [othcamallTotal, setOthcamallTotal] = useState(0);

  // Stills
  // Stills shoot Total postData 
  const [stillsTotal, setStillsTotal] = useState(0);

  // Camera Labour Total postData 
  const [cameralabourTotal, setCameralabourTotal] = useState(0);

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