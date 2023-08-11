/* Component in the Budget component to edit FX */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const Wardrobe = (props) => {
    // eslint-disable-next-line
    const [errors, setErrors] = useState({});

    const {postDataWardrobe, setPostDataWardrobe,
           costumedesignerTotal, setCostumedesignerTotal,
           assistcosdesignerTotal, setAssistcosdesignerTotal,
           headwardrobeTotal, setHeadwardrobeTotal,
           wardrobeassistTotal, setWardrobeassistTotal,
           truckcostumerTotal, setTruckcostumerTotal,
           otherwardrobeTotal, setOtherwardrobeTotal, setShow,
           wardrobelabourTotal, setWardrobelabourTotal} = props;
    
    // Wardrobe Labour postData values
    const {costume_designer_quantity, costume_designer_units_number,
        costume_designer_units_name, costume_designer_rate,
        assist_costume_designer_quantity, assist_costume_designer_units_number,
        assist_costume_designer_units_name, assist_costume_designer_rate,
        head_wardrobe_quantity, head_wardrobe_units_number,
        head_wardrobe_units_name, head_wardrobe_rate,
        wardrobe_assist_quantity, wardrobe_assist_units_number,
        wardrobe_assist_units_name, wardrobe_assist_rate,
        truck_costumer_quantity, truck_costumer_units_number,
        truck_costumer_units_name, truck_costumer_rate,
        other_wardrobe_labour_quantity, other_wardrobe_labour_units_number,
        other_wardrobe_labour_units_name, other_wardrobe_labour_rate,
    } = postDataWardrobe;

    // handleChange 
    const handleChange = (event) => {
        setPostDataWardrobe({
        ...postDataWardrobe,
        [event.target.name]: parseFloat(event.target.value || 0 ),
        });
    }; 

    // handleChange Text 
    const handleChangeText = (event) => {
        setPostDataWardrobe({
        ...postDataWardrobe,
        [event.target.name]: event.target.value,
        });
    };

    // Calculate Functions
    // function to calculate costume designer on change
    useEffect(() => {
        const addCosdes = () => {
        setCostumedesignerTotal(parseFloat(costume_designer_quantity || 0) * 
        parseFloat(costume_designer_units_number || 0) * 
        parseFloat(costume_designer_rate || 0))
        }
        const timer = setTimeout(() => {
            addCosdes();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
    }, [costume_designer_quantity, costume_designer_units_number,
        costume_designer_rate]);
    
    // function to calculate assistant costume designer on change
    useEffect(() => {
        const addAsscos = () => {
        setAssistcosdesignerTotal(parseFloat(assist_costume_designer_quantity || 0) * 
        parseFloat(assist_costume_designer_units_number || 0) * 
        parseFloat(assist_costume_designer_rate || 0))
        }
        const timer = setTimeout(() => {
            addAsscos();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
    }, [assist_costume_designer_quantity, assist_costume_designer_units_number,
        assist_costume_designer_rate]);

    // function to calculate head wardrobe on change
    useEffect(() => {
        const addHeawar = () => {
        setHeadwardrobeTotal(parseFloat(head_wardrobe_quantity || 0) * 
        parseFloat(head_wardrobe_units_number || 0) * 
        parseFloat(head_wardrobe_rate || 0))
        }
        const timer = setTimeout(() => {
            addHeawar();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
    }, [head_wardrobe_quantity, head_wardrobe_units_number,
        head_wardrobe_rate]);

    // function to calculate wardrobe assistant on change
    useEffect(() => {
        const addWarass = () => {
        setWardrobeassistTotal(parseFloat(wardrobe_assist_quantity || 0) * 
        parseFloat(wardrobe_assist_units_number || 0) * 
        parseFloat(wardrobe_assist_rate || 0))
        }
        const timer = setTimeout(() => {
            addWarass();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
    }, [wardrobe_assist_quantity, wardrobe_assist_units_number,
        wardrobe_assist_rate]);

    // function to calculate truck costumer on change
    useEffect(() => {
        const addTrucus = () => {
        setTruckcostumerTotal(parseFloat(truck_costumer_quantity || 0) * 
        parseFloat(truck_costumer_units_number || 0) * 
        parseFloat(truck_costumer_rate || 0))
        }
        const timer = setTimeout(() => {
            addTrucus();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
    }, [truck_costumer_quantity, truck_costumer_units_number,
        truck_costumer_rate]);

    // function to calculate other wardrobe labour on change
    useEffect(() => {
        const addOthwar = () => {
        setOtherwardrobeTotal(parseFloat(other_wardrobe_labour_quantity || 0) * 
        parseFloat(other_wardrobe_labour_units_number || 0) * 
        parseFloat(other_wardrobe_labour_rate || 0))
        }
        const timer = setTimeout(() => {
            addOthwar();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
    }, [other_wardrobe_labour_quantity, other_wardrobe_labour_units_number,
        other_wardrobe_labour_rate]);

    // function to add all Wardrobe Labour on change
    useEffect(() => {
        const addWarlab = () => {
        setWardrobelabourTotal(
        parseFloat(costumedesignerTotal || 0) +
        parseFloat(assistcosdesignerTotal || 0) +
        parseFloat(headwardrobeTotal || 0) +
        parseFloat(wardrobeassistTotal || 0) +
        parseFloat(truckcostumerTotal || 0) +
        parseFloat(otherwardrobeTotal || 0)
        )
        }
        const timer = setTimeout(() => {
            addWarlab();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };

        }, [costumedesignerTotal, assistcosdesignerTotal, headwardrobeTotal,
            wardrobeassistTotal, truckcostumerTotal, otherwardrobeTotal]);


  return (
    <div>Wardrobe</div>
  )
}

export default Wardrobe