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
    </div>
  )
}

export default PostLabVideo