<template>

    <base-card class="filterSection">
      <section>
        <advisor-filter @change-filter="setFilter" ></advisor-filter>
      </section>

    </base-card>
    <section>
      <base-card>

        <base-button class="refreshButtonPosition"  mode="outline" >Refresh</base-button>

<!--      <div class="card">-->

        <base-button v-if="!isAdvisor" class="RegisterAdvisor" link to="/registeradvisor">Register as Advisor</base-button>

<!--      </div>-->
      <ul class="centerLIst" v-if="advisorHasClients">
        <!--        <li v-for="advisor in advisorList" :key="advisor.id">-->
        <!--          {{ advisor.firstName }} {{ advisor.lastName }}-->
        <!--          <router-link :to="'/advisors/' + advisor.id">-->
        <!--            <button>View Details</button>-->
        <!--          </router-link>-->
        <!--        </li>-->

        <advisor-item v-for="item in advisorList "
                      :key="item.id"
                      :id="item.id"
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

</template>

<script>
import AdvisorItem from "@/components/advisors/advisorItem";
import BaseCard from "@/components/layout/BaseCard";
import BaseButton from "@/components/layout/BaseButton";
import AdvisorFilter from "../../components/advisors/AdvisorFilter";

export default {
  name: "UserRequest",
  components: {BaseButton, BaseCard, AdvisorItem,AdvisorFilter},
  data(){
    return {
    activeFilter: {
      TreasuryBill: true,
          Bonds: true,
          Stocks: true,
          Agriculture: true,
          RealEstate: true,
          Savings: true
    }
  };
  },
  computed: {
    // advisorList() {
    //   return this.$store.getters["advisorNameSpaced/advisors"]; // returns all advisors in the store
    // },


      isAdvisor() {
         console.log(this.$store.getters['authNameSpaced/isAdvisor']);  // returns true if user is an advisor

        return this.$store.getters["advisorNameSpaced/isAdvisor"]; // returns all advisors in the store

      },


    advisorList() {
      const advisor = this.$store.getters["advisorNameSpaced/advisors"];
      return advisor.filter(advisor => {
        if (this.activeFilter.TreasuryBill && advisor.productCategory.includes('TreasuryBill')) {

          return true;
        }
        if (this.activeFilter.Bonds && advisor.productCategory.includes('Bonds')) {
          return true;
        }
        if (this.activeFilter.Stocks && advisor.productCategory.includes('Stocks')) {
          return true;
        }
        if (this.activeFilter.Agriculture && advisor.productCategory.includes('Agriculture')) {
          return true;
        }
        if (this.activeFilter.RealEstate && advisor.productCategory.includes('RealEstate')) {
          return true;
        }
        if (this.activeFilter.Savings && advisor.productCategory.includes('Savings')) {
          return true;
        }
        return false;
      })
    },

    advisorHasClients() {
      return this.$store.getters["advisorNameSpaced/clientHasAdvisor"];
    }
  },
  methods: {
    setFilter(updatedFilter) {
      this.activeFilter = updatedFilter ;
    }
  }
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
  font-size: 1rem;
  top: 13rem;
  position: absolute;
  right: 8rem;

}

.refreshButtonPosition{
  position: absolute;
  top: 13rem;
  left: 9rem;

}


body{
  background-color: rgba(196, 137, 156, 0.18);
  /*background-color: rgba(203, 45, 96, 0.18);*/
}

.centerLIst{
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
  /* padding-top: 2.5rem; */
  margin-top: 2.5rem;
}



</style>