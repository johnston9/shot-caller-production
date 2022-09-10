import React from 'react';
import styles from "../../styles/Profiles.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { Link } from 'react-router-dom';
import Avatar from '../../components/Avatar';
import Button from "react-bootstrap/Button";
// import { useRedirect } from '../../hooks/Redirect';
import Card from "react-bootstrap/Card";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useSetProfileData } from '../../contexts/ProfileDataContext';
import { useRedirect } from '../../hooks/Redirect';

const Profile = (props) => {
  useRedirect("loggedOut");
  const { profile, imageSize="40" } = props;
  const { id, following_id, image, owner, name, company } = profile;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const { handleFollow, handleUnfollow } = useSetProfileData();

  return (
    <div>
      {/* mine */}
      <div className='mt-1 text-center'>
            <Card className={styles.Back}>
                <Card.Body className={`px-0 ${styles.CardHead}`} >
                <Link to={`/profiles/${id}`}>
                {/* Avatar */}
                <Row>
                <Col xs={12} >
                    <Avatar src={image} height={imageSize}/>
                </Col>
                </Row>
                <Row className='mt-2 text-center'>
                    <Col xs={12} >   
                    <div>
                    <h5 className={`${styles.WordBreakWhite}`}
                    style={{ textTransform: 'capitalize'}}> 
                    {name} {owner}
                    </h5>
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} >  
                    <p style={{ textTransform: 'capitalize'}} 
                    className={` ${styles.WordBreakWhite}`} >
                    {company} </p>
                    </Col>
                </Row>
                </Link>
                </Card.Body>
                <Card.Header className="my-0 py-1 px-0"> 
                <Row>
                    <Col xs={12}>
                    <div className="mt-1" >
                    {currentUser &&
                    !is_owner &&
                    (following_id ? (
                        <Button
                        className={` py-0 ${btnStyles.Button} ${btnStyles.White}`}
                        onClick={() => handleUnfollow(profile)}
                        >
                        unfollow
                        </Button>
                    ) : (
                        <Button
                        className={`py-0 ${btnStyles.Button} ${btnStyles.Black}`}
                        onClick={() => handleFollow(profile) }
                        >
                        follow
                        </Button>
                    ))}
                    </div>
                    </Col>
                </Row>
                </Card.Header>
            </Card>
        </div>
        {/* his */}
        <div
      className={`my-3 d-flex align-items-center`}
    >
      <div>
        <Link className="align-self-center" to={`/profiles/${id}`}>
          <Avatar src={image} height={imageSize} />
        </Link>
      </div>
      <div className={`mx-0 ${styles.WordBreak}`}>
        <strong>{owner}</strong>
      </div>
      <div className={`text-right`}>
        {
          currentUser &&
          !is_owner &&
          (following_id ? (
            <Button
              className={`${btnStyles.Button} ${btnStyles.BlackOutline}`}
              onClick={() => handleUnfollow(profile)}
            >
              unf
            </Button>
          ) : (
            <Button
              className={`${btnStyles.Button} ${btnStyles.Black}`}
              onClick={() => handleFollow(profile)}
            >
              fol
            </Button>
          ))}
      </div>
    </div>
    </div>
  )
}

export default Profile