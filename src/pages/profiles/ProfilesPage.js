import React, { useEffect, useState } from "react";
import { axiosReq } from "../../api/axiosDefaults";
import Asset from "../../components/Asset";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Profile from "./Profile";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const ProfilesPage = () => {
  const [profileData, setProfileData] = useState({
    profileOne: { results: [] },
    profilesAll: { results: [] },
  });
  const { profilesAll } = profileData;
  const currentUser = useCurrentUser();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(
          "/profiles/?ordering=-followers_count"
        );
        setProfileData((prevState) => ({
          ...prevState,
          profilesAll: data,
        }));
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [currentUser]);

  return (
    <div className={`mt-3 mx-3`}>
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
  );
};

export default ProfilesPage;