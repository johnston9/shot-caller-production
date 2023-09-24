/* Component in the Budget component to edit Post Versioning */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const Versioning = (props) => {
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});

  const {postDataPostVersion, setPostDataPostVersion,
  postVersionTotal, setPostVersionTotal, setShow,} = props;

  const {dubs, subtitles, closed_caption, versioning, trailers,
    ads, transfers_ver, prints_ver, dig_copies_ver, 
    other_copies_ver,
  } = postDataPostVersion;

  // handleChange 
  const handleChange = (event) => {
    setPostDataPostVersion({
    ...postDataPostVersion,
    [event.target.name]: parseFloat(event.target.value || 0 ),
    });
  };
  
  // function to add all Versioning on change
  useEffect(() => {
    const addVersio = () => {
        setPostVersionTotal(
        parseFloat(dubs || 0) +
        parseFloat(subtitles || 0) +
        parseFloat(closed_caption || 0) +
        parseFloat(versioning || 0) +
        parseFloat(trailers || 0) +
        parseFloat(ads || 0) +
        parseFloat(transfers_ver || 0) +
        parseFloat(prints_ver || 0) +
        parseFloat(dig_copies_ver || 0) +
        parseFloat(other_copies_ver || 0)
       )
    }
    const timer = setTimeout(() => {
        addVersio();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
   // eslint-disable-next-line
  }, [dubs, subtitles, closed_caption, versioning, trailers,
    ads, transfers_ver, prints_ver, dig_copies_ver, 
    other_copies_ver,]);

  return (
    <div className="mt-5">
    <Row >
    <Col md={1} >
    <p className="mb-2">48.00</p>
    </Col>
    <Col md={9} >
    <p className={ `${styles.BoldBlack} mb-2`}>Versioning/Closed-captioning/Dubs</p>
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

export default Versioning