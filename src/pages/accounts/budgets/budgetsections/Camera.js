/* Component in the Budget component to edit Makeup */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const Camera = (props) => {
    // eslint-disable-next-line
    const [errors, setErrors] = useState({});

    const {postDataCamera, setPostDataCamera,
           dopTotal, setDopTotal,
           cameraopTotal, setCameraopTotal,
           camac1Total, setCamac1Total,
           camac2Total, setCamac2Total,
           ditTotal, setDitTotal,
           steadicamTotal, setSteadicamTotal,
           campaTotal, setCampaTotal,
           dronepilotTotal, setDronepilotTotal,
           othercamTotal, setOthercamTotal, setShow,
           cameralabourTotal, setCameralabourTotal} = props;
      
    // Camera Labour postData values
    const {dop_qty, dop_uno, dop_una, dop_rt,
      camera_op_qty, camera_op_uno, camera_op_una, camera_op_rt,
      cam_ac1_qty, cam_ac1_uno, cam_ac1_una, cam_ac1_rt,
      cam_ac2_qty, cam_ac2_uno, cam_ac2_una, cam_ac2_rt,
      dit_qty, dit_uno, dit_una, dit_rt,
      steadicam_qty, steadicam_uno, steadicam_una, steadicam_rt,
      cam_pa_qty, cam_pa_uno, cam_pa_una, cam_pa_rt, 
      drone_pilot_qty, drone_pilot_uno, drone_pilot_una, drone_pilot_rt,
      other_cam_qty, other_cam_uno, other_cam_una, other_cam_rt,
    } = postDataCamera;

    // handleChange 
    const handleChange = (event) => {
      setPostDataCamera({
      ...postDataMakeup,
      [event.target.name]: parseFloat(event.target.value || 0 ),
      });
    }; 

    // handleChange Text 
    const handleChangeText = (event) => {
      setPostDataCamera({
      ...postDataCamera,
      [event.target.name]: event.target.value,
      });
    };

    // Calculate Functions
    // function to calculate dop on change
    useEffect(() => {
      const addDop = () => {
      setDopTotal(parseFloat(dop_qty || 0) * 
      parseFloat(dop_uno || 0) * 
      parseFloat(dop_rt || 0))
      }
      const timer = setTimeout(() => {
        addDop();
      }, 2000);

      return () => {
      clearTimeout(timer);
      };
    }, [dop_qty, dop_uno, dop_rt]);

    // function to calculate Camera Operator on change
    useEffect(() => {
      const addCamope = () => {
      setCameraopTotal(parseFloat(camera_op_qty || 0) * 
      parseFloat(camera_op_uno || 0) * 
      parseFloat(camera_op_rt || 0))
      }
      const timer = setTimeout(() => {
        addCamope();
      }, 2000);

      return () => {
      clearTimeout(timer);
      };
    }, [camera_op_qty, camera_op_uno, camera_op_rt]);

    // function to calculate 1st Assistant Camera on change
    useEffect(() => {
      const addCamac1 = () => {
      setCamac1Total(parseFloat(cam_ac1_qty || 0) * 
      parseFloat(cam_ac1_uno || 0) * 
      parseFloat(cam_ac1_rt || 0))
      }
      const timer = setTimeout(() => {
        addCamac1();
      }, 2000);

      return () => {
      clearTimeout(timer);
      };
    }, [cam_ac1_qty, cam_ac1_uno, cam_ac1_rt]);

    // function to calculate 2nd Assistant Camera on change
    useEffect(() => {
      const addCamac2 = () => {
      setCamac2Total(parseFloat(cam_ac2_qty || 0) * 
      parseFloat(cam_ac2_uno || 0) * 
      parseFloat(cam_ac2_rt || 0))
      }
      const timer = setTimeout(() => {
        addCamac2();
      }, 2000);

      return () => {
      clearTimeout(timer);
      };
    }, [cam_ac2_qty, cam_ac2_uno, cam_ac2_rt]);

    // function to calculate DIT on change
    useEffect(() => {
      const addDit = () => {
      setDitTotal(parseFloat(dit_qty || 0) * 
      parseFloat(dit_uno || 0) * 
      parseFloat(dit_rt || 0))
      }
      const timer = setTimeout(() => {
        addDit();
      }, 2000);

      return () => {
      clearTimeout(timer);
      };
    }, [dit_qty, dit_uno, dit_rt]);

    // function to calculate Steadicam on change
    useEffect(() => {
      const addSteady = () => {
      setSteadicamTotal(parseFloat(steadicam_qty || 0) * 
      parseFloat(steadicam_uno || 0) * 
      parseFloat(steadicam_rt || 0))
      }
      const timer = setTimeout(() => {
        addSteady();
      }, 2000);

      return () => {
      clearTimeout(timer);
      };
    }, [steadicam_qty, steadicam_uno, steadicam_rt]);

    // function to calculate Camera PA on change
    useEffect(() => {
      const addCampa = () => {
      setCampaTotal(parseFloat(cam_pa_qty || 0) * 
      parseFloat(cam_pa_uno || 0) * 
      parseFloat(cam_pa_rt || 0))
      }
      const timer = setTimeout(() => {
        addCampa();
      }, 2000);

      return () => {
      clearTimeout(timer);
      };
    }, [cam_pa_qty, cam_pa_uno, cam_pa_rt]);

    // function to calculate Drone Pilot on change
    useEffect(() => {
      const addDropil = () => {
      setDronepilotTotal(parseFloat(drone_pilot_qty || 0) * 
      parseFloat(drone_pilot_uno || 0) * 
      parseFloat(drone_pilot_rt || 0))
      }
      const timer = setTimeout(() => {
        addDropil();
      }, 2000);

      return () => {
      clearTimeout(timer);
      };
    }, [drone_pilot_qty, drone_pilot_uno, drone_pilot_rt]);

    // function to calculate Other Camera on change
    useEffect(() => {
      const addOthcam = () => {
      setOthercamTotal(parseFloat(other_cam_qty || 0) * 
      parseFloat(other_cam_uno || 0) * 
      parseFloat(other_cam_rt || 0))
      }
      const timer = setTimeout(() => {
        addOthcam();
      }, 2000);

      return () => {
      clearTimeout(timer);
      };
    }, [other_cam_qty, other_cam_uno, other_cam_rt]);

    // function to add all Camera Labour on change
    useEffect(() => {
      const addCamlab = () => {
      setCameralabourTotal(
      parseFloat(dopTotal || 0) +
      parseFloat(cameraopTotal || 0) +
      parseFloat(camac1Total || 0) +
      parseFloat(camac2Total || 0) +
      parseFloat(ditTotal || 0) +
      parseFloat(steadicamTotal || 0) +
      parseFloat(campaTotal || 0) +
      parseFloat(dronepilotTotal || 0) +
      parseFloat(othercamTotal || 0)
      )
      }
      const timer = setTimeout(() => {
        addCamlab();
      }, 1000);

      return () => {
      clearTimeout(timer);
      };

      }, [dopTotal, cameraopTotal, camac1Total, camac2Total,
          ditTotal, steadicamTotal, campaTotal, 
          dronepilotTotal, othercamTotal,]);
    
  return (
    <div>Camera</div>
  )
}

export default Camera