/* Component in the Budget component to edit Transportation */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const Transportation = (props) => {
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});

  const {postDataTransportation, setPostDataTransportation,
    transportTotal, setTransportTotal, setShow} = props;

  const {production_cars, trucks_vans, buses, motorhomes,
        talent_cars, support_vehicles, boats_planes, fuel, repairs, taxis,
        parking, licenses_permits, brokerage_insurance, other_transport,
  } = postDataTransportation;

  // handleChange 
  const handleChange = (event) => {
    setPostDataTransportation({
    ...postDataTransportation,
    [event.target.name]: parseFloat(event.target.value || 0 ),
    });
  }; 

  // function to add all Transport on change
  useEffect(() => {
    const addTransport2 = () => {
        setTransportTotal(
        parseFloat(production_cars || 0) +
        parseFloat(trucks_vans || 0) +
        parseFloat(buses || 0) +
        parseFloat(motorhomes || 0) +
        parseFloat(talent_cars || 0) +
        parseFloat(support_vehicles || 0) +
        parseFloat(boats_planes || 0) +
        parseFloat(fuel || 0) +
        parseFloat(repairs || 0) +
        parseFloat(taxis || 0) +
        parseFloat(parking || 0) +
        parseFloat(licenses_permits || 0) +
        parseFloat(brokerage_insurance || 0) +
        parseFloat(other_transport || 0)
       )
    }
    const timer = setTimeout(() => {
        addTransport2();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };

}, [production_cars, trucks_vans, buses, motorhomes, talent_cars,
    support_vehicles, boats_planes, fuel, repairs, taxis, parking,
    licenses_permits, brokerage_insurance, other_transport,]);

  return (
    <div className="mt-5">
    <Row >
    <Col md={1} >
    <p className="mb-2">27.00</p>
    </Col>
    <Col md={9} >
    <p className={ `${styles.BoldBlack} mb-2`}>Transportation</p>
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
    <Col md={1} >
    <p className="mb-0">#</p>
    </Col>
    <Col className="px-0 mx-0" md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} >
    <p className="mb-0">Unit</p>
    </Col>
    <Col md={1} >
    <p className="mb-0">Price</p>
    </Col>
    <Col md={2} >
    <p className="mb-0">Total</p>
    </Col>
    </Row>
    {/* Production Cars */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>27.10</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Production Cars</p>
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
    <Form.Group controlId="production_cars" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_cars"
        value={production_cars}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.production_cars?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Trucks/Vans */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>27.20</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Trucks/Vans</p>
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
    <Form.Group controlId="trucks_vans" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="trucks_vans"
        value={trucks_vans}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.trucks_vans?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Buses */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>27.30</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Buses</p>
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
    <Form.Group controlId="buses" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="buses"
        value={buses}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.buses?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Motorhomes */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>27.40</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Motorhomes</p>
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
    <Form.Group controlId="motorhomes" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="motorhomes"
        value={motorhomes}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.motorhomes?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Talent Cars */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>27.50</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Talent Cars</p>
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
    <Form.Group controlId="talent_cars" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="talent_cars"
        value={talent_cars}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.talent_cars?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Special Support Vehicles */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>27.60</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Special Support Vehicles</p>
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
    <Form.Group controlId="support_vehicles" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="support_vehicles"
        value={support_vehicles}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.support_vehicles?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Boats/Planes */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>27.70</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Boats/Planes</p>
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
    <Form.Group controlId="boats_planes" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="boats_planes"
        value={boats_planes}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.boats_planes?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Fuel */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>27.80</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Fuel</p>
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
    <Form.Group controlId="fuel" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="fuel"
        value={fuel}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.fuel?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Repairs */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>27.90</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Repairs</p>
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
    <Form.Group controlId="repairs" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="repairs"
        value={repairs}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.repairs?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Taxis */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>27.91</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Taxis</p>
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
    <Form.Group controlId="taxis" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="taxis"
        value={taxis}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.taxis?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Parking */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>27.92</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Parking</p>
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
    <Form.Group controlId="parking" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="parking"
        value={parking}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.parking?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Special Licenses/Permits */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>27.93</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Special Licenses/Permits</p>
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
    <Form.Group controlId="licenses_permits" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="licenses_permits"
        value={licenses_permits}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.licenses_permits?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Brokerage/Insurance */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>27.94</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Brokerage/Insurance</p>
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
    <Form.Group controlId="brokerage_insurance" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="brokerage_insurance"
        value={brokerage_insurance}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.brokerage_insurance?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Other */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>27.95</p>
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
    <Form.Group controlId="other_transport" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_transport"
        value={other_transport}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_transport?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* TRANSPORTATION Total */}
    <Row className="mt-3">
    <Col md={1} >
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL TRANSPORTATION</p>
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
    <Form.Group controlId="transportTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="transportTotal"
        value={transportTotal}
        readOnly
            />
    </Form.Group>
    {errors?.transportTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
  )
}

export default Transportation