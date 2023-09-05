/* Component in the Budget component to edit Transportation */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const Transportation = (props) => {
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});

  const {postDataTransportation, setPostDataTransportation,
    transportTotal, setTransportTotal, setShow} = props;

  const {production_cars, trucks_vans, buses, motorhomes,
        talent_cars, support_vehicles, boats_planes, fuel, repairs, taxis,
        parking, licenses_permits, brokerage_insurance, other_transport,
  } = postDataTransportation;

  // handleChange 
  const handleChange = (event) => {
    setPostDataTransportation({
    ...postDataTransportation,
    [event.target.name]: parseFloat(event.target.value || 0 ),
    });
  }; 

  // function to add all Transport on change
  useEffect(() => {
    const addTransport2 = () => {
        setTransportTotal(
        parseFloat(production_cars || 0) +
        parseFloat(trucks_vans || 0) +
        parseFloat(buses || 0) +
        parseFloat(motorhomes || 0) +
        parseFloat(talent_cars || 0) +
        parseFloat(support_vehicles || 0) +
        parseFloat(boats_planes || 0) +
        parseFloat(repairs || 0) +
        parseFloat(taxis || 0) +
        parseFloat(parking || 0) +
        parseFloat(licenses_permits || 0) +
        parseFloat(brokerage_insurance || 0) +
        parseFloat(other_transport || 0) +
        parseFloat(buses || 0) 
       )
    }
    const timer = setTimeout(() => {
        addTransport2();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };

}, [production_cars, trucks_vans, buses, motorhomes, talent_cars,
    support_vehicles, boats_planes, fuel, repairs, taxis, parking,
    licenses_permits, brokerage_insurance, other_transport,]);

  return (
    <div>Transportation</div>
  )
}

export default Transportation