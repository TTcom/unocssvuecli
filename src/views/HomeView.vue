<template>
  <div class="home">
    <div mt-10 text-white bg-red-600 flex flex-row>312</div>
    <div btn></div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>
