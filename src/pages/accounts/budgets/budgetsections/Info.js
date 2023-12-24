/* Component in the Budget component to edit Info/Length */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const Info = (props) => {
    // eslint-disable-next-line
    const [errors, setErrors] = useState({});
    const {postDataDetails, setPostDataDetails,
        setPostDataLength, postDataLength, postDataLengthTotal,
        setPostDataLengthTotal, setShow} = props;
 
    // Length postData values
    const { research, prep, shoot, wrap, post,} = postDataLength; 

    // Info postData values 
    const { 
    title, series, prodco, format, location, 
    writer} = postDataDetails;
    
    // Info handleChange
    const handleChange_details = (event) => {
        setPostDataDetails({
        ...postDataDetails,
        [event.target.name]: event.target.value,
        });
    };

    // Length handleChange
    const handleChangeLength = (event) => {
        setPostDataLength({
        ...postDataLength,
        [event.target.name]: parseFloat(event.target.value.replace(/\D/g,'') || 0 ),
        });
    };

    // function to add all lengths on change
    useEffect(() => {
        const addLength = () => {
        setPostDataLengthTotal(
            parseFloat(research || 0) +
            parseFloat(prep || 0) +
            parseFloat(shoot || 0) +
            parseFloat(wrap || 0) +
            parseFloat(post || 0)  )
        }
        const timer = setTimeout(() => {
        addLength();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [research, prep, shoot, wrap, post ]);

  return (
    <div className="mt-5">
    {/* Title */}
    <Row >
    <Col md={1}>
    </Col>
    <Col md={9}>
    <p className={ `${styles.BoldBlack} mb-1`}>INFO</p>
    </Col>
    <Col md={2}>
    <span className={`${styles.Close } mb-2`} 
    onClick={() => setShow(false) } >Close</span>
    </Col>
    </Row>
    {/* TITLES */}
    <Row className={ `${styles.Overview} mb-2 py-1`} >
    <Col md={6} >
    <p className="mb-0">Production Info</p>
    </Col>
    <Col md={6} >
    <p className="mb-0">Production Length</p>
    </Col>
    </Row>
    <Row className="mt-3">
    {/* DETAILS COLUMN */}
    <Col md={6} >
    {/* title */}
    <Row className="pt-1">
    <Col md={6}>
    <p className={`${styles.Underline}`}>Title</p>
    </Col>
    <Col md={6}>
    <Form.Group controlId="title" 
        className={`${styles.Width95} text-center mb-1`} >
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
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break3} mb-0 mt-0`}/>
    </Col>
    </Row>
    {/* Series */}
    <Row className="pt-1">
    <Col md={6}>
    <p className={`${styles.Underline}`}>Series</p>
    </Col>
    <Col md={6}>
    <Form.Group controlId="series" 
        className={`${styles.Width95} text-center mb-1`} >
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
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break3} mb-0 mt-0`}/>
    </Col>
    </Row>
    {/* Prodco */}
    <Row className="pt-1">
    <Col md={6}>
    <p className={`${styles.Underline}`}>Prodco</p>
    </Col>
    <Col md={6}>
    <Form.Group controlId="prodco" 
        className={`${styles.Width95} text-center mb-1`} >
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
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break3} mb-0 mt-0`}/>
    </Col>
    </Row>
    {/* Writers */}
    <Row className="pt-1">
    <Col md={6}>
    <p className={`${styles.Underline}`}>Writers</p>
    </Col>
    <Col md={6}>
    <Form.Group controlId="writer" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="writer"
        value={writer}
        onChange={handleChange_details}
            />
    </Form.Group>
    {errors?.writer?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break3} mb-0 mt-0`}/>
    </Col>
    </Row>
    {/* Format */}
    <Row className="pt-1">
    <Col md={6}>
    <p className={`${styles.Underline}`}>Format</p>
    </Col>
    <Col md={6}>
    <Form.Group controlId="format" 
        className={`${styles.Width95} text-center mb-1`} >
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
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break3} mb-0 mt-0`}/>
    </Col>
    </Row>
    {/* Location */}
    <Row className="pt-1">
    <Col md={6}>
    <p className={`${styles.Underline}`}>Location</p>
    </Col>
    <Col md={6}>
    <Form.Group controlId="location" 
        className={`${styles.Width95} text-center mb-1`} >
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
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break3} mb-0 mt-0`}/>
    </Col>
    </Row>
    </Col>
    {/* LENGTH COLUMN */}
    <Col md={6} >
    {/* Research */}
    <Row className="pt-1">
    <Col md={4}>
    <p className={`${styles.Underline}`}>Development</p>
    </Col>
    <Col md={4}>
    <Form.Group controlId="research" 
        className={`${styles.Width95} text-center mb-1`} >
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
    <p className={`${styles.Underline}`}>Weeks</p>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break3} mb-0 mt-0`}/>
    </Col>
    </Row>
    {/* Prep */}
    <Row className="pt-1">
    <Col md={4}>
    <p className={`${styles.Underline}`}>Pre-production</p>
    </Col>
    <Col md={4}>
    <Form.Group controlId="prep" 
        className={`${styles.Width95} text-center mb-1`} >
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
    <p className={`${styles.Underline}`}>Weeks</p>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break3} mb-0 mt-0`}/>
    </Col>
    </Row>
    {/* Shoot */}
    <Row className="pt-1">
    <Col md={4}>
    <p className={`${styles.Underline}`}>Shoot</p>
    </Col>
    <Col md={4}>
    <Form.Group controlId="shoot" 
        className={`${styles.Width95} text-center mb-1`} >
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
    <p className={`${styles.Underline}`}>Weeks</p>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break3} mb-0 mt-0`}/>
    </Col>
    </Row>
    {/* Wrap */}
    <Row className="pt-1" >
    <Col md={4}>
    <p className={`${styles.Underline}`}>Wrap</p>
    </Col>
    <Col md={4}>
    <Form.Group controlId="wrap" 
        className={`${styles.Width95} text-center mb-1`} >
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
    <p className={`${styles.Underline}`}>Weeks</p>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break3} mb-0 mt-0`}/>
    </Col>
    </Row>
    {/* Post */}
    <Row className="pt-1">
    <Col md={4}>
    <p className={`${styles.Underline}`}>Post Production</p>
    </Col>
    <Col md={4}>
    <Form.Group controlId="post" 
        className={`${styles.Width95} text-center mb-1`} >
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
    <p className={`${styles.Underline}`}>Weeks</p>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break3} mb-0 mt-0`}/>
    </Col>
    </Row>
    {/* Length Total */}
    <Row className="pt-1">
    <Col md={4}>
    <p className={`${styles.Underline}`}>TOTAL</p>
    </Col>
    <Col md={4}>
    <Form.Group controlId="postDataLengthTotal" 
        className={`${styles.Width95} text-center mb-1`} >
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
    <p className={`${styles.Underline}`}>Weeks</p>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break3} mb-0 mt-0`}/>
    </Col>
    </Row>
    </Col>
    </Row>
    </div>
  )
}

export default Info