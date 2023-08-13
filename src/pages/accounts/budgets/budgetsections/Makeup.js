/* Component in the Budget component to edit Wardrobe */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const Makeup = (props) => {
    // eslint-disable-next-line
    const [errors, setErrors] = useState({});

    const {postDataMakeup, setPostDataMakeup,
           headmakeupTotal, setHeadmakeupTotal,
           keymakeupTotal, setKeymakeupTotal,
           makeupartistTotal, setMakeupartistTotal,
           keyhairstylistTotal, setKeyhairstylistTotal,
           hairdresserTotal, setHairdresserTotal,
           hairmakeupdailiesTotal, setHairmakeupdailiesTotal,
           othermakeuplabourTotal, setOthermakeuplabourTotal,
           sfxmakeupTotal, setSfxmakeupTotal, setShow,
           makeuplabourTotal, setMakeuplabourTotal} = props;

    const {makeup_dept_head_quantity, makeup_dept_head_units_number,
    makeup_dept_head_units_name, makeup_dept_head_rate,
    key_makeup_quantity, key_makeup_units_number,
    key_makeup_units_name, key_makeup_rate,
    makeup_artist_quantity, makeup_artist_units_number,
    makeup_artist_units_name, makeup_artist_rate,
    key_hairstylist_quantity, key_hairstylist_units_number,
    key_hairstylist_units_name, key_hairstylist_rate,
    hairdresser_quantity, hairdresser_units_number,
    hairdresser_units_name, hairdresser_rate,
    hair_makeup_dailies_quantity, hair_makeup_dailies_units_number,
    hair_makeup_dailies_units_name, hair_makeup_dailies_rate,
    other_makeup_labour_quantity, other_makeup_labour_units_number,
    other_makeup_labour_units_name, other_makeup_labour_rate,
    sfx_makeup_quantity, sfx_makeup_units_number,
    sfx_makeup_units_name, sfx_makeup_rate,
    } = postDataMakeup;

    // handleChange 
    const handleChange = (event) => {
      setPostDataMakeup({
      ...postDataMakeup,
      [event.target.name]: parseFloat(event.target.value || 0 ),
      });
  }; 

  // handleChange Text 
  const handleChangeText = (event) => {
     setPostDataMakeup({
      ...postDataMakeup,
      [event.target.name]: event.target.value,
      });
  };

  // Calculate Functions
    // function to calculate makeup dept head on change
    useEffect(() => {
      const addMakhea = () => {
      setHeadmakeupTotal(parseFloat(makeup_dept_head_quantity || 0) * 
      parseFloat(makeup_dept_head_units_number || 0) * 
      parseFloat(makeup_dept_head_rate || 0))
      }
      const timer = setTimeout(() => {
        addMakhea();
      }, 2000);

      return () => {
      clearTimeout(timer);
      };
  }, [makeup_dept_head_quantity, makeup_dept_head_units_number,
    makeup_dept_head_rate]);

    // function to calculate key makeup on change
    useEffect(() => {
      const addKeymak = () => {
      setKeymakeupTotal(parseFloat(key_makeup_quantity || 0) * 
      parseFloat(key_makeup_units_number || 0) * 
      parseFloat(key_makeup_rate || 0))
      }
      const timer = setTimeout(() => {
        addKeymak();
      }, 2000);

      return () => {
      clearTimeout(timer);
      };
  }, [key_makeup_quantity, key_makeup_units_number,
    key_makeup_rate]);

    // function to calculate makeup artist on change
    useEffect(() => {
      const addMakart = () => {
      setMakeupartistTotal(parseFloat(makeup_artist_quantity || 0) * 
      parseFloat(makeup_artist_units_number || 0) * 
      parseFloat(makeup_artist_rate || 0))
      }
      const timer = setTimeout(() => {
        addMakart();
      }, 2000);

      return () => {
      clearTimeout(timer);
      };
  }, [makeup_artist_quantity, makeup_artist_units_number,
    makeup_artist_rate]);

    // function to calculate key hairstylist on change
    useEffect(() => {
      const addKeyhai = () => {
      setKeyhairstylistTotal(parseFloat(key_hairstylist_quantity || 0) * 
      parseFloat(key_hairstylist_units_number || 0) * 
      parseFloat(key_hairstylist_rate || 0))
      }
      const timer = setTimeout(() => {
        addKeyhai();
      }, 2000);

      return () => {
      clearTimeout(timer);
      };
  }, [key_hairstylist_quantity, key_hairstylist_units_number,
    key_hairstylist_rate]);

    // function to calculate hairdresser on change
    useEffect(() => {
      const addHairdr = () => {
      setHairdresserTotal(parseFloat(hairdresser_quantity || 0) * 
      parseFloat(hairdresser_units_number || 0) * 
      parseFloat(hairdresser_rate || 0))
      }
      const timer = setTimeout(() => {
        addHairdr();
      }, 2000);

      return () => {
      clearTimeout(timer);
      };
  }, [hairdresser_quantity, hairdresser_units_number,
    hairdresser_rate]);

    // function to calculate hair makeup dailies on change
    useEffect(() => {
      const addDailie = () => {
      setHairmakeupdailiesTotal(parseFloat(hair_makeup_dailies_quantity || 0) * 
      parseFloat(hair_makeup_dailies_units_number || 0) * 
      parseFloat(hair_makeup_dailies_rate || 0))
      }
      const timer = setTimeout(() => {
        addDailie();
      }, 2000);

      return () => {
      clearTimeout(timer);
      };
  }, [hair_makeup_dailies_quantity, hair_makeup_dailies_units_number,
    hair_makeup_dailies_rate]);

    // function to calculate other makeup labour on change
    useEffect(() => {
      const addOthmak = () => {
      setOthermakeuplabourTotal(parseFloat(other_makeup_labour_quantity || 0) * 
      parseFloat(other_makeup_labour_units_number || 0) * 
      parseFloat(other_makeup_labour_rate || 0))
      }
      const timer = setTimeout(() => {
        addOthmak();
      }, 2000);

      return () => {
      clearTimeout(timer);
      };
  }, [other_makeup_labour_quantity, other_makeup_labour_units_number,
    other_makeup_labour_rate]);

    // function to calculate sfx makeup on change
    useEffect(() => {
      const addSfxmak = () => {
      setSfxmakeupTotal(parseFloat(sfx_makeup_quantity || 0) * 
      parseFloat(sfx_makeup_units_number || 0) * 
      parseFloat(sfx_makeup_rate || 0))
      }
      const timer = setTimeout(() => {
        addSfxmak();
      }, 2000);

      return () => {
      clearTimeout(timer);
      };
  }, [sfx_makeup_quantity, sfx_makeup_units_number,
    sfx_makeup_rate]);

    // function to add all makeup Labour on change
    useEffect(() => {
      const addMaklab = () => {
      setMakeuplabourTotal(
      parseFloat(headmakeupTotal || 0) +
      parseFloat(keymakeupTotal || 0) +
      parseFloat(makeupartistTotal || 0) +
      parseFloat(keyhairstylistTotal || 0) +
      parseFloat(hairdresserTotal || 0) +
      parseFloat(hairmakeupdailiesTotal || 0) +
      parseFloat(othermakeuplabourTotal || 0) +
      parseFloat(sfxmakeupTotal || 0)
      )
      }
      const timer = setTimeout(() => {
        addMaklab();
      }, 1000);

      return () => {
      clearTimeout(timer);
      };

      }, [headmakeupTotal, keymakeupTotal, makeupartistTotal,
        keyhairstylistTotal, hairdresserTotal, hairmakeupdailiesTotal,
        othermakeuplabourTotal, sfxmakeupTotal]);

  return (
    <div>Makeup</div>
  )
}

export default Makeup