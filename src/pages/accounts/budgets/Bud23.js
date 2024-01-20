    days6th7th_unit_mak,
    days6th7th_mak,
    overtime_unit_mak,
    overtime_mak,
    holidays_unit_mak, 
    holidays_mak,
    box_rent_unit_mak,
    box_rent_mak,
    other_solo_mak,
    mak_head_qty_prep,
    mak_head_uno_prep,
    mak_head_una_prep,
    mak_head_rt_prep,
    mak_head_qty_wrap,
    mak_head_uno_wrap,
    mak_head_una_wrap,
    mak_head_rt_wrap,
    key_mak_qty_prep,
    key_mak_uno_prep,
    key_mak_una_prep,
    key_mak_rt_prep,
    key_mak_qty_wrap,
    key_mak_uno_wrap,
    key_mak_una_wrap,
    key_mak_rt_wrap,
    mak_art_qty_prep,
    mak_art_uno_prep,
    mak_art_una_prep,
    mak_art_rt_prep,
    mak_art_qty_wrap,
    mak_art_uno_wrap,
    mak_art_una_wrap,
    mak_art_rt_wrap,
    key_hair_qty_prep,
    key_hair_uno_prep,
    key_hair_una_prep,
    key_hair_rt_prep,
    key_hair_qty_wrap,
    key_hair_uno_wrap,
    key_hair_una_wrap,
    key_hair_rt_wrap,
    hair_qty_prep,
    hair_uno_prep,
    hair_una_prep,
    hair_rt_prep,
    hair_qty_wrap,
    hair_uno_wrap,
    hair_una_wrap,
    hair_rt_wrap,
    oth_mak_qty_prep,
    oth_mak_uno_prep,
    oth_mak_una_prep,
    oth_mak_rt_prep,
    oth_mak_qty_wrap,
    oth_mak_uno_wrap,
    oth_mak_una_wrap,
    oth_mak_rt_wrap,
    sfx_mak_qty_prep,
    sfx_mak_uno_prep,
    sfx_mak_una_prep,
    sfx_mak_rt_prep,
    sfx_mak_qty_wrap,
    sfx_mak_uno_wrap,
    sfx_mak_una_wrap,
    sfx_mak_rt_wrap,
    mak_train_qty,
    mak_train_uno,
    mak_train_una,
    mak_train_rt,
    mak_train_qty_prep,
    mak_train_uno_prep,
    mak_train_una_prep,
    mak_train_rt_prep,
    mak_train_qty_wrap,
    mak_train_uno_wrap,
    mak_train_una_wrap, 
    mak_train_rt_wrap,

    // Totals

  // head makeup
  // head makeup shoot Total postData 
  const [headmakeupTotal, setHeadmakeupTotal] = useState(0);
  // head makeup prep Total postData 
  const [headmakprepTotal, setHeadmakprepTotal] = useState(0);
  // head makeup wrap Total postData 
  const [headmakwrapTotal, setHeadmakwrapTotal] = useState(0);
  // head makeup all Total postData 
  const [headmakallTotal, setHeadmakallTotal] = useState(0);

  // key makeup
  // key makeup shoot Total postData 
  const [keymakeupTotal, setKeymakeupTotal] = useState(0);
  // key makeup prep Total postData 
  const [keymakprepTotal, setKeymakprepTotal] = useState(0);
  // key makeup wrap Total postData 
  const [keymakwrapTotal, setKeymakwrapTotal] = useState(0);
  // key makeup prep Total postData 
  const [keymakallTotal, setKeymakallTotal] = useState(0);
  
  // makeup artist
  // makeup artist shoot Total postData 
  const [makeupartistTotal, setMakeupartistTotal] = useState(0);
  // makeup artist prep Total postData 
  const [makartprepTotal, setMakartprepTotal] = useState(0);
  // makeup artist wrap Total postData 
  const [makartwrapTotal, setMakartwrapTotal] = useState(0);
  // makeup artist all Total postData 
  const [makartallTotal, setMakartallTotal] = useState(0);

  // key hairstylist
  // key hairstylist shoot Total postData 
  const [keyhairstylistTotal, setKeyhairstylistTotal] = useState(0);
  // key hairstylist prep Total postData 
  const [keyhairprepTotal, setKeyhairprepTotal] = useState(0);
  // key hairstylist wrap Total postData 
  const [keyhairwrapTotal, setKeyhairwrapTotal] = useState(0);
  // key hairstylist all Total postData 
  const [keyhairallTotal, setKeyhairallTotal] = useState(0);

  // hairdresser
  // hairdresser shoot Total postData 
  const [hairdresserTotal, setHairdresserTotal] = useState(0);
  // hairdresser prep Total postData 
  const [hairprepTotal, setHairprepTotal] = useState(0);
  // hairdresser wrap Total postData 
  const [hairwrapTotal, setHairwrapTotal] = useState(0);
  // hairdresser all Total postData 
  const [hairallTotal, setHairallTotal] = useState(0);

  // hair makeup dailies
  // hair makeup dailies shoot Total postData 
  const [hairmakeupdailiesTotal, setHairmakeupdailiesTotal] = useState(0);

  // hair/makeup assistants - using othermakeuplabour as variable name
  // hair/makeup assistants shoot Total postData 
  const [othermakeuplabourTotal, setOthermakeuplabourTotal] = useState(0);
  // hair/makeup assistants prep Total postData 
  const [othmakprepTotal, setOthmakprepTotal] = useState(0);
  // hair/makeup assistants wrap Total postData 
  const [othmakwrapTotal, setOthmakwrapTotal] = useState(0);
  // hair/makeup assistants all Total postData 
  const [othmakallTotal, setOthmakallTotal] = useState(0);

  // sfx makeup labour
  // sfx makeup labour shoot Total postData 
  const [sfxmakeupTotal, setSfxmakeupTotal] = useState(0);
  // sfx makeup labour prep Total postData 
  const [sfxmakprepTotal, setSfxmakprepTotal] = useState(0);
  // sfx makeup labour wrap Total postData 
  const [sfxmakwrapTotal, setSfxmakwrapTotal] = useState(0);
  // sfx makeup labour all Total postData 
  const [sfxmakallTotal, setSfxmakallTotal] = useState(0);

  // makeup trainee labour
  // makeup trainee labour shoot Total postData 
  const [maktrainTotal, setMakktrainTotal] = useState(0);
  // makeup trainee labour prep Total postData 
  const [maktraprepTotal, setMakktraprepTotal] = useState(0);
  // makeup trainee labour wrap Total postData 
  const [maktrawrapTotal, setMakktrawrapTotal] = useState(0);
  // makeup trainee labour all Total postData 
  const [maktraallTotal, setMakktraallTotal] = useState(0);

  // Makeup Labour Total postData 
  const [makeuplabourTotal, setMakeuplabourTotal] = useState(0);
    
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