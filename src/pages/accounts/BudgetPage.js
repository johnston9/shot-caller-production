/* Page to fetch the Project's Budget data
 * Contains the Budget Component to which it passes the data*/
import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from 'react-router-dom';
import useRedirect from "../../hooks/Redirect";
import Form from "react-bootstrap/Form";
import styles from "../../styles/Account.module.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Button from "react-bootstrap/Button";
import { axiosReq } from "../../api/axiosDefaults";
import Asset from "../../components/Asset";
import Budget from "./Budget";

const BudgetPage = () => {
  useRedirect();
  const [hasLoaded, setHasLoaded] = useState(false);
  const [budget, setBudget] = useState({ results: [] });
  const [name, setName] = useState("");
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchBudget = async () => {
      try {
        const { data } = await axiosReq.get(`/budgets/?project=${id}`);
        setBudget(data.results[0]);
        setName(data.results[0].name);
        console.log(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    fetchBudget();

  }, [id]);

  return (
    <div>
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
    {name ? (
      <Row className='mt-0'>
      <Col className="text-center">
      <Link to={`/budgets/edit/${id}`}>
      <div className={`px-1`}>
      <p className={ `${styles.BudgetLink} pl-3`}>Edit Budget</p>
      </div>
      </Link>
      {/* <Button onClick={() => history.push('/budgets/edit/${id}')} 
        className={`${btnStyles.Button} ${btnStyles.Wide2} ${btnStyles.Bright} `}>
        Edit Budget
      </Button> */}
      </Col>
      </Row>
    ) : (
      <Row className='mt-0'>
      <Col className="text-center" xs={{span: 6, offset: 3 }} 
       md={{span: 4, offset: 4 }} >
      <Link to={`/budgets/create/${id}`}>
      <div className={`px-1`}>
      <p className={ `${styles.BudgetLink} pl-3`}>Create Budget</p>
      </div>
      </Link>
      {/* <Button onClick={() => history.push('/budgets/create/${id}')} 
        className={`${btnStyles.Button} ${btnStyles.Wide2} ${btnStyles.Bright} `}>
        Create Budget
      </Button> */}
      </Col>
    </Row>
    ) }
    <Row>
      <Col className="py-2 p-0 p-lg-2" >
          {hasLoaded ? (
            <>
              <Budget
              budget={budget}
              name={name}
              id={id}
               />
            </>
          ) : (
            <h3 className="text-center mt-5">No Budget created yet</h3>
          )}
      </Col>
    </Row>
    </div>
  )
}

export default BudgetPage