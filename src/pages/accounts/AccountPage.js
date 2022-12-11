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
import Account from "./Account";

function AccountPage() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [account, setAccount] = useState({ results: [] });
  const [name, setName] = useState({ results: [] });
  const currentUser = useCurrentUser();
  const { id } = useParams();

  const { setProfileData, handleFollow, handleUnfollow } = useSetProfileData();
  const { profilePage } = useProfileData();

  const [profile] = profilePage.results;
  const is_owner = currentUser?.username === profile?.owner;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [{ data: profilePage }, { data: accountInfo }] = await Promise.all([
            axiosReq.get(`/profiles/${id}/`),
            axiosReq.get(`/accounts/?owner__profile=${id}`),
          ]);
        setProfileData((prevState) => ({
          ...prevState,
          profilePage: { results: [profilePage] },
        }));
        setAccount(accountInfo);
        setName(accountInfo.results[0].name)
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id, setProfileData]);

  return (
    <Row>
      <Col className="py-2 p-0 p-lg-2" >
          {hasLoaded ? (
            <>
              <Account 
              account={account}
              profile={profile}
              id={id}
               />
            </>
          ) : (
            <Asset spinner />
          )}
      </Col>
    </Row>
  );
}

export default AccountPage