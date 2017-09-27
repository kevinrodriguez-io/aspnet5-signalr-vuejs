<template>
  <v-toolbar class="pink" fixed dark>
    <v-toolbar-title v-text="title"></v-toolbar-title>
    <v-spacer></v-spacer>
    <div>
      <v-btn flat
        v-for="(link, i) in links"
        :key="i"
        :to="link.path"
        exact
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
        title: 'Chat',
        links: routes
      }
    }
  }
</script>
<style>

</style>
