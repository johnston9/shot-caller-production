/* Component in the Budget component to edit Sound Equ */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const SoundEqu = (props) => {  
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});
  
  const {postDataSoundEqu, setPostDataSoundEqu,
  soundTotal, setSoundTotal, setShow,} = props;

  const {basic_package_rent_sound, daily_rentals_sound,
    wireless_mics, sound_purchases, walkie_talkies, other_sound,
  } = postDataSoundEqu;

  // handleChange 
  const handleChange = (event) => {
    setPostDataSoundEqu({
    ...postDataSoundEqu,
    [event.target.name]: parseFloat(event.target.value || 0 ),
    });
  };

  // function to add all Sound Equipment on change
  useEffect(() => {
    const addSoundEqu = () => {
      setSoundTotal(
        parseFloat(basic_package_rent_sound || 0) +
        parseFloat(daily_rentals_sound || 0) +
        parseFloat(wireless_mics || 0) +
        parseFloat(sound_purchases || 0) +
        parseFloat(walkie_talkies || 0) +
        parseFloat(other_sound || 0)
       )
    }
    const timer = setTimeout(() => {
      addSoundEqu();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
   // eslint-disable-next-line
  }, [basic_package_rent_sound, daily_rentals_sound,
    wireless_mics, sound_purchases, walkie_talkies, other_sound,]);
  
  return (
    <div className="mt-5">
    <Row >
    <Col md={1} >
    <p className="mb-2">39.00</p>
    </Col>
    <Col md={9} >
    <p className={ `${styles.BoldBlack} mb-2`}>Sound Equipment</p>
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
    {/* Basic Package Rentals */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>39.10</p>
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
    <Form.Group controlId="basic_package_rent_sound" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="basic_package_rent_sound"
        value={basic_package_rent_sound}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.basic_package_rent_sound?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Daily Rentals */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>39.20</p>
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
    <Form.Group controlId="daily_rentals_sound" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="daily_rentals_sound"
        value={daily_rentals_sound}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.daily_rentals_sound?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Wireless Microphones */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>39.30</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Wireless Microphones</p>
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
    <Form.Group controlId="wireless_mics" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="wireless_mics"
        value={wireless_mics}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.wireless_mics?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Purchases */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>39.40</p>
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
    <Form.Group controlId="sound_purchases" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="sound_purchases"
        value={sound_purchases}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.sound_purchases?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Walkie Talkies */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>39.50</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Walkie Talkies</p>
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
    <Form.Group controlId="walkie_talkies" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="walkie_talkies"
        value={walkie_talkies}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.walkie_talkies?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Other */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>39.60</p>
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
    <Form.Group controlId="other_sound" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_sound"
        value={other_sound}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_sound?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* SOUND EQUIPMENT Total */}
    <Row className="mt-3">
    <Col md={1} >
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL SOUND EQUIPMENT</p>
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
    <Form.Group controlId="soundTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="soundTotal"
        value={soundTotal}
        readOnly
            />
    </Form.Group>
    {errors?.soundTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
  )
}

export default SoundEqu