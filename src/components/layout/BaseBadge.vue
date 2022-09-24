<template>
  <span class="badge" :class="type">
    {{text}}
  </span>
</template>

<script>
export default {
  name: "BaseBadge",
  props:['type','title'],
  computed: {
    text() {
      return this.title.toUpperCase();
    }
  }
}
</script>

<style scoped>
.badge {
  background-color: #ccc;
  color: #252525;
  border-radius: 30px;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin-right: 0.5rem;
}

.Treasury-Bill{
  background-color: #3d008d;
  color: white;
}

.Bonds {
  background-color: #71008d;
  color: white;
}

.Stocks {
  background-color: #8d006e;
  color: white;
}
.Agriculture{
  background-color: #0BA50D;
  color: white;
}

.Real-Estate{
  background-color: #3ca9a0;
  color: white;
}

.Savings{
  background-color: #efda4e;
  color: white;
}

</style>