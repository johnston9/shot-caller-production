/* Component in the Budget Component to display 
   the budget Top page  */
   import React from 'react';
   import styles from "../../../styles/Account.module.css";
   import Col from 'react-bootstrap/Col';
   import Row from 'react-bootstrap/Row';
//    import { Link, useHistory } from 'react-router-dom';
//    import btnStyles from "../../styles/Button.module.css";
//    import Button from "react-bootstrap/Button";

const BudgetTop = (props) => {
const {setShowTop, budget} = props;

const {above_the_line_total,
  dated,prelimfin,
  title, series, prodco, writer, format, location,
  research, prep, shoot, wrap, post, length_total,
  preparedby, approvedby, approvedbyco,
} = budget;

  return (
    <div className='mx-5 px-5 mb-5'>
    <h5 style={{ textTransform: 'uppercase'}} 
    className={`mt-1 mb-2 pl-5 py-1 text-center ${styles.SubTitle }`}>
        Budget Topsheet
        <span style={{ textTransform: 'none'}} 
        className={`float-right ${styles.Close } pr-3`} 
        onClick={() => setShowTop(false) } >Close</span>
    </h5>
    <div>
    {/* details length */}
    <Row className='px-3'>
    {/* details */}
    <Col xs={12} md={6} >
    <Row>
    <Col xs={4}>
    <p className={`${styles.Underline}`}>Title</p>
    <p className={`${styles.Underline}`}>Series</p>
    <p className={`${styles.Underline}`}>Prodco</p>
    <p className={`${styles.Underline}`}>Writers</p>
    <p className={`${styles.Underline}`}>Format</p>
    <p className={`${styles.Underline}`}>Location</p>
    <p className={`${styles.Underline}`}>Dated</p>
    </Col>
    <Col xs={4}>   
    </Col>
    <Col xs={4}>
    <p className={`${styles.Underline}`}>{title || "-"}</p>
    <p className={`${styles.Underline}`}>{series || "-"}</p>
    <p className={`${styles.Underline}`}>{prodco || "-"}</p>
    <p className={`${styles.Underline}`}>{writer || "-"}</p>
    <p className={`${styles.Underline}`}>{format || "-"}</p>
    <p className={`${styles.Underline}`}>{location || "-"}</p>
    <p className={`${styles.Underline}`}>{dated || "-"}</p>
    </Col>
    </Row>  
    </Col>
    <Col xs={12} md={6} >
    <Row className='mt-3 mt-md-0'>
    <Col xs={4}>
    <p className={`${styles.Underline}`}>Research</p>
    <p className={`${styles.Underline}`}>Prep</p> 
    <p className={`${styles.Underline}`}>Shoot</p> 
    <p className={`${styles.Underline}`}>Wrap</p> 
    <p className={`${styles.Underline}`}>Post</p>
    <p className={`${styles.Underline}`}>Length Total</p>
    </Col>
    <Col xs={4}>
    <p className={`${styles.Underline}`}>{research || 0}</p>
    <p className={`${styles.Underline}`}>{prep || 0}</p>
    <p className={`${styles.Underline}`}>{shoot || 0}</p>
    <p className={`${styles.Underline}`}>{wrap || 0}</p>
    <p className={`${styles.Underline}`}>{post || 0}</p>
    <p className={`${styles.Underline}`}>{length_total}</p>   
    </Col>
    <Col xs={4}>
    <p className={`${styles.Underline}`}>Weeks</p>
    <p className={`${styles.Underline}`}>Weeks</p>
    <p className={`${styles.Underline}`}>Weeks</p>
    <p className={`${styles.Underline}`}>Weeks</p>
    <p className={`${styles.Underline}`}>Weeks</p>
    <p className={`${styles.Underline}`}>Weeks</p>
    </Col>
    </Row>      
    </Col>
    </Row>
    <div className='mt-1 px-2'>
    <Row>
    <Col md={6} >
    <p className={`${styles.Underline}`}>
    BUDGET PREPARED BY: {preparedby}
    </p>
    <p className={`${styles.Underline}`}>
    PRELIMINARY OR FINAL: {prelimfin}
    </p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>
    BUDGET APPROVED BY: {approvedby}
    </p>
    <p className={`${styles.Underline}`}>
    APPROVING COMPANY: {approvedbyco}
    </p>
    </Col>
    </Row>
    </div>
    {/* ABOVE THE LINE */}
    <div className='px-3'>
    <Row className={ `${styles.OverviewBlue} mx-1 my-2 py-1 text-center`}>
    <Col md={12}>
    <h5 className={ `${styles.BoldBlack}`}>ABOVE THE LINE</h5>
    </Col>
    </Row>
    </div>
    <h5
    className={`mt-1 mb-2 pl-5 py-1 text-center ${styles.SubTitle }`}>
      End Topsheet
        <span style={{ textTransform: 'none'}} 
        className={`float-right ${styles.Close } pr-3`} 
        onClick={() => setShowTop(false) } >Close</span>
    </h5>
    </div>
    </div>
  )
}
export default BudgetTop