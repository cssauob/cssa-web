import { Plus } from 'react-bootstrap-icons'; 
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import NewArticleModel from '../adminArticle/NewArticleModel';
import { getArticleListData,postArticlesData} from '../../components/DataLayer/dataLayerUtilities';
import EditArticleModal from '../adminArticle/EditArticleModal';
import './AdminDashboard.css'
const AdminDashboard = () => {
  const [articles, setArticles] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false); 
  const [selectedArticle, setSelectedArticle] = useState(null); 
  useEffect(() => {
    const fetchData = async () => {
      const data = await getArticleListData();
      setArticles(data);
    };

    fetchData();
  }, []);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const saveNewArticle = async(articleData) => {

    try {
   
        const response = await postArticlesData(articleData);
    
      
        if (response && response.status === 200) {
        
          const newArticle = response.data;
 
     
          setArticles(prevArticles => [...prevArticles, newArticle]);
          
        } else {
         
          console.error('Error saving the article: ', response);
        }
      } catch (error) {
      
        console.error('Error while saving the article: ', error);
      }
  };
  const handleEdit = (articleId) => {
    const articleToEdit = articles.find(article => article.articleId === articleId);
    if (articleToEdit) {
        setSelectedArticle(articleToEdit);
        setShowEditModal(true);
      } else {
        // 处理未找到文章的情况，可能是显示错误或日志记录
        console.error('Article not found:', articleId);
      }
  };
  return (
    <>
      <Button className="btn-positivus"  onClick={handleShowModal}>
        <Plus /> Add Article
      </Button>

      <NewArticleModel
        show={showModal}
        handleClose={handleCloseModal}
        saveArticle={saveNewArticle}
      />
<div id="services" className="d-block pt-md-4">


      <div className="row">
        {articles.map(({title,author,articleId }) => (
          <div className="col-lg-6 col-12" key={articleId}>
          {/* <div className={`row ${itemclass}`}> */}
            <div className ="blight">
              <div className="col-md-6 box">
                 <div>  <span>{title} </span> 
                        <span>{author}</span>
                        <span>{articleId}</span> 
                  
                 </div>
                
                 <Button className="btn-positivus"  onClick={() => handleEdit(articleId)} variant="outline-secondary">
                 Edit
                  </Button>
              </div>
              {/* <div className="col-md-6 text-end"><img src={imgURL} alt={titleone} className="img-fluid img-services big-radius" /></div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
    {selectedArticle && (
        <EditArticleModal
          show={showEditModal}
          onHide={() => setShowEditModal(false)}
          article={selectedArticle}
          setArticles={setArticles}
        />
      )}
    </>
  );
};
export default AdminDashboard;