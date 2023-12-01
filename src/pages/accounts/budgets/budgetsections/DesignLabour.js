/* Component in the Budget component to edit Design */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const DesignLabour = (props) => {
    // eslint-disable-next-line
    const [errors, setErrors] = useState({});

    const {postDataDesign, setPostDataDesign, setShow,
        productiondesignerTotal, setProductiondesignerTotal,
        artdirectorTotal, setArtdirectorTotal,
        artassistantsTotal, setArtassistantsTotal,
        productionassistantstraineesTotal, setProductionassistantstraineesTotal,
        graphicartistsTotal, setGraphicartistsTotal,
        designlabourTotal, setDesignlabourTotal,
        // new
        prodesprepTotal, setProdesprepTotal,
        prodeswrapTotal, setProdeswrapTotal,
        prodesallTotal, setProdesallTotal,
        artdirprepTotal, setArtdirprepTotal,
        artdirwrapTotal, setArtdirwrapTotal,
        artdirallTotal, setArtdirallTotal,
        artassprepTotal, setArtassprepTotal,
        artasswrapTotal, setArtasswrapTotal,
        artassallTotal, setArtassallTotal,
        proasstrainprepTotal, setProasstrainprepTotal,
        proasstrainwrapTotal, setProasstrainwrapTotal,
        proasstrainallTotal, setProasstrainallTotal,
        graphicartprepTotal, setGraphicartprepTotal,
        graphicartwrapTotal, setGraphicartwrapTotal,
        graphicartallTotal, setGraphicartallTotal,
    } = props;
    
    const {pro_designer_qty_prep, pro_designer_uno_prep,
        pro_designer_una_prep, pro_designer_rt_prep,
        pro_designer_qty_wrap, pro_designer_uno_wrap,
        pro_designer_una_wrap, pro_designer_rt_wrap,
        art_director_qty_prep, art_director_uno_prep,
        art_director_una_prep, art_director_rt_prep,
        art_director_qty_wrap, art_director_uno_wrap,
        art_director_una_wrap, art_director_rt_wrap,
        art_ass_qty_prep, art_ass_uno_prep,
        art_ass_una_prep, art_ass_rt_prep,
        art_ass_qty_wrap, art_ass_uno_wrap,
        art_ass_una_wrap, art_ass_rt_wrap,
        pro_ass_trainees_qty_prep, pro_ass_trainees_uno_prep,
        pro_ass_trainees_una_prep, pro_ass_trainees_rt_prep,
        pro_ass_trainees_qty_wrap, pro_ass_trainees_uno_wrap,
        pro_ass_trainees_una_wrap, pro_ass_trainees_rt_wrap,
        sketch_artists, sketch_artists_unit,
        storyboard_artists, storyboard_artists_unit,
        holidays_design, holidays_unit_design,
        overtime_design, overtime_unit_design,
        days6th7th_design, days6th7th_unit_design,
        box_rent_unit_design, box_rent_design,
        fringes_taxes_design,
        production_designer_quantity, production_designer_units_number,
        production_designer_units_name, production_designer_rate,
        art_director_quantity, art_director_units_number,
        art_director_units_name, art_director_rate,
        art_assistants_quantity, art_assistants_units_number,
        art_assistants_units_name, art_assistants_rate,
        production_assistants_trainees_quantity, production_assistants_trainees_units_number,
        production_assistants_trainees_units_name, production_assistants_trainees_rate,
        graphic_artists_quantity, graphic_artists_units_number,
        graphic_artists_units_name, graphic_artists_rate, other_design,
            } = postDataDesign;
  
  // handleChange1 - replace(/\D/g,'') - works but no decimal
  const handleChangeDesign = (event) => {
    setPostDataProduction({
    ...postDataProduction,
    [event.target.name]: parseFloat(event.target.value.replace(/\D/g,'') || 0 ),
    });
  };          
            
  // Design handleChange - parseFloat
//   const handleChangeDesign = (event) => {
//     setPostDataDesign({
//       ...postDataDesign,
//       [event.target.name]: parseFloat(event.target.value || 0 ),
//     });
//   }; 

  // Design handleChange Text 
  const handleChangeDesignText = (event) => {
    setPostDataDesign({
      ...postDataDesign,
      [event.target.name]: event.target.value,
    });
  };

  // Calculate Functions
  // production designer
  // function to calculate production designer on change
  useEffect(() => {
    const addProdes = () => {
      setProductiondesignerTotal(parseFloat(production_designer_quantity || 0) * 
      parseFloat(production_designer_units_number || 0) * 
      parseFloat(production_designer_rate || 0))
    }
    const timer = setTimeout(() => {
        addProdes();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [production_designer_quantity, production_designer_units_number, 
    production_designer_rate]);

  // function to calculate art director on change
  useEffect(() => {
    const addArtdir = () => {
      setArtdirectorTotal(parseFloat(art_director_quantity || 0) * 
      parseFloat(art_director_units_number || 0) * 
      parseFloat(art_director_rate || 0))
    }
    const timer = setTimeout(() => {
        addArtdir();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [art_director_quantity, art_director_units_number, 
    art_director_rate]);

  // function to calculate art assistants on change
  useEffect(() => {
    const addArtass = () => {
      setArtassistantsTotal(parseFloat(art_assistants_quantity || 0) * 
      parseFloat(art_assistants_units_number || 0) * 
      parseFloat(art_assistants_rate || 0))
    }
    const timer = setTimeout(() => {
        addArtass();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [art_assistants_quantity, art_assistants_units_number, 
    art_assistants_rate]);

  // function to calculate production assistants/trainees on change
  useEffect(() => {
    const addProasstra = () => {
      setProductionassistantstraineesTotal(parseFloat(production_assistants_trainees_quantity || 0) * 
      parseFloat(production_assistants_trainees_units_number || 0) * 
      parseFloat(production_assistants_trainees_rate || 0))
    }
    const timer = setTimeout(() => {
        addProasstra();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [production_assistants_trainees_quantity, production_assistants_trainees_units_number, 
    production_assistants_trainees_rate]);

  // function to calculate graphic artists on change
  useEffect(() => {
    const addGraart = () => {
        setGraphicartistsTotal(parseFloat(graphic_artists_quantity || 0) * 
      parseFloat(graphic_artists_units_number || 0) * 
      parseFloat(graphic_artists_rate || 0))
    }
    const timer = setTimeout(() => {
        addGraart();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [graphic_artists_quantity, graphic_artists_units_number, 
    graphic_artists_rate]);

  // function to add all design on change
  useEffect(() => {
    const addDesign = () => {
      setDesignlabourTotal(
      parseFloat(productiondesignerTotal || 0) +
      parseFloat(artdirectorTotal || 0) +
      parseFloat(artassistantsTotal || 0) +
      parseFloat(productionassistantstraineesTotal || 0) +
      parseFloat(graphicartistsTotal || 0) +
      parseFloat(fringes_taxes_design || 0) +
      parseFloat(other_design || 0)
      )
    }
    const timer = setTimeout(() => {
        addDesign();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [other_design, graphicartistsTotal, productionassistantstraineesTotal,
    artassistantsTotal, artdirectorTotal, productiondesignerTotal,
    fringes_taxes_design,]);

  return (
    <div className="mt-5">
    <Row >
    <Col md={1} >
    <p className="mb-2">08.00</p>
    </Col>
    <Col md={9} >
    <p className={ `${styles.BoldBlack} mb-2`}>Design Labour</p>
    </Col>
    <Col md={2}>
    <span className={`${styles.Close }`} 
    onClick={() => setShow(false) } >Close</span>
    </Col>
    </Row>
    {/* TITLES */}
    <Row className={ `${styles.Overview} mb-2 py-1`} >
    <Col md={1} >
    <p className="mb-0">ACCT</p>
    </Col>
    <Col md={5} >
    <p className="mb-0">Description</p>
    </Col>
    <Col md={1} className="text-center" >
    <p className="mb-0">#</p>
    </Col>
    <Col className="text-center" md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} className="text-center" >
    <p className="mb-0">Unit</p>
    </Col>
    <Col md={1} className="text-center" >
    <p className="mb-0">Price</p>
    </Col>
    <Col md={2} className="text-center" >
    <p className="mb-0">Total</p>
    </Col>
    </Row>
    {/* Production Designer */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>08.10</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Production Designer</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_designer_quantity" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_designer_quantity"
        value={production_designer_quantity}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.production_designer_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_designer_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_designer_units_number"
        value={production_designer_units_number}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.production_designer_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_designer_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_designer_units_name"
        value={production_designer_units_name}
        onChange={handleChangeDesignText}
            />
    </Form.Group>
    {errors?.production_designer_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_designer_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_designer_rate"
        value={production_designer_rate}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.production_designer_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="productiondesignerTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="productiondesignerTotal"
        value={productiondesignerTotal}
        readOnly
            />
    </Form.Group>
    {errors?.productiondesignerTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Art Director */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>08.20</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Art Director</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="art_director_quantity" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="art_director_quantity"
        value={art_director_quantity}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.art_director_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="art_director_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="art_director_units_number"
        value={art_director_units_number}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.art_director_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="art_director_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="art_director_units_name"
        value={art_director_units_name}
        onChange={handleChangeDesignText}
            />
    </Form.Group>
    {errors?.art_director_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="art_director_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="art_director_rate"
        value={art_director_rate}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.art_director_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="artdirectorTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="artdirectorTotal"
        value={artdirectorTotal}
        readOnly
            />
    </Form.Group>
    {errors?.artdirectorTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Art Assistants */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>08.30</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Art Assistants</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="art_assistants_quantity" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="art_assistants_quantity"
        value={art_assistants_quantity}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.art_assistants_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="art_assistants_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="art_assistants_units_number"
        value={art_assistants_units_number}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.art_assistants_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="art_assistants_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="art_assistants_units_name"
        value={art_assistants_units_name}
        onChange={handleChangeDesignText}
            />
    </Form.Group>
    {errors?.art_assistants_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="art_assistants_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="art_assistants_rate"
        value={art_assistants_rate}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.art_assistants_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="artassistantsTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="artassistantsTotal"
        value={artassistantsTotal}
        readOnly
            />
    </Form.Group>
    {errors?.artassistantsTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Production Assistants/Trainees */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>08.40</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Production Assistants / Trainees</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_assistants_trainees_quantity" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_assistants_trainees_quantity"
        value={production_assistants_trainees_quantity}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.production_assistants_trainees_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_assistants_trainees_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_assistants_trainees_units_number"
        value={production_assistants_trainees_units_number}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.production_assistants_trainees_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_assistants_trainees_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_assistants_trainees_units_name"
        value={production_assistants_trainees_units_name}
        onChange={handleChangeDesignText}
            />
    </Form.Group>
    {errors?.production_assistants_trainees_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_assistants_trainees_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_assistants_trainees_rate"
        value={production_assistants_trainees_rate}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.production_assistants_trainees_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="productionassistantstraineesTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="productionassistantstraineesTotal"
        value={productionassistantstraineesTotal}
        readOnly
            />
    </Form.Group>
    {errors?.productionassistantstraineesTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Graphic Artists */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>08.50</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Graphic Artists</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="graphic_artists_quantity" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="graphic_artists_quantity"
        value={graphic_artists_quantity}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.graphic_artists_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="graphic_artists_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="graphic_artists_units_number"
        value={graphic_artists_units_number}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.graphic_artists_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="graphic_artists_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="graphic_artists_units_name"
        value={graphic_artists_units_name}
        onChange={handleChangeDesignText}
            />
    </Form.Group>
    {errors?.graphic_artists_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="graphic_artists_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="graphic_artists_rate"
        value={graphic_artists_rate}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.graphic_artists_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="graphicartistsTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="graphicartistsTotal"
        value={graphicartistsTotal}
        readOnly
            />
    </Form.Group>
    {errors?.graphicartistsTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Other */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>08.60</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    </Col>
    <Col className="px-1 mx-0" md={1} >
    </Col>
    <Col className="px-1 mx-0" md={1} >
    </Col>
    <Col md={2} >
    <Form.Group controlId="other_design" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_design"
        value={other_design}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.other_design?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Fringes and Taxes */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>08.70</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Fringes and Taxes</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} className="text-center" >
    <p className={`${styles.Underline}`}>%</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="fringes_taxes_design" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="fringes_taxes_design"
        value={fringes_taxes_design}
        onChange={handleChangeDesign}
            />
    </Form.Group>
    {errors?.fringes_taxes_design?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Design Total */}
    <Row className="mt-3">
    <Col md={1} >
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL DESIGN</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="designlabourTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="designlabourTotal"
        value={designlabourTotal}
        readOnly
            />
    </Form.Group>
    {errors?.designlabourTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
  )
}

export default DesignLabour