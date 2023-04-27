/* Component in the Projects Component to display a Project data */
import React from 'react';
import Card from "react-bootstrap/Card";
import styles from "../../styles/Account.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosRes } from '../../api/axiosDefaults';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { UniDropdown } from '../../components/UniDropDown';
import { useHistory } from 'react-router-dom';

const Project = ({id, name, stripe_id, company, owner, owner_name, profile_id} ) => {
    const currentUser = useCurrentUser();
      const is_owner = currentUser?.username === owner;
      const history = useHistory();

      const handleEdit = () => {
        history.push(`/projects/edit/${id}`);
      };
    
      const handleDelete = async () => {
        try {
          await axiosRes.delete(`/projects/${id}/`);
          history.goBack();
        } catch (err) {
        } 
      };
  return (
    <div>
    <Card className='mb-3' >
            <Card.Body className={`${styles.ProTop} py-3`} >
            <Row className="d-flex align-items-center">
                <Col xs={2}></Col>
                <Col className='text-center' xs={8} >
                <h5 style={{ fontWeight: '700', textTransform: 'capitalize'}} 
                    className='ml-1 ml-md-3'> {name} </h5>         
                </Col>                    
                <Col xs={2} 
                className="d-flex align-items-center justify-content-center" >
                {is_owner && (
                    <UniDropdown
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                />
                ) } 
                </Col>
            </Row>
            </Card.Body>
                {/* end new */}
                <Card.Body className='py-1'  >
                    {company && <p style={{ fontStyle: 'italic' }}
                    className="mb-0 mt-4 pb-0 text-center">{company}</p>}
                    <hr />
                    {id && <Card.Text>Project Id: {id}</Card.Text>}
                    {stripe_id && <Card.Text>Stripe Id: {stripe_id}</Card.Text>}
                    {owner_name && <Card.Text>Account Holder Name: {owner_name}</Card.Text>}
                    {profile_id && <Card.Text>Account Holder Id: {profile_id}</Card.Text>}
                </Card.Body>
                <hr />
                {/* <Row className='mb-2'>
                  <Col xs={12} md={{span: 6, offset: 3}} >
                      {image && <> 
                          <Card.Img src={image} alt="image"
                           className={`px-3 ${styles.Image}`} />
                          </>
                          }
                  </Col>  
              </Row > */}
            </Card>
    </div>
  )
}

export default Project