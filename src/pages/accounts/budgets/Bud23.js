days6th7th_unit_wran: "",
days6th7th_wran: 0,
overtime_unit_wran: "",
overtime_wran: 0,
holidays_unit_wran: "", 
holidays_wran: 0,
box_rent_unit_wran: "",
box_rent_wran: 0,
other_solo_wran: 0,
he_wran_qty_prep: 0,
he_wran_uno_prep: 0,
he_wran_una_prep: "",
he_wran_rt_prep: 0,
he_wran_qty_wrap: 0,
he_wran_uno_wrap: 0,
he_wran_una_wrap: "",
he_wran_rt_wrap: 0,
oth_wran_qty_prep: 0,
oth_wran_uno_prep: 0,
oth_wran_una_prep: "",
oth_wran_rt_prep: 0,
oth_wran_qty_wrap: 0,
oth_wran_uno_wrap: 0,
oth_wran_una_wrap: "",
oth_wran_rt_wrap: 0,
  // head wrangler
  // head wrangler shoot Total postData
  const [headwranglerTotal, setHeadwranglerTotal] = useState(0);
  // head wrangler prep Total postData
  const [hewranprepTotal, setHewranprepTotal] = useState(0);
  // head wrangler wrap Total postData
  const [hewranwrapTotal, setHewranwrapTotal] = useState(0);
  // head wrangler all Total postData
  const [hewranallTotal, setHewranallTotal] = useState(0);

  // other wrangling labour
  // other wrangling labour shoot Total postData
  const [otherwranglinglabourTotal, setOtherwranglinglabourTotal] = useState(0);
  // other wrangling labour prep Total postData
  const [othwranlabprepTotal, setOtwranlabprepTotal] = useState(0);
  // other wrangling labour wrap Total postData
  const [othwranlabwrapTotal, setOtwranlabwrapTotal] = useState(0);
  // other wrangling labour all Total postData
  const [othwranlaballTotal, setOtwranlaballTotal] = useState(0);

  // Wrangling Labour Total postData 
  const [wranglerlabourTotal, setWranglerlabourTotal] = useState(0);
//
days6th7th_unit,
days6th7th, 
overtime_unit, 
overtime, 
holidays_unit, 
holidays, 
box_rent_unit,
box_rent,
other,
fringes_taxes,
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