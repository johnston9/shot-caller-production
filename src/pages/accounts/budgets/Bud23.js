  days6th7th_unit_ele,
  days6th7th_ele,
  overtime_unit_ele,
  overtime_ele,
  holidays_unit_ele, 
  holidays_ele,
  box_rent_unit_ele,
  box_rent_ele,
  other_solo_ele,
  gaf_qty_prep,
  gaf_uno_prep,
  gaf_una_prep,
  gaf_rt_prep,
  gaf_qty_wrap,
  gaf_uno_wrap,
  gaf_una_wrap,
  gaf_rt_wrap,
  b_boy_qty_prep,
  b_boy_uno_prep,
  b_boy_una_prep,
  b_boy_rt_prep,
  b_boy_qty_wrap,
  b_boy_uno_wrap,
  b_boy_una_wrap,
  b_boy_rt_wrap,
  elec_qty_prep,
  elec_uno_prep,
  elec_una_prep,
  elec_rt_prep,
  elec_qty_wrap,
  elec_uno_wrap,
  elec_una_wrap,
  elec_rt_wrap,
  d_elec_qty_prep,
  d_elec_uno_prep,
  d_elec_una_prep,
  d_elec_rt_prep,
  d_elec_qty_wrap,
  d_elec_uno_wrap,
  d_elec_una_wrap,
  d_elec_rt_wrap,
  gen_op_qty_prep,
  gen_op_uno_prep,
  gen_op_una_prep,
  gen_op_rt_prep,
  gen_op_qty_wrap,
  gen_op_uno_wrap,
  gen_op_una_wrap,
  gen_op_rt_wrap,
  ot_el_qty_prep,
  ot_el_uno_prep,
  ot_el_una_prep,
  ot_el_rt_prep,
  ot_el_qty_wrap,
  ot_el_uno_wrap,
  ot_el_una_wrap,
  ot_el_rt_wrap,
  // Totals

  // gaffer
  // gaffer shoot Total postData 
  const [gafferTotal, setGafferTotal] = useState(0);
  // gaffer prep Total postData 
  const [gafprepTotal, setGafprepTotal] = useState(0);
  // gaffer wrap Total postData 
  const [gafwrapTotal, setGafwrapTotal] = useState(0);
  // gaffer all Total postData 
  const [gafallTotal, setGafallTotal] = useState(0);

  // best boy
  // best boy shoot Total postData 
  const [bestboyTotal, setBestboyTotal] = useState(0);
  // best boy prep Total postData 
  const [bboyprepTotal, setBboyprepTotal] = useState(0);
  // best boy wrap Total postData 
  const [bboywrapTotal, setBboywrapTotal] = useState(0);
  // best boy all Total postData 
  const [bboyallTotal, setBboyallTotal] = useState(0);

  // electrician
  // electrician shoot Total postData 
  const [electricianTotal, setElectricianTotal] = useState(0);
  // electrician prep Total postData 
  const [elecprepTotal, setElecprepTotal] = useState(0);
  // electrician wrap Total postData 
  const [elecwrapTotal, setElecwrapTotal] = useState(0);
  // electrician all Total postData 
  const [elecallTotal, setElecallTotal] = useState(0);

  // generator operator
  // generator operator shoot Total postData 
  const [generatoropTotal, setGeneratoropTotal] = useState(0);
  // generator operator prep Total postData 
  const [genopprepTotal, setGenopprepTotal] = useState(0);
  // generator operator wrap Total postData 
  const [genopwrapTotal, setGenopwrapTotal] = useState(0);
  // generator operator all Total postData 
  const [genopallTotal, setGenopallTotal] = useState(0);

  // other electric
  // other electric shoot Total postData 
  const [otherelectricTotal, setOtherelectricTotal] = useState(0);
  // other electric prep Total postData 
  const [otelecprepTotal, setOtelecprepTotal] = useState(0);
  // other electric wrap Total postData 
  const [otelecwrapTotal, setOtelecwrapTotal] = useState(0);
  // other electric all Total postData 
  const [otelecallTotal, setOtelecallTotal] = useState(0);

  // dailies electric
  // dailies electric shoot Total postData 
  const [dailieselecTotal, setDailieselecTotal] = useState(0);
  // dailies electric prep Total postData 
  const [daelecprepTotal, setDaelecprepTotal] = useState(0);
  // dailies electric wrap Total postData 
  const [daelecwrapTotal, setDaelecwrapTotal] = useState(0);
  // dailies electric all Total postData 
  const [daelecallTotal, setDaelecallTotal] = useState(0);

  // Electric Labour Total postData 
  const [electriclabourTotal, setElectriclabourTotal] = useState(0);

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