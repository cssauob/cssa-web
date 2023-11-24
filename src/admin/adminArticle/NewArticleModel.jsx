import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

const NewArticleModel = ({ show, handleClose, saveArticle }) => {
  const [newArticle, setNewArticle] = useState({ title: '', content: '', author: '', category: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewArticle({ ...newArticle, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveArticle(newArticle);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>New Article</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={newArticle.title}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Content</Form.Label>
            <Form.Control
              as="textarea"
              name="content"
              value={newArticle.content}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Author</Form.Label>
            <Form.Control
              type="text"
              name="author"
              value={newArticle.author}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>category</Form.Label>
            <Form.Control
              type="text"
              name="category"
              value={newArticle.category}
              onChange={handleChange}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button   variant="secondary" onClick={handleClose}>Close</Button>
          <Button   variant="primary" type="submit">Save Article</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};
NewArticleModel.propTypes = {
  show: PropTypes.bool.isRequired,  // 布尔类型，并且是必需的
  handleClose: PropTypes.func.isRequired,  // 函数类型，并且是必需的
  saveArticle: PropTypes.func.isRequired,  // 函数类型，并且是必需的
};
export default NewArticleModel;