/* Component in the Account component to create Budgets */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../styles/Account.module.css";
import btnStyles from "../../styles/Button.module.css";
import Alert from "react-bootstrap/Alert";
import { axiosReq } from "../../api/axiosDefaults";
import { useHistory, useParams } from 'react-router-dom';

function BudgetEdit() {
  const [errors, setErrors] = useState({});
  const history = useHistory();
  const { id } = useParams();

  // budget id
  const [budgetId, setBudgetId] = useState("");
  // DETAILS -------------------------------
  // Details postData 
  const [postDataDetails, setPostDataDetails] = useState({
    // details
    title: "",
    series: "",
    prodco: "",
    format: "",
    location: "",
    dated: "",
  });

  // Details postData values 
  const { 
    title, series, prodco, format, location, dated,} = postDataDetails;

  // Details handleChange
  const handleChange_details = (event) => {
    setPostDataDetails({
      ...postDataDetails,
      [event.target.name]: event.target.value,
    });
  };

  // LENGTH ------------------------
  // Length postData
  const [postDataLength, setPostDataLength] = useState({
    research: 0,
    prep: 0,
    shoot: 0,
    wrap: 0,
    post: 0,});

  // Length postData values
  const { 
    research, prep, shoot, wrap, post,} = postDataLength; 
  
  // Length Total postData 
  const [postDataLengthTotal, setPostDataLengthTotal] = useState(0)

  // Length handleChange
  const handleChangeLength = (event) => {
    setPostDataLength({
      ...postDataLength,
      [event.target.name]: parseFloat(event.target.value || 0 ),
    });
  }; 

  // function to add all lengths on change
  useEffect(() => {
    const addLength = () => {
      setPostDataLengthTotal(research + prep + shoot + wrap + post )
    }
    const timer = setTimeout(() => {
      addLength();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [research, prep, shoot, wrap, post ])

  // Details Length Input Boxes
  const detailslength = (
    <div>
    {/* Titles */}
    <Row>
    <Col md={6}>
    <p>Details</p>
    </Col>
    <Col md={6}>
    <p>Length</p>
    </Col>
    </Row>
    <Row>
    {/* DETAILS COLUMN */}
    <Col md={6} >
    {/* title */}
    <Row>
    <Col md={6}>
    <p>Title</p>
    </Col>
    <Col md={6}>
    <Form.Group controlId="title" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="title"
        value={title}
        onChange={handleChange_details}
            />
    </Form.Group>
    {errors?.title?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Series */}
    <Row>
    <Col md={6}>
    <p>Series</p>
    </Col>
    <Col md={6}>
    <Form.Group controlId="series" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="series"
        value={series}
        onChange={handleChange_details}
            />
    </Form.Group>
    {errors?.series?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Prodco */}
    <Row>
    <Col md={6}>
    <p>Prodco</p>
    </Col>
    <Col md={6}>
    <Form.Group controlId="prodco" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="prodco"
        value={prodco}
        onChange={handleChange_details}
            />
    </Form.Group>
    {errors?.prodco?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Format */}
    <Row>
    <Col md={6}>
    <p>Format</p>
    </Col>
    <Col md={6}>
    <Form.Group controlId="format" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="format"
        value={format}
        onChange={handleChange_details}
            />
    </Form.Group>
    {errors?.format?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Location */}
    <Row>
    <Col md={6}>
    <p>Location</p>
    </Col>
    <Col md={6}>
    <Form.Group controlId="location" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="location"
        value={location}
        onChange={handleChange_details}
            />
    </Form.Group>
    {errors?.location?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Budget Date */}
    <Row>
    <Col md={6}>
    <p>Budget Date</p>
    </Col>
    <Col md={6}>
    <Form.Group controlId="dated" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dated"
        value={dated}
        onChange={handleChange_details}
            />
    </Form.Group>
    {errors?.dated?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </Col>
    {/* LENGTH COLUMN */}
    <Col md={6} >
    {/* Research */}
    <Row>
    <Col md={4}>
    <p>Research</p>
    </Col>
    <Col md={4}>
    <Form.Group controlId="research" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="research"
        value={research}
        onChange={handleChangeLength}
            />
    </Form.Group>
    {errors?.research?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={4}>
    <p>Weeks</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row>
    <Col md={4}>
    <p>Prep</p>
    </Col>
    <Col md={4}>
    <Form.Group controlId="prep" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="prep"
        value={prep}
        onChange={handleChangeLength}
            />
    </Form.Group>
    {errors?.prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={4}>
    <p>Weeks</p>
    </Col>
    </Row>
    {/* Shoot */}
    <Row>
    <Col md={4}>
    <p>Shoot</p>
    </Col>
    <Col md={4}>
    <Form.Group controlId="shoot" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="shoot"
        value={shoot}
        onChange={handleChangeLength}
            />
    </Form.Group>
    {errors?.shoot?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={4}>
    <p>Weeks</p>
    </Col>
    </Row>
    {/* Wrap */}
    <Row>
    <Col md={4}>
    <p>Wrap</p>
    </Col>
    <Col md={4}>
    <Form.Group controlId="wrap" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="wrap"
        value={wrap}
        onChange={handleChangeLength}
            />
    </Form.Group>
    {errors?.wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={4}>
    <p>Weeks</p>
    </Col>
    </Row>
    {/* Post */}
    <Row>
    <Col md={4}>
    <p>Post</p>
    </Col>
    <Col md={4}>
    <Form.Group controlId="post" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="post"
        value={post}
        onChange={handleChangeLength}
            />
    </Form.Group>
    {errors?.post?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={4}>
    <p>Weeks</p>
    </Col>
    </Row>
    {/* Length Total */}
    <Row>
    <Col md={4}>
    <p>TOTAL</p>
    </Col>
    <Col md={4}>
    <Form.Group controlId="postDataLengthTotal" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="postDataLengthTotal"
        value={postDataLengthTotal}
        readOnly
            />
    </Form.Group>
    {errors?.postDataLengthTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={4}>
    <p>Weeks</p>
    </Col>
    </Row>
    </Col>
    </Row>
    </div>
  );

  // RIGHTS ----------------------------------------------------
  
  // Rights postData
  const [postDataRights, setPostDataRights] = useState({
    story_rights: 0,
    miscel_rights: 0,
  });

  // Rights postData values
  const {story_rights, miscel_rights} = postDataRights

  // Rights Total postData 
  const [postDataRightsTotal, setPostDataRightsTotal] = useState(0)

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
      setPostDataRightsTotal(story_rights + miscel_rights )
    }
    const timer = setTimeout(() => {
      addRights();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [story_rights, miscel_rights ])

  // Rights input boxes
  const rights = (
    <div>
    <Row className="mt-3" >
    <Col md={1} >
    <p>1000</p>
    </Col>
    <Col md={6} >
    <h5 className={ `${styles.Bold}`}>RIGHTS</h5>
    </Col>
    </Row>
    {/* Story Rights */}
    <Row>
    <Col md={1} >
    <p>1010</p>
    </Col>
    <Col md={6} >
    <p>Story Rights</p>
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
    <Form.Group controlId="story_rights" 
        className={`${styles.Width95} text-center`} >
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
    <Form.Group controlId="miscel_rights" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="miscel_rights"
        value={miscel_rights}
        onChange={handleChangeRights}
            />
    </Form.Group>
    {errors?.miscel_rights?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Rights Total */}
    <Row>
    <Col md={1} >
    </Col>
    <Col md={6} >
    <h5 className={ `${styles.Bold}`}>TOTAL</h5>
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
        className={`${styles.Width95} text-center`} >
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
  )
    
    {/* director */}
    {/* <Row>
    <Col xs={6} md={3}>Director</Col>
    <Col xs={6} md={3}></Col>
    <Col xs={6} md={3}></Col>
    <Col xs={6} md={3}>
    <Form.Group controlId="director" className={`${styles.Width95} text-center`} >
        <Form.Control 
            className={styles.InputScene}
            type="text"
            name="director"
            value={director}
            onChange={handleChange}
            />
    </Form.Group>
    {errors?.director?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row> */}
    </div>
  );

  // OTHER --------------------------------------------------
  const aboveLine = (
    <div>
    <Row className={ `${styles.Overview} pt-2`} >
    <Col md={1} >
    <p>AC</p>
    </Col>
    <Col md={6} >
    {/* <p>STORY & OTHER RIGHTS</p> */}
    <p>Description</p>
    </Col>
    <Col md={1} >
    <p>#</p>
    </Col>
    <Col md={1} >
    <p>Unit</p>
    </Col>
    <Col md={1} >
    <p>Price</p>
    </Col>
    <Col md={2} >
    <p>Total</p>
    </Col>
    </Row>
    </div>)

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

  // fetch budget
  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/budgets/?project=${id}/`);
        // budget id
        const {id} = data;
        setBudgetId(id);
        // details
        const { title, series, prodco, format, location, dated} = data;
        setPostDataDetails({ title, series, prodco, format, location, dated });
        // length
        const {research, prep, shoot, wrap, post, length_total} = data;
        setPostDataLength({research, prep, shoot, wrap, post});
        setPostDataLengthTotal({length_total});
        // rights
        const {story_rights, miscel_rights, rights_total} = data;
        setPostDataRights({story_rights, miscel_rights, rights_total});
        setPostDataRightsTotal({rights_total});


      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [history, id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("project", id );
    // details
    formData.append("title", title);
    formData.append("series", series);
    formData.append("prodco", prodco);
    formData.append("format", format);
    formData.append("location", location);
    formData.append("dated", dated);
    // length
    formData.append("research", research);
    formData.append("prep", prep);
    formData.append("shoot", shoot);
    formData.append("wrap", wrap);
    formData.append("post", post);
    formData.append("length_total", postDataLengthTotal);
    // ABOVE THE LINE
    // rights miscellaneous
    formData.append("story_rights", story_rights);
    formData.append("miscel_rights", miscel_rights);
    formData.append("rights_total ", postDataRightsTotal); 

    try {
      const { data } = await axiosReq.put(`/budgets/${budgetId}/`, formData);
      console.log(data);
      history.goBack();
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
        EDIT BUDGET - Project ID: {id}
    </h5>
    <Row className="mt-1 ml-2" >
        <Col xs={3}>
        <Button
          className={`${btnStyles.Button} ${btnStyles.Blue} mb-2`}
          onClick={() => history.goBack()}
        >
          Back
        </Button>
        </Col>
    </Row>
    <Form className="mt-3 px-3" onSubmit={handleSubmit}>
    {detailslength}
    <h4>Above the Line</h4>
    {aboveLine}
    {rights}
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

export default BudgetEdit