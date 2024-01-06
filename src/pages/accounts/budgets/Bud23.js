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

    days6th7th_unit_dres,
    days6th7th_dres,
    overtime_unit_dres,
    overtime_dres,
    holidays_unit_dres, 
    holidays_dres,
    box_rent_unit_dres,
    box_rent_dres,
    set_dec_qty_prep,
    set_dec_uno_prep,
    set_dec_una_prep,
    set_dec_rt_prep,
    set_dec_qty_wrap,
    set_dec_uno_wrap,
    set_dec_una_wrap,
    set_dec_rt_wrap,
    ass_set_d_qty_prep,
    ass_set_d_uno_prep,
    ass_set_d_una_prep,
    ass_set_d_rt_prep,
    ass_set_d_qty_wrap,
    ass_set_d_uno_wrap,
    ass_set_d_una_wrap,
    ass_set_d_rt_wrap,
    lead_man_qty_prep,
    lead_man_uno_prep,
    lead_man_una_prep,
    lead_man_rt_prep,
    lead_man_qty_wrap,
    lead_man_uno_wrap,
    lead_man_una_wrap,
    lead_man_rt_wrap,
    set_dres_qty_prep,
    set_dres_uno_prep,
    set_dres_una_prep,
    set_dres_rt_prep,
    set_dres_qty_wrap,
    set_dres_uno_wrap,
    set_dres_una_wrap,
    set_dres_rt_wrap,
    swing_g_qty_prep,
    swing_g_uno_prep,
    swing_g_una_prep,
    swing_g_rt_prep,
    swing_g_qty_wrap,
    swing_g_uno_wrap,
    swing_g_una_wrap,
    swing_g_rt_wrap,
    set_d_buy_qty_prep,
    set_d_buy_uno_prep,
    set_d_buy_una_prep,
    set_d_buy_rt_prep,
    set_d_buy_qty_wrap,
    set_d_buy_uno_wrap,
    set_d_buy_una_wrap,
    set_d_buy_rt_wrap,
    // Totals
  // set decorator
  // set decorator shoot Total postData
  const [decoratorsetTotal, setDecoratorsetTotal] = useState(0);
  // set decorator prep Total postData
  const [decsetprepTotal, setDecsetprepTotal] = useState(0);
  // set decorator wrap Total postData
  const [decsetwrapTotal, setDecsetwrapTotal] = useState(0);
  // set decorator all Total postData
  const [decsetallTotal, setDecsetallTotal] = useState(0);

  // set decorator
  // assist set decorator shoot Total postData
  const [assistdecoratorsetTotal, setAssistdecoratorsetTotal] = useState(0);
  // assist set decorator prep Total postData
  const [assdsetprepTotal, setAssdsetprepTotal] = useState(0);
  // assist set decorator wrap Total postData
  const [assdsetwrapTotal, setAssdsetwrapTotal] = useState(0);
  // assist set decorator all Total postData
  const [assdsetallTotal, setAssdsetallTotal] = useState(0);

  // lead man
  // lead man shoot Total postData
  const [leadmanTotal, setLeadmanTotal] = useState(0);
  // lead man prep Total postData
  const [leadmanprepTotal, setLeadmanprepTotal] = useState(0);
  // lead man wrap Total postData
  const [leadmanwrapTotal, setLeadmanwrapTotal] = useState(0);
  // lead man all Total postData
  const [leadmanallTotal, setLeadmanallTotal] = useState(0);

  // dressers
  // dressers shoot Total postData
  const [dressersTotal, setDressersTotal] = useState(0);
  // dressers prep Total postData
  const [dressprepTotal, setDressprepTotal] = useState(0);
  // dressers wrap Total postData
  const [dresswrapTotal, setDresswrapTotal] = useState(0);
  // dressers all Total postData
  const [dressallTotal, setDressallTotal] = useState(0);

   // swing gang
  // swing gang shoot Total postData
  const [swinggangTotal, setSwinggangTotal] = useState(0);
  // swing gang prep Total postData
  const [swinggprepTotal, setSwinggprepTotal] = useState(0);
  // swing gang wrap Total postData
  const [swinggwrapTotal, setSwinggwrapTotal] = useState(0);
  // swing gang all Total postData
  const [swinggallTotal, setSwinggallTotal] = useState(0);

  // set dressing
  // set dressing buyer shoot Total postData
  const [dressingbuyerTotal, setDressingbuyerTotal] = useState(0);
  // set dressing buyer prep Total postData
  const [dressbuyprepTotal, setDressbuyprepTotal] = useState(0);
  // set dressing buyer wrap Total postData
  const [dressbuywrapTotal, setDressbuywrapTotal] = useState(0);
  // set dressing buyer all Total postData
  const [dressbuyallTotal, setDressbuyallTotal] = useState(0);

  // Set Dressing Labour Total postData 
  const [dressinglabourTotal, setDressinglabourTotal] = useState(0);

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

