war_coor_qty,
war_coor_uno,
war_coor_una,
war_coor_rt,
war_coor_qty_prep,
war_coor_uno_prep,
war_coor_una_prep,
war_coor_rt_prep,
war_coor_qty_wrap,
war_coor_uno_wrap,
war_coor_una_wrap,
war_coor_rt_wrap,
train_qty_prep,
train_uno_prep,
train_una_prep,
train_rt_prep,
train_qty,
train_uno,
train_una,
train_rt,
train_qty_wrap,
train_uno_wrap,
train_una_wrap,
train_rt_wrap,
day_war_qty,
day_war_uno,
day_war_una,
day_war_rt,
// Wardrobe Coordinator
  // wardrobe Coordinator shoot Total postData 
  const [warcoorTotal, setWarcoorTotal] = useState(0);
  // wardrobe Coordinator prep Total postData 
  const [warcoprepTotal, setWarcoprepTotal] = useState(0);
  // wardrobe Coordinator wrap Total postData 
  const [warcowrapTotal, setWarcowrapTotal] = useState(0);
  // wardrobe Coordinator all Total postData 
  const [warcoallTotal, setWarcoallTotal] = useState(0);

  // Wardrobe Trainee
  // wardrobe Trainee shoot Total postData 
  const [wartrainTotal, setWartrainTotal] = useState(0);
  // wardrobe Trainee prep Total postData 
  const [wartraprepTotal, setWartraprepTotal] = useState(0);
  // wardrobe Trainee wrap Total postData 
  const [wartrawrapTotal, setWartrawrapTotal] = useState(0);
  // wardrobe Trainee prep Total postData 
  const [wartraallTotal, setWartraallTotal] = useState(0);

  // Wardrobe Dailies
  // wardrobe Dailies shoot Total postData 
  const [wardayTotal, setWardayTotal] = useState(0);
    
    // days6th7th_unit_war,
    // days6th7th_war,
    // overtime_unit_war,
    // overtime_war,
    // holidays_unit_war, 
    // holidays_war,
    // box_rent_unit_war,
    // box_rent_war,
    // other_solo_war,
    // cos_des_qty_prep,
    // cos_des_uno_prep,
    // cos_des_una_prep,
    // cos_des_rt_prep,
    // cos_des_qty_wrap,
    // cos_des_uno_wrap,
    // cos_des_una_wrap,
    // cos_des_rt_wrap,
    // as_cos_des_qty_prep,
    // as_cos_des_uno_prep,
    // as_cos_des_una_prep,
    // as_cos_des_rt_prep,
    // as_cos_des_qty_wrap,
    // as_cos_des_uno_wrap,
    // as_cos_des_una_wrap,
    // as_cos_des_rt_wrap,
    // he_war_qty_prep,
    // he_war_uno_prep,
    // he_war_una_prep,
    // he_war_rt_prep,
    // he_war_qty_wrap,
    // he_war_uno_wrap,
    // he_war_una_wrap,
    // he_war_rt_wrap,
    // war_as_qty_prep,
    // war_as_uno_prep,
    // war_as_una_prep,
    // war_as_rt_prep,
    // war_as_qty_wrap,
    // war_as_uno_wrap,
    // war_as_una_wrap,
    // war_as_rt_wrap,
    // tru_cos_qty_prep,
    // tru_cos_uno_prep,
    // tru_cos_una_prep,
    // tru_cos_rt_prep,
    // tru_cos_qty_wrap,
    // tru_cos_uno_wrap,
    // tru_cos_una_wrap,
    // tru_cos_rt_wrap,
    // ot_war_qty_prep,
    // ot_war_uno_prep,
    // ot_war_una_prep,
    // ot_war_rt_prep,
    // ot_war_qty_wrap,
    // ot_war_uno_wrap,
    // ot_war_una_wrap,
    // ot_war_rt_wrap,
    // shopper_qty,
    // shopper_uno,
    // shopper_una,
    // shopper_rt,
    // shopper_qty_prep,
    // shopper_uno_prep,
    // shopper_una_prep,
    // shopper_rt_prep,
    // tailors,
    // textile_ar,
    // cos_coor,
  // Totals
//
// days6th7th_unit,
// days6th7th, 
// overtime_unit, 
// overtime, 
// holidays_unit, 
// holidays, 
// box_rent_unit,
// box_rent,
// other,
// fringes_taxes,
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