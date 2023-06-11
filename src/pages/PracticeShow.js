import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { useParams, Link, NavLink } from 'react-router-dom';
import practiceData from '../MockData';


import '../styles/PracticeShow.css';

const PracticeShow = () => {
  const { id } = useParams();
  const practice = practiceData.find((item) => item.id === Number(id));

  return (
    <div id='page'>
      {practice ? (
        <div className='practice-container'>
          <Card className='main-card'>
            <CardImg top src={practice.image} alt={practice.name} className='img'/>
            <CardBody>
              <CardTitle className='tit'>{practice.name}</CardTitle>
              <CardSubtitle className='subTit'>{`${practice.age} ${practice.gender}`}</CardSubtitle>
            </CardBody>
          </Card>
          <Card className='description-card'>
            <CardBody>
              <div className='description'>Description: {practice.description}</div>
            </CardBody>
          </Card>
        </div>
      ) : (
        <p>No practice found</p>
      )}
      <Link to='/practiceindex'>
        <Button className='return-button'>Return</Button>
      </Link>
      <NavLink className="edtBtn" to={`/practice/${id}/edit`}>
        <Button>Edit Character</Button>
      </NavLink>
    </div>
  );
};

export default PracticeShow;

//individual profile from carousel 