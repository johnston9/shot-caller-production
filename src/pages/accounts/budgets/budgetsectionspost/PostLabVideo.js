/* Component in the Budget component to edit Post Lab/Video */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const PostLabVideo = (props) => {
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});

  const {postDataPostLab, setPostDataPostLab,
  postLabTotal, setPostLabTotal, setShow,} = props;

  const {stock, neg_cutting, color_cor, interpos_neg, prints,
    transfers, other_media_delivery, distribution_copies, 
    storage_post,
  } = postDataPostLab;

  // handleChange 
  const handleChange = (event) => {
    setPostDataPostLab({
    ...postDataPostLab,
    [event.target.name]: parseFloat(event.target.value || 0 ),
    });
  };
  
  // function to add all Post Lab/Video on change
  useEffect(() => {
    const addPoslabvid = () => {
        setPostLabTotal(
        parseFloat(stock || 0) +
        parseFloat(neg_cutting || 0) +
        parseFloat(color_cor || 0) +
        parseFloat(interpos_neg || 0) +
        parseFloat(prints || 0) +
        parseFloat(transfers || 0) +
        parseFloat(other_media_delivery || 0) +
        parseFloat(distribution_copies || 0) +
        parseFloat(storage_post || 0)
       )
    }
    const timer = setTimeout(() => {
        addPoslabvid();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
   // eslint-disable-next-line
  }, [stock, neg_cutting, color_cor, interpos_neg, prints,
    transfers, other_media_delivery, distribution_copies, storage_post,]);

  return (
    <div className="mt-5">
    <Row >
    <Col md={1} >
    <p className="mb-2">46.00</p>
    </Col>
    <Col md={9} >
    <p className={ `${styles.BoldBlack} mb-2`}>Post Production Lab/Video Copies</p>
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
    {/* Stock */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>46.10</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Stock</p>
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
    <Form.Group controlId="stock" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stock"
        value={stock}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.stock?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Neg Cutting */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>46.20</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Neg Cutting</p>
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
    <Form.Group controlId="neg_cutting" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="neg_cutting"
        value={neg_cutting}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.neg_cutting?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Colour Correct */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>46.30</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Colour Correct</p>
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
    <Form.Group controlId="color_cor" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="color_cor"
        value={color_cor}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.color_cor?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Interpositive/Internegative */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>46.40</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Interpositive/Internegative</p>
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
    <Form.Group controlId="interpos_neg" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="interpos_neg"
        value={interpos_neg}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.interpos_neg?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Prints*/}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>46.50</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Prints</p>
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
    <Form.Group controlId="prints" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="prints"
        value={prints}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.prints?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Transfers */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>46.60</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Transfers</p>
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
    <Form.Group controlId="transfers" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="transfers"
        value={transfers}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.transfers?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Distribution Copies */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>46.70</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Distribution Copies</p>
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
    <Form.Group controlId="distribution_copies" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="distribution_copies"
        value={distribution_copies}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.distribution_copies?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* All Media Types Copies */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>46.80</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>All Media Types Copies</p>
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
    <Form.Group controlId="other_media_delivery" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_media_delivery"
        value={other_media_delivery}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_media_delivery?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Storage */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>46.90</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Storage</p>
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
    <Form.Group controlId="storage_post" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="storage_post"
        value={storage_post}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.storage_post?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* POST PRODUCTION LAB/VIDEO COPIES Total */}
    <Row className="mt-3">
    <Col md={1} >
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>POST PRODUCTION LAB/VIDEO COPIES TOTAL</p>
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
    <Form.Group controlId="postLabTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="postLabTotal"
        value={postLabTotal}
        readOnly
            />
    </Form.Group>
    {errors?.postLabTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
  )
}

export default PostLabVideo