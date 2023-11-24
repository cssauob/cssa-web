// Import the endpoints.
import { testURL} from  '../configuration/config_url';
// Import the axios Method.
import {getAPICall,postAPICall, putAPICall} from './axiosMethodCalls';
import axios from 'axios';

// Axios Get Call - Get all articles.
export const getArticleListData = async () => {
    try {
        const response = await getAPICall(testURL);
        return response.data;
    }
    catch(error){
        return error.response;
    }
}
//分页
export const getArticleListPageData = async (page = 1, limit = 10) => {
    try {
      const response = await axios.get(`/articles?page=${page}&limit=${limit}`);
      return response.data; // 假设后端返回的数据包含了文章列表和分页信息
    } catch (error) {
      return error.response;
    }
  };
export const getArticlesData = async (articleId) => {
    try {
      const response = await getAPICall(`${testURL}/${articleId}`); // 修改URL以包含文章ID
      return response.data;
    } catch (error) {
      return error.response;
    }
  };

// Axios Post Call - Post article.
export const postArticlesData = async (articleData) => {
  try {
     const response = await postAPICall(testURL, articleData);
     console.log('👉 Returned data:', response);   
  } catch (error) {
     console.log(`😱 Axios request failed: ${error}`);
  }
}

// Axios PUT Call - edit article.
export const updateArticleData = async (articleId, articleData) => {
  try {
    const response = await putAPICall(`${testURL}/${articleId}`,articleData);
    return response.data;
  } catch (error) {
    console.log(`😱 Axios PUT failed: ${error}`);
    throw error;
  }
};