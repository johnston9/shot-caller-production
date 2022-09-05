import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import logo from "../assets/logo1.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import { useCurrentUser, useSetCurrentUser } from "../contexts/CurrentUserContext";
import axios from 'axios';
import Avatar from './Avatar';
// import useClickOutsideToggle from '../hooks/useClickOutsideToggle';
import useDropdownClick from '../hooks/useDropdownClick';

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  // const { expanded, setExpanded, ref } = useClickOutsideToggle();
  // const { expanded, setExpanded, ref, 
  //   refw, refw1, refw2, refw3, refw4,
  //   reff, reff1, reff2, reff3, reff4, reff5, reff6, 
  //   refm, refm1, refm2, refin, refin2,
  //   refs, refs1, refs2, refs3,
  //   refp, refp1, refp2 } = useDropdownClick();
  const { expanded, setExpanded, ref, 
    refp, refp1, refp2 } = useDropdownClick();

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
      {/* <NavLink
        className={styles.NavLink}
        to={`/profiles/${currentUser?.profile_id}`}
      >
        <Avatar src={currentUser?.profile_image} text="Profile" height={40} />
      </NavLink> */}
      {/* profiles */}
      <NavDropdown
          title={
            <span style={{ color: '#555555'}} className={styles.Title}>
              <Avatar src={currentUser?.profile_image} text="" height={40} />Profiles
            </span>
          }
          ref={refp}
          id="nav-dropdown5"
          // activeClassName={styles.Active}
          className={`py-0 ${styles.NavLink} `}
          >
        <NavDropdown.Item >
          <NavLink
          className={` ${styles.DropLink} `}
          activeClassName={styles.Active}
          ref={refp1}
          to="/profiles"
        >
          <i className="navicon fas fa-play"></i>Profiles
        </NavLink>
        </NavDropdown.Item>
        <NavDropdown.Item >
        <NavLink
          className={`mt-2 ${styles.NavLink} `}
          activeClassName={styles.Active}
          ref={refp2}
          to={`/profiles/${currentUser?.profile_id}`}
        >
          <i className="navicon fas fa-play"></i>My Profile 
      </NavLink>
      </NavDropdown.Item>
      </NavDropdown>
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