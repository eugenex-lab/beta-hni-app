<template>
  <div class="alignText">
    <div>List of Products</div>
    <ul v-if="fileredProducts">
      <li v-for="prod in fileredProducts" :key="prod.id">
        {{ prod.productName }}
      </li>
    </ul>
    <h2 v-else> No Products </h2>

  </div>
</template>

<script>
export default {
  name: "CartList",

  computed: {
    fileredProducts() {
      return this.$store.getters['productNameSpaced/products'];
    },
    // cartList
  }
}
</script>

<style scoped>

.alignText {
  text-align: center;
}

</style>