import axios from 'axios';

import { postArticlesData } from './dataLayerUtilities';
import { testURL} from  '../configuration/config_url';
import {jest,describe,it,expect} from 'jest';
jest.mock('axios');

describe('postArticlesData', () => {
  it('should send a post request and receive a response', async () => {
    const mockArticleData = { title: 'Test', content: 'Content' };
    const mockResponse = { data: { success: true } };
    axios.post.mockResolvedValue(mockResponse);

    const response = await postArticlesData(mockArticleData);

    expect(axios.post).toHaveBeenCalledWith(testURL, mockArticleData);
    expect(response).toEqual(mockResponse);
  });
});