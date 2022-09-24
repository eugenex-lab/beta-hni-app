<template>
  <div>
    <base-card class="filterSection">
      <section>FILTER</section>

    </base-card>
    <section>
      <base-card>

        <base-button class="refreshButtonPosition"  mode="outline" >Refresh</base-button>

      <div class="card">

        <base-button class="RegisterAdvisor" link to="/registerAdvisor">Register as Advisor</base-button>

      </div>
      <ul v-if="advisorHasClients">
        <!--        <li v-for="advisor in advisorList" :key="advisor.id">-->
        <!--          {{ advisor.firstName }} {{ advisor.lastName }}-->
        <!--          <router-link :to="'/advisors/' + advisor.id">-->
        <!--            <button>View Details</button>-->
        <!--          </router-link>-->
        <!--        </li>-->

        <advisor-item v-for="item in advisorList "
                      :key="item.id"
                      :description="item.description"
                      :firstName="item.firstName"
                      :lastName="item.lastName"
                      :email="item.email"
                      :productCategory="item.productCategory"


        >

        </advisor-item>


      </ul>
      <h3 v-else> No Advisor Record Found</h3>
      </base-card>

    </section>
  </div>
</template>

<script>
import AdvisorItem from "@/components/advisors/advisorItem";
import BaseCard from "@/components/layout/BaseCard";
import BaseButton from "@/components/layout/BaseButton";

export default {
  name: "UserRequest",
  components: {BaseButton, BaseCard, AdvisorItem},
  computed: {
    advisorList() {
      return this.$store.getters["advisorNameSpaced/advisors"];
    },
    advisorHasClients() {
      return this.$store.getters["advisorNameSpaced/clientHasAdvisor"];
    }
  },
}
</script>

<style scoped>

ul {
  margin-left: 31rem;
  margin-left: 31rem;
list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  display: flex;
  /* align-items: baseline; */
  text-align: left;
  align-items: baseline;
  position: absolute;
  margin-left: 3rem;
  margin-right: 3rem;
}

.RegisterAdvisor{

  border-radius: 4px;
padding: 0.5rem;
  background-color: #4CAF50;
  border-radius: 4px;
  /* cursor: pointer; */
  font-size: 1rem;
  top: 1rem;
  margin-left: 53.5rem;
  position: relative;

}

.refreshButtonPosition{
  position: absolute;
  top: 12rem;
  left: 9rem;

}


body{
  background-color: rgba(196, 137, 156, 0.18);
  /*background-color: rgba(203, 45, 96, 0.18);*/
}

</style>