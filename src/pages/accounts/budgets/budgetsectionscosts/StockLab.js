/* Component in the Budget component to edit Stock and Lab */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const StockLab = (props) => {
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});

  const {postDataStockLab, setPostDataStockLab,
  stockLabTotal, setStockLabTotal, setShow,} = props;

  const {film_stock, video_stock, digital_stock, transfer_stock,
    hard_drives, dalies, telecine, audio_stock, magnetic_transfer,
    stills, loss_dam_lab, other_lab,
  } = postDataStockLab;

  // handleChange - replace(/\D/g,'') - works but no decimal
  const handleChange = (event) => {
    setPostDataStockLab({
    ...postDataStockLab,
    [event.target.name]: parseFloat(event.target.value.replace(/\D/g,'') || 0 ),
    });
  };

  // function to add all Stock and Lab on change
  useEffect(() => {
    const addLab = () => {
        setStockLabTotal(
        parseFloat(film_stock || 0) +
        parseFloat(video_stock || 0) +
        parseFloat(digital_stock || 0) +
        parseFloat(transfer_stock || 0) +
        parseFloat(hard_drives || 0) +
        parseFloat(dalies || 0) +
        parseFloat(telecine || 0) +
        parseFloat(audio_stock || 0) +
        parseFloat(magnetic_transfer || 0) +
        parseFloat(stills || 0) +
        parseFloat(loss_dam_lab || 0) +
        parseFloat(other_lab || 0)
       )
    }
    const timer = setTimeout(() => {
        addLab();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
   // eslint-disable-next-line
  }, [film_stock, video_stock, digital_stock, transfer_stock,
    hard_drives, dalies, telecine, audio_stock, magnetic_transfer,
    stills, loss_dam_lab, other_lab,]);

  return (
    <div className="mt-5">
    <Row >
    <Col md={1} >
    <p className="mb-2">41.00</p>
    </Col>
    <Col md={9} >
    <p className={ `${styles.BoldBlack} mb-2`}>Production Stock & Lab</p>
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
    {/* Film Stock */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>41.10</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Film Stock</p>
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
    <Form.Group controlId="film_stock" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="film_stock"
        value={film_stock}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.film_stock?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Video Stock */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>41.20</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Video Stock</p>
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
    <Form.Group controlId="video_stock" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="video_stock"
        value={video_stock}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.video_stock?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Digital Stock */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>41.30</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Digital Stock</p>
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
    <Form.Group controlId="digital_stock" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="digital_stock"
        value={digital_stock}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.digital_stock?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Transfer Stock */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>41.40</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Transfer Stock</p>
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
    <Form.Group controlId="transfer_stock" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="transfer_stock"
        value={transfer_stock}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.transfer_stock?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Hard Drives */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>41.50</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Hard Drives</p>
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
    <Form.Group controlId="hard_drives" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="hard_drives"
        value={hard_drives}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.hard_drives?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Dailies */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>41.60</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Dailies</p>
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
    <Form.Group controlId="dalies" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dalies"
        value={dalies}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.dalies?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Telecine */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>41.70</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Telecine</p>
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
    <Form.Group controlId="telecine" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="telecine"
        value={telecine}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.telecine?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Audio Stock */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>41.80</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Audio Stock</p>
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
    <Form.Group controlId="audio_stock" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="audio_stock"
        value={audio_stock}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.audio_stock?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Magnetic Transfer */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>41.90</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Magnetic Transfer</p>
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
    <Form.Group controlId="magnetic_transfer" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="magnetic_transfer"
        value={magnetic_transfer}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.magnetic_transfer?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Stills */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>41.91</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Stills</p>
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
    <Form.Group controlId="stills" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stills"
        value={stills}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.stills?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Loss & Damage */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>41.92</p>
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
    <Form.Group controlId="loss_dam_lab" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="loss_dam_lab"
        value={loss_dam_lab}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.loss_dam_lab?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Other */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>41.93</p>
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
    <Form.Group controlId="other_lab" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_lab"
        value={other_lab}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_lab?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* PRODUCTION STOCK & LAB Total */}
    <Row className="mt-3">
    <Col md={1} >
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL PRODUCTION STOCK & LAB</p>
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
    <Form.Group controlId="stockLabTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stockLabTotal"
        value={stockLabTotal}
        readOnly
            />
    </Form.Group>
    {errors?.stockLabTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
  )
}

export default StockLab