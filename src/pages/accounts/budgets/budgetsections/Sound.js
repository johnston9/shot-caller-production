/* Component in the Budget component to edit Sound */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const Sound = (props) => {
    // eslint-disable-next-line
    const [errors, setErrors] = useState({});

    const {postDataSoundPro, setPostDataSoundPro,
      soundmixerTotal, setSoundmixerTotal,
      boomoperatorTotal, setBoomoperatorTotal,
      cablewranglerTotal, setCablewranglerTotal, setShow,
      othersoundlabourTotal, setOthersoundlabourTotal,
      soundlabourTotal, setSoundlabourTotal,} = props;

    const {sound_mixer_qty, sound_mixer_uno,
      sound_mixer_una, sound_mixer_rt,
      boom_operator_qty, boom_operator_uno,
      boom_operator_una, boom_operator_rt,
      cable_wrangler_qty, cable_wrangler_uno,
      cable_wrangler_una, cable_wrangler_rt,
      other_sound_labour_qty, other_sound_labour_uno,
      other_sound_labour_una, other_sound_labour_rt,
      fringes_taxes_sound,} = postDataSoundPro;

    // handleChange 
    const handleChange = (event) => {
      setPostDataSoundPro({
      ...postDataSoundPro,
      [event.target.name]: parseFloat(event.target.value || 0 ),
      });
    }; 

    // handleChange Text 
    const handleChangeText = (event) => {
      setPostDataSoundPro({
    ...postDataSoundPro,
    [event.target.name]: event.target.value,
    });
    };

    // Calculate Functions
    // function to calculate Sound Mixer on change
    useEffect(() => {
      const addSoumix = () => {
      setSoundmixerTotal(parseFloat(sound_mixer_qty || 0) * 
      parseFloat(sound_mixer_uno || 0) * 
      parseFloat(sound_mixer_rt || 0))
      }
      const timer = setTimeout(() => {
        addSoumix();
      }, 2000);

      return () => {
      clearTimeout(timer);
      };
      // eslint-disable-next-line
    }, [sound_mixer_qty, sound_mixer_uno, sound_mixer_rt]);

    // function to calculate Boom Operator on change
    useEffect(() => {
      const addBooope = () => {
      setBoomoperatorTotal(parseFloat(boom_operator_qty || 0) * 
      parseFloat(boom_operator_uno || 0) * 
      parseFloat(boom_operator_rt || 0))
      }
      const timer = setTimeout(() => {
        addBooope();
      }, 2000);

      return () => {
      clearTimeout(timer);
      };
      // eslint-disable-next-line
    }, [boom_operator_qty, boom_operator_uno, boom_operator_rt]);

    // function to calculate Cable Wrangler on change
    useEffect(() => {
      const addCabwra = () => {
      setCablewranglerTotal(parseFloat(cable_wrangler_qty || 0) * 
      parseFloat(cable_wrangler_uno || 0) * 
      parseFloat(cable_wrangler_rt || 0))
      }
      const timer = setTimeout(() => {
        addCabwra();
      }, 2000);

      return () => {
      clearTimeout(timer);
      };
      // eslint-disable-next-line
    }, [cable_wrangler_qty, cable_wrangler_uno, cable_wrangler_rt]);

    // function to calculate Other Sound Labour on change
    useEffect(() => {
      const addOthsou = () => {
      setOthersoundlabourTotal(parseFloat(other_sound_labour_qty || 0) * 
      parseFloat(other_sound_labour_uno || 0) * 
      parseFloat(other_sound_labour_rt || 0))
      }
      const timer = setTimeout(() => {
        addOthsou();
      }, 2000);

      return () => {
      clearTimeout(timer);
      };
      // eslint-disable-next-line
    }, [other_sound_labour_qty, other_sound_labour_uno, other_sound_labour_rt]);

    // function to add all Sound Labour on change
    useEffect(() => {
      const AddSouLab = () => {
      setSoundlabourTotal(
      parseFloat(soundmixerTotal || 0) +
      parseFloat(boomoperatorTotal || 0) +
      parseFloat(cablewranglerTotal || 0) +
      parseFloat(fringes_taxes_sound || 0) +
      parseFloat(othersoundlabourTotal || 0)
      )
      }
      const timer = setTimeout(() => {
        AddSouLab();
      }, 1000);

      return () => {
      clearTimeout(timer);
      };
      // eslint-disable-next-line
      }, [soundmixerTotal, boomoperatorTotal, cablewranglerTotal,
        othersoundlabourTotal, fringes_taxes_sound,]);
    
  return (
    <div className="mt-5">
    <Row >
    <Col md={1} >
    <p className="mb-2">19.00</p>
    </Col>
    <Col md={9} >
    <p className={ `${styles.BoldBlack} mb-2`}>Sound Labour</p>
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
    {/* Sound Mixer */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>19.10</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Sound Mixer</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="sound_mixer_qty" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="sound_mixer_qty"
        value={sound_mixer_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.sound_mixer_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="sound_mixer_uno" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="sound_mixer_uno"
        value={sound_mixer_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.sound_mixer_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="sound_mixer_una" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="sound_mixer_una"
        value={sound_mixer_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.sound_mixer_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="sound_mixer_rt" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="sound_mixer_rt"
        value={sound_mixer_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.sound_mixer_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="soundmixerTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="soundmixerTotal"
        value={soundmixerTotal}
        readOnly
            />
    </Form.Group>
    {errors?.soundmixerTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Boom Operator */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>19.20</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Boom Operator</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="boom_operator_qty" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="boom_operator_qty"
        value={boom_operator_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.boom_operator_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="boom_operator_uno" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="boom_operator_uno"
        value={boom_operator_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.boom_operator_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="boom_operator_una" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="boom_operator_una"
        value={boom_operator_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.boom_operator_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="boom_operator_rt" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="boom_operator_rt"
        value={boom_operator_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.boom_operator_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="boomoperatorTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="boomoperatorTotal"
        value={boomoperatorTotal}
        readOnly
            />
    </Form.Group>
    {errors?.boomoperatorTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Cable Wrangler */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>19.30</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Cable Wrangler</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="cable_wrangler_qty" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cable_wrangler_qty"
        value={cable_wrangler_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.cable_wrangler_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="cable_wrangler_uno" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cable_wrangler_uno"
        value={cable_wrangler_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.cable_wrangler_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="cable_wrangler_una" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cable_wrangler_una"
        value={cable_wrangler_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.cable_wrangler_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="cable_wrangler_rt" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cable_wrangler_rt"
        value={cable_wrangler_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.cable_wrangler_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="cablewranglerTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cablewranglerTotal"
        value={cablewranglerTotal}
        readOnly
            />
    </Form.Group>
    {errors?.cablewranglerTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Other Sound Labour */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>19.40</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Other Sound Labour</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_sound_labour_qty" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_sound_labour_qty"
        value={other_sound_labour_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_sound_labour_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_sound_labour_uno" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_sound_labour_uno"
        value={other_sound_labour_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_sound_labour_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_sound_labour_una" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_sound_labour_una"
        value={other_sound_labour_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.other_sound_labour_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_sound_labour_rt" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_sound_labour_rt"
        value={other_sound_labour_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_sound_labour_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="othersoundlabourTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="othersoundlabourTotal"
        value={othersoundlabourTotal}
        readOnly
            />
    </Form.Group>
    {errors?.othersoundlabourTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Fringes and Taxes */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>19.50</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Fringes and Taxes</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>%</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="fringes_taxes_sound" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="fringes_taxes_sound"
        value={fringes_taxes_sound}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.fringes_taxes_sound?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Sound Total */}
    <Row className="mt-3">
    <Col md={1} >
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>PRODUCTION SOUND TOTAL</p>
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
    <Form.Group controlId="soundlabourTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="soundlabourTotal"
        value={soundlabourTotal}
        readOnly
            />
    </Form.Group>
    {errors?.soundlabourTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
  )
}

export default Sound