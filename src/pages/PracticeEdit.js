import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
  Form,
  FormGroup,
  Button,
} from 'reactstrap';
import practiceData from '../MockData';

import '../styles/PracticeNew.css';

const PracticeEdit = ({ setPractice }) => {
  const { id } = useParams();
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const [updatedPracticeData, setUpdatedPracticeData] = useState([...practiceData]);

  useEffect(() => {
    setModalOpen(true); // Open the modal when the component mounts

    const character = updatedPracticeData.find((item) => item.id === Number(id));

    if (character) {
      setName(character.name);
      setAge(character.age);
      setGender(character.gender);
      setImage(character.image);
      setDescription(character.description);
    }
  }, [id, updatedPracticeData]);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedCharacter = {
      id: Number(id),
      name,
      age,
      gender,
      image,
      description,
    };

    const updatedPractice = updatedPracticeData.map((item) =>
      item.id === Number(id) ? updatedCharacter : item
    );

    setUpdatedPracticeData(updatedPractice);
    setPractice(updatedPractice);
    setModalOpen(false);
  };

  const handleUpdate = () => {
    navigate(`/practiceshow/${id}`);
  };

  const handleCancel = () => {
    navigate(`/practiceshow/${id}`);
  };

  return (
    <Modal isOpen={modalOpen} toggle={toggleModal}>
      <ModalHeader toggle={toggleModal}>Edit Character</ModalHeader>
      <ModalBody>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="age">Age</Label>
            <Input
              type="number"
              name="age"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="gender">Gender</Label>
            <Input
              type="select"
              name="gender"
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="image">Image</Label>
            <Input
              type="text"
              name="image"
              id="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input
              type="textarea"
              name="description"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Button color="primary" type="submit" onClick={handleUpdate}>
              Update
            </Button>
            <Button color="secondary" onClick={handleCancel}>
              Cancel
            </Button>
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter></ModalFooter>
    </Modal>
  );
};

export default PracticeEdit;
