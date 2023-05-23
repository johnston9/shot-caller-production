/* Component in the Account component to create Projects */
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../styles/ChatCreate.module.css";
import btnStyles from "../../styles/Button.module.css";
import Alert from "react-bootstrap/Alert";
import { axiosReq } from "../../api/axiosDefaults";
import { useHistory } from 'react-router-dom';

function BudgetCreate() {
  const [errors, setErrors] = useState({});
  const history = useHistory();

  const [postData, setPostData] = useState({
    project_name: "",
    director: "",
  });
  const { project_name, director } = postData;

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  const textFields = (
    <div>
    <h4>Above the Line</h4>
    {/* project name */}
    <Row>
    <Col xs={6} md={3}>Project Name</Col>
    <Col xs={6} md={3}>first</Col>
    <Col xs={6} md={3}>second</Col>
    <Col xs={6} md={3}>
    <Form.Group controlId="project_name" 
        className={`${styles.Width95} text-center`} >
        {/* <Form.Label className={`${styles.Bold} `} >Name</Form.Label> */}
        <Form.Control 
        type="text"
        className={styles.Input}
        name="project_name"
        value={project_name}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.project_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* director */}
    <Row>
    <Col xs={6} md={3}>Director</Col>
    <Col xs={6} md={3}></Col>
    <Col xs={6} md={3}></Col>
    <Col xs={6} md={3}>
    <Form.Group controlId="director" className={`${styles.Width95} text-center`} >
        {/* <Form.Label className={`${styles.Bold} `} >Stripe id</Form.Label> */}
        <Form.Control 
            className={styles.InputScene}
            type="text"
            name="director"
            value={director}
            onChange={handleChange}
            />
    </Form.Group>
    {errors?.stripe_id?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
  );

  const buttons = (
    <div className="text-center mt-3">    
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue} px-5 mr-3`}
        onClick={() => history.goBack()}
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
    formData.append("project_name", project_name);
    formData.append("director", director);

    try {
      const { data } = await axiosReq.post("/budgets/", formData);
      console.log(data)
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  return (
    <div className="mt-2">
    <Row >
    <Col className={`${styles.Back}`}>
    <h5 style={{ textTransform: 'uppercase'}} 
        className={`mt-1 mb-1 pl-3 py-1 ${styles.SubTitle } text-center`}>
        EDIT BUDGET
    </h5>
    <Form className="mt-3 px-3" onSubmit={handleSubmit}>
      <Row>
      <Col className="pl-3">
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

export default BudgetCreate