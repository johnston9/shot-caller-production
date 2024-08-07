/* Component rendered on the ChatsPage to display the 
   cover info for each Chat
 * When clicked on it opens that Chat's ChatPage */
import React from 'react';
import Card from "react-bootstrap/Card";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import styles from "../../styles/Chat.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Link, useHistory } from 'react-router-dom';
import Avatar from "../../components/Avatar";
import { axiosRes } from '../../api/axiosDefaults';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { UniDropdown } from '../../components/UniDropDown';

const ChatTop = (props) => {
    const {
        id,
        owner,
        name,
        company,
        profile_id,
        profile_image,
        comments_count,
        likes_count,
        like_id,
        title,
        updated_at,
        setChat,
      } = props;

      const currentUser = useCurrentUser();
      const is_owner = currentUser?.username === owner;
      const history = useHistory();

      const handleEdit = () => {
        history.push(`/chat/edit/${id}`);
      };
    
      const handleDelete = async () => {
        try {
          await axiosRes.delete(`/chat/${id}/`);
          history.goBack();
        } catch (err) {
        } 
      };

      const handleLike = async () => {
        console.log("click")
        try {
          const { data } = await axiosRes.post("/likes/", { chatmessage: id });
          setChat((prevChat) => ({
            ...prevChat,
            results: prevChat.results.map((chat) => {
              return chat.id === id
                ? { ...chat, likes_count: chat.likes_count + 1, like_id: data.id }
                : chat;
            }),
          }));
        } catch (err) {
            console.log(err)
        }
      };

      const handleUnlike = async () => {
        try {
          await axiosRes.delete(`/likes/${like_id}/`);
          setChat((prevChat) => ({
            ...prevChat,
            results: prevChat.results.map((chat) => {
              return chat.id === id
                ? { ...chat, likes_count: chat.likes_count - 1, like_id: null }
                : chat;
            }),
          }));
        } catch (err) {
        }
      };

  return (
    <div >
        <Card >
            <Card.Body className={`${styles.ChatTop} py-1`} >
              <div className='d-block d-lg-none'>
                {/* Image */}
              <Row className="d-flex align-items-center">
                <Col xs={6} className='px-0' >
                <Link to={`/profiles/${profile_id}`}>
                <Avatar src={profile_image} height={30}  />
                </Link>
                </Col>
                <Col xs={6} 
                className="d-flex align-items-center justify-content-center" >
                {is_owner && (
                    <UniDropdown
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                />
                ) } 
                </Col>
              </Row>
              {/* name */}
              <Row className="d-flex align-items-center">
                    <Col className='text-center px-0' xs={12}>
                    <span style={{fontWeight: '600', textTransform: 'capitalize', color:'#fff'}} 
                    >{name}
                     </span>
                    </Col>
                    <Col className='text-center px-0' xs={12}>
                    <span style={{fontWeight: '600', textTransform: 'capitalize', color:'#fff'}} 
                    ><span style={{fontStyle:'italic'}}>{company} </span>
                     </span>
                    </Col>
              </Row>
              <Row className="d-flex align-items-center">
              <Col className='text-center px-0 pb-0'
                xs={6}><span style={{color:'#fff'}} >{updated_at}</span></Col>
              <Col className='text-center px-0' xs={6} >
              <div className={` ${styles.PostBar}`} >
              {/* like */}
              {is_owner ? (
              <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't like your own post!</Tooltip>}
              >
              <i className="far fa-heart" />
              </OverlayTrigger>
          ) : like_id ? (
              <span onClick={handleUnlike}>
              <i className={`fas fa-heart ${styles.Heart}`} />
              </span>
          ) : currentUser ? (
              <span onClick={handleLike}>
              <i className={`far fa-heart ${styles.HeartOutline}`} />
              </span>
          ) : (
              <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to like posts!</Tooltip>}
              >
              <i className="far fa-heart" />
              </OverlayTrigger>
          )}
                          {likes_count}
              <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Comments</Tooltip>}
                  >
              <Link to={`/posts/${id}`}>
                  <i className="far fa-comments" />
              </Link>
              </OverlayTrigger>
              {comments_count}
              </div> 
              </Col>
              </Row>           
              </div>
              <div className='d-none d-lg-block'>
              <Row className="d-flex align-items-center">
                <Col md={1} className='px-0' >
                <Link to={`/profiles/${profile_id}`}>
                <Avatar src={profile_image} height={30}  />
                </Link>
                </Col>
                {/* md */}
                <Col md={10} >
                    <Row className="d-flex align-items-center">
                    <Col className='text-center px-0 pb-0'
                     md={2}><span style={{color:'#fff'}} >{updated_at}</span></Col>
                    <Col className='text-center px-0' xs={8}>
                    <h5 style={{fontWeight: '600', textTransform: 'capitalize', color:'#fff'}} 
                    >{name} - <span style={{fontStyle:'italic'}}>{company} </span>
                     </h5>
                    </Col>
                    <Col className='text-center px-0' md={2} >
                    <div className={` ${styles.PostBar}`} >
                    {/* like */}
                    {is_owner ? (
                    <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>You can't like your own post!</Tooltip>}
                    >
                    <i className="far fa-heart" />
                    </OverlayTrigger>
                ) : like_id ? (
                    <span onClick={handleUnlike}>
                    <i className={`fas fa-heart ${styles.Heart}`} />
                    </span>
                ) : currentUser ? (
                    <span onClick={handleLike}>
                    <i className={`far fa-heart ${styles.HeartOutline}`} />
                    </span>
                ) : (
                    <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>Log in to like posts!</Tooltip>}
                    >
                    <i className="far fa-heart" />
                    </OverlayTrigger>
                )}
                                {likes_count}
                    <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>Comments</Tooltip>}
                        >
                    <Link to={`/posts/${id}`}>
                        <i className="far fa-comments" />
                    </Link>
                    </OverlayTrigger>
                    {comments_count}
                    </div> 
                    </Col>
                    </Row>            
                </Col>                    
                <Col md={1} 
                className="d-flex align-items-center justify-content-center" >
                {is_owner && (
                    <UniDropdown
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                />
                ) } 
                </Col>
            </Row>
              </div>
            </Card.Body>
            {/* end new */}
            <Link to={`/chat/${id}`}>
            <Card.Body className={`${styles.ChatTopLink} py-0`}  >
                {title && <h4 style={{ fontStyle: 'italic' }}
                className="mb-0 pb-0 text-center">{title}</h4>}
                {/* <hr />
                {content && <Card.Text>{content}</Card.Text>} */}
            </Card.Body>
            </Link>
        </Card>
    </div>
  )
}

export default ChatTop