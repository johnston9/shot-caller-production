/* Component in the Budget component to edit Cast */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const Construction = (props) => {
    const [errors, setErrors] = useState({});

    const {postDataConstruction, setPostDataConstruction,
           constructioncoordinatorTotal, setConstructioncoordinatorTotal,
           headcarpenterTotal, setHeadcarpenterTotal,
           carpentersTotal, setCarpentersTotal,
           scenicpaintersTotal, setScenicpaintersTotal,
           headpainterTotal, setHeadpainterTotal,
           paintersTotal, setPaintersTotal,
           labourersTotal, setLabourersTotal, setShow,
           constructionlabourTotal, setConstructionlabourTotal,
    } = props;

    const {constructioncoordinator_quantity, constructioncoordinator_units_number,
        constructioncoordinator_units_name, constructioncoordinator_rate,
        headcarpenter_quantity, headcarpenter_units_number,
        headcarpenter_units_name, headcarpenter_rate,
        carpenters_quantity, carpenters_units_number,
        carpenters_units_name, carpenters_rate,
        scenicpainters_quantity, scenicpainters_units_number,
        scenicpainters_units_name, scenicpainters_rate,
        headpainter_quantity, headpainter_units_number,
        headpainter_units_name, headpainter_rate,
        painters_quantity, painters_units_number, 
        painters_units_name, painters_rate,
        labourers_quantity, labourers_units_number, 
        labourers_units_name, labourers_rate, 
        other_construction,} = postDataConstruction;

    // Construction handleChange 
  const handleChangeConstruction = (event) => {
    setPostDataConstruction({
      ...postDataConstruction,
      [event.target.name]: parseFloat(event.target.value || 0 ),
    });
  }; 

  // Construction handleChange Text 
  const handleChangeConstructionText = (event) => {
    setPostDataConstruction({
      ...postDataConstruction,
      [event.target.name]: event.target.value,
    });
  };

  // Calculate Functions
  // function to calculate construction coordinator on change
  useEffect(() => {
    const addConcoo = () => {
      setConstructioncoordinatorTotal(parseFloat(constructioncoordinator_quantity || 0) * 
      parseFloat(constructioncoordinator_units_number || 0) * 
      parseFloat(constructioncoordinator_rate || 0))
    }
    const timer = setTimeout(() => {
        addConcoo();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [constructioncoordinator_quantity, constructioncoordinator_units_number,
      constructioncoordinator_rate]);

  // function to calculate head carpenter on change
  useEffect(() => {
    const addHedcar = () => {
      setHeadcarpenterTotal(parseFloat(headcarpenter_quantity || 0) * 
      parseFloat(headcarpenter_units_number || 0) * 
      parseFloat(headcarpenter_rate || 0))
    }
    const timer = setTimeout(() => {
        addHedcar();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [headcarpenter_quantity, headcarpenter_units_number,
    headcarpenter_rate]);

  // function to calculate head carpenter on change
  useEffect(() => {
    const addHedcar = () => {
      setHeadcarpenterTotal(parseFloat(headcarpenter_quantity || 0) * 
      parseFloat(headcarpenter_units_number || 0) * 
      parseFloat(headcarpenter_rate || 0))
    }
    const timer = setTimeout(() => {
        addHedcar();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [headcarpenter_quantity, headcarpenter_units_number,
    headcarpenter_rate]);

  // function to calculate carpenters on change
  useEffect(() => {
    const addCarpen = () => {
      setCarpentersTotal(parseFloat(carpenters_quantity || 0) * 
      parseFloat(carpenters_units_number || 0) * 
      parseFloat(carpenters_rate || 0))
    }
    const timer = setTimeout(() => {
        addCarpen();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [carpenters_quantity, carpenters_units_number,
    carpenters_rate]);

  // function to calculate scenic painters on change
  useEffect(() => {
    const addScepan = () => {
      setScenicpaintersTotal(parseFloat(scenicpainters_quantity || 0) * 
      parseFloat(scenicpainters_units_number || 0) * 
      parseFloat(scenicpainters_rate || 0))
    }
    const timer = setTimeout(() => {
        addScepan();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [scenicpainters_quantity, scenicpainters_units_number,
      scenicpainters_rate]);

  // function to calculate head painter on change
  useEffect(() => {
    const addHeaPan = () => {
      setHeadpainterTotal(parseFloat(headpainter_quantity || 0) * 
      parseFloat(headpainter_units_number || 0) * 
      parseFloat(headpainter_rate || 0))
    }
    const timer = setTimeout(() => {
        addHeaPan();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [headpainter_quantity, headpainter_units_number,
    headpainter_rate]);

  // function to calculate painters on change
  useEffect(() => {
    const addPainte = () => {
        setPaintersTotal(parseFloat(painters_quantity || 0) * 
      parseFloat(painters_units_number || 0) * 
      parseFloat(painters_rate || 0))
    }
    const timer = setTimeout(() => {
        addPainte();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [painters_quantity, painters_units_number,
    painters_rate]);

  // function to calculate labourers on change
  useEffect(() => {
    const addLabour = () => {
      setLabourersTotal(parseFloat(labourers_quantity || 0) * 
      parseFloat(labourers_units_number || 0) * 
      parseFloat(labourers_rate || 0))
    }
    const timer = setTimeout(() => {
        addLabour();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [labourers_quantity, labourers_units_number,
    labourers_rate]);

  // function to add all Construction Labour on change
  useEffect(() => {
    const addConLab = () => {
      setConstructionlabourTotal(
      parseFloat(constructioncoordinatorTotal || 0) +
      parseFloat(headcarpenterTotal || 0) +
      parseFloat(carpentersTotal || 0) +
      parseFloat(scenicpaintersTotal || 0) +
      parseFloat(headpainterTotal || 0) +
      parseFloat(paintersTotal || 0) +
      parseFloat(labourersTotal || 0) +
      parseFloat(other_construction || 0) 
      )
    }
    const timer = setTimeout(() => {
        addConLab();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [ ]);

  return (
    <div>Construction</div>
  )
}

export default Construction