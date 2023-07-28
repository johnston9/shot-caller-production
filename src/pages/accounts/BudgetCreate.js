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

function BudgetCreate() {
  const [errors, setErrors] = useState({});
  const history = useHistory();
  const { id } = useParams();

  // DETAILS -------------------------------

  const [postDataDetails, setPostDataDetails] = useState({
    // details
    title: "",
    series: "",
    prodco: "",
    format: "",
    location: "",
    dated: "",
    writer: "",
    prelimfin: "",
    preparedby: "",
    approvedby: "",
    approvedbyco: "",
  });

  // Details postData values 
  const { 
    title, series, prodco, format, location, dated, writer,
    prelimfin, preparedby, approvedby, approvedbyco} = postDataDetails;

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
  }, [research, prep, shoot, wrap, post ]);

  // prepared by input boxes
  const prepare = (
    <div>
    <Row className="mt-3">
    <Col md={6} >
    {/* prelimfin */}
    <Row >
    <Col md={6}>
    <p className={`${styles.Underline}`}>Preliminary or Final</p>
    </Col>
    <Col md={6}>
    <Form.Group controlId="prelimfin" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="prelimfin"
        value={prelimfin}
        onChange={handleChange_details}
            />
    </Form.Group>
    {errors?.prelimfin?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* preparedby */}
    <Row>
    <Col md={6}>
    <p className={`${styles.Underline}`}>Budget Prepared By</p>
    </Col>
    <Col md={6}>
    <Form.Group controlId="preparedby" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="preparedby"
        value={preparedby}
        onChange={handleChange_details}
            />
    </Form.Group>
    {errors?.preparedby?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </Col>
    {/* Approved COLUMN */}
    <Col md={6} >
    {/* Approved By */}
    <Row>
    <Col md={6}>
    <p className={`${styles.Underline}`}>Approved By - Name</p>
    </Col>
    <Col md={6}>
    <Form.Group controlId="approvedby" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="approvedby"
        value={approvedby}
        onChange={handleChange_details}
            />
    </Form.Group>
    {errors?.approvedby?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Approved By */}
    <Row>
    <Col md={6}>
    <p className={`${styles.Underline}`}>Approved By - Company</p>
    </Col>
    <Col md={6}>
    <Form.Group controlId="approvedbyco" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="approvedbyco"
        value={approvedbyco}
        onChange={handleChange_details}
            />
    </Form.Group>
    {errors?.approvedbyco?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* date */}
    <Row>
    <Col md={6}>
      <p className={`${styles.Underline}`}>Budget Date</p>
      </Col>
      <Col md={6}>
      <Form.Group controlId="dated" 
          className={`${styles.Width95} text-center mb-1`} >
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
    </Row>
    </div>
  )

  // Details Length Input Boxes
  const detailslength = (
    <div>
    {/* Titles */}
    <Row className={ `${styles.OverviewBlue} mx-1 mb-2 py-1 text-center`}>
    <Col md={12}>
    <h5 className={ `${styles.BoldBlack}`}>PRODUCTION INFO / LENGTH</h5>
    </Col>
    </Row>
    <Row className="mt-3">
    {/* DETAILS COLUMN */}
    <Col md={6} >
    {/* title */}
    <Row >
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
    {/* Series */}
    <Row>
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
    {/* Prodco */}
    <Row>
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
    {/* Writers */}
    <Row>
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
    {/* Format */}
    <Row>
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
    {/* Location */}
    <Row>
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
    </Col>
    {/* LENGTH COLUMN */}
    <Col md={6} >
    {/* Research */}
    <Row>
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
    {/* Prep */}
    <Row>
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
    {/* Shoot */}
    <Row>
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
    {/* Wrap */}
    <Row>
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
    {/* Post */}
    <Row>
    <Col md={4}>
    <p>Post Production</p>
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
    {/* Length Total */}
    <Row>
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
    </Col>
    </Row>
    </div>
  );
  
  // RIGHTS ----------------------------------------------------
  
  // Rights postData
  const [postDataRights, setPostDataRights] = useState({
    story_rights: 0,
    miscellaneous: 0,
  });

  // Rights postData values
  const {story_rights, miscellaneous} = postDataRights

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
      setPostDataRightsTotal(story_rights + miscellaneous )
    }
    const timer = setTimeout(() => {
      addRights();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [story_rights, miscellaneous ])

  // Rights input boxes
  const rights = (
    <div className="mt-3">
    <Row >
    <Col md={1} >
    <p className="mb-0">1000</p>
    </Col>
    <Col md={6} >
    <p className={ `${styles.BoldBlack}`}>RIGHTS</p>
    </Col>
    </Row>
    {/* TITLES */}
    <Row className={ `${styles.Overview} mb-2 py-1`} >
    <Col md={1} >
    <p className="mb-0">ACCT</p>
    </Col>
    <Col md={6} >
    <p className="mb-0">Description</p>
    </Col>
    <Col md={1} >
    <p className="mb-0">#</p>
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
    {/* Story Rights */}
    <Row className="mb-0 pb-0">
    <Col className="mb-0 pb-0" md={1} >
    <p className="mb-0 pb-0">1010</p>
    </Col>
    <Col className="mb-0 pb-0" md={6} >
    <p className="mb-0 pb-0">Story Rights</p>
    </Col>
    <Col className="mb-0 pb-0" md={1} >
    <p className="mb-0 pb-0"></p>
    </Col>
    <Col className="mb-0 pb-0" md={1} >
    <p className="mb-0 pb-0"></p>
    </Col>
    <Col className="mb-0 pb-0" md={1} >
    <p className="mb-0 pb-0"></p>
    </Col>
    <Col className="mb-0 pb-0" md={2} >
    <Form.Group controlId="story_rights" 
        className={`${styles.Width95} text-center mb-0 pb-0`} >
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
    <Form.Group controlId="miscellaneous" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="miscellaneous"
        value={miscellaneous}
        onChange={handleChangeRights}
            />
    </Form.Group>
    {errors?.miscellaneous?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Rights Total */}
    <Row className="mb-0 pb-0">
    <Col md={1} >
    </Col>
    <Col className={ `${styles.Overview} mb-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL RIGHTS</p>
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
        className={`${styles.Width95} text-center mb-0`} >
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
    </div>
  );

  // PRE-PRODUCTION AND DEVELOPMENT --------------------------------------------
  
  // Development postData
  const [postDataDevelopment, setPostDataDevelopment] = useState({
    research_development: 0,
    prelim_budget: 0,
    consultant_expenses: 0,
    office_expenses: 0,
    staff: 0,
    travel_expenses_development: 0,
    living_expenses_development: 0,
    other_development: 0,
    fringes_taxes_development: 0,
  });

  // Development postData values
  const {research_development, prelim_budget, consultant_expenses,
    office_expenses, staff, travel_expenses_development,
    living_expenses_development, other_development,
    fringes_taxes_development} = postDataDevelopment

  // Development Total postData 
  const [developmentTotal, setDevelopmentTotal] = useState(0)

  // Development handleChange
  const handleChangeDevelopment = (event) => {
    setPostDataDevelopment({
      ...postDataDevelopment,
      [event.target.name]: parseFloat(event.target.value || 0 ),
    });
  }; 

  // function to add all development on change
  useEffect(() => {
    const addDevelopment = () => {
      setDevelopmentTotal(research_development + prelim_budget + consultant_expenses
        + office_expenses + staff + travel_expenses_development
        + living_expenses_development + other_development 
        + fringes_taxes_development)
    }
    const timer = setTimeout(() => {
      addDevelopment();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [research_development, prelim_budget, consultant_expenses,
    office_expenses, staff, travel_expenses_development,
    living_expenses_development, other_development,
    fringes_taxes_development ])

  // Development input boxes
  const development = (
    <div className="mt-5">
    <Row >
    <Col md={1} >
    <p className="mb-2">2000</p>
    </Col>
    <Col md={6} >
    <p className={ `${styles.BoldBlack} mb-2`}>PRE-PRODUCTION AND DEVELOPMENT</p>
    </Col>
    </Row>
    {/* TITLES */}
    <Row className={ `${styles.Overview} mb-2 py-1`} >
    <Col md={1} >
    <p className="mb-0">ACCT</p>
    </Col>
    <Col md={6} >
    <p className="mb-0">Description</p>
    </Col>
    <Col md={1} >
    <p className="mb-0">#</p>
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
    {/* Research */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>2010</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Research</p>
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
    <Form.Group controlId="research_development" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="research_development"
        value={research_development}
        onChange={handleChangeDevelopment}
            />
    </Form.Group>
    {errors?.research_development?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Preliminary Breakdown/Budget */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>2020</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Preliminary Breakdown/Budget</p>
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
    <Form.Group controlId="prelim_budget" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="prelim_budget"
        value={prelim_budget}
        onChange={handleChangeDevelopment}
            />
    </Form.Group>
    {errors?.prelim_budget?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Consultant Expenses */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>2030</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Consultant Expenses</p>
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
    <Form.Group controlId="consultant_expenses" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="consultant_expenses"
        value={consultant_expenses}
        onChange={handleChangeDevelopment}
            />
    </Form.Group>
    {errors?.consultant_expenses?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Office Expenses */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>2040</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Office Expenses</p>
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
    <Form.Group controlId="office_expenses" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="office_expenses"
        value={office_expenses}
        onChange={handleChangeDevelopment}
            />
    </Form.Group>
    {errors?.office_expenses?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Staff */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>2050</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Staff</p>
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
    <Form.Group controlId="staff" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="staff"
        value={staff}
        onChange={handleChangeDevelopment}
            />
    </Form.Group>
    {errors?.staff?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Travel Expenses Development */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>2060</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Travel Expenses</p>
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
    <Form.Group controlId="travel_expenses_development" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="travel_expenses_development"
        value={travel_expenses_development}
        onChange={handleChangeDevelopment}
            />
    </Form.Group>
    {errors?.travel_expenses_development?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Living Expenses Development */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>2070</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Living Expenses Development</p>
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
    <Form.Group controlId="living_expenses_development" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="living_expenses_development"
        value={living_expenses_development}
        onChange={handleChangeDevelopment}
            />
    </Form.Group>
    {errors?.living_expenses_development?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Other Development */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>2080</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Other</p>
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
    <Form.Group controlId="other_development" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_development"
        value={other_development}
        onChange={handleChangeDevelopment}
            />
    </Form.Group>
    {errors?.other_development?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Fringes and Taxes */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>2090</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Fringes and Taxes</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>%</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="fringes_taxes_development" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="fringes_taxes_development"
        value={fringes_taxes_development}
        onChange={handleChangeDevelopment}
            />
    </Form.Group>
    {errors?.fringes_taxes_development?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Development Total */}
    <Row className="mt-3">
    <Col md={1} >
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL PRE-PRODUCTION AND DEVELOPMENT</p>
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
    <Form.Group controlId="developmentTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="developmentTotal"
        value={developmentTotal}
        readOnly
            />
    </Form.Group>
    {errors?.developmentTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
  );

  // end development -------------------------------------
  // SCENARIO --------------------------------------------
  
  // Scenario postData
  const [postDataScenario, setPostDataScenario] = useState({
    writers_units_number: 0,
    writers_units_name: "",
    writers_quantity: 0,
    writers_rate: 0,
    consultants_units_number: 0,
    consultants_units_name: "",
    consultants_quantity: 0,
    consultants_rate: 0,
    editors_units_number: 0,
    editors_units_name: "",
    editors_quantity: 0,
    editors_rate: 0,
    admin_scenario_units_number: 0,
    admin_scenario_units_name: "",
    admin_scenario_quantity: 0,
    admin_scenario_rate: 0,
    office_expenses_scenario: 0,
    travel_expenses_scenario: 0,
    living_expenses_scenario: 0,
    other_scenario: 0,
    fringes_taxes_scenario: 0,
  });

  // Scenario postData values
  const {writers_units_number, writers_units_name,
    writers_quantity, writers_rate,
    consultants_units_number, consultants_units_name,
    consultants_quantity, consultants_rate,
    editors_units_number, editors_units_name,
    editors_quantity, editors_rate,
    admin_scenario_units_number, admin_scenario_units_name,
    admin_scenario_quantity, admin_scenario_rate,
    office_expenses_scenario, travel_expenses_scenario,
    living_expenses_scenario, other_scenario,
    fringes_taxes_scenario} = postDataScenario

  // Writers Total postData
  const [writersTotal, setWritersTotal] = useState(0);
  // Writers Total postData 
  const [consultantsTotal, setConsultantsTotal] = useState(0);
  // Writers Total postData 
  const [editorsTotal, setEditorsTotal] = useState(0);
  // Admin Total postData 
  const [adminScenarioTotal, setAdminScenarioTotal] = useState(0);

  // function to calculate writers on change
  useEffect(() => {
    const addWriters = () => {
      setWritersTotal(writers_units_number *
        writers_quantity * writers_rate )
    }
    const timer = setTimeout(() => {
      addWriters();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [writers_units_number,
    writers_quantity, writers_rate]);

  // function to calculate consultants on change
  useEffect(() => {
    const addConsultants = () => {
      setConsultantsTotal(consultants_units_number *
        consultants_quantity * consultants_rate, )
    }
    const timer = setTimeout(() => {
      addConsultants();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [consultants_units_number,
    consultants_quantity, consultants_rate, ])

  // function to calculate editors on change
  useEffect(() => {
    const addEditors = () => {
      setEditorsTotal(editors_units_number * editors_quantity * editors_rate )
    }
    const timer = setTimeout(() => {
      addEditors();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [editors_units_number, editors_quantity, editors_rate])

  // function to calculate admin on change
  useEffect(() => {
    const addAdminScenario = () => {
      setAdminScenarioTotal(admin_scenario_units_number *
        admin_scenario_quantity * admin_scenario_rate )
    }
    const timer = setTimeout(() => {
      addAdminScenario();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [admin_scenario_units_number,
    admin_scenario_quantity, admin_scenario_rate]);

  // Scenario Total postData 
  const [scenarioTotal, setScenarioTotal] = useState(0);

  // Scenario handleChange 
  const handleChangeScenario = (event) => {
    setPostDataScenario({
      ...postDataScenario,
      [event.target.name]: parseFloat(event.target.value || 0 ),
    });
  }; 

  // Scenario handleChange Text 
  const handleChangeScenarioText = (event) => {
    setPostDataScenario({
      ...postDataScenario,
      [event.target.name]: event.target.value,
    });
  }; 

  // function to add all scenario on change
  useEffect(() => {
    const addScenario = () => {
      setScenarioTotal(writersTotal + consultantsTotal + editorsTotal +
        office_expenses_scenario + adminScenarioTotal + travel_expenses_scenario +
    living_expenses_scenario + other_scenario + fringes_taxes_scenario)
    }
    const timer = setTimeout(() => {
      addScenario();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [writersTotal, consultantsTotal, editorsTotal,
    office_expenses_scenario, adminScenarioTotal, travel_expenses_scenario,
    living_expenses_scenario, other_scenario, fringes_taxes_scenario
  ]);

  // Scenario input boxes
  const scenario = (
    <div className="mt-5">
    <Row >
    <Col md={1} >
    <p className="mb-2">3000</p>
    </Col>
    <Col md={6} >
    <p className={ `${styles.BoldBlack} mb-2`}>SCENARIO</p>
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
    {/* Writers */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>3010</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Writers</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="writers_quantity" 
        className={`${styles.Width100} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="writers_quantity"
        value={writers_quantity}
        onChange={handleChangeScenario}
            />
    </Form.Group>
    {errors?.writers_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="writers_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="writers_units_number"
        value={writers_units_number}
        onChange={handleChangeScenario}
            />
    </Form.Group>
    {errors?.writers_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="writers_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="writers_units_name"
        value={writers_units_name}
        onChange={handleChangeScenarioText}
            />
    </Form.Group>
    {errors?.writers_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="writers_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="writers_rate"
        value={writers_rate}
        onChange={handleChangeScenario}
            />
    </Form.Group>
    {errors?.writers_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="writersTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="writersTotal"
        value={writersTotal}
        readOnly
            />
    </Form.Group>
    {errors?.writersTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Consultants */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>3020</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Consultants</p>
    </Col>
    <Col className="px-1 mx-0"  md={1} >
    <Form.Group controlId="consultants_quantity" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="consultants_quantity"
        value={consultants_quantity}
        onChange={handleChangeScenario}
            />
    </Form.Group>
    {errors?.consultants_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0"  md={1} >
    <Form.Group controlId="consultants_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="consultants_units_number"
        value={consultants_units_number}
        onChange={handleChangeScenario}
            />
    </Form.Group>
    {errors?.consultants_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="consultants_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="consultants_units_name"
        value={consultants_units_name}
        onChange={handleChangeScenarioText}
            />
    </Form.Group>
    {errors?.consultants_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="consultants_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="consultants_rate"
        value={consultants_rate}
        onChange={handleChangeScenario}
            />
    </Form.Group>
    {errors?.consultants_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="consultantsTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="consultantsTotal"
        value={consultantsTotal}
        onChange={handleChangeScenario}
            />
    </Form.Group>
    {errors?.consultantsTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Editors */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>3030</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Editors</p>
    </Col>
    <Col className="px-1 mx-0"  md={1} >
    <Form.Group controlId="editors_quantity" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="editors_quantity"
        value={editors_quantity}
        onChange={handleChangeScenario}
            />
    </Form.Group>
    {errors?.editors_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0"  md={1} >
    <Form.Group controlId="editors_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="editors_units_number"
        value={editors_units_number}
        onChange={handleChangeScenario}
            />
    </Form.Group>
    {errors?.editors_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0"  md={1} >
    <Form.Group controlId="editors_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="editors_units_name"
        value={editors_units_name}
        onChange={handleChangeScenarioText}
            />
    </Form.Group>
    {errors?.editors_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0"  md={1} >
    <Form.Group controlId="editors_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="editors_rate"
        value={editors_rate}
        onChange={handleChangeScenario}
            />
    </Form.Group>
    {errors?.editors_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col  md={2} >
    <Form.Group controlId="editorsTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="editorsTotal"
        value={editorsTotal}
        onChange={handleChangeScenario}
            />
    </Form.Group>
    {errors?.editorsTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Admin */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>3040</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Admin</p>
    </Col>
    <Col className="px-1 mx-0"  md={1} >
    <Form.Group controlId="admin_scenario_quantity" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="admin_scenario_quantity"
        value={admin_scenario_quantity}
        onChange={handleChangeScenario}
            />
    </Form.Group>
    {errors?.admin_scenario_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0"  md={1} >
    <Form.Group controlId="admin_scenario_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="admin_scenario_units_number"
        value={admin_scenario_units_number}
        onChange={handleChangeScenario}
            />
    </Form.Group>
    {errors?.admin_scenario_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0"  md={1} >
    <Form.Group controlId="admin_scenario_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="admin_scenario_units_name"
        value={admin_scenario_units_name}
        onChange={handleChangeScenarioText}
            />
    </Form.Group>
    {errors?.admin_scenario_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0"  md={1} >
    <Form.Group controlId="admin_scenario_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="admin_scenario_rate"
        value={admin_scenario_rate}
        onChange={handleChangeScenario}
            />
    </Form.Group>
    {errors?.admin_scenario_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="adminScenarioTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="adminScenarioTotal"
        value={adminScenarioTotal}
        onChange={handleChangeScenario}
            />
    </Form.Group>
    {errors?.adminScenarioTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Office Cost/Expenses Scenario */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>3050</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Office Cost/Expenses Scenario</p>
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
    <Form.Group controlId="office_expenses_scenario" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="office_expenses_scenario"
        value={office_expenses_scenario}
        onChange={handleChangeScenario}
            />
    </Form.Group>
    {errors?.office_expenses_scenario?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Travel Expenses Scenario */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>3060</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Travel Expenses</p>
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
    <Form.Group controlId="travel_expenses_scenario" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="travel_expenses_scenario"
        value={travel_expenses_scenario}
        onChange={handleChangeScenario}
            />
    </Form.Group>
    {errors?.travel_expenses_scenario?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Living Expenses */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>3070</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Living Expenses</p>
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
    <Form.Group controlId="living_expenses_scenario" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="living_expenses_scenario"
        value={living_expenses_scenario}
        onChange={handleChangeScenario}
            />
    </Form.Group>
    {errors?.living_expenses_scenario?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Other */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>3080</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Other</p>
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
    <Form.Group controlId="other_scenario" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_scenario"
        value={other_scenario}
        onChange={handleChangeScenario}
            />
    </Form.Group>
    {errors?.other_scenario?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Fringes and Taxes */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>3090</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Fringes and Taxes</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>%</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="fringes_taxes_scenario" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="fringes_taxes_scenario"
        value={fringes_taxes_scenario}
        onChange={handleChangeScenario}
            />
    </Form.Group>
    {errors?.fringes_taxes_scenario?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Scenario Total */}
    <Row className="mt-3">
    <Col md={1} >
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL SCENARIO</p>
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
    <Form.Group controlId="scenarioTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="scenarioTotal"
        value={scenarioTotal}
        readOnly
            />
    </Form.Group>
    {errors?.scenarioTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
  );
  // end scenario ------------------------------------------------

  // PRODUCERS DIRECTORS --------------------------------------------
  
  // producers postData
  const [postDataProducersDirs, setPostDataProducersDirs] = useState({
    executive_producers_rate: 0,
    producers_rate: 0,
    line_producers_rate: 0,
    co_producers_rate: 0,
    associate_producers_rate: 0,
    directors_rate: 0,
    unit2_directors_rate: 0,
    executive_producers_quantity: 0,
    producers_quantity: 0,
    line_producers_quantity: 0,
    co_producers_quantity: 0,
    associate_producers_quantity: 0,
    directors_quantity: 0,
    unit2_directors_quantity: 0,
    travel_expenses_producers_dirs: 0,
    living_expenses_producers_dirs: 0,
    other_producers_dirs: 0,
    fringes_taxes_producers_dirs: 0,
  });

  // producers directors postData values
  const {executive_producers_rate,
    producers_rate,
    line_producers_rate,
    co_producers_rate,
    associate_producers_rate,
    directors_rate,
    unit2_directors_rate,
    executive_producers_quantity,
    producers_quantity,
    line_producers_quantity,
    co_producers_quantity,
    associate_producers_quantity,
    directors_quantity,
    unit2_directors_quantity,
    travel_expenses_producers_dirs,
    living_expenses_producers_dirs,
    other_producers_dirs,
    fringes_taxes_producers_dirs,
    } = postDataProducersDirs

  // TOTALS
  // Exec Producers Total postData
  const [execProducersTotal, setExecProducersTotal] = useState(0);
  // Producers Total postData
  const [producersTotal, setProducersTotal] = useState(0);
  // Line Producers Total postData
  const [lineProducersTotal, setLineProducersTotal] = useState(0);
  // Co Producers Total postData
  const [coProducersTotal, setCoProducersTotal] = useState(0);
  // Associate Producers Total postData
  const [assocProducersTotal, setAssocProducersTotal] = useState(0);
  // Directors Total postData
  const [directorsTotal, setDirectorsTotal] = useState(0);
  // 2nd Unit Directors Total postData
  const [unit2DirectorsTotal, setUnit2DirectorsTotal] = useState(0);
  // ProducersDirs Total postData 
  const [producersDirsTotal, setProducersDirsTotal] = useState(0);

  // CALCULATE FUNCTIONS
  // function to calculate Exec Producers on change
  useEffect(() => {
    const addExecPros = () => {
      setExecProducersTotal(parseFloat(executive_producers_quantity || 0) * 
      parseFloat(executive_producers_rate || 0))
    }
    const timer = setTimeout(() => {
      addExecPros();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [executive_producers_quantity, executive_producers_rate]);

  // function to calculate Producers on change
  useEffect(() => {
    const addPros = () => {
      setProducersTotal(parseFloat(producers_quantity || 0) * 
      parseFloat(producers_rate || 0))
    }
    const timer = setTimeout(() => {
      addPros();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [producers_quantity, producers_rate]);

  // function to calculate Line Producers on change
  useEffect(() => {
    const addLinePros = () => {
      setLineProducersTotal(parseFloat(line_producers_quantity || 0) * 
      parseFloat(line_producers_rate || 0))
    }
    const timer = setTimeout(() => {
      addLinePros();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [line_producers_quantity, line_producers_rate]);

  // function to calculate  Co Producers on change
  useEffect(() => {
    const addCoPros = () => {
      setCoProducersTotal(parseFloat(co_producers_quantity || 0) * 
      parseFloat(co_producers_rate || 0))
    }
    const timer = setTimeout(() => {
      addCoPros();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [co_producers_quantity, co_producers_rate]);

  // function to calculate  Assoc Producers on change
  useEffect(() => {
    const addAssocPros = () => {
      setAssocProducersTotal(parseFloat(associate_producers_quantity || 0) * 
      parseFloat(associate_producers_rate || 0))
    }
    const timer = setTimeout(() => {
      addAssocPros();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [associate_producers_quantity, associate_producers_rate]);

  // function to calculate Directors on change
  useEffect(() => {
    const addDirectors = () => {
      setDirectorsTotal(parseFloat(directors_quantity || 0) * 
      parseFloat(directors_rate || 0))
    }
    const timer = setTimeout(() => {
      addDirectors();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [directors_quantity, directors_rate]);

  // function to calculate 2nd Unit Directors on change
  useEffect(() => {
    const addUnit2Dirs = () => {
      setUnit2DirectorsTotal(parseFloat(unit2_directors_quantity || 0) * 
      parseFloat(unit2_directors_rate || 0))
    }
    const timer = setTimeout(() => {
      addUnit2Dirs();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [unit2_directors_quantity, unit2_directors_rate]);

  // end calculate functions

  // function to add all ProducersDirs on change
  useEffect(() => {
    const addProducersDirs = () => {
      setProducersDirsTotal(execProducersTotal +
        producersTotal + lineProducersTotal + coProducersTotal +
        assocProducersTotal + directorsTotal + unit2DirectorsTotal +
        travel_expenses_producers_dirs + living_expenses_producers_dirs +
        other_producers_dirs + fringes_taxes_producers_dirs,)
    }
    const timer = setTimeout(() => {
      addProducersDirs();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [execProducersTotal, producersTotal, lineProducersTotal, coProducersTotal,
    assocProducersTotal, directorsTotal, unit2DirectorsTotal,
    travel_expenses_producers_dirs, living_expenses_producers_dirs,
    other_producers_dirs, fringes_taxes_producers_dirs, ]);

  // ProducersDirs handleChange
  const handleChangeProducersDirs = (event) => {
    setPostDataProducersDirs({
      ...postDataProducersDirs,
      [event.target.name]: parseFloat(event.target.value || 0 ),
    });
  }; 

  // Producers Dirs input boxes
  const producersDirs = (
    <div>
    <Row className="mt-5" >
    <Col md={1} >
    <p className="mb-2">4000</p>
    </Col>
    <Col md={6} >
    <p className={ `${styles.BoldBlack} mb-2`}>
      PRODUCERS AND DIRECTORS</p>
    </Col>
    </Row>
    {/* TITLES */}
    <Row className={ `${styles.Overview} mb-2 py-1`} >
    <Col md={1} >
    <p>ACCT</p>
    </Col>
    <Col md={6} >
    <p>Description</p>
    </Col>
    <Col md={1} >
    <p>#</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p>Price</p>
    </Col>
    <Col md={2} >
    <p>Total</p>
    </Col>
    </Row>
    {/* Executive Producers */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>4010</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Executive Producers</p>
    </Col>
    {/* Quantity */}
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="executive_producers_quantity" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="executive_producers_quantity"
        value={executive_producers_quantity}
        onChange={handleChangeProducersDirs}
            />
    </Form.Group>
    {errors?.executive_producers_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    {/* blank */}
    <Col md={1} >
    <p></p>
    </Col>
    {/* Price */}
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="executive_producers_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="executive_producers_rate"
        value={executive_producers_rate}
        onChange={handleChangeProducersDirs}
            />
    </Form.Group>
    {errors?.executive_producers_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    {/* total */}
    <Col md={2} >
    <Form.Group controlId="execProducersTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="execProducersTotal"
        value={execProducersTotal}
        readOnly
            />
    </Form.Group>
    {errors?.execProducersTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Producers */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>4020</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Producers</p>
    </Col>
    {/* Quantity */}
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="producers_quantity" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="producers_quantity"
        value={producers_quantity}
        onChange={handleChangeProducersDirs}
            />
    </Form.Group>
    {errors?.producers_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    {/* blank */}
    <Col md={1} >
    <p></p>
    </Col>
    {/* Price */}
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="producers_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="producers_rate"
        value={producers_rate}
        onChange={handleChangeProducersDirs}
            />
    </Form.Group>
    {errors?.producers_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    {/* total */}
    <Col md={2} >
    <Form.Group controlId="producersTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="producersTotal"
        value={producersTotal}
        readOnly
            />
    </Form.Group>
    {errors?.producersTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Line Producers */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>4030</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Line Producers</p>
    </Col>
    {/* Quantity */}
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="line_producers_quantity" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="line_producers_quantity"
        value={line_producers_quantity}
        onChange={handleChangeProducersDirs}
            />
    </Form.Group>
    {errors?.line_producers_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    {/* blank */}
    <Col md={1} >
    <p></p>
    </Col>
    {/* Price */}
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="line_producers_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="line_producers_rate"
        value={line_producers_rate}
        onChange={handleChangeProducersDirs}
            />
    </Form.Group>
    {errors?.line_producers_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    {/* total */}
    <Col md={2} >
    <Form.Group controlId="lineProducersTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="lineProducersTotal"
        value={lineProducersTotal}
        readOnly
            />
    </Form.Group>
    {errors?.lineProducersTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Co Producers */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>4040</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Co-Producers</p>
    </Col>
    {/* Quantity */}
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="co_producers_quantity" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="co_producers_quantity"
        value={co_producers_quantity}
        onChange={handleChangeProducersDirs}
            />
    </Form.Group>
    {errors?.co_producers_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    {/* blank */}
    <Col md={1} >
    <p></p>
    </Col>
    {/* Price */}
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="co_producers_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="co_producers_rate"
        value={co_producers_rate}
        onChange={handleChangeProducersDirs}
            />
    </Form.Group>
    {errors?.co_producers_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    {/* total */}
    <Col md={2} >
    <Form.Group controlId="coProducersTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="coProducersTotal"
        value={coProducersTotal}
        readOnly
            />
    </Form.Group>
    {errors?.coProducersTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Associate Producers */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>4050</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Associate Producers</p>
    </Col>
    {/* Quantity */}
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="associate_producers_quantity" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="associate_producers_quantity"
        value={associate_producers_quantity}
        onChange={handleChangeProducersDirs}
            />
    </Form.Group>
    {errors?.associate_producers_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    {/* blank */}
    <Col md={1} >
    <p></p>
    </Col>
    {/* Price */}
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="associate_producers_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="associate_producers_rate"
        value={associate_producers_rate}
        onChange={handleChangeProducersDirs}
            />
    </Form.Group>
    {errors?.associate_producers_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    {/* total */}
    <Col md={2} >
    <Form.Group controlId="assocProducersTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assocProducersTotal"
        value={assocProducersTotal}
        readOnly
            />
    </Form.Group>
    {errors?.assocProducersTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Directors */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>4060</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Directors</p>
    </Col>
    {/* Quantity */}
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="directors_quantity" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="directors_quantity"
        value={directors_quantity}
        onChange={handleChangeProducersDirs}
            />
    </Form.Group>
    {errors?.directors_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    {/* blank */}
    <Col md={1} >
    <p></p>
    </Col>
    {/* Price */}
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="directors_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="directors_rate"
        value={directors_rate}
        onChange={handleChangeProducersDirs}
            />
    </Form.Group>
    {errors?.directors_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    {/* total */}
    <Col md={2} >
    <Form.Group controlId="directorsTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="directorsTotal"
        value={directorsTotal}
        readOnly
            />
    </Form.Group>
    {errors?.directorsTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* 2nd Unit Directors */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>4070</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>2nd Unit Directors</p>
    </Col>
    {/* Quantity */}
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="unit2_directors_quantity" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="unit2_directors_quantity"
        value={unit2_directors_quantity}
        onChange={handleChangeProducersDirs}
            />
    </Form.Group>
    {errors?.unit2_directors_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    {/* blank */}
    <Col md={1} >
    <p></p>
    </Col>
    {/* Price */}
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="unit2_directors_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="unit2_directors_rate"
        value={unit2_directors_rate}
        onChange={handleChangeProducersDirs}
            />
    </Form.Group>
    {errors?.unit2_directors_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    {/* total */}
    <Col md={2} >
    <Form.Group controlId="unit2DirectorsTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="unit2DirectorsTotal"
        value={unit2DirectorsTotal}
        readOnly
            />
    </Form.Group>
    {errors?.unit2DirectorsTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Travel Expenses */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>4080</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Travel Expenses</p>
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
    <Form.Group controlId="travel_expenses_producers_dirs" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="travel_expenses_producers_dirs"
        value={travel_expenses_producers_dirs}
        onChange={handleChangeProducersDirs}
            />
    </Form.Group>
    {errors?.travel_expenses_producers_dirs?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Living Expenses */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>4090</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Living Expenses</p>
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
    <Form.Group controlId="living_expenses_producers_dirs" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="living_expenses_producers_dirs"
        value={living_expenses_producers_dirs}
        onChange={handleChangeProducersDirs}
            />
    </Form.Group>
    {errors?.living_expenses_producers_dirs?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Other */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>4100</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Other</p>
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
    <Form.Group controlId="other_producers_dirs" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_producers_dirs"
        value={other_producers_dirs}
        onChange={handleChangeProducersDirs}
            />
    </Form.Group>
    {errors?.other_producers_dirs?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Fringes and Taxes */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>4110</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Fringes and Taxes</p>
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
    <Form.Group controlId="fringes_taxes_producers_dirs" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="fringes_taxes_producers_dirs"
        value={fringes_taxes_producers_dirs}
        onChange={handleChangeProducersDirs}
            />
    </Form.Group>
    {errors?.fringes_taxes_producers_dirs?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Producers Dirs Total */}
    <Row className="mt-3">
    <Col md={1} >
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL PRODUCERS / DIRECTORS </p>
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
    <Form.Group controlId="producersDirsTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="producersDirsTotal"
        value={producersDirsTotal}
        readOnly
            />
    </Form.Group>
    {errors?.producersDirsTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
  );
  // end producers-directors -------------------------------

  // STARS / MUSIC ------------------------------------------
  // Rights postData
  const [postDataStarsMusic, setPostDataStarsMusic] = useState({
    stars: 0,
    stars_rights_payments: 0,
    travel_expenses_stars: 0,
    living_expenses_stars: 0,
    other_stars: 0,
    fringes_taxes_stars: 0,
    music: 0,
    music_supervisor: 0,
    travel_expenses_music: 0,
    living_expenses_music: 0,
    music_rights_addl_songs: 0,
    other_music: 0,
    fringes_taxes_music: 0,
    });

  // postDataStarsMusic postData values
  const {
    stars, stars_rights_payments, travel_expenses_stars,
    living_expenses_stars, other_stars, fringes_taxes_stars,
    music, music_supervisor, travel_expenses_music, living_expenses_music,
    music_rights_addl_songs, other_music, fringes_taxes_music,
  } = postDataStarsMusic;

  // StarsMusic Total postData 
  const [starsMusicTotal, setStarsMusicTotal] = useState(0);

  // StarsMusic handleChange
  const handleChangeStarsMusic = (event) => {
    setPostDataStarsMusic({
      ...postDataStarsMusic,
      [event.target.name]: parseFloat(event.target.value || 0 ),
    });
  }; 

  // function to add all StarsMusic on change
  useEffect(() => {
    const addStarsMusic = () => {
      setStarsMusicTotal(
    stars, stars_rights_payments + travel_expenses_stars +
    living_expenses_stars + other_stars + fringes_taxes_stars +
    music + music_supervisor + travel_expenses_music +
    living_expenses_music + music_rights_addl_songs +
    other_music + fringes_taxes_music
       )
    }
    const timer = setTimeout(() => {
      addStarsMusic();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [stars, stars_rights_payments, travel_expenses_stars,
    living_expenses_stars, other_stars, fringes_taxes_stars,
    music, music_supervisor, travel_expenses_music, living_expenses_music,
    music_rights_addl_songs, other_music, fringes_taxes_music]);

  // StarsMusic input boxes
  const starsmusic = (
    <div>
    <Row className="mt-5" >
    <Col md={1} >
    <p className="mb-2">5000</p>
    </Col>
    <Col md={6} >
    <p className={ `${styles.BoldBlack} mb-2`}>STARS / MUSIC</p>
    </Col>
    </Row>
    {/* TITLES */}
    <Row className={ `${styles.Overview} mb-2 py-1`} >
    <Col md={1} >
    <p>ACCT</p>
    </Col>
    <Col md={6} >
    <p>Description</p>
    </Col>
    <Col md={1} >
    <p>#</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p>Price</p>
    </Col>
    <Col md={2} >
    <p>Total</p>
    </Col>
    </Row>
    {/* Stars */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>5010</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Stars</p>
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
    <Form.Group controlId="stars" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stars"
        value={stars}
        onChange={handleChangeStarsMusic}
            />
    </Form.Group>
    {errors?.stars?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Rights */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>5020</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Stars Rights Payments</p>
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
    <Form.Group controlId="stars_rights_payments" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stars_rights_payments"
        value={stars_rights_payments}
        onChange={handleChangeStarsMusic}
            />
    </Form.Group>
    {errors?.stars_rights_payments?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Travel Expenses Stars */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>5030</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Travel Expenses Stars</p>
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
    <Form.Group controlId="travel_expenses_stars" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="travel_expenses_stars"
        value={travel_expenses_stars}
        onChange={handleChangeStarsMusic}
            />
    </Form.Group>
    {errors?.travel_expenses_stars?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Living Expenses Stars */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>5020</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Living Expenses Stars</p>
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
    <Form.Group controlId="living_expenses_stars" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="living_expenses_stars"
        value={living_expenses_stars}
        onChange={handleChangeStarsMusic}
            />
    </Form.Group>
    {errors?.living_expenses_stars?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Stars - Other */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>5050</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Stars - Other </p>
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
    <Form.Group controlId="other_stars" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_stars"
        value={other_stars}
        onChange={handleChangeStarsMusic}
            />
    </Form.Group>
    {errors?.other_stars?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Stars - Fringes Taxes */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>5060</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Stars - Fringes Taxes</p>
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
    <Form.Group controlId="fringes_taxes_stars" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="fringes_taxes_stars"
        value={fringes_taxes_stars}
        onChange={handleChangeStarsMusic}
            />
    </Form.Group>
    {errors?.fringes_taxes_stars?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Music */}
    <Row >
    <Col md={1} >
    <p className={`${styles.Underline}`}>5070</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Music: all-in package includes Composer, Musicians, 
      Score, and Recording Session</p>
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
    <Form.Group controlId="music" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="music"
        value={music}
        onChange={handleChangeStarsMusic}
            />
    </Form.Group>
    {errors?.music?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Music Supervisor */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>5080</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Music Supervisor </p>
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
    <Form.Group controlId="music_supervisor" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="music_supervisor"
        value={music_supervisor}
        onChange={handleChangeStarsMusic}
            />
    </Form.Group>
    {errors?.music_supervisor?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Travel Expenses */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>5090</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Music - Travel Expenses </p>
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
    <Form.Group controlId="travel_expenses_music" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="travel_expenses_music"
        value={travel_expenses_music}
        onChange={handleChangeStarsMusic}
            />
    </Form.Group>
    {errors?.travel_expenses_music?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Living Expenses */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>5100</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Music - Living Expenses </p>
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
    <Form.Group controlId="living_expenses_music" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="living_expenses_music"
        value={living_expenses_music}
        onChange={handleChangeStarsMusic}
            />
    </Form.Group>
    {errors?.living_expenses_music?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Add'l Music Rights (Songs, etc.) */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>5110</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Add'l Music Rights - Songs, etc. </p>
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
    <Form.Group controlId="music_rights_addl_songs" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="music_rights_addl_songs"
        value={music_rights_addl_songs}
        onChange={handleChangeStarsMusic}
            />
    </Form.Group>
    {errors?.music_rights_addl_songs?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Music Other */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>5120</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Music - Other </p>
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
    <Form.Group controlId="other_music" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_music"
        value={other_music}
        onChange={handleChangeStarsMusic}
            />
    </Form.Group>
    {errors?.other_music?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Music - Fringes and Taxes */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>5130</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Music - Fringes and Taxes</p>
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
    <Form.Group controlId="fringes_taxes_music" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="fringes_taxes_music"
        value={fringes_taxes_music}
        onChange={handleChangeStarsMusic}
            />
    </Form.Group>
    {errors?.fringes_taxes_music?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Stars / Music Total */}
    <Row className="mt-3">
    <Col md={1} >
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL STARS / MUSIC</p>
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
    <Form.Group controlId="starsMusicTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="starsMusicTotal"
        value={starsMusicTotal}
        readOnly
            />
    </Form.Group>
    {errors?.starsMusicTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
  );
  // end stars music

  // Above the line total

  // Above the line Total postData 
  const [aboveTheLineTotal, setAboveTheLineTotal] = useState(0);
  // function to add all Above the line totals on change
  useEffect(() => {
    const addAboveTheLine = () => {
      setAboveTheLineTotal(
        parseFloat(postDataRightsTotal || 0) +
        parseFloat(developmentTotal || 0) +
        parseFloat(scenarioTotal || 0) +
        parseFloat(producersDirsTotal || 0) +
        parseFloat(starsMusicTotal || 0))
      }
    const timer = setTimeout(() => {
      addAboveTheLine();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [postDataRightsTotal, developmentTotal, scenarioTotal,
    producersDirsTotal, starsMusicTotal]);

  // Above the line input box
  const abovetheline = (
    <div className="my-5 pl-3">
    <Row>
    <Col className={ `${styles.Overview}  my-0 py-2`} md={10} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL ABOVE THE LINE</p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="aboveTheLineTotal" 
          className={`${styles.Width95} text-center pt-1 mb-0`} >
          <Form.Control 
          type="text"
          className={styles.Input}
          name="aboveTheLineTotal"
          value={aboveTheLineTotal}
          readOnly
              />
      </Form.Group>
      {errors?.aboveTheLineTotal?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
          {message}
          </Alert>
      ))}
    </Col>
    </Row>
    </div>
  );

  // BELOW THE LINE - "B" PRODUCTION

  // CAST ----  ----------------------------------------
  
  // Cast postData
  const [postDataCast, setPostDataCast] = useState({
    principals_quantity: 0,
    principals_units_number: 0,
    principals_units_name: "",
    principals_rate: 0,
    actors_quantity: 0,
    actors_units_number: 0,
    actors_units_name: "",
    actors_rate: 0,
    stuntcoordinators_quantity: 0,
    stuntcoordinators_units_number: 0,
    stuntcoordinators_units_name: "",
    stuntcoordinators_rate: 0,
    stuntperformers_quantity: 0,
    stuntperformers_units_number: 0,
    stuntperformers_units_name: "",
    stuntperformers_rate: 0,
    otherperformers_quantity: 0,
    otherperformers_units_number: 0,
    otherperformers_units_name: "",
    otherperformers_rate: 0,
    extras_quantity: 0,
    extras_units_number: 0,
    extras_units_name: "",
    extras_rate: 0,
    casting_director: 0,
    extras_casting: 0,
    other_cast: 0,
    fringes_taxes_cast: 0,
    rights_payments_cast: 0,
  });

  // Cast postData values
  const {
    principals_quantity, principals_units_number,
    principals_units_name, principals_rate,
    actors_quantity, actors_units_number, 
    actors_units_name, actors_rate,
    stuntcoordinators_quantity, stuntcoordinators_units_number,
    stuntcoordinators_units_name, stuntcoordinators_rate,
    stuntperformers_quantity, stuntperformers_units_number,
    stuntperformers_units_name, stuntperformers_rate,
    otherperformers_quantity, otherperformers_units_number,
    otherperformers_units_name, otherperformers_rate,
    extras_quantity, extras_units_number,
    extras_units_name, extras_rate,
    casting_director, extras_casting,
    other_cast, fringes_taxes_cast, rights_payments_cast,
  } = postDataCast;

  // Principals Total postData
  const [principalsTotal, setPrincipalsTotal] = useState(0);
  // Actors Total postData 
  const [actorsTotal, setActorsTotal] = useState(0);
  // Editors Total postData
  const [stuntcoordinatorsTotal, setStuntcoordinatorsTotal] = useState(0);
  // Admin Total postData
  const [stuntperformersTotal, setStuntperformersTotal] = useState(0);
  // Admin Total postData
  const [otherperformersTotal, setOtherperformersTotal] = useState(0);
  // Extras Total postData
  const [extrasTotal, setExtrasTotal] = useState(0);

  // Calculate Functions
  // function to calculate principals on change
  useEffect(() => {
    const addPrincipals = () => {
      setPrincipalsTotal(parseFloat(principals_units_number || 0) * 
      parseFloat(principals_quantity || 0) * 
      parseFloat(principals_rate || 0))
    }
    const timer = setTimeout(() => {
      addPrincipals();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [principals_units_number, principals_quantity, principals_rate]);

  // function to calculate actors on change
  useEffect(() => {
    const addActors = () => {
      setActorsTotal(parseFloat(actors_units_number || 0) * 
      parseFloat(actors_quantity || 0) * 
      parseFloat(actors_rate || 0))
    }
    const timer = setTimeout(() => {
      addActors();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [actors_units_number, actors_quantity, actors_rate]);

  // function to calculate stuntcoordinators on change
  useEffect(() => {
    const addStuntcoordinators = () => {
      setStuntcoordinatorsTotal(parseFloat(stuntcoordinators_units_number || 0) * 
      parseFloat(stuntcoordinators_quantity || 0) * 
      parseFloat(stuntcoordinators_rate || 0))
    }
    const timer = setTimeout(() => {
      addStuntcoordinators();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [stuntcoordinators_units_number, stuntcoordinators_quantity, stuntcoordinators_rate]);

  // function to calculate stuntperformers on change
  useEffect(() => {
    const addStuntperformers = () => {
      setStuntperformersTotal(parseFloat(stuntperformers_units_number || 0) * 
      parseFloat(stuntperformers_quantity || 0) * 
      parseFloat(stuntperformers_rate || 0))
    }
    const timer = setTimeout(() => {
      addStuntperformers();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [stuntperformers_units_number, stuntperformers_quantity, stuntperformers_rate]);

  // function to calculate otherperformers on change
  useEffect(() => {
    const addOtherperformers = () => {
      setOtherperformersTotal(parseFloat(otherperformers_units_number || 0) * 
      parseFloat(otherperformers_quantity || 0) * 
      parseFloat(otherperformers_rate || 0))
    }
    const timer = setTimeout(() => {
      addOtherperformers();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [otherperformers_units_number, otherperformers_quantity, otherperformers_rate]);

  // function to calculate extras on change
  useEffect(() => {
    const addExtras = () => {
      setExtrasTotal(parseFloat(extras_units_number || 0) * 
      parseFloat(extras_quantity || 0) * 
      parseFloat(extras_rate || 0))
    }
    const timer = setTimeout(() => {
      addExtras();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [extras_units_number, extras_quantity, extras_rate]);

  // Cast Total postData
  const [castTotal, setCastTotal] = useState(0);

  // Cast handleChange 
  const handleChangeCast = (event) => {
    setPostDataCast({
      ...postDataCast,
      [event.target.name]: parseFloat(event.target.value || 0 ),
    });
  }; 

  // Cast handleChange Text 
  const handleChangeCastText = (event) => {
    setPostDataCast({
      ...postDataCast,
      [event.target.name]: event.target.value,
    });
  }; 

  // function to add all cast on change
  useEffect(() => {
    const addCast = () => {
      setCastTotal(
      parseFloat(principalsTotal || 0) +
      parseFloat(actorsTotal || 0) +
      parseFloat(stuntcoordinatorsTotal || 0) +
      parseFloat(stuntperformersTotal || 0) +
      parseFloat(otherperformersTotal || 0) +
      parseFloat(extrasTotal || 0) +
      parseFloat(casting_director || 0) +
      parseFloat(extras_casting || 0) +
      parseFloat(other_cast || 0) +
      parseFloat(rights_payments_cast || 0) +
      parseFloat(fringes_taxes_cast || 0) 
      )
    }
    const timer = setTimeout(() => {
      addCast();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [principalsTotal, actorsTotal, stuntcoordinatorsTotal,
    stuntperformersTotal, otherperformersTotal, extrasTotal,
    casting_director, extras_casting, other_cast,
    rights_payments_cast, fringes_taxes_cast ]);

  // Cast input boxes
  const cast = (
    <div className="mt-5">
    <Row >
    <Col md={1} >
    <p className="mb-2">6000</p>
    </Col>
    <Col md={6} >
    <p className={ `${styles.BoldBlack} mb-2`}>CAST</p>
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
    {/* Principals */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>6010</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Principals</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="principals_quantity" 
        className={`${styles.Width100} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="principals_quantity"
        value={principals_quantity}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.principals_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="principals_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="principals_units_number"
        value={principals_units_number}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.principals_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="principals_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="principals_units_name"
        value={principals_units_name}
        onChange={handleChangeCastText}
            />
    </Form.Group>
    {errors?.principals_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="principals_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="principals_rate"
        value={principals_rate}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.principals_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="principalsTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="principalsTotal"
        value={principalsTotal}
        readOnly
            />
    </Form.Group>
    {errors?.principalsTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Actors */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>6020</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Actors</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="actors_quantity" 
        className={`${styles.Width100} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="actors_quantity"
        value={actors_quantity}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.actors_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="actors_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="actors_units_number"
        value={actors_units_number}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.actors_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="actors_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="actors_units_name"
        value={actors_units_name}
        onChange={handleChangeCastText}
            />
    </Form.Group>
    {errors?.actors_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="actors_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="actors_rate"
        value={actors_rate}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.actors_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="actorsTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="actorsTotal"
        value={actorsTotal}
        readOnly
            />
    </Form.Group>
    {errors?.actorsTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Stunt Coordinators */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>6030</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Stunt Coordinators</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="stuntcoordinators_quantity" 
        className={`${styles.Width100} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stuntcoordinators_quantity"
        value={stuntcoordinators_quantity}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.stuntcoordinators_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="stuntcoordinators_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stuntcoordinators_units_number"
        value={stuntcoordinators_units_number}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.stuntcoordinators_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="stuntcoordinators_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stuntcoordinators_units_name"
        value={stuntcoordinators_units_name}
        onChange={handleChangeCastText}
            />
    </Form.Group>
    {errors?.stuntcoordinators_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="stuntcoordinators_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stuntcoordinators_rate"
        value={stuntcoordinators_rate}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.stuntcoordinators_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="stuntcoordinatorsTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stuntcoordinatorsTotal"
        value={stuntcoordinatorsTotal}
        readOnly
            />
    </Form.Group>
    {errors?.stuntcoordinatorsTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Stunt Performers */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>6040</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Stunt Performers</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="stuntperformers_quantity" 
        className={`${styles.Width100} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stuntperformers_quantity"
        value={stuntperformers_quantity}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.stuntperformers_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="stuntperformers_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stuntperformers_units_number"
        value={stuntperformers_units_number}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.stuntperformers_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="stuntperformers_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stuntperformers_units_name"
        value={stuntperformers_units_name}
        onChange={handleChangeCastText}
            />
    </Form.Group>
    {errors?.stuntperformers_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="stuntperformers_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stuntperformers_rate"
        value={stuntperformers_rate}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.stuntperformers_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="stuntperformersTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stuntperformersTotal"
        value={stuntperformersTotal}
        readOnly
            />
    </Form.Group>
    {errors?.stuntperformersTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Other Performers */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>6050</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Other Performers</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="otherperformers_quantity" 
        className={`${styles.Width100} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="otherperformers_quantity"
        value={otherperformers_quantity}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.otherperformers_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="otherperformers_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="otherperformers_units_number"
        value={otherperformers_units_number}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.otherperformers_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="otherperformers_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="otherperformers_units_name"
        value={otherperformers_units_name}
        onChange={handleChangeCastText}
            />
    </Form.Group>
    {errors?.otherperformers_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="otherperformers_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="otherperformers_rate"
        value={otherperformers_rate}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.otherperformers_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="otherperformersTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="otherperformersTotal"
        value={otherperformersTotal}
        readOnly
            />
    </Form.Group>
    {errors?.otherperformersTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Extras */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>6060</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Extras</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="extras_quantity" 
        className={`${styles.Width100} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="extras_quantity"
        value={extras_quantity}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.extras_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="extras_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="extras_units_number"
        value={extras_units_number}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.extras_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="extras_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="extras_units_name"
        value={extras_units_name}
        onChange={handleChangeCastText}
            />
    </Form.Group>
    {errors?.extras_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="extras_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="extras_rate"
        value={extras_rate}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.extras_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="extrasTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="extrasTotal"
        value={extrasTotal}
        readOnly
            />
    </Form.Group>
    {errors?.extrasTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Casting Director */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>6070</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Casting Director</p>
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
    <Form.Group controlId="casting_director" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="casting_director"
        value={casting_director}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.casting_director?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Extras Casting */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>6080</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Extras Casting</p>
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
    <Form.Group controlId="extras_casting" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="extras_casting"
        value={extras_casting}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.extras_casting?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Other */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>6090</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Other - Cast</p>
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
    <Form.Group controlId="other_cast" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_cast"
        value={other_cast}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.other_cast?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Fringes Taxes - Cast */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>6100</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Fringes Taxes - Cast</p>
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
    <Form.Group controlId="fringes_taxes_cast" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="fringes_taxes_cast"
        value={fringes_taxes_cast}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.fringes_taxes_cast?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Rights Payments - Cast */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>6110</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Rights Payments - Cast</p>
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
    <Form.Group controlId="rights_payments_cast" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="rights_payments_cast"
        value={rights_payments_cast}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.rights_payments_cast?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Cast Total */}
    <Row className="mt-3">
    <Col md={1} >
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL CAST</p>
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
    <Form.Group controlId="castTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="castTotal"
        value={castTotal}
        readOnly
            />
    </Form.Group>
    {errors?.castTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
  )

  // PRODUCTION STAFF -----------------------------------

  // Production postData
  const [postDataProduction, setPostDataProduction] = useState({
    production_manager_quantity: 0,
    production_manager_units_number: 0,
    production_manager_units_name: "",
    production_manager_rate: 0,
    production_supervisor_quantity: 0,
    production_supervisor_units_number: 0,
    production_supervisor_units_name: "",
    production_supervisor_rate: 0,
    production_coordinator_quantity: 0,
    production_coordinator_units_number: 0,
    production_coordinator_units_name: "",
    production_coordinator_rate: 0,
    unit_manager_quantity: 0,
    unit_manager_units_number: 0,
    unit_manager_units_name: "",
    unit_manager_rate: 0,
    location_manager_quantity: 0,
    location_manager_units_number: 0,
    location_manager_units_name: "",
    location_manager_rate: 0,
    location_manager_assistant_quantity: 0,
    location_manager_assistant_units_number: 0,
    location_manager_assistant_units_name: "",
    location_manager_assistant_rate: 0,
    production_assistants_quantity: 0,
    production_assistants_units_number: 0,
    production_assistants_units_name: "",
    production_assistants_rate: 0,
    production_secretary_quantity: 0,
    production_secretary_units_number: 0,
    production_secretary_units_name: "",
    production_secretary_rate: 0,
    production_accountant_quantity: 0,
    production_accountant_units_number: 0,
    production_accountant_units_name: "",
    production_accountant_rate: 0,
    production_accountant_assistant_quantity: 0,
    production_accountant_assistant_units_number: 0,
    production_accountant_assistant_units_name: "",
    production_accountant_assistant_rate: 0,
    scriptsupervisor_continuity_quantity: 0,
    scriptsupervisor_continuity_units_number: 0,
    scriptsupervisor_continuity_units_name: "",
    scriptsupervisor_continuity_rate: 0,
    payroll_quantity: 0,
    payroll_units_number: 0,
    payroll_units_name: "",
    payroll_rate: 0,
    other_production_quantity: 0,
    other_production_units_number: 0,
    other_production_units_name: "",
    other_production_rate: 0,
    directors_assistant_quantity: 0,
    directors_assistant_units_number: 0,
    directors_assistant_units_name: "",
    directors_assistant_rate: 0,
    assistant_director_1st_quantity: 0,
    assistant_director_1st_units_number: 0,
    assistant_director_1st_units_name: "",
    assistant_director_1st_rate: 0,
    assistant_director_2nd_quantity: 0,
    assistant_director_2nd_units_number: 0,
    assistant_director_2nd_units_name: "",
    assistant_director_2nd_rate: 0,
    assistant_director_3rd_quantity: 0,
    assistant_director_3rd_units_number: 0,
    assistant_director_3rd_units_name: "",
    assistant_director_3rd_rate: 0,
    craft_services_quantity: 0,
    craft_services_units_number: 0,
    craft_services_units_name: "",
    craft_services_rate: 0,
  });

  // Production postData values
  const {
    production_manager_quantity,
    production_manager_units_number,
    production_manager_units_name,
    production_manager_rate,
    production_supervisor_quantity,
    production_supervisor_units_number,
    production_supervisor_units_name,
    production_supervisor_rate,
    production_coordinator_quantity,
    production_coordinator_units_number,
    production_coordinator_units_name,
    production_coordinator_rate,
    unit_manager_quantity,
    unit_manager_units_number,
    unit_manager_units_name,
    unit_manager_rate,
    location_manager_quantity,
    location_manager_units_number,
    location_manager_units_name,
    location_manager_rate,
    location_manager_assistant_quantity,
    location_manager_assistant_units_number,
    location_manager_assistant_units_name,
    location_manager_assistant_rate,
    production_assistants_quantity,
    production_assistants_units_number,
    production_assistants_units_name,
    production_assistants_rate,
    production_secretary_quantity,
    production_secretary_units_number,
    production_secretary_units_name,
    production_secretary_rate,
    production_accountant_quantity,
    production_accountant_units_number,
    production_accountant_units_name,
    production_accountant_rate,
    production_accountant_assistant_quantity,
    production_accountant_assistant_units_number,
    production_accountant_assistant_units_name,
    production_accountant_assistant_rate,
    scriptsupervisor_continuity_quantity,
    scriptsupervisor_continuity_units_number,
    scriptsupervisor_continuity_units_name,
    scriptsupervisor_continuity_rate,
    payroll_quantity,
    payroll_units_number,
    payroll_units_name,
    payroll_rate,
    other_production_quantity,
    other_production_units_number,
    other_production_units_name,
    other_production_rate,
    directors_assistant_quantity,
    directors_assistant_units_number,
    directors_assistant_units_name,
    directors_assistant_rate,
    assistant_director_1st_quantity,
    assistant_director_1st_units_number,
    assistant_director_1st_units_name,
    assistant_director_1st_rate,
    assistant_director_2nd_quantity,
    assistant_director_2nd_units_number,
    assistant_director_2nd_units_name,
    assistant_director_2nd_rate,
    assistant_director_3rd_quantity,
    assistant_director_3rd_units_number,
    assistant_director_3rd_units_name,
    assistant_director_3rd_rate,
    craft_services_quantity,
    craft_services_units_number,
    craft_services_units_name,
    craft_services_rate,
  } = postDataProduction;

  // production manager Total postData
  const [productionmanagerTotal, setProductionmanagerTotal] = useState(0);
  // production supervisor Total postData
  const [productionsupervisorTotal, setProductionsupervisorTotal] = useState(0);
  // production coordinator Total postData
  const [productioncoordinatorTotal, setProductioncoordinatorTotal] = useState(0);
  // unit manager Total postData
  const [unitmanagerTotal, setUnitmanagerTotal] = useState(0);
  // location manager Total postData
  const [locationmanagerTotal, setLocationmanagerTotal] = useState(0);
  // location manager assistant Total postData
  const [locationmanagerassistantTotal, setLocationmanagerassistantTotal] = useState(0);
  // production assistants Total postData
  const [productionassistantsTotal, setProductionassistantsTotal] = useState(0);
  // production secretary Total postData
  const [productionsecretaryTotal, setProductionsecretaryTotal] = useState(0);
  // production accountant Total postData
  const [productionaccountantTotal, setProductionaccountantTotal] = useState(0);
  // production accountant assistant Total postData
  const [productionaccountantassistantTotal, setProductionaccountantassistantTotal] = useState(0);
  // scriptsupervisor continuity Total postData
  const [scriptsupervisorcontinuityTotal, setScriptsupervisorcontinuityTotal] = useState(0);
  // payroll Total postData
  const [payrollTotal, setPayrollTotal] = useState(0);
  // other production Total postData
  const [otherproductionTotal, setOtherproductionTotal] = useState(0);
  // directors assistant Total postData
  const [directorsassistantTotal, setDirectorsassistantTotal] = useState(0);
  // assistant director 1st Total postData
  const [assistantdirector1stTotal, setAssistantdirector1stTotal] = useState(0);
  // assistant director 2nd Total postData
  const [assistantdirector2ndTotal, setAssistantdirector2ndTotal] = useState(0);
  // assistant director 3rd Total postData
  const [assistantdirector3rdTotal, setAssistantdirector3rdTotal] = useState(0);
  // craft services Total postData
  const [craftservicesTotal, setCraftservicesTotal] = useState(0);

  // Calculate Functions
  // function to calculate production manager on change
  useEffect(() => {
    const addproman = () => {
      setProductionmanagerTotal(parseFloat(production_manager_quantity || 0) * 
      parseFloat(production_manager_units_number || 0) * 
      parseFloat(production_manager_rate || 0))
    }
    const timer = setTimeout(() => {
      addproman();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [production_manager_quantity, production_manager_units_number, 
    production_manager_rate]);

  // function to calculate production supervisor on change
  useEffect(() => {
    const addprosup = () => {
      setProductionsupervisorTotal(parseFloat(production_supervisor_quantity || 0) * 
      parseFloat(production_supervisor_units_number || 0) * 
      parseFloat(production_supervisor_rate || 0))
    }
    const timer = setTimeout(() => {
      addprosup();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [production_supervisor_quantity, production_supervisor_units_number, 
    production_supervisor_rate]);

  // function to calculate production coordinator on change
  useEffect(() => {
    const addprocoor = () => {
      setProductioncoordinatorTotal(parseFloat(production_coordinator_quantity || 0) * 
      parseFloat(production_coordinator_units_number || 0) * 
      parseFloat(production_coordinator_rate || 0))
    }
    const timer = setTimeout(() => {
      addprocoor();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [production_coordinator_quantity, production_coordinator_units_number, 
    production_coordinator_rate]);

  // function to calculate unit manager on change
  useEffect(() => {
    const addunitman = () => {
      setUnitmanagerTotal(parseFloat(unit_manager_quantity || 0) * 
      parseFloat(unit_manager_units_number || 0) * 
      parseFloat(unit_manager_rate || 0))
    }
    const timer = setTimeout(() => {
      addunitman();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [unit_manager_quantity, unit_manager_units_number, 
    unit_manager_rate]);
  
  // function to calculate location manager on change
  useEffect(() => {
    const addlocman = () => {
      setLocationmanagerTotal(parseFloat(location_manager_quantity || 0) * 
      parseFloat(location_manager_units_number || 0) * 
      parseFloat(location_manager_rate || 0))
    }
    const timer = setTimeout(() => {
      addlocman();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [location_manager_quantity, location_manager_units_number, 
    location_manager_rate]);
  
  // function to calculate location manager assistant on change
  useEffect(() => {
    const addlocmanass = () => {
      setLocationmanagerassistantTotal(parseFloat(location_manager_assistant_quantity || 0) * 
      parseFloat(location_manager_assistant_units_number || 0) * 
      parseFloat(location_manager_assistant_rate || 0))
    }
    const timer = setTimeout(() => {
      addlocmanass();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [location_manager_assistant_quantity, location_manager_assistant_units_number, 
    location_manager_assistant_rate]);
  
  // function to calculate production assistants on change
  useEffect(() => {
    const addproass = () => {
      setProductionassistantsTotal(parseFloat(production_assistants_quantity || 0) * 
      parseFloat(production_assistants_units_number || 0) * 
      parseFloat(production_assistants_rate || 0))
    }
    const timer = setTimeout(() => {
      addproass();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [production_assistants_quantity, production_assistants_units_number, 
    production_assistants_rate]);

  // function to calculate production secretary on change
  useEffect(() => {
    const addprosec = () => {
      setProductionsecretaryTotal(parseFloat(production_secretary_quantity || 0) * 
      parseFloat(production_secretary_units_number || 0) * 
      parseFloat(production_secretary_rate || 0))
    }
    const timer = setTimeout(() => {
      addprosec();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [production_secretary_quantity, production_secretary_units_number, 
    production_secretary_rate]);

  // function to calculate production accountant on change
  useEffect(() => {
    const addproacc = () => {
      setProductionaccountantTotal(parseFloat(production_accountant_quantity || 0) * 
      parseFloat(production_accountant_units_number || 0) * 
      parseFloat(production_accountant_rate || 0))
    }
    const timer = setTimeout(() => {
      addproacc();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [production_accountant_quantity, production_accountant_units_number, 
    production_accountant_rate]);
  
  // function to calculate production accountant on change
  useEffect(() => {
    const addproacc = () => {
      setProductionaccountantTotal(parseFloat(production_accountant_quantity || 0) * 
      parseFloat(production_accountant_units_number || 0) * 
      parseFloat(production_accountant_rate || 0))
    }
    const timer = setTimeout(() => {
      addproacc();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [production_accountant_quantity, production_accountant_units_number, 
    production_accountant_rate]);

  // function to calculate scriptsupervisor continuity on change
  useEffect(() => {
    const addsupcon = () => {
      setScriptsupervisorcontinuityTotal(parseFloat(scriptsupervisor_continuity_quantity || 0) * 
      parseFloat(scriptsupervisor_continuity_units_number || 0) * 
      parseFloat(scriptsupervisor_continuity_rate || 0))
    }
    const timer = setTimeout(() => {
      addsupcon();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [scriptsupervisor_continuity_quantity, scriptsupervisor_continuity_units_number, 
    scriptsupervisor_continuity_rate]);
  
  // function to calculate unit manager on change
  useEffect(() => {
    const addpayrol = () => {
      setPayrollTotal(parseFloat(payroll_quantity || 0) * 
      parseFloat(payroll_units_number || 0) * 
      parseFloat(payroll_rate || 0))
    }
    const timer = setTimeout(() => {
      addpayrol();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [payroll_quantity, payroll_units_number, 
    payroll_rate]);

  // function to calculate other production on change
  useEffect(() => {
    const addothpro = () => {
      setOtherproductionTotal(parseFloat(other_production_quantity || 0) * 
      parseFloat(other_production_units_number || 0) * 
      parseFloat(other_production_rate || 0))
    }
    const timer = setTimeout(() => {
      addothpro();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [other_production_quantity, other_production_units_number, 
    other_production_rate]);

  // function to calculate directors assistant on change
  useEffect(() => {
    const adddirass = () => {
      setDirectorsassistantTotal(parseFloat(directors_assistant_quantity || 0) * 
      parseFloat(directors_assistant_units_number || 0) * 
      parseFloat(directors_assistant_rate || 0))
    }
    const timer = setTimeout(() => {
      adddirass();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [directors_assistant_quantity, directors_assistant_units_number, 
    directors_assistant_rate]);

  // function to calculate 1st assistant director on change
  useEffect(() => {
    const addasdir1 = () => {
      setAssistantdirector1stTotal(parseFloat(assistant_director_1st_quantity || 0) * 
      parseFloat(assistant_director_1st_units_number || 0) * 
      parseFloat(assistant_director_1st_rate || 0))
    }
    const timer = setTimeout(() => {
      addasdir1();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [assistant_director_1st_quantity, assistant_director_1st_units_number, 
    assistant_director_1st_rate]);

  // function to calculate 2nd assistant director on change
  useEffect(() => {
    const addasdir2 = () => {
      setAssistantdirector2ndTotal(parseFloat(assistant_director_2nd_quantity || 0) * 
      parseFloat(assistant_director_2nd_units_number || 0) * 
      parseFloat(assistant_director_2nd_rate || 0))
    }
    const timer = setTimeout(() => {
      addasdir2();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [assistant_director_2nd_quantity, assistant_director_2nd_units_number, 
    assistant_director_2nd_rate]);

  // function to calculate 3rd assistant director on change
  useEffect(() => {
    const addasdir3 = () => {
      setAssistantdirector3rdTotal(parseFloat(assistant_director_3rd_quantity || 0) * 
      parseFloat(assistant_director_3rd_units_number || 0) * 
      parseFloat(assistant_director_3rd_rate || 0))
    }
    const timer = setTimeout(() => {
      addasdir3();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [assistant_director_3rd_quantity, assistant_director_3rd_units_number, 
    assistant_director_3rd_rate]);

  // function to calculate craft services on change
  useEffect(() => {
    const addcraser = () => {
      setCraftservicesTotal(parseFloat(craft_services_quantity || 0) * 
      parseFloat(craft_services_units_number || 0) * 
      parseFloat(craft_services_rate || 0))
    }
    const timer = setTimeout(() => {
      addcraser();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [craft_services_quantity, craft_services_units_number, 
    craft_services_rate]);

  // Production Total postData 
  const [productionTotal, setProductionTotal] = useState(0);

  // Production handleChange 
  const handleChangePro = (event) => {
    setPostDataProduction({
      ...postDataProduction,
      [event.target.name]: parseFloat(event.target.value || 0 ),
    });
  }; 

  // Production handleChange Text 
  const handleChangeProText = (event) => {
    setPostDataProduction({
      ...postDataProduction,
      [event.target.name]: event.target.value,
    });
  }; 

  // function to add all production on change
  useEffect(() => {
    const addPro = () => {
      setProductionTotal(
      parseFloat(productionmanagerTotal || 0) +
      parseFloat(productionsupervisorTotal || 0) +
      parseFloat(productioncoordinatorTotal || 0) +
      parseFloat(unitmanagerTotal || 0) +
      parseFloat(locationmanagerTotal || 0) +
      parseFloat(locationmanagerassistantTotal || 0) +
      parseFloat(productionassistantsTotal || 0) +
      parseFloat(productionsecretaryTotal || 0) +
      parseFloat(productionaccountantTotal || 0) +
      parseFloat(productionaccountantassistantTotal || 0) +
      parseFloat(scriptsupervisorcontinuityTotal || 0) +
      parseFloat(payrollTotal || 0) +
      parseFloat(otherproductionTotal || 0) +
      parseFloat(directorsassistantTotal || 0) +
      parseFloat(assistantdirector1stTotal || 0) +
      parseFloat(assistantdirector2ndTotal || 0) +
      parseFloat(assistantdirector3rdTotal || 0) +
      parseFloat(craftservicesTotal || 0)
      )
    }
    const timer = setTimeout(() => {
      addPro();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [productionmanagerTotal, productionsupervisorTotal, productioncoordinatorTotal,
    unitmanagerTotal, locationmanagerTotal, locationmanagerassistantTotal,
    productionassistantsTotal, productionsecretaryTotal, productionaccountantTotal,
    productionaccountantassistantTotal, scriptsupervisorcontinuityTotal,
    payrollTotal, otherproductionTotal, directorsassistantTotal,
    assistantdirector1stTotal, assistantdirector2ndTotal,
    assistantdirector3rdTotal, craftservicesTotal,
    ]);

  // production input boxes
  const production = (
    <div className="mt-5">
    <Row >
    <Col md={1} >
    <p className="mb-2">7000</p>
    </Col>
    <Col md={6} >
    <p className={ `${styles.BoldBlack} mb-2`}>PRODUCTION STAFF</p>
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
    {/* Production Manager */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>7010</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Production Manager</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_manager_quantity" 
        className={`${styles.Width100} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_manager_quantity"
        value={production_manager_quantity}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_manager_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_manager_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_manager_units_number"
        value={production_manager_units_number}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_manager_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_manager_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_manager_units_name"
        value={production_manager_units_name}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.production_manager_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_manager_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_manager_rate"
        value={production_manager_rate}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_manager_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="productionmanagerTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="productionmanagerTotal"
        value={productionmanagerTotal}
        readOnly
            />
    </Form.Group>
    {errors?.productionmanagerTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Production Supervisor */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>7020</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Production Supervisor</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_supervisor_quantity" 
        className={`${styles.Width100} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_supervisor_quantity"
        value={production_supervisor_quantity}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_supervisor_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_supervisor_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_supervisor_units_number"
        value={production_supervisor_units_number}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_supervisor_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_supervisor_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_supervisor_units_name"
        value={production_supervisor_units_name}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.production_supervisor_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_supervisor_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_supervisor_rate"
        value={production_supervisor_rate}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_supervisor_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="productionsupervisorTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="productionsupervisorTotal"
        value={productionsupervisorTotal}
        readOnly
            />
    </Form.Group>
    {errors?.productionsupervisorTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Production Coordinator */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>7030</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Production Coordinator</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_coordinator_quantity" 
        className={`${styles.Width100} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_coordinator_quantity"
        value={production_coordinator_quantity}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_coordinator_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_coordinator_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_coordinator_units_number"
        value={production_coordinator_units_number}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_coordinator_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_coordinator_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_coordinator_units_name"
        value={production_coordinator_units_name}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.production_coordinator_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_coordinator_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_coordinator_rate"
        value={production_coordinator_rate}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_coordinator_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="productioncoordinatorTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="productioncoordinatorTotal"
        value={productioncoordinatorTotal}
        readOnly
            />
    </Form.Group>
    {errors?.productioncoordinatorTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Unit Manager */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>7040</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Unit Manager</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="unit_manager_quantity" 
        className={`${styles.Width100} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="unit_manager_quantity"
        value={unit_manager_quantity}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.unit_manager_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="unit_manager_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="unit_manager_units_number"
        value={unit_manager_units_number}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.unit_manager_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="unit_manager_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="unit_manager_units_name"
        value={unit_manager_units_name}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.unit_manager_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="unit_manager_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="unit_manager_rate"
        value={unit_manager_rate}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.unit_manager_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="unitmanagerTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="unitmanagerTotal"
        value={unitmanagerTotal}
        readOnly
            />
    </Form.Group>
    {errors?.unitmanagerTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Location Manager */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>7050</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Location Manager</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="location_manager_quantity" 
        className={`${styles.Width100} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="location_manager_quantity"
        value={location_manager_quantity}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.location_manager_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="location_manager_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="location_manager_units_number"
        value={location_manager_units_number}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.location_manager_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="location_manager_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="location_manager_units_name"
        value={location_manager_units_name}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.location_manager_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="location_manager_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="location_manager_rate"
        value={location_manager_rate}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.location_manager_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="locationmanagerTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="locationmanagerTotal"
        value={locationmanagerTotal}
        readOnly
            />
    </Form.Group>
    {errors?.locationmanagerTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Location Manager Assistant */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>7060</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Location Manager Assistant</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="location_manager_assistant_quantity" 
        className={`${styles.Width100} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="location_manager_assistant_quantity"
        value={location_manager_assistant_quantity}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.location_manager_assistant_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="location_manager_assistant_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="location_manager_assistant_units_number"
        value={location_manager_assistant_units_number}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.location_manager_assistant_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="location_manager_assistant_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="location_manager_assistant_units_name"
        value={location_manager_assistant_units_name}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.location_manager_assistant_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="location_manager_assistant_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="location_manager_assistant_rate"
        value={location_manager_assistant_rate}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.location_manager_assistant_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="locationmanagerassistantTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="locationmanagerassistantTotal"
        value={locationmanagerassistantTotal}
        readOnly
            />
    </Form.Group>
    {errors?.locationmanagerassistantTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Production Assistants */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>7070</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Production Assistants</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_assistants_quantity" 
        className={`${styles.Width100} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_assistants_quantity"
        value={production_assistants_quantity}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_assistants_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_assistants_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_assistants_units_number"
        value={production_assistants_units_number}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_assistants_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_assistants_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_assistants_units_name"
        value={production_assistants_units_name}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.production_assistants_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_assistants_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_assistants_rate"
        value={production_assistants_rate}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_assistants_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="productionassistantsTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="productionassistantsTotal"
        value={productionassistantsTotal}
        readOnly
            />
    </Form.Group>
    {errors?.productionassistantsTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Production Secretary */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>7080</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Production Secretary</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_secretary_quantity" 
        className={`${styles.Width100} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_secretary_quantity"
        value={production_secretary_quantity}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_secretary_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_secretary_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_secretary_units_number"
        value={production_secretary_units_number}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_secretary_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_secretary_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_secretary_units_name"
        value={production_secretary_units_name}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.production_secretary_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_secretary_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_secretary_rate"
        value={production_secretary_rate}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_secretary_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="productionsecretaryTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="productionsecretaryTotal"
        value={productionsecretaryTotal}
        readOnly
            />
    </Form.Group>
    {errors?.productionsecretaryTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
  )

  // ..............
  // Buttons
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("project", id );
    // prepared by
    formData.append("prelimfin", prelimfin);
    formData.append("preparedby", preparedby);
    formData.append("approvedby", approvedby);
    formData.append("approvedbyco", approvedbyco);
    // details
    formData.append("title", title);
    formData.append("series", series);
    formData.append("prodco", prodco);
    formData.append("writer", writer);
    formData.append("format", format);
    formData.append("location", location);
    formData.append("dated", dated);
    formData.append("prelimfin", prelimfin);
    formData.append("preparedby", preparedby);
    formData.append("approvedby", approvedby);
    formData.append("approvedbyco", approvedbyco);
    // length
    formData.append("research", research);
    formData.append("prep", prep);
    formData.append("shoot", shoot);
    formData.append("wrap", wrap);
    formData.append("post", post);
    formData.append("length_total", postDataLengthTotal);
    // ABOVE THE LINE
    // rights 
    formData.append("story_rights", story_rights);
    formData.append("miscellaneous", miscellaneous);
    formData.append("rights_total ", postDataRightsTotal);
    // development
    formData.append("research_development", research_development);
    formData.append("prelim_budget", prelim_budget);
    formData.append("consultant_expenses", consultant_expenses);
    formData.append("office_expenses", office_expenses);
    formData.append("staff", staff);
    formData.append("travel_expenses_development", travel_expenses_development);
    formData.append("living_expenses_development", living_expenses_development);
    formData.append("other_development", other_development);
    formData.append("development_total ", developmentTotal);
    // scenario
    formData.append("writers_quantity", writers_quantity);
    formData.append("writers_units_number", writers_units_number);
    formData.append("writers_units_name", writers_units_name);
    formData.append("writers_rate", writers_rate);
    formData.append("writers_total", writersTotal);
    formData.append("consultants_quantity", consultants_quantity);
    formData.append("consultants_units_number", consultants_units_number);
    formData.append("consultants_units_name", consultants_units_name);
    formData.append("consultants_rate", consultants_rate);
    formData.append("consultants_total", consultantsTotal);
    formData.append("editors_scenario_quantity", editors_quantity);
    formData.append("editors_scenario_units_number ", editors_units_number);
    formData.append("editors_scenario_units_name", editors_units_name);
    formData.append("editors_scenario_rate", editors_rate);
    formData.append("editors_scenario_total", editorsTotal);
    formData.append("admin_scenario_quantity", admin_scenario_quantity);
    formData.append("admin_scenario_units_number ", admin_scenario_units_number);
    formData.append("admin_scenario_units_name", admin_scenario_units_name);
    formData.append("admin_scenario_rate", admin_scenario_rate);
    formData.append("admin_scenario_total", adminScenarioTotal);
    formData.append("office_expenses_scenario ", office_expenses_scenario);
    formData.append("travel_expenses_scenario", travel_expenses_scenario);
    formData.append("living_expenses_scenario", living_expenses_scenario);
    formData.append("other_scenario", other_scenario);
    formData.append("scenario_total", scenarioTotal);
    // producers-directors
    formData.append("executive_producers_quantity", executive_producers_quantity);
    formData.append("producers_quantity", producers_quantity);
    formData.append("line_producers_quantity", line_producers_quantity);
    formData.append("co_producers_quantity", co_producers_quantity);
    formData.append("associate_producers_quantity", associate_producers_quantity);
    formData.append("directors_quantity", directors_quantity);
    formData.append("unit2_directors_quantity", unit2_directors_quantity);
    formData.append("executive_producers_rate", executive_producers_rate);
    formData.append("producers_rate", producers_rate);
    formData.append("line_producers_rate", line_producers_rate);
    formData.append("co_producers_rate", co_producers_rate);
    formData.append("associate_producers_rate", associate_producers_rate);
    formData.append("directors_rate", directors_rate);
    formData.append("unit2_directors_rate", unit2_directors_rate);
    formData.append("executive_producers_total", execProducersTotal);
    formData.append("producers_total", producersTotal);
    formData.append("line_producers_total", lineProducersTotal);
    formData.append("co_producers_total", coProducersTotal);
    formData.append("associate_producers_total", assocProducersTotal);
    formData.append("directors_total", directorsTotal);
    formData.append("unit2_directors_total", unit2DirectorsTotal);
    formData.append("travel_expenses_producers_dirs", travel_expenses_producers_dirs);
    formData.append("living_expenses_producers_dirs", living_expenses_producers_dirs);
    formData.append("other_producers_dirs", other_producers_dirs);
    formData.append("fringes_taxes_producers_dirs", fringes_taxes_producers_dirs);
    formData.append("producers_dirs_total", producersDirsTotal);
    // Stars Music
    formData.append("stars", stars);
    formData.append("stars_rights_payments", stars_rights_payments);
    formData.append("travel_expenses_stars", travel_expenses_stars);
    formData.append("living_expenses_stars", living_expenses_stars);
    formData.append("other_stars", other_stars);
    formData.append("fringes_taxes_stars", fringes_taxes_stars);
    formData.append("music", music);
    formData.append("music_supervisor", music_supervisor);
    formData.append("travel_expenses_music", travel_expenses_music);
    formData.append("living_expenses_music", living_expenses_music);
    formData.append("music_rights_addl_songs", music_rights_addl_songs);
    formData.append("other_music", other_music);
    formData.append("fringes_taxes_music", fringes_taxes_music);
    formData.append("stars_music_total", starsMusicTotal);
    formData.append("above_the_line_total", aboveTheLineTotal);
    // Cast
    formData.append("principals_quantity", principals_quantity);
    formData.append("principals_units_number", principals_units_number);
    formData.append("principals_units_name", principals_units_name);
    formData.append("principals_rate", principals_rate);
    formData.append("actors_quantity", actors_quantity);
    formData.append("actors_units_number", actors_units_number);
    formData.append("actors_units_name", actors_units_name);
    formData.append("actors_rate", actors_rate);
    formData.append("stuntcoordinators_quantity", stuntcoordinators_quantity);
    formData.append("stuntcoordinators_units_number", stuntcoordinators_units_number);
    formData.append("stuntcoordinators_units_name", stuntcoordinators_units_name);
    formData.append("stuntcoordinators_rate", stuntcoordinators_rate);
    formData.append("stuntperformers_quantity", stuntperformers_quantity);
    formData.append("stuntperformers_units_number", stuntperformers_units_number);
    formData.append("stuntperformers_units_name", stuntperformers_units_name);
    formData.append("stuntperformers_rate", stuntperformers_rate);
    formData.append("otherperformers_quantity", otherperformers_quantity);
    formData.append("otherperformers_units_number", otherperformers_units_number);
    formData.append("otherperformers_units_name", otherperformers_units_name);
    formData.append("otherperformers_rate", otherperformers_rate);
    formData.append("extras_quantity", extras_quantity);
    formData.append("extras_units_number", extras_units_number);
    formData.append("extras_units_name", extras_units_name);
    formData.append("extras_rate", extras_rate);
    formData.append("principals_total", principalsTotal);
    formData.append("actors_total", actorsTotal);
    formData.append("stuntcoordinators_total", stuntcoordinatorsTotal);
    formData.append("stuntperformers_total", stuntperformersTotal);
    formData.append("otherperformers_total", otherperformersTotal);
    formData.append("extras_total", extrasTotal);
    formData.append("casting_director", casting_director);
    formData.append("extras_casting", extras_casting);
    formData.append("other_cast", other_cast);
    formData.append("fringes_taxes_cast", fringes_taxes_cast);
    formData.append("rights_payments_cast", rights_payments_cast);
    formData.append("cast_total", castTotal);
    // production staff
    formData.append("production_manager_quantity", production_manager_quantity);
    formData.append("production_manager_units_number", production_manager_units_number);
    formData.append("production_manager_units_name", production_manager_units_name);
    formData.append("production_manager_rate", production_manager_rate);
    formData.append("production_supervisor_quantity", production_supervisor_quantity);
    formData.append("production_supervisor_units_number", production_supervisor_units_number);
    formData.append("production_supervisor_units_name", production_supervisor_units_name);
    formData.append("production_supervisor_rate", production_supervisor_rate);
    formData.append("production_coordinator_quantity", production_coordinator_quantity);
    formData.append("production_coordinator_units_number", production_coordinator_units_number);
    formData.append("production_coordinator_units_name", production_coordinator_units_name);
    formData.append("production_coordinator_rate", production_coordinator_rate);
    formData.append("unit_manager_quantity", unit_manager_quantity);
    formData.append("unit_manager_units_number", unit_manager_units_number);
    formData.append("unit_manager_units_name", unit_manager_units_name);
    formData.append("unit_manager_rate", unit_manager_rate);
    formData.append("location_manager_quantity", location_manager_quantity);
    formData.append("location_manager_units_number", location_manager_units_number);
    formData.append("location_manager_units_name", location_manager_units_name);
    formData.append("location_manager_rate", location_manager_rate);
    formData.append("location_manager_assistant_quantity", location_manager_assistant_quantity);
    formData.append("location_manager_assistant_units_number", location_manager_assistant_units_number);
    formData.append("location_manager_assistant_units_name", location_manager_assistant_units_name);
    formData.append("location_manager_assistant_rate", location_manager_assistant_rate);
    formData.append("production_assistants_quantity", production_assistants_quantity);
    formData.append("production_assistants_units_number", production_assistants_units_number);
    formData.append("production_assistants_units_name", production_assistants_units_name);
    formData.append("production_assistants_rate", production_assistants_rate);
    formData.append("production_secretary_quantity", production_secretary_quantity);
    formData.append("production_secretary_units_number", production_secretary_units_number);
    formData.append("production_secretary_units_name", production_secretary_units_name);
    formData.append("production_secretary_rate", production_secretary_rate);
    formData.append("production_accountant_quantity", production_accountant_quantity);
    formData.append("production_accountant_units_number", production_accountant_units_number);
    formData.append("production_accountant_units_name", production_accountant_units_name);
    formData.append("production_accountant_rate", production_accountant_rate);
    formData.append("production_accountant_assistant_quantity", production_accountant_assistant_quantity);
    formData.append("production_accountant_assistant_units_number", production_accountant_assistant_units_number);
    formData.append("production_accountant_assistant_units_name", production_accountant_assistant_units_name);
    formData.append("production_accountant_assistant_rate", production_accountant_assistant_rate);
    formData.append("scriptsupervisor_continuity_quantity", scriptsupervisor_continuity_quantity);
    formData.append("scriptsupervisor_continuity_units_number", scriptsupervisor_continuity_units_number);
    formData.append("scriptsupervisor_continuity_units_name", scriptsupervisor_continuity_units_name);
    formData.append("scriptsupervisor_continuity_rate", scriptsupervisor_continuity_rate);
    formData.append("payroll_quantity", payroll_quantity);
    formData.append("payroll_units_number", payroll_units_number);
    formData.append("payroll_units_name", payroll_units_name);
    formData.append("payroll_rate", payroll_rate);
    formData.append("other_production_quantity", other_production_quantity);
    formData.append("other_production_units_number", other_production_units_number);
    formData.append("other_production_units_name", other_production_units_name);
    formData.append("other_production_rate", other_production_rate);
    formData.append("directors_assistant_quantity", directors_assistant_quantity);
    formData.append("directors_assistant_units_number", directors_assistant_units_number);
    formData.append("directors_assistant_units_name", directors_assistant_units_name);
    formData.append("directors_assistant_rate", directors_assistant_rate);
    formData.append("assistant_director_1st_quantity", assistant_director_1st_quantity);
    formData.append("assistant_director_1st_units_number", assistant_director_1st_units_number);
    formData.append("assistant_director_1st_units_name", assistant_director_1st_units_name);
    formData.append("assistant_director_1st_rate", assistant_director_1st_rate);
    formData.append("assistant_director_2nd_quantity", assistant_director_2nd_quantity);
    formData.append("assistant_director_2nd_units_number", assistant_director_2nd_units_number);
    formData.append("assistant_director_2nd_units_name", assistant_director_2nd_units_name);
    formData.append("assistant_director_2nd_rate", assistant_director_2nd_rate);
    formData.append("assistant_director_3rd_quantity", assistant_director_3rd_quantity);
    formData.append("assistant_director_3rd_units_number", assistant_director_3rd_units_number);
    formData.append("assistant_director_3rd_units_name", assistant_director_3rd_units_name);
    formData.append("assistant_director_3rd_rate", assistant_director_3rd_rate);
    formData.append("craft_services_quantity", craft_services_quantity);
    formData.append("craft_services_units_number", craft_services_units_number);
    formData.append("craft_services_units_name", craft_services_units_name);
    formData.append("craft_services_rate", craft_services_rate);
    formData.append("productionmanager_total", productionmanagerTotal);
    formData.append("productionsupervisor_total", productionsupervisorTotal);
    formData.append("productioncoordinator_total", productioncoordinatorTotal);
    formData.append("unitmanager_total", unitmanagerTotal);
    formData.append("locationmanager_total", locationmanagerTotal);
    formData.append("locationmanagerassistant_total", locationmanagerassistantTotal);
    formData.append("productionassistants_total", productionassistantsTotal);
    formData.append("productionsecretary_total", productionsecretaryTotal);
    formData.append("productionaccountant_total", productionaccountantTotal);
    formData.append("productionaccountantassistant_total", productionaccountantassistantTotal);
    formData.append("scriptsupervisorcontinuity_total", scriptsupervisorcontinuityTotal);
    formData.append("payroll_total", payrollTotal);
    formData.append("otherproduction_total", otherproductionTotal);
    formData.append("directorsassistant_total", directorsassistantTotal);
    formData.append("assistantdirector1st_total", assistantdirector1stTotal);
    formData.append("assistantdirector2nd_total", assistantdirector2ndTotal);
    formData.append("assistantdirector3rd_total", assistantdirector3rdTotal);
    formData.append("craftservices_total", craftservicesTotal);
    formData.append("production_total", productionTotal);

    try {
      const { data } = await axiosReq.post("/budgets/", formData);
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
    <div className="mt-3">
    <Row >
    <Col className={`${styles.Back}`}>
    <Row className={ `${styles.OverviewBlue} mx-1 mb-1 py-3 text-center`}>
    <Col md={12}>
    <h5 className={ `${styles.BoldBlack}`}>CREATE BUDGET - Project ID: {id}</h5>
    </Col>
    </Row>
    <Row className="mt-1 ml-0" >
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
    {prepare}
    {detailslength}
    <Row className={ `${styles.OverviewBlue} mx-1 my-5 py-1 text-center`}>
    <Col md={12}>
    <h5 className={ `${styles.BoldBlack}`}>ABOVE THE LINE</h5>
    </Col>
    </Row>
    {rights}
    {development}
    {scenario}
    {producersDirs}
    {starsmusic}
    {abovetheline}
    <Row className={ `${styles.OverviewBlue} mx-1 my-5 py-1 text-center`}>
    <Col md={12}>
    <h5 className={ `${styles.BoldBlack}`}>BELOW THE LINE - "B" PRODUCTION</h5>
    </Col>
    </Row>
    {cast}
    {/* buttons */}
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

export default BudgetCreate