/* Component in the Budget component to edit Camera pattern="[0-9]*" */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const Camera = (props) => {
    // eslint-disable-next-line
    const [errors, setErrors] = useState({});

    const {postDataCamera, setPostDataCamera,
           dopTotal, setDopTotal,
           cameraopTotal, setCameraopTotal,
           camac1Total, setCamac1Total,
           camac2Total, setCamac2Total,
           ditTotal, setDitTotal,
           steadicamTotal, setSteadicamTotal,
           campaTotal, setCampaTotal,
           dronepilotTotal, setDronepilotTotal,
           stillsTotal, setStillsTotal,
           othercamTotal, setOthercamTotal, setShow,
           cameralabourTotal, setCameralabourTotal,
           dopprepTotal, setDopprepTotal,
           dopwrapTotal, setDopwrapTotal,
           dopallTotal, setDopallTotal,
           camopprepTotal, setCamopprepTotal,
           camopwrapTotal, setCamopwrapTotal,
           camopallTotal, setCamopallTotal,
           camac1prepTotal, setCamac1prepTotal,
           camac1wrapTotal, setCamac1wrapTotal,
           camac1allTotal, setCamac1allTotal,
           camac2prepTotal, setCamac2prepTotal,
           camac2wrapTotal, setCamac2wrapTotal,
           camac2allTotal, setCamac2allTotal,
           ditprepTotal, setDitprepTotal,
           ditwrapTotal, setDitwrapTotal,
           ditallTotal, setDitallTotal,
           stecamprepTotal, setStecamprepTotal,
           stecamwrapTotal, setStecamwrapTotal,
           stecamallTotal, setStecamallTotal,
           campaprepTotal, setCampaprepTotal,
           campawrapTotal, setCampawrapTotal,
           campaallTotal, setCampaallTotal,
           dronpiprepTotal, setDronpiprepTotal,
           dronpiwrapTotal, setDronpiwrapTotal,
           dronpiallTotal, setDronpiallTotal,
           othcamprepTotal, setOthcamprepTotal,
           othcamwrapTotal, setOthcamwrapTotal,
           othcamallTotal, setOthcamallTotal,
    } = props;
      
    // Camera Labour postData values
    const {days6th7th_unit_cam, days6th7th_cam,
    overtime_unit_cam, overtime_cam, holidays_unit_cam, 
    holidays_cam, box_rent_unit_cam, box_rent_cam, other_solo_cam,
    dop_qty_prep, dop_uno_prep, dop_una_prep, dop_rt_prep,
    dop_qty_wrap, dop_uno_wrap, dop_una_wrap, dop_rt_wrap,
    cam_op_qty_prep, cam_op_uno_prep, cam_op_una_prep, cam_op_rt_prep,
    cam_op_qty_wrap, cam_op_uno_wrap, cam_op_una_wrap, cam_op_rt_wrap,
    cam_ac1_qty_prep, cam_ac1_uno_prep, cam_ac1_una_prep, cam_ac1_rt_prep,
    cam_ac1_qty_wrap, cam_ac1_uno_wrap, cam_ac1_una_wrap, cam_ac1_rt_wrap,
    cam_ac2_qty_prep, cam_ac2_uno_prep, cam_ac2_una_prep, cam_ac2_rt_prep,
    cam_ac2_qty_wrap, cam_ac2_uno_wrap, cam_ac2_una_wrap, cam_ac2_rt_wrap,
    dit_qty_prep, dit_uno_prep, dit_una_prep, dit_rt_prep, 
    dit_qty_wrap, dit_uno_wrap, dit_una_wrap, dit_rt_wrap,
    stead_qty_prep, stead_uno_prep, stead_una_prep, stead_rt_prep,
    stead_qty_wrap, stead_uno_wrap, stead_una_wrap, stead_rt_wrap,
    cam_pa_qty_prep, cam_pa_uno_prep, cam_pa_una_prep, cam_pa_rt_prep,
    cam_pa_qty_wrap, cam_pa_uno_wrap, cam_pa_una_wrap, cam_pa_rt_wrap,
    dro_pil_qty_prep, dro_pil_uno_prep, dro_pil_una_prep, dro_pil_rt_prep,
    dro_pil_qty_wrap, dro_pil_uno_wrap, dro_pil_una_wrap, dro_pil_rt_wrap,
    ot_cam_qty_prep, ot_cam_uno_prep, ot_cam_una_prep, ot_cam_rt_prep,
    ot_cam_qty_wrap, ot_cam_uno_wrap, ot_cam_una_wrap, ot_cam_rt_wrap,
    dop_qty, dop_uno, dop_una, dop_rt,
    camera_op_qty, camera_op_uno, camera_op_una, camera_op_rt,
    cam_ac1_qty, cam_ac1_uno, cam_ac1_una, cam_ac1_rt,
    cam_ac2_qty, cam_ac2_uno, cam_ac2_una, cam_ac2_rt,
    dit_qty, dit_uno, dit_una, dit_rt,
    steadicam_qty, steadicam_uno, steadicam_una, steadicam_rt,
    cam_pa_qty, cam_pa_uno, cam_pa_una, cam_pa_rt, 
    drone_pilot_qty, drone_pilot_uno, drone_pilot_una, drone_pilot_rt,
    other_cam_qty, other_cam_uno, other_cam_una, other_cam_rt,
    stills_qty, stills_uno, stills_una, stills_rt,
    fringes_taxes_camera,} = postDataCamera;

    // handleChange - replace(/\D/g,'') - works but no decimal
    const handleChange = (event) => {
      setPostDataCamera({
      ...postDataCamera,
      [event.target.name]: parseFloat(event.target.value.replace(/\D/g,'') || 0 ),
      });
    }; 

    // handleChange Text 
    const handleChangeText = (event) => {
      setPostDataCamera({
      ...postDataCamera,
      [event.target.name]: event.target.value,
      });
    };

    // Calculate Functions

    // dop
    // function to calculate dop on change
    useEffect(() => {
      const addDop = () => {
      setDopTotal(parseFloat(dop_qty || 0) * 
      parseFloat(dop_uno || 0) * 
      parseFloat(dop_rt || 0))
      }
      const timer = setTimeout(() => {
        addDop();
      }, 2000);

      return () => {
      clearTimeout(timer);
      };
      // eslint-disable-next-line
    }, [dop_qty, dop_uno, dop_rt]);

    // function to calculate stills on change
    useEffect(() => {
        const addSti = () => {
        setStillsTotal(parseFloat(stills_qty || 0) * 
        parseFloat(stills_uno || 0) * 
        parseFloat(stills_rt || 0))
        }
        const timer = setTimeout(() => {
            addSti();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
      }, [stills_qty, stills_uno, stills_rt]);

    // function to calculate Camera Operator on change
    useEffect(() => {
      const addCamope = () => {
      setCameraopTotal(parseFloat(camera_op_qty || 0) * 
      parseFloat(camera_op_uno || 0) * 
      parseFloat(camera_op_rt || 0))
      }
      const timer = setTimeout(() => {
        addCamope();
      }, 2000);

      return () => {
      clearTimeout(timer);
      };
      // eslint-disable-next-line
    }, [camera_op_qty, camera_op_uno, camera_op_rt]);

    // function to calculate 1st Assistant Camera on change
    useEffect(() => {
      const addCamac1 = () => {
      setCamac1Total(parseFloat(cam_ac1_qty || 0) * 
      parseFloat(cam_ac1_uno || 0) * 
      parseFloat(cam_ac1_rt || 0))
      }
      const timer = setTimeout(() => {
        addCamac1();
      }, 2000);

      return () => {
      clearTimeout(timer);
      };
      // eslint-disable-next-line
    }, [cam_ac1_qty, cam_ac1_uno, cam_ac1_rt]);

    // function to calculate 2nd Assistant Camera on change
    useEffect(() => {
      const addCamac2 = () => {
      setCamac2Total(parseFloat(cam_ac2_qty || 0) * 
      parseFloat(cam_ac2_uno || 0) * 
      parseFloat(cam_ac2_rt || 0))
      }
      const timer = setTimeout(() => {
        addCamac2();
      }, 2000);

      return () => {
      clearTimeout(timer);
      };
      // eslint-disable-next-line
    }, [cam_ac2_qty, cam_ac2_uno, cam_ac2_rt]);

    // function to calculate DIT on change
    useEffect(() => {
      const addDit = () => {
      setDitTotal(parseFloat(dit_qty || 0) * 
      parseFloat(dit_uno || 0) * 
      parseFloat(dit_rt || 0))
      }
      const timer = setTimeout(() => {
        addDit();
      }, 2000);

      return () => {
      clearTimeout(timer);
      };
      // eslint-disable-next-line
    }, [dit_qty, dit_uno, dit_rt]);

    // function to calculate Steadicam on change
    useEffect(() => {
      const addSteady = () => {
      setSteadicamTotal(parseFloat(steadicam_qty || 0) * 
      parseFloat(steadicam_uno || 0) * 
      parseFloat(steadicam_rt || 0))
      }
      const timer = setTimeout(() => {
        addSteady();
      }, 2000);

      return () => {
      clearTimeout(timer);
      };
      // eslint-disable-next-line
    }, [steadicam_qty, steadicam_uno, steadicam_rt]);

    // function to calculate Camera PA on change
    useEffect(() => {
      const addCampa = () => {
      setCampaTotal(parseFloat(cam_pa_qty || 0) * 
      parseFloat(cam_pa_uno || 0) * 
      parseFloat(cam_pa_rt || 0))
      }
      const timer = setTimeout(() => {
        addCampa();
      }, 2000);

      return () => {
      clearTimeout(timer);
      };
      // eslint-disable-next-line
    }, [cam_pa_qty, cam_pa_uno, cam_pa_rt]);

    // function to calculate Drone Pilot on change
    useEffect(() => {
      const addDropil = () => {
      setDronepilotTotal(parseFloat(drone_pilot_qty || 0) * 
      parseFloat(drone_pilot_uno || 0) * 
      parseFloat(drone_pilot_rt || 0))
      }
      const timer = setTimeout(() => {
        addDropil();
      }, 2000);

      return () => {
      clearTimeout(timer);
      };
      // eslint-disable-next-line
    }, [drone_pilot_qty, drone_pilot_uno, drone_pilot_rt]);

    // function to calculate Other Camera on change
    useEffect(() => {
      const addOthcam = () => {
      setOthercamTotal(parseFloat(other_cam_qty || 0) * 
      parseFloat(other_cam_uno || 0) * 
      parseFloat(other_cam_rt || 0))
      }
      const timer = setTimeout(() => {
        addOthcam();
      }, 2000);

      return () => {
      clearTimeout(timer);
      };
      // eslint-disable-next-line
    }, [other_cam_qty, other_cam_uno, other_cam_rt]);

    // function to add all Camera Labour on change
    useEffect(() => {
      const addCamlab = () => {
      setCameralabourTotal(
      parseFloat(dopTotal || 0) +
      parseFloat(cameraopTotal || 0) +
      parseFloat(camac1Total || 0) +
      parseFloat(camac2Total || 0) +
      parseFloat(ditTotal || 0) +
      parseFloat(steadicamTotal || 0) +
      parseFloat(campaTotal || 0) +
      parseFloat(stillsTotal || 0) +
      parseFloat(dronepilotTotal || 0) +
      parseFloat(fringes_taxes_camera || 0) +
      parseFloat(othercamTotal || 0)
      )
      }
      const timer = setTimeout(() => {
        addCamlab();
      }, 1000);

      return () => {
      clearTimeout(timer);
      };
      // eslint-disable-next-line
      }, [dopTotal, cameraopTotal, camac1Total, camac2Total,
          ditTotal, steadicamTotal, campaTotal, 
          dronepilotTotal, stillsTotal, othercamTotal,
          fringes_taxes_camera,]);
    
  return (
    <div className="mt-5">
    <Row >
    <Col md={1} >
    <p className="mb-2">16.00</p>
    </Col>
    <Col md={9} >
    <p className={ `${styles.BoldBlack} mb-2`}>Camera Labour</p>
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
    {/* DOP */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>16.10</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>DOP</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="dop_qty" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        // type="number"
        className={styles.Input}
        name="dop_qty"
        value={dop_qty}
        onChange={handleChange}
          />
    </Form.Group>
    {errors?.dop_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="dop_uno" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dop_uno"
        value={dop_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.dop_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="dop_una" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dop_una"
        value={dop_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.dop_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="dop_rt" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dop_rt"
        value={dop_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.dop_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="dopTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dopTotal"
        value={dopTotal}
        readOnly
            />
    </Form.Group>
    {errors?.dopTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Camera Operator */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>16.20</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Camera Operator</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="camera_op_qty" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="camera_op_qty"
        value={camera_op_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.camera_op_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="camera_op_uno" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="camera_op_uno"
        value={camera_op_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.camera_op_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="camera_op_una" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="camera_op_una"
        value={camera_op_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.camera_op_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="camera_op_rt" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="camera_op_rt"
        value={camera_op_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.camera_op_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="cameraopTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cameraopTotal"
        value={cameraopTotal}
        readOnly
            />
    </Form.Group>
    {errors?.cameraopTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* 1st Assistant Camera */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>16.30</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>1st Assistant Camera</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="cam_ac1_qty" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cam_ac1_qty"
        value={cam_ac1_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.cam_ac1_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="cam_ac1_uno" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cam_ac1_uno"
        value={cam_ac1_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.cam_ac1_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="cam_ac1_una" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cam_ac1_una"
        value={cam_ac1_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.cam_ac1_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="cam_ac1_rt" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="number"
        className={styles.Input}
        name="cam_ac1_rt"
        value={cam_ac1_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.cam_ac1_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="camac1Total" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="camac1Total"
        value={camac1Total}
        readOnly
            />
    </Form.Group>
    {errors?.camac1Total?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* 2nd Assistant Camera */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>16.40</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>2nd Assistant Camera</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="cam_ac2_qty" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cam_ac2_qty"
        value={cam_ac2_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.cam_ac2_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="cam_ac2_uno" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cam_ac2_uno"
        value={cam_ac2_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.cam_ac2_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="cam_ac2_una" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cam_ac2_una"
        value={cam_ac2_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.cam_ac2_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="cam_ac2_rt" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cam_ac2_rt"
        value={cam_ac2_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.cam_ac2_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="camac2Total" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="camac2Total"
        value={camac2Total}
        readOnly
            />
    </Form.Group>
    {errors?.camac2Total?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* DIT */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>16.50</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>DIT</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="dit_qty" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dit_qty"
        value={dit_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.dit_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="dit_uno" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dit_uno"
        value={dit_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.dit_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="dit_una" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dit_una"
        value={dit_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.dit_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="dit_rt" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dit_rt"
        value={dit_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.dit_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="ditTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ditTotal"
        value={ditTotal}
        readOnly
            />
    </Form.Group>
    {errors?.ditTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Steadicam */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>16.60</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Steadicam</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="steadicam_qty" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="steadicam_qty"
        value={steadicam_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.steadicam_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="steadicam_uno" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="steadicam_uno"
        value={steadicam_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.steadicam_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="steadicam_una" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="steadicam_una"
        value={steadicam_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.steadicam_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="steadicam_rt" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="steadicam_rt"
        value={steadicam_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.steadicam_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="steadicamTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="steadicamTotal"
        value={steadicamTotal}
        readOnly
            />
    </Form.Group>
    {errors?.steadicamTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Camera PA */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>16.70</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Camera PA</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="cam_pa_qty" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cam_pa_qty"
        value={cam_pa_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.cam_pa_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="cam_pa_uno" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cam_pa_uno"
        value={cam_pa_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.cam_pa_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="cam_pa_una" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cam_pa_una"
        value={cam_pa_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.cam_pa_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="cam_pa_rt" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cam_pa_rt"
        value={cam_pa_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.cam_pa_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="campaTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="campaTotal"
        value={campaTotal}
        readOnly
            />
    </Form.Group>
    {errors?.campaTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Drone Pilot */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>16.80</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Drone Pilot</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="drone_pilot_qty" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="drone_pilot_qty"
        value={drone_pilot_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.drone_pilot_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="drone_pilot_uno" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="drone_pilot_uno"
        value={drone_pilot_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.drone_pilot_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="drone_pilot_una" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="drone_pilot_una"
        value={drone_pilot_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.drone_pilot_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="drone_pilot_rt" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="drone_pilot_rt"
        value={drone_pilot_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.drone_pilot_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="dronepilotTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dronepilotTotal"
        value={dronepilotTotal}
        readOnly
            />
    </Form.Group>
    {errors?.dronepilotTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Stills Photographer */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>16.90</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Stills Photographer</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="stills_qty" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stills_qty"
        value={stills_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.stills_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="stills_uno" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stills_uno"
        value={stills_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.stills_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="stills_una" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stills_una"
        value={stills_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.stills_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="stills_rt" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stills_rt"
        value={stills_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.stills_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="stillsTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stillsTotal"
        value={stillsTotal}
        readOnly
            />
    </Form.Group>
    {errors?.stillsTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Other */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>16.91</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Other - Camera</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_cam_qty" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_cam_qty"
        value={other_cam_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_cam_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_cam_uno" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_cam_uno"
        value={other_cam_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_cam_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_cam_una" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_cam_una"
        value={other_cam_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.other_cam_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_cam_rt" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_cam_rt"
        value={other_cam_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_cam_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="othercamTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="othercamTotal"
        value={othercamTotal}
        readOnly
            />
    </Form.Group>
    {errors?.othercamTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Fringes and Taxes */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>16.92</p>
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
    <Form.Group controlId="fringes_taxes_camera" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="fringes_taxes_camera"
        value={fringes_taxes_camera}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.fringes_taxes_camera?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Camera Total */}
    <Row className="mt-3">
    <Col md={1} >
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>CAMERA TOTAL</p>
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
    <Form.Group controlId="cameralabourTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cameralabourTotal"
        value={cameralabourTotal}
        readOnly
            />
    </Form.Group>
    {errors?.cameralabourTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
  )
}

export default Camera 