/* Page to fetch and display the data and chats for each Profile */
import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import btnStyles from "../../styles/Button.module.css";
import Asset from "../../components/Asset";
import { useHistory, useParams } from "react-router-dom";
import styles from "../../styles/ProfilePage.module.css";
import appStyles from "../../App.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useProfileData, useSetProfileData } from "../../contexts/ProfileDataContext";
import { axiosReq } from "../../api/axiosDefaults";
import { Button, Image } from "react-bootstrap";
import NoResults from "../../assets/no-results.png";
import InfiniteScroll from "react-infinite-scroll-component";
import ChatTop from "../chat/ChatTop";
import { fetchMoreData } from "../../utils/utils";
import { ProfileEditDropdown } from "../../components/UniDropDown";
import TopBox from "../../components/TopBox";

function ProfilePage() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [profileChat, setProfileChat] = useState({ results: [] });
  const currentUser = useCurrentUser();
  const { id } = useParams();
  const history = useHistory();

  const { setProfileData, handleFollow, handleUnfollow } = useSetProfileData();
  const { profilePage } = useProfileData();

  const [profile] = profilePage.results;
  const is_owner = currentUser?.username === profile?.owner;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [{ data: profilePage }, { data: profilePosts }] =
          await Promise.all([
            axiosReq.get(`/profiles/${id}/`),
            axiosReq.get(`/chat/?owner__profile=${id}`),
          ]);
        setProfileData((prevState) => ({
          ...prevState,
          profilePage: { results: [profilePage] },
        }));
        setProfileChat(profilePosts);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id, setProfileData]);

  const mainProfile = (
    <>
      <Row className={`px-3 pt-2 text-center 
      d-flex align-items-center ${styles.Back2}`}>
        <Col lg={3} className="text-lg-left">
        <Image
            className={styles.ProfileImage}
            roundedCircle
            src={profile?.image}
            height={100}
            width={100}
          />
          <div className="d-block d-lg-none">
          {profile?.is_owner && <ProfileEditDropdown
           id={profile?.id} />}
          </div>
        </Col>
        <Col lg={6}>
        <h4 className="m-0">{profile?.name}</h4>
          <h3 className="m-0">{profile?.company}</h3>
          <Row className={`${styles.White} justify-content-center`}>
            <Col xs={3} className="my-2">
              <div>{profile?.posts_count ? (
                <p >{profile?.posts_count} </p>
              ) : (
                "0"
              ) }</div>
              <div>posts</div>
            </Col>
            <Col xs={3} className="my-2">
              <div>{profile?.followers_count}</div>
              <div>followers</div>
            </Col>
            <Col xs={3} className="my-2">
              <div>{profile?.following_count}</div>
              <div>following</div>
            </Col>
          </Row>
        </Col>
        <Col lg={3} className="text-lg-right">
        {profile?.is_owner && <ProfileEditDropdown
        className="d-none d-lg-block"
         id={profile?.id} />}
          {currentUser &&
            !is_owner &&
            (profile?.following_id ? (
              <Button
                className={`${btnStyles.Button} ${btnStyles.BlackOutline}`}
                onClick={() => handleUnfollow(profile)}
              >
                unfollow
              </Button>
            ) : (
              <Button
                className={`${btnStyles.Button} ${btnStyles.Black}`}
                onClick={() => handleFollow(profile)}
              >
                follow
              </Button>
            ))}
        </Col>
        {profile?.content && <Col className="p-3">{profile.content}</Col>}
      </Row>
    </>
  );

  const mainProfilePosts = (
    <>
      {profile?.name ? (
        <h4 className={`text-center pt-5 pb-1 ${styles.Name }`} >
          {profile?.name}'s Chats</h4>
      ) : ("") }
      <hr className={`${styles.Break7} mt-0 mb-3`}/>
      {profileChat.results.length ? (
        <InfiniteScroll
          children={profileChat.results.map((chat) => (
            <ChatTop key={chat.id} {...chat} setChat={setProfileChat} />
          ))}
          dataLength={profileChat.results.length}
          loader={<Asset spinner />}
          hasMore={!!profileChat.next}
          next={() => fetchMoreData(profileChat, setProfileChat)}
        />
      ) : (
        <Asset
          src={NoResults}
          message={`No results found`}
        />
      )}
    </>
  );

  return (
    <div className="px-3">
    <TopBox title={profile?.name} />
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
      <Col className="py-2 p-0 p-lg-2" >
        <Container className={appStyles.Content}>
          {hasLoaded ? (
            <>
              {mainProfile}
              {mainProfilePosts}
            </>
          ) : (
            <Asset spinner />
          )}
        </Container>
      </Col>
    </Row>
    </div>
  );
}

export default ProfilePage;