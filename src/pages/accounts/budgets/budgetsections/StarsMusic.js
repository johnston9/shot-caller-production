/* Component in the Budget component to edit Stars/Music */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const StarsMusic = (props) => {
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});

  const {postDataStarsMusic, setPostDataStarsMusic,
         starsMusicTotal, setStarsMusicTotal,
         setShow,} = props;
  
  // postDataStarsMusic postData values
  const {
    stars, stars_rights_payments, travel_expenses_stars,
    living_expenses_stars, other_stars, fringes_taxes_stars,
    music, music_supervisor, travel_expenses_music, living_expenses_music,
    music_rights_addl_songs, other_music, fringes_taxes_music,
  } = postDataStarsMusic;

  // StarsMusic handleChange
  const handleChangeStarsMusic = (event) => {
    setPostDataStarsMusic({
      ...postDataStarsMusic,
      [event.target.name]: parseFloat(event.target.value || 0 ),
    });
  }; 

  // function to add all StarsMusic on change
  useEffect(() => {
    const addStarsMusic = () => {
      setStarsMusicTotal(
        parseFloat(stars || 0) +
        parseFloat(stars_rights_payments || 0) +
        parseFloat(travel_expenses_stars || 0) +
        parseFloat(living_expenses_stars || 0) +
        parseFloat(other_stars || 0) +
        parseFloat(fringes_taxes_stars || 0) +
        parseFloat(music || 0) +
        parseFloat(music_supervisor || 0) +
        parseFloat(travel_expenses_music || 0) +
        parseFloat(living_expenses_music || 0) +
        parseFloat(music_rights_addl_songs || 0) +
        parseFloat(other_music || 0) +
        parseFloat(fringes_taxes_music || 0)
       )
    }
    const timer = setTimeout(() => {
      addStarsMusic();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [stars, stars_rights_payments, travel_expenses_stars,
    living_expenses_stars, other_stars, fringes_taxes_stars,
    music, music_supervisor, travel_expenses_music, living_expenses_music,
    music_rights_addl_songs, other_music, fringes_taxes_music
  ]);

  return (
    <div>
    <Row className="mt-5" >
    <Col md={1} >
    <p className="mb-2">05.00</p>
    </Col>
    <Col md={9} >
    <p className={ `${styles.BoldBlack} mb-2`}>STARS / MUSIC</p>
    </Col>
    <Col md={2}>
    <span className={`${styles.Close }`} 
    onClick={() => setShow(false) } >Close</span>
    </Col>
    </Row>
    {/* TITLES */}
    <Row className={ `${styles.Overview} mb-2 py-1`} >
    <Col md={1} >
    <p>ACCT</p>
    </Col>
    <Col md={6} >
    <p>Description</p>
    </Col>
    <Col md={1} >
    <p>#</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p>Price</p>
    </Col>
    <Col md={2} >
    <p>Total</p>
    </Col>
    </Row>
    {/* Stars */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>05.10</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Stars</p>
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
    <Form.Group controlId="stars" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stars"
        value={stars}
        onChange={handleChangeStarsMusic}
            />
    </Form.Group>
    {errors?.stars?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Rights */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>05.20</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Stars Rights Payments</p>
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
    <Form.Group controlId="stars_rights_payments" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stars_rights_payments"
        value={stars_rights_payments}
        onChange={handleChangeStarsMusic}
            />
    </Form.Group>
    {errors?.stars_rights_payments?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Travel Expenses Stars */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>05.30</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Travel Expenses Stars</p>
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
    <Form.Group controlId="travel_expenses_stars" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="travel_expenses_stars"
        value={travel_expenses_stars}
        onChange={handleChangeStarsMusic}
            />
    </Form.Group>
    {errors?.travel_expenses_stars?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Living Expenses Stars */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>05.40</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Living Expenses Stars</p>
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
    <Form.Group controlId="living_expenses_stars" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="living_expenses_stars"
        value={living_expenses_stars}
        onChange={handleChangeStarsMusic}
            />
    </Form.Group>
    {errors?.living_expenses_stars?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Stars - Other */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>05.50</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Stars - Other </p>
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
    <Form.Group controlId="other_stars" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_stars"
        value={other_stars}
        onChange={handleChangeStarsMusic}
            />
    </Form.Group>
    {errors?.other_stars?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Stars - Fringes Taxes */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>05.60</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Stars - Fringes Taxes</p>
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
    <Form.Group controlId="fringes_taxes_stars" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="fringes_taxes_stars"
        value={fringes_taxes_stars}
        onChange={handleChangeStarsMusic}
            />
    </Form.Group>
    {errors?.fringes_taxes_stars?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Music */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}>05.70</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Music: all-in package includes Composer, Musicians, 
      Score, and Recording Session</p>
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
    <Form.Group controlId="music" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="music"
        value={music}
        onChange={handleChangeStarsMusic}
            />
    </Form.Group>
    {errors?.music?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Music Supervisor */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>05.80</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Music Supervisor </p>
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
    <Form.Group controlId="music_supervisor" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="music_supervisor"
        value={music_supervisor}
        onChange={handleChangeStarsMusic}
            />
    </Form.Group>
    {errors?.music_supervisor?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Travel Expenses */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>05.90</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Music - Travel Expenses </p>
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
    <Form.Group controlId="travel_expenses_music" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="travel_expenses_music"
        value={travel_expenses_music}
        onChange={handleChangeStarsMusic}
            />
    </Form.Group>
    {errors?.travel_expenses_music?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Living Expenses */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>05.91</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Music - Living Expenses </p>
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
    <Form.Group controlId="living_expenses_music" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="living_expenses_music"
        value={living_expenses_music}
        onChange={handleChangeStarsMusic}
            />
    </Form.Group>
    {errors?.living_expenses_music?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Add'l Music Rights (Songs, etc.) */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>05.92</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Add'l Music Rights - Songs, etc. </p>
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
    <Form.Group controlId="music_rights_addl_songs" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="music_rights_addl_songs"
        value={music_rights_addl_songs}
        onChange={handleChangeStarsMusic}
            />
    </Form.Group>
    {errors?.music_rights_addl_songs?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Music Other */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>05.93</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Music - Other </p>
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
    <Form.Group controlId="other_music" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_music"
        value={other_music}
        onChange={handleChangeStarsMusic}
            />
    </Form.Group>
    {errors?.other_music?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Music - Fringes and Taxes */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>05.94</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Music - Fringes and Taxes</p>
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
    <Form.Group controlId="fringes_taxes_music" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="fringes_taxes_music"
        value={fringes_taxes_music}
        onChange={handleChangeStarsMusic}
            />
    </Form.Group>
    {errors?.fringes_taxes_music?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Stars / Music Total */}
    <Row className="mt-3">
    <Col md={1} >
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL STARS / MUSIC</p>
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
    <Form.Group controlId="starsMusicTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="starsMusicTotal"
        value={starsMusicTotal}
        readOnly
            />
    </Form.Group>
    {errors?.starsMusicTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
  )
}

export default StarsMusic