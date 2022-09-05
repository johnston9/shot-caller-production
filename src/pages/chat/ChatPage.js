import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import Button from "react-bootstrap/Button";
import { useHistory, useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import Chat from "./Chat";
import Comment from "../comments/Comment";
import CommentCreateForm from "../comments/CommentCreateForm";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import InfiniteScroll from "react-infinite-scroll-component";
import Asset from "../../components/Asset";
import { fetchMoreData } from "../../utils/utils";

function ChatPage() {
  const { id } = useParams();
  const history = useHistory();
  const [chat, setChat] = useState({ results: [] });

  const currentUser = useCurrentUser();
  const profile_image = currentUser?.profile_image;
  const [comments, setComments] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: chat }, { data: comments }] = await Promise.all([
          axiosReq.get(`/chat/${id}`),
          axiosReq.get(`/comments/?post=${id}`),
        ]);
        setChat({ results: [chat] });
        setComments(comments);
        console.log(chat);
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);

  return (
    <div>
    <Button
      className={`${btnStyles.Button} ${btnStyles.Blue} mb-2`}
      onClick={() => history.goBack()}
    >
      Back
    </Button>
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" >
        <Chat {...chat.results[0]} setChat={setChat} postPage />
        <Container className={appStyles.Content}>
        {currentUser ? (
            <CommentCreateForm
              profile_id={currentUser.profile_id}
              profileImage={profile_image}
              chat={id}
              setChat={setChat}
              setComments={setComments}
            />
          ) : comments.results.length ? (
            "Comments"
          ) : null}
        {comments.results.length ? (
            <InfiniteScroll
            children={comments.results.map((comment) => (
              <Comment
                key={comment.id}
                {...comment}
                setChat={setChat}
                setComments={setComments}
              />
            ))}
            dataLength={comments.results.length}
            loader={<Asset spinner />}
            hasMore={!!comments.next}
            next={() => fetchMoreData(comments, setComments)}
          />
          ) : currentUser ? (
            <span>No comments yet, be the first to comment!</span>
          ) : (
            <span>No comments... yet</span>
          )}
        </Container>
      </Col>
    </Row>
    </div>
  );
}

export default ChatPage;