import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  // process.env.API_URL
  withCredentials: false,

  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: localStorage.getItem('token') || null,
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
  getProductDetail(slug) {
    return apiClient.get('/products/' + slug);
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
  addQuestions(questiondata) {
    return apiClient.post('/questions', questiondata);
  },
  search(product_name) {
    return apiClient.get('products/search/' + product_name);
  },
  getLocations() {
    return apiClient.get('/locations');
  },
};
