/* Component in the Budget component to edit Camera Equ */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const CameraEqu = (props) => {
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});

  const {postDataCameraEqu, setPostDataCameraEqu,
    cameraTotal, setCameraTotal, setShow,} = props;

  const {basic_package_rent_cam, daily_rentals_cam, other_camera,
        specialty_rent_cam, camera_purchases, steadicam,
        video_teleprompter, camera_ship_brok, loss_damage_cam,
  } = postDataCameraEqu;

  // handleChange - replace(/\D/g,'') - works but no decimal
  const handleChange = (event) => {
    setPostDataCameraEqu({
    ...postDataCameraEqu,
    [event.target.name]: parseFloat(event.target.value.replace(/\D/g,'') || 0 ),
    });
  };

  // function to add all Camera Equipment on change
  useEffect(() => {
    const addCamEqu = () => {
        setCameraTotal(
        parseFloat(basic_package_rent_cam || 0) +
        parseFloat(daily_rentals_cam || 0) +
        parseFloat(specialty_rent_cam || 0) +
        parseFloat(camera_purchases || 0) +
        parseFloat(steadicam || 0) +
        parseFloat(video_teleprompter || 0) +
        parseFloat(camera_ship_brok || 0) +
        parseFloat(loss_damage_cam || 0) +
        parseFloat(other_camera || 0)
       )
    }
    const timer = setTimeout(() => {
        addCamEqu();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [basic_package_rent_cam, daily_rentals_cam, other_camera,
    specialty_rent_cam, camera_purchases, steadicam,
    video_teleprompter, camera_ship_brok, loss_damage_cam,]);
    
  return (
    <div className={`${styles.WhiteBack} mt-3 mb-5`}>
    <Row className="mx-0" >
    <Col md={12}
        className={ `${styles.Overview} py-0 text-center`}>
            <span className={`${styles.Close } py-1 mb-0 float-right `} 
    onClick={() => setShow(false) } >Close</span>
    <p className="pl-5 py-1">
    CAMERA EQUIPMENT SECTION
    </p>
    </Col>
    <Col md={2} >
    </Col>
    </Row>
    <div className="px-2" >
    <Row className={`mt-3`}>
    <Col md={1} >
    <p className={`${styles.Underline}`}>36.00</p>
    </Col>
    <Col md={9} >
    <p className={ `${styles.BoldBlack} mb-1`}>Camera Equipment</p>
    </Col>
    <Col md={2}>
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
    {/* Basic Package Rentals */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} >
    <p className={`${styles.Underline}`}>36.10</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Basic Package Rentals</p>
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
    <Form.Group controlId="basic_package_rent_cam" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="basic_package_rent_cam"
        value={basic_package_rent_cam}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.basic_package_rent_cam?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break3} mb-0 mt-0`}/>
    </Col>
    </Row>
    {/* Daily Rentals */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} >
    <p className={`${styles.Underline}`}>36.20</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Daily Rentals</p>
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
    <Form.Group controlId="daily_rentals_cam" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="daily_rentals_cam"
        value={daily_rentals_cam}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.daily_rentals_cam?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break3} mb-0 mt-0`}/>
    </Col>
    </Row>
    {/* Specialty Rentals */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} >
    <p className={`${styles.Underline}`}>36.30</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Specialty Rentals</p>
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
    <Form.Group controlId="specialty_rent_cam" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="specialty_rent_cam"
        value={specialty_rent_cam}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.specialty_rent_cam?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break3} mb-0 mt-0`}/>
    </Col>
    </Row>
    {/* Purchases */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} >
    <p className={`${styles.Underline}`}>36.40</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Purchases</p>
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
    <Form.Group controlId="camera_purchases" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="camera_purchases"
        value={camera_purchases}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.camera_purchases?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break3} mb-0 mt-0`}/>
    </Col>
    </Row>
    {/* Steadicam */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} >
    <p className={`${styles.Underline}`}>36.50</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Steadicam</p>
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
    <Form.Group controlId="steadicam" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="steadicam"
        value={steadicam}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.steadicam?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break3} mb-0 mt-0`}/>
    </Col>
    </Row>
    {/* Video/Teleprompter */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} >
    <p className={`${styles.Underline}`}>36.60</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Video/Teleprompter</p>
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
    <Form.Group controlId="video_teleprompter" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="video_teleprompter"
        value={video_teleprompter}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.video_teleprompter?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break3} mb-0 mt-0`}/>
    </Col>
    </Row>
    {/* Shipping/Brokerage */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} >
    <p className={`${styles.Underline}`}>36.70</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Shipping/Brokerage</p>
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
    <Form.Group controlId="camera_ship_brok" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="camera_ship_brok"
        value={camera_ship_brok}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.camera_ship_brok?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break3} mb-0 mt-0`}/>
    </Col>
    </Row>
    {/* Loss & Damage */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} >
    <p className={`${styles.Underline}`}>36.80</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Loss & Damage</p>
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
    <Form.Group controlId="loss_damage_cam" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="loss_damage_cam"
        value={loss_damage_cam}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.loss_damage_cam?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break3} mb-0 mt-0`}/>
    </Col>
    </Row>
    {/* Other */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} >
    <p className={`${styles.Underline}`}>36.90</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Other</p>
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
    <Form.Group controlId="other_camera" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_camera"
        value={other_camera}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_camera?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break3} mb-0 mt-0`}/>
    </Col>
    </Row>
    {/* CAMERA EQUIPMENT Total */}
    <Row className="mt-3 pb-1">
    <Col md={1} >
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL CAMERA EQUIPMENT</p>
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
    <Form.Group controlId="cameraTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cameraTotal"
        value={cameraTotal}
        readOnly
            />
    </Form.Group>
    {errors?.cameraTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break3} mb-0 mt-0`}/>
    </Col>
    </Row>
    </div>
    </div>
  )
}

export default CameraEqu