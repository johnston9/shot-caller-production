    days6th7th_unit_war,
    days6th7th_war,
    overtime_unit_war,
    overtime_war,
    holidays_unit_war, 
    holidays_war,
    box_rent_unit_war,
    box_rent_war,
    other_solo_war,
    cos_des_qty_prep,
    cos_des_uno_prep,
    cos_des_una_prep,
    cos_des_rt_prep,
    cos_des_qty_wrap,
    cos_des_uno_wrap,
    cos_des_una_wrap,
    cos_des_rt_wrap,
    as_cos_des_qty_prep,
    as_cos_des_uno_prep,
    as_cos_des_una_prep,
    as_cos_des_rt_prep,
    as_cos_des_qty_wrap,
    as_cos_des_uno_wrap,
    as_cos_des_una_wrap,
    as_cos_des_rt_wrap,
    he_war_qty_prep,
    he_war_uno_prep,
    he_war_una_prep,
    he_war_rt_prep,
    he_war_qty_wrap,
    he_war_uno_wrap,
    he_war_una_wrap,
    he_war_rt_wrap,
    war_as_qty_prep,
    war_as_uno_prep,
    war_as_una_prep,
    war_as_rt_prep,
    war_as_qty_wrap,
    war_as_uno_wrap,
    war_as_una_wrap,
    war_as_rt_wrap,
    tru_cos_qty_prep,
    tru_cos_uno_prep,
    tru_cos_una_prep,
    tru_cos_rt_prep,
    tru_cos_qty_wrap,
    tru_cos_uno_wrap,
    tru_cos_una_wrap,
    tru_cos_rt_wrap,
    ot_war_qty_prep,
    ot_war_uno_prep,
    ot_war_una_prep,
    ot_war_rt_prep,
    ot_war_qty_wrap,
    ot_war_uno_wrap,
    ot_war_una_wrap,
    ot_war_rt_wrap,
    shopper_qty,
    shopper_uno,
    shopper_una,
    shopper_rt,
    shopper_qty_prep,
    shopper_uno_prep,
    shopper_una_prep,
    shopper_rt_prep,
    tailors,
    textile_ar,
    cos_coor,
  // Totals

  // costume designer
  // costume designer Total shoot postData 
  const [costumedesignerTotal, setCostumedesignerTotal] = useState(0);
  // costume designer prep Total postData 
  const [cosdesprepTotal, setCosdesprepTotal] = useState(0);
  // costume designer wrap Total postData 
  const [cosdeswrapTotal, setCosdeswrapTotal] = useState(0);
  // costume designer all Total postData 
  const [cosdesallTotal, setCosdesallTotal] = useState(0);

  // assistant costume designer shoot Total postData 
  const [assistcosdesignerTotal, setAssistcosdesignerTotal] = useState(0);
  // assistant costume designer prep Total postData 
  const [ascosdesprepTotal, setAscosdesprepTotal] = useState(0);
  // assistant costume designer wrap Total postData 
  const [ascosdeswrapTotal, setAscosdeswrapTotal] = useState(0);
  // assistant costume designer all Total postData 
  const [ascosdesallTotal, setAscosdesallTotal] = useState(0);

  // head wardrobe/supervisor
  // head wardrobe shoot Total postData 
  const [headwardrobeTotal, setHeadwardrobeTotal] = useState(0);
  // head wardrobe prep Total postData 
  const [hewarprepTotal, setHewarprepTotal] = useState(0);
  // head wardrobe wrap Total postData 
  const [hewarwrapTotal, setHewarwrapTotal] = useState(0);
  // head wardrobe all Total postData 
  const [hewarallTotal, setHewarallTotal] = useState(0);

  // wardrobe assist/set costumer
  // wardrobe assist shoot Total postData 
  const [wardrobeassistTotal, setWardrobeassistTotal] = useState(0);
  // wardrobe assist prep Total postData 
  const [warasprepTotal, setWarasprepTotal] = useState(0);
  // wardrobe assist wrap Total postData 
  const [waraswrapTotal, setWaraswrapTotal] = useState(0);
  // wardrobe assist all Total postData 
  const [warasallTotal, setWarasallTotal] = useState(0);

  // truck costumer
  // truck costumer shoot Total postData 
  const [truckcostumerTotal, setTruckcostumerTotal] = useState(0);
  // truck costumer prep Total postData 
  const [trucosprepTotal, setTrucosprepTotal] = useState(0);
  // truck costumer wrap Total postData 
  const [trucoswrapTotal, setTrucoswrapTotal] = useState(0);
  // truck costumer all Total postData 
  const [trucosallTotal, setTrucosallTotal] = useState(0);

  // shopper
  // shopper shoot Total postData 
  const [shopperTotal, setShopperTotal] = useState(0);
  // shopper prep Total postData 
  const [shopprepTotal, setShopprepTotal] = useState(0);
  // shopper all Total postData 
  const [shopallTotal, setShopallTotal] = useState(0);

  // other wardrobe labour
  // other wardrobe labour shoot Total postData 
  const [otherwardrobeTotal, setOtherwardrobeTotal] = useState(0);
  // other wardrobe labour prep Total postData 
  const [othwarprepTotal, setOthwarprepTotal] = useState(0);
  // other wardrobe labour wrap Total postData 
  const [othwarwrapTotal, setOthwarwrapTotal] = useState(0);
  // other wardrobe labour all Total postData 
  const [othwarallTotal, setOthwarallTotal] = useState(0);

  // Wardrobe Labour Total postData 
  const [wardrobelabourTotal, setWardrobelabourTotal] = useState(0);
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