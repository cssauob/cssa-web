
import { Headings } from '../../components';
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs';
import { getArticleListData} from '../../components/DataLayer/dataLayerUtilities';
import './Services.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Services = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getArticleListData();
      setArticles(data);
    };

    fetchData();
  }, []);

  return (
    <div id="services" className="d-block pt-md-4">
      <Headings title="学联活动" text="这里展出的是最近的学联活动" />

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
                
                 <Link to={`/articles/${articleId}`} className='readmore'>
                  <BsFillArrowUpRightCircleFill /> Learn more
                </Link>
              </div>
              {/* <div className="col-md-6 text-end"><img src={imgURL} alt={titleone} className="img-fluid img-services big-radius" /></div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services