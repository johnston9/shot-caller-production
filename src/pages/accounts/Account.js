/* Component in Accountpage to display the Profile and Account data
 * Contains the CreateProject and Projects components */
import React from "react";
import btnStyles from "../../styles/Button.module.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styles from "../../styles/Account.module.css";
import { Image } from "react-bootstrap";
import { ProfileEditDropdown } from "../../components/UniDropDown";
import Projects from "./Projects";
import { useHistory } from 'react-router-dom';

const Account = ({id, profile, account} ) => {
  const history = useHistory();

const topProfile = (
    <div className={`px-0 py-1 ${styles.Top}`}>
      <Row className=" x-2 mt-2 ">
        <Col md={3} >
        <Image
            className={`${styles.ProfileImage}`}
            height={40}
            width={40}
            roundedCircle
            src={profile?.image}
          />
        <span className={`${styles.TopName} pl-2`}>
          {profile?.name}</span>
        </Col>
        <Col md={6} className="text-center" >
          <h3 className={`${styles.TopCompany}`}>{profile?.company} 
          </h3>
        </Col>
        <Col md={3} >
        {profile?.is_owner && <ProfileEditDropdown id={profile?.id} />}
        </Col>
      </Row>
    </div>
  );

const topProfileMo = (
  <div className={`px-3 py-1 ${styles.Top}`}>
    <Row className="mt-2 ">
      <Col xs={10} className="text-center" >
      <Image
          className={styles.ProfileImage}
          height={40}
          width={40}
          roundedCircle
          src={profile?.image}
        />
      <span className={`${styles.TopName} pl-2`}>{profile?.name}</span>
      </Col>
      <Col xs={2}>
      {profile?.is_owner && <ProfileEditDropdown id={profile?.id} />}
      </Col>
      <Col xs={10} className="text-center" >
        <h3 className={`pl-5 ${styles.TopCompany}`}>{profile?.company} 
        </h3>
      </Col>
    </Row>
  </div>
);

const accountInfo = (
  <div className="px-3">
  <Row >
  <Col className="my-2">
      <p className="pb-0 float-right ml-3">
      Account Created: {account.results[0].created_at}
      </p>
      <p className="pb-0 float-right">
    Account Owner: {account.results[0].owner} 
    </p>
  </Col>
  </Row>
  </div>
)
return (
  <div className="px-3" >
    <div className="d-none d-md-block">{topProfile}</div>
    <div className="d-block d-md-none">{topProfileMo}</div> 
    {/* back */}
    <Row className="mt-2" >
    <Col >
    <Button
      className={`${btnStyles.Button} ${btnStyles.Blue} ml-2 mb-2`}
      onClick={() => history.goBack()}
    >
      Back
    </Button>
    </Col>
    </Row>
    <Row className="px-3">
      <Col className="text-center">
      <h3 className="mb-3" >PROJECTS</h3>
      </Col>
    </Row>
    <Row >
      <Col>
        <Projects id={id} />
      </Col>
    </Row>
    {accountInfo}
  </div>
  )
}

export default Account