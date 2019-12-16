import Vue from "vue";
import Router from "vue-router";

import Dashboard from "../components/Dashboard.vue";
import Property from "../components/Property.vue";
import Tenant from "../components/Tenant.vue";
import Inbox from "../components/Inbox.vue";
import Setting from "../components/Setting.vue";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard
    },
    {
      path: "/property",
      name: "Property",
      component: Property
    },
    {
      path: "/tenant",
      name: "Tenant",
      component: Tenant
    },
    {
      path: "/inbox",
      name: "Inbox",
      component: Inbox
    },
    {
      path: "/setting",
      name: "Setting",
      component: Setting
    }
  ]
});
