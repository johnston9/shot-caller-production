// TOTALS ABOVE / BELOW / GRAND -----------------------------

  // Above the line  ------------------------------------

  // Above the line Total postData 
  const [aboveTheLineTotal, setAboveTheLineTotal] = useState(0);
  // function to add all Above the line totals on change

  useEffect(() => {
    const addAboveTheLine = () => {
      setAboveTheLineTotal(
        parseFloat(postDataRightsTotal || 0) +
        parseFloat(developmentTotal || 0) +
        parseFloat(scenarioTotal || 0) +
        parseFloat(producersDirsTotal || 0) +
        parseFloat(starsMusicTotal || 0))
      }
    const timer = setTimeout(() => {
      addAboveTheLine();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [postDataRightsTotal, developmentTotal, scenarioTotal,
    producersDirsTotal, starsMusicTotal]);

  // Above the line input box
  // eslint-disable-next-line
  const abovethelinetotal = (
    <div className="my-0 pl-3">
    <Row>
    <Col className={ `${styles.Overview}  my-0 py-2`} md={10} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL ABOVE THE LINE</p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="aboveTheLineTotal" 
          className={`${styles.Width95} text-center pt-1 mb-0`} >
          <Form.Control 
          type="text"
          className={styles.Input}
          name="aboveTheLineTotal"
          value={aboveTheLineTotal}
          readOnly
              />
      </Form.Group>
      {errors?.aboveTheLineTotal?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
          {message}
          </Alert>
      ))}
    </Col>
    </Row>
    </div>
  );

  // Below the line B Labour -----------------------------------

  // Below the line B Total Labour postData 
  const [belowTheLineBTotal, setBelowTheLineBTotal] = useState(0);

  // function to add all Below the line labour totals on change
  useEffect(() => {
    const addbelowB = () => {
      setBelowTheLineBTotal(
        parseFloat(castTotal || 0) +
        parseFloat(productionstaffTotal || 0) +
        parseFloat(designlabourTotal || 0) +
        parseFloat(constructionlabourTotal || 0) +
        parseFloat(dressinglabourTotal || 0) +
        parseFloat(propertylabourTotal || 0) +
        parseFloat(wranglerlabourTotal || 0) +
        parseFloat(fxlabourTotal || 0) +
        parseFloat(wardrobelabourTotal || 0) +
        parseFloat(makeuplabourTotal || 0) +
        parseFloat(cameralabourTotal || 0) +
        parseFloat(electriclabourTotal || 0) +
        parseFloat(griplabourTotal || 0) +
        parseFloat(soundlabourTotal || 0) +
        parseFloat(transportlabourTotal || 0) +
        parseFloat(tvspecificlabourTotal || 0)
        )
      }
    const timer = setTimeout(() => {
      addbelowB();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [castTotal, productionstaffTotal, designlabourTotal, constructionlabourTotal,
    dressinglabourTotal, propertylabourTotal, wranglerlabourTotal, fxlabourTotal,
    wardrobelabourTotal, makeuplabourTotal, cameralabourTotal, electriclabourTotal,
    griplabourTotal, soundlabourTotal, transportlabourTotal, tvspecificlabourTotal,
  ]);

  // Below the line input box
  // eslint-disable-next-line
  const belowthelineBtotal = (
    <div className="my-0 pl-3">
    <Row>
    <Col className={ `${styles.Overview}  my-0 py-2`} md={10} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL BELOW THE LINE - "B" PRODUCTION</p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="belowTheLineBTotal" 
          className={`${styles.Width95} text-center pt-1 mb-0`} >
          <Form.Control 
          type="text"
          className={styles.Input}
          name="belowTheLineBTotal"
          value={belowTheLineBTotal}
          readOnly
              />
      </Form.Group>
      {errors?.belowTheLineBTotal?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
          {message}
          </Alert>
      ))}
    </Col>
    </Row>
    </div>
  );

  // Below the line B Costs total ----------------------------------

  // Below the line B Total Costs postData 
  const [belowTheLineBCostsTotal, setBelowTheLineBCostsTotal] = useState(0);

  // function to add all Below the line Costs totals on change
  useEffect(() => {
    const addbelowBcosts = () => {
      setBelowTheLineBCostsTotal(
        parseFloat(proOffTotal || 0) +
        parseFloat(studioTotal || 0) +
        parseFloat(siteTotal || 0) +
        parseFloat(unitTotal || 0) +
        parseFloat(tralivTotal || 0) +
        parseFloat(transportTotal || 0) +
        parseFloat(constructionMatTotal || 0) +
        parseFloat(artSupTotal || 0) +
        parseFloat(dressingTotal || 0) +
        parseFloat(propsTotal || 0) +
        parseFloat(fxTotal || 0) +
        parseFloat(animalsTotal || 0) +
        parseFloat(wardrobeTotal || 0) +
        parseFloat(makeupTotal || 0) +
        parseFloat(cameraTotal || 0) +
        parseFloat(electricTotal || 0) +
        parseFloat(gripTotal || 0) +
        parseFloat(soundTotal || 0) +
        parseFloat(secondUTotal || 0) +
        parseFloat(stockLabTotal || 0)
        )
      }
    const timer = setTimeout(() => {
      addbelowBcosts();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [ proOffTotal, studioTotal, siteTotal, unitTotal, tralivTotal,
    transportTotal, constructionMatTotal, artSupTotal, dressingTotal,
    propsTotal, fxTotal, animalsTotal, wardrobeTotal, makeupTotal,
    cameraTotal, electricTotal, gripTotal, soundTotal,
    secondUTotal, stockLabTotal,]);

  // Below the line input box
  // eslint-disable-next-line
  const belowthelineBcoststotal = (
    <div className="my-0 pl-3">
    <Row>
    <Col className={ `${styles.Overview}  my-0 py-2`} md={10} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL BELOW THE LINE - "B" PRODUCTION COSTS</p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="belowTheLineBCostsTotal" 
          className={`${styles.Width95} text-center pt-1 mb-0`} >
          <Form.Control 
          type="text"
          className={styles.Input}
          name="belowTheLineBCostsTotal"
          value={belowTheLineBCostsTotal}
          readOnly
              />
      </Form.Group>
      {errors?.belowTheLineBCostsTotal?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
          {message}
          </Alert>
      ))}
    </Col>
    </Row>
    </div>
  );

  // PRODUCTION B LABOUR AND COSTS ---------------------------

  // B labour and costs Total postData 
  const [bLabourandCostsTotal, setBLabourandCostsTotal] = useState(0);

  // function to add both B labour and costs on change
  useEffect(() => {
    const addBlabcos = () => {
      setBLabourandCostsTotal(
        parseFloat(belowTheLineBTotal || 0) +
        parseFloat(belowTheLineBCostsTotal || 0)
        )
      }
    const timer = setTimeout(() => {
      addBlabcos();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [belowTheLineBTotal, belowTheLineBCostsTotal]);

  // below labour and costs input box
  const blabourncoststotal = (
    <div className="mt-3 pl-3">
    <Row>
    <Col className={ `${styles.Overview}  my-0 py-2`} md={10} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>B LABOUR AND COSTS TOTAL</p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="bLabourandCostsTotal" 
          className={`${styles.Width95} text-center pt-1 mb-0`} >
          <Form.Control 
          type="text"
          className={styles.Input}
          name="bLabourandCostsTotal"
          value={bLabourandCostsTotal}
          readOnly
              />
      </Form.Group>
      {errors?.bLabourandCostsTotal?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
          {message}
          </Alert>
      ))}
    </Col>
    </Row>
    </div>
  );

  // POST PRODUCTION "C" ------------------------------------

  // Post Production "C" postData 
  const [postProductionCTotal, setPostProductionCTotal] = useState(0);

  // function to add all Post Production "C" totals on change
  useEffect(() => {
    const adddPostProC = () => {
      setPostProductionCTotal(
        parseFloat(postStaffFacTotal || 0) +
        parseFloat(editingTotal || 0) +
        parseFloat(postSoundTotal || 0) +
        parseFloat(postLabTotal || 0) +
        parseFloat(postTitlesTotal || 0) +
        parseFloat(postVersionTotal || 0) +
        parseFloat(postVfxTotal || 0)
        )
      }
    const timer = setTimeout(() => {
      adddPostProC();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [postStaffFacTotal, editingTotal, postSoundTotal, postLabTotal,
      postTitlesTotal, postVersionTotal, postVfxTotal]);

  // Post Production input box
  // eslint-disable-next-line
  const postproductionCtotal = (
    <div className="my-0 pl-3">
    <Row>
    <Col className={ `${styles.Overview}  my-0 py-2`} md={10} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL "C "POST PRODUCTION COSTS</p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="postProductionCTotal" 
          className={`${styles.Width95} text-center pt-1 mb-0`} >
          <Form.Control 
          type="text"
          className={styles.Input}
          name="postProductionCTotal"
          value={postProductionCTotal}
          readOnly
              />
      </Form.Group>
      {errors?.postProductionCTotal?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
          {message}
          </Alert>
      ))}
    </Col>
    </Row>
    </div>
  );

  // BELOW B & C TOTAL ---------------------------

  // C & B Total postData 
  const [belowBandCTotal, setBelowBandCTotal] = useState(0);

  // function to add both B and C Below on change
  useEffect(() => {
    const addBelowBandC = () => {
      setBelowBandCTotal(
        parseFloat(bLabourandCostsTotal || 0) +
        parseFloat(postProductionCTotal || 0)
        )
      }
    const timer = setTimeout(() => {
      addBelowBandC();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [bLabourandCostsTotal, postProductionCTotal]);

  // below B and C input box ---------------------
  // eslint-disable-next-line
  const belowbandcTotal = (
    <div className="mt-3 pl-3">
    <Row>
    <Col className={ `${styles.Overview}  my-0 py-2`} md={10} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>BELOW THE LINE "B" AND "C" TOTAL</p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="belowBandCTotal" 
          className={`${styles.Width95} text-center pt-1 mb-0`} >
          <Form.Control 
          type="text"
          className={styles.Input}
          name="belowBandCTotal"
          value={belowBandCTotal}
          readOnly
              />
      </Form.Group>
      {errors?.belowBandCTotal?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
          {message}
          </Alert>
      ))}
    </Col>
    </Row>
    </div>
  );

  // ABOVE AND BELOW A, B & C TOTAL ---------------------------

  // A, B & C Total postData 
  const [aboveBelowABCTotal, setAboveBelowABCTotal] = useState(0);

  // function to add above A and below B and C on change
  useEffect(() => {
    const addBelowAboveABC = () => {
      setAboveBelowABCTotal(
        parseFloat(aboveTheLineTotal || 0) +
        parseFloat(belowBandCTotal || 0)
        )
      }
    const timer = setTimeout(() => {
      addBelowAboveABC();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [aboveTheLineTotal, belowBandCTotal]);

  // above and below A B and C input box
  // eslint-disable-next-line
  const abovebelowabcTotal = (
    <div className="mt-3 pl-3">
    <Row>
    <Col className={ `${styles.Overview}  my-0 py-2`} md={10} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>ABOVE AND BELOW THE LINE "A", "B" AND "C" TOTAL</p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="aboveBelowABCTotal" 
          className={`${styles.Width95} text-center pt-1 mb-0`} >
          <Form.Control 
          type="text"
          className={styles.Input}
          name="aboveBelowABCTotal"
          value={aboveBelowABCTotal}
          readOnly
              />
      </Form.Group>
      {errors?.aboveBelowABCTotal?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
          {message}
          </Alert>
      ))}
    </Col>
    </Row>
    </div>
  );

  // OTHER "D" ------------------------------------

  // Other "D" postData 
  const [otherDTotal, setOtherDTotal] = useState(0);

  // function to add all Other "D" totals on change
  useEffect(() => {
    const addOtherd = () => {
      setOtherDTotal(
        parseFloat(pubTotal || 0) +
        parseFloat(insurTotal || 0) +
        parseFloat(genExTotal || 0) +
        parseFloat(indirCoTotal || 0)
        )
      }
    const timer = setTimeout(() => {
      addOtherd();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [pubTotal, insurTotal, genExTotal, indirCoTotal]);

  // Other input box
  // eslint-disable-next-line
  const otherdtotal = (
    <div className="my-0 pl-3">
    <Row>
    <Col className={ `${styles.Overview}  my-0 py-2`} md={10} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL "D" OTHER COSTS</p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="otherDTotal" 
          className={`${styles.Width95} text-center pt-1 mb-0`} >
          <Form.Control 
          type="text"
          className={styles.Input}
          name="otherDTotal"
          value={otherDTotal}
          readOnly
              />
      </Form.Group>
      {errors?.otherDTotal?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
          {message}
          </Alert>
      ))}
    </Col>
    </Row>
    </div>
  );

  // A, B, C & D TOTAL ---------------------------

  // A, B, C & D Total postData 
  const [aboveBelowABCandDTotal, setAboveBelowABCandDTotal] = useState(0);

  // function to add A B C and D on change
  useEffect(() => {
    const addBelowAboveABCandD = () => {
      setAboveBelowABCandDTotal(
        parseFloat(aboveBelowABCTotal || 0) +
        parseFloat(otherDTotal || 0)
        )
      }
    const timer = setTimeout(() => {
      addBelowAboveABCandD();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [aboveBelowABCTotal, otherDTotal,]);

  // A B C and D input box
  // eslint-disable-next-line
  const abovebelowabcanddTotal = (
    <div className="mt-3 pl-3">
    <Row>
    <Col className={ `${styles.Overview}  my-0 py-2`} md={10} >
    <p className={ `${styles.Bold} pb-0 mb-0`}> "A", "B", "C" & "D" TOTAL</p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="aboveBelowABCandDTotal" 
          className={`${styles.Width95} text-center pt-1 mb-0`} >
          <Form.Control 
          type="text"
          className={styles.Input}
          name="aboveBelowABCandDTotal"
          value={aboveBelowABCandDTotal}
          readOnly
              />
      </Form.Group>
      {errors?.aboveBelowABCandDTotal?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
          {message}
          </Alert>
      ))}
    </Col>
    </Row>
    </div>
  );

  // GRAND TOTAL ---------------------------

  // Grand Total postData 
  const [grandTotal, setGrandTotal] = useState(0);

  // function to add all totals on change
  useEffect(() => {
    const addGrand = () => {
      setGrandTotal(
        parseFloat(aboveBelowABCandDTotal || 0) +
        parseFloat(contingency || 0) +
        parseFloat(completion_bond || 0)
        )
      }
    const timer = setTimeout(() => {
      addGrand();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [aboveBelowABCandDTotal, contingency, completion_bond,]);

  // Grand input box
  const grandtotal = (
    <div className="mt-3 pl-3">
    <Row>
    <Col className={ `${styles.Overview}  my-0 py-2`} md={10} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>GRAND TOTAL</p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="grandTotal" 
          className={`${styles.Width95} text-center pt-1 mb-0`} >
          <Form.Control 
          type="text"
          className={styles.Input}
          name="grandTotal"
          value={grandTotal}
          readOnly
              />
      </Form.Group>
      {errors?.grandTotal?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
          {message}
          </Alert>
      ))}
    </Col>
    </Row>
    </div>
  );

  // end totals-------------------------