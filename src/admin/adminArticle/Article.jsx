import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { postArticlesData } from '../../components/DataLayer/dataLayerUtilities';
import PropTypes from 'prop-types';

function Article({ show, handleClose, article, updateArticleList }) {
    const [formData, setFormData] = useState(article || { title: '', content: '', author: '', tag: '', catalogue: '' });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
      };
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (article) {
        // 更新现有文章
        // ...更新文章的逻辑
      } else {
        // 创建新文章
        await postArticlesData(formData);
        updateArticleList();
        handleClose();
      }
    };
  
    return (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{article ? 'Edit Article' : 'New Article'}</Modal.Title>
          </Modal.Header>
          <Form onSubmit={handleSubmit}>
            <Modal.Body>
              <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Content</Form.Label>
                <Form.Control
                  as="textarea"
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Author</Form.Label>
                <Form.Control
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Tag</Form.Label>
                <Form.Control
                  type="text"
                  name="tag"
                  value={formData.tag}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Catalogue</Form.Label>
                <Form.Control
                  type="text"
                  name="catalogue"
                  value={formData.catalogue}
                  onChange={handleChange}
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit">
                Save Changes
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      );
    }
    Article.propTypes = {
        show: PropTypes.bool.isRequired,
        handleClose: PropTypes.func.isRequired,
        article: PropTypes.shape({
          title: PropTypes.string,
          content: PropTypes.string,
          author: PropTypes.string,
          tag: PropTypes.string,
          catalogue: PropTypes.string,
          // 如果有其他属性也需要在这里添加
        }),
        updateArticleList: PropTypes.func.isRequired,
      };
      Article.defaultProps = {
        article: null, // 如果 'article' 可以是 null 或未定义
      };
    export default Article;