<template>
  <v-app light>
    <t-toolbar></t-toolbar>
    <main>
      <router-view></router-view>
    </main>
    <t-footer></t-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        title: 'Vuetify.js'
      }
    }
  }
</script>
