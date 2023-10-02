/* Component in the Budget component to edit Post Versioning */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const Versioning = (props) => {
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});

  const {postDataPostVersion, setPostDataPostVersion,
  postVersionTotal, setPostVersionTotal, setShow,} = props;

  const {dubs, subtitles, closed_caption, versioning, trailers,
    ads, transfers_ver, prints_ver, dig_copies_ver, 
    other_copies_ver,
  } = postDataPostVersion;

  // handleChange 
  const handleChange = (event) => {
    setPostDataPostVersion({
    ...postDataPostVersion,
    [event.target.name]: parseFloat(event.target.value || 0 ),
    });
  };
  
  // function to add all Versioning on change
  useEffect(() => {
    const addVersio = () => {
        setPostVersionTotal(
        parseFloat(dubs || 0) +
        parseFloat(subtitles || 0) +
        parseFloat(closed_caption || 0) +
        parseFloat(versioning || 0) +
        parseFloat(trailers || 0) +
        parseFloat(ads || 0) +
        parseFloat(transfers_ver || 0) +
        parseFloat(prints_ver || 0) +
        parseFloat(dig_copies_ver || 0) +
        parseFloat(other_copies_ver || 0)
       )
    }
    const timer = setTimeout(() => {
        addVersio();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
   // eslint-disable-next-line
  }, [dubs, subtitles, closed_caption, versioning, trailers,
    ads, transfers_ver, prints_ver, dig_copies_ver, 
    other_copies_ver,]);

  return (
    <div className="mt-5">
    <Row >
    <Col md={1} >
    <p className="mb-2">48.00</p>
    </Col>
    <Col md={9} >
    <p className={ `${styles.BoldBlack} mb-2`}>Versioning/Closed-captioning/Dubs/Copies</p>
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
    {/* Dubs */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>48.10</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Dubs</p>
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
    <Form.Group controlId="dubs" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dubs"
        value={dubs}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.dubs?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Subtitles */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>48.20</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Subtitles</p>
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
    <Form.Group controlId="subtitles" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="subtitles"
        value={subtitles}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.subtitles?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Closed-Captioning */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>48.30</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Closed-Captioning</p>
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
    <Form.Group controlId="closed_caption" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="closed_caption"
        value={closed_caption}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.closed_caption?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Versioning */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>48.40</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Versioning</p>
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
    <Form.Group controlId="versioning" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="versioning"
        value={versioning}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.versioning?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Trailers */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>48.50</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Trailers</p>
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
    <Form.Group controlId="trailers" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="trailers"
        value={trailers}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.trailers?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Ads */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>48.60</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Ads</p>
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
    <Form.Group controlId="ads" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ads"
        value={ads}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.ads?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Transfers */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>48.70</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Versioning Transfers</p>
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
    <Form.Group controlId="transfers_ver" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="transfers_ver"
        value={transfers_ver}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.transfers_ver?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Prints */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>48.80</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Versioning Prints</p>
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
    <Form.Group controlId="prints_ver" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="prints_ver"
        value={prints_ver}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.prints_ver?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Digital Copies */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>48.90</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Versioning Digital Copies</p>
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
    <Form.Group controlId="dig_copies_ver" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dig_copies_ver"
        value={dig_copies_ver}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.dig_copies_ver?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Other Media Copies */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>48.91</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Other Media Copies</p>
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
    <Form.Group controlId="other_copies_ver" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_copies_ver"
        value={other_copies_ver}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_copies_ver?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* VERSIONING/CLOSED-CAPTIONING/DUBS/COPIES Total */}
    <Row className="mt-3">
    <Col md={1} >
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>VERSIONING/CLOSED-CAPTIONING/DUBS/COPIES TOTAL</p>
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
    <Form.Group controlId="postVersionTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="postVersionTotal"
        value={postVersionTotal}
        readOnly
            />
    </Form.Group>
    {errors?.postVersionTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
  )
}

export default Versioning