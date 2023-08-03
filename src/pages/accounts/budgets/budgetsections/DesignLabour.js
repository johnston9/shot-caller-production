/* Component in the Budget component to edit Cast */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const DesignLabour = (props) => {
    const [errors, setErrors] = useState({});

    const {postDataDesign, setPostDataDesign,
        productiondesignerTotal, setProductiondesignerTotal,
        artdirectorTotal, setArtdirectorTotal,
        artassistantsTotal, setArtassistantsTotal,
        productionassistantstraineesTotal, setProductionassistantstraineesTotal,
        graphicartistsTotal, setGraphicartistsTotal,
        designlabourTotal, setDesignlabourTotal} = props;
    
    const {production_designer_quantity, production_designer_units_number,
        production_designer_units_name, production_designer_rate,
        art_director_quantity, art_director_units_number,
        art_director_units_name, art_director_rate,
        art_assistants_quantity, art_assistants_units_number,
        art_assistants_units_name, art_assistants_rate,
        production_assistants_trainees_quantity, production_assistants_trainees_units_number,
        production_assistants_trainees_units_name, production_assistants_trainees_rate,
        graphic_artists_quantity, graphic_artists_units_number,
        graphic_artists_units_name, graphic_artists_rate, other_design,
            } = postDataDesign;
    
    // Design handleChange 
  const handleChangeDesign = (event) => {
    setPostDataDesign({
      ...postDataDesign,
      [event.target.name]: parseFloat(event.target.value || 0 ),
    });
  }; 

  // Design handleChange Text 
  const handleChangeDesignText = (event) => {
    setPostDataDesign({
      ...postDataDesign,
      [event.target.name]: event.target.value,
    });
  };

  // Calculate Functions
  // function to calculate production designer on change
  useEffect(() => {
    const addProdes = () => {
      setProductiondesignerTotal(parseFloat(production_designer_quantity || 0) * 
      parseFloat(production_designer_units_number || 0) * 
      parseFloat(production_designer_rate || 0))
    }
    const timer = setTimeout(() => {
        addProdes();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [production_designer_quantity, production_designer_units_number, 
    production_designer_rate]);

  // function to calculate art director on change
  useEffect(() => {
    const addArtdir = () => {
      setArtdirectorTotal(parseFloat(art_director_quantity || 0) * 
      parseFloat(art_director_units_number || 0) * 
      parseFloat(art_director_rate || 0))
    }
    const timer = setTimeout(() => {
        addArtdir();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [art_director_quantity, art_director_units_number, 
    art_director_rate]);

  // function to calculate art assistants on change
  useEffect(() => {
    const addArtass = () => {
      setArtassistantsTotal(parseFloat(art_assistants_quantity || 0) * 
      parseFloat(art_assistants_units_number || 0) * 
      parseFloat(art_assistants_rate || 0))
    }
    const timer = setTimeout(() => {
        addArtass();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [art_assistants_quantity, art_assistants_units_number, 
    art_assistants_rate]);

  // function to calculate production assistants/trainees on change
  useEffect(() => {
    const addProasstra = () => {
      setProductionassistantstraineesTotal(parseFloat(production_assistants_trainees_quantity || 0) * 
      parseFloat(production_assistants_trainees_units_number || 0) * 
      parseFloat(production_assistants_trainees_rate || 0))
    }
    const timer = setTimeout(() => {
        addProasstra();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [production_assistants_trainees_quantity, production_assistants_trainees_units_number, 
    production_assistants_trainees_rate]);

  // function to calculate graphic artists on change
  useEffect(() => {
    const addGraart = () => {
        setGraphicartistsTotal(parseFloat(graphic_artists_quantity || 0) * 
      parseFloat(graphic_artists_units_number || 0) * 
      parseFloat(graphic_artists_rate || 0))
    }
    const timer = setTimeout(() => {
        addGraart();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [graphic_artists_quantity, graphic_artists_units_number, 
    graphic_artists_rate]);

// function to add all design on change
useEffect(() => {
    const addDesign = () => {
      setDesignlabourTotal(
      parseFloat(productiondesignerTotal || 0) +
      parseFloat(artdirectorTotal || 0) +
      parseFloat(artassistantsTotal || 0) +
      parseFloat(productionassistantstraineesTotal || 0) +
      parseFloat(graphicartistsTotal || 0) +
      parseFloat(other_design || 0)
      )
    }
    const timer = setTimeout(() => {
        addDesign();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [other_design, graphicartistsTotal, productionassistantstraineesTotal,
    artassistantsTotal, artdirectorTotal, productiondesignerTotal]);

  return (
    <div>DesignLabour</div>
  )
}

export default DesignLabour