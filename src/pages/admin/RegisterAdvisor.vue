<template>
  <base-card>
    <h2 class="centerRegisterText">Register as a Sankore Advisor </h2>


    <advisor-form @form-data="savedData">

    </advisor-form>
  </base-card>
  <section>
<!-- <base-card>-->


<!-- </base-card>-->
  </section>
</template>

<script>
import  AdvisorForm from "../../components/advisors/AdvisorForm";
import BaseCard from "@/components/layout/BaseCard";
export default {
  name: "RegisterAdvisor",
  // eslint-disable-next-line vue/no-unused-components
  components: {BaseCard, AdvisorForm},

  methods: {
    savedData(data) {
      console.log(data);
      this.$store.dispatch("advisorNameSpaced/addAdvisor", data);
      this.$router.replace("/advisors");
    }

  }

}
</script>

<style scoped>

base-card{
  height: 45rem;
}

.centerRegisterText{
  text-align: center;
  padding-top: 2rem;
  margin-bottom: 2rem;
  color: #3a0061;
  font-weight: 800;
}

.card[data-v-994703f4] {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 26%);
  /* padding: 1rem; */
  margin: 1rem auto;
  max-width: 48rem;
}

.card[data-v-994703f4] {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 26%);
  /* padding: 1rem; */
  margin: 1rem auto;
  height: 48rem;
}
</style>