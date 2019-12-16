<template>
  <div id="app">
    <v-app>
      <div class="">
        <div class="">
          <NavBar />
        </div>
        <div class="page-content">
          <router-view />
        </div>
      </div>
    </v-app>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";

export default {
  name: "App",

  components: {
    NavBar
  },

  data: () => ({
    //
  })
};
</script>

<style scoped>
#app {
  font-family: "Avenir";
  font-size: 18px;
  text-align: left;
  color: #2c3e50;
}
#page-content {
  position: absolute;
  float: left;
}
</style>
