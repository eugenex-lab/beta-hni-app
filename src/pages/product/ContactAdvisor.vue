<template>
  <div>
    <section>FILTER</section>
    <section>
      <div class="card">
        <button>Refresh Coach</button>
        <router-link to="/registerAdvisor">Register as Advisor</router-link>
      </div>
      <ul v-if="advisorHasClients">
        <li v-for="advisor in advisorList" :key="advisor.id">
          {{ advisor.firstName }} {{ advisor.lastName }}
          <router-link :to="'/advisors/' + advisor.id">
            <button>View Details</button>
          </router-link>
        </li>
      </ul>
      <h3 v-else> No Advisor Record Found</h3>

    </section>
  </div>
</template>

<script>
export default  {
  name: "ContactAdvisor"
}
</script>

<style scoped>

</style>