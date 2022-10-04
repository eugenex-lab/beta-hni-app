import { createStore } from 'vuex'

import productsModules from "@/store/modules/products/index.js";
import requestsModules from "@/store/modules/requests/index.js";
import advisorModules from "@/store/modules/advisor/index.js";

const store = createStore({

  modules: {
    productNameSpaced: productsModules,
    requestNameSpaced: requestsModules,
    advisorNameSpaced: advisorModules
  },
    state() {
        return {
            userId: 'a4',
        };
    },
    getters: {
        userId(state) {
            return state.userId;
        }
    }
})
;

export default store;