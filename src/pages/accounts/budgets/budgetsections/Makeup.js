/* Component in the Budget component to edit Makeup */
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
           makeuplabourTotal, setMakeuplabourTotal,
           headmakprepTotal, setHeadmakprepTotal,
           headmakwrapTotal, setHeadmakwrapTotal,
           headmakallTotal, setHeadmakallTotal,
           keymakprepTotal, setKeymakprepTotal,
           keymakwrapTotal, setKeymakwrapTotal,
           keymakallTotal, setKeymakallTotal,
           makartprepTotal, setMakartprepTotal,
           makartwrapTotal, setMakartwrapTotal,
           makartallTotal, setMakartallTotal,
           keyhairprepTotal, setKeyhairprepTotal,
           keyhairwrapTotal, setKeyhairwrapTotal,
           keyhairallTotal, setKeyhairallTotal,
           hairprepTotal, setHairprepTotal,
           hairwrapTotal, setHairwrapTotal,
           hairallTotal, setHairallTotal,
           othmakprepTotal, setOthmakprepTotal,
           othmakwrapTotal, setOthmakwrapTotal,
           othmakallTotal, setOthmakallTotal,
           sfxmakprepTotal, setSfxmakprepTotal,
           sfxmakwrapTotal, setSfxmakwrapTotal,
           sfxmakallTotal, setSfxmakallTotal,
           maktrainTotal, setMakktrainTotal,
           maktraprepTotal, setMakktraprepTotal,
           maktrawrapTotal, setMakktrawrapTotal,
           maktraallTotal, setMakktraallTotal,
    } = props;

    const {days6th7th_unit_mak, days6th7th_mak, overtime_unit_mak, overtime_mak,
    holidays_unit_mak, holidays_mak, box_rent_unit_mak, box_rent_mak, other_solo_mak,
    mak_head_qty_prep, mak_head_uno_prep, mak_head_una_prep, mak_head_rt_prep,
    mak_head_qty_wrap, mak_head_uno_wrap, mak_head_una_wrap, mak_head_rt_wrap,
    key_mak_qty_prep, key_mak_uno_prep, key_mak_una_prep, key_mak_rt_prep,
    key_mak_qty_wrap, key_mak_uno_wrap, key_mak_una_wrap, key_mak_rt_wrap,
    mak_art_qty_prep, mak_art_uno_prep, mak_art_una_prep, mak_art_rt_prep, 
    mak_art_qty_wrap, mak_art_uno_wrap, mak_art_una_wrap, mak_art_rt_wrap,
    key_hair_qty_prep, key_hair_uno_prep, key_hair_una_prep, key_hair_rt_prep,
    key_hair_qty_wrap, key_hair_uno_wrap, key_hair_una_wrap, key_hair_rt_wrap,
    hair_qty_prep, hair_uno_prep, hair_una_prep, hair_rt_prep,
    hair_qty_wrap, hair_uno_wrap, hair_una_wrap, hair_rt_wrap,
    oth_mak_qty_prep, oth_mak_uno_prep, oth_mak_una_prep, oth_mak_rt_prep,
    oth_mak_qty_wrap, oth_mak_uno_wrap, oth_mak_una_wrap, oth_mak_rt_wrap,
    sfx_mak_qty_prep, sfx_mak_uno_prep, sfx_mak_una_prep, sfx_mak_rt_prep,
    sfx_mak_qty_wrap, sfx_mak_uno_wrap, sfx_mak_una_wrap, sfx_mak_rt_wrap,
    mak_train_qty, mak_train_uno, mak_train_una, mak_train_rt,
    mak_train_qty_prep, mak_train_uno_prep, mak_train_una_prep, mak_train_rt_prep,
    mak_train_qty_wrap, mak_train_uno_wrap, mak_train_una_wrap, mak_train_rt_wrap,
    makeup_dept_head_quantity, makeup_dept_head_units_number,
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
    fringes_taxes_makeup,} = postDataMakeup;

    // handleChange 
    const handleChange = (event) => {
        setPostDataMakeup({
        ...postDataMakeup,
        [event.target.name]: parseFloat(event.target.value.replace(/\D/g,'') || 0 ),
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
    // makeup dept head
    // function to calculate makeup dept head shoot on change
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
      // eslint-disable-next-line
  }, [makeup_dept_head_quantity, makeup_dept_head_units_number,
    makeup_dept_head_rate]);

    // function to calculate makeup dept head prep on change
    useEffect(() => {
        const addMakheaprep = () => {
        setHeadmakprepTotal(parseFloat(mak_head_qty_prep || 0) * 
        parseFloat(mak_head_uno_prep || 0) * 
        parseFloat(mak_head_rt_prep || 0))
        }
        const timer = setTimeout(() => {
            addMakheaprep();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [mak_head_qty_prep, mak_head_uno_prep, mak_head_rt_prep]);

    // function to calculate makeup dept head wrap on change
    useEffect(() => {
        const addMakheawrap = () => {
        setHeadmakwrapTotal(parseFloat(mak_head_qty_wrap || 0) * 
        parseFloat(mak_head_uno_wrap || 0) * 
        parseFloat(mak_head_rt_wrap || 0))
        }
        const timer = setTimeout(() => {
            addMakheawrap();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [mak_head_qty_wrap, mak_head_uno_wrap, mak_head_rt_wrap]);

    // function to calculate makeup dept head all on change
    useEffect(() => {
        const addMakheaall = () => {
        setHeadmakallTotal(parseFloat(headmakeupTotal || 0) +
        parseFloat(headmakprepTotal || 0) +
        parseFloat(headmakwrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addMakheaall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [headmakeupTotal, headmakprepTotal, headmakwrapTotal]);

    // key makeup
    // function to calculate key makeup shoot on change
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
      // eslint-disable-next-line
  }, [key_makeup_quantity, key_makeup_units_number,
    key_makeup_rate]);

    // function to calculate key makeup prep on change
    useEffect(() => {
        const addKeymakprep = () => {
        setKeymakprepTotal(parseFloat(key_mak_qty_prep || 0) * 
        parseFloat(key_mak_uno_prep || 0) * 
        parseFloat(key_mak_rt_prep || 0))
        }
        const timer = setTimeout(() => {
            addKeymakprep();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [key_mak_qty_prep, key_mak_uno_prep, key_mak_rt_prep]);

    // function to calculate key makeup wrap on change
    useEffect(() => {
        const addKeymakwrap = () => {
        setKeymakwrapTotal(parseFloat(key_mak_qty_wrap || 0) * 
        parseFloat(key_mak_uno_wrap || 0) * 
        parseFloat(key_mak_rt_wrap || 0))
        }
        const timer = setTimeout(() => {
            addKeymakwrap();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [key_mak_qty_wrap, key_mak_uno_wrap, key_mak_rt_wrap]);

    // function to calculate key makeup all on change
    useEffect(() => {
        const addKeymakall = () => {
        setKeymakallTotal(parseFloat(keymakeupTotal || 0) +
        parseFloat(keymakprepTotal || 0) +
        parseFloat(keymakwrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addKeymakall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [keymakeupTotal, keymakprepTotal, keymakwrapTotal]);

    // makeup artist
    // function to calculate makeup artist shoot on change
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
      // eslint-disable-next-line
  }, [makeup_artist_quantity, makeup_artist_units_number,
    makeup_artist_rate]);

    // function to calculate makeup artist prep on change
    useEffect(() => {
        const addMakartprep = () => {
        setMakartprepTotal(parseFloat(mak_art_qty_prep || 0) * 
        parseFloat(mak_art_uno_prep || 0) * 
        parseFloat(mak_art_rt_prep || 0))
        }
        const timer = setTimeout(() => {
            addMakartprep();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [mak_art_qty_prep, mak_art_uno_prep, mak_art_rt_prep]);

    // function to calculate makeup artist wrap on change
    useEffect(() => {
        const addMakartwrap = () => {
        setMakartwrapTotal(parseFloat(mak_art_qty_wrap || 0) * 
        parseFloat(mak_art_uno_wrap || 0) * 
        parseFloat(mak_art_rt_wrap || 0))
        }
        const timer = setTimeout(() => {
            addMakartwrap();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [mak_art_qty_wrap, mak_art_uno_wrap, mak_art_rt_wrap]);

    // function to calculate makeup artist all on change
    useEffect(() => {
        const addMakartall = () => {
        setMakartallTotal(parseFloat(makeupartistTotal || 0) +
        parseFloat(makartprepTotal || 0) +
        parseFloat(makartwrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addMakartall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [makeupartistTotal, makartprepTotal, makartwrapTotal]);

    // key hairstylist
    // function to calculate key hairstylist shoot on change
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
      // eslint-disable-next-line
  }, [key_hairstylist_quantity, key_hairstylist_units_number,
    key_hairstylist_rate]);

    // function to calculate key hairstylist prep on change
    useEffect(() => {
        const addKeyhaiprep = () => {
        setKeyhairprepTotal(parseFloat(key_hair_qty_prep || 0) * 
        parseFloat(key_hair_uno_prep || 0) * 
        parseFloat(key_hair_rt_prep || 0))
        }
        const timer = setTimeout(() => {
            addKeyhaiprep();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [key_hair_qty_prep, key_hair_uno_prep, key_hair_rt_prep]);

    // function to calculate key hairstylist wrap on change
    useEffect(() => {
        const addKeyhaiwrap = () => {
        setKeyhairwrapTotal(parseFloat(key_hair_qty_wrap || 0) * 
        parseFloat(key_hair_uno_wrap || 0) * 
        parseFloat(key_hair_rt_wrap || 0))
        }
        const timer = setTimeout(() => {
            addKeyhaiwrap();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [key_hair_qty_wrap, key_hair_uno_wrap, key_hair_rt_wrap]);

    // function to calculate key hairstylist all on change
    useEffect(() => {
        const addKeyhaiall = () => {
        setKeyhairallTotal(parseFloat(keyhairstylistTotal || 0) +
        parseFloat(keyhairprepTotal || 0) +
        parseFloat(keyhairwrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addKeyhaiall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [keyhairstylistTotal, keyhairprepTotal, keyhairwrapTotal]);

    // hairdresser
    // function to calculate hairdresser shoot on change
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
      // eslint-disable-next-line
  }, [hairdresser_quantity, hairdresser_units_number,
    hairdresser_rate]);

    // function to calculate hairdresser prep on change
    useEffect(() => {
        const addHairdrprep = () => {
        setHairprepTotal(parseFloat(hair_qty_prep || 0) * 
        parseFloat(hair_uno_prep || 0) * 
        parseFloat(hair_rt_prep || 0))
        }
        const timer = setTimeout(() => {
            addHairdrprep();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [hair_qty_prep, hair_uno_prep, hair_rt_prep]);

    // function to calculate hairdresser wrap on change
    useEffect(() => {
        const addHairdrwrap = () => {
        setHairwrapTotal(parseFloat(hair_qty_wrap || 0) * 
        parseFloat(hair_uno_wrap || 0) * 
        parseFloat(hair_rt_wrap || 0))
        }
        const timer = setTimeout(() => {
            addHairdrwrap();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [hair_qty_wrap, hair_uno_wrap, hair_rt_wrap]);

    // function to calculate hairdresser all on change
    useEffect(() => {
        const addHairdrall = () => {
        setHairallTotal(parseFloat(hairdresserTotal || 0) +
        parseFloat(hairprepTotal || 0) +
        parseFloat(hairwrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addHairdrall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [hairdresserTotal, hairprepTotal, hairwrapTotal]);

    // hair makeup dailies
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
      // eslint-disable-next-line
  }, [hair_makeup_dailies_quantity, hair_makeup_dailies_units_number,
    hair_makeup_dailies_rate]);

    // hair/makeup assistants
    // function to calculate hair/makeup assistants shoot on change
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
      // eslint-disable-next-line
  }, [other_makeup_labour_quantity, other_makeup_labour_units_number,
    other_makeup_labour_rate]);

    // function to calculate hair/makeup assistants prep on change
    useEffect(() => {
        const addOthmakprep = () => {
        setOthmakprepTotal(parseFloat(oth_mak_qty_prep || 0) * 
        parseFloat(oth_mak_uno_prep || 0) * 
        parseFloat(oth_mak_rt_prep || 0))
        }
        const timer = setTimeout(() => {
            addOthmakprep();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [oth_mak_qty_prep, oth_mak_uno_prep, oth_mak_rt_prep]);

    // function to calculate hair/makeup assistants wrap on change
    useEffect(() => {
        const addOthmakwrap = () => {
        setOthmakwrapTotal(parseFloat(oth_mak_qty_wrap || 0) * 
        parseFloat(oth_mak_uno_wrap || 0) * 
        parseFloat(oth_mak_rt_wrap || 0))
        }
        const timer = setTimeout(() => {
            addOthmakwrap();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [oth_mak_qty_wrap, oth_mak_uno_wrap, oth_mak_rt_wrap]);

    // function to calculate hair/makeup assistants all on change
    useEffect(() => {
        const addOthmakall = () => {
        setOthmakallTotal(parseFloat(othermakeuplabourTotal || 0) +
        parseFloat(othmakprepTotal || 0) +
        parseFloat(othmakwrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addOthmakall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [othermakeuplabourTotal, othmakprepTotal, othmakwrapTotal]);

    // sfx makeup
    // function to calculate sfx makeup shoot on change
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
      // eslint-disable-next-line
  }, [sfx_makeup_quantity, sfx_makeup_units_number,
    sfx_makeup_rate]);

    // function to calculate sfx makeup prep on change
    useEffect(() => {
        const addSfxmakprep = () => {
        setSfxmakprepTotal(parseFloat(sfx_mak_qty_prep || 0) * 
        parseFloat(sfx_mak_uno_prep || 0) * 
        parseFloat(sfx_mak_rt_prep || 0))
        }
        const timer = setTimeout(() => {
            addSfxmakprep();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [sfx_mak_qty_prep, sfx_mak_uno_prep, sfx_mak_rt_prep]);

    // function to calculate sfx makeup wrap on change
    useEffect(() => {
        const addSfxmakwrap = () => {
        setSfxmakwrapTotal(parseFloat(sfx_mak_qty_wrap || 0) * 
        parseFloat(sfx_mak_uno_wrap || 0) * 
        parseFloat(sfx_mak_rt_wrap || 0))
        }
        const timer = setTimeout(() => {
            addSfxmakwrap();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [sfx_mak_qty_wrap, sfx_mak_uno_wrap, sfx_mak_rt_wrap]);

    // function to calculate sfx makeup all on change
    useEffect(() => {
        const addSfxmakall = () => {
        setSfxmakallTotal(parseFloat(sfxmakeupTotal || 0) +
        parseFloat(sfxmakprepTotal || 0) +
        parseFloat(sfxmakwrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addSfxmakall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [sfxmakeupTotal, sfxmakprepTotal, sfxmakwrapTotal]);

    // makeup trainee
    // function to calculate makeup trainee shoot on change
    useEffect(() => {
        const addMaktrain = () => {
        setMakktrainTotal(parseFloat(mak_train_qty || 0) * 
        parseFloat(mak_train_uno || 0) * 
        parseFloat(mak_train_rt || 0))
        }
        const timer = setTimeout(() => {
            addMaktrain();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [mak_train_qty, mak_train_uno, mak_train_rt]);

    // function to calculate makeup trainee prep on change
    useEffect(() => {
        const addMaktraprep = () => {
        setMakktraprepTotal(parseFloat(mak_train_qty_prep || 0) * 
        parseFloat(mak_train_uno_prep || 0) * 
        parseFloat(mak_train_rt_prep || 0))
        }
        const timer = setTimeout(() => {
            addMaktraprep();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [mak_train_qty_prep, mak_train_uno_prep, mak_train_rt_prep]);

    // function to calculate makeup trainee wrap on change
    useEffect(() => {
        const addMaktrawrap = () => {
        setMakktrawrapTotal(parseFloat(mak_train_qty_wrap || 0) * 
        parseFloat(mak_train_uno_wrap || 0) * 
        parseFloat(mak_train_rt_wrap || 0))
        }
        const timer = setTimeout(() => {
            addMaktrawrap();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [mak_train_qty_wrap, mak_train_uno_wrap, mak_train_rt_wrap]);

    // function to calculate makeup trainee all on change
    useEffect(() => {
        const addMaktraall = () => {
        setMakktraallTotal(parseFloat(maktrainTotal || 0) +
        parseFloat(maktraprepTotal || 0) +
        parseFloat(maktrawrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addMaktraall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [maktrainTotal, maktraprepTotal, maktrawrapTotal]);

    // function to add all makeup Labour on change
    useEffect(() => {
      const addMaklab = () => {
      setMakeuplabourTotal(
      parseFloat(headmakallTotal || 0) +
      parseFloat(keymakallTotal || 0) +
      parseFloat(makartallTotal || 0) +
      parseFloat(keyhairallTotal || 0) +
      parseFloat(hairallTotal || 0) +
      parseFloat(hairmakeupdailiesTotal || 0) +
      parseFloat(othmakallTotal || 0) +
      parseFloat(sfxmakallTotal || 0) +
      parseFloat(maktraallTotal || 0) +
      parseFloat(days6th7th_mak || 0) +
      parseFloat(overtime_mak || 0) +
      parseFloat(holidays_mak || 0) +
      parseFloat(box_rent_mak || 0) +
      parseFloat(other_solo_mak || 0) +
      parseFloat(fringes_taxes_makeup || 0)
      )
      }
      const timer = setTimeout(() => {
        addMaklab();
      }, 1000);

      return () => {
      clearTimeout(timer);
      };
      // eslint-disable-next-line
      }, [headmakallTotal, keymakallTotal, makartallTotal,
        keyhairallTotal, hairallTotal, hairmakeupdailiesTotal,
        othmakallTotal, sfxmakallTotal, maktraallTotal,
        days6th7th_mak, overtime_mak, holidays_mak, box_rent_mak,
        other_solo_mak, fringes_taxes_makeup,]);

  return (
    <div className="mt-5">
    <Row >
    <Col md={1} >
    <p className="mb-2">15.00</p>
    </Col>
    <Col md={9} >
    <p className={ `${styles.BoldBlack} mb-2`}>Makeup & Hair Labour</p>
    </Col>
    <Col md={2}>
    <span className={`${styles.Close }`} 
    onClick={() => setShow(false) } >Close</span>
    </Col>
    </Row>
    {/* TITLES */}
    <Row className={ `${styles.Overview} mb-2 py-1`} >
    <Col md={1} >
    <p className="mb-0">ACCT</p>
    </Col>
    <Col md={5} >
    <p className="mb-0">Description</p>
    </Col>
    <Col md={1} className="text-center" >
    <p className="mb-0">#</p>
    </Col>
    <Col className="text-center" md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} className="text-center" >
    <p className="mb-0">Unit</p>
    </Col>
    <Col md={1} className="text-center" >
    <p className="mb-0">Price</p>
    </Col>
    <Col md={2} className="text-center" >
    <p className="mb-0">Total</p>
    </Col>
    </Row>
    {/* Makeup Dept Head */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>15.10</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Makeup Dept Head</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="makeup_dept_head_quantity" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="makeup_dept_head_quantity"
        value={makeup_dept_head_quantity}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.makeup_dept_head_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="makeup_dept_head_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="makeup_dept_head_units_number"
        value={makeup_dept_head_units_number}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.makeup_dept_head_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="makeup_dept_head_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="makeup_dept_head_units_name"
        value={makeup_dept_head_units_name}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.makeup_dept_head_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="makeup_dept_head_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="makeup_dept_head_rate"
        value={makeup_dept_head_rate}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.makeup_dept_head_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="headmakeupTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="headmakeupTotal"
        value={headmakeupTotal}
        readOnly
            />
    </Form.Group>
    {errors?.headmakeupTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Key Makeup */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>15.20</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Key Makeup</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="key_makeup_quantity" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="key_makeup_quantity"
        value={key_makeup_quantity}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.key_makeup_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="key_makeup_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="key_makeup_units_number"
        value={key_makeup_units_number}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.key_makeup_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="key_makeup_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="key_makeup_units_name"
        value={key_makeup_units_name}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.key_makeup_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="key_makeup_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="key_makeup_rate"
        value={key_makeup_rate}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.key_makeup_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="keymakeupTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="keymakeupTotal"
        value={keymakeupTotal}
        readOnly
            />
    </Form.Group>
    {errors?.keymakeupTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Makeup Artist */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>15.30</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Makeup Artist</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="makeup_artist_quantity" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="makeup_artist_quantity"
        value={makeup_artist_quantity}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.makeup_artist_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="makeup_artist_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="makeup_artist_units_number"
        value={makeup_artist_units_number}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.makeup_artist_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="makeup_artist_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="makeup_artist_units_name"
        value={makeup_artist_units_name}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.makeup_artist_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="makeup_artist_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="makeup_artist_rate"
        value={makeup_artist_rate}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.makeup_artist_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="makeupartistTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="makeupartistTotal"
        value={makeupartistTotal}
        readOnly
            />
    </Form.Group>
    {errors?.makeupartistTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Key Hairstylist */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>15.40</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Key Hairstylist</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="key_hairstylist_quantity" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="key_hairstylist_quantity"
        value={key_hairstylist_quantity}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.key_hairstylist_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="key_hairstylist_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="key_hairstylist_units_number"
        value={key_hairstylist_units_number}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.key_hairstylist_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="key_hairstylist_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="key_hairstylist_units_name"
        value={key_hairstylist_units_name}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.key_hairstylist_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="key_hairstylist_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="key_hairstylist_rate"
        value={key_hairstylist_rate}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.key_hairstylist_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="keyhairstylistTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="keyhairstylistTotal"
        value={keyhairstylistTotal}
        readOnly
            />
    </Form.Group>
    {errors?.keyhairstylistTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Hairdresser */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>15.50</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Hairdresser</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="hairdresser_quantity" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="hairdresser_quantity"
        value={hairdresser_quantity}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.hairdresser_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="hairdresser_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="hairdresser_units_number"
        value={hairdresser_units_number}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.hairdresser_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="hairdresser_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="hairdresser_units_name"
        value={hairdresser_units_name}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.hairdresser_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="hairdresser_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="hairdresser_rate"
        value={hairdresser_rate}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.hairdresser_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="hairdresserTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="hairdresserTotal"
        value={hairdresserTotal}
        readOnly
            />
    </Form.Group>
    {errors?.hairdresserTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Hair Makeup Dailies */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>15.60</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Hair Makeup Dailies</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="hair_makeup_dailies_quantity" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="hair_makeup_dailies_quantity"
        value={hair_makeup_dailies_quantity}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.hair_makeup_dailies_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="hair_makeup_dailies_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="hair_makeup_dailies_units_number"
        value={hair_makeup_dailies_units_number}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.hair_makeup_dailies_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="hair_makeup_dailies_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="hair_makeup_dailies_units_name"
        value={hair_makeup_dailies_units_name}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.hair_makeup_dailies_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="hair_makeup_dailies_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="hair_makeup_dailies_rate"
        value={hair_makeup_dailies_rate}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.hair_makeup_dailies_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="hairmakeupdailiesTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="hairmakeupdailiesTotal"
        value={hairmakeupdailiesTotal}
        readOnly
            />
    </Form.Group>
    {errors?.hairmakeupdailiesTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Other Makeup Labour */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>15.70</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Other Makeup Labour</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_makeup_labour_quantity" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_makeup_labour_quantity"
        value={other_makeup_labour_quantity}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_makeup_labour_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_makeup_labour_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_makeup_labour_units_number"
        value={other_makeup_labour_units_number}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_makeup_labour_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_makeup_labour_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_makeup_labour_units_name"
        value={other_makeup_labour_units_name}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.other_makeup_labour_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_makeup_labour_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_makeup_labour_rate"
        value={other_makeup_labour_rate}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_makeup_labour_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="othermakeuplabourTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="othermakeuplabourTotal"
        value={othermakeuplabourTotal}
        readOnly
            />
    </Form.Group>
    {errors?.othermakeuplabourTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* SFX Makeup */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>15.80</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>SFX Makeup</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="sfx_makeup_quantity" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="sfx_makeup_quantity"
        value={sfx_makeup_quantity}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.sfx_makeup_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="sfx_makeup_units_number" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="sfx_makeup_units_number"
        value={sfx_makeup_units_number}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.sfx_makeup_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="sfx_makeup_units_name" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="sfx_makeup_units_name"
        value={sfx_makeup_units_name}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.sfx_makeup_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="sfx_makeup_rate" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="sfx_makeup_rate"
        value={sfx_makeup_rate}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.sfx_makeup_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="sfxmakeupTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="sfxmakeupTotal"
        value={sfxmakeupTotal}
        readOnly
            />
    </Form.Group>
    {errors?.sfxmakeupTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Fringes and Taxes */}
    <Row>
    <Col md={1} >
    <p className={`${styles.Underline}`}>15.80</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Fringes and Taxes</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} className="text-center" >
    <p className={`${styles.Underline}`}>%</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="fringes_taxes_makeup" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="fringes_taxes_makeup"
        value={fringes_taxes_makeup}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.fringes_taxes_makeup?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Makeup Total */}
    <Row className="mt-3">
    <Col md={1} >
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>MAKEUP TOTAL</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="makeuplabourTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="makeuplabourTotal"
        value={makeuplabourTotal}
        readOnly
            />
    </Form.Group>
    {errors?.makeuplabourTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
  )
}

export default Makeup