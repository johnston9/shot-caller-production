    days6th7th_unit_tran,
    days6th7th_tran,
    overtime_unit_tran,
    overtime_tran,
    holidays_unit_tran, 
    holidays_tran,
    box_rent_unit_tran,
    box_rent_tran,
    other_solo_tran,
    tp_coor_qty_prep,
    tp_coor_uno_prep,
    tp_coor_una_prep,
    tp_coor_rt_prep,
    tp_coor_qty_wrap,
    tp_coor_uno_wrap,
    tp_coor_una_wrap,
    tp_coor_rt_wrap,
    tp_cap_qty_prep,
    tp_cap_uno_prep,
    tp_cap_una_prep,
    tp_cap_rt_prep,
    tp_cap_qty_wrap,
    tp_cap_uno_wrap,
    tp_cap_una_wrap,
    tp_cap_rt_wrap,
    tp_man_qty_prep,
    tp_man_uno_prep,
    tp_man_una_prep,
    tp_man_rt_prep,
    tp_man_qty_wrap,
    tp_man_uno_wrap,
    tp_man_una_wrap,
    tp_man_rt_wrap,
    head_dr_qty_prep,
    head_dr_uno_prep,
    head_dr_una_prep,
    head_dr_rt_prep,
    head_dr_qty_wrap,
    head_dr_uno_wrap,
    head_dr_una_wrap,
    head_dr_rt_wrap,
    drive_qty_prep,
    drive_uno_prep,
    drive_una_prep,
    drive_rt_prep,
    drive_qty_wrap,
    drive_uno_wrap,
    drive_una_wrap,
    drive_rt_wrap,
    // Totals

  // tp coordinator
  // tp coordinator shoot Total postData 
  const [tpcoordinatorTotal, setTpcoordinatorTotal] = useState(0);
  // tp coordinator prep Total postData 
  const [tpcoorprepTotal, setTpcoorprepTotal] = useState(0);
  // tp coordinator wrap Total postData 
  const [tpcoorwrapTotal, setTpcoorwrapTotal] = useState(0);
  // tp coordinator all Total postData 
  const [tpcoorallTotal, setTpcoorallTotal] = useState(0);

  // tp captain
  // tp captain shoot Total postData 
  const [tpcaptainTotal, setTpcaptainTotal] = useState(0);
  // tp captain prep Total postData 
  const [tpcapprepTotal, setTpcapprepTotal] = useState(0);
  // tp captain wrap Total postData 
  const [tpcapwrapTotal, setTpcapwrapTotal] = useState(0);
  // tp captain all Total postData 
  const [tpcapallTotal, setTpcapallTotal] = useState(0);

  // tp manager
  // tp manager shoot Total postData 
  const [tpmanagerTotal, setTpmanagerTotal] = useState(0);
  // tp manager prep Total postData 
  const [tpmanprepTotal, setTpmanprepTotal] = useState(0);
  // tp manager wrap Total postData 
  const [tpmanwrapTotal, setTpmanwrapTotal] = useState(0);
  // tp manager all Total postData 
  const [tpmanallTotal, setTpmanallTotal] = useState(0);

  // head driver
  // head driver shoot Total postData 
  const [headdriverTotal, setHeaddriverTotal] = useState(0);
  // head driver prep Total postData 
  const [headdriprepTotal, setHeaddriprepTotal] = useState(0);
  // head driver wrap Total postData 
  const [headdriwrapTotal, setHeaddriwrapTotal] = useState(0);
  // head driver all Total postData 
  const [headdriallTotal, setHeaddriallTotal] = useState(0);

  // drivers
  // drivers shoot Total postData 
  const [driversTotal, setDriversTotal] = useState(0);
  // drivers prep Total postData 
  const [driverprepTotal, setDriverprepTotal] = useState(0);
  // drivers wrap Total postData 
  const [driverwrapTotal, setDriverwrapTotal] = useState(0);
  // drivers all Total postData 
  const [driverallTotal, setDriverallTotal] = useState(0);

  // Transport Labour Total postData 
  const [transportlabourTotal, setTransportlabourTotal] = useState(0);

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