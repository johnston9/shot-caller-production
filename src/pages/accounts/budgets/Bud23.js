    days6th7th_unit_grip,
    days6th7th_grip,
    overtime_unit_grip,
    overtime_grip,
    holidays_unit_grip, 
    holidays_grip,
    box_rent_unit_grip,
    box_rent_grip,
    other_solo_grip,
    k_grip_qty_prep,
    k_grip_uno_prep,
    k_grip_una_prep,
    k_grip_rt_prep,
    k_grip_qty_wrap,
    k_grip_uno_wrap,
    k_grip_una_wrap,
    k_grip_rt_wrap,
    bb_grip_qty_prep,
    bb_grip_uno_prep,
    bb_grip_una_prep,
    bb_grip_rt_prep,
    bb_grip_qty_wrap,
    bb_grip_uno_wrap,
    bb_grip_una_wrap,
    bb_grip_rt_wrap,
    grips_qty_prep,
    grips_uno_prep,
    grips_una_prep,
    grips_rt_prep,
    grips_qty_wrap,
    grips_uno_wrap,
    grips_una_wrap,
    grips_rt_wrap,
    dol_grip_qty_prep,
    dol_grip_uno_prep,
    dol_grip_una_prep,
    dol_grip_rt_prep,
    dol_grip_qty_wrap,
    dol_grip_uno_wrap,
    dol_grip_una_wrap,
    dol_grip_rt_wrap,
    sw_grips_qty_prep,
    sw_grips_uno_prep,
    sw_grips_una_prep,
    sw_grips_rt_prep,
    sw_grips_qty_wrap,
    sw_grips_uno_wrap,
    sw_grips_una_wrap,
    sw_grips_rt_wrap,
    oth_grip_qty_prep,
    oth_grip_uno_prep,
    oth_grip_una_prep,
    oth_grip_rt_prep,
    oth_grip_qty_wrap,
    oth_grip_uno_wrap,
    oth_grip_una_wrap,
    oth_grip_rt_wrap,
    // Totals

  // key grip
  // key grip shoot Total postData 
  const [keygripTotal, setKeygripTotal] = useState(0);
  // key grip prep Total postData 
  const [kgripprepTotal, setKgripprepTotal] = useState(0);
  // key grip wrap Total postData 
  const [kgripwrapTotal, setKgripwrapTotal] = useState(0);
  // key grip all Total postData 
  const [kgripallTotal, setKgripallTotal] = useState(0);

  // best boy grip
  // best boy grip shoot Total postData 
  const [bestboygripTotal, setBestboygripTotal] = useState(0);
  // best boy grip prep Total postData 
  const [bbgripprepTotal, setBbgripprepTotal] = useState(0);
  // best boy grip wrap Total postData 
  const [bbgripwrapTotal, setBbgripwrapTotal] = useState(0);
  // best boy grip all Total postData 
  const [bbgripallTotal, setBbgripallTotal] = useState(0);

  // grips
  // grips shoot Total postData 
  const [gripsTotal, setGripsTotal] = useState(0);
  // grips prep Total postData 
  const [gripsprepTotal, setGripsprepTotal] = useState(0);
  // grips wrap Total postData 
  const [gripswrapTotal, setGripswrapTotal] = useState(0);
  // grips all Total postData 
  const [gripsallTotal, setGripsallTotal] = useState(0);

  // dolly crane grip
  // dolly crane grip shoot Total postData 
  const [dollycranegripTotal, setDollycranegripTotal] = useState(0);
  // dolly crane grip prep Total postData 
  const [dolgripprepTotal, setDolgripprepTotal] = useState(0);
  // dolly crane grip wrap Total postData 
  const [dolgripwrapTotal, setDolgripwrapTotal] = useState(0);
  // dolly crane grip all Total postData 
  const [dolgripallTotal, setDolgripallTotal] = useState(0);

  // swing grips
  // swing grips shoot Total postData 
  const [swinggripsTotal, setSwinggripsTotal] = useState(0);
  // swing grips prep Total postData 
  const [swigripsprepTotal, setSwigripsprepTotal] = useState(0);
  // swing grips wrap Total postData 
  const [swigripswrapTotal, setSwigripswrapTotal] = useState(0);
  // swing grips all Total postData 
  const [swigripsallTotal, setSwigripsallTotal] = useState(0);

  // other grip labour 
  // other grip labour shoot Total postData 
  const [othergriplabourTotal, setOthergriplabourTotal] = useState(0);
  // other grip labour prep Total postData 
  const [othgripprepTotal, setOthgripprepTotal] = useState(0);
  // other grip labour wrap Total postData 
  const [othgripwrapTotal, setOthgripwrapTotal] = useState(0);
  // other grip labour all Total postData 
  const [othgripallTotal, setOthgripallTotal] = useState(0);

  // dailies grip Total postData 
  const [dailiesgripTotal, setDailiesgripTotal] = useState(0);

  // Grip Labour Total postData 
  const [griplabourTotal, setGriplabourTotal] = useState(0);

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