<template>
  <div>
    <h3>
      <h5 class="secret" v-for="secret in secrets" :key="secret.char_id">{{secret.name}}</h5>
      <h4>Hello World</h4>
    </h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      secrets: ""
    };
  },
  mounted() {
  },
  methods: {
    
  }
};
</script>

<style lang="scss" scoped>
div {
  color: inherit;
}
</style>