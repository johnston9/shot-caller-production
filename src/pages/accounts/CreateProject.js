import React, { useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import Upload from "../../assets/upload.png";
import styles from "../../styles/ChatCreate.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Image from "react-bootstrap/Image";
import Alert from "react-bootstrap/Alert";
import { axiosReq } from "../../api/axiosDefaults";
import Asset from "../../components/Asset";
import { useRedirect } from "../../hooks/Redirect";
import { useHistory } from "react-router-dom";

function CreateProject({setShow} ) {
  useRedirect("loggedOut");
  const [errors, setErrors] = useState({});

  const [postData, setPostData] = useState({
    name: "",
    stripe_id: "",
  });
  const { name, stripe_id } = postData;

  const history = useHistory();

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  const textFields = (
    <div>
    <Form.Group controlId="name" 
        className={`${styles.Width95} text-center`} >
        <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
        <Form.Control 
        type="text"
        className={styles.Input}
        name="name"
        value={name}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    <Form.Group controlId="stripe_id" className={`${styles.Width95} text-center`} >
        <Form.Label className={`${styles.Bold} `} >Stripe id</Form.Label>
        <Form.Control 
            className={styles.InputScene}
            type="text"
            name="stripe_id"
            value={stripe_id}
            onChange={handleChange}
            />
    </Form.Group>
    {errors?.stripe_id?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </div>
  );

  const buttons = (
    <div className="text-center mt-3">    
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue} px-5 mr-3`}
        onClick={() => setShow(show => !show)} 
      >
        Cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue} px-5 pl-3`} type="submit">
        Create
      </Button>
    </div>
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("stripe_id", stripe_id);

    try {
      const { data } = await axiosReq.post("/projects/", formData);
      setShow(false);
      console.log(data)
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  return (
    <div >
    <Row >
    <Col className={`${styles.Back} mt-3`} md={{span: 6, offset: 3}}>
    <h5 style={{ textTransform: 'uppercase'}} 
        className={`mt-1 mb-1 pl-3 py-1 ${styles.SubTitle } text-center`}>
        CREATE NEW PROJECT
    </h5>
    <Form className="mt-3 px-3" onSubmit={handleSubmit}>
      <Row>
      <Col md={{span: 6, offset: 3}} className="pl-3">
      {textFields}
        </Col>
      </Row>
      <Row>
      <Col>
        <div className= {`mt-1`} >{buttons} </div>
      </Col>
    </Row>
    </Form>
        </Col>
       </Row>
    </div>
  );
}

export default CreateProject