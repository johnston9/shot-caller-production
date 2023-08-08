/* Component in the Budget component to edit Wrangling */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const SpecialEffects = (props) => {
    // eslint-disable-next-line
    const [errors, setErrors] = useState({});

    const {postDataSpecialEffects, setPostDataSpecialEffects,
        fxsupervisorTotal, setFxsupervisorTotal,
        assistfxTotal, setAssistfxTotal,
        otherfxlabourTotal, setOtherfxlabourTotal,
        fxlabourTotal, setFxlabourTotal, setShow} = props;
    
    const {fx_supervisor_quantity, fx_supervisor_units_number,
        fx_supervisor_units_name, fx_supervisor_rate,
        assist_fx_quantity, assist_fx_units_number,
        assist_fx_units_name, assist_fx_rate,
        other_fx_labour_quantity, other_fx_labour_units_number,
        other_fx_labour_units_name, other_fx_labour_rate,
        } = postDataSpecialEffects;
    
    // handleChange 
    const handleChange = (event) => {
        setPostDataSpecialEffects({
        ...postDataSpecialEffects,
        [event.target.name]: parseFloat(event.target.value || 0 ),
        });
    }; 

    // handleChange Text 
    const handleChangeText = (event) => {
        setPostDataSpecialEffects({
        ...postDataSpecialEffects,
        [event.target.name]: event.target.value,
        });
    };

    // Calculate Functions
    // function to calculate fx supervisor on change
    useEffect(() => {
        const addSpeeff = () => {
        setFxsupervisorTotal(parseFloat(fx_supervisor_quantity || 0) * 
        parseFloat(fx_supervisor_units_number || 0) * 
        parseFloat(fx_supervisor_rate || 0))
        }
        const timer = setTimeout(() => {
            addSpeeff();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
    }, [fx_supervisor_quantity, fx_supervisor_units_number,
        fx_supervisor_rate]);
    
    // function to calculate assistant fx on change
    useEffect(() => {
        const addAssfx = () => {
        setAssistfxTotal(parseFloat(assist_fx_quantity || 0) * 
        parseFloat(assist_fx_units_number || 0) * 
        parseFloat(assist_fx_rate || 0))
        }
        const timer = setTimeout(() => {
            addAssfx();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
    }, [assist_fx_quantity, assist_fx_units_number,
        assist_fx_rate]);
    
    // function to calculate other fx labour on change
    useEffect(() => {
        const addOthfx = () => {
        setOtherfxlabourTotal(parseFloat(other_fx_labour_quantity || 0) * 
        parseFloat(other_fx_labour_units_number || 0) * 
        parseFloat(other_fx_labour_rate || 0))
        }
        const timer = setTimeout(() => {
            addOthfx();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
    }, [other_fx_labour_quantity, other_fx_labour_units_number,
        other_fx_labour_rate]);

    // function to add all FX Labour on change
    useEffect(() => {
        const addFxlab = () => {
        setFxlabourTotal(
        parseFloat(fxsupervisorTotal || 0) +
        parseFloat(assistfxTotal || 0) +
        parseFloat(otherfxlabourTotal || 0)
        )
        }
        const timer = setTimeout(() => {
            addFxlab();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };

        }, [fxsupervisorTotal, assistfxTotal, 
            otherfxlabourTotal]);

  return (
    <div>SpecialEffects</div>
  )
}

export default SpecialEffects