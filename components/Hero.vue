<template>
  <div
    class="h-[50vh] w-[50vw] m-auto relative flex p-0 items-start justify-between"
  >
    <div class="text-container">
      <h1 class="header">Find your Fire Extinguisher</h1>
      <p class="snippet">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste iusto
        illum quidem asperiores, cum nisi aperiam eius ipsa sapiente odit!
      </p>
      <button class="button btn">Start Looking</button>
    </div>
    <img
      class="image"
      src="~assets/svg/fire-extinguisher.svg"
      alt="fire extinguisher"
    />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.text-container {
  width: 60%;
  margin-top: 4rem;
}

.header {
  font-weight: 900;
  font-size: 2.8rem;
}

.snippet {
  color: grey;
  font-size: 0.9rem;
}

.image {
  width: 16rem;
  margin-top: 4rem;
}

.overlay {
  background: rgba(0, 0, 0, 0);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
}

.button {
  margin-top: 1rem;
  padding: 0.4rem 1rem;
  border-radius: 100rem;
  background-color: rgb(231, 81, 43);
  color: white;
  width: 10rem;
  font-weight: 700;
  transition: 0.5s;
}

.button:hover {
  width: 11rem;
}

@media (max-width: 500px) {
  .Hero {
    height: 40vh;
  }
}
</style>
