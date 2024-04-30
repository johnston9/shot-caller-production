/* Page to fetch all the Profiles data and render the cover info 
 * Contains the Profile component to which it passes the data 
   for each Profile cover */
import React, { useEffect, useState } from 'react';
import Asset from "../../components/Asset";
import Profile from "./Profile";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Form } from 'react-bootstrap';
import styles from "../../styles/Profiles.module.css";
import { useProfileData, useSetQueryContext, useSetEditProfileContext } from '../../contexts/ProfileDataContext';
import btnStyles from "../../styles/Button.module.css";
import { useHistory } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import TopBox from "../../components/TopBox";

const ProfilesPage = () => {
  const history = useHistory();
  const {profilesAll} = useProfileData();
  const setQuery = useSetQueryContext();

  const [name, setName] = useState("");

    const handleChange = (event) => {
        setName(event.target.value)
    }

    useEffect(() => {
        const querySet = () => {
            setQuery(name);
        }
        const timer = setTimeout(() => {
            querySet();
        }, 1000);
    
        return () => {
          clearTimeout(timer);
        };
        // eslint-disable-next-line
      }, [name])

  return (
    <div className="px-3">
      <TopBox title="Profiles"/>
      <div className="px-3">
      <Row>
      <Col xs={3}>
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue} my-2`}
        onClick={() => history.goBack()}
      >
        Back
      </Button>
      </Col>
      </Row>
      <Row>
      <Col xs={{span: 8, offset: 2}} className="text-center" >
      <p>Click on a Profile's "follow" button to add them to 
                your feed.
           </p>
      </Col>
      </Row>
      {/* search form */}
      <Row>
          <Col className="text-center" xs={12} md={{ span: 6, offset: 3 }} >
          <Form
          className={`${styles.SearchBar} mt-3`}
          onSubmit={(event) => event.preventDefault()}
          >
          <Form.Control
              value={name}
              onChange={(event) => handleChange(event)}
              type="text"
              className="mr-sm-2"
              placeholder="Search by name or company"
          />
          </Form>
          </Col>
        </Row>
      <Row>
      {profilesAll.results.length ? (
        <>
          {profilesAll.results.map((profile) => (
            <Col xs={6} sm={4} md={3} lg={2} className="px-2 py-2 p-0 p-lg-2">
            <Profile key={profile.id} profile={profile} />
            </Col>
          ))}
        </>
      ) : (
        <Asset spinner />
      )}
      </Row>
      </div>
    </div>
  );
};

export default ProfilesPage;