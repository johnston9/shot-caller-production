    prin_2_qty,
    prin_2_uno,
    prin_2_una,
    prin_2_rt,
    prin_3_qty,
    prin_3_uno,
    prin_3_una,
    prin_3_rt,
    actors_2_qty,
    actors_2_uno,
    actors_2_una,
    actors_2_rt,
    actors_3_qty,
    actors_3_uno,
    actors_3_una,
    actors_3_rt,
    actors_4_qty,
    actors_4_uno,
    actors_4_una,
    actors_4_rt,
    actors_5_qty,
    actors_5_uno,
    actors_5_una,
    actors_5_rt,
    actors_6_qty,
    actors_6_uno,
    actors_6_una,
    actors_6_rt,
    actors_7_qty,
    actors_7_uno,
    actors_7_una,
    actors_7_rt,
    actors_week_qty,
    actors_week_uno,
    actors_week_una,
    actors_week_rt,
    actors_day_qty,
    actors_day_uno,
    actors_day_una,
    actors_day_rt,
    //
    // Principals 1 Total postData
  const [principalsTotal, setPrincipalsTotal] = useState(0);
  // Principals 2 Total postData
  const [princ2Total, setPrinc2Total] = useState(0);
  // Principals 3 Total postData
  const [princ3Total, setPrinc3Total] = useState(0);

  // Actors Total postData 
  const [actorsTotal, setActorsTotal] = useState(0);
  // Actor 2 Total postData 
  const [actor2Total, setActor2Total] = useState(0);
  // Actors 3 Total postData 
  const [actor3Total, setActor3Total] = useState(0);
  // Actors 4 Total postData 
  const [actor4Total, setActor4Total] = useState(0);
  // Actors 5 Total postData 
  const [actor5Total, setActor5Total] = useState(0);
  // Actors 6 Total postData 
  const [actor6Total, setActor6Total] = useState(0);
  // Actors 7 Total postData 
  const [actor7Total, setActor7Total] = useState(0);
  // Actors week Total postData 
  const [actorweekTotal, setActorweekTotal] = useState(0);
  // Actors day Total postData 
  const [actordayTotal, setActordayTotal] = useState(0);
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