<template>
  <v-app id="home">
    <NavBar />
    <v-container fluid>

    </v-container>
  </v-app>
</template>

<script>
import { defineComponent } from 'vue';

// Components
import NavBar from '../components/NavBar.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    NavBar,
  },
});
</script>

<style scoped>
.v-container{
  padding: 16px 0;
}
</style>