<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" v-on:click="clearTodo">
      <i />
      Clear All
    </span>
    <i />
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations({
      clearTodo: "clearAllItem"
    })
  }
};
</script>

<style scoped>
.clearAllContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
  margin: 0 auto;
}
.clearAllBtn {
  color: #e20303;
  background: #fff;
  display: block;
}
</style>
