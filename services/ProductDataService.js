import axios from "axios";

const productApiClient = axios.create({
    baseURL: "https://localhost:44390/api", 
    headers: {
      "Content-Type": "application/json"
    }
  });

class ProductDataService {
    getallProduct() {
      const response =productApiClient.get('/products')
      console.log(response)
        return productApiClient.get('/products')
      }
      getDetailProduct(id) {
        return productApiClient.get('/products/' + id)
      }
      createProduct(product) {
        return productApiClient.post('/products', product)
      }
      updateProduct(product) {
        return productApiClient.put('/products', product)
      }
      deleteProduct(id) {
        return productApiClient.delete('/products/' + id)
      }
    }
    
    export default new ProductDataService();