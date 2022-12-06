import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import btnStyles from "../../styles/Button.module.css";
import Asset from "../../components/Asset";
import { useParams } from "react-router-dom";
import styles from "../../styles/ProfilePage.module.css";
import appStyles from "../../App.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useProfileData, useSetProfileData } from "../../contexts/ProfileDataContext";
import { axiosReq } from "../../api/axiosDefaults";
import { Button, Image } from "react-bootstrap";
import { ProfileEditDropdown } from "../../components/UniDropDown";

function AccountPage() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [account, setAccount] = useState({ results: [] });
  const currentUser = useCurrentUser();
  const { id } = useParams();

  const { setProfileData, handleFollow, handleUnfollow } = useSetProfileData();
  const { profilePage } = useProfileData();

  const [profile] = profilePage.results;
  const is_owner = currentUser?.username === profile?.owner;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [{ data: profilePage }, { data: accountInfo }] =
          await Promise.all([
            axiosReq.get(`/profiles/${id}/`),
            axiosReq.get(`/accounts/${id}`),
          ]);
        setProfileData((prevState) => ({
          ...prevState,
          profilePage: { results: [profilePage] },
        }));
        setAccount(accountInfo);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id, setProfileData]);

  const mainProfile = (
    <>
      {profile?.is_owner && <ProfileEditDropdown id={profile?.id} />}
      <Row className="px-3 text-center">
        <Col lg={3} className="text-lg-left">
        <Image
            className={styles.ProfileImage}
            roundedCircle
            src={profile?.image}
          />
        </Col>
        <Col lg={6}>
          <h3 className="m-0">{profile?.company}</h3>
          <h4 className="m-0">{profile?.name}</h4>
          <h5>{profile?.owner}</h5>
          <Row className="justify-content-center no-gutters">
            <Col xs={3} className="my-2">
              <div>{account?.created_at ? (
                <p>Account Created: {account?.created_at} </p>
              ) : (
                "0"
              ) }</div>
              <div>posts</div>
            </Col>
            <Col xs={3} className="my-2">
              <div>{account?.created_at}</div>
            </Col>
            <Col xs={3} className="my-2">
              <div>account?.created_at</div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );

  return (
    <Row>
      <Col className="py-2 p-0 p-lg-2" >
        <Container className={appStyles.Content}>
          {hasLoaded ? (
            <>
              {mainProfile}
            </>
          ) : (
            <Asset spinner />
          )}
        </Container>
      </Col>
    </Row>
  );
}

export default AccountPage