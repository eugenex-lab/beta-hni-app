<template>


  <section>
    <base-card class="profileSec">
      <h2 class="positionFullName">{{ fullName }}</h2>
            <h3 class="positionDesc">{{description}}</h3>
      <div class="arrangeBadge">
        <base-badge    class="tag tag-teal"  v-for="area in productCategory" :key="area" :type="area" :title="area">
        </base-badge>
      </div>

    </base-card>
  </section>
  <section>
    <base-card class="otherInfoPOsition">
      <header>
        <h2 class="positionFullName">Interested ? Reach out now !!</h2>

        <div class="arrangeBadge" >

          <a href="mailto:{{email}}" >
            <img class="sendMailPosition" src="/images/iconsMail.png" alt=" " > </a>


          <router-link :to="advisorContactLink">
            <img class="sendMessagePosition" src="/images/iconMessages.png" alt=" " >
          </router-link>

          <base-button class="backButton" onclick="history.back()">Go Back List of Advisor</base-button>


        </div>




<!--        <base-button  link :to="advisorContactLink"  class="myButton">View Details</base-button >-->
        <!--        <base-button link :to="advisorContactLink"></base-button>-->
      </header>
      <router-view></router-view>


    </base-card>

  </section>

</template>

<script>

import BaseButton from "@/components/layout/BaseButton";
export default {
  name: "AdvisorDetails",
  components: {BaseButton},
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
      return this.$route.path   + '/contact' ;
    },

  },
  created() {
    this.selectedAdvisor = this.$store.getters['advisorNameSpaced/advisors'].find(
        (advi) => advi.id === this.id);
  },
};
</script>


<style scoped>

.backButton{
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: #f5a8a8;
  border: 1px solid #3a0061;
  color: #005acb;
  cursor: pointer;
  border-radius: 30px;
  margin-right: -0.5rem;
  display: inline-block;
  /* margin-left: 45rem; */
  top: -2rem;
  right: -10rem;
  position: relative;
}


.arrangeBadge{
  margin-left: 2rem;
}

.positionFullName{
  /*margin-top: 2rem;*/
  padding-top: 1rem;
  text-align: left;
  margin-left: 2rem;

}


.tag {
  border-radius: 50px;
  background: #cccccc;
  border-radius: 10px;
  font-size: 11px;
  font-weight: 800;
  margin: 0.1rem;
  color: #fff;
  padding: 5px 7px;
  text-transform: uppercase;
  cursor: pointer;
  display: inline-block;


}
.tag-teal {
  background-color: #051372;
  color: #ffc903;}
.tag-purple {
  background-color: #5e76bf;
}
.tag-pink {
  background-color: #cd5b9f;
}


.positionDesc{
  text-align: left;
  margin-left: 2rem;
}


.profileSec{
  border-radius: 12px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 26%);
  /* padding: 1rem; */
  margin: 1rem auto;
  max-width: 41rem;
  height: 10rem;
}

.otherInfoPOsition{
  border-radius: 12px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 26%);
  /* padding: 1rem; */
  margin: 1rem auto;
  max-width: 41rem;
  height: 12rem;
}






















































































































































































































































































































































































































































</style>