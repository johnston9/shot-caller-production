/* Component in the Budget component to edit Transport */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const Transport = (props) => {
    // eslint-disable-next-line
    const [errors, setErrors] = useState({});

    const {postDataTransport, setPostDataTransport,
        tpcoordinatorTotal, setTpcoordinatorTotal,
        tpcaptainTotal, setTpcaptainTotal,
        tpmanagerTotal, setTpmanagerTotal,
        headdriverTotal, setHeaddriverTotal,
        driversTotal, setDriversTotal, setShow,
        transportlabourTotal, setTransportlabourTotal,} = props;

    const {tp_coordinator_qty, tp_coordinator_uno, tp_coordinator_una, tp_coordinator_rt,
        tp_captain_qty,tp_captain_uno, tp_captain_una, tp_captain_rt,
        tp_manager_qty, tp_manager_uno, tp_manager_una, tp_manager_rt,
        head_driver_qty, head_driver_uno, head_driver_una, head_driver_rt,
        drivers_qty, drivers_uno, drivers_una, drivers_rt,
        } = postDataTransport;

    // handleChange 
    const handleChange = (event) => {
        setPostDataTransport({
        ...postDataTransport,
        [event.target.name]: parseFloat(event.target.value || 0 ),
        });
      }; 
  
    // handleChange Text 
    const handleChangeText = (event) => {
        setPostDataTransport({
        ...postDataTransport,
        [event.target.name]: event.target.value,
        });
        };

  return (
    <div>Transport</div>
  )
}

export default Transport