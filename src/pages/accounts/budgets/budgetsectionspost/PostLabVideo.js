/* Component in the Budget component to edit Post Lab/Video */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const PostLabVideo = (props) => {
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});

  const {postDataPostLab, setPostDataPostLab,
  postLabTotal, setPostLabTotal, setShow,} = props;

  const {stock, neg_cutting, color_cor, interpos_neg, prints,
    transfers, other_media_delivery, distribution_copies, 
    storage_post,
  } = postDataPostLab;

  // handleChange 
  const handleChange = (event) => {
    setPostDataPostLab({
    ...postDataPostLab,
    [event.target.name]: parseFloat(event.target.value || 0 ),
    });
  };
  
  // function to add all Post Lab/Video on change
  useEffect(() => {
    const addPoslabvid = () => {
        setPostLabTotal(
        parseFloat(stock || 0) +
        parseFloat(neg_cutting || 0) +
        parseFloat(color_cor || 0) +
        parseFloat(interpos_neg || 0) +
        parseFloat(prints || 0) +
        parseFloat(transfers || 0) +
        parseFloat(other_media_delivery || 0) +
        parseFloat(distribution_copies || 0) +
        parseFloat(storage_post || 0)
       )
    }
    const timer = setTimeout(() => {
        addPoslabvid();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
   // eslint-disable-next-line
  }, [stock, neg_cutting, color_cor, interpos_neg, prints,
    transfers, other_media_delivery, distribution_copies, storage_post,]);

  return (
    <div>PostLabVideo</div>
  )
}

export default PostLabVideo