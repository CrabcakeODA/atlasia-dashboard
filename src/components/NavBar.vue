<template>
    <v-navigation-drawer height="100vh" relative permanent left>
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="http://www.shejiye.com/uploadfile/icon/2017/0203/shejiyeicont3b3nlgyss2.png" />
          </v-list-item-avatar>

          <v-list-item-content>
            <h2>Atlasia</h2>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-list dense>
        <v-list-item
          v-for="navMenuItem in navMenuItems"
          :key="navMenuItem.title"
          @click="goToSection(navMenuItem.link)"
        >
          <v-list-item-icon>
            <v-icon>{{ navMenuItem.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ navMenuItem.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="generalMenuItem in generalMenuItems" :key="generalMenuItem.title">
          <v-list-item-icon>
            <v-icon>{{ generalMenuItem.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ generalMenuItem.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      navMenuItems: [
        { title: "Dashboard", icon: "mdi-view-dashboard-outline", link: "Dashboard" },
        { title: "Properties", icon: "mdi-home-outline", link: "Property" },
        { title: "Tenates", icon: "mdi-account-group-outline", link: "Tenant" },
        { title: "Inbox", icon: "mdi-message-processing-outline", link: "Inbox" }
      ],
      generalMenuItems: [
        { title: "Setting", icon: "mdi-settings-outline" },
        { title: "Logout", icon: "mdi-logout-variant" }
      ]
    };
  },
  methods: {
    goToSection(sectionTitle) {
      this.$router.push({
        name: sectionTitle
      });
    }
  }
};
</script>

<style scoped>
</style>