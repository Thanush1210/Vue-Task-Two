<script setup lang="ts">
import { RouterLink, useRoute } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";

const route = useRoute();
</script>
<template>
  <div>
    <header>
      <div class="wrapper">
        <HelloWorld msg="Age Calculator!" />
      </div>
    </header>

    <nav>
      <RouterLink to="/" class="nav-link">About</RouterLink>
      <RouterLink to="/input" class="nav-link">Input Form</RouterLink>
    </nav>

    <router-view />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

.nav-link {
  margin: 10px;
  font-size: large;
}
</style>
