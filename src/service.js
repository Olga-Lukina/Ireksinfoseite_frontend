import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost/api/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  getCategories() {
    return apiClient.get('/categories');
  },
  getProducts() {
    return apiClient.get('/products');
  },
  getProductsInCategory(category_id) {
    return apiClient.get('/products/incategory/' + category_id);
  },
  getProductDetail(id) {
    return apiClient.get('/products/' + id);
  },

  getReviews() {
    return apiClient.get('/reviews');
  },
  addReviews(reviewdata) {
    return apiClient.post('/reviews', reviewdata);
  },
  getQuestions() {
    return apiClient.get('/questions');
  },
};
