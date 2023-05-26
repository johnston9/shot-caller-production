/* Component in the BudgetPage Component to display the budget data */
import React from 'react';
import Card from "react-bootstrap/Card";
import btnStyles from "../../styles/Button.module.css";
import Button from "react-bootstrap/Button";
import styles from "../../styles/Account.module.css";
import appStyles from "../../App.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosRes } from '../../api/axiosDefaults';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { UniDropdown } from '../../components/UniDropDown';
import { Link, useHistory } from 'react-router-dom';

const Budget = ({budget, name, id} ) => {
  return (
    <div >
    <div className={`${styles.Overview}`}>
    <h2 className={`py-2 ${styles.OverviewText} ${appStyles.playfair}
     text-center`} >{name} Budget </h2>
    </div>
    </div>
  )
}

export default Budget