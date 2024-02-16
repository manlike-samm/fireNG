<template>
  <nav class="bg-neutral-800 px-4 flex justify-between items-center h-[10vh]">
    <NuxtLink
      class="text-2xl mx-4 text-white font-bold hover:text-[25px] transition-all duration-300"
      to="/"
      >fireNG</NuxtLink
    >

    <div class="text-white mx-4" id="navbarSupportedContent">
      <ul class="flex gap-5">
        <li class="hover:text-neutral-500 transition-all duration-300">
          <NuxtLink to="/products" class=""
            >Products <span class="sr-only">(current)</span></NuxtLink
          >
        </li>
        <li class="hover:text-neutral-500 transition-all duration-300">
          <NuxtLink to="/my-items" class=""
            >My Items <span class="sr-only">(current)</span></NuxtLink
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.padding {
  padding: 1.5rem;
  background-color: black;
}
.nav-left {
  margin-left: auto;
}
</style>
