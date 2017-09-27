<template>
  <div>
    <v-flex v-if="welcomeVisible" my-5 xs10 offset-xs1>
      <v-card class="blue-grey darken-2 white--text">
        <v-card-title primary-title>
          <div class="headline">Welcome to chat</div>
        </v-card-title>
        <v-card-text>
          <div>Please read the rules</div>
          <v-btn
            fab
            absolute
            right bottom
            class="pink white--text"
            @click="welcomeVisible = false">
            <v-icon>close</v-icon>
          </v-btn>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex my-5 xs10 offset-xs1>
      <v-card>
        <v-card-title primary-title>
          <div class="headline">Write a message</div>
        </v-card-title>
        <v-card-text>
          <v-text-field label="Message"></v-text-field>
          <v-btn
            fab
            absolute
            right bottom
            class="green white--text"
          >
            <v-icon>send</v-icon>
          </v-btn>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex my-5 xs10 offset-xs1>
      <v-card>
        <v-card-title primary-title>
          <div class="headline">Incoming messages</div>
        </v-card-title>
        <v-card-text>
          <v-list two-line>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>A message received</v-list-tile-title>
                <v-list-tile-sub-title class="grey--text text--darken-4">Hello people</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
          <v-btn
            fab
            absolute
            right bottom
            class="red white--text"
          >
            <v-icon>delete</v-icon>
          </v-btn>
        </v-card-text>
      </v-card>
    </v-flex>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        welcomeVisible: true
      }
    }
  }
</script>
