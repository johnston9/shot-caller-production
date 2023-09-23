/* Component in the Budget component to edit Post Staff/Facilities */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const StaffFacilities = (props) => {
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});

  const {postDataPostStaffFac, setPostDataPostStaffFac,
         postSuperTotal, setPostSuperTotal,
         postCoordinTotal, setPostCoordinTotal,
         postAssistTotal, setPostAssistTotal,
         postAccountTotal, setPostAccountTotal, setShow,
         postAccountAssTotal, setPostAccountAssTotal,
         postStaffFacTotal, setPostStaffFacTotal,} = props;

  const {post_supervisor_qty, post_supervisor_uno, 
    post_supervisor_una, post_supervisor_rt, 
    post_coordinator_qty, post_coordinator_uno,
    post_coordinator_una, post_coordinator_rt,
    post_assistants_qty, post_assistants_uno,
    post_assistants_una, post_assistants_rt,
    post_accountants_qty, post_accountants_uno,
    post_accountants_una, post_accountants_rt,
    post_accountants_ass_qty, post_accountants_ass_uno,
    post_accountants_ass_una, post_accountants_ass_rt,
    post_office_rent, post_office_equ, post_office_sup, 
    post_it_network, post_phone_net, post_computers_soft, post_store,
    post_ship, post_craft, fringes_taxes_post, post_other,
  } = postDataPostStaffFac;

  // handleChange 
  const handleChange = (event) => {
    setPostDataPostStaffFac({
    ...postDataPostStaffFac,
    [event.target.name]: parseFloat(event.target.value || 0 ),
    });
}; 

  // handleChange Text 
  const handleChangeText = (event) => {
    setPostDataPostStaffFac({
    ...postDataPostStaffFac,
    [event.target.name]: event.target.value,
    });
  };

  // Calculate Functions
  // function to calculate Supervisor on change
  useEffect(() => {
    const addPossup = () => {
    setPostSuperTotal(parseFloat(post_supervisor_qty || 0) * 
    parseFloat(post_supervisor_uno || 0) * 
    parseFloat(post_supervisor_rt || 0))
    }
    const timer = setTimeout(() => {
        addPossup();
    }, 2000);

    return () => {
    clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [post_supervisor_qty, post_supervisor_uno,
      post_supervisor_rt]);

  // function to calculate Coordinator on change
  useEffect(() => {
    const addPoscoo = () => {
    setPostCoordinTotal(parseFloat(post_coordinator_qty || 0) * 
    parseFloat(post_coordinator_uno || 0) * 
    parseFloat(post_coordinator_rt || 0))
    }
    const timer = setTimeout(() => {
        addPoscoo();
    }, 2000);

    return () => {
    clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [post_coordinator_qty, post_coordinator_uno, post_coordinator_rt]);

  // function to calculate Post Production Assistants on change
  useEffect(() => {
    const addPosass = () => {
    setPostAssistTotal(parseFloat(post_assistants_qty || 0) * 
    parseFloat(post_assistants_uno || 0) * 
    parseFloat(post_assistants_rt || 0))
    }
    const timer = setTimeout(() => {
        addPosass();
    }, 2000);

    return () => {
    clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [post_assistants_qty, post_assistants_uno, post_assistants_rt]);

  // function to calculate Post Production Accountants on change
  useEffect(() => {
    const addPosacc = () => {
    setPostAccountTotal(parseFloat(post_accountants_qty || 0) * 
    parseFloat(post_accountants_uno || 0) * 
    parseFloat(post_accountants_rt || 0))
    }
    const timer = setTimeout(() => {
        addPosacc();
    }, 2000);

    return () => {
    clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [post_accountants_qty, post_accountants_uno, post_accountants_rt]);

  // function to calculate Post Production Accountants Assistants on change
  useEffect(() => {
    const addPosaccass = () => {
    setPostAccountAssTotal(parseFloat(post_accountants_ass_qty || 0) * 
    parseFloat(post_accountants_ass_uno || 0) * 
    parseFloat(post_accountants_ass_rt || 0))
    }
    const timer = setTimeout(() => {
        addPosaccass();
    }, 2000);

    return () => {
    clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [post_accountants_ass_qty, post_accountants_ass_uno, 
    post_accountants_ass_rt]);

  // function to add all Post Production Staff/Facilities on change
  useEffect(() => {
    const AddPosstafac = () => {
    setPostStaffFacTotal(
    parseFloat(postSuperTotal || 0) +
    parseFloat(postCoordinTotal || 0) +
    parseFloat(postAssistTotal || 0) +
    parseFloat(postAccountTotal || 0) +
    parseFloat(postAccountAssTotal || 0) +
    parseFloat(post_consultant || 0) +
    parseFloat(post_office_rent || 0) +
    parseFloat(post_office_equ || 0) +
    parseFloat(post_office_sup || 0) +
    parseFloat(post_it_network || 0) +
    parseFloat(post_phone_net || 0) +
    parseFloat(post_computers_soft || 0) +
    parseFloat(post_store || 0) +
    parseFloat(post_ship || 0) +
    parseFloat(post_craft || 0) +
    parseFloat(fringes_taxes_post || 0) +
    parseFloat(post_other || 0)
    )
    }
    const timer = setTimeout(() => {
        AddPosstafac();
    }, 1000);

    return () => {
    clearTimeout(timer);
    };
    // eslint-disable-next-line
    }, [postSuperTotal, postCoordinTotal, postAssistTotal,
        postAccountTotal, postAccountAssTotal,
        post_office_rent, post_office_equ, post_office_sup, post_consultant, 
        post_it_network, post_phone_net, post_computers_soft, post_store,
        post_ship, post_craft, fringes_taxes_post, post_other,]);

  return (
    <div>StaffFacilities</div>
  )
}

export default StaffFacilities