import {useEffect,useState}from 'react';
import { useParams,useNavigate,Link } from 'react-router-dom';
import { getArticlesData } from '../../components/DataLayer/dataLayerUtilities';
import { FaArrowLeft } from 'react-icons/fa';
import Breadcrumb from '../Breadcrumb/Breadcrumb.jsx'
const ArticlePage = () => {
  const [article, setArticle] = useState(null);
  const { articleId } = useParams();
  useEffect(() => {
    
    const fetchData = async () => {
      const data = await getArticlesData(articleId);
      console.log(data);
      setArticle(data);
    };
    fetchData();
  }, [articleId]);
  const navigate = useNavigate();

  if (!article || !article.title) {
    return <div>Loading...</div>;
  }


  const goBack = () => {
    navigate(-1); // 导航回前一页
  };
  return (
    <div className="d-block pt-md-4">
           
    <button onClick={goBack} >
  <FaArrowLeft /> Back
</button>
<Breadcrumb />
        <h1>{article.title}</h1>
        <p>{article.author}</p>
        <p>{article.content}</p>
      
    </div>
  );
}
export default ArticlePage;