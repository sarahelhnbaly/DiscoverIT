<template>
  <div class="main-page">
    <NavbarComponent />
    <SearchComponent />
  </div>
</template>

<script>
import NavbarComponent from "../components/NavbarComponent.vue";
import SearchComponent from "../components/SearchComponent.vue";

export default {
  name: "MainPage",
  components: {
    NavbarComponent,
    SearchComponent
  }
};
</script>

<style scoped>
.main-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: center;
  background-color: #f0f2f5;
}
</style>
