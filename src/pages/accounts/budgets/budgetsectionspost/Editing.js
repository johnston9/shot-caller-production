/* Component in the Budget component to edit Editing */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const Editing = (props) => {
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});

  const {postDataEdit, setPostDataEdit,
         editorTotal, setEditorTotal,
         editorVfxTotal, setEditorVfxTotal,
         editorAssTotal, setEditorAssTotal,
         graderTotal, setGraderTotal, setShow,
         graphicsTotal, setGraphicsTotal,
  editingTotal, setEditingTotal,} = props;

  const {editor_qty, editor_uno, editor_una, editor_rt,
    editor_vfx_qty, editor_vfx_uno, editor_vfx_una, editor_vfx_rt,
    editor_ass_qty, editor_ass_uno, editor_ass_una, editor_ass_rt,
    colorist_grader_qty, colorist_grader_uno, colorist_grader_una, colorist_grader_rt,
    graphics_qty, graphics_uno, graphics_una, graphics_rt,
    edit_rooms, edit_equip, edit_equip_nonlin, online,
    vfx_ed_system, post_edit_pur, lossdam_edit, fringes_taxes_post_edit,
  other_post_edit,} = postDataEdit;

  // handleChange 
  const handleChange = (event) => {
    setPostDataEdit({
    ...postDataEdit,
    [event.target.name]: parseFloat(event.target.value || 0 ),
    });
}; 

  // handleChange Text 
  const handleChangeText = (event) => {
    setPostDataEdit({
    ...postDataEdit,
    [event.target.name]: event.target.value,
    });
  };

  // Calculate Functions
  // function to calculate Editor on change
  useEffect(() => {
    const addEditor = () => {
    setEditorTotal(parseFloat(editor_qty || 0) * 
    parseFloat(editor_uno || 0) * 
    parseFloat(editor_rt || 0))
    }
    const timer = setTimeout(() => {
        addEditor();
    }, 2000);

    return () => {
    clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [editor_qty, editor_uno, editor_rt]);

  // function to calculate VFX Editor on change
  useEffect(() => {
    const addEdivfx = () => {
    setEditorVfxTotal(parseFloat(editor_vfx_qty || 0) * 
    parseFloat(editor_vfx_uno || 0) * 
    parseFloat(editor_vfx_rt || 0))
    }
    const timer = setTimeout(() => {
        addEdivfx();
    }, 2000);

    return () => {
    clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [editor_vfx_qty, editor_vfx_uno, editor_vfx_rt]);

  // function to calculate Assistant Editor on change
  useEffect(() => {
    const addEdiass = () => {
    setEditorAssTotal(parseFloat(editor_ass_qty || 0) * 
    parseFloat(editor_ass_uno || 0) * 
    parseFloat(editor_ass_rt || 0))
    }
    const timer = setTimeout(() => {
        addEdiass();
    }, 2000);

    return () => {
    clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [editor_ass_qty, editor_ass_uno, editor_ass_rt]);

  // function to calculate Grader on change
  useEffect(() => {
    const addGrader = () => {
    setGraderTotal(parseFloat(colorist_grader_qty || 0) * 
    parseFloat(colorist_grader_uno || 0) * 
    parseFloat(colorist_grader_rt || 0))
    }
    const timer = setTimeout(() => {
        addGrader();
    }, 2000);

    return () => {
    clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [colorist_grader_qty, colorist_grader_uno, colorist_grader_rt]);

  // function to calculate Graphics on change
  useEffect(() => {
    const addGraphics = () => {
    setGraphicsTotal(parseFloat(graphics_qty || 0) * 
    parseFloat(graphics_uno || 0) * 
    parseFloat(graphics_rt || 0))
    }
    const timer = setTimeout(() => {
        addGraphics();
    }, 2000);

    return () => {
    clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [graphics_qty, graphics_uno, graphics_rt]);

  // function to add all Editing on change
  useEffect(() => {
    const AddEditing = () => {
    setEditingTotal(
    parseFloat(editorTotal || 0) +
    parseFloat(editorVfxTotal || 0) +
    parseFloat(editorAssTotal || 0) +
    parseFloat(graderTotal || 0) +
    parseFloat(graphicsTotal || 0) +
    parseFloat(edit_rooms || 0) +
    parseFloat(edit_equip || 0) +
    parseFloat(edit_equip_nonlin || 0) +
    parseFloat(online || 0) +
    parseFloat(vfx_ed_system || 0) +
    parseFloat(post_edit_pur || 0) +
    parseFloat(lossdam_edit || 0) +
    parseFloat(fringes_taxes_post_edit || 0) +
    parseFloat(other_post_edit || 0)
    )
    }
    const timer = setTimeout(() => {
        AddEditing();
    }, 1000);

    return () => {
    clearTimeout(timer);
    };
    // eslint-disable-next-line
    }, [editorTotal, editorVfxTotal, editorAssTotal,
        graderTotal, graphicsTotal, other_post_edit,
        edit_rooms, edit_equip, edit_equip_nonlin, online,
        vfx_ed_system, post_edit_pur, lossdam_edit, fringes_taxes_post_edit,]);

  return (
    <div>Editing</div>
  )
}

export default Editing