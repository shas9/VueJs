<template>
  <v-app>
    <Navbar class = "index"/>
    <Dashboard />
    <Footer />
  </v-app>
</template>

<script>
import { defineComponent } from 'vue';

// Components
import Navbar from '../components/Navbar.vue';
import Dashboard from '../components/Dashboard.vue';
import Footer from '../components/Footer.vue';


export default defineComponent({
  name: 'HomeView',

  components: {
    Navbar,
    Dashboard,
    Footer
  },
});
</script>

<style scoped>
.index {
  z-index: 9999;
}
</style>
