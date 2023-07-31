/* Component in the Budget Edit component to edit Rights
*/
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import btnStyles from "../../../../styles/Button.module.css";
import Alert from "react-bootstrap/Alert";
import { axiosReq } from "../../../../api/axiosDefaults";
import { useHistory, useParams } from 'react-router-dom';

const Rights = (props) => {
    const [errors, setErrors] = useState({});
    const {postDataRights, setPostDataRights,
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
  }, [story_rights, miscellaneous ]);

  return (
    <div className="mt-3">
    <Row >
    <Col md={1} >
    <p className="mb-0">1000</p>
    </Col>
    <Col md={6} >
    <p className={ `${styles.BoldBlack} mb-2`}>RIGHTS</p>
    </Col>
    </Row>
    {/* TITLES */}
    <Row className={ `${styles.Overview} mb-2 py-1`} >
    <Col md={1} >
    <p className="mb-0">ACCT</p>
    </Col>
    <Col md={6} >
    <p className="mb-0">Description</p>
    </Col>
    <Col md={1} >
    <p className="mb-0">#</p>
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
    {/* Story Rights */}
    <Row className="mb-0 pb-0">
    <Col className="mb-0 pb-0" md={1} >
    <p className="mb-0 pb-0">1010</p>
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
    <p>1020</p>
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