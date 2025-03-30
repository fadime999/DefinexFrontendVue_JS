import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _31c67194 = () => interopDefault(import('..\\pages\\404.vue' /* webpackChunkName: "pages/404" */))
const _66efe8d0 = () => interopDefault(import('..\\pages\\about-us.vue' /* webpackChunkName: "pages/about-us" */))
const _c3360124 = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _73473930 = () => interopDefault(import('..\\pages\\cart\\index.vue' /* webpackChunkName: "pages/cart/index" */))
const _65376545 = () => interopDefault(import('..\\pages\\coming-soon.vue' /* webpackChunkName: "pages/coming-soon" */))
const _f7c838f6 = () => interopDefault(import('..\\pages\\contact-us\\index.vue' /* webpackChunkName: "pages/contact-us/index" */))
const _a3870416 = () => interopDefault(import('..\\pages\\electronics.vue' /* webpackChunkName: "pages/electronics" */))
const _d9e52bd8 = () => interopDefault(import('..\\pages\\faq.vue' /* webpackChunkName: "pages/faq" */))
const _342bc470 = () => interopDefault(import('..\\pages\\furniture.vue' /* webpackChunkName: "pages/furniture" */))
const _89f61cea = () => interopDefault(import('..\\pages\\grocery.vue' /* webpackChunkName: "pages/grocery" */))
const _ff35a932 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _6949de0c = () => interopDefault(import('..\\pages\\lookbook.vue' /* webpackChunkName: "pages/lookbook" */))
const _27d91544 = () => interopDefault(import('..\\pages\\my-account\\index.vue' /* webpackChunkName: "pages/my-account/index" */))
const _081c6e25 = () => interopDefault(import('..\\pages\\pharmacy.vue' /* webpackChunkName: "pages/pharmacy" */))
const _35e58f09 = () => interopDefault(import('..\\pages\\privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _3b86e015 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _53beb79a = () => interopDefault(import('..\\pages\\shop\\index.vue' /* webpackChunkName: "pages/shop/index" */))
const _6c738fa1 = () => interopDefault(import('..\\pages\\vendor-dashboard\\index.vue' /* webpackChunkName: "pages/vendor-dashboard/index" */))
const _8f74e14a = () => interopDefault(import('..\\pages\\blog\\blog-2.vue' /* webpackChunkName: "pages/blog/blog-2" */))
const _8f58b248 = () => interopDefault(import('..\\pages\\blog\\blog-3.vue' /* webpackChunkName: "pages/blog/blog-3" */))
const _bcc7dd58 = () => interopDefault(import('..\\pages\\blog\\blog-single-2.vue' /* webpackChunkName: "pages/blog/blog-single-2" */))
const _07507a52 = () => interopDefault(import('..\\pages\\cart\\cart-2.vue' /* webpackChunkName: "pages/cart/cart-2" */))
const _07344b50 = () => interopDefault(import('..\\pages\\cart\\cart-3.vue' /* webpackChunkName: "pages/cart/cart-3" */))
const _07181c4e = () => interopDefault(import('..\\pages\\cart\\cart-4.vue' /* webpackChunkName: "pages/cart/cart-4" */))
const _5bf77732 = () => interopDefault(import('..\\pages\\cart\\empty-cart.vue' /* webpackChunkName: "pages/cart/empty-cart" */))
const _4ec45b6d = () => interopDefault(import('..\\pages\\contact-us\\contact-us-2.vue' /* webpackChunkName: "pages/contact-us/contact-us-2" */))
const _06e51e94 = () => interopDefault(import('..\\pages\\my-account\\account-details.vue' /* webpackChunkName: "pages/my-account/account-details" */))
const _89ab9bca = () => interopDefault(import('..\\pages\\my-account\\account-info-edit.vue' /* webpackChunkName: "pages/my-account/account-info-edit" */))
const _a9a0f9d8 = () => interopDefault(import('..\\pages\\my-account\\addresses.vue' /* webpackChunkName: "pages/my-account/addresses" */))
const _6150cc68 = () => interopDefault(import('..\\pages\\my-account\\checkout-1.vue' /* webpackChunkName: "pages/my-account/checkout-1" */))
const _615ee3e9 = () => interopDefault(import('..\\pages\\my-account\\checkout-2.vue' /* webpackChunkName: "pages/my-account/checkout-2" */))
const _6c359957 = () => interopDefault(import('..\\pages\\my-account\\compare.vue' /* webpackChunkName: "pages/my-account/compare" */))
const _88b8f846 = () => interopDefault(import('..\\pages\\my-account\\downloads.vue' /* webpackChunkName: "pages/my-account/downloads" */))
const _7e9ea758 = () => interopDefault(import('..\\pages\\my-account\\order-tracking.vue' /* webpackChunkName: "pages/my-account/order-tracking" */))
const _50faf93a = () => interopDefault(import('..\\pages\\my-account\\orders.vue' /* webpackChunkName: "pages/my-account/orders" */))
const _04c9e4c3 = () => interopDefault(import('..\\pages\\my-account\\wishlist.vue' /* webpackChunkName: "pages/my-account/wishlist" */))
const _32117b90 = () => interopDefault(import('..\\pages\\product\\product-single-2.vue' /* webpackChunkName: "pages/product/product-single-2" */))
const _31f54c8e = () => interopDefault(import('..\\pages\\product\\product-single-3.vue' /* webpackChunkName: "pages/product/product-single-3" */))
const _7209b903 = () => interopDefault(import('..\\pages\\shop\\shop-2.vue' /* webpackChunkName: "pages/shop/shop-2" */))
const _7217d084 = () => interopDefault(import('..\\pages\\shop\\shop-3.vue' /* webpackChunkName: "pages/shop/shop-3" */))
const _7225e805 = () => interopDefault(import('..\\pages\\shop\\shop-4.vue' /* webpackChunkName: "pages/shop/shop-4" */))
const _7233ff86 = () => interopDefault(import('..\\pages\\shop\\shop-5.vue' /* webpackChunkName: "pages/shop/shop-5" */))
const _3fe70e5c = () => interopDefault(import('..\\pages\\vendor-dashboard\\add-product.vue' /* webpackChunkName: "pages/vendor-dashboard/add-product" */))
const _f5835fc6 = () => interopDefault(import('..\\pages\\vendor-dashboard\\order.vue' /* webpackChunkName: "pages/vendor-dashboard/order" */))
const _98732904 = () => interopDefault(import('..\\pages\\vendor-dashboard\\product.vue' /* webpackChunkName: "pages/vendor-dashboard/product" */))
const _17463b38 = () => interopDefault(import('..\\pages\\vendor-dashboard\\profile.vue' /* webpackChunkName: "pages/vendor-dashboard/profile" */))
const _0566145f = () => interopDefault(import('..\\pages\\vendor-dashboard\\setting.vue' /* webpackChunkName: "pages/vendor-dashboard/setting" */))
const _9284ef60 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _c6a343b4 = () => interopDefault(import('..\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _2593571d = () => interopDefault(import('..\\pages\\product\\_id.vue' /* webpackChunkName: "pages/product/_id" */))

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
    component: _31c67194,
    name: "404"
  }, {
    path: "/about-us",
    component: _66efe8d0,
    name: "about-us"
  }, {
    path: "/blog",
    component: _c3360124,
    name: "blog"
  }, {
    path: "/cart",
    component: _73473930,
    name: "cart"
  }, {
    path: "/coming-soon",
    component: _65376545,
    name: "coming-soon"
  }, {
    path: "/contact-us",
    component: _f7c838f6,
    name: "contact-us"
  }, {
    path: "/electronics",
    component: _a3870416,
    name: "electronics"
  }, {
    path: "/faq",
    component: _d9e52bd8,
    name: "faq"
  }, {
    path: "/furniture",
    component: _342bc470,
    name: "furniture"
  }, {
    path: "/grocery",
    component: _89f61cea,
    name: "grocery"
  }, {
    path: "/login",
    component: _ff35a932,
    name: "login"
  }, {
    path: "/lookbook",
    component: _6949de0c,
    name: "lookbook"
  }, {
    path: "/my-account",
    component: _27d91544,
    name: "my-account"
  }, {
    path: "/pharmacy",
    component: _081c6e25,
    name: "pharmacy"
  }, {
    path: "/privacy-policy",
    component: _35e58f09,
    name: "privacy-policy"
  }, {
    path: "/register",
    component: _3b86e015,
    name: "register"
  }, {
    path: "/shop",
    component: _53beb79a,
    name: "shop"
  }, {
    path: "/vendor-dashboard",
    component: _6c738fa1,
    name: "vendor-dashboard"
  }, {
    path: "/blog/blog-2",
    component: _8f74e14a,
    name: "blog-blog-2"
  }, {
    path: "/blog/blog-3",
    component: _8f58b248,
    name: "blog-blog-3"
  }, {
    path: "/blog/blog-single-2",
    component: _bcc7dd58,
    name: "blog-blog-single-2"
  }, {
    path: "/cart/cart-2",
    component: _07507a52,
    name: "cart-cart-2"
  }, {
    path: "/cart/cart-3",
    component: _07344b50,
    name: "cart-cart-3"
  }, {
    path: "/cart/cart-4",
    component: _07181c4e,
    name: "cart-cart-4"
  }, {
    path: "/cart/empty-cart",
    component: _5bf77732,
    name: "cart-empty-cart"
  }, {
    path: "/contact-us/contact-us-2",
    component: _4ec45b6d,
    name: "contact-us-contact-us-2"
  }, {
    path: "/my-account/account-details",
    component: _06e51e94,
    name: "my-account-account-details"
  }, {
    path: "/my-account/account-info-edit",
    component: _89ab9bca,
    name: "my-account-account-info-edit"
  }, {
    path: "/my-account/addresses",
    component: _a9a0f9d8,
    name: "my-account-addresses"
  }, {
    path: "/my-account/checkout-1",
    component: _6150cc68,
    name: "my-account-checkout-1"
  }, {
    path: "/my-account/checkout-2",
    component: _615ee3e9,
    name: "my-account-checkout-2"
  }, {
    path: "/my-account/compare",
    component: _6c359957,
    name: "my-account-compare"
  }, {
    path: "/my-account/downloads",
    component: _88b8f846,
    name: "my-account-downloads"
  }, {
    path: "/my-account/order-tracking",
    component: _7e9ea758,
    name: "my-account-order-tracking"
  }, {
    path: "/my-account/orders",
    component: _50faf93a,
    name: "my-account-orders"
  }, {
    path: "/my-account/wishlist",
    component: _04c9e4c3,
    name: "my-account-wishlist"
  }, {
    path: "/product/product-single-2",
    component: _32117b90,
    name: "product-product-single-2"
  }, {
    path: "/product/product-single-3",
    component: _31f54c8e,
    name: "product-product-single-3"
  }, {
    path: "/shop/shop-2",
    component: _7209b903,
    name: "shop-shop-2"
  }, {
    path: "/shop/shop-3",
    component: _7217d084,
    name: "shop-shop-3"
  }, {
    path: "/shop/shop-4",
    component: _7225e805,
    name: "shop-shop-4"
  }, {
    path: "/shop/shop-5",
    component: _7233ff86,
    name: "shop-shop-5"
  }, {
    path: "/vendor-dashboard/add-product",
    component: _3fe70e5c,
    name: "vendor-dashboard-add-product"
  }, {
    path: "/vendor-dashboard/order",
    component: _f5835fc6,
    name: "vendor-dashboard-order"
  }, {
    path: "/vendor-dashboard/product",
    component: _98732904,
    name: "vendor-dashboard-product"
  }, {
    path: "/vendor-dashboard/profile",
    component: _17463b38,
    name: "vendor-dashboard-profile"
  }, {
    path: "/vendor-dashboard/setting",
    component: _0566145f,
    name: "vendor-dashboard-setting"
  }, {
    path: "/",
    component: _9284ef60,
    name: "index"
  }, {
    path: "/blog/:slug",
    component: _c6a343b4,
    name: "blog-slug"
  }, {
    path: "/product/:id?",
    component: _2593571d,
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
