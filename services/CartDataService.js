import axios from 'axios';

const cartApiClient = axios.create({
  baseURL: "cartApiClients://localhost:44338/api", // ShoppingCartAPI adresi
  headers: {
    "Content-Type": "application/json"
  }
});
class CartDataService {
    getCart(userId) {
        return cartApiClient.get(`/cart/GetCart/${userId}`)
      }
      updateCart(cartDto) {
        return cartApiClient.post('/cart', cartDto)
      }
      updateCartQuantity(cartDto) {
        return cartApiClient.post('/cart/UpdateCart', cartDto)
      }
      removeCartItem(cartItemId) {
        return cartApiClient.post('/cart/RemoveCart', cartItemId)
      }
      applyCoupon(cartDto) {
        return cartApiClient.post('/cart/ApplyCoupon', cartDto)
      }
      clearCart(userId) {
        return cartApiClient.post('/cart/Checkout2', { cartHeader: { userId } })
      }
      checkout(checkoutHeader) {
        return cartApiClient.post('/cartc/checkout', checkoutHeader)
      }
    }
    
    export default new CartDataService();