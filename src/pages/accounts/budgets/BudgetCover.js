/* Component in the Budget Component to display 
   the Budget Cover page  */
import React from 'react';
import styles from "../../../styles/Account.module.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Budgetcover = (props) => {
    const {setShowCover, budget} = props;
    const {dated,prelimfin,
      title, series, prodco, writer, format, location,
      research, prep, shoot, wrap, post, length_total,
      preparedby, approvedby, approvedbyco,
    } = budget;

  return (
    <div className='px-5 mx-md-5 mb-5'>
    <h5 style={{ textTransform: 'uppercase'}} 
    className={`mt-1 mb-2 pl-5 py-1 text-center ${styles.SubTitle }`}>
        Budget Cover Page
        <span style={{ textTransform: 'none'}} 
        className={`float-right ${styles.Close } pr-3`} 
        onClick={() => setShowCover(false) } >Close</span>
    </h5>
    <div className='mt-5'>
    <Row>
      <Col className='d-none d-md-block' md={6}></Col>
    <Col md={6}>
    <p>
    BUDGET DATED: {dated}
    </p>
    <p>
    Preliminary or Final: {prelimfin}
    </p>
    </Col>
    </Row>
    </div>
    <hr className={`${styles.Break}`}></hr>
    <div className='mt-3'>
    <Row>
    <Col>
    <p>
    WORKING TITLE: {title}
    </p>
    <p>
    SERIES TITLE: {series}
    </p>
    <p>
    PRODUCTION COMPANY: {prodco}
    </p>
    <p>
    WRITER: {writer}
    </p>
    </Col>
    </Row>
    </div>
    <hr className={`${styles.Break}`}></hr>
    <div className='mt-3'>
    <Row>
    <Col md={6} >
    <p>
    FORMAT: {format}
    </p>
    <p>
    LOCATION: {location}
    </p>
    </Col>
    <Col md={6} >
    <p>
    DEVELOPMENT: {research}
    </p>
    <p>
    PRE PRODUCTION: {prep}
    </p>
    <p>
    SHOOT: {shoot}
    </p>
    <p>
    WRAP: {wrap}
    </p>
    <p>
    POST: {post}
    </p>
    <p>
    TOTAL LENGTH: {length_total}
    </p>
    </Col>
    </Row>
    </div>
    <hr className={`${styles.Break}`}></hr>
    <div className='mt-3'>
    <Row>
    <Col md={6} >
    <p>
    BUDGET PREPARED BY: {preparedby}
    </p>
    <p>
    BUDGET APPROVED BY: {approvedby}
    </p>
    <p>
    APPROVING COMPANY: {approvedbyco}
    </p>
    </Col>
    </Row>
    </div>
    <h5 style={{ textTransform: 'uppercase'}} 
    className={`mt-1 mb-2 pl-5 py-1 text-center ${styles.SubTitle }`}>
      End Cover Page
        <span style={{ textTransform: 'none'}} 
        className={`float-right ${styles.Close } pr-3`} 
        onClick={() => setShowCover(false) } >Close</span>
    </h5>
    </div>
  )
}

export default Budgetcover