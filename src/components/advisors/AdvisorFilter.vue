<template>
  <div>
    <h2>View all Advisor</h2>
    <span class="positionFilter">
       <span class="filter-options">
    <input type="checkbox" id="TreasuryBill" checked @change="setFilter"/>
    <label for="TreasuryBill">Treasury Bill</label>
  </span>
    <span class="filter-options">
    <input type="checkbox" id="Bonds" checked @change="setFilter"/>
    <label for="Bonds">Bonds</label>
  </span>
    <span class="filter-options">
    <input type="checkbox" id="Stocks" checked @change="setFilter"/>
    <label for="Stocks">Stocks</label>
  </span>
    <span class="filter-options">
    <input type="checkbox" id="Agriculture" checked @change="setFilter"/>
    <label for="Agriculture">Agriculture</label>
  </span>
    <span class="filter-options">
    <input type="checkbox" id="RealEstate" checked @change="setFilter"/>
    <label for="RealEstate">Real Estate</label>
  </span>
    <span class="filter-options">
    <input type="checkbox" id="Savings" checked @change="setFilter"/>
    <label for="Savings">Savings</label>
  </span>
    </span>

  </div>
</template>

<script>
// import BaseCard from "@/components/layout/BaseCard";

export default {
  name: "CoachFilter",
  emits: ['change-filter'],
  data() {
    return {
      filters: {
        TreasuryBill: true,
        Bonds: true,
        Stocks: true,
        Agriculture: true,
        RealEstate: true,
        Savings: true
      }
    }
  },

  methods: {
    setFilter(event) {
      const filter = event.target.id;
      this.isChecked = event.target.checked;
      const updatedFilter = {
        ...this.filters,
        [filter]: this.isChecked
      };
      this.filters = updatedFilter;
      this.$emit("change-filter", updatedFilter);
    }
  }
}
</script>

<style scoped>

h2 {
  padding-top: 1rem;
  margin: 0.5rem 0;
  display: flex;
  color: #080074;
  justify-content: center;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}

.positionFilter {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}


</style>