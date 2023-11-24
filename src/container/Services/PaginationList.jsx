import { useState, useEffect } from 'react';
import { Pagination } from 'react-bootstrap';
import { getArticleListData} from '../../components/DataLayer/dataLayerUtilities';
import { Headings } from '../../components';
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const PaginationList= () => {
  const [allArticles, setAllArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(10); // 每页显示的文章数

  useEffect(() => {
    const fetchData = async () => {
      const articles = await getArticleListData();
      setAllArticles(articles);
    };

    fetchData();
  }, []);

// 计算总页数
const totalPages = Math.ceil(allArticles.length / articlesPerPage);

// 获取当前页的文章
const indexOfLastArticle = currentPage * articlesPerPage;
const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
const currentArticles = allArticles.slice(indexOfFirstArticle, indexOfLastArticle);

// 页码改变时的处理函数
const handlePageChange = (pageNumber) => {
  setCurrentPage(pageNumber);
};

  return (
    <div id="services" className="d-block pt-md-4">
       <Headings title="学联活动" text="这里展出的是最近的学联活动" />
       <div className="row">
    {/* 渲染当前页的文章 */}
    {currentArticles.map(({title,author,articleId }) => (
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
      <Pagination>
      <Pagination.Prev />
        {Array.from({ length: totalPages }, (_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === currentPage}
            onClick={() => handlePageChange(index + 1)}>
            {index + 1}
          </Pagination.Item>
        ))}
         <Pagination.Next />
      </Pagination>
      </div>
  );
};


export default PaginationList;