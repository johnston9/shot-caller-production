// replace(/\D/g,'') - works but no decimal
// handleChange1 - replace(/[^0-9.]/g, '')- works with decimal
const handleChangeCast = (event) => {
    setPostDataCast({
    ...postDataCast,
    [event.target.name]: event.target.value.replace(/[^0-9.]/g, ''),
    });
};
// .toFixed()

    days6th7th_unit_tv,
    days6th7th_tv,
    overtime_unit_tv,
    overtime_tv,
    holidays_unit_tv, 
    holidays_tv,
    box_rent_unit_tv,
    box_rent_tv,
    other_solo_tv,
    tec_sup_qty_prep,
    tec_sup_uno_prep,
    tec_sup_una_prep,
    tec_sup_rt_prep,
    tec_sup_qty_wrap,
    tec_sup_uno_wrap,
    tec_sup_una_wrap,
    tec_sup_rt_wrap,
    tec_dir_qty_prep,
    tec_dir_uno_prep,
    tec_dir_una_prep,
    tec_dir_rt_prep,
    tec_dir_qty_wrap,
    tec_dir_uno_wrap,
    tec_dir_una_wrap,
    tec_dir_rt_wrap,
    flo_man_qty_prep,
    flo_man_uno_prep,
    flo_man_una_prep,
    flo_man_rt_prep,
    flo_man_qty_wrap,
    flo_man_uno_wrap,
    flo_man_una_wrap,
    flo_man_rt_wrap,
    lig_dir_qty_prep,
    lig_dir_uno_prep,
    lig_dir_una_prep,
    lig_dir_rt_prep,
    lig_dir_qty_wrap,
    lig_dir_uno_wrap,
    lig_dir_una_wrap,
    lig_dir_rt_wrap,
    boardm_qty_prep,
    boardm_uno_prep,
    boardm_una_prep,
    boardm_rt_prep,
    boardm_qty_wrap,
    boardm_uno_wrap,
    boardm_una_wrap,
    boardm_rt_wrap,
    audio_qty_prep,
    audio_uno_prep,
    audio_una_prep,
    audio_rt_prep,
    audio_qty_wrap,
    audio_uno_wrap,
    audio_una_wrap,
    audio_rt_wrap,
    vtr_op_qty_prep,
    vtr_op_uno_prep,
    vtr_op_una_prep,
    vtr_op_rt_prep,
    vtr_op_qty_wrap,
    vtr_op_uno_wrap,
    vtr_op_una_wrap,
    vtr_op_rt_wrap,
    stageh_qty_prep,
    stageh_uno_prep,
    stageh_una_prep,
    stageh_rt_prep,
    stageh_qty_wrap,
    stageh_uno_wrap,
    stageh_una_wrap,
    stageh_rt_wrap,
    oth_tv_qty_prep,
    oth_tv_uno_prep,
    oth_tv_una_prep,
    oth_tv_rt_prep,
    oth_tv_qty_wrap,
    oth_tv_uno_wrap,
    oth_tv_una_wrap,
    oth_tv_rt_wrap,
    // Totals

  // Technical Supervisor
  // Technical Supervisor shoot Total postData 
  const [techsuperTotal, setTechsuperTotal] = useState(0);
  // Technical Supervisor prep Total postData 
  const [tecsupprepTotal, setTecsupprepTotal] = useState(0);
  // Technical Supervisor wrap Total postData 
  const [tecsupwrapTotal, setTecsupwrapTotal] = useState(0);
  // Technical Supervisor all Total postData 
  const [tecsupallTotal, setTecsupallTotal] = useState(0);

  // Technical Director
  // Technical Director shoot Total postData 
  const [techdirectTotal, setTechdirectTotal] = useState(0);
  // Technical Director prep Total postData 
  const [tecdirprepTotal, setTecdirprepTotal] = useState(0);
  // Technical Director wrap Total postData 
  const [tecdirwrapTotal, setTecdirwrapTotal] = useState(0);
  // Technical Director all Total postData 
  const [tecdirallTotal, setTecdirallTotal] = useState(0);

  // Floor Manager
  // Floor Manager shoot Total postData 
  const [floormanTotal, setFloormanTotal] = useState(0);
  // Floor Manager prep Total postData 
  const [flomanprepTotal, setFlomanprepTotal] = useState(0);
  // Floor Manager wrap Total postData 
  const [flomanwrapTotal, setFlomanwrapTotal] = useState(0);
  // Floor Manager all Total postData 
  const [flomanallTotal, setFlomanallTotal] = useState(0);

  // Lighting Director
  // Lighting Director shoot Total postData 
  const [lightdirectTotal, setLightdirectTotal] = useState(0);
  // Lighting Director prep Total postData 
  const [ligdirprepTotal, setLigdirprepTotal] = useState(0);
  // Lighting Director wrap Total postData 
  const [ligdirwrapTotal, setLigdirwrapTotal] = useState(0);
  // Lighting Director all Total postData 
  const [ligdirallTotal, setLigdirallTotal] = useState(0);

  // Boardman
  // Boardman Total shoot postData 
  const [boardmanTotal, setBoardmanTotal] = useState(0);
  // Boardman Total prep postData 
  const [boamanprepTotal, setBoamanprepTotal] = useState(0);
  // Boardman Total wrap postData 
  const [boamanwrapTotal, setBoamanwrapTotal] = useState(0);
  // Boardman Total all postData 
  const [boamanallTotal, setBoamanallTotal] = useState(0);

  // Audio
  // Audio shoot Total postData 
  const [audioTotal, setAudioTotal] = useState(0);
  // Audio prep Total postData 
  const [audprepTotal, setAudprepTotal] = useState(0);
  // Audio wrap Total postData 
  const [audwrapTotal, setAudwrapTotal] = useState(0);
  // Audio all Total postData 
  const [audallTotal, setAudallTotal] = useState(0);

  // VRT Operator
  // VRT Operator shoot Total postData 
  const [vtroperatorTotal, setVtroperatorTotal] = useState(0);
  // VRT Operator prep Total postData 
  const [vtropprepTotal, setVtropprepTotal] = useState(0);
  // VRT Operator wrap Total postData 
  const [vtropwrapTotal, setVtropwrapTotal] = useState(0);
  // VRT Operator all Total postData 
  const [vtropallTotal, setVtropallTotal] = useState(0);

  // Stagehands
  // Stagehands shoot Total postData 
  const [stagehandsTotal, setStagehandsTotal] = useState(0);
  // Stagehands prep Total postData 
  const [stagehprepTotal, setStagehprepTotal] = useState(0);
  // Stagehands wrap Total postData 
  const [stagehwrapTotal, setStagehwrapTotal] = useState(0);
  // Stagehands all Total postData 
  const [stagehallTotal, setStagehallTotal] = useState(0);

  // Other TV Labour
  // Other TV Labour shoot Total postData 
  const [othertvTotal, setOthertvTotal] = useState(0);
  // Other TV Labour prep Total postData 
  const [othtvprepTotal, setOthtvprepTotal] = useState(0);
  // Other TV Labour wrap Total postData 
  const [othtvwrapTotal, setOthtvwrapTotal] = useState(0);
  // Other TV Labour all Total postData 
  const [othtvallTotal, setOthtvallTotal] = useState(0);

  // TV Specific Labour Total postData 
  const [tvspecificlabourTotal, setTvspecificlabourTotal] = useState(0);

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