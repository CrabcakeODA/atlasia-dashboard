<template>
  <div id="app">
    <v-app>
      <v-card height="100vh">
        <div class="router">
          <NavBar/>
        </div>
        <div class="router">
          <router-view/>
        </div>
      </v-card>
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

.router {
  float: left;
}
</style>
