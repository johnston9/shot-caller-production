import React from "react";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styles from "../../styles/ProfilePage.module.css";
import { Image } from "react-bootstrap";
import { ProfileEditDropdown } from "../../components/UniDropDown";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import CreateProject from "./CreateProject";
import Projects from "./Projects";

const Account = ({id, profile, account, projects, is_owner} ) => {
  const [showCreateProject, setShowCreateProject ] = useState(false);
  const {history} = useHistory();

const topProfile = (
    <div className={`px-3 ${styles.TopBack}`}>
      <Row className="mx-2 mt-4">
        <Col xs={3} className="text-lg-left">
        <Image
            className={styles.ProfileImage}
            height={40}
            width={40}
            roundedCircle
            src={profile?.image}
          />
        <span className={`${styles.TopName} pl-2`}>{profile?.owner}</span>
        </Col>
        <Col xs={8} className="text-center" >
          <h3 className="m-0">{profile?.company} 
          <span className={`pl-5 ${styles.TopName}`}>{profile?.name}</span>
          </h3>
        </Col>
        <Col xs={1} >
        {profile?.is_owner && <ProfileEditDropdown id={profile?.id} />}
        </Col>
      </Row>
    </div>
  );

const accountInfo = (
  <div className="px-3">
  <Row >
  <Col xs={6} className="my-2">
      <p className="pb-0">
      Account Created: {account.results[0].created_at}
      </p>
      <p>
    Account Owner: {account.results[0].owner} 
    </p>
  </Col>
  </Row>
  </div>
)
return (
  <div>
      {topProfile}
      {accountInfo}
  <Row className="px-3">
  <Col className="text-center">
  <h3 className="mb-3" >PROJECTS</h3>
  <Button
      className={`${btnStyles.Button} ${btnStyles.Blue} mb-2`}
      onClick={() => setShowCreateProject(showCreateProject => !showCreateProject)} >
      Create Project
  </Button>
  </Col>
  </Row>
  {showCreateProject ? (
            <CreateProject
              setShow={setShowCreateProject}
            />
          ) : (
            ""
          )}
  <Row >
  <Col>
  <Projects
  id={id} />
  </Col>
  </Row>
  <Row>
  <Col>
  </Col>
  </Row>
  <Row>
  <Col>
  </Col>
  </Row>
  </div>
  )
}

export default Account