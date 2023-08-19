/* Component in the Budget component to edit Makeup */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const Grip = (props) => {
    // eslint-disable-next-line
    const [errors, setErrors] = useState({});

    const {postDataGrip, setPostDataGrip,
           keygripTotal, setKeygripTotal,
           bestboygripTotal, setBestboygripTotal,
           gripsTotal, setGripsTotal,
           dailiesgripTotal, setDailiesgripTotal,
           dollycranegripTotal, setDollycranegripTotal,
           swinggripsTotal, setSwinggripsTotal, setShow,
           othergriplabourTotal, setOthergriplabourTotal,
           griplabourTotal, setGriplabourTotal,} = props;

    const {key_grip_qty, key_grip_uno, key_grip_una, key_grip_rt,
    best_boy_grip_qty, best_boy_grip_uno, best_boy_grip_una, best_boy_grip_rt,
    grips_qty, grips_uno, grips_una, grips_rt,
    dailies_grip_qty, dailies_grip_uno, dailies_grip_una, dailies_grip_rt, 
    dolly_crane_grip_qty, dolly_crane_grip_uno, dolly_crane_grip_una, dolly_crane_grip_rt,
    swing_grips_qty, swing_grips_uno, swing_grips_una, swing_grips_rt,
    other_grip_labour_qty, other_grip_labour_uno, other_grip_labour_una, other_grip_labour_rt,
    } = postDataGrip;

    // handleChange 
    const handleChange = (event) => {
      setPostDataGrip({
      ...postDataGrip,
      [event.target.name]: parseFloat(event.target.value || 0 ),
      });
    }; 

    // handleChange Text 
    const handleChangeText = (event) => {
      setPostDataGrip({
    ...postDataGrip,
    [event.target.name]: event.target.value,
    });
    };
    
  return (
    <div>Grip</div>
  )
}

export default Grip