<template>
<div class="card">
  <slot>
  </slot>
</div>
</template>

<script>
export default {
  name: "BaseCard"
}
</script>

<style scoped>

.card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 26%);
  /* padding: 1rem; */
  margin: 1rem auto;
  max-width: 68rem;
  height: 100rem;
}

.filterSection{
  height: 5rem;
}

base-card {
  margin-left: 3rem;
  margin-right: 3rem;
  max-width: 68rem;
  height: 65rem;
}

</style>