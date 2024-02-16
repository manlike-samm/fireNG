<template>
  <div class="card">
    <img
      class="image"
      :src="`_nuxt/assets/images/${card.image || 'fe1.jpg'}`"
      alt=""
    />
    <h3 class="header">{{ card.title }}</h3>
    <p class="snippet">
      {{ card.snippet }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["card"],
  methods: {
    getImageSource(image) {
      // Use require in a dynamic context, for example, within a method
      return `_nuxt/assets/images/${image || "fe1.jpg"}`;
    },
  },
  mounted() {
    console.log(this.getImageSource(this.card.image));
  },
};
</script>

<style scoped>
.card {
  width: 31.5%;
  height: 25rem;
  border: none;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
}
.image {
  height: 65%;
  border-radius: 0.5rem;
}
.header {
  font-size: 1.15rem;
  margin-top: 0.4rem;
}
.snippet {
  color: grey;
  font-size: 0.8rem;
}
</style>
