import React, { useEffect, useState } from "react";
import { axiosReq } from "../../api/axiosDefaults";
import Asset from "../../components/Asset";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Profile from "./Profile";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useProfileData } from "../../contexts/ProfileDataContext";

const ProfilesPage = () => {
  const {profilesAll} = useProfileData();

  return (
    <div className={`mt-3 mx-3`}>
      <p>ProfilesPage</p>
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
      {/* <Row>
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
      </Row> */}
    </div>
  );
};

export default ProfilesPage;