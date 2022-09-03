import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { fetchMoreData } from "../../utils/utils";

import appStyles from "../../App.module.css";
import styles from "../../styles/ChatsPage.module.css";
import NoResults from "../../assets/no-results.png";
import { useLocation } from 'react-router-dom';
import { useEffect } from "react";
import { axiosReq } from "../../api/axiosDefaults";
import Chat from "./Chat";
import Asset from "../../components/Asset";
import InfiniteScroll from "react-infinite-scroll-component";

function ChatsPage({message, filter=""} ) {
  const [chat, setChat] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();
  // eslint-disable-next-line
  const [error, setErrors] = useState({});
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchChat = async () => {
      try {
        const { data } = await axiosReq.get(`/chat/?${filter}search=${query}`);
        setChat(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchChat();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };

  }, [filter, pathname, query]);
  
  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <p>Popular profiles mobile</p>
        {/* search */}
        <i className={`fas fa-search ${styles.SearchIcon}`} />
        <Form
          className={styles.SearchBar}
          onSubmit={(event) => event.preventDefault()}
        >
          <Form.Control
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="text"
            className="mr-sm-2"
            placeholder="Search posts"
          />
        </Form>
        {/* chats */}
        {hasLoaded ? (
          <>
            {chat.results.length ? (
              <InfiniteScroll 
               children={
                chat.results.map((cha) => (
                  <Chat key={cha.id} {...cha} setChat={setChat} />
                )) }
                dataLength={chat.results.length}
                loader={<Asset spinner />}
                hasMore={!!chat.next}
                next={() => fetchMoreData(chat, setChat)}
              />
            ) : (
              <Container className={appStyles.Content}>
                <Asset src={NoResults} message={message} />
              </Container>
            )}
          </>
        ) : (
          <Container className={appStyles.Content}>
            <Asset spinner />
          </Container>
        )}
      </Col>
      <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
        <p>Popular profiles for desktop</p>
      </Col>
    </Row>
  );
}

export default ChatsPage;