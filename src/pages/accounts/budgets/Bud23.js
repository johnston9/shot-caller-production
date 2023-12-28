// Budget - swap other with fringes +
// B Costs - 2nd Unit 
// Post - post pro staff - editing - sound - visual effects ++
// D Other - Publicity
{/* DEVELOPMENT --------------------------------- ------- */}
<div className='mt-4'>
<Row>
<Col md={1}>
<p className={`${styles.Underline}`}>02.00</p>
</Col>
<Col md={10}>
<p className={ `${styles.BoldBlack}`}>PRE-PRODUCTION AND DEVELOPMENT</p>
</Col>
</Row>
{/* Titles */}
<Row className={ `${styles.Overview} mb-2 py-1`} >
<Col md={1} >
<p className="mb-0">ACCT</p>
</Col>
<Col md={5} >
<p className="mb-0">Description</p>
</Col>
<Col md={1} className="text-center">
<p className="mb-0">#</p>
</Col>
<Col className="text-center" md={1} >
<p># Unit</p>
</Col>
<Col md={1} >
<p className="text-center">Unit</p>
</Col>
<Col md={1} >
<p className="text-center">Price</p>
</Col>
<Col md={2} >
<p className="text-center">Total</p>
</Col>
</Row>
{/* research */}
<Row >
<Col md={1}>
<p className={`${styles.Underline}`}>02.10</p>
</Col>
<Col md={9}>
<p className={`${styles.Underline}`}>Research</p>
</Col>
<Col md={2} >
<div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
<p className={`${styles.Underline}`}>{research_development || 0} </p>
</div>
</Col>
</Row>
{/* hr */}
<Row>
<Col >
<hr className={`${styles.Break1} mt-0 mb-0`}/>
</Col>
</Row>
{/* hr */}
<Row>
<Col >
<hr className={`${styles.Break1} mt-0 mb-0`}/>
</Col>
</Row>
<Row className='mt-3 mb-1'>
<Col md={1}>
</Col>
<Col className={ `${styles.Overview} my-0 py-0`} md={6} >
<p className={ `${styles.BoldBlack} pb-0 mb-0`}>TOTAL PRE-PRODUCTION AND DEVELOPMENT</p>
</Col>
<Col md={3}></Col>
<Col md={2}>
<div className={`${styles.Box4} 
  py-2 d-flex align-items-center justify-content-center`}>
<p className={`${styles.Underline} mb-0`}>{development_total || 0 } </p>
</div>
</Col>
</Row>
{/* hr */}
<Row>
<Col >
<hr className={`${styles.Break1} mt-0 mb-0`}/>
</Col>
</Row>
</div>

{/* ABOVE THE LINE - TOTAL */}
<div className="mt-5 pl-3">
<Row >
<Col className={ `${styles.Overview} my-0 py-0`} md={10} >
<p className={ `${styles.BoldBlack} pb-0 mb-0`}>TOTAL ABOVE THE LINE</p>
</Col>
<Col md={2} >
<div className={`${styles.Box3} 
  d-flex align-items-center justify-content-center`}>
<p className={`${styles.BoldBlack}`}>{above_the_line_total || 0}</p>
</div>
</Col>
</Row>
</div>
