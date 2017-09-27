<template>
  <v-toolbar fixed>
    <v-toolbar-title v-text="title"></v-toolbar-title>
    <v-spacer></v-spacer>
    <div>
      <v-btn flat
        v-for="(link, i) in links"
       :key="i" :to="link.path"
      >
        {{link.name}}
      </v-btn>
    </div>
  </v-toolbar>
</template>
<script>
  import { routes } from '../../router/'
  export default {
    name: 't-toolbar',
    data () {
      return {
        title: 'Vue app',
        links: routes
      }
    }
  }
</script>
<style>

</style>
