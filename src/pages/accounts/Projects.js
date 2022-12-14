import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import Button from "react-bootstrap/Button";
import styles from "../../styles/ChatsPage.module.css";
import NoResults from "../../assets/no-results.png";
import { useHistory } from 'react-router-dom';
import { useEffect } from "react";
import { axiosReq } from "../../api/axiosDefaults";
import Asset from "../../components/Asset";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Project from "./Project";

const Projects = ({id} ) => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [projects, setProjects] = useState({ results: [] });
  const history = useHistory();
  const currentUser = useCurrentUser();
//   const profile_id = currentUser?.profile_id || '';
  // eslint-disable-next-line
  const [error, setErrors] = useState({});
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await axiosReq.get(`/projects/?owner__profile=${id}&search=${query}`);
        setProjects(data);
        console.log(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
        fetchProjects();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };

  }, [query]);
  return (
    <div className="px-3">
    <Row>
      <Col className="py-2 p-0 p-lg-2" 
        xs={{span: 10, offset: 1}} md={{span: 6, offset: 3}} >
        {/* search */}
        <Form
          className={`${styles.SearchBar}`}
          onSubmit={(event) => event.preventDefault()}
        >
          <Form.Control
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="text"
            className="mr-sm-2"
            placeholder="Search"
          />
        </Form>
        </Col>
    </Row>
    {/* projects */}
    <Row className="px-5">
        {hasLoaded ? (
        <>
        {projects.results.length ? (
            projects.results.map((proj) => (
            <Col xs={6} md={4} 
            className="py-2 p-0 mx-0">
            <Project key={proj.id} {...proj} />
            </Col>
            ))) 
            : (
            <Container className={appStyles.Content}>
                <Asset src={NoResults } message="No Projects" />
            </Container>
            )}
        </>
        ) : (
        <Container className={appStyles.Content}>
            <Asset spinner />
        </Container>
        )}
</Row>     
    </div>
  )
}

export default Projects