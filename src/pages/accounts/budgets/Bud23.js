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
// new
days6th7th_unit_fx,
days6th7th_fx,
overtime_unit_fx,
overtime_fx,
holidays_unit_fx, 
holidays_fx,
box_rent_unit_fx,
box_rent_fx,
other_solo_fx,
fx_sup_qty_prep,
fx_sup_uno_prep,
fx_sup_una_prep,
fx_sup_rt_prep,
fx_sup_qty_wrap,
fx_sup_uno_wrap,
fx_sup_una_wrap,
fx_sup_rt_wrap,
ass_fx_qty_prep,
ass_fx_uno_prep,
ass_fx_una_prep,
ass_fx_rt_prep,
ass_fx_qty_wrap,
ass_fx_uno_wrap,
ass_fx_una_wrap,
ass_fx_rt_wrap,
ot_fx_l_qty_prep,
ot_fx_l_uno_prep,
ot_fx_l_una_prep,
ot_fx_l_rt_prep,
ot_fx_l_qty_wrap,
ot_fx_l_uno_wrap,
ot_fx_l_una_wrap,
ot_fx_l_rt_wrap,

    // Totals
  // fx supervisor
  // fx supervisor shoot Total postData 
  const [fxsupervisorTotal, setFxsupervisorTotal] = useState(0);
  // fx supervisor prep Total postData 
  const [fxsupprepTotal, setFxsupprepTotal] = useState(0);
  // fx supervisor wrap Total postData 
  const [fxsupwrapTotal, setFxsupwrapTotal] = useState(0);
  // fx supervisor all Total postData 
  const [fxsupallTotal, setFxsupallTotal] = useState(0);

  // assistant fx
  // assistant fx shoot Total postData
  const [assistfxTotal, setAssistfxTotal] = useState(0);
  // assistant fx prep Total postData
  const [assfxprepTotal, setAssfxprepTotal] = useState(0);
  // assistant fx wrap Total postData
  const [assfxwrapTotal, setAssfxwrapTotal] = useState(0);
  // assistant fx all Total postData
  const [assfxallTotal, setAssfxallTotal] = useState(0);

  // other fx
  // other fx shoot labour Total postData
  const [otherfxlabourTotal, setOtherfxlabourTotal] = useState(0);
  // other fx prep labour Total postData
  const [othfxlabprepTotal, setOthfxlabprepTotal] = useState(0);
  // other fx wrap labour Total postData
  const [othfxlabwrapTotal, setOthfxlabwrapTotal] = useState(0);
  // other fx all labour Total postData
  const [othfxlaballTotal, setOthfxlaballTotal] = useState(0);

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

