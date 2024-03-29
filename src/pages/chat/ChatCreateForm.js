/* Form Page to create a Chat */
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

import { useHistory } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import Asset from "../../components/Asset";
import { useRedirect } from "../../hooks/Redirect";

function ChatCreateForm({setShow}) {
  useRedirect();
  const [errors, setErrors] = useState({});

  const [postData, setPostData] = useState({
    title: "",
    content: "",
    image: "",
  });
  const { title, content, image } = postData;

  const imageInput = useRef(null);
  const history = useHistory();

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setPostData({
        ...postData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const textFields = (
    <div>
          <Form.Group controlId="title" 
                className={`${styles.Width95} text-center`} >
                <Form.Label className={`${styles.Bold} `} >Title</Form.Label>
                <Form.Control 
                type="text"
                className={styles.Input}
                name="title"
                value={title}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.title?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            <Form.Group controlId="content" className={`${styles.Width95} text-center`} >
                <Form.Label className={`${styles.Bold} `} >Content</Form.Label>
                <Form.Control 
                    className={styles.InputScene}
                    type="text"
                    name="content"
                    as="textarea"
                    rows={6}
                    value={content}
                    onChange={handleChange}
                    />
            </Form.Group>
            {errors?.content?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
    </div>
  );

  const buttons = (
    <div className="text-center my-3">    
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
    formData.append("title", title);
    formData.append("content", content);
    if(imageInput.current.files[0]) {
      formData.append("image", imageInput.current.files[0]);
    }

    try {
      const { data } = await axiosReq.post("/chat/", formData);
      history.push(`/chat/${data.id}`);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  return (
    <div className={`${styles.Back} my-3`} >
       <h5 style={{ textTransform: 'uppercase'}} 
          className={`mt-1 mb-1 pl-3 py-1 ${styles.SubTitle } text-center`}>
          CREATE CHAT
      </h5>
    <Form className="mt-3 px-3" onSubmit={handleSubmit}>
      <Row>
      <Col md={6} className="pl-3">
      {textFields}
        </Col>
        <Col className="mt-md-0 mt-2" md={6} >
          <Container
            className={`pt-2 ${appStyles.Content} ${styles.Container} 
            d-flex flex-column justify-content-center`}
          >
            <Form.Group className="text-center">
              {image ? (
                <>
                  <figure>
                    <Image className={appStyles.Image} src={image} rounded />
                  </figure>
                  <div>
                    <Form.Label
                      className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                      htmlFor="image-upload"
                    >
                      Change the image
                    </Form.Label>
                  </div>
                </>
              ) : (
                <Form.Label
                  className="d-flex justify-content-center"
                  htmlFor="image-upload"
                >
                  <Asset
                    src={Upload}
                    message="Upload Image"
                  />
                </Form.Label>
              )}

              <Form.Control
                type="file"
                id="image-upload"
                accept="image/*"
                onChange={handleChangeImage}
                ref={imageInput}
              />
            </Form.Group>
          </Container>
        </Col>
      </Row>
      <Row>
      <Col>
        <div className= {`mt-1`} >{buttons} </div>
      </Col>
    </Row>
    </Form>
    </div>
  );
}

export default ChatCreateForm