    days6th7th_unit_sound,
    days6th7th_sound,
    overtime_unit_sound,
    overtime_sound,
    holidays_unit_sound, 
    holidays_sound,
    box_rent_unit_sound,
    box_rent_sound,
    other_solo_sound,
    so_mix_qty_prep,
    so_mix_uno_prep,
    so_mix_una_prep,
    so_mix_rt_prep,
    so_mix_qty_wrap,
    so_mix_uno_wrap,
    so_mix_una_wrap,
    so_mix_rt_wrap,
    boom_op_qty_prep,
    boom_op_uno_prep,
    boom_op_una_prep,
    boom_op_rt_prep,
    boom_op_qty_wrap,
    boom_op_uno_wrap,
    boom_op_una_wrap,
    boom_op_rt_wrap,
    cab_wran_qty_prep,
    cab_wran_uno_prep,
    cab_wran_una_prep,
    cab_wran_rt_prep,
    cab_wran_qty_wrap,
    cab_wran_uno_wrap,
    cab_wran_una_wrap,
    cab_wran_rt_wrap,
    ot_sound_qty_prep,
    ot_sound_uno_prep,
    ot_sound_una_prep,
    ot_sound_rt_prep,
    ot_sound_qty_wrap,
    ot_sound_uno_wrap,
    ot_sound_una_wrap,
    ot_sound_rt_wrap,
    // Totals
  // sound mixer
  // sound mixer shoot Total postData 
  const [soundmixerTotal, setSoundmixerTotal] = useState(0);
  // sound mixer prep Total postData 
  const [somixprepTotal, setSomixprepTotal] = useState(0);
  // sound mixer wrap Total postData 
  const [somixwrapTotal, setSomixwrapTotal] = useState(0);
  // sound mixer all Total postData 
  const [somixallTotal, setSomixallTotal] = useState(0);

    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>19.10</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Sound Mixer</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="sound_mixer_qty" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="sound_mixer_qty"
        value={sound_mixer_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.sound_mixer_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="sound_mixer_uno" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="sound_mixer_uno"
        value={sound_mixer_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.sound_mixer_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="sound_mixer_una" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="sound_mixer_una"
        value={sound_mixer_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.sound_mixer_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="sound_mixer_rt" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="sound_mixer_rt"
        value={sound_mixer_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.sound_mixer_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="soundmixerTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="soundmixerTotal"
        value={soundmixerTotal}
        readOnly
            />
    </Form.Group>
    {errors?.soundmixerTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>

  // boom operator
  // boom operator shoot Total postData 
  const [boomoperatorTotal, setBoomoperatorTotal] = useState(0);
  // boom operator prep Total postData 
  const [boomopprepTotal, setBoomopprepTotal] = useState(0);
  // boom operator wrap Total postData 
  const [boomopwrapTotal, setBoomopwrapTotal] = useState(0);
  // boom operator all Total postData 
  const [boomopallTotal, setBoomopallTotal] = useState(0);

  // cable wrangler
  // cable wrangler shoot Total postData 
  const [cablewranglerTotal, setCablewranglerTotal] = useState(0);
  // cable wrangler prep Total postData 
  const [cawranprepTotal, setCawranprepTotal] = useState(0);
  // cable wrangler wrap Total postData 
  const [cawranwrapTotal, setCawranwrapTotal] = useState(0);
  // cable wrangler all Total postData 
  const [cawranallTotal, setCawranallTotal] = useState(0);

  // other sound labour
  // other sound labour shoot Total postData 
  const [othersoundlabourTotal, setOthersoundlabourTotal] = useState(0);
  // other sound labour prep Total postData 
  const [otsoundprepTotal, setOtsoundprepTotal] = useState(0);
  // other sound labour wrap Total postData 
  const [otsoundwrapTotal, setOtsoundwrapTotal] = useState(0);
  // other sound labour all Total postData 
  const [otsoundallTotal, setOtsoundallTotal] = useState(0);

  // Sound Labour Total postData 
  const [soundlabourTotal, setSoundlabourTotal] = useState(0);

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