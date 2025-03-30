import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _a26af65a = () => interopDefault(import('..\\pages\\404.vue' /* webpackChunkName: "pages/404" */))
const _198db55a = () => interopDefault(import('..\\pages\\about-us.vue' /* webpackChunkName: "pages/about-us" */))
const _46045fea = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _9c3fec66 = () => interopDefault(import('..\\pages\\cart\\index.vue' /* webpackChunkName: "pages/cart/index" */))
const _b85f943c = () => interopDefault(import('..\\pages\\coming-soon.vue' /* webpackChunkName: "pages/coming-soon" */))
const _1be9eb3c = () => interopDefault(import('..\\pages\\contact-us\\index.vue' /* webpackChunkName: "pages/contact-us/index" */))
const _265562dc = () => interopDefault(import('..\\pages\\electronics.vue' /* webpackChunkName: "pages/electronics" */))
const _5abb27b1 = () => interopDefault(import('..\\pages\\faq.vue' /* webpackChunkName: "pages/faq" */))
const _310a184d = () => interopDefault(import('..\\pages\\furniture.vue' /* webpackChunkName: "pages/furniture" */))
const _543098a8 = () => interopDefault(import('..\\pages\\grocery.vue' /* webpackChunkName: "pages/grocery" */))
const _1399f5c4 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _57a44d7d = () => interopDefault(import('..\\pages\\lookbook.vue' /* webpackChunkName: "pages/lookbook" */))
const _d46f87be = () => interopDefault(import('..\\pages\\my-account\\index.vue' /* webpackChunkName: "pages/my-account/index" */))
const _d734aab0 = () => interopDefault(import('..\\pages\\pharmacy.vue' /* webpackChunkName: "pages/pharmacy" */))
const _a1bbc568 = () => interopDefault(import('..\\pages\\privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _705fc6d0 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _db50ef92 = () => interopDefault(import('..\\pages\\shop\\index.vue' /* webpackChunkName: "pages/shop/index" */))
const _42af5cbe = () => interopDefault(import('..\\pages\\vendor-dashboard\\index.vue' /* webpackChunkName: "pages/vendor-dashboard/index" */))
const _4cc6d25e = () => interopDefault(import('..\\pages\\blog\\blog-2.vue' /* webpackChunkName: "pages/blog/blog-2" */))
const _4cd4e9df = () => interopDefault(import('..\\pages\\blog\\blog-3.vue' /* webpackChunkName: "pages/blog/blog-3" */))
const _505cf4f1 = () => interopDefault(import('..\\pages\\blog\\blog-single-2.vue' /* webpackChunkName: "pages/blog/blog-single-2" */))
const _de4df44c = () => interopDefault(import('..\\pages\\cart\\cart-2.vue' /* webpackChunkName: "pages/cart/cart-2" */))
const _de31c54a = () => interopDefault(import('..\\pages\\cart\\cart-3.vue' /* webpackChunkName: "pages/cart/cart-3" */))
const _de159648 = () => interopDefault(import('..\\pages\\cart\\cart-4.vue' /* webpackChunkName: "pages/cart/cart-4" */))
const _784980b5 = () => interopDefault(import('..\\pages\\cart\\empty-cart.vue' /* webpackChunkName: "pages/cart/empty-cart" */))
const _400231f0 = () => interopDefault(import('..\\pages\\contact-us\\contact-us-2.vue' /* webpackChunkName: "pages/contact-us/contact-us-2" */))
const _dbe9d59e = () => interopDefault(import('..\\pages\\my-account\\account-details.vue' /* webpackChunkName: "pages/my-account/account-details" */))
const _14acf578 = () => interopDefault(import('..\\pages\\my-account\\account-info-edit.vue' /* webpackChunkName: "pages/my-account/account-info-edit" */))
const _a574191e = () => interopDefault(import('..\\pages\\my-account\\addresses.vue' /* webpackChunkName: "pages/my-account/addresses" */))
const _bbef30aa = () => interopDefault(import('..\\pages\\my-account\\checkout-1.vue' /* webpackChunkName: "pages/my-account/checkout-1" */))
const _bbd301a8 = () => interopDefault(import('..\\pages\\my-account\\checkout-2.vue' /* webpackChunkName: "pages/my-account/checkout-2" */))
const _1af67cf4 = () => interopDefault(import('..\\pages\\my-account\\compare.vue' /* webpackChunkName: "pages/my-account/compare" */))
const _848c178c = () => interopDefault(import('..\\pages\\my-account\\downloads.vue' /* webpackChunkName: "pages/my-account/downloads" */))
const _59d2ee17 = () => interopDefault(import('..\\pages\\my-account\\order-tracking.vue' /* webpackChunkName: "pages/my-account/order-tracking" */))
const _27783826 = () => interopDefault(import('..\\pages\\my-account\\orders.vue' /* webpackChunkName: "pages/my-account/orders" */))
const _2e2574c6 = () => interopDefault(import('..\\pages\\my-account\\wishlist.vue' /* webpackChunkName: "pages/my-account/wishlist" */))
const _1d743c15 = () => interopDefault(import('..\\pages\\product\\product-single-2.vue' /* webpackChunkName: "pages/product/product-single-2" */))
const _1d825396 = () => interopDefault(import('..\\pages\\product\\product-single-3.vue' /* webpackChunkName: "pages/product/product-single-3" */))
const _068afc06 = () => interopDefault(import('..\\pages\\shop\\shop-2.vue' /* webpackChunkName: "pages/shop/shop-2" */))
const _06991387 = () => interopDefault(import('..\\pages\\shop\\shop-3.vue' /* webpackChunkName: "pages/shop/shop-3" */))
const _06a72b08 = () => interopDefault(import('..\\pages\\shop\\shop-4.vue' /* webpackChunkName: "pages/shop/shop-4" */))
const _06b54289 = () => interopDefault(import('..\\pages\\shop\\shop-5.vue' /* webpackChunkName: "pages/shop/shop-5" */))
const _398f3c2f = () => interopDefault(import('..\\pages\\vendor-dashboard\\add-product.vue' /* webpackChunkName: "pages/vendor-dashboard/add-product" */))
const _5b7a1d3a = () => interopDefault(import('..\\pages\\vendor-dashboard\\order.vue' /* webpackChunkName: "pages/vendor-dashboard/order" */))
const _2b79354a = () => interopDefault(import('..\\pages\\vendor-dashboard\\product.vue' /* webpackChunkName: "pages/vendor-dashboard/product" */))
const _4dc33515 = () => interopDefault(import('..\\pages\\vendor-dashboard\\profile.vue' /* webpackChunkName: "pages/vendor-dashboard/profile" */))
const _3be30e3c = () => interopDefault(import('..\\pages\\vendor-dashboard\\setting.vue' /* webpackChunkName: "pages/vendor-dashboard/setting" */))
const _49f252ad = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _4971a27a = () => interopDefault(import('..\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _8bd6cbc0 = () => interopDefault(import('..\\pages\\product\\_id.vue' /* webpackChunkName: "pages/product/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/404",
    component: _a26af65a,
    name: "404"
  }, {
    path: "/about-us",
    component: _198db55a,
    name: "about-us"
  }, {
    path: "/blog",
    component: _46045fea,
    name: "blog"
  }, {
    path: "/cart",
    component: _9c3fec66,
    name: "cart"
  }, {
    path: "/coming-soon",
    component: _b85f943c,
    name: "coming-soon"
  }, {
    path: "/contact-us",
    component: _1be9eb3c,
    name: "contact-us"
  }, {
    path: "/electronics",
    component: _265562dc,
    name: "electronics"
  }, {
    path: "/faq",
    component: _5abb27b1,
    name: "faq"
  }, {
    path: "/furniture",
    component: _310a184d,
    name: "furniture"
  }, {
    path: "/grocery",
    component: _543098a8,
    name: "grocery"
  }, {
    path: "/login",
    component: _1399f5c4,
    name: "login"
  }, {
    path: "/lookbook",
    component: _57a44d7d,
    name: "lookbook"
  }, {
    path: "/my-account",
    component: _d46f87be,
    name: "my-account"
  }, {
    path: "/pharmacy",
    component: _d734aab0,
    name: "pharmacy"
  }, {
    path: "/privacy-policy",
    component: _a1bbc568,
    name: "privacy-policy"
  }, {
    path: "/register",
    component: _705fc6d0,
    name: "register"
  }, {
    path: "/shop",
    component: _db50ef92,
    name: "shop"
  }, {
    path: "/vendor-dashboard",
    component: _42af5cbe,
    name: "vendor-dashboard"
  }, {
    path: "/blog/blog-2",
    component: _4cc6d25e,
    name: "blog-blog-2"
  }, {
    path: "/blog/blog-3",
    component: _4cd4e9df,
    name: "blog-blog-3"
  }, {
    path: "/blog/blog-single-2",
    component: _505cf4f1,
    name: "blog-blog-single-2"
  }, {
    path: "/cart/cart-2",
    component: _de4df44c,
    name: "cart-cart-2"
  }, {
    path: "/cart/cart-3",
    component: _de31c54a,
    name: "cart-cart-3"
  }, {
    path: "/cart/cart-4",
    component: _de159648,
    name: "cart-cart-4"
  }, {
    path: "/cart/empty-cart",
    component: _784980b5,
    name: "cart-empty-cart"
  }, {
    path: "/contact-us/contact-us-2",
    component: _400231f0,
    name: "contact-us-contact-us-2"
  }, {
    path: "/my-account/account-details",
    component: _dbe9d59e,
    name: "my-account-account-details"
  }, {
    path: "/my-account/account-info-edit",
    component: _14acf578,
    name: "my-account-account-info-edit"
  }, {
    path: "/my-account/addresses",
    component: _a574191e,
    name: "my-account-addresses"
  }, {
    path: "/my-account/checkout-1",
    component: _bbef30aa,
    name: "my-account-checkout-1"
  }, {
    path: "/my-account/checkout-2",
    component: _bbd301a8,
    name: "my-account-checkout-2"
  }, {
    path: "/my-account/compare",
    component: _1af67cf4,
    name: "my-account-compare"
  }, {
    path: "/my-account/downloads",
    component: _848c178c,
    name: "my-account-downloads"
  }, {
    path: "/my-account/order-tracking",
    component: _59d2ee17,
    name: "my-account-order-tracking"
  }, {
    path: "/my-account/orders",
    component: _27783826,
    name: "my-account-orders"
  }, {
    path: "/my-account/wishlist",
    component: _2e2574c6,
    name: "my-account-wishlist"
  }, {
    path: "/product/product-single-2",
    component: _1d743c15,
    name: "product-product-single-2"
  }, {
    path: "/product/product-single-3",
    component: _1d825396,
    name: "product-product-single-3"
  }, {
    path: "/shop/shop-2",
    component: _068afc06,
    name: "shop-shop-2"
  }, {
    path: "/shop/shop-3",
    component: _06991387,
    name: "shop-shop-3"
  }, {
    path: "/shop/shop-4",
    component: _06a72b08,
    name: "shop-shop-4"
  }, {
    path: "/shop/shop-5",
    component: _06b54289,
    name: "shop-shop-5"
  }, {
    path: "/vendor-dashboard/add-product",
    component: _398f3c2f,
    name: "vendor-dashboard-add-product"
  }, {
    path: "/vendor-dashboard/order",
    component: _5b7a1d3a,
    name: "vendor-dashboard-order"
  }, {
    path: "/vendor-dashboard/product",
    component: _2b79354a,
    name: "vendor-dashboard-product"
  }, {
    path: "/vendor-dashboard/profile",
    component: _4dc33515,
    name: "vendor-dashboard-profile"
  }, {
    path: "/vendor-dashboard/setting",
    component: _3be30e3c,
    name: "vendor-dashboard-setting"
  }, {
    path: "/",
    component: _49f252ad,
    name: "index"
  }, {
    path: "/blog/:slug",
    component: _4971a27a,
    name: "blog-slug"
  }, {
    path: "/product/:id?",
    component: _8bd6cbc0,
    name: "product-id"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
