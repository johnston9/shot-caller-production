/* Page to fetch the Project's Budget data
 * Contains the Budget Component to which it passes the data*/
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import useRedirect from "../../../hooks/Redirect";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { axiosReq } from "../../../api/axiosDefaults";
import Budget from "./Budget";

const BudgetPage = () => {
  useRedirect();
  const [hasLoaded, setHasLoaded] = useState(false);
  const [budget1, setBudget1] = useState({ results: [] });
  const [budget2, setBudget2] = useState({ results: [] });
  const [budget3, setBudget3] = useState({ results: [] });
  const { id } = useParams();

  useEffect(() => {
    const fetchBudget = async () => {
      try {
        const [{ data: budget1 }, { data: budget2 }, { data: budget3 }] = await Promise.all([
          axiosReq.get(`/budgets1/?project=${id}`),
          axiosReq.get(`/budgets2/?project=${id}`),
          axiosReq.get(`/budgets3/?project=${id}`),
        ]);
        setBudget1({ results: [budget1] });
        setBudget2({ results: [budget2] });
        setBudget3({ results: [budget3] });
        console.log(budget1);
        console.log(budget2);
        console.log(budget3);
        setHasLoaded(true);
        // const { data } = await axiosReq.get(`/budgets/?project=${id}`);
      } catch (err) {
        console.log(err);
      }
    };

    fetchBudget();

  }, [id]);

  return (
    <div>
    {/* Add /Edit Budget */}
    {/* {hasLoaded ? (
      <>
      {budget.results.length ? (
      <Row className='mt-0'>
      <Col className="text-center">
      <Link to={`/budgets/edit/${id}`}>
      <div className={`px-1`}>
      <p className={ `${styles.BudgetLink} pl-3`}>Edit Budget</p>
      </div>
      </Link>
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
      </Col>
    </Row>
    ) }
      </>
    ) : (
      ""
    ) } */}
    {/* budget */}
    <Row>
      <Col className="py-2 p-0 p-lg-2" >
          {hasLoaded ? (
              <Budget
              budget1={budget1.results[0]} 
              budget2={budget2.results[0]} 
              budget3={budget3.results[0]} 
              projectId={id}
               />
            ) : (
              ""
            ) }
      </Col>
    </Row>
    </div>
  )
}

export default BudgetPage