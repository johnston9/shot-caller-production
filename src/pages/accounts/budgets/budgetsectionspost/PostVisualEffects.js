/* Component in the Budget component to edit Post Visual Effects */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const PostVisualEffects = (props) => {
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});

  const {postDataPostVFX, setPostDataPostVFX,
  postVfxTotal, setPostVfxTotal, setShow,} = props;

  const {vfx_producer, vfx_supervisor, vfx_coordinator, vfx_post_other_lab,
    vfx_storyboard, vfx_pre_vis_team, vfx_post_vis_team, cyberscanning,
    vfx_rentals, vfx_purchases, vfx_vendor_1, vfx_vendor_2, vfx_vendor_3,
    vfx_vendor_4, vfx_vendor_5, vfx_vendor_6, vfx_vendor_7, vfx_vendor_8,
    vfx_vendor_9, vfx_vendor_10, vfx_vendors_x, vfx_traliv, vfx_expenses,
    miniatures_build, miniatures_shoot, motion_capture, lossdam_vfx,
    box_ren_vfx, fringes_taxes_vfx, other_post_vfx,
  } = postDataPostTitles;

  // handleChange 
  const handleChange = (event) => {
    setPostDataPostVFX({
    ...postDataPostVFX,
    [event.target.name]: parseFloat(event.target.value || 0 ),
    });
  };
  
  // function to add all Visual Effects on change
  useEffect(() => {
    const addPoVisef = () => {
        setPostVfxTotal(
        parseFloat(vfx_producer || 0) +
        parseFloat(vfx_supervisor || 0) +
        parseFloat(vfx_coordinator || 0) +
        parseFloat(vfx_post_other_lab || 0) +
        parseFloat(vfx_storyboard || 0) +
        parseFloat(vfx_pre_vis_team || 0) +
        parseFloat(vfx_post_vis_team || 0) +
        parseFloat(cyberscanning || 0) +
        parseFloat(vfx_rentals || 0) +
        parseFloat(vfx_purchases || 0) +
        parseFloat(vfx_vendor_1 || 0) +
        parseFloat(vfx_vendor_2 || 0) +
        parseFloat(vfx_vendor_3 || 0) +
        parseFloat(vfx_vendor_4 || 0) +
        parseFloat(vfx_vendor_5 || 0) +
        parseFloat(vfx_vendor_6 || 0) +
        parseFloat(vfx_vendor_7 || 0) +
        parseFloat(vfx_vendor_8 || 0) +
        parseFloat(vfx_vendor_9 || 0) +
        parseFloat(vfx_vendor_10 || 0) +
        parseFloat(vfx_vendors_x || 0) +
        parseFloat(miniatures_build || 0) +
        parseFloat(miniatures_shoot || 0) +
        parseFloat(motion_capture || 0) +
        parseFloat(vfx_expenses || 0) +
        parseFloat(vfx_traliv || 0) +
        parseFloat(box_ren_vfx || 0) +
        parseFloat(lossdam_vfx || 0) +
        parseFloat(fringes_taxes_vfx || 0) +
        parseFloat(other_post_vfx || 0)
       )
    }
    const timer = setTimeout(() => {
        addPoVisef();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
   // eslint-disable-next-line
  }, [vfx_producer, vfx_supervisor, vfx_coordinator, vfx_post_other_lab,
    vfx_storyboard, vfx_pre_vis_team, vfx_post_vis_team, cyberscanning,
    vfx_rentals, vfx_purchases, vfx_vendor_1, vfx_vendor_2, vfx_vendor_3,
    vfx_vendor_4, vfx_vendor_5, vfx_vendor_6, vfx_vendor_7, vfx_vendor_8,
    vfx_vendor_9, vfx_vendor_10, vfx_vendors_x, vfx_traliv, vfx_expenses,
    miniatures_build, miniatures_shoot, motion_capture, lossdam_vfx,
    box_ren_vfx, fringes_taxes_vfx, other_post_vfx,]);

  return (
    <div className="mt-5">
    <Row >
    <Col md={1} >
    <p className="mb-2">45.00</p>
    </Col>
    <Col md={9} >
    <p className={ `${styles.BoldBlack} mb-2`}>Visual Effects</p>
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
    <Col md={1} >
    <p className="mb-0">#</p>
    </Col>
    <Col className="px-0 mx-0" md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} >
    <p className="mb-0">Unit</p>
    </Col>
    <Col md={1} >
    <p className="mb-0">Price</p>
    </Col>
    <Col md={2} >
    <p className="mb-0">Total</p>
    </Col>
    </Row>
    </div>
  )
}

export default PostVisualEffects