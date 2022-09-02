import React from 'react';
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/logo1.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import { useCurrentUser, useSetCurrentUser } from "../contexts/CurrentUserContext";
import axios from 'axios';
import Avatar from './Avatar';
import useClickOutsideToggle from '../hooks/useClickOutsideToggle';

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const { expanded, setExpanded, ref } = useClickOutsideToggle();

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
    } catch (err) {
      console.log(err);
    }
  };

  const addChatIcon = (
    <NavLink
      className={styles.NavLink}
      activeClassName={styles.Active}
      to="/chat/create"
    >
      <i className="far fa-plus-square"></i>Add post
    </NavLink>
  );

  const loggedInIcons = (
    <>
      <NavLink
        exact
        className={`mt-1 ${styles.NavLink}`}
        activeClassName={styles.Active}
        to="/"
      >
        <i className="fas fa-home"></i>Home
      </NavLink>
      <NavLink
        className={`mt-1 ${styles.NavLink}`}
        activeClassName={styles.Active}
        to="/chat"
      >
        <i className="fas fa-stream"></i>Chat
      </NavLink>
      <NavLink
        className={`mt-1 ${styles.NavLink}`}
        activeClassName={styles.Active}
        to="/feed"
      >
        <i className="fas fa-stream"></i>Feed
      </NavLink>
      <NavLink
        className={`mt-1 ${styles.NavLink}`}
        activeClassName={styles.Active}
        to="/liked"
      >
        <i className="fas fa-heart"></i>Liked
      </NavLink>
      <NavLink 
        className={`mt-1 ${styles.NavLink}`}
        to="/" onClick={handleSignOut}>
        <i className="fas fa-sign-out-alt"></i>Sign out
      </NavLink>
      <NavLink
        className={styles.NavLink}
        to={`/profiles/${currentUser?.profile_id}`}
      >
        <Avatar src={currentUser?.profile_image} text="Profile" height={40} />
      </NavLink>
    </>
  );
  const loggedOutIcons = (
    <>
      <NavLink
        className={`${styles.NavLink}`}
        activeClassName={styles.Active}
        to="/signin"
      >
        <i className="fas fa-sign-in-alt"></i>Sign in
      </NavLink>
      <NavLink
        to="/signup"
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        <i className="fas fa-user-plus"></i>Sign up
      </NavLink>
    </>
  );

  return (
    <Navbar expanded={expanded} className={styles.NavBar} expand="lg" fixed="top">
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
          <img src={logo} alt="logo" height="30" /> Shot Caller
          </Navbar.Brand>
        </NavLink>
        {currentUser && addChatIcon}
        {currentUser && currentUser.username}
        <Navbar.Toggle
         ref={ref}
         onClick={() => setExpanded(!expanded)}
         aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;