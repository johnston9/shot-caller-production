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
// Totals
  
  // construction coordinator
  // construction coordinator shoot Total postData
  const [constructioncoordinatorTotal, setConstructioncoordinatorTotal] = useState(0);
  // construction coordinator prep Total postData
  const [concoorprepTotal, setConoorprepTotal] = useState(0);
  // construction coordinator wrap Total postData
  const [concoorwrapTotal, setConoorwrapTotal] = useState(0);
  // construction coordinator all Total postData
  const [concoorallTotal, setConoorallTotal] = useState(0);

  // head carpenter
  // head carpenter shoot Total postData
  const [headcarpenterTotal, setHeadcarpenterTotal] = useState(0);
  // head carpenter prep Total postData
  const [headcarprepTotal, setHeadcarprepTotal] = useState(0);
  // head carpenter wrap Total postData
  const [headcarwrapTotal, setHeadcarwrapTotal] = useState(0);
  // head carpenter all Total postData
  const [headcarallTotal, setHeadcarallTotal] = useState(0);

  // carpenters
  // carpenters shoot Total postData
  const [carpentersTotal, setCarpentersTotal] = useState(0);
  // carpenters prep Total postData
  const [carpenprepTotal, setCarpenprepTotal] = useState(0);
  // carpenters wrap Total postData
  const [carpenwrapTotal, setCarpenwrapTotal] = useState(0);
  // carpenters all Total postData
  const [carpenallTotal, setCarpenallTotal] = useState(0);

  // scenic painters
  // scenic painters shoot Total postData
  const [scenicpaintersTotal, setScenicpaintersTotal] = useState(0);
  // scenic painters prep Total postData
  const [scenicprepTotal, setScenicprepTotal] = useState(0);
  // scenic painters wrap Total postData
  const [scenicwrapTotal, setScenicwrapTotal] = useState(0);
  // scenic painters all Total postData
  const [scenicallTotal, setScenicallTotal] = useState(0);

  // head painter
  // head painter shoot Total postData
  const [headpainterTotal, setHeadpainterTotal] = useState(0);
  // head painter prep Total postData
  const [headpainprepTotal, setHeadpainprepTotal] = useState(0);
  // head painter wrap Total postData
  const [headpainwrapTotal, setHeadpainwrapTotal] = useState(0);
  // head painter all Total postData
  const [headpainallTotal, setHeadpainallTotal] = useState(0);

  // painters
  // painters shoot Total postData
  const [paintersTotal, setPaintersTotal] = useState(0);
  // painters prep Total postData
  const [paintprepTotal, setPaintprepTotal] = useState(0);
  // painters wrap Total postData
  const [paintwrapTotal, setPaintwrapTotal] = useState(0);
  // painters all Total postData
  const [paintallTotal, setPaintallTotal] = useState(0);

  // labourers
  // labourers shoot Total postData
  const [labourersTotal, setLabourersTotal] = useState(0);
  // labourers prep Total postData
  const [laboprepTotal, setLaboprepTotal] = useState(0);
  // labourers wrap Total postData
  const [labowrapTotal, setLabowrapTotal] = useState(0);
  // labourers all Total postData
  const [laboallTotal, setLaboallTotal] = useState(0);

  // construction Labour Total postData 
  const [constructionlabourTotal, setConstructionlabourTotal] = useState(0);

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

