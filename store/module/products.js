import ProductDataService from '../../services/ProductDataService'; 

const state = {
    productslist: [],
    products: [],
    shuffleproducts: [],
    wishlist: [],
    compare: [],
    searchProduct: []
}

// getters 
const getters = {
    getcollectionProduct: (state) => {
        return collection = state.products.filter((product) => {
            return collection === product.collection
        })
    },
    getProductById: (state) => {
        return id => state.products.find((product) => {
            return product.id === +id
        })
    },
    wishlistItems: (state) => {
        return state.wishlist
    },
    compareItems: (state) => {
        return state.compare
    }
}

// mutations 
const mutations = {
    addToWishlist: (state, payload) => {
        const product = state.products.find( item => item.id === payload.id )
        const wishlistItems = state.wishlist.find( item => item.id === payload.id )
        if (wishlistItems) {

        } else {
            state.wishlist.push({
                ...product
            })
        }
    },  
     setProducts: (state, products) => {
        state.products = products;
        state.productslist = products;
    },
    removeWishlistItem: ( state, payload ) => {
        const index = state.wishlist.indexOf(payload)
        state.wishlist.splice(index, 1)
    },
    addToCompare: (state, payload) => {
        const product = state.products.find(item => item.id === payload.id)
        const compareItems = state.compare.find(item => item.id === payload.id)
        if (compareItems) {
        } else {
            state.compare.push({
                ...product
            })
        }
    },
    removeCompareItem: (state, payload) => {
        const index = state.compare.indexOf(payload)
        state.compare.splice(index, 1)
    },
    searchProduct: (state, payload) => {
        payload = payload.toLowerCase()
        state.searchProduct = []
        if (payload.length) {
            state.products.filter((product) => {
                if (product.title.toLowerCase().includes(payload)) {
                    state.searchProduct.push(product)
                }
            })
        }
    },
    shuffleProduct: (state, payload) => {
        state.shuffleproducts = payload
    },
    getallProduct: (state, payload) => {
        state.shuffleproducts = payload
    }
}

// actions 
const actions = {
    async getallProduct({ commit }) {
        try {
            const response = await ProductDataService.getallProduct();
            if (response?.data?.isSuccess && Array.isArray(response.data.result)) {
                commit('setProducts', response.data.result); // Doğru alanı kullan
                
            } else {
                throw new Error("API yanıtı beklenen formatta değil");
            }
        } catch (error) {
            throw new Error("Ürünleri çekerken hata oluştu:", error);
        }
    },
    addToWishlist: (context, payload) => {
        context.commit( 'addToWishlist', payload)
    },
    removeWishlistItem: ( context, payload ) => {
        context.commit( 'removeWishlistItem', payload )
    },
    addToCompare: (context, payload) => {
        context.commit('addToCompare', payload)
    },
    removeCompareItem: (context, payload) => {
        context.commit('removeCompareItem', payload)
    },
    searchProduct: (context, payload) => {
        context.commit('searchProduct', payload)
    },
    shuffleProduct: (context, payload) => {
        context.commit('shuffleProduct', payload)
    }

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}