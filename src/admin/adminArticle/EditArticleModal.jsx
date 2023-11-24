import  { useState, useEffect } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { updateArticleData } from '../../components/DataLayer/dataLayerUtilities';
const EditArticleModal = ({ show, onHide, article, setArticles }) => {
  const [editedArticle, setEditedArticle] = useState(article);

  useEffect(() => {
    setEditedArticle(article);
  }, [article]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedArticle({ ...editedArticle, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updated = await updateArticleData(article.articleId, editedArticle);
      setArticles(prevArticles =>
        prevArticles.map(a => (a.articleId === article.articleId ? updated : a))
      );
      onHide();
    } catch (error) {
      console.error('Error updating article:', error);
    }
  };

  return (
  <Modal show={show} onHide={onHide}>
    <Modal.Header closeButton>
      <Modal.Title>Edit Article</Modal.Title>
    </Modal.Header>
    <Form onSubmit={handleSubmit}>
      <Modal.Body>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={editedArticle.title}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Author</Form.Label>
          <Form.Control
            type="text"
            name="author"
            value={editedArticle.author}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            name="category"
            value={editedArticle.category}
            onChange={handleChange}
          />
        </Form.Group>
          
        <Form.Group>
          <Form.Label>Content</Form.Label>
          <Form.Control
           as="textarea" 
           rows={8} 
            type="text"
            name="content"
            value={editedArticle.content}
            onChange={handleChange}
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Close</Button>
        <Button variant="primary" type="submit">Save Changes</Button>
      </Modal.Footer>
    </Form>
  </Modal>
);
};

EditArticleModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  article: PropTypes.object.isRequired,
  setArticles: PropTypes.func.isRequired
};

export default EditArticleModal;