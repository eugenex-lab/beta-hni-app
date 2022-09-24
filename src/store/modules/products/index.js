import {useLoadWealthProducts} from "@/firebase";
// import store from "@/store";
import {computed} from "vue"; //

export default {
  namespaced: true,

  setup(props, context){  // this is a hook

    console.log(context.attrs)

    // Slots (Non-reactive object, equivalent to $slots)
    console.log(context.slots)

    // Emit events (Function, equivalent to $emit)
    console.log(context.emit)

    // Expose public properties (Function)
    console.log(context.expose)
    const store =  useLoadWealthProducts()
    return {
      productStore : computed(()=> store.getters.productStore)
    }
  },

  // state() {
  //   return {
  //     products: this.productStore,
  //
  //   };
  // },
  getters: {
    products(state) {
        return state.productStore;
    },
    cartList(state) {
        return state.cartItems && state.cartItems.length > 0;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },

  created() {
    this.products = useLoadWealthProducts()
    console.log(this.products, "here $$")
  }


}
