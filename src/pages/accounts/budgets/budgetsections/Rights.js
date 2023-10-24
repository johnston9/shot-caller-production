/* Component in the Budget Edit component to edit Rights */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const Rights = (props) => {
  // eslint-disable-next-line
    const [errors, setErrors] = useState({});
    const {postDataRights, setPostDataRights, setShow,
        postDataRightsTotal, setPostDataRightsTotal} = props;

    // Rights postData values
  const {story_rights, miscellaneous} = postDataRights;

    // Rights handleChange
  const handleChangeRights = (event) => {
    setPostDataRights({
      ...postDataRights,
      [event.target.name]: parseFloat(event.target.value || 0 ),
    });
  }; 

  // function to add all rights on change
  useEffect(() => {
    const addRights = () => {
      setPostDataRightsTotal(parseFloat(story_rights || 0) + 
      parseFloat(miscellaneous ||0) )
    }
    const timer = setTimeout(() => {
      addRights();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [story_rights, miscellaneous ]);

  return (
    <div className="mt-5">
    <Row >
    <Col md={1} >
    <p className="mb-0">01.00</p>
    </Col>
    <Col md={9} >
    <p className={ `${styles.BoldBlack} mb-2`}>RIGHTS</p>
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
    {/* Story Rights */}
    <Row className="mb-0 pb-0">
    <Col className="mb-0 pb-0" md={1} >
    <p className="mb-0 pb-0">01.10</p>
    </Col>
    <Col className="mb-0 pb-0" md={6} >
    <p className="mb-0 pb-0">Story Rights</p>
    </Col>
    <Col className="mb-0 pb-0" md={1} >
    <p className="mb-0 pb-0"></p>
    </Col>
    <Col className="mb-0 pb-0" md={1} >
    <p className="mb-0 pb-0"></p>
    </Col>
    <Col className="mb-0 pb-0" md={1} >
    <p className="mb-0 pb-0"></p>
    </Col>
    <Col className="mb-0 pb-0" md={2} >
    <Form.Group controlId="story_rights" 
        className={`${styles.Width95} text-center mb-1 pb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="story_rights"
        value={story_rights}
        onChange={handleChangeRights}
            />
    </Form.Group>
    {errors?.story_rights?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Miscellaneous */}
    <Row>
    <Col md={1} >
    <p>01.20</p>
    </Col>
    <Col md={6} >
    <p>Miscellaneous</p>
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
    <Form.Group controlId="miscellaneous" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="miscellaneous"
        value={miscellaneous}
        onChange={handleChangeRights}
            />
    </Form.Group>
    {errors?.miscellaneous?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Rights Total */}
    <Row className="mb-0 pb-0">
    <Col md={1} >
    </Col>
    <Col className={ `${styles.Overview} mb-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL RIGHTS</p>
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
    <Form.Group controlId="postDataRightsTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="postDataRightsTotal"
        value={postDataRightsTotal}
        readOnly
            />
    </Form.Group>
    {errors?.postDataRightsTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
  )
}

export default Rights