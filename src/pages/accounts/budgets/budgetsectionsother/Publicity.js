/* Component in the Budget component to edit Publicity */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const Publicity = (props) => {
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});

  const {postDataPublicity, setPostDataPublicity,
  pubTotal, setPubTotal, setShow,} = props;

  const {tests_theater_ren, tests_other,
    unit_publicist, pub_press_ex, photography, epk,
    promotion, pr, firnges_pub, other_pub, previews, website,
  } = postDataPublicity;

  // handleChange 
  const handleChange = (event) => {
    setPostDataPublicity({
    ...postDataPublicity,
    [event.target.name]: parseFloat(event.target.value || 0 ),
    });
  };

  // function to add all Publicity on change
  useEffect(() => {
    const addPublic = () => {
        setPubTotal(
        parseFloat(tests_theater_ren || 0) +
        parseFloat(tests_other || 0) +
        parseFloat(unit_publicist || 0) +
        parseFloat(pub_press_ex || 0) +
        parseFloat(photography || 0) +
        parseFloat(epk || 0) +
        parseFloat(promotion || 0) +
        parseFloat(pr || 0) +
        parseFloat(firnges_pub || 0) +
        parseFloat(other_pub || 0) +
        parseFloat(previews || 0) +
        parseFloat(website || 0)
       )
    }
    const timer = setTimeout(() => {
        addPublic();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
   // eslint-disable-next-line
  }, [tests_theater_ren, tests_other,
    unit_publicist, pub_press_ex, photography, epk,
    promotion, pr, firnges_pub, other_pub, previews, website,]);

  return (
    <div>Publicity</div>
  )
}

export default Publicity