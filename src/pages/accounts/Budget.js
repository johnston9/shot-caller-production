/* Component in the BudgetPage Component to display the budget data */
import React from 'react';
import styles from "../../styles/Account.module.css";
import appStyles from "../../App.module.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link, useHistory } from 'react-router-dom';
import btnStyles from "../../styles/Button.module.css";
import Button from "react-bootstrap/Button";

const Budget = (props) => {
  // const {
  //   // details
  //   title, series, prodco, format, location, dated,
  //   // length
  //   research, prep, shoot, wrap, post, length_total,
  //   // rights
  //   story_rights, miscel_rights, rights_total, budget, projectId,
  // } = props;

  const {
    budget1, projectId,
  } = props;

  const budget = budget1.results[0] || "" ;

  const {// details
    title, series, prodco, format, location, dated,
    // length
    research, prep, shoot, wrap, post, length_total,
    // rights
    story_rights, miscellaneous, rights_total, } = budget;

  console.log(props);
  console.log(budget);

  const history = useHistory();

  return (
    <div >
    <div className={`${styles.Overview}`}>
    <h2 className={`py-2 ${styles.OverviewText} ${appStyles.playfair}
     text-center`} >{title} Budget </h2>
    </div>
    {/* back */}
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
    {/* Add /Edit Budget */}
      {budget ? (
      <Row className='mt-0 mb-4'>
      <Col className="text-center">
      <Link to={`/budgets/edit/${projectId}`}>
      <div className={`px-1`}>
      <spam className={ `${styles.BudgetLink} py-1 px-3`}>Edit Budget</spam>
      </div>
      </Link>
      </Col>
      </Row>
    ) : (
      <Row className='mt-0 mb-5'>
      <Col className="text-center" xs={{span: 6, offset: 3 }} 
       md={{span: 4, offset: 4 }} >
      <Link to={`/budgets/create/${projectId}`}>
      <div className={`px-1`}>
      <spam className={ `${styles.BudgetLink} py-1 px-3`}>Create Budget</spam>
      </div>
      </Link>
      </Col>
    </Row>
    ) }
    {/* budget */}
    <div className='px-3'>
      <Row>
      <Col xs={12}md={6} >
      <h5 className={`${styles.Bold} mb-2 text-center`}>Details</h5>
      </Col>
      <Col xs={12} md={6} >
      <h5 className={`${styles.Bold} d-none d-md-block mb-2 text-center`}>Length</h5>
      </Col>
      </Row>
    <Row className='px-3'>
    {/* details */}
    <Col xs={12} md={6} >
    <Row>
    <Col xs={4}>
    <p>Title</p>
    <p>Series</p>
    <p>Prodco</p>
    <p>Format</p>
    <p>Location</p>
    <p>Dated</p>
    </Col>
    <Col xs={4}>   
    </Col>
    <Col xs={4}>
    <p>{title || ""}</p>
    <p>{series || ""}</p>
    <p>{prodco || ""}</p>
    <p>{format || ""}</p>
    <p>{location || ""}</p>
    <p>{dated || ""}</p>
    </Col>
    </Row>  
    </Col>
    <Col xs={12} md={6} >
    {/* length */}
    <Row>
      <Col xs={12} md={6} >
      <h5 className={`${styles.Bold} d-block d-md-none mb-2 text-center`}>Length</h5>
      </Col>
      </Row>
    <Row>
    <Col xs={4}>
    <p>Research</p>
    <p>Prep</p> 
    <p>Shoot</p> 
    <p>Wrap</p> 
    <p>Post</p>
    <p>Length Total</p>
    </Col>
    <Col xs={4}>
    <p>{research || 0}</p>
    <p>{prep || 0}</p>
    <p>{shoot || 0}</p>
    <p>{wrap || 0}</p>
    <p>{post || 0}</p>
    <p>{length_total}</p>   
    </Col>
    <Col xs={4}>
    <p>Weeks</p>
    <p>Weeks</p>
    <p>Weeks</p>
    <p>Weeks</p>
    <p>Weeks</p>
    <p>Weeks</p>
    </Col>
    </Row>      
    </Col>
    </Row>
    </div>
    <div className='px-3'>
    <h4>ABOVE THE LINE</h4>
    {/* rights */}
    <div>
    <h5>Rights</h5>
    <Row>
    <Col xs={6}>
    <p>Story Rights</p>
    <p>Miscellaneous</p>
    <p>Rights Total</p>
    </Col>
    <Col xs={6}>
    <Row>
    <Col xs={{span: 4, offset: 8 }}>
    <p >{story_rights || 0} </p>
    <p >{miscellaneous || 0 } </p>
    <p >{rights_total } </p>
    </Col>
    </Row> 
    </Col>
    </Row>
    </div>
    </div>
    </div>
  )
}

export default Budget