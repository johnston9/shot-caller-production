    days6th7th_unit_prop,
    days6th7th_prop,
    overtime_unit_prop,
    overtime_prop,
    holidays_unit_prop, 
    holidays_prop,
    box_rent_unit_prop,
    box_rent_prop,
    pro_mas_qty_prep,
    pro_mas_uno_prep,
    pro_mas_una_prep,
    pro_mas_rt_prep,
    pro_mas_qty_wrap,
    pro_mas_uno_wrap,
    pro_mas_una_wrap,
    pro_mas_rt_wrap,
    as_pro_ma_qty_prep,
    as_pro_ma_uno_prep,
    as_pro_ma_una_prep,
    as_pro_ma_rt_prep,
    as_pro_ma_qty_wrap,
    as_pro_ma_uno_wrap,
    as_pro_ma_una_wrap,
    as_pro_ma_rt_wrap,
    on_set_prop_qty_prep,
    on_set_prop_uno_prep,
    on_set_prop_una_prep,
    on_set_prop_rt_prep,
    on_set_prop_qty_wrap,
    on_set_prop_uno_wrap,
    on_set_prop_una_wrap,
    on_set_prop_rt_wrap,
    prop_buy_qty_prep,
    prop_buy_uno_prep,
    prop_buy_una_prep,
    prop_buy_rt_prep,
    prop_buy_qty_wrap,
    prop_buy_uno_wrap,
    prop_buy_una_wrap,
    prop_buy_rt_wrap,
    armor_qty_prep,
    armor_uno_prep,
    armor_una_prep,
    armor_rt_prep,
    armor_qty_wrap,
    armor_uno_wrap,
    armor_una_wrap,
    armor_rt_wrap,
// Totals

  // property master
  // property master shoot Total postData
  const [propertymasterTotal, setPropertymasterTotal] = useState(0);
  // property master prep Total postData
  const [propmasprepTotal, setPropmasprepTotal] = useState(0);
  // property master wrap Total postData
  const [propmaswrapTotal, setPropmaswrapTotal] = useState(0);
  // property master all Total postData
  const [propmasallTotal, setPropmasallTotal] = useState(0);

  // assist property master
  // assist property master shoot Total postData
  const [assistpropertymasterTotal, setAssistpropertymasterTotal] = useState(0);
  // assist property master prep Total postData
  const [aspropmaprepTotal, setAspropmaprepTotal] = useState(0);
  // assist property master wrap Total postData
  const [aspropmawrapTotal, setAspropmawrapTotal] = useState(0);
  // assist property master all Total postData
  const [aspropmaallTotal, setAspropmaallTotal] = useState(0);

  // on set props person
  // on set props person shoot Total postData
  const [onsetpropspersonTotal, setOnsetpropspersonTotal] = useState(0);
  // on set props person prep Total postData
  const [onsetpropprepTotal, setOnsetpropprepTotal] = useState(0);
  // on set props person wrap Total postData
  const [onsetpropwrapTotal, setOnsetpropwrapTotal] = useState(0);
  // on set props person all Total postData
  const [onsetpropallTotal, setOnsetpropallTotal] = useState(0);

  // property buyer
  // property buyer shoot Total postData
  const [propertybuyerTotal, setPropertybuyerTotal] = useState(0);
  // property buyer prep Total postData
  const [propbuyprepTotal, setPropbuyprepTotal] = useState(0);
  // property buyer wrap Total postData
  const [propbuywrapTotal, setPropbuywrapTotal] = useState(0);
  // property buyer all Total postData
  const [propbuyallTotal, setPropbuyallTotal] = useState(0);

  // armorer
  // armorer shoot Total postData
  const [armorerTotal, setArmorerTotal] = useState(0);
  // armorer prep Total postData
  const [armorprepTotal, setArmorprepTotal] = useState(0);
  // armorer wrap Total postData
  const [armorwrapTotal, setArmorwrapTotal] = useState(0);
  // armorer all Total postData
  const [armorallTotal, setArmorallTotal] = useState(0);

  // Property Labour Total postData 
  const [propertylabourTotal, setPropertylabourTotal] = useState(0);
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