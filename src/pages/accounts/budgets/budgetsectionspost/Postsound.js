/* Component in the Budget component to edit Post Sound */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const Postsound = (props) => {
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});

  const {postDataPostSound, setPostDataPostSound,
         desSoundTotal, setDesSoundTotal,
         editorSoundTotal, setEditorSoundTotal,
         editorMusicTotal, setEditorMusicTotal,
         soundEdAssTotal, setSoundEdAssTotal,
         adrSupTotal, setAdrSupTotal,
         folLabTotal, setFolLabTotal, setShow,
         postSoundTotal, setPostSoundTotal,
  } = props;

  const {sound_designer_qty, sound_designer_uno, sound_designer_una, sound_designer_rt,
    editor_sound_qty, editor_sound_uno, editor_sound_una, editor_sound_rt,
    editor_music_qty, editor_music_uno, editor_music_una, editor_music_rt,
    ed_sound_ass_qty, ed_sound_ass_uno, ed_sound_ass_una, ed_sound_ass_rt,
    adr_super_qty, adr_super_uno, adr_super_una, adr_super_rt,
    foley_labour_qty, foley_labour_uno, foley_labour_una, foley_labour_rt,
    sound_edit_rooms, sound_edit_equ, music_edit_equ,
    post_sound_edit_pur, adr, foley, pre_mix, mix, printmaster, transfers_deliverables,
    lossdam_sound, fringes_taxes_post_sound, other_post_sound,
  } = postDataPostSound;

  // handleChange 
  const handleChange = (event) => {
    setPostDataPostSound({
    ...postDataPostSound,
    [event.target.name]: parseFloat(event.target.value || 0 ),
    });
  }; 

  // handleChange Text 
  const handleChangeText = (event) => {
    setPostDataPostSound({
    ...postDataPostSound,
    [event.target.name]: event.target.value,
    });
  };

  // Calculate Functions
  // function to calculate Sound Designer on change
  useEffect(() => {
    const addSoudes = () => {
    setDesSoundTotal(parseFloat(sound_designer_qty || 0) * 
    parseFloat(sound_designer_uno || 0) * 
    parseFloat(sound_designer_rt || 0))
    }
    const timer = setTimeout(() => {
        addSoudes();
    }, 2000);

    return () => {
    clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [sound_designer_qty, sound_designer_uno, sound_designer_rt]);

  // function to calculate Sound Editor on change
  useEffect(() => {
    const addSouedi = () => {
    setEditorSoundTotal(parseFloat(editor_sound_qty || 0) * 
    parseFloat(editor_sound_uno || 0) * 
    parseFloat(editor_sound_rt || 0))
    }
    const timer = setTimeout(() => {
        addSouedi();
    }, 2000);

    return () => {
    clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [editor_sound_qty, editor_sound_uno, editor_sound_rt]);

  // function to calculate Music Editor on change
  useEffect(() => {
    const addMusedi = () => {
    setEditorMusicTotal(parseFloat(editor_music_qty || 0) * 
    parseFloat(editor_music_uno || 0) * 
    parseFloat(editor_music_rt || 0))
    }
    const timer = setTimeout(() => {
        addMusedi();
    }, 2000);

    return () => {
    clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [editor_music_qty, editor_music_uno, editor_music_rt]);

  // function to calculate Music Editor on change
  useEffect(() => {
    const addMusedi = () => {
    setEditorMusicTotal(parseFloat(editor_music_qty || 0) * 
    parseFloat(editor_music_uno || 0) * 
    parseFloat(editor_music_rt || 0))
    }
    const timer = setTimeout(() => {
        addMusedi();
    }, 2000);

    return () => {
    clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [editor_music_qty, editor_music_uno, editor_music_rt]);

  // function to calculate Assistant Sound Editor on change
  useEffect(() => {
    const addAsssouedi = () => {
    setSoundEdAssTotal(parseFloat(ed_sound_ass_qty || 0) * 
    parseFloat(ed_sound_ass_uno || 0) * 
    parseFloat(ed_sound_ass_rt || 0))
    }
    const timer = setTimeout(() => {
        addAsssouedi();
    }, 2000);

    return () => {
    clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [ed_sound_ass_qty, ed_sound_ass_uno, ed_sound_ass_rt]);

  // function to calculate ADR Supervisor on change
  useEffect(() => {
    const addAdrsup = () => {
    setAdrSupTotal(parseFloat(adr_super_qty || 0) * 
    parseFloat(adr_super_uno || 0) * 
    parseFloat(adr_super_rt || 0))
    }
    const timer = setTimeout(() => {
        addAdrsup();
    }, 2000);

    return () => {
    clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [adr_super_qty, adr_super_uno, adr_super_rt]);

  // function to calculate Foley Labour on change
  useEffect(() => {
    const addFollabo = () => {
    setFolLabTotal(parseFloat(foley_labour_qty || 0) * 
    parseFloat(foley_labour_uno || 0) * 
    parseFloat(foley_labour_rt || 0))
    }
    const timer = setTimeout(() => {
        addFollabo();
    }, 2000);

    return () => {
    clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [foley_labour_qty, foley_labour_uno, foley_labour_rt]);

  // function to add all Post Sound on change
  useEffect(() => {
    const AddPostSou = () => {
    setPostSoundTotal(
    parseFloat(desSoundTotal || 0) +
    parseFloat(editorSoundTotal || 0) +
    parseFloat(editorMusicTotal || 0) +
    parseFloat(soundEdAssTotal || 0) +
    parseFloat(adrSupTotal || 0) +
    parseFloat(folLabTotal || 0) +
    parseFloat(sound_edit_rooms || 0) +
    parseFloat(sound_edit_equ || 0) +
    parseFloat(music_edit_equ || 0) +
    parseFloat(post_sound_edit_pur || 0) +
    parseFloat(adr || 0) +
    parseFloat(foley || 0) +
    parseFloat(pre_mix || 0) +
    parseFloat(mix || 0) +
    parseFloat(printmaster || 0) +
    parseFloat(transfers_deliverables || 0) +
    parseFloat(lossdam_sound || 0) +
    parseFloat(fringes_taxes_post_sound || 0) +
    parseFloat(other_post_sound || 0)
    )
    }
    const timer = setTimeout(() => {
        AddPostSou();
    }, 1000);

    return () => {
    clearTimeout(timer);
    };
    // eslint-disable-next-line
    }, [desSoundTotal, editorSoundTotal, editorMusicTotal,
        soundEdAssTotal, adrSupTotal, folLabTotal,
        sound_edit_rooms, sound_edit_equ, music_edit_equ,
        post_sound_edit_pur, adr, foley, pre_mix, mix, printmaster, transfers_deliverables,
        lossdam_sound, fringes_taxes_post_sound, other_post_sound,]);

  return (
    <div className="mt-5">
    <Row >
    <Col md={1} >
    <p className="mb-2">44.00</p>
    </Col>
    <Col md={9} >
    <p className={ `${styles.BoldBlack} mb-2`}>Post Production Sound</p>
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

export default Postsound