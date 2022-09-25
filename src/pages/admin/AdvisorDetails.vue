<template>
  <section>
    <base-card class="profileSec">
      <h2>{{ fullName }}</h2>
            <h3>{{description}}</h3>
    </base-card>
  </section>
  <section>
    <base-card>
      <header>
        <h2>Interested ? Reach out now !!</h2>
        <base-button link :to="advisorContactLink"></base-button>
      </header>
      <router-view></router-view>

    </base-card>
  </section>

  <section>
    <base-card>
      <base-badge v-for="area in productCategory" :key="area" :type="area" :title="area">
      </base-badge>
      <p>{{ description }}</p>
    </base-card>

  </section>

</template>

<script>

export default {
  name: "AdvisorDetails",
  // eslint-disable-next-line vue/no-unused-components

  props: ['id'],
  data() {
    return {
      selectedAdvisor: null,
    };
  },
  computed: {
    fullName() {
      return this.selectedAdvisor.firstName + ' ' + this.selectedAdvisor.lastName;
    },
    productCategory() {
      return this.selectedAdvisor.productCategory;
    },
    description() {
      return this.selectedAdvisor.description;
    },
    email() {
      return this.selectedAdvisor.email;
    },


    advisorContactLink() {
      return this.$route.path  + this.id + '/contact' ;
    },

  },
  created() {
    this.selectedAdvisor = this.$store.getters['advisorNameSpaced/advisors'].find(
        (advi) => advi.id === this.id);
  },
};
</script>


<style scoped>























































































































































































































































































































































































































































</style>