<template>
  <div class="w-[50vw] m-auto mb-16">
    <h4 class="header">
      {{ cardsSection.title }}
    </h4>
    <p class="snippet">
      {{ cardsSection.snippet }}
    </p>
    <div class="cards-container">
      <LargeCard
        v-for="card in cardsSection.cards"
        :key="card.image"
        :card="card"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["cardsSection"],
};
</script>

<style scoped>
.container {
  margin-top: 2rem;
}
.header {
  font-weight: 700;
  font-size: 1.1rem;
  margin-top: 1.1rem;
}
.snippet {
  color: grey;
  margin-bottom: 0.9rem;
  font-size: 0.9em;
}
.cards-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.1rem;
}
</style>
